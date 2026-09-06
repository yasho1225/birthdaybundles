# Birthday Bundles

**Every kid deserves a birthday to remember.**

A production-ready website for [Birthday Bundles](https://github.com/yasho1225/birthdaybundles) — an official 501(c)(3), student-led nonprofit based in Alpharetta, GA. Birthday Bundles brings joy to children living in shelters through free birthday celebrations, baked goods, milestone gifts, and thoughtful deliveries across the Atlanta area.

Built with React, Vite, TypeScript, Tailwind CSS, Lenis, and GSAP. Designed as a tactile, scroll-directed story with easy content updates — no CMS required.

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
| `/` | Home — story-led hero, verified organization facts, community updates, CTAs |
| `/request` | Free bundle request guidance, verified services, secure Google Form embed |
| `/donate` | Live GoFundMe campaign with an always-visible external fallback |
| `/volunteer` | Volunteer and baker roles, requirements, secure Google Form embed |
| `/about` | Origin story, team, photo gallery |
| `/contact` | Direct paths for shelters, volunteers, sponsors, and general questions |

---

## Features

- **Centralized config** — verified destinations, copy, services, and images live in one place
- **Dark mode** — theme toggle with system preference support
- **Accessible** — skip links, focus rings, ARIA labels, reduced-motion support
- **Responsive** — mobile nav, sticky header, touch-friendly UI
- **Site search** — `⌘K` / `Ctrl+K` modal search across all content
- **Cinematic motion** — pinned bundle assembly, horizontal journey, photo parallax, route transitions
- **React Bits adaptations** — magnetic actions, spotlight cards, and animated impact counters reskinned for the brand
- **Print stylesheet** — clean output for flyers and handouts
- **Cookie notice** — essential-only local storage disclosure
- **External systems stay external** — Google Forms holds request/volunteer data and GoFundMe processes gifts
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
- Birthday Bundle request form and its embed URL
- Volunteer Baker form and its embed URL
- Instagram profile
- General, volunteer, sponsor, and phone contact paths

### `src/config/content.ts`

All site copy:

- Tagline, mission, trust statements
- Verified organization facts and free service types
- Request guidance (Atlanta area, one-week lead time, bulk-order contact)
- Community updates, team roles, and volunteer FAQ
- Contact info (email, phone, public city, Charity ID)

### Images

1. Add photos to `assets/photos/` (see `assets/photos/README.md` for filenames)
2. Copy them to `public/images/photos/`
3. Paths are configured in `src/config/images.ts` — the site falls back to SVG placeholders until real photos are added

### Request, volunteer, and donation flows

The public site intentionally does not collect sensitive details itself:

- `/request` embeds the verified Birthday Bundles Information Form and provides an external fallback. It communicates the Google sign-in requirement before the form.
- `/volunteer` embeds the verified Volunteer Baker Form with an external fallback.
- `/donate` embeds the live GoFundMe campaign with an external fallback.

Google Forms and GoFundMe remain the systems of record. Do not add a client-side database or form endpoint without the organization’s direction.

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
├── pages/               # Home, Request, Donate, Volunteer, About, Contact
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
