/**
 * Lists WordPress.com sites available to the bearer token.
 * Usage: node list-sites.mjs
 */
import { readFileSync, existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
function loadEnv() {
  const p = join(__dirname, ".env");
  if (!existsSync(p)) {
    console.error("Missing scripts/.env — copy env.example to .env and add WORDPRESS_COM_ACCESS_TOKEN.");
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
if (!token) {
  console.error("WORDPRESS_COM_ACCESS_TOKEN is empty in scripts/.env");
  process.exit(1);
}

const res = await fetch("https://public-api.wordpress.com/rest/v1.1/me/sites", {
  headers: { Authorization: `Bearer ${token}` },
});

const text = await res.text();
let data;
try {
  data = JSON.parse(text);
} catch {
  console.error("Non-JSON response:", text.slice(0, 500));
  process.exit(1);
}

if (!res.ok) {
  console.error("API error", res.status, data);
  process.exit(1);
}

const sites = Array.isArray(data.sites) ? data.sites : Object.values(data.sites || {});
console.log("Sites you can access (use ID in WORDPRESS_COM_SITE_ID):\n");
for (const s of sites) {
  console.log(`- ${s.name || s.URL}`);
  console.log(`  ID: ${s.ID}  URL: ${s.URL}\n`);
}
