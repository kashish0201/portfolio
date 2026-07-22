# Portfolio - Next.js + Tailwind

## Setup

```bash
npx create-next-app@latest portfolio
```

Answer the prompts: **TypeScript yes, Tailwind CSS yes, App Router yes, `src/` directory no, import alias `@/*` yes.**

Then copy these files over the generated project:

```
app/layout.tsx
app/page.tsx
app/globals.css     ← replaces the generated one
components/
data/
```

```bash
npm run dev
```

No extra dependencies. Fonts load through `next/font/google`, so nothing to install and no layout shift.

## Tailwind version

This uses **Tailwind v4**, which is what `create-next-app` ships now. The palette lives in the `@theme` block at the top of `globals.css` - no `tailwind.config.js` needed. Tokens there become utilities automatically: `--color-accent` gives you `text-accent`, `bg-accent`, `border-accent`.

If you end up on Tailwind v3 instead, move those colors into `tailwind.config.js` under `theme.extend.colors` and swap the `@import "tailwindcss"` line for the three `@tailwind` directives.

## Editing content

Everything you'll want to change is in `data/content.ts` - copy, stats, tags, projects, experience. You shouldn't need to touch the components to update the text.

## Recoloring

Change the accent in one place, in `globals.css`:

```css
--color-accent: #E8C99A;      /* sand - the main accent */
--color-accent-soft: #F0DCB8; /* hover / lighter text */
--color-accent-deep: #6B5836; /* unused by default, there if you need depth */
```

The ambient glow in `body::before` is keyed to the same hue - update the `rgba()` values there to match if you shift it far.

`--color-alert` (#E8784A) is the only non-sand colour in the system. It's pushed redder than the sand base on purpose - against an already-warm palette a plain amber wouldn't read as *wrong*. It's used only for the chaos-failure state; if you cool the whole palette down later, you can relax it.

## Before you ship

- [ ] Put your resume at `public/resume.pdf`
- [ ] Fill in real GitHub and LinkedIn URLs in `data/content.ts`
- [ ] Replace the `href: "#"` on projects with real links
- [ ] The throughput/uptime numbers in the health panel are illustrative - either wire them to something real or leave them clearly as a demo
- [ ] Confirm the "Summer 2027 internships" line is actually right
- [ ] Write the Academic Assistant case study - that page is what converts
- [ ] Add an OG image (`app/opengraph-image.png`, 1200×630) so links preview well

## Deploy

Push to GitHub, import the repo at vercel.com, done. Every push to `main` redeploys. Add a custom domain in the project settings.
