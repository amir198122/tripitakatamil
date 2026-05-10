# Tripitakatamil web project

This repository includes a **deployable WordPress block theme** in [`wp-theme/tripitakatamil`](wp-theme/tripitakatamil) (ZIP install on self-hosted or WordPress.com **Business+**), an **Astro static site** in [`web/`](web/) with **GitHub Actions → GitHub Pages** (free hosting + auto-deploy on push to `main`), plus planning docs, Markdown content, and API helper scripts.

**Budget:** Tripitakatamil chose the **very tight budget** path. Start with [docs/02-domain-and-hosting-checklist.md](docs/02-domain-and-hosting-checklist.md#budget-path) (WordPress.com vs cheap self-hosted), then align [docs/03-developer-brief.md](docs/03-developer-brief.md) and [docs/04-feature-list-and-certain-changes.md](docs/04-feature-list-and-certain-changes.md) with that choice.

**Do not** copy text, images, or layout assets from [keetru.com](https://www.keetru.com/) or any third-party site. Use only your own Tripitakatamil materials and the originals included here.

## Contents

| Path | Purpose |
|------|---------|
| [docs/01-content-and-legal-guidelines.md](docs/01-content-and-legal-guidelines.md) | What you may publish, branding checklist |
| [docs/02-domain-and-hosting-checklist.md](docs/02-domain-and-hosting-checklist.md) | Domain DNS and managed WordPress host criteria |
| [docs/03-developer-brief.md](docs/03-developer-brief.md) | Hand to a developer or agency |
| [docs/04-feature-list-and-certain-changes.md](docs/04-feature-list-and-certain-changes.md) | Features and change requests for estimates |
| [docs/06-wordpress-com-go-live.md](docs/06-wordpress-com-go-live.md) | Why `.env` login is not auto-hosting; manual WordPress.com steps |
| [docs/07-enable-automation-wordpress.md](docs/07-enable-automation-wordpress.md) | OAuth app + token: steps so **you** can run publish scripts locally (AI extends scripts; no passwords in chat) |
| [docs/08-maintain-code-github-vs-alternatives.md](docs/08-maintain-code-github-vs-alternatives.md) | **GitHub Deployments** vs Studio / SFTP / staging — best path for AI-maintained theme code |
| [wp-theme/](wp-theme/) | **Installable block theme** — see [wp-theme/README.md](wp-theme/README.md) |
| [content/](content/) | Draft page copy and snippets for WordPress |
| [content/guides/weekly-youtube-updates.md](content/guides/weekly-youtube-updates.md) | How editors embed YouTube and refresh weekly |
| [docs/10-github-pages-actions.md](docs/10-github-pages-actions.md) | **Free** GitHub Pages + Actions: auto-deploy on push, custom `.com` later |
| [web/](web/) | **Astro static site** — free preview via `npm run dev`; production via CI |

## Next steps for you

1. **Free public site (recommended for zero cost):** enable [GitHub Pages with Actions](docs/10-github-pages-actions.md), then push `main` — live URL `https://amir198122.github.io/tripitakatamil/`. Change the weekly YouTube URL in [`web/src/data/featured-video.json`](web/src/data/featured-video.json).
2. **Optional WordPress theme:** follow [wp-theme/README.md](wp-theme/README.md) (ZIP). On WordPress.com **Free**, use **self-hosted** or **Business** to upload.
3. Replace placeholder Tamil and English copy in `content/` with your final text.
4. Complete the checklists in `docs/02` and `docs/04` with your real domain and priorities.
5. Send `docs/03-developer-brief.md` to shortlisted developers with your completed feature list.
6. To publish on WordPress.com yourself, follow [docs/06-wordpress-com-go-live.md](docs/06-wordpress-com-go-live.md).
7. To use **API tokens** and local scripts (so Cursor can help without your password), follow [docs/07-enable-automation-wordpress.md](docs/07-enable-automation-wordpress.md) and [scripts/README.md](scripts/README.md).
8. For **AI-maintained theme code** on WordPress.com, prefer **GitHub Deployments** — see [docs/08-maintain-code-github-vs-alternatives.md](docs/08-maintain-code-github-vs-alternatives.md).
