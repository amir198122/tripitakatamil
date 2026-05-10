# Enable automation for WordPress.com (Tripitakatamil)

This explains how **you** (or a script on **your computer**) can publish content via the API. **Cursor / an AI cannot “host” a site** on its own servers; “hosting” still means **WordPress.com runs the site**. What we can enable is **API access** so you—or a script I help you write—can create posts and pages without clicking each time.

**Do not paste passwords, application passwords, or OAuth tokens into chat.** Put tokens only in a local `.env` file that is gitignored.

---

## Step 1 — Register a WordPress.com “application” (OAuth)

This identifies any script you run as *your* app (not WordPress guessing who you are).

1. Open [Create a new WordPress.com application](https://developer.wordpress.com/apps/new/).
2. Fill in:
   - **Name:** e.g. `Tripitakatamil local publish`
   - **Description:** short note for yourself
   - **Website URL:** your future public site or `https://wordpress.com`
   - **Redirect URI:** for local testing use something you control, e.g. `http://127.0.0.1:8765/callback`  
     - You must type **exactly** the same URI later in the browser (including `http` vs `https`, trailing slash, port).
3. Save. Copy **Client ID** and **Client Secret** (secret shown once—store in a password manager).

Official reference: [OAuth2 authentication](https://developer.wordpress.com/docs/oauth2/).

---

## Step 2 — Get an access token (pick one path)

### Path A — Authorization code flow (recommended)

Best if you ever share the app or use it beyond your own laptop.

1. Build this URL (replace placeholders; `scope` can stay `posts,media` for drafts + uploads):

   `https://public-api.wordpress.com/oauth2/authorize?client_id=YOUR_CLIENT_ID&redirect_uri=ENCODED_REDIRECT&response_type=code&scope=posts%2Cmedia&state=random_string`

   Use URL-encoding for `redirect_uri` (e.g. `http%3A%2F%2F127.0.0.1%3A8765%2Fcallback`).

2. Open the URL in a browser while logged into WordPress.com; **Approve** the permissions.

3. Your browser will land on `http://127.0.0.1:8765/callback?code=...` — if nothing is listening on port 8765, the page may “fail”; **that is OK**. Copy the `code=` value from the address bar before it disappears.

4. Exchange the code for a token (run **on your machine**, not in chat), per [Token request](https://developer.wordpress.com/docs/oauth2/#token-request-endpoint):

   ```bash
   curl -X POST https://public-api.wordpress.com/oauth2/token \
     -d "client_id=YOUR_CLIENT_ID" \
     -d "client_secret=YOUR_CLIENT_SECRET" \
     -d "code=THE_CODE_FROM_URL" \
     -d "grant_type=authorization_code" \
     -d "redirect_uri=http://127.0.0.1:8765/callback"
   ```

5. The JSON response includes `access_token` (and often `blog_id`). Put them in `.env` as described in [scripts/README.md](../scripts/README.md).

### Path B — Password grant (**solo testing only**; not for production)

WordPress.com documents this for **application owners** testing their own app. It uses your account credentials in a **local** `curl` command.

- If you use **two-factor authentication**, create a **[WordPress.com application password](https://wordpress.com/support/security/two-step-authentication/application-specific-passwords/)** and use that as `password` in the request—not your normal password.
- See “Password Grant” on the [same OAuth2 page](https://developer.wordpress.com/docs/oauth2/).

Never commit the token or client secret to git.

---

## Step 3 — Put secrets in `tripitakatamil-site/scripts/.env` (local only)

1. Copy `scripts/env.example` to `scripts/.env`.
2. Fill `WORDPRESS_COM_ACCESS_TOKEN` and discover `WORDPRESS_COM_SITE_ID` by running:

   ```bash
   cd tripitakatamil-site/scripts
   node list-sites.mjs
   ```

3. Re-run other scripts (e.g. create a draft post) as documented in `scripts/README.md`.

Root [`.gitignore`](../../.gitignore) already ignores `.env`; keep `scripts/.env` untracked as well.

---

## Step 4 — What “help from the AI” can mean after this

Once you have a **token + site ID** on your machine:

- You can ask Cursor to **edit the scripts** (e.g. publish Markdown from `content/pages/` as WordPress pages).
- **You** run `node …` locally; the AI does not need your token in chat.
- If you want the AI to run commands **in your workspace**, you’d still load credentials from `.env` in that environment only—**never** paste them into the prompt.

---

## If you meant self-hosted WordPress instead

On **your own** WordPress install, [Application Passwords](https://make.wordpress.org/core/2020/11/05/application-passwords-integration-guide/) are often simpler: WP Admin → Users → your user → Application Passwords → create one → use with the self-hosted REST API (`/wp-json/wp/v2/posts`). That path is different from WordPress.com OAuth; say if you want a separate doc for that.

---

## Summary

| Step | You do |
|------|--------|
| 1 | Register OAuth app → Client ID + Secret |
| 2 | Get `access_token` (Path A or B above) |
| 3 | `scripts/.env` with token + site id |
| 4 | Run Node scripts locally; ask AI to extend scripts, not to “receive” your password |

For a **no-code** first publish, use [06-wordpress-com-go-live.md](06-wordpress-com-go-live.md) in the browser instead.
