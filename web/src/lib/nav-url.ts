/** Resolve site-relative paths against Astro `import.meta.env.BASE_URL` (e.g. `/tripitakatamil/`). */
export function withBase(base: string, path: string): string {
  const b = base.endsWith("/") ? base : `${base}/`;
  if (!path || path === "" || path === "/") return b;
  if (path.startsWith("http://") || path.startsWith("https://")) return path;
  if (path.startsWith("#")) return `${b}${path}`;
  const p = path.replace(/^\//, "");
  return `${b}${p}`;
}
