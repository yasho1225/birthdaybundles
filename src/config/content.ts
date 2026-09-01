import { IMAGES, PLACEHOLDER_IMAGES, imagePair } from './images'

export const SITE = {
  name: 'Birthday Bundles',
  tagline: 'Every kid deserves a birthday to remember',
  mission:
    'We deliver complete birthday bundles — cake, decorations, gifts, and party supplies — to children and families who might otherwise go without a celebration.',
  missionBlurb:
    'Birthday Bundles is a community-powered nonprofit bringing joy, dignity, and celebration to children who deserve to feel special on their birthday.',
  trustCopy: '100% of donations fund birthday bundles for families in need.',
} as const

export const NAV_ITEMS = [
  { label: 'Home', path: '/' },
  { label: 'Our Story', path: '/about' },
  { label: 'Donate', path: '/donate' },
  { label: 'Volunteer', path: '/volunteer' },
  { label: 'Contact', path: '/contact' },
] as const

export const IMPACT_STATS = [
  { value: '500+', label: 'Bundles Delivered' },
  { value: '200+', label: 'Families Served' },
  { value: '50+', label: 'Volunteer Bakers' },
  { value: '12', label: 'Communities' },
] as const

export const BUNDLE_ITEMS = [
  { icon: '🎂', label: 'Birthday cake', description: 'Homemade or store-bought, always made with love' },
  { icon: '🎈', label: 'Decorations', description: 'Balloons, banners, and festive party décor' },
  { icon: '🎁', label: 'Small gift', description: 'Age-appropriate present chosen for each child' },
  { icon: '🎉', label: 'Party supplies', description: 'Plates, cups, napkins, and everything to celebrate' },
] as const

export const DONATION_TIERS = [
  {
    amount: 25,
    title: 'Supplies & Decorations',
    description: 'Covers balloons, banners, plates, and party essentials for one celebration.',
    highlighted: false,
  },
  {
    amount: 50,
    title: 'Half Bundle',
    description: 'Funds half of a complete birthday bundle for one child.',
    highlighted: false,
  },
  {
    amount: 75,
    title: 'Full Birthday Bundle',
    description: 'Sponsors one complete birthday celebration — cake, gift, décor, and supplies.',
    highlighted: true,
    badge: 'Most Popular',
  },
  {
    amount: 150,
    title: 'Sponsor Two Bundles',
    description: 'Give two children the birthday they deserve.',
    highlighted: false,
  },
] as const

export const TESTIMONIALS = [
  {
    quote:
      'My daughter had never had a real birthday party before. When the bundle arrived, her face lit up in a way I will never forget.',
    name: 'Maria R.',
    role: 'Parent',
    ...imagePair(IMAGES.testimonials[0], PLACEHOLDER_IMAGES.testimonials[0]),
  },
  {
    quote:
      'Volunteering with Birthday Bundles has been the most rewarding thing I have done this year. Seeing kids smile makes every hour worth it.',
    name: 'James T.',
    role: 'Volunteer',
    ...imagePair(IMAGES.testimonials[1], PLACEHOLDER_IMAGES.testimonials[1]),
  },
  {
    quote:
      'We partner with Birthday Bundles because they bring dignity and joy to families during hard times. Every bundle is delivered with care.',
    name: 'Sarah K.',
    role: 'Community Partner',
    ...imagePair(IMAGES.testimonials[2], PLACEHOLDER_IMAGES.testimonials[2]),
  },
] as const

export const VOLUNTEER_ROLES = [
  {
    title: 'Volunteers',
    description:
      'Help pack bundles, deliver celebrations to families, and support community events. No experience needed — just a big heart.',
    cta: 'Sign Up to Volunteer',
    linkKey: 'volunteerForm' as const,
  },
  {
    title: 'Bakers',
    description:
      'Bake homemade cakes or coordinate store-bought cakes for upcoming birthdays. Flexible schedule — bake as often as you like.',
    cta: 'Sign Up to Bake',
    linkKey: 'bakerOrderForm' as const,
  },
] as const

export const VOLUNTEER_FAQ = [
  {
    question: 'How much time do I need to commit?',
    answer:
      'As little or as much as you like. Most volunteers contribute 2–4 hours per month. Bakers can sign up for individual birthdays that fit their schedule.',
  },
  {
    question: 'Do I need food safety certification to bake?',
    answer:
      'Home bakers should follow standard food safety practices. We provide guidelines and can connect you with certified kitchen partners if preferred. Store-bought cakes are always welcome too.',
  },
  {
    question: 'Is there a minimum age to volunteer?',
    answer:
      'Volunteers 16 and older can participate independently. Younger volunteers are welcome with a parent or guardian at packing and delivery events.',
  },
  {
    question: 'How are families selected to receive bundles?',
    answer:
      'We work with schools, shelters, and community organizations to identify families in need. All referrals are handled with dignity and confidentiality.',
  },
] as const

export const ABOUT_VALUES = [
  { title: 'Dignity', description: 'Every child deserves to feel celebrated, not singled out.', icon: '💛' },
  { title: 'Community', description: 'Neighbors helping neighbors — one birthday at a time.', icon: '🤝' },
  { title: 'Joy', description: 'Birthdays are milestones. We make sure no child misses theirs.', icon: '🎉' },
] as const

export const TEAM_MEMBERS = [
  {
    name: 'Alex Morgan',
    role: 'Co-Founder',
    bio: 'Started Birthday Bundles after seeing too many kids go without a celebration. Leads outreach and community partnerships.',
    ...imagePair(IMAGES.team[0], PLACEHOLDER_IMAGES.team[0]),
  },
  {
    name: 'Jordan Lee',
    role: 'Co-Founder',
    bio: 'Manages operations, volunteer coordination, and bundle logistics. Believes every birthday should feel magical.',
    ...imagePair(IMAGES.team[1], PLACEHOLDER_IMAGES.team[1]),
  },
  {
    name: 'Casey Rivera',
    role: 'Volunteer Director',
    bio: 'Recruits and supports our amazing network of bakers and delivery volunteers across 12 communities.',
    ...imagePair(IMAGES.team[2], PLACEHOLDER_IMAGES.team[2]),
  },
] as const

export const GALLERY_IMAGES = IMAGES.gallery.map((src, i) => ({
  ...imagePair(src, PLACEHOLDER_IMAGES.gallery[i]),
  alt: `Birthday celebration photo ${i + 1}`,
}))

export const CONTACT_INFO = {
  email: 'hello@birthdaybundles.org',
  // TODO: real URL needed — replace with actual phone when available
  phone: '(555) 123-4567',
  // TODO: real URL needed — replace with actual address when available
  address: '123 Community Lane, Your City, ST 00000',
} as const

export const ORIGIN_STORY = [
  {
    title: 'It started with one birthday',
    body: 'In 2020, a group of neighbors noticed that several children in their community had never had a real birthday party. They pooled resources for one cake, a few balloons, and a small gift. That single celebration sparked something bigger.',
  },
  {
    title: 'Growing through community',
    body: 'Word spread. Bakers volunteered. Families referred other families. Schools and shelters reached out. What began as a grassroots effort became Birthday Bundles — a nonprofit dedicated to making sure no child goes without a birthday.',
  },
  {
    title: 'Where we are today',
    body: 'Today we have delivered over 500 bundles across 12 communities, powered by 50+ volunteer bakers and dozens of delivery volunteers. Every bundle is assembled with care and delivered with dignity.',
  },
] as const

export const STORY_QUOTE = {
  text: 'A birthday is not a luxury — it is a milestone every child deserves to celebrate.',
  attribution: 'The Birthday Bundles founders',
} as const

export const HERO_IMAGE = imagePair(IMAGES.hero, PLACEHOLDER_IMAGES.hero)
export const MISSION_IMAGE = imagePair(IMAGES.mission, PLACEHOLDER_IMAGES.mission)
