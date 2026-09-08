# Star SMP

Static React/Vite recreation of the Star SMP Framer project.

## Pages

- `/` — Star SMP landing page
- `/server-info` — server guide
- `/credits` — community credits

## Local development

```bash
npm install
npm run dev
```

Create a production bundle with `npm run build`. The generated static files are in `dist/`.

## Cloudflare Pages

Connect this GitHub repository to Cloudflare Pages with:

- Build command: `npm run build`
- Build output directory: `dist`
- Node version: `24` or newer

The site is a single-page Vite build and uses the pathname to render each page, so Cloudflare Pages' standard SPA fallback keeps direct links such as `/server-info` and `/credits` working.
