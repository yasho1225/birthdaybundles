import {
  ABOUT_VALUES,
  BUNDLE_ITEMS,
  DONATION_TIERS,
  NAV_ITEMS,
  ORIGIN_STORY,
  SITE,
  TEAM_MEMBERS,
  VOLUNTEER_FAQ,
  VOLUNTEER_ROLES,
} from '../config/content'

export type SearchResult = {
  title: string
  excerpt: string
  path: string
  category: string
}

export const SEARCH_INDEX: SearchResult[] = [
  { title: 'Home', excerpt: SITE.tagline, path: '/', category: 'Page' },
  { title: 'Donate', excerpt: SITE.trustCopy, path: '/donate', category: 'Page' },
  { title: 'Volunteer & Bake', excerpt: 'Join our community of volunteers and bakers.', path: '/volunteer', category: 'Page' },
  { title: 'Our Story', excerpt: SITE.missionBlurb, path: '/about', category: 'Page' },
  { title: 'Contact', excerpt: 'Get in touch with Birthday Bundles.', path: '/contact', category: 'Page' },
  ...NAV_ITEMS.map((item) => ({
    title: item.label,
    excerpt: `Navigate to ${item.label}`,
    path: item.path,
    category: 'Navigation',
  })),
  ...BUNDLE_ITEMS.map((item) => ({
    title: item.label,
    excerpt: item.description,
    path: '/donate',
    category: 'Bundle',
  })),
  ...DONATION_TIERS.map((tier) => ({
    title: `$${tier.amount} — ${tier.title}`,
    excerpt: tier.description,
    path: '/donate',
    category: 'Donation',
  })),
  ...VOLUNTEER_ROLES.map((role) => ({
    title: role.title,
    excerpt: role.description,
    path: '/volunteer',
    category: 'Volunteer',
  })),
  ...VOLUNTEER_FAQ.map((item) => ({
    title: item.question,
    excerpt: item.answer,
    path: '/volunteer',
    category: 'FAQ',
  })),
  ...ABOUT_VALUES.map((value) => ({
    title: value.title,
    excerpt: value.description,
    path: '/about',
    category: 'Values',
  })),
  ...ORIGIN_STORY.map((section) => ({
    title: section.title,
    excerpt: section.body,
    path: '/about',
    category: 'Story',
  })),
  ...TEAM_MEMBERS.map((member) => ({
    title: member.name,
    excerpt: `${member.role}: ${member.bio}`,
    path: '/about',
    category: 'Team',
  })),
]

export function searchContent(query: string, limit = 8): SearchResult[] {
  const normalized = query.trim().toLowerCase()
  if (!normalized) return []

  const scored = SEARCH_INDEX.map((item) => {
    const haystack = `${item.title} ${item.excerpt} ${item.category}`.toLowerCase()
    const titleMatch = item.title.toLowerCase().includes(normalized)
    const excerptMatch = item.excerpt.toLowerCase().includes(normalized)
    const score = (titleMatch ? 3 : 0) + (excerptMatch ? 1 : 0) + (haystack.includes(normalized) ? 1 : 0)
    return { item, score }
  })
    .filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score)

  const seen = new Set<string>()
  const results: SearchResult[] = []
  for (const { item } of scored) {
    const key = `${item.path}-${item.title}`
    if (seen.has(key)) continue
    seen.add(key)
    results.push(item)
    if (results.length >= limit) break
  }
  return results
}
