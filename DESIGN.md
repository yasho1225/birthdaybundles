# Design — Birthday Bundles

<!-- impeccable:design-schema 1 -->

## Mode

Persuade — earn trust and drive donate / volunteer action.

## Visual world

**A birthday built by hand** — a tactile editorial system where paper, ribbon, labels, photography, and motion show a bundle becoming a celebration. The experience stays adult, trustworthy, and conversion-focused while carrying the warmth of childhood birthdays.

## Typography

- **Display / headings:** Fraunces (optical, warm serif)
- **Body / UI:** Outfit (friendly geometric humanist)
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

Color moves in deliberate chapters: cream for reflection, teal for community and trust, yellow for assembly and participation, and deep ink for the final evening-celebration CTA.

## Layout

- Asymmetric editorial grids, photo-forward
- Generous whitespace, tight internal grouping
- No eyebrow/kicker labels above headings
- No four-stat hero metric grids
- SVG icon system — no emoji
- Physical details use restrained paper, tape, tag, ribbon, and box motifs

## Motion

- Lenis and the GSAP ticker share one synchronized frame loop
- The hero uses masked typography, image depth, and restrained celebratory settling
- The bundle assembly pins on desktop while real content is added to a tactile box
- One vertical-driven horizontal journey explains referral, assembly, and delivery
- Memory photos use layered parallax; tactile controls use small magnetic and spotlight responses
- Mobile recomposes pinned/horizontal scenes into readable vertical stories
- `prefers-reduced-motion` disables Lenis, pins, parallax, and hidden initial states

## Components

- Buttons: tactile, high-contrast, small magnetic range on selected primary actions
- Forms: labeled inputs, inline errors, loading states
- Cards: reserved for physical metaphors such as tags, notes, and photographs; no nested cards
