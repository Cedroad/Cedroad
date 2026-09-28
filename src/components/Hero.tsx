import { ASSETS, SITE, assetUrl } from '@/config/site'
import { HERO, SCREENSHOTS } from '@/config/content'
import { GooglePlayBadge } from '@/components/GooglePlayBadge'

const HERO_SHOT = SCREENSHOTS[0]

export function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-heading">
      <div className="hero__atmosphere" aria-hidden="true" />
      <div className="hero__inner">
        <div className="hero__copy">
          <img
            className="hero__logo"
            src={assetUrl(ASSETS.logo)}
            alt={`${SITE.productName} by ${SITE.brand}`}
            width={220}
            height={220}
          />
          <p className="hero__brand-line">
            <span className="hero__product">{SITE.productName}</span>
            <span className="hero__by">by</span>
            <span className="hero__cedroad">{SITE.brand}</span>
          </p>
          <h1 id="hero-heading" className="hero__headline">
            {HERO.headlineLines.map((line) => (
              <span key={line} className="hero__headline-line">
                {line}
              </span>
            ))}
          </h1>
          <p className="hero__sub">{HERO.subheadline}</p>
          <div className="hero__cta">
            <GooglePlayBadge />
          </div>
        </div>

        <div className="hero__visual">
          <div className="phone phone--hero">
            <div className="phone__bezel">
              <img
                src={assetUrl(ASSETS.screenshots[HERO_SHOT.srcKey])}
                alt={HERO_SHOT.alt}
                width={1080}
                height={2340}
                decoding="async"
                fetchPriority="high"
              />
            </div>
            <div className="phone__glow" aria-hidden="true" />
          </div>
        </div>
      </div>
    </section>
  )
}
