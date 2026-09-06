import type { IconName } from '../types/icons'
import { IMAGES, PLACEHOLDER_IMAGES, imagePair } from './images'

export const SITE = {
  name: 'Birthday Bundles',
  tagline: 'Every child deserves to be celebrated.',
  mission:
    'Birthday Bundles brings joy to children living in shelters through birthday celebrations, baked goods, and milestone gifts.',
  missionBlurb:
    'Birthday Bundles is an official 501(c)(3) student-led nonprofit based in Alpharetta, GA.',
  trustCopy:
    'Free birthday, holiday, milestone, and just-because deliveries for children in the Atlanta area.',
} as const

export const NAV_ITEMS = [
  { label: 'Home', path: '/' },
  { label: 'Request a bundle', path: '/request' },
  { label: 'Our Story', path: '/about' },
  { label: 'Donate', path: '/donate' },
  { label: 'Volunteer', path: '/volunteer' },
  { label: 'Contact', path: '/contact' },
] as const

/** Facts verified on Birthday Bundles' original public site. */
export const IMPACT_STATS = [
  { value: '501(c)(3)', label: 'Official nonprofit' },
  { value: '4', label: 'Free service types' },
  { value: 'Atlanta', label: 'Area delivery' },
  { value: 'Funds', label: 'Bundle + baking supplies' },
] as const

export const HOW_IT_WORKS = [
  {
    icon: 'users' as IconName,
    title: 'Share the celebration',
    description:
      'Use the request form to tell us about the child, the moment, and the details that will make it feel personal.',
  },
  {
    icon: 'package' as IconName,
    title: 'We prepare the bundle',
    description:
      'Birthday Bundles coordinates a celebration around the requested birthday, milestone, holiday, or just-because delivery.',
  },
  {
    icon: 'truck' as IconName,
    title: 'Delivery is coordinated',
    description:
      'Individual deliveries are available in the Atlanta area; shelter and larger requests are coordinated directly.',
  },
] as const

export const BUNDLE_ITEMS = [
  { icon: 'cake' as IconName, label: 'Birthday cake', description: 'A celebration cake or baked good.' },
  { icon: 'balloon' as IconName, label: 'Decorations', description: 'Details that make the moment feel festive.' },
  { icon: 'gift' as IconName, label: 'Small gift', description: 'A thoughtful piece for a birthday or milestone.' },
  { icon: 'party' as IconName, label: 'Party supplies', description: 'Celebration essentials for sharing the day.' },
] as const

/**
 * Public updates from the original Birthday Bundles site. These replace
 * unverified individual testimonials with attributable organization news.
 */
export const TESTIMONIALS = [
  {
    quote:
      'Birthday Bundles delivered celebration supplies to Covenant House Georgia, helping make a special day possible for the young people they serve.',
    name: 'Covenant House Georgia delivery',
    role: 'Community update',
    ...imagePair(IMAGES.testimonials[0], PLACEHOLDER_IMAGES.testimonials[0]),
  },
  {
    quote:
      'Birthday Bundles is officially recognized as a 501(c)(3), so donations are tax deductible.',
    name: 'Official nonprofit milestone',
    role: 'Community update',
    ...imagePair(IMAGES.testimonials[1], PLACEHOLDER_IMAGES.testimonials[1]),
  },
  {
    quote:
      'An in-kind KitchenAid donation helps Birthday Bundles prepare more baked goods for celebrations.',
    name: 'A gift to the kitchen',
    role: 'Community update',
    ...imagePair(IMAGES.testimonials[2], PLACEHOLDER_IMAGES.testimonials[2]),
  },
] as const

export const VOLUNTEER_ROLES = [
  {
    title: 'Volunteer support',
    description:
      'Help assemble celebration boxes, coordinate deliveries, and support Birthday Bundles in the community.',
    cta: 'Volunteer with us',
    linkKey: 'volunteerForm' as const,
  },
  {
    title: 'Volunteer bakers',
    description:
      'Bake birthday cakes, cupcakes, or treats for an upcoming celebration. Kitchen access is required.',
    cta: 'Volunteer as a baker',
    linkKey: 'volunteerForm' as const,
  },
] as const

export const VOLUNTEER_FAQ = [
  {
    question: 'Who can volunteer?',
    answer:
      'Birthday Bundles welcomes volunteers ages 14 and up. The volunteer form is the best place to share how you would like to help.',
  },
  {
    question: 'Do volunteer bakers need kitchen access?',
    answer:
      'Yes. The Volunteer Baker Form asks bakers to confirm that they have access to a kitchen.',
  },
  {
    question: 'What can I help with?',
    answer:
      'Opportunities include baking birthday cakes, cupcakes, and treats; assembling boxes; and helping with deliveries.',
  },
  {
    question: 'How do I share my availability?',
    answer:
      'The form asks about your neighborhood and how many deliveries or celebrations you can support each month.',
  },
] as const

export const REQUEST_SERVICES = [
  {
    title: 'Birthday Bundles',
    description: 'Personalized birthday celebration boxes for children in shelters.',
  },
  {
    title: 'Special Occasion Deliveries',
    description: 'Support for meaningful milestones, from school achievements to a first job.',
  },
  {
    title: 'Holiday Bundles',
    description: 'Celebration bundles for holiday moments and special occasions.',
  },
  {
    title: 'Just Because Deliveries',
    description: 'Thoughtful deliveries for a child who deserves an unexpected moment of joy.',
  },
] as const

export const REQUEST_GUIDANCE = {
  availability: 'All Birthday Bundles services are free and available in the Atlanta area.',
  timing: 'Please submit individual requests at least one week before the requested delivery date.',
  bulk: 'For orders for more than three recipients and shelter bulk orders, email info@birthdaybundles.org.',
  signIn: 'Google sign-in is required to submit the secure request form.',
} as const

export const ABOUT_VALUES = [
  { title: 'Dignity', description: 'Every child deserves to feel celebrated.', icon: 'heart' as IconName },
  { title: 'Community', description: 'Volunteers, donors, and partners make every delivery possible.', icon: 'community' as IconName },
  { title: 'Joy', description: 'A birthday or milestone can become a moment of belonging.', icon: 'sparkle' as IconName },
] as const

export const TEAM_MEMBERS = [
  {
    name: 'Reyha Raghavaraju',
    role: 'Founder & Executive Director',
    bio: '',
    ...imagePair(IMAGES.team[0], PLACEHOLDER_IMAGES.team[0]),
  },
  {
    name: 'Saira Sharma',
    role: 'Content Manager',
    bio: '',
    ...imagePair(IMAGES.team[1], PLACEHOLDER_IMAGES.team[1]),
  },
] as const

export const GALLERY_IMAGES = IMAGES.gallery.map((src, i) => ({
  ...imagePair(src, PLACEHOLDER_IMAGES.gallery[i]),
  alt: `Birthday Bundles community photo ${i + 1}`,
}))

export const CONTACT_INFO = {
  email: 'info@birthdaybundles.org',
  volunteerEmail: 'volunteer@birthdaybundles.org',
  sponsorEmail: 'birthdaybundlesalpharetta@gmail.com',
  phone: '470-840-5456',
  location: 'Based in Alpharetta, GA',
  address: 'Based in Alpharetta, GA',
  charityId: '41-4325837',
} as const

export const ORIGIN_STORY = [
  {
    title: 'Celebrations are care',
    body: 'Birthday Bundles brings joy to children living in shelters through birthday celebrations, baked goods, and milestone gifts.',
  },
  {
    title: 'More than one kind of moment',
    body: 'The organization offers free Birthday Bundles, Special Occasion Deliveries, Holiday Bundles, and Just Because Deliveries.',
  },
  {
    title: 'Local and community-powered',
    body: 'Birthday Bundles is an official 501(c)(3) student-led nonprofit based in Alpharetta, GA, serving the Atlanta area.',
  },
] as const

export const STORY_QUOTE = {
  text: 'Every child deserves to be celebrated.',
  attribution: 'Birthday Bundles',
} as const

export const HERO_IMAGE = imagePair(IMAGES.hero, PLACEHOLDER_IMAGES.hero)
export const MISSION_IMAGE = imagePair(IMAGES.mission, PLACEHOLDER_IMAGES.mission)
