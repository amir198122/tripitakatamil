/**
 * Creates a draft post via WordPress.com REST API (smoke test).
 * Usage: node create-draft-post.mjs
 */
import { readFileSync, existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));

function loadEnv() {
  const p = join(__dirname, ".env");
  if (!existsSync(p)) {
    console.error("Missing scripts/.env — copy env.example to .env.");
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

loadEnv();

const token = process.env.WORDPRESS_COM_ACCESS_TOKEN;
const siteId = process.env.WORDPRESS_COM_SITE_ID;
if (!token || !siteId) {
  console.error("Need WORDPRESS_COM_ACCESS_TOKEN and WORDPRESS_COM_SITE_ID in scripts/.env");
  process.exit(1);
}

const body = new URLSearchParams({
  title: "Tripitakatamil API test",
  content: "<p>Draft created by tripitakatamil-site/scripts/create-draft-post.mjs — delete me.</p>",
  status: "draft",
});

const url = `https://public-api.wordpress.com/rest/v1.1/sites/${encodeURIComponent(siteId)}/posts/new`;
const res = await fetch(url, {
  method: "POST",
  headers: {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/x-www-form-urlencoded",
  },
  body,
});

const data = await res.json().catch(() => ({}));
if (!res.ok) {
  console.error("API error", res.status, data);
  process.exit(1);
}

console.log("Draft post created:", data.URL || data.link || data);
console.log("Post ID:", data.ID);
