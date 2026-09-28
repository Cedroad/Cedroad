import { useEffect, useRef, useState } from 'react'
import { ASSETS, LINKS, SITE, assetUrl } from '@/config/site'
import { Footer } from '@/components/Footer'

function AndroidMark() {
  return (
    <svg
      className="home-tile__icon"
      viewBox="0 0 48 48"
      width="88"
      height="88"
      aria-hidden="true"
    >
      <path
        fill="currentColor"
        d="M7.6 18.4c-.9 0-1.6.7-1.6 1.6v11.2c0 .9.7 1.6 1.6 1.6s1.6-.7 1.6-1.6V20c0-.9-.7-1.6-1.6-1.6zm32.8 0c-.9 0-1.6.7-1.6 1.6v11.2c0 .9.7 1.6 1.6 1.6s1.6-.7 1.6-1.6V20c0-.9-.7-1.6-1.6-1.6zM33.9 8.3l2.1-2.1c.3-.3.3-.8 0-1.1-.3-.3-.8-.3-1.1 0l-2.4 2.4A13.7 13.7 0 0 0 24 5.6c-3.2 0-6.1 1.1-8.5 2.9L13.1 6.1c-.3-.3-.8-.3-1.1 0-.3.3-.3.8 0 1.1l2.1 2.1C10.2 11.7 7.8 16 7.8 21v.8h32.4V21c0-5-2.4-9.3-6.3-12.7zM18.4 15.6a1.4 1.4 0 1 1 0-2.8 1.4 1.4 0 0 1 0 2.8zm11.2 0a1.4 1.4 0 1 1 0-2.8 1.4 1.4 0 0 1 0 2.8zM7.8 23.2v11.6c0 1.8 1.4 3.2 3.2 3.2h2.4v5.2c0 .9.7 1.6 1.6 1.6s1.6-.7 1.6-1.6v-5.2h14.4v5.2c0 .9.7 1.6 1.6 1.6s1.6-.7 1.6-1.6v-5.2h2.4c1.8 0 3.2-1.4 3.2-3.2V23.2H7.8z"
      />
    </svg>
  )
}

export function CedroadHome() {
  const [copied, setCopied] = useState(false)
  const toastTimer = useRef<number | null>(null)

  useEffect(() => {
    return () => {
      if (toastTimer.current) window.clearTimeout(toastTimer.current)
    }
  }, [])

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(LINKS.contactEmail)
    } catch {
      const input = document.createElement('textarea')
      input.value = LINKS.contactEmail
      input.setAttribute('readonly', '')
      input.style.position = 'fixed'
      input.style.opacity = '0'
      document.body.appendChild(input)
      input.select()
      document.execCommand('copy')
      document.body.removeChild(input)
    }

    setCopied(true)
    if (toastTimer.current) window.clearTimeout(toastTimer.current)
    toastTimer.current = window.setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="app home">
      <main className="home-page">
        <div className="home-page__inner">
          <header className="home-brand">
            <p className="home-brand__name">{SITE.brand}</p>
            <p className="home-brand__tag">Apps &amp; merch</p>
          </header>

          <div className="home-tiles">
            <a className="home-tile" href={LINKS.nhiePath}>
              <span className="home-tile__media">
                <img
                  className="home-tile__logo"
                  src={assetUrl(ASSETS.logo)}
                  alt=""
                  width={112}
                  height={112}
                />
              </span>
              <span className="home-tile__title">{SITE.productName}</span>
              <span className="home-tile__sub">get it on Android</span>
            </a>

            <div className="home-tile home-tile--static" aria-label="More apps coming soon">
              <span className="home-tile__media">
                <AndroidMark />
              </span>
              <span className="home-tile__title home-tile__title--soon">
                More apps coming soon!
              </span>
            </div>

            <a
              className="home-tile"
              href={LINKS.redbubble}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="home-tile__media">
                <img
                  className="home-tile__logo home-tile__logo--brand"
                  src={assetUrl(ASSETS.brandLogo)}
                  alt=""
                  width={112}
                  height={112}
                />
              </span>
              <span className="home-tile__title">Redbubble Store</span>
              <span className="home-tile__sub">get our merch</span>
            </a>
          </div>

          <div className="home-contact">
            <button
              type="button"
              className="btn btn--ghost home-contact__btn"
              onClick={copyEmail}
              aria-label={`Copy ${LINKS.contactEmail}`}
            >
              <span className="home-contact__label">Contact Us!</span>
              <span className="home-contact__email">{LINKS.contactEmail}</span>
            </button>
            <div
              className={`home-toast${copied ? ' is-visible' : ''}`}
              role="status"
              aria-live="polite"
            >
              Email copied!
            </div>
          </div>
        </div>

        <Footer />
      </main>
    </div>
  )
}
