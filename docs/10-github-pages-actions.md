# GitHub Pages + Actions (free hosting & auto-deploy)

This repo builds the **Astro** site in [`web/`](../web/) on every push to **`main`** and publishes the static output to the **`gh-pages`** branch using [peaceiris/actions-gh-pages](https://github.com/peaceiris/actions-gh-pages). **GitHub Pages** then serves those files.

## One-time GitHub setup (required)

1. Open the repo → **Settings** → **Pages**.
2. Under **Build and deployment** → **Source**, choose **Deploy from a branch** (not “GitHub Actions” for this workflow).
3. Set **Branch** to **`gh-pages`** and folder **`/ (root)`**, then Save.
4. Push to **`main`** (or re-run the workflow). After the first green run, wait ~1 minute and open:

   `https://amir198122.github.io/tripitakatamil/`

   (Project site = `https://<user>.github.io/<repo>/` — matches [`web/astro.config.mjs`](../web/astro.config.mjs) `site` + `base`.)

### Why we use the `gh-pages` branch

An earlier workflow used GitHub’s **`deploy-pages`** action. That only works if Pages **Source** is set to **GitHub Actions**. On a fresh repo that is often still unset, so the deploy step fails even when the build is green. **Publishing to `gh-pages`** avoids that toggle and is the most reliable default for new repositories.

### Workflow token permissions

If the workflow fails at **Publish to gh-pages** with permission errors, open **Settings → Actions → General → Workflow permissions** and set **Read and write permissions** for the `GITHUB_TOKEN` (needed to push the `gh-pages` branch).

## Automatic deploys

- **Push to `main`** → workflow runs → `gh-pages` is updated → Pages refreshes.
- **Pull requests** → [`.github/workflows/verify-pr.yml`](../.github/workflows/verify-pr.yml) runs `npm run build` only (no deploy).

## Change YouTube without touching layout

Edit [`web/src/data/featured-video.json`](../web/src/data/featured-video.json), commit, push `main`. Done.

## Custom `.com` later

1. Buy the domain at any registrar.
2. Repo **Settings** → **Pages** → **Custom domain** → follow GitHub’s DNS instructions.
3. In [`web/astro.config.mjs`](../web/astro.config.mjs), set `site: "https://yourdomain.com"` and `base: "/"`, then push.

## Troubleshooting

- **Workflow not listed:** ensure YAML is under `.github/workflows/` on the default branch.
- **Pages 404:** confirm **Pages** is set to branch **`gh-pages`** / **root**, and the workflow has run at least once on `main`.
- **Blank CSS or broken links locally:** run `npm run dev` from `web/` — dev server uses the same `base` as production.
