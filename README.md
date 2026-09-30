# Never Have I Ever — Landing Page

Static one-pager for **Never Have I Ever** by Cedroad.

Target URL: `https://cedroad.com/never_have_i_ever/`  
GitHub (parent): [Cedroad/Cedroad](https://github.com/Cedroad/Cedroad)

## Stack

- Vite 6 + React 19 + TypeScript
- Tailwind CSS v4 (`@tailwindcss/vite`) + custom design tokens
- GitHub Pages deploy workflow

## Develop

Requires [Node.js](https://nodejs.org/) 20+.

```bash
npm install
npm run dev      # http://localhost:5173/never_have_i_ever/
npm run build
npm run preview
```

## Page sections

1. Sticky nav — How to Play, Features, Screenshots, Contact, Google Play CTA  
2. Hero — logo, headline, Play badge, phone mockup  
3. Concept + How to Play  
4. Features grid + category marquee / grid (copy from the app)  
5. Screenshot gallery  
6. Final CTA + footer (privacy, support email)

## Key files

| Path | Role |
|------|------|
| `src/config/site.ts` | URLs, Play Store placeholder, asset helpers |
| `src/config/content.ts` | All marketing copy & categories |
| `src/components/*` | Page sections |
| `src/index.css` | Tokens, layout, motion |
| `public/images/` | Logo, screenshots, Play badge |

## Notes

- Play Store link points at the live listing in `src/config/site.ts` (URL is stable from closed testing through production).
- Vite `base` is `/never_have_i_ever/` for the custom-domain subpath.
- Replace `public/images/badges/google-play.svg` with an [official badge](https://play.google.com/intl/en_us/badges/) before launch if required by Google branding.
- Optional: add a true 1200×630 `og-share.png` for richer social previews (OG currently uses the logo).
