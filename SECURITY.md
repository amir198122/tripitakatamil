# Security

- **Never commit** `.env`, personal access tokens, or WordPress passwords. This repository’s `.gitignore` excludes `.env` files; keep it that way.
- If a token was ever pasted into a chat, issue, or email, **revoke it** in GitHub → Settings → Developer settings → Personal access tokens, then create a new one.
- Use **fine-scoped** PATs with minimum permissions (e.g. `Contents: Read and write` on this repo only) and an expiry date.
