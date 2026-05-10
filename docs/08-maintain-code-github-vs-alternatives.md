# Maintaining Tripitakatamil “as code” on WordPress.com

You opened **Me → Developer** on WordPress.com and saw **GitHub Deployments**, **WordPress Studio**, **SFTP/SSH/WP-CLI**, **staging**, etc. Here is how those fit if you want **Cursor / an AI to maintain the codebase** safely and clearly.

---

## Best option for AI-maintained code: **GitHub Deployments**

**Why this is the best default**

- The **source of truth** is a **GitHub repository** (themes, child theme, optional small plugins, block patterns).
- Cursor (or any developer) **edits files, runs tests, opens PRs** — normal software workflow.
- WordPress.com **deploys** from GitHub on a schedule or when you push — no pasting server passwords into chat.
- You can see **exactly what changed** (diffs), roll back, and use **branches** (e.g. `staging` vs `main`) if your plan supports staging + deploy targets.

**What “the code” is here**

- Mostly **theme / child theme** (layout, typography for Tamil, header/footer), **block patterns**, maybe a **tiny custom plugin** for options.
- **Posts and pages** usually stay in the **WordPress editor** (database). You can still automate them via the REST API scripts in `scripts/` if you want; that is separate from GitHub Deployments.
- If you later want **content** in Git (Markdown → site), that is a different architecture (static site or headless); say if you want to explore that.

**What you should verify on WordPress.com**

- Which **plan** includes **GitHub Deployments** (product rules change — check current docs/pricing).
- Connect **one** repo per site (or per environment) per their wizard; use **private** repo if the theme is not meant to be public.

Official direction: start from the **GitHub Deployments** card in Developer Features and follow WordPress.com’s connection flow.

---

## Good companion: **WordPress Studio**

Use Studio to **run the site locally**, try theme changes fast, then **push to GitHub** → deploy. It does not replace GitHub Deployments; it complements it for local development.

---

## Use when needed: **Staging sites**

If your tier offers **staging**, use it so production only updates after you preview the deploy. Pairs well with GitHub (e.g. deploy branch → staging, merge → production) depending on what WordPress.com exposes in their UI.

---

## Usually *not* the first choice for “AI maintains code”: **SFTP / SSH alone**

- Works for emergencies or legacy workflows, but the AI (or anyone) would need **server credentials** — higher risk and worse history than Git.
- Harder to review changes; easy to overwrite the wrong file.
- Prefer **Git push → deploy**; keep SSH/WP-CLI for **you** or a trusted human for ops tasks, not as the primary edit path from Cursor.

---

## **Telegram bot**

Handy for **quick posts or fixes from your phone**, not a substitute for a proper theme/repo workflow for ongoing “maintain the codebase.”

---

## **AI and MCP** (sidebar)

Interesting for experiments (e.g. tools that talk to your site). For **day-to-day theme and plugin maintenance**, **GitHub + Cursor** remains the standard, auditable path.

---

## How this relates to your current `tripitakatamil-site` folder

Right now the repo is mostly **Markdown docs** and **scripts**, not a full **block theme** ready to deploy. Next concrete step:

1. Enable **GitHub Deployments** on the WordPress.com site (per their UI).  
2. Create or connect a GitHub repo whose **root or `theme/`** matches what their deploy expects (follow their template/docs).  
3. Move **Tripitakatamil layout/typography** into that theme (or child theme) as files; I can help generate those files in Cursor once the empty theme scaffold exists.

---

## Short summary

| Goal | Best starting point |
|------|---------------------|
| You want the AI to **maintain site code** safely | **GitHub Deployments** + private GitHub repo + Cursor |
| Local try-before-push | **WordPress Studio** |
| Preview before live | **Staging** (if included) |
| Day-to-day writing / weekly YouTube | **WP Admin** (or your `scripts/` + API token), not necessarily Git |

If you tell me your **WordPress.com plan name** (after you check pricing), I can narrow “is GitHub Deployments included?” to the current product line only in a follow-up note in this doc.
