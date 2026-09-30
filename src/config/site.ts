/// Central site & product constants.

export const SITE = {
  brand: 'Cedroad',
  productName: 'Never Have I Ever',
  title: 'Never Have I Ever - The Ultimate Party Game',
  description:
    'Never Have I Ever by Cedroad - the ultimate Android party game for friends, nights out, and spontaneous game nights.',
  url: 'https://cedroad.com/never-have-i-ever/',
  homeUrl: 'https://cedroad.com/',
  basePath: '/never-have-i-ever/',
} as const

export const LINKS = {
  playStore:
    'https://play.google.com/store/apps/details?id=com.never_have_i_ever_party_game',
  supportEmail: 'neverhaveiever@cedroad.com',
  supportMailto: 'mailto:neverhaveiever@cedroad.com',
  contactEmail: 'contact@cedroad.com',
  contactMailto: 'mailto:contact@cedroad.com',
  redbubble: 'https://www.redbubble.com/people/cedroad/shop',
  /** Relative to Vite `base` (use with `assetUrl`). */
  nhiePath: 'never-have-i-ever/',
  privacyPolicy: 'never-have-i-ever-privacy-policy/',
  githubOrg: 'https://github.com/Cedroad',
} as const

export const ASSETS = {
  logo: 'images/logo.png',
  brandLogo: 'images/Redbubble-Icon-Logo-Vector.svg-.png',
  googlePlayBadge: 'images/badges/google-play.svg',
  screenshots: {
    gameplay: 'images/Screenshot_20260918_000224.jpg',
    questions: 'images/Screenshot_20260918_000836.jpg',
    categoriesOnboarding: 'images/Screenshot_20260918_000317.jpg',
    swipe: 'images/Screenshot_20260918_000325.jpg',
    categories: 'images/Screenshot_20260918_000427.jpg',
  },
} as const

/** Resolve a public asset or in-site path against Vite `base`. */
export function assetUrl(path: string): string {
  const base = import.meta.env.BASE_URL
  return `${base}${path.replace(/^\//, '')}`
}
