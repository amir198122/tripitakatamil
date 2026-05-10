# Weekly YouTube updates — editor guide (WordPress)

Tripitakatamil needs to **embed YouTube videos** and **change which video appears** about once a week, **without a developer**.

Works on **self-hosted WordPress** and **WordPress.com** (block editor): add a **YouTube** block or paste the video URL on its own line.

---

Your developer will pick **one** of the patterns below during handover. This file explains all common options so you know what to ask for.

---

## How embedding works (all patterns)

1. In the block editor, add a **YouTube** block **or** paste the video URL on its own line in a **Paragraph** block — WordPress turns it into a player.  
2. Valid URL shapes include:  
   - `https://www.youtube.com/watch?v=VIDEO_ID`  
   - `https://youtu.be/VIDEO_ID`  
3. **Update weekly:** open the post or reusable block, **remove** the old block (or URL), **add** the new URL, **Update** / **Publish**.

If paste does not show a player, ask your developer to check **oEmbed** and any **security plugin URL allowlist** for `youtube.com` / `youtu.be` (self-hosted). On **WordPress.com**, open a support ticket if embeds fail on your tier.

---

## Pattern A — One “Featured video” post (simplest)

1. Create a post titled e.g. **“இந்த வாரம் / This week’s video”** (or English only).  
2. Put the current YouTube embed at the top; add Tamil/English intro text below.  
3. Each week: **edit the same post**, replace the embed with the new URL, click **Update**.  
4. Optional: pin this post to the homepage (sticky) or link it from the menu as **“Video”**.

**Pros:** One bookmark for editors; clear history in post revisions.  
**Cons:** Old weeks are overwritten unless you duplicate the post first for an archive.

---

## Pattern B — Reusable block (same embed in many places)

1. Developer or admin creates a **Reusable block** containing one YouTube block.  
2. That block is inserted on the home page, sidebar widget (if theme supports blocks), etc.  
3. Each week: **Edit reusable block** from the block toolbar, swap the URL, save — all pages using it update.

**Pros:** One place updates many pages.  
**Cons:** Needs someone trained on “synced” reusable blocks so they do not break local copies.

---

## Pattern C — New post every week (full archive)

1. Each week, **add a new post** with the new video (category: **Videos** or similar).  
2. Homepage shows “latest” automatically if it lists recent posts.

**Pros:** Natural archive of every week’s video.  
**Cons:** More posts to manage; homepage layout must surface the category if you want “video first.”

---

## Checklist before publishing

- [ ] Video is **public** or **unlisted** as intended (private videos will not play for all visitors).  
- [ ] Intro text explains the topic in Tamil and/or English.  
- [ ] **Preview** on a phone — player should not overflow the screen.

---

## Optional: privacy and cookies

If your site shows a **cookie consent** banner, YouTube’s player may set third-party cookies. Follow your developer’s and lawyer’s guidance on consent and any **lite YouTube** / facade plugin they install.
