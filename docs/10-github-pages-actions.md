# GitHub Pages + Actions (free hosting & auto-deploy)

This repo builds the **Astro** site in [`web/`](../web/) and deploys the `dist/` output to **GitHub Pages** whenever you push to **`main`**.

## One-time GitHub setup (required — deploy fails without this)

1. Open the repo on GitHub → **Settings** → **Pages**.
2. Under **Build and deployment** → **Source**, choose **GitHub Actions** (not “Deploy from a branch”).
3. Save, then re-run the workflow (**Actions** → failed run → **Re-run all jobs**) or push an empty commit.

If **Source** is left on “Deploy from a branch”, the **Deploy to GitHub Pages** step fails because GitHub is not expecting an Actions-produced artifact.

### First run: `github-pages` environment

The workflow uses the **`github-pages`** environment. If GitHub shows a **pending approval** for that environment, open the run in the Actions tab and **approve** it once.

### After the first successful deploy

When the workflow finishes green, **Settings → Pages** shows the live URL, typically:

`https://amir198122.github.io/tripitakatamil/`

(Project site = `https://<user>.github.io/<repo>/` — matches [`web/astro.config.mjs`](../web/astro.config.mjs) `site` + `base`.)

## Automatic deploys

- **Push to `main`** → **Deploy Astro site to GitHub Pages** workflow runs → site updates (usually 1–3 minutes).
- **Pull requests** → **Verify Astro build** runs `npm run build` only (no deploy), so broken builds do not reach `main`.

## Change YouTube without touching layout

Edit [`web/src/data/featured-video.json`](../web/src/data/featured-video.json), commit, push `main`. Done.

## Custom `.com` later

1. Buy the domain at any registrar.
2. Repo **Settings** → **Pages** → **Custom domain** → follow GitHub’s DNS instructions.
3. In [`web/astro.config.mjs`](../web/astro.config.mjs), set `site: "https://yourdomain.com"` and `base: "/"`, then push.

## Troubleshooting

- **Workflow not listed:** ensure YAML is under `.github/workflows/` on the default branch.
- **Deploy step fails while build is green:** almost always **Pages → Source** is not set to **GitHub Actions** (see top of this doc). Rarely: org policy blocks `GITHUB_TOKEN` **pages** scope — check **Settings → Actions → General → Workflow permissions**.
- **403 / Pages write:** re-check **Settings → Actions → General** → *Workflow permissions* → “Read and write” if your org policy blocks uploads.
- **Blank CSS or broken links locally:** run `npm run dev` from `web/` — dev server uses the same `base` as production.
