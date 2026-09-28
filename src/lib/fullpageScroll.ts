/**
 * Desktop full-page section scroller.
 * Installed once on window (HMR-safe) so duplicate listeners / lock state cannot stack.
 */
const DESKTOP_MQ = '(min-width: 900px)'
const SCROLL_MS = 1200
const COOLDOWN_MS = 0
const GLOBAL_KEY = '__nhieFullpageScroll__'

type GlobalScroll = {
  locked: boolean
  raf: number
  unlockTimer: number
  index: number
  handler: ((e: WheelEvent) => void) | null
  installed: boolean
}

/** Correct cubic in-out — must use (-2t+2), not (-2t+1), or progress overshoots to 1.5. */
function easeInOutCubic(t: number) {
  return t < 0.5
    ? 4 * t * t * t
    : 1 - Math.pow(-2 * t + 2, 3) / 2
}

function getGlobal(): GlobalScroll {
  const w = window as Window & { [GLOBAL_KEY]?: GlobalScroll }
  if (!w[GLOBAL_KEY]) {
    w[GLOBAL_KEY] = {
      locked: false,
      raf: 0,
      unlockTimer: 0,
      index: 0,
      handler: null,
      installed: false,
    }
  }
  return w[GLOBAL_KEY]
}

function sectionEls(): HTMLElement[] {
  return [
    ...document.querySelectorAll<HTMLElement>('.hero, main > .section'),
  ]
}

function navHeight() {
  const nav = document.querySelector<HTMLElement>('.nav')
  if (nav) return nav.getBoundingClientRect().height
  return 68
}

function targetYFor(el: HTMLElement) {
  if (el.classList.contains('hero') || el.id === 'top') return 0
  return Math.max(0, el.offsetTop - navHeight())
}

function scrollingEl(): Element {
  return document.scrollingElement || document.documentElement
}

function readScrollY() {
  return scrollingEl().scrollTop
}

function writeScrollY(y: number) {
  scrollingEl().scrollTop = y
}

function syncIndexFromScroll(g: GlobalScroll) {
  const sections = sectionEls()
  if (!sections.length) return
  const y = readScrollY()
  let best = 0
  let bestDist = Infinity
  sections.forEach((el, i) => {
    const dist = Math.abs(targetYFor(el) - y)
    if (dist < bestDist) {
      bestDist = dist
      best = i
    }
  })
  g.index = best
}

function finishUnlock(g: GlobalScroll) {
  window.clearTimeout(g.unlockTimer)
  g.unlockTimer = window.setTimeout(() => {
    g.locked = false
    document.documentElement.classList.remove('is-section-scrolling')
    syncIndexFromScroll(g)
  }, COOLDOWN_MS)
}

function animateToIndex(nextIndex: number): boolean {
  const g = getGlobal()
  if (g.locked) return false

  const sections = sectionEls()
  if (!sections.length) return false

  const clamped = Math.max(0, Math.min(sections.length - 1, nextIndex))
  const y = targetYFor(sections[clamped])
  const start = readScrollY()
  const delta = y - start

  // Claim the lock immediately — even if delta is tiny, swallow this gesture.
  g.locked = true
  document.documentElement.classList.add('is-section-scrolling')
  window.clearTimeout(g.unlockTimer)
  cancelAnimationFrame(g.raf)

  if (Math.abs(delta) < 2) {
    g.index = clamped
    writeScrollY(y)
    finishUnlock(g)
    return true
  }

  g.index = clamped
  const t0 = performance.now()

  const tick = (now: number) => {
    const t = Math.min(1, (now - t0) / SCROLL_MS)
    const eased = easeInOutCubic(t)
    writeScrollY(start + delta * eased)
    if (t < 1) {
      g.raf = requestAnimationFrame(tick)
    } else {
      writeScrollY(y)
      g.raf = 0
      finishUnlock(g)
    }
  }

  g.raf = requestAnimationFrame(tick)
  return true
}

function goBy(dir: 1 | -1): boolean {
  const g = getGlobal()
  if (g.locked) return false
  // Resync in case the user dragged the scrollbar since the last move.
  syncIndexFromScroll(g)
  return animateToIndex(g.index + dir)
}

export function fullpageScrollToId(id: string): boolean {
  if (!window.matchMedia(DESKTOP_MQ).matches) return false

  const g = getGlobal()
  if (g.locked) return false

  if (id === 'top') return animateToIndex(0)

  const sections = sectionEls()
  const idx = sections.findIndex((el) => el.id === id)
  if (idx < 0) return false
  return animateToIndex(idx)
}

function onWheel(e: WheelEvent) {
  if (!window.matchMedia(DESKTOP_MQ).matches) return
  if (Math.abs(e.deltaY) <= Math.abs(e.deltaX)) return

  e.preventDefault()
  e.stopImmediatePropagation()

  const g = getGlobal()
  if (g.locked) return
  if (e.deltaY === 0) return

  goBy(e.deltaY > 0 ? 1 : -1)
}

/** Idempotent install — safe across React StrictMode and Vite HMR. */
export function installFullpageScroll() {
  const g = getGlobal()

  if (g.handler) {
    window.removeEventListener('wheel', g.handler, { capture: true })
  }

  g.handler = onWheel
  window.addEventListener('wheel', onWheel, { passive: false, capture: true })
  g.installed = true
  syncIndexFromScroll(g)
}
