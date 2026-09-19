# The Deck Master

Business website for Erik of Dahlberg Construction LLC, a deck builder serving all of Portland Metro.

## Run locally

Install Node.js, then run:

```sh
npm run dev
```

Open http://localhost:5173. No dependency installation or build step is required.

## Website files

- `dist/index.html`: page content, reviews, photo thumbnails, and dialogs.
- `dist/style.css`: responsive layout and styling.
- `dist/script.js` and `dist/videos.js`: project films and the video player.
- `dist/gallery.js`: photo viewer and the five-at-a-time photo gallery.
- `dist/gallery/`: full-size web photos and smaller thumbnails.
- `dist/art/`: original watercolor illustrations and frames.
- `dist/fonts/`: original locally hosted fonts.
- `recovery-manifest.json`: download provenance and SHA-256 hashes for the recovered site. Paths in this manifest are relative to `dist/`.
- `preview.mjs` and `responsive-check.html`: local preview server and responsive-layout check page.

## Hosting

Publish the contents of `dist/` on a static website host. Keep the relative folder structure intact. No server-side application, database, or secrets are required. The existing ChatGPT Sites project configuration is deliberately excluded from this portable copy.

## Current content

The site contains 43 unique project films and 20 photos. Five photo thumbnails are shown initially, with additional batches of five. Both customer reviews link to their project media in the on-site viewers.

The website includes Erik’s phone and email at the top, middle, and bottom. Public-facing concept labels and unfinished service-area placeholders have been removed, and the page no longer blocks search indexing. The confirmed service area is all of Portland Metro.

## Assets

Photos and testimonials were supplied for this website. Illustrations were created for this website. This repository does not grant a general license to reuse the business content or artwork.

## Source recovery

On September 19, 2026, the complete browser-delivered static site was recovered from https://dahlberg-deck-master-demo.lush-tang-8711.chatgpt.site/ into `dist/`: 57 files, including all 19 photos and thumbnails, original artwork and fonts, and all 43 video entries. CSS, JavaScript, images, and fonts are unchanged from the served originals. Only the hosting provider's injected Cloudflare challenge was removed from the HTML.

YouTube videos and thumbnails remain externally hosted, as in the original website. This recovery does not include former repository history or unused source assets. The older root-level HTML/CSS/JavaScript files are retained for history; `dist/` is the current website.
