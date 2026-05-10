# Developer brief — Tripitakatamil (WordPress publication)

**Document version:** 1.2  
**Client / organisation:** Tripitakatamil  
**Goal:** Public-facing Tamil publication website with full CMS (multi-author, search, comments, media library), **YouTube embeds** editors can refresh on a **weekly** cadence, **original Tripitakatamil content only** — not a clone of any third-party site.

---

## 1. Summary

**Hosting (client choice):** Tripitakatamil selected the **very tight budget** path — see [02-domain-and-hosting-checklist.md](02-domain-and-hosting-checklist.md#budget-path). That usually means **WordPress.com** (fewest moving parts) **or** **budget shared self-hosted WordPress** (cheapest flexibility, more owner responsibility). The build below assumes **WordPress** either way.

**WordPress.com build:** Configure site on the client’s WordPress.com account using a **block theme** from the library, **core blocks** (posts, categories, navigation, forms block or Jetpack/contact as tier allows), and **minimal or no** third-party plugins unless the paid tier permits. **Child theme** upload only if the tier allows custom themes; otherwise use **Customizer + Global Styles** and block patterns. Deliver **SSL** (platform-handled on .com), **handover** for editors, and document **tier limits** (plugins, themes, domain).

**Self-hosted budget build:** One-click WordPress on agreed budget host; **lightweight block theme** + **small set of free plugins** (backup, basic security, SEO if needed). Staging optional if host cost prohibits it — document risk and mitigations (updates on staging clone later when budget allows).

**Inspiration (layout/UX only):** Tamil magazine-style home with “latest posts”, category archives, readable long-form Tamil — **no** copying of third-party HTML, CSS, articles, or assets from keetru.com or others.

---

## 1a. Budget implications for this brief

| Area | WordPress.com (lower tiers) | Budget self-hosted |
|------|----------------------------|--------------------|
| Plugins | Often **none** or restricted — use core + Jetpack/features bundled with tier | Full freedom; keep list tiny to reduce breakage |
| Custom child theme | May be **disallowed** until paid upgrade | Preferred if custom Tamil fonts/CSS needed |
| Security / firewall | Platform responsibility | One well-reviewed security plugin + updates |
| Backups / staging | Platform / previews per tier | Backup plugin; staging **nice-to-have** |
| YouTube (§8a) | **Supported** via block editor embeds | Same |

If a required feature is **impossible** on the chosen WordPress.com tier, either **upgrade one tier** or **switch to Option B** in the checklist — document the decision before build.

---

## 2. Information architecture (initial)

| Page / template | Purpose |
|-----------------|--------|
| Home | Latest posts (configurable: featured + list), optional hero. |
| Single post | Long-form Tamil/English; featured image; optional author box. |
| Category archive | Filtered list by category (Tamil category names). |
| Static: About | From client draft: [content/pages/about.md](../content/pages/about.md) |
| Static: Contact | Form or mailto per client preference; draft: [contact.md](../content/pages/contact.md) |
| Static: Privacy | Client must have lawyer review; draft: [privacy.md](../content/pages/privacy.md) |
| Optional: “Latest video” | Single sticky post, reusable block, or Custom HTML pattern — see §8a. |

**Navigation:** Header: Home, Categories (dropdown or mega as agreed), About, Contact. Footer: Tripitakatamil name, copyright, Privacy link.

---

## 3. Branding

- **Site title:** Tripitakatamil (WordPress Settings → General).  
- **Logo:** Client provides final asset; placeholder: [../assets/logo-tripitakatamil.svg](../assets/logo-tripitakatamil.svg).  
- **Tagline / footer:** Centralize via Customizer + **Site Editor** (block themes) + optional ACF/theme options on self-hosted — avoid scattering the org name in raw post HTML.  
- **Favicon:** From logo or separate icon.

---

## 4. Tamil typography and UTF-8

- Ensure **UTF-8** database and `DB_CHARSET` utf8mb4 (standard on modern hosts).  
- Load a **Tamil-capable web font** (e.g. **Noto Sans Tamil** or **Noto Serif Tamil**) via child theme, **theme settings**, or **WordPress.com Custom CSS / typography** where the tier allows — verify Google Fonts availability on the chosen theme.  
- Test **line height and font size** for long Tamil paragraphs on mobile.  
- Optional: bilingual titles (Tamil + English) via custom fields if client requests.

---

## 5. User roles

| Role | Users | Capabilities |
|------|-------|----------------|
| Administrator | 1–2 org leads | Full site; updates; plugin install. |
| Editor | Senior editors | Publish/moderate any post; manage categories. |
| Author | Writers | Publish own posts (or submit for review — confirm with client). |
| Contributor | Optional | Submit drafts only. |

**Security:** Enforce **2FA** for Administrator; strong password policy; limit login attempts; hide `wp-admin` from trivial bots only if using a vetted approach (no security through obscurity alone).

---

## 6. Plugins (keep minimal — examples, not mandates)

**WordPress.com:** Many tiers do **not** allow arbitrary plugin installs. Skip this list except where the platform or allowed plugins provide equivalents (e.g. Akismet for spam, Jetpack features). Do **not** promise Wordfence-style stacks unless the client pays for a tier that supports them.

**Self-hosted (budget):** Discuss before installing; prefer one plugin per concern.

- **Security:** e.g. Wordfence or iThemes Security — firewall, malware scan, 2FA.  
- **Backups:** UpdraftPlus or host-native backups (must meet “daily + restore test”).  
- **Caching:** host cache or WP Rocket / LiteSpeed Cache depending on stack.  
- **SEO:** Yoast SEO or Rank Math — basic meta, sitemap, breadcrumbs if theme supports.  
- **Search:** Relevanssi or SearchWP **if** default search insufficient for Tamil; verify Tamil tokenization expectations with client.  
- **Forms:** Fluent Forms or Gravity Forms — contact only unless scope expands.  
- **Spam (if comments on):** Akismet or Antispam Bee.  
- **SMTP (if needed):** WP Mail SMTP + transactional provider — **test** deliverability.

**Avoid:** plugin bloat, nulled themes/plugins, duplicate functionality.

---

## 7. Comments and moderation

- If comments are **on**: threaded comments, moderation queue for first-time commenters, clear **comment policy** page link.  
- If **off** globally or per post: document how editors toggle.

---

## 8. Media and PDFs

- **Media library:** standard WordPress; educate client on image size and alt text.  
- **PDF attachments:** either media file block in post or “Download” button; virus-scan uploads if host allows.

### 8a. YouTube embeds and weekly updates

**Requirement:** Editors must be able to **embed YouTube videos** in posts/pages and **swap the video weekly** without developer help.

**Implementation (developer):**

1. **Core oEmbed:** WordPress converts a pasted `https://www.youtube.com/watch?v=…` or `https://youtu.be/…` URL into an embed in the **block editor** (Paragraph block paste, or **YouTube** block). Confirm `youtube.com` and `youtu.be` are **not** removed by `wp_oembed_providers` or a security plugin’s URL allowlist.  
2. **Responsive layout:** Ensure the active theme wraps embeds in a responsive container (many block themes do this by default); fix CSS if embeds overflow on mobile.  
3. **Performance / privacy (optional):** If the site uses a strict **cookie consent** banner, discuss **facade** or **lite** YouTube plugins vs loading the full iframe after consent — scope with client. Otherwise default oEmbed is acceptable.  
4. **Lazy load:** Prefer theme or plugin behaviour that **defers off-screen iframes** where it does not break playback; test on mobile.  
5. **Weekly workflow:** Document for editors (see [../content/guides/weekly-youtube-updates.md](../content/guides/weekly-youtube-updates.md)): either **edit one “Featured video” post** each week, replace the URL in a **Reusable block**, or update a **shortcode** if the developer exposes one — pick **one** pattern in handover and stick to it.

**No extra plugin is mandatory** if core oEmbed meets needs; add a plugin only for consent, lazy-load, or playlist behaviour the client requests.

---

## 9. Performance and accessibility

- Lazy-load images; WebP/AVIF where host/CDN supports.  
- Target reasonable **Core Web Vitals** on 3G India test profiles.  
- Semantic headings, skip link, focus states, sufficient colour contrast.

---

## 10. Staging and launch

1. **Staging:** If budget tier includes staging or a WordPress.com preview workflow, use it. Otherwise: build on a **private draft** site / **temporary subdomain** (self-hosted clone) or schedule a **low-traffic maintenance window** — document the chosen compromise.  
2. Go-live with **search-replace** only for URLs (use safe tools), not for rebranding third-party content.  
3. Verify **HTTPS**, **canonical** URLs, **404** page branded Tripitakatamil.  
4. Submit **sitemap** to Google Search Console (client property) if tier / plugins allow.

---

## 11. Handover deliverables

1. **Admin walkthrough** (30–60 min recorded video or live call): add post, add category, upload media, **paste or replace a YouTube URL** (weekly pattern agreed in §8a), moderate comment, update menu, update footer text.  
2. **Written cheat sheet** (1–2 pages): login URLs, backup restore pointer, who to call for DNS.  
3. **List of installed plugins** and why each exists.  
4. **Theme / child theme:** deliver what the hosting tier allows — **child theme zip or repo** on self-hosted; on WordPress.com, export **block patterns** / **Global Styles** documentation and any **Custom CSS** added in Customizer (if tier allows).

---

## 12. Out of scope (unless added via [04-feature-list-and-certain-changes.md](04-feature-list-and-certain-changes.md))

- Custom mobile apps  
- Paywall / membership (unless scoped)  
- Multisite network  
- Migrating content from Keetru or any site without legal export

---

## 13. Client inputs required before build

- Final domain and hosting credentials (or invite collaborator). **Confirm [02 budget path](02-domain-and-hosting-checklist.md#budget-path) option (A or B) and tier.**  
- Completed feature list: [04-feature-list-and-certain-changes.md](04-feature-list-and-certain-changes.md).  
- Final logo and **About / Contact / Privacy** copy after legal review.

---

**Contact for this brief:** `[EDIT: client email]`
