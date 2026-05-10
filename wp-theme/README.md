# Tripitakatamil — deployable WordPress theme

This folder contains a **complete block theme** (FSE) you can install on any self-hosted WordPress site **or** on WordPress.com **if your plan allows custom themes**.

## What you get

| Path | Role |
|------|------|
| `style.css` | Theme metadata (required by WordPress) |
| `theme.json` | Colours, typography, layout widths |
| `functions.php` | Loads **Noto Sans Tamil** + Latin fallback (Google Fonts) |
| `parts/header.html` | Site title, tagline, page list |
| `parts/footer.html` | “© Tripitakatamil” |
| `templates/*.html` | Home, single post, page, archive, front page, 404, search |

## Install (self-hosted — recommended for full control)

1. Zip the **`tripitakatamil`** folder so the zip contains `style.css` at its root (not a nested extra folder).
   - Windows: select the `tripitakatamil` folder → Send to → Compressed folder, **or** from PowerShell:

     ```powershell
     Compress-Archive -Path "c:\Amir\tripitakatamil-gh\wp-theme\tripitakatamil\*" -DestinationPath "$env:USERPROFILE\Desktop\tripitakatamil.zip" -Force
     ```

     If WordPress expects the folder name inside the zip, use instead:

     ```powershell
     Compress-Archive -Path "c:\Amir\tripitakatamil-gh\wp-theme\tripitakatamil" -DestinationPath "$env:USERPROFILE\Desktop\tripitakatamil.zip" -Force
     ```

2. WordPress admin → **Appearance → Themes → Add New → Upload Theme** → choose the zip → **Activate**.

3. **Settings → Reading**: choose “Your homepage displays” — **posts** for blog-style home, or a **static page** and assign **Home** to use `front-page.html` for that page template (WordPress picks `front-page` automatically for the static front page).

4. **Appearance → Editor**: edit header/footer text, add a **Navigation** block instead of **Page list** if you want menus + categories.

## WordPress.com

- **Free / Personal / Premium:** you usually **cannot** upload this ZIP; you must pick themes from their directory.
- **Business / Commerce:** you can install **custom themes** — then use the same ZIP as above, or **GitHub Deployments** if you use that plan feature.

## After activation

- Create **menus / pages** as usual. **YouTube**: paste a URL or add a YouTube block in posts (see repo `content/guides/weekly-youtube-updates.md`).
- Add a **screenshot.png** (1200×900) beside `style.css` if you want a pretty thumbnail in the theme list (optional).

## Requirements

- WordPress **6.4+**, PHP **7.4+** (match `style.css` headers).
