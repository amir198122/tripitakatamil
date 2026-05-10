# WordPress.com API scripts (local use)

These scripts use an **OAuth access token** for WordPress.com. They do **not** use your normal login password.

## Prerequisites

- [Node.js 18+](https://nodejs.org/) (includes `fetch`).
- Completed [../docs/07-enable-automation-wordpress.md](../docs/07-enable-automation-wordpress.md) through obtaining a token.

## Setup

1. Copy `env.example` to `.env` in **this folder** (`scripts/.env`).
2. Set:
   - `WORDPRESS_COM_ACCESS_TOKEN` — from OAuth (or password grant for dev only).
   - `WORDPRESS_COM_SITE_ID` — numeric ID of the site (run `list-sites.mjs` first if unknown).

**Never commit `.env`.**

OAuth token must include scope **`posts`** (WordPress.com uses this for creating/editing **pages** too). If you get `403`, re-authorize with `posts` (and `edit` if required by your account).

## Direct push to WordPress (no Business plan)

This flow uploads **page HTML** over the [WordPress.com REST API](https://developer.wordpress.com/docs/api/). It does **not** use GitHub Deployments and works on **Free** sites as long as your token can edit content.

## Commands

From this directory:

```bash
node list-sites.mjs
```

Lists sites your token can see; copy the correct **ID** into `.env`.

```bash
node create-draft-post.mjs
```

Creates one **draft** post titled `Tripitakatamil API test` to verify the token has `posts` scope.

```bash
node sync-pages-to-wpcom.mjs
```

Syncs `content/pages/*.md` to WordPress.com **pages** as **drafts** (safe default).

```bash
node sync-pages-to-wpcom.mjs --publish
```

Same, but **publishes** pages (public).

```bash
node sync-pages-to-wpcom.mjs --dry-run
```

Log actions only (no API writes).

## Enabling the AI to help further

- Share **file paths** and **error messages** from the terminal, not tokens.
- Ask for changes like: “Read `content/pages/about.md` and POST it as a draft **page**.” I can extend these scripts; you still run them locally.

## References

- [WordPress.com OAuth2](https://developer.wordpress.com/docs/oauth2/)
- [REST API examples repo](https://github.com/Automattic/wpcom-rest-api-examples)
