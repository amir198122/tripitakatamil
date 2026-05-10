# Tripitakatamil — static site (Astro)

Free hosting + previews via **GitHub Actions → GitHub Pages** (see repo root `.github/workflows/`).

## Local dev

```bash
cd web
npm install
npm run dev
```

Open the URL shown (usually `http://localhost:4321/tripitakatamil/` — base path matches GitHub Pages).

## Change the YouTube embed (weekly)

Edit **one file** and push to `main`:

[`src/data/featured-video.json`](src/data/featured-video.json)

```json
{
  "title": "Featured video",
  "youtubeUrl": "https://www.youtube.com/watch?v=YOUR_VIDEO_ID",
  "caption": "Optional caption; **bold** works."
}
```

The pipeline rebuilds and deploys automatically.

## Custom `.com` later

In [`astro.config.mjs`](astro.config.mjs), set:

```js
export default defineConfig({
  site: "https://yourdomain.com",
  base: "/",
});
```

Then attach the domain in **GitHub repo → Settings → Pages → Custom domain**.

## Build

```bash
npm run build
```

Output: `dist/` (uploaded by CI).
