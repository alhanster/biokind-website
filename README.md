# Biokind Analytics — website

Static website (plain HTML, CSS, and JavaScript). No build step, no server — just
files. It runs anywhere that serves static files, including **GitHub Pages for free**.

## Files

```
index.html      Home page
Press.html      Press & media + blog index
post.html       Blog article page  (post.html#<slug>)
posts.js        ← edit this to publish blog posts
styles.css      All styling
script.js       Interactivity (nav, partners grid, reveals)
assets/         Images (logos, photos, press, partners, chapters)
.nojekyll       Tells GitHub Pages to serve files as-is
CNAME           Your custom domain
```

## Publish on GitHub Pages (free)

1. Create a repository and upload everything in this folder to the repo root.
2. In the repo: **Settings → Pages**.
3. Under **Build and deployment**, set **Source = Deploy from a branch**,
   **Branch = `main`**, folder **`/ (root)`**, then **Save**.
4. Wait ~1 minute. Your site is live at `https://<username>.github.io/<repo>/`.

Cost: **$0.** GitHub Pages is free, including HTTPS.

## Use your own domain (e.g. biokind.org)

1. Edit the **`CNAME`** file so it contains exactly your domain, e.g.:
   ```
   biokind.org
   ```
2. At your domain registrar, add DNS records pointing to GitHub:
   - For the apex `biokind.org` — four **A** records:
     `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - For `www.biokind.org` — a **CNAME** record to `<username>.github.io`
3. Back in **Settings → Pages**, enter your domain under **Custom domain** and
   tick **Enforce HTTPS** once it becomes available (can take a few minutes to an hour).

Cost: still **$0** beyond the domain you already pay for.

## Editing the site going forward

- **Blog posts** → edit `posts.js` only. Copy the TEMPLATE block at the top,
  fill it in, commit, push. It becomes both a card on the Press page and a full
  article at `post.html#<your-slug>`.
- **Blog cover image** → add an image to `assets/` (e.g. `assets/blog/`) and set
  the post's `cover:` field to its path. Leave `cover: ""` for a branded placeholder.
- **Press / "In the news" cards** → edit `Press.html`. Each article is one
  `<a class="news-card">…</a>` block; copy one and change the link, outlet, date,
  headline, and the `assets/press/…` image.
- **Email, footer, nav text** → edit the `.html` files directly.

## Note

This published version does not include the in-editor "Tweaks" design panel or
the drag-and-drop image placeholders — those only work inside the design tool.
Everything visitors see is plain, fast, static files.
