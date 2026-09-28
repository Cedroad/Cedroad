/// Central site & product constants.

export const SITE = {
  brand: 'Cedroad',
  productName: 'Never Have I Ever',
  title: 'Never Have I Ever - The Ultimate Party Game by Cedroad',
  description:
    'Never Have I Ever by Cedroad - the ultimate Android party game for friends, nights out, and spontaneous game nights.',
  url: 'https://cedroad.com/never-have-i-ever/',
  homeUrl: 'https://cedroad.com/',
  basePath: '/never-have-i-ever/',
} as const

export const LINKS = {
  /** Placeholder until the Play listing is public */
  playStore: 'https://play.google.com/store',
  privacyPolicy: 'https://cedroad.github.io/never-have-i-ever-legal/',
  supportEmail: 'cedroadapps@gmail.com',
  supportMailto: 'mailto:cedroadapps@gmail.com',
  contactEmail: 'contact@cedroad.com',
  contactMailto: 'mailto:contact@cedroad.com',
  redbubble: 'https://www.redbubble.com/people/cedroad/shop',
  /** Relative to Vite `base` (use with `assetUrl`). */
  nhiePath: 'never-have-i-ever/',
  githubOrg: 'https://github.com/Cedroad',
} as const

export const ASSETS = {
  logo: 'images/logo.png',
  brandLogo: 'images/Redbubble-Icon-Logo-Vector.svg-.png',
  merchBanner: 'images/merch-banner.jpg',
  googlePlayBadge: 'images/badges/google-play.svg',
  screenshots: {
    gameplay: 'images/screenshots/gameplay-card.jpg',
    questions: 'images/screenshots/onboarding-questions.jpg',
    categoriesOnboarding: 'images/screenshots/onboarding-categories.jpg',
    swipe: 'images/screenshots/onboarding-swipe.jpg',
    categories: 'images/screenshots/categories.jpg',
  },
} as const

/** Resolve a public asset or in-site path against Vite `base`. */
export function assetUrl(path: string): string {
  const base = import.meta.env.BASE_URL
  return `${base}${path.replace(/^\//, '')}`
}
