# Domain and hosting checklist — Tripitakatamil

You (the organisation) must **register the domain** and **pay the host**; this file is a decision checklist your developer can follow.

---

<a id="budget-path"></a>

## 0. Chosen path: very tight budget

Tripitakatamil is optimising for **lowest recurring cost** and **simplest ops**. Two realistic stacks:

### Option A — WordPress.com (recommended for non-technical teams)

You get hosting, updates, and security handled by [WordPress.com](https://wordpress.com/pricing/). **YouTube embeds** work in the block editor on hosted WordPress.com sites the same way as self-hosted (YouTube block or paste URL). Weekly video swaps = edit a post; no server access needed.

**Trade-offs vs premium managed hosting:**

- You may **not** be able to install arbitrary plugins or upload a fully custom theme until you are on a **higher paid tier** (plan names and limits change — read the current pricing page carefully).  
- On lower tiers, use **built-in blocks**, **patterns**, and **free/block themes** from the WordPress.com library; skip Wordfence-style plugins and rely on the platform.  
- **Staging** is replaced by **preview** / draft posts and (on some tiers) staging-like tools — confirm what your tier includes.  
- **Backups** are usually platform-managed; still confirm **export** / backup options for peace of mind.

**Cost order of operations (typical, verify live pricing):**

1. **Cheapest:** stay on a **subdomain** (`yoursite.wordpress.com`) if a custom domain is not required yet — often free or lowest tier.  
2. **Custom domain** (`tripitakatamil.com`): usually requires a **paid** WordPress.com plan that maps DNS — check which tier includes domain connection.  
3. **Full plugin + custom theme install** (only if you truly need it): historically this required a **Business-class** (or current equivalent) plan — **only upgrade if** core + theme cannot meet search, forms, or SEO needs.

### Option B — Cheapest self-hosted WordPress (maximum flexibility, more DIY)

Buy **budget shared hosting** (many Indian and global providers offer one-click WordPress for a few dollars per month). You get **full** plugin and theme freedom like the original brief, but you (or a one-time freelancer) handle updates, SSL, and backups.

| Compared to Option A | Notes |
|---------------------|--------|
| Lower monthly if you shop promos | Watch renewal prices; read reviews for support quality. |
| You install backups yourself | e.g. free tier of a backup plugin + download copies occasionally. |
| Staging | Often missing on cheapest plans; use a maintenance plugin or duplicate site manually. |

**Decision:** tick one before you pay anyone to build.

- [ ] **Option A** — WordPress.com (tier after reading [wordpress.com/pricing](https://wordpress.com/pricing/): `[EDIT tier name]`)  
- [ ] **Option B** — Self-hosted WordPress on: `[EDIT provider name]`

---

## 1. Domain name

- [ ] Choose a primary domain (example: `tripitakatamil.org` or `.com` — availability and budget are yours to verify).
- [ ] Register at a reputable registrar (keep login and 2FA safe).
- [ ] Decide whether `www` is canonical or bare domain; document the choice for DNS.

## 2. DNS records (after hosting is chosen)

Your developer or host support will set:

- [ ] **A** or **CNAME** records pointing to the managed WordPress server (host provides exact values).
- [ ] **MX** records if email uses Google Workspace, Microsoft 365, or similar (do not guess; follow email provider docs).
- [ ] Optional: **TXT** for SPF/DKIM if sending bulk mail later.

## 3. Managed WordPress host — minimum requirements

Use this table to compare providers; tick when confirmed.

**If you chose §0 Option A (WordPress.com):** many rows are satisfied by the platform; mark N/A where applicable and still confirm **domain mapping**, **exports**, and **tier limits** on their pricing page.

**If you chose §0 Option B (budget self-hosted):** “Staging” may become **Could** — use a plugin, host add-on, or careful updates on a clone if budget allows later.

| Criterion | Required | Notes |
|-----------|----------|--------|
| Free TLS (HTTPS) for your domain | Yes | Let’s Encrypt or equivalent is standard. |
| Automated daily backups | Yes (ideal) / **Should** on ultra-cheap | On cheapest shared plans, use a backup plugin + periodic download. |
| Staging or clone site | Yes (ideal) / **Should** on ultra-cheap | WordPress.com: use tier features / previews. |
| PHP version current (8.x) | Yes (self-hosted) | N/A on WordPress.com (managed stack). |
| Malware scanning / firewall | Strongly preferred | Often bundled on managed WordPress tiers. |
| Support in your timezone | Preferred | For Tamil Nadu / India teams, check ticket chat hours. |
| Data centre region | Your choice | Closer to primary audience can reduce latency slightly. |

## 4. Example provider categories (not an endorsement)

Compare current pricing and support yourself:

- **WordPress.com (very tight budget):** see [§0 / budget path](02-domain-and-hosting-checklist.md#budget-path) in checklist — compare tiers on [wordpress.com/pricing](https://wordpress.com/pricing/).  
- **Premium managed WordPress:** Kinsta, WP Engine, Pressable — strong ops, higher cost.  
- **Mid-tier:** SiteGround, Cloudways (managed VPS with WordPress stack).  
- **Regional / budget:** Many Indian hosts offer “WordPress hosting”; verify backup quality and staging.

## 5. SSL and mixed content

- [ ] After DNS propagates, open the site with `https://` and fix any **mixed content** (HTTP images) your developer finds.

## 6. Handover from host

- [ ] Save **hosting control panel** URL, login, 2FA backup codes.  
- [ ] Save **WordPress admin** URL (`/wp-admin`) and first admin user (you should own this account).

## 7. Email sending (transactional)

- [ ] Confirm whether “contact form” mail uses host PHP mail or **SMTP** (SendGrid, Postmark, Amazon SES, etc.). Poor PHP mail config causes lost enquiries; ask your developer to test deliverability.

When this checklist is complete, attach the chosen **host name**, **domain**, and **DNS screenshot or export** to your developer brief.
