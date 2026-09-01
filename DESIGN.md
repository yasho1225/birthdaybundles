# Design — Birthday Bundles

<!-- impeccable:design-schema 1 -->

## Mode

Persuade — earn trust and drive donate / volunteer action.

## Visual world

**Warm Narrative Celebration** — editorial nonprofit storytelling with photography, human typography, and restrained brand color. Feels like a premium community organization, not a SaaS template.

## Typography

- **Display / headings:** Fraunces (optical, warm serif)
- **Body / UI:** Instrument Sans (humanist, readable)
- **Quotes:** Fraunces italic
- No uppercase display shouting. Sentence case headings.

## Color

Keep brand palette, use with intention:

| Token | Use |
|-------|-----|
| Primary `#D5326B` | Primary CTAs, emphasis |
| Secondary `#198989` | Trust, links, secondary actions |
| Accent `#EAA21C` | Highlights on dark surfaces |
| Cream `#FEF2E4` | Page canvas |
| Ink `#1A1A1A` | Text |

Cream-dominant canvas. Color as accent strokes, not full-width metric bands.

## Layout

- Asymmetric editorial grids, photo-forward
- Generous whitespace, tight internal grouping
- No eyebrow/kicker labels above headings
- No four-stat hero metric grids
- SVG icon system — no emoji

## Motion

- Scroll reveals with stagger (existing ScrollReveal)
- Hero image subtle scale on load
- 200–400ms ease-out transitions
- Respect `prefers-reduced-motion`

## Components

- Buttons: rounded-lg, clear hierarchy (primary / secondary / ghost)
- Forms: labeled inputs, inline errors, loading states
- Cards: soft surface, subtle border, no nested cards
