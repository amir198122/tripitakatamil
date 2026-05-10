# Go live on WordPress.com (Tripitakatamil)

## What your `.env` file is (and is not)

- A **username + password** in `.env` is for **you** to sign in at [wordpress.com/log-in](https://wordpress.com/log-in). It is **not** a “hosting token” this workspace can use to deploy the site automatically.
- Safe automation on WordPress.com uses **OAuth** (developer app + user consent), not your main password in a file.

**Security:** If your WordPress password was ever stored in a repo, chat, or shared drive, **change it** in WordPress.com account settings and **do not reuse** it elsewhere. Keep passwords in a **password manager**, not in `.env`, unless you fully understand the risk and never commit `.env` (see root `.gitignore` in this workspace).

---

## What we actually “created” here

The `tripitakatamil-site` folder is **documentation and draft Markdown** (about, contact, guides). It is **not** a full WordPress theme or installer. “Hosting” means: **create or open your site on WordPress.com**, then **copy content** from those files into posts/pages (or hire someone to map them via the REST API with proper OAuth).

---

## Manual steps (free / low-cost tier)

1. In a browser, log in at [wordpress.com/log-in](https://wordpress.com/log-in) (use your own credentials; do not paste them into chat or scripts).
2. Open **Sites** → your Tripitakatamil site (or create one via [wordpress.com/start](https://wordpress.com/start)).
3. **Settings → General:** set **Site title** to `Tripitakatamil` and your tagline.
4. **Appearance → Themes:** pick a **block theme** (e.g. Twenty Twenty-Four/Five) that reads well for long Tamil posts.
5. **Pages → Add new:** create **About**, **Contact**, **Privacy** using text from [content/pages/](../content/pages/) (paste and adjust in the editor).
6. **Posts:** add categories and your first posts; for weekly video, follow [content/guides/weekly-youtube-updates.md](../content/guides/weekly-youtube-updates.md).
7. **Optional:** **Appearance → Editor** to edit header/footer and add your logo (upload [assets/logo-tripitakatamil.svg](../assets/logo-tripitakatamil.svg) or replace with a final logo).

---

## If you later want scripted publishing

- Use the official **WordPress.com** developer flow (OAuth token), not your login password in `.env`.
- Ask a developer to use the [WordPress.com REST API](https://developer.wordpress.com/docs/api/) after you authorise their application once.

---

## Why the AI did not “host” it for you

- Publishing requires **your** authenticated session or a **proper API token** you obtain through OAuth.
- Storing **plaintext passwords** in `.env` for automated hosting is unsafe and is not supported as a standard deploy path here.

When the site is live, send testers the public URL and confirm **HTTPS** and **mobile** layout for Tamil text.
