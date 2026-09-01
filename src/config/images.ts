/**
 * Central image paths — update filenames here when adding photos to public/images/photos/
 */
export const IMAGES = {
  hero: '/images/photos/hero.jpg',
  mission: '/images/photos/mission.jpg',
  volunteer: {
    packing: '/images/photos/volunteer-packing.jpg',
    baking: '/images/photos/volunteer-baking.jpg',
  },
  testimonials: [
    '/images/photos/testimonial-1.jpg',
    '/images/photos/testimonial-2.jpg',
    '/images/photos/testimonial-3.jpg',
  ],
  team: [
    '/images/photos/team-1.jpg',
    '/images/photos/team-2.jpg',
    '/images/photos/team-3.jpg',
  ],
  gallery: Array.from({ length: 6 }, (_, i) => `/images/photos/gallery-${i + 1}.jpg`),
} as const

export const PLACEHOLDER_IMAGES = {
  hero: '/images/placeholders/mission.svg',
  mission: '/images/placeholders/mission.svg',
  volunteer: {
    packing: '/images/placeholders/volunteer-1.svg',
    baking: '/images/placeholders/volunteer-2.svg',
  },
  testimonials: [
    '/images/placeholders/testimonial-1.svg',
    '/images/placeholders/testimonial-2.svg',
    '/images/placeholders/testimonial-3.svg',
  ],
  team: [
    '/images/placeholders/team-1.svg',
    '/images/placeholders/team-2.svg',
    '/images/placeholders/team-3.svg',
  ],
  gallery: [
    '/images/placeholders/gallery-1.svg',
    '/images/placeholders/gallery-2.svg',
    '/images/placeholders/gallery-3.svg',
    '/images/placeholders/gallery-1.svg',
    '/images/placeholders/gallery-2.svg',
    '/images/placeholders/gallery-3.svg',
  ],
} as const

/** Pair a real photo path with its SVG fallback for OptimizedImage */
export function imagePair(real: string, fallback: string) {
  return { src: real, fallback }
}
