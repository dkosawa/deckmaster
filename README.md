# The Deck Master

Business website for Erik of Dahlberg Construction LLC, a Pacific Northwest deck builder.

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
- `dist/art/`: watercolor illustrations, frames, and retained artwork variants.
- `dist/fonts/`: local fonts and their license.
- `content/`: photo and video metadata. The HTML photo gallery and video JavaScript are the rendered content; editing metadata alone does not regenerate them.
- `preview.mjs` and `responsive-check.html`: local preview server and responsive-layout check page.

## Hosting

Publish the contents of `dist/` on a static website host. Keep the relative folder structure intact. No server-side application, database, or secrets are required. The existing ChatGPT Sites project configuration is deliberately excluded from this portable copy.

## Current content

The site contains 43 unique project films and 19 photos. Five photo thumbnails are shown initially, with additional batches of five. Both customer reviews link to their project media in the on-site viewers.

Before a business launch, add confirmed contact information and the specific service area, review the concept labels, and remove the `noindex,nofollow` robots directive when the site is ready for search engines.

## Assets

Photos and testimonials were supplied for this website. Illustrations were created for this website. This repository does not grant a general license to reuse the business content or artwork. The bundled font has its own license in `dist/fonts/OFL.txt`.
