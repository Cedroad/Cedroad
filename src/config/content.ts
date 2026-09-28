/** Marketing copy & structured content for the landing page. */

export const NAV_LINKS = [
  { id: 'top', label: 'The Game' },
  { id: 'how-to-play', label: 'How to Play' },
  { id: 'features', label: 'Features' },
  { id: 'screenshots', label: 'Screenshots' },
  { id: 'contact', label: 'Contact' },
] as const

export const HERO = {
  headlineLines: ['Break the ice.', 'Expose the secrets.'] as const,
  subheadline:
    'The ultimate Android party game for laughing harder, confessing louder, and turning any night into a story.',
} as const

export const CONCEPT = {
  eyebrow: 'The concept',
  title: 'One question. A room full of stories.',
  body: 'Never Have I Ever is the classic party ritual - read a question, admit it if you’ve done it, sip your drink and watch the laughter (and secrets) spill out. Perfect for breaking awkward silence, discovering wild truths about your friends, and turning a boring night into an unforgettable party.',
  beats: [
    {
      title: 'Break the ice',
      text: 'Warm up the room fast - even with people who barely know each other.',
    },
    {
      title: 'Expose the secrets',
      text: 'From silly fails to spicy confessions, every card pulls a story out of someone.',
    },
    {
      title: 'Own the night',
      text: 'Swipe the next question, share your secrets and keep the energy climbing.',
    },
  ],
} as const

export const HOW_TO_PLAY = {
  eyebrow: 'How to play',
  title: 'Three steps. Infinite fun.',
  steps: [
    {
      n: '01',
      title: 'Pick a category',
      text: 'Warm up with Life, go deeper with Confessions, or get crazy with Premium categories.',
    },
    {
      n: '02',
      title: 'Read the question',
      text: 'The question always starts with “I have never…”. Anyone who has done it has to own up, sip their drink and share the story.',
    },
    {
      n: '03',
      title: 'Swipe for more',
      text: 'Swipe left or right for the next card. The app won’t repeat questions until you reset that category.',
    },
  ],
} as const

export const FEATURES = [
  {
    title: '850+ hand-picked questions',
    text: 'Written and reviewed by people - no AI filler. More packs coming in future updates.',
  },
  {
    title: 'Text-to-speech',
    text: 'Reads questions out loud so everyone in the room can hear them.',
  },
  {
    title: 'Custom mixes',
    text: 'Build your own night with Mixed mode - combine your favorite categories.',
  },
  {
    title: 'Offline ready',
    text: 'No Wi-Fi required once installed. Party anywhere the night takes you.',
  },
  {
    title: 'Affordable Premium',
    text: 'Unlock every pack and remove ads so the game never kills the vibe.',
  },
  {
    title: 'Never repeats',
    text: 'Seen questions stay out of rotation until you reset - fresh prompts all night.',
  },
] as const

export type CategoryItem = {
  name: string
  description: string
  accent: string
  image: string
  badge?: string
}

/** All Category Page entries (including Mixed). Party / Spicy / Hardcore are 18+.
 * Accents follow in-game primary hues (MockData), kept vivid for the landing UI.
 */
export const CATEGORIES: CategoryItem[] = [
  {
    name: 'Mixed',
    description: 'Pick your own favorite categories!',
    accent: '#c4a832',
    image: 'images/categories/category_mixed.png',
  },
  {
    name: 'Life',
    description: 'Chill category for a perfect warm-up!',
    accent: '#5a9a68',
    image: 'images/categories/category_life.png',
  },
  {
    name: 'Confessions',
    description: 'Are you ready to admit things you never admitted before?',
    accent: '#4a7ab0',
    image: 'images/categories/category_confessions.png',
  },
  {
    name: 'Party',
    description: "It's time to tell the story of the best party in your life!",
    accent: '#a56bb0',
    image: 'images/categories/category_party.png',
    badge: '18+',
  },
  {
    name: 'Scary',
    description: "You have to be brave to admit that you're afraid...",
    accent: '#d4a84a',
    image: 'images/categories/category_scary.png',
  },
  {
    name: 'Silly',
    description: 'What is the craziest or dumbest thing you’ve ever done?',
    accent: '#4aa890',
    image: 'images/categories/category_silly.png',
  },
  {
    name: 'Relationships',
    description: 'The quickest way to really get to know your partner!',
    accent: '#c45a78',
    image: 'images/categories/category_relationships.png',
  },
  {
    name: 'Spicy',
    description: 'Woah, did it just get really, really hot around here?',
    accent: '#c45a3a',
    image: 'images/categories/category_spicy.png',
    badge: '18+',
  },
  {
    name: 'Hardcore',
    description: 'Time to reveal your deepest and darkest secrets...',
    accent: '#a33a3c',
    image: 'images/categories/category_hardcore.png',
    badge: '18+',
  },
]

export const SCREENSHOTS = [
  {
    srcKey: 'categories' as const,
    alt: 'Category selection screen with Mixed, Life, Confessions, and more',
  },
  {
    srcKey: 'gameplay' as const,
    alt: 'Question page - Confessions category prompt',
  },
  {
    srcKey: 'categoriesOnboarding' as const,
    alt: 'Tutorial - eight awesome categories',
  },
  {
    srcKey: 'swipe' as const,
    alt: 'Tutorial - swipe to the next card',
  },
  {
    srcKey: 'questions' as const,
    alt: 'Tutorial - 850+ hand-picked questions',
  },
] as const

export const CTA = {
  title: 'Ready to start the night?',
  text: 'Download Never Have I Ever on Google Play and turn the next hangout into a legend.',
} as const
