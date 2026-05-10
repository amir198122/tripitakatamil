import { defineConfig } from "astro/config";

/**
 * GitHub Pages “project site” URL:
 * https://amir198122.github.io/tripitakatamil/
 *
 * When you connect a custom .com on GitHub Pages, change to:
 *   site: "https://yourdomain.com",
 *   base: "/",
 */
const owner = "amir198122";
const repo = "tripitakatamil";

export default defineConfig({
  site: `https://${owner}.github.io`,
  base: `/${repo}`,
  trailingSlash: "always",
  compressHTML: true,
});
