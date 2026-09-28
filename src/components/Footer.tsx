import { CTA } from '@/config/content'
import { LINKS, SITE, assetUrl } from '@/config/site'
import { GooglePlayBadge } from '@/components/GooglePlayBadge'
import { Reveal } from '@/components/Reveal'

export function CtaBand() {
  return (
    <section className="section cta-band" id="contact" aria-labelledby="cta-heading">
      <div className="section__inner cta-band__inner">
        <Reveal>
          <h2 id="cta-heading" className="section__title">
            {CTA.title}
          </h2>
          <p className="section__lead">{CTA.text}</p>
          <div className="cta-band__actions">
            <GooglePlayBadge />
            <a className="btn btn--ghost" href={LINKS.supportMailto}>
              Contact support
            </a>
          </div>
          <p className="cta-band__email">
            Or write us at{' '}
            <a href={LINKS.supportMailto}>{LINKS.supportEmail}</a>
          </p>
        </Reveal>
      </div>
      <Footer />
    </section>
  )
}

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="section__inner site-footer__inner">
        <p className="site-footer__copy">
          © {year} {SITE.brand}. All rights reserved.
        </p>
        <nav className="site-footer__nav" aria-label="Footer">
          <a href={LINKS.playStore} target="_blank" rel="noopener noreferrer">
            Google Play
          </a>
          <a href={assetUrl(LINKS.privacyPolicy)}>Privacy Policy</a>
          <a href={LINKS.supportMailto}>Support</a>
        </nav>
      </div>
    </footer>
  )
}
