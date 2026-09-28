import { useEffect, useId, useState } from 'react'
import { LINKS } from '@/config/site'
import { NAV_LINKS } from '@/config/content'
import { useSmoothScroll } from '@/hooks/SmoothScrollProvider'

const SECTION_IDS = NAV_LINKS.map((link) => link.id)

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [activeId, setActiveId] = useState<string | null>('top')
  const menuId = useId()
  const smoothScrollTo = useSmoothScroll()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  useEffect(() => {
    const sections = SECTION_IDS.map((id) => document.getElementById(id)).filter(
      (el): el is HTMLElement => Boolean(el),
    )
    if (!sections.length) return

    const ratios = new Map<string, number>()

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          ratios.set(entry.target.id, entry.intersectionRatio)
        }

        let bestId: string | null = null
        let bestRatio = 0
        for (const id of SECTION_IDS) {
          const ratio = ratios.get(id) ?? 0
          if (ratio > bestRatio) {
            bestRatio = ratio
            bestId = id
          }
        }

        if (window.scrollY < 400) {
          setActiveId('top')
          return
        }

        setActiveId(bestRatio > 0.15 && bestId ? bestId : null)
      },
      {
        root: null,
        rootMargin: `-${Math.round(window.innerHeight * 0.25)}px 0px -${Math.round(window.innerHeight * 0.35)}px 0px`,
        threshold: [0, 0.15, 0.35, 0.5, 0.65, 0.85, 1],
      },
    )

    for (const section of sections) observer.observe(section)
    return () => observer.disconnect()
  }, [])

  const goTo = (id: string) => {
    setOpen(false)
    setActiveId(id)
    smoothScrollTo(id)
  }

  return (
    <header
      className={`nav ${scrolled || open ? 'nav--solid' : ''}`.trim()}
    >
      <div className="nav__inner">
        <nav className="nav__desktop" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <button
              key={link.id}
              type="button"
              className={`nav__link${activeId === link.id ? ' is-active' : ''}`}
              aria-current={activeId === link.id ? 'true' : undefined}
              onClick={() => goTo(link.id)}
            >
              {link.label}
            </button>
          ))}
          <a
            className="btn btn--accent btn--sm"
            href={LINKS.playStore}
            target="_blank"
            rel="noopener noreferrer"
          >
            Get it on Google Play
          </a>
        </nav>

        <button
          type="button"
          className="nav__burger"
          aria-expanded={open}
          aria-controls={menuId}
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div
        id={menuId}
        className={`nav__mobile ${open ? 'is-open' : ''}`}
        hidden={!open}
      >
        <nav aria-label="Mobile">
          {NAV_LINKS.map((link) => (
            <button
              key={link.id}
              type="button"
              className={`nav__mobile-link${activeId === link.id ? ' is-active' : ''}`}
              aria-current={activeId === link.id ? 'true' : undefined}
              onClick={() => goTo(link.id)}
            >
              {link.label}
            </button>
          ))}
          <a
            className="btn btn--accent"
            href={LINKS.playStore}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
          >
            Get it on Google Play
          </a>
        </nav>
      </div>
    </header>
  )
}
