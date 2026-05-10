# Content and legal guidelines — Tripitakatamil

## Purpose

Tripitakatamil is building a **public Tamil publication website** with its own identity. This document keeps publishing safe and consistent.

## Non-negotiable: no unauthorized copying

- Do **not** scrape, mirror, or republish articles, images, PDFs, or branding from **Keetru** or any other publisher without **written permission** and correct **attribution** where the licence requires it.
- “Similar to Keetru” means **reader experience** (latest posts, categories, Tamil typography), **not** their wording or media.

## Original Tripitakatamil assets you should prepare

| Asset | Owner action |
|-------|----------------|
| Organisation name | Use **Tripitakatamil** consistently (see branding section). |
| Logo | Replace `assets/logo-tripitakatamil.svg` with a final logo from a designer if desired; keep SVG or high-resolution PNG for web. |
| Tagline | One line under the logo; edit in `content/site-copy-snippets.md`. |
| About page | Mission, history, contact — your words only. |
| Article body text | All posts must be original or properly licensed. |
| Photos and illustrations | Your camera, commissioned art, or stock with a valid licence. |
| PDFs / e-books | Files you created or have rights to distribute. |
| Embedded YouTube videos | Use **Tripitakatamil’s channel** (or videos you have rights to feature). Embedding follows YouTube’s normal terms; do not imply endorsement of unrelated channels. See [guides/weekly-youtube-updates.md](../content/guides/weekly-youtube-updates.md) for the weekly update workflow. |

## Branding: Tripitakatamil everywhere

Centralize the name so updates are easy after WordPress is installed:

1. **WordPress → Settings → General**: Site Title = `Tripitakatamil` (or full legal name if different).
2. **Theme Customizer**: Logo, site icon (favicon), footer text.
3. **Email “From” name**: Should say Tripitakatamil (via host or SMTP plugin as advised by your developer).
4. **Legal pages**: Privacy policy and terms should name the correct **legal entity** (trust, society, company) if it differs from the public brand.

Avoid hardcoding the organisation name in dozens of posts; use blocks/snippets for repeated boilerplate where possible.

## Tamil and accessibility

- Store and publish everything as **UTF-8** (WordPress default).
- Prefer readable **body fonts** for long Tamil text (e.g. Noto Sans Tamil); your developer can load them in a child theme.
- Add **alt text** for images in Tamil or bilingual as your audience prefers.

## Moderation and comments (if enabled)

- Publish a short **comment policy** (civil discourse, no hate, spam).
- Assign someone to **moderate** regularly or disable comments on sensitive posts.

## Checklist before launch

- [ ] No third-party article text pasted without rights.
- [ ] All images have licence or ownership documented.
- [ ] Privacy policy matches what you actually collect (forms, analytics, cookies).
- [ ] Contact email works and is monitored.
