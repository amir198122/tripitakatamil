# Feature list and “certain changes” — Tripitakatamil

**Hosting decision:** **Very tight budget** — see [02-domain-and-hosting-checklist.md](02-domain-and-hosting-checklist.md#budget-path) (WordPress.com **or** cheap self-hosted). Some rows below are relaxed if you stay on WordPress.com without plugin install.

Use this document to **scope** work with your developer. Change priorities from **Must** / **Should** / **Could** / **Won’t** as you decide.

**Legend:** `[ ]` not decided · `[x]` wanted · `[-]` not wanted

---

## Core CMS (from plan)

| Feature | Priority | Notes |
|---------|----------|--------|
| WordPress latest stable | Must | Self-hosted **or** WordPress.com per §0 checklist. |
| Multi-author (roles) | Must | WordPress.com: invite users per tier limits. |
| Categories and tags | Must | Tamil category names OK. |
| Media library (images, PDF) | Must | Train editors on compression. |
| Site search | Must / **Should** on .com | Core search; upgrade tier or self-host if you need advanced Tamil search plugins. |
| Comments | `[ ]` | If yes: moderation + spam (Akismet often available on .com). |
| Staging environment | **Should** (budget) | Ideal: full staging; budget: previews / careful production edits — see developer brief §10. |
| Daily backups + restore test | **Should** (ultra-cheap self-hosted) | WordPress.com: platform backups / export; self-hosted cheap: plugin + manual download. |
| YouTube embeds in posts/pages | Must | Core oEmbed; confirm URL allowlists. |
| Weekly video refresh (editor self-serve) | Must | One agreed pattern: e.g. dedicated post or Reusable block — see [content/guides/weekly-youtube-updates.md](../content/guides/weekly-youtube-updates.md). |

---

## “Certain changes” — common buckets (tick and add detail)

### Navigation and homepage

- [ ] **Homepage layout:** e.g. hero + “latest 10” + category strips  
- [ ] **Featured posts** (sticky or manual picks)  
- [ ] **Newsletter signup** in footer or after posts — provider: `[EDIT: Mailchimp / Buttondown / etc.]`  
- [ ] **Social links** in header/footer: `[EDIT URLs]`

### Reader experience

- [x] **YouTube embeds** — paste watch or youtu.be URL in block editor; optional homepage “latest video” slot per developer brief §8a.  
- [ ] **Related posts** at end of article  
- [ ] **Print-friendly** or “reader mode” CSS  
- [ ] **Breadcrumbs**  
- [ ] **Author archive** pages  

### Monetisation and community (optional)

- [ ] **Donations** (Razorpay, Stripe, etc.) — legal/tax advice separate  
- [ ] **Membership / paywall** — major scope add-on  
- [ ] **Events calendar**  

### Legal and trust

- [ ] **Cookie consent banner** (if analytics/ads use cookies in your jurisdiction)  
- [ ] **Accessibility statement** page  

### Analytics

- [ ] **None** (privacy-first)  
- [ ] **Plausible / Fathom / similar**  
- [ ] **Google Analytics 4** — document property ID and who has access  

### Email

- [ ] **Contact form** only  
- [ ] **Transactional SMTP** (recommended for reliable delivery)  

---

## PDF / “e-magazine” style (Keetru-like behaviour)

If you publish periodic PDFs:

- [ ] Link PDF from post **or** dedicated “Issues” archive template  
- [ ] File size guidance for mobile readers (compress PDFs)  
- [ ] Optional: **table of contents** post linking to sections  

**Detail:** `[EDIT: how often, naming convention, open vs download]`

---

## Open questions for your next meeting

1. Comments: on, off, or per-post?  
2. Search: default WordPress vs enhanced plugin budget?  
3. Newsletter: which tool and who sends campaigns?  
4. Any other **must-have** third-party integrations (Issuu, etc.)? *(YouTube embeds + weekly editor updates are already in scope.)*

---

## Sign-off

**Organisation:** Tripitakatamil  
**Contact name:** `[EDIT]`  
**Date:** `[EDIT]`  
**Approved for estimate:** `[ ]` yes `[ ]` no

When complete, attach this file (filled in) to [03-developer-brief.md](03-developer-brief.md) when contacting developers.
