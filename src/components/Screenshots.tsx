import { useCallback, useEffect, useState, type CSSProperties } from 'react'
import { ASSETS, assetUrl } from '@/config/site'
import { SCREENSHOTS } from '@/config/content'
import { Reveal } from '@/components/Reveal'

/** Must match `.screenshots--row .gallery__slide` width in CSS */
const ROW_SLIDE_REM = 14.6875
/** Must match `.screenshots--row .gallery__stage` gap in CSS */
const ROW_GAP_PX = 40
/** Must match `.screenshots--row .section__inner` horizontal inset (2rem) */
const ROW_INLINE_PAD_PX = 32

function galleryRowFits(count: number) {
  const rem = parseFloat(getComputedStyle(document.documentElement).fontSize) || 16
  const needed =
    count * ROW_SLIDE_REM * rem + Math.max(0, count - 1) * ROW_GAP_PX + ROW_INLINE_PAD_PX
  return window.innerWidth >= needed
}

export function Screenshots() {
  const [active, setActive] = useState(0)
  const [isRow, setIsRow] = useState(false)
  const total = SCREENSHOTS.length

  const prev = useCallback(
    () => setActive((i) => (i - 1 + total) % total),
    [total],
  )
  const next = useCallback(
    () => setActive((i) => (i + 1) % total),
    [total],
  )

  useEffect(() => {
    const sync = () => setIsRow(galleryRowFits(total))
    sync()
    window.addEventListener('resize', sync)
    return () => window.removeEventListener('resize', sync)
  }, [total])

  useEffect(() => {
    if (isRow) return
    const id = window.setInterval(() => {
      setActive((i) => (i + 1) % total)
    }, 4500)
    return () => window.clearInterval(id)
  }, [total, isRow])

  return (
    <section
      className={`section screenshots${isRow ? ' screenshots--row' : ''}`}
      id="screenshots"
      aria-labelledby="screenshots-heading"
    >
      <div className="section__inner">
        <Reveal className="screenshots__intro">
          <p className="eyebrow">Gameplay</p>
          <h2 id="screenshots-heading" className="section__title">
            Sleek, modern design
          </h2>
          <p className="section__lead">
            Dark theme, simple visuals and clear style that will never distract you from the
            energy of the night.
          </p>
        </Reveal>

        <Reveal className="gallery" delay={100}>
          <div className="gallery__stage">
            {SCREENSHOTS.map((shot, i) => {
              const src = ASSETS.screenshots[shot.srcKey]
              const offset = i - active
              const isActive = i === active
              const opacity = Math.abs(offset) > 1 ? 0 : isActive ? 1 : 0.35
              return (
                <figure
                  key={shot.srcKey}
                  className={`gallery__slide ${isActive ? 'is-active' : ''}`}
                  style={
                    {
                      '--gal-x': `${offset * 108}%`,
                      '--gal-scale': isActive ? 1 : 0.88,
                      '--gal-opacity': opacity,
                      '--gal-z': isActive ? 2 : 1,
                    } as CSSProperties
                  }
                  aria-hidden={isRow || isActive ? undefined : true}
                >
                  <div className="phone phone--gallery">
                    <div className="phone__bezel">
                      <img
                        src={assetUrl(src)}
                        alt={shot.alt}
                        width={1080}
                        height={2340}
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                  </div>
                </figure>
              )
            })}
          </div>

          <div className="gallery__controls">
            <button
              type="button"
              className="gallery__btn"
              onClick={prev}
              aria-label="Previous screenshot"
            >
              ‹
            </button>
            <div className="gallery__dots" role="tablist" aria-label="Screenshot slides">
              {SCREENSHOTS.map((shot, i) => (
                <button
                  key={shot.srcKey}
                  type="button"
                  role="tab"
                  aria-selected={i === active}
                  className={`gallery__dot ${i === active ? 'is-active' : ''}`}
                  onClick={() => setActive(i)}
                  aria-label={`Show screenshot ${i + 1}`}
                />
              ))}
            </div>
            <button
              type="button"
              className="gallery__btn"
              onClick={next}
              aria-label="Next screenshot"
            >
              ›
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
