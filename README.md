# Birthday Bundles

**Every kid deserves a birthday to remember.**

A production-ready website for [Birthday Bundles](https://github.com/yasho1225/birthdaybundles) — a community nonprofit that delivers complete birthday party kits (cake, decorations, gifts, and supplies) to children and families who might otherwise go without a celebration.

Built with React, Vite, TypeScript, and Tailwind CSS. Designed for warmth, clarity, and easy content updates — no CMS required.

---

## Live preview

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

---

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home — hero, impact stats, mission, testimonials, CTAs |
| `/donate` | Donation tiers, bundle breakdown, GoFundMe integration |
| `/volunteer` | Volunteer & baker roles, FAQ |
| `/about` | Origin story, team, photo gallery |
| `/contact` | Contact form, email, phone, address |

---

## Features

- **Centralized config** — swap links, copy, stats, and images without touching components
- **Dark mode** — theme toggle with system preference support
- **Accessible** — skip links, focus rings, ARIA labels, reduced-motion support
- **Responsive** — mobile nav, sticky header, touch-friendly UI
- **Site search** — `⌘K` / `Ctrl+K` modal search across all content
- **Scroll polish** — reveal animations, progress bar, back-to-top button
- **Print stylesheet** — clean output for flyers and handouts
- **Cookie notice** — essential-only local storage disclosure
- **UTM tracking** — campaign params appended to external donate links
- **Image fallbacks** — real photos auto-used when present; SVG placeholders until then

---

## Tech stack

| Layer | Choice |
|-------|--------|
| Framework | React 19 + TypeScript |
| Build | Vite 8 |
| Styling | Tailwind CSS v4 |
| Routing | React Router v7 (lazy-loaded pages) |
| Linting | oxlint |

---

## Getting started

### Prerequisites

- Node.js 18+
- npm

### Install & run

```bash
npm install
npm run dev
```

### Build for production

```bash
npm run build
npm run preview   # preview the dist/ output locally
```

Output goes to `dist/` — ready for Netlify, Vercel, GitHub Pages, or any static host.

---

## Customization

Most launch-day changes live in two files:

### `src/config/links.ts`

All external URLs in one place:

- GoFundMe campaign
- Instagram profile
- Volunteer & baker Google Forms
- Formspree contact endpoint
- Contact email (`mailto:`)

### `src/config/content.ts`

All site copy:

- Tagline, mission, trust statements
- Impact statistics
- Donation tiers & bundle checklist
- Testimonials, team bios, FAQ
- Contact info (email, phone, address)

### Images

1. Add photos to `assets/photos/` (see `assets/photos/README.md` for filenames)
2. Copy them to `public/images/photos/`
3. Paths are configured in `src/config/images.ts` — the site falls back to SVG placeholders until real photos are added

### GoFundMe embed

Replace the placeholder widget section in `src/pages/Donate.tsx` with your campaign embed code from the GoFundMe dashboard.

### Contact form

1. Create a free account at [Formspree](https://formspree.io)
2. Set the `contactForm` URL in `src/config/links.ts`
3. The form in `src/pages/Contact.tsx` posts directly to that endpoint

---

## Brand

### Colors

| Token | Hex | Usage |
|-------|-----|-------|
| `primary` | `#D5326B` | Donate CTA, heart accent |
| `secondary` | `#198989` | Wordmark, links, focus rings |
| `accent` | `#EAA21C` | Dividers, highlights |
| `cream` | `#FEF2E4` | Page background (light mode) |
| `ink` | `#1A1A1A` | Body text (light mode) |

Defined in `tailwind.config.ts` and `src/index.css`. Dark mode uses theme-aware CSS variables for readable contrast in both themes.

### Typography

| Role | Font |
|------|------|
| Display headlines | [Anton](https://fonts.google.com/specimen/Anton) |
| Body & UI | [Source Sans 3](https://fonts.google.com/specimen/Source+Sans+3) |
| Quotes | [Rosario](https://fonts.google.com/specimen/Rosario) |
| Pull quotes | [Playfair Display](https://fonts.google.com/specimen/Playfair+Display) |

Google Fonts are loaded in `index.html`.

---

## Deployment

### Netlify

| Setting | Value |
|---------|-------|
| Build command | `npm run build` |
| Publish directory | `dist` |

### Vercel

Import the repo — Vite is auto-detected.

### GitHub Pages (subpath)

If hosting at `username.github.io/repo-name`, set `base` in `vite.config.ts`:

```ts
export default defineConfig({
  base: '/birthdaybundles/',
  plugins: [react(), tailwindcss()],
})
```

---

## Project structure

```
src/
├── config/              # links.ts, content.ts, images.ts, site.ts
├── components/
│   ├── layout/          # Header, Footer, Layout, MobileNav
│   ├── sections/        # Home page sections (Hero, Stats, CTA, …)
│   ├── features/        # Dark mode, search, cookie banner, FAB, …
│   └── ui/              # Button, Logo, SectionHeading, PageHeader, …
├── pages/               # Home, Donate, Volunteer, About, Contact
├── context/             # ThemeContext
├── hooks/               # useScrollReveal, useScrollProgress, …
├── utils/               # searchIndex, utm
├── App.tsx              # Routes + lazy loading
└── main.tsx             # Entry point
```

---

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server |
| `npm run build` | Type-check + production build |
| `npm run preview` | Serve `dist/` locally |
| `npm run lint` | Run oxlint |

---

## License

Private — Birthday Bundles nonprofit use.

