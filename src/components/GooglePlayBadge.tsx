import { LINKS, SITE } from '@/config/site'

export function GooglePlayBadge({ className = '' }: { className?: string }) {
  return (
    <a
      className={`play-badge ${className}`.trim()}
      href={LINKS.playStore}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Get ${SITE.productName} on Google Play`}
    >
      <span className="play-badge__mark" aria-hidden="true">
        <svg viewBox="0 0 28 30" width="28" height="30">
          <path fill="#00F076" d="M1 2.5 16.5 15 1 27.5z" />
          <path fill="#FFD200" d="M1 27.5 10 20.5 16.5 15 1 27.5z" opacity=".95" />
          <path fill="#FF3A44" d="M1 2.5 10 9.5 16.5 15 1 2.5z" opacity=".9" />
          <path fill="#00A0FF" d="M16.5 15 10 9.5 10 20.5z" />
        </svg>
      </span>
      <span className="play-badge__copy">
        <span className="play-badge__eyebrow">Get it on</span>
        <span className="play-badge__store">Google Play</span>
      </span>
    </a>
  )
}
