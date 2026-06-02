# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Plain static website for Biokind Analytics — no build step, no framework, no package manager. Files are served directly via GitHub Pages at a custom domain (CNAME).

## Development

Open any `.html` file in a browser directly (`open index.html`) or serve with any static server:

```bash
python3 -m http.server 8000
```

There are no tests, no linting config, and no CI beyond GitHub Pages auto-deploy on push to `main`.

## Architecture

Four HTML pages share one stylesheet (`styles.css`) and one interactivity script (`script.js`):

- `index.html` — Home page (hero, stats, how-it-works, partners, chapters, get-involved)
- `Press.html` — Press/media cards + blog post index (cards generated from `posts.js`)
- `post.html` — Single blog article view; reads `window.location.hash` as slug, finds the matching post in `window.BIOKIND_POSTS`, and renders it
- `script.js` — Nav behavior, partner logo grid, scroll-reveal animations, blog card rendering, and article rendering

### Blog system

`posts.js` is the sole data source. It assigns `window.BIOKIND_POSTS` — an array of post objects. Both the card grid on `Press.html` and the full article on `post.html` are built from this array at runtime. To publish a post: copy the TEMPLATE block at the top of `posts.js`, paste it first in the array (newest first), fill in the fields, and push.

Post fields: `slug` (unique, url-safe, becomes the hash), `title`, `chapter`, `category`, `date`, `excerpt`, `author`, `cover` (image path or `""` for branded placeholder), `body` (HTML string).

### Adding content

- **New blog post** → edit `posts.js` only
- **Press/news cards** → edit the `<a class="news-card">` blocks in `Press.html`
- **Chapter logos** → add image to `assets/chapters/`, reference in `index.html`
- **Partner logos** → add image to `assets/partners/`, reference in `index.html`
