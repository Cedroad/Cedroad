import { useEffect, useState } from 'react'
import { CATEGORIES } from '@/config/content'
import { assetUrl } from '@/config/site'
import { Reveal } from '@/components/Reveal'

const ROTATE_MS = 5000

/** Category spotlight block (used inside the Features section). */
export function Categories() {
  const [active, setActive] = useState(0)
  const total = CATEGORIES.length
  const cat = CATEGORIES[active]

  useEffect(() => {
    const id = window.setInterval(() => {
      setActive((i) => (i + 1) % total)
    }, ROTATE_MS)
    return () => window.clearInterval(id)
  }, [total, active])

  return (
    <div
      className="categories"
      id="categories"
      aria-labelledby="categories-heading"
      aria-roledescription="carousel"
    >
      <Reveal>
        <h2 id="categories-heading" className="section__title section__title--sm">
          Every vibe. One deck. Eight categories.
        </h2>
        <p className="section__lead">
          From chill warm-ups to tough 18+ questions - pick your mood or scale it up as you go!
        </p>
      </Reveal>

      <Reveal className="cat-spotlight" delay={80}>
        <article
          className="cat-spotlight__card"
          style={{ ['--cat-accent' as string]: cat.accent }}
          key={cat.name}
          aria-live="polite"
          aria-atomic="true"
        >
          <div className="cat-spotlight__art">
            <span
              className="cat-spotlight__img"
              style={{
                ['--cat-img' as string]: `url(${assetUrl(cat.image)})`,
              }}
              role="img"
              aria-label={`${cat.name} icon`}
            />
          </div>
          <div className="cat-spotlight__copy">
            <header className="cat-spotlight__head">
              <h3>{cat.name}</h3>
              {cat.badge ? (
                <span className="cat-spotlight__badge">{cat.badge}</span>
              ) : null}
            </header>
            <p>{cat.description}</p>
          </div>
        </article>

        <div className="cat-spotlight__dots" role="tablist" aria-label="Categories">
          {CATEGORIES.map((item, i) => (
            <button
              key={item.name}
              type="button"
              role="tab"
              aria-selected={i === active}
              aria-label={`Show ${item.name}`}
              className={`cat-spotlight__dot${i === active ? ' is-active' : ''}`}
              onClick={() => setActive(i)}
            />
          ))}
        </div>
      </Reveal>
    </div>
  )
}
