/**
 * Push content/pages/*.md to WordPress.com as pages (REST API).
 * Works on Free tier — no GitHub Deployments required.
 *
 * Usage (from scripts/):
 *   node sync-pages-to-wpcom.mjs           # creates/updates pages as draft
 *   node sync-pages-to-wpcom.mjs --publish # sets status publish
 *   node sync-pages-to-wpcom.mjs --dry-run # log actions only
 */
import { readFileSync, existsSync, readdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join, basename } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));

function loadEnv() {
  const p = join(__dirname, ".env");
  if (!existsSync(p)) {
    console.error("Missing scripts/.env — copy env.example to .env and add token + site ID.");
    process.exit(1);
  }
  const raw = readFileSync(p, "utf8");
  for (const line of raw.split("\n")) {
    const t = line.trim();
    if (!t || t.startsWith("#")) continue;
    const i = t.indexOf("=");
    if (i === -1) continue;
    const k = t.slice(0, i).trim();
    const v = t.slice(i + 1).trim();
    if (!process.env[k]) process.env[k] = v;
  }
}

function escapeHtml(s) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

/** Minimal Markdown → HTML (headings, lists, hr, paragraphs, **bold**) */
function mdToHtml(md) {
  const lines = md.replace(/\r\n/g, "\n").split("\n");
  const out = [];
  let i = 0;
  let inUl = false;

  const closeUl = () => {
    if (inUl) {
      out.push("</ul>");
      inUl = false;
    }
  };

  const formatInline = (raw) => {
    const parts = raw.split(/(\*\*.+?\*\*)/g);
    return parts
      .map((p) => {
        const m = p.match(/^\*\*(.+)\*\*$/);
        if (m) return `<strong>${escapeHtml(m[1])}</strong>`;
        return escapeHtml(p);
      })
      .join("");
  };

  let para = [];

  const flushPara = () => {
    if (para.length) {
      out.push(`<p>${formatInline(para.join(" "))}</p>`);
      para = [];
    }
  };

  while (i < lines.length) {
    const line = lines[i];
    const trimmed = line.trim();

    if (trimmed === "---") {
      flushPara();
      closeUl();
      out.push("<hr />");
      i++;
      continue;
    }

    if (trimmed.startsWith("# ")) {
      flushPara();
      closeUl();
      out.push(`<h1>${formatInline(trimmed.slice(2))}</h1>`);
      i++;
      continue;
    }
    if (trimmed.startsWith("## ")) {
      flushPara();
      closeUl();
      out.push(`<h2>${formatInline(trimmed.slice(3))}</h2>`);
      i++;
      continue;
    }
    if (trimmed.startsWith("### ")) {
      flushPara();
      closeUl();
      out.push(`<h3>${formatInline(trimmed.slice(4))}</h3>`);
      i++;
      continue;
    }

    if (trimmed.startsWith("- ")) {
      flushPara();
      if (!inUl) {
        out.push("<ul>");
        inUl = true;
      }
      out.push(`<li>${formatInline(trimmed.slice(2))}</li>`);
      i++;
      continue;
    }

    if (trimmed === "") {
      flushPara();
      closeUl();
      i++;
      continue;
    }

    closeUl();
    para.push(trimmed);
    i++;
  }

  flushPara();
  closeUl();
  return out.join("\n");
}

function titleFromMarkdown(md, slug) {
  const m = md.match(/^#\s+(.+)$/m);
  if (m) return m[1].replace(/\s+—\s+.*$/, "").trim();
  return slug.charAt(0).toUpperCase() + slug.slice(1);
}

async function wpFetch(path, { method = "GET", body } = {}) {
  const token = process.env.WORDPRESS_COM_ACCESS_TOKEN;
  const siteId = process.env.WORDPRESS_COM_SITE_ID;
  const url = `https://public-api.wordpress.com/rest/v1.1/sites/${encodeURIComponent(siteId)}${path}`;
  const opts = {
    method,
    headers: { Authorization: `Bearer ${token}` },
  };
  if (body) {
    opts.headers["Content-Type"] = "application/x-www-form-urlencoded";
    opts.body = body;
  }
  const res = await fetch(url, opts);
  const text = await res.text();
  let data;
  try {
    data = JSON.parse(text);
  } catch {
    data = { raw: text };
  }
  if (!res.ok) {
    const err = new Error(`WP.com API ${res.status}: ${JSON.stringify(data).slice(0, 800)}`);
    err.status = res.status;
    err.data = data;
    throw err;
  }
  return data;
}

async function listAllPages() {
  const pages = [];
  let offset = 0;
  const number = 100;
  for (;;) {
    const data = await wpFetch(`/pages?number=${number}&offset=${offset}`);
    const batch = data.pages || [];
    pages.push(...batch);
    if (batch.length < number) break;
    offset += number;
  }
  return pages;
}

loadEnv();

const dryRun = process.argv.includes("--dry-run");
const publish = process.argv.includes("--publish");
const status = publish ? "publish" : "draft";

const token = process.env.WORDPRESS_COM_ACCESS_TOKEN;
const siteId = process.env.WORDPRESS_COM_SITE_ID;
if (!token || !siteId) {
  console.error("Need WORDPRESS_COM_ACCESS_TOKEN and WORDPRESS_COM_SITE_ID in scripts/.env");
  process.exit(1);
}

const pagesDir = join(__dirname, "..", "content", "pages");
if (!existsSync(pagesDir)) {
  console.error("Missing folder:", pagesDir);
  process.exit(1);
}

const files = readdirSync(pagesDir).filter((f) => f.endsWith(".md"));
if (!files.length) {
  console.error("No .md files in content/pages");
  process.exit(1);
}

let existing = [];
if (!dryRun) {
  console.log("Fetching existing pages…");
  existing = await listAllPages();
}

const bySlug = new Map(existing.map((p) => [p.slug, p]));

for (const file of files) {
  const slug = basename(file, ".md");
  const md = readFileSync(join(pagesDir, file), "utf8");
  const title = titleFromMarkdown(md, slug);
  const content = mdToHtml(md);

  const body = new URLSearchParams({
    title,
    content,
    slug,
    status,
  });

  const prev = bySlug.get(slug);

  if (dryRun) {
    console.log(`[dry-run] ${prev ? "UPDATE" : "CREATE"} slug=${slug} title=${title} status=${status}`);
    continue;
  }

  try {
    if (prev) {
      await wpFetch(`/pages/${prev.ID}`, { method: "POST", body });
      console.log(`Updated page "${title}" (${slug}) id=${prev.ID} status=${status}`);
    } else {
      const created = await wpFetch("/pages/new", { method: "POST", body });
      bySlug.set(slug, created);
      console.log(`Created page "${title}" (${slug}) id=${created.ID} status=${status}`);
    }
  } catch (e) {
    console.error(`Failed ${slug}:`, e.message);
    process.exitCode = 1;
  }
}

if (dryRun) console.log("\nDry run complete. Run without --dry-run to apply.");
