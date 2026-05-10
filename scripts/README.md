# WordPress.com API scripts (local use)

These scripts use an **OAuth access token** for WordPress.com. They do **not** use your normal login password.

## Prerequisites

- [Node.js 18+](https://nodejs.org/) (includes `fetch`).
- Completed [../docs/07-enable-automation-wordpress.md](../docs/07-enable-automation-wordpress.md) through obtaining a token.

## Setup

1. Copy `env.example` to `.env` in **this folder** (`tripitakatamil-site/scripts/.env`).
2. Set:
   - `WORDPRESS_COM_ACCESS_TOKEN` — from OAuth (or password grant for dev only).
   - `WORDPRESS_COM_SITE_ID` — numeric ID of the site (run `list-sites.mjs` first if unknown).

**Never commit `.env`.**

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

## Enabling the AI to help further

- Share **file paths** and **error messages** from the terminal, not tokens.
- Ask for changes like: “Read `content/pages/about.md` and POST it as a draft **page**.” I can extend these scripts; you still run them locally.

## References

- [WordPress.com OAuth2](https://developer.wordpress.com/docs/oauth2/)
- [REST API examples repo](https://github.com/Automattic/wpcom-rest-api-examples)
