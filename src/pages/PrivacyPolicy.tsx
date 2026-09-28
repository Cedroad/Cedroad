import { Footer } from '@/components/Footer'
import { LINKS, SITE, assetUrl } from '@/config/site'

export function PrivacyPolicy() {
  return (
    <div className="app legal">
      <main className="legal-page">
        <div className="legal-page__inner">
          <header className="legal-header">
            <a className="legal-header__back" href={assetUrl(LINKS.nhiePath)}>
              ← {SITE.productName}
            </a>
            <p className="legal-header__brand">{SITE.brand}</p>
          </header>

          <article className="legal-doc">
            <h1>Privacy Policy</h1>
            <p>
              <strong>Effective date:</strong> September 13, 2026
            </p>

            <p>
              This Privacy Policy governs your use of the mobile application{' '}
              <strong>Never Have I Ever</strong> (&quot;App&quot;) developed by{' '}
              <strong>Cedroad</strong> (&quot;Data Controller&quot;, &quot;we&quot;,
              &quot;our&quot;, or &quot;us&quot;). We respect your privacy and are
              committed to transparency regarding how data is handled.
            </p>

            <h2>1. Data Controller Information</h2>
            <p>
              For any privacy-related inquiries, data access requests, or GDPR
              compliance concerns, you can contact the data controller at:
            </p>
            <p>
              <strong>Email:</strong>{' '}
              <a href={LINKS.supportMailto}>{LINKS.supportEmail}</a>
            </p>

            <h2>2. Information We Collect and How We Use It</h2>
            <div className="legal-doc__highlight">
              <p>
                <strong>Core Principle:</strong> Game progress, custom
                preferences, and settings are stored <strong>strictly locally</strong>{' '}
                on your device. We do not operate external servers to collect or
                store your personal user profiles or game data.
              </p>
            </div>
            <p>
              Depending on your interaction with the App, third-party software
              development kits (SDKs) integrated into the App may process limited
              data:
            </p>
            <ul>
              <li>
                <strong>Local Storage (Device Only):</strong> Your game
                preferences, unlocked categories, audio/haptic toggles, language
                settings, and local question progress are saved via secure device
                storage mechanisms (such as <code>shared_preferences</code>). This
                data never leaves your device.
              </li>
              <li>
                <strong>Microtransactions (Google Play Billing):</strong> If you
                purchase the Premium version or subscriptions, financial
                transactions are processed securely by Google LLC via Google Play
                Billing. We do not receive, collect, or store your credit card or
                financial details; we only receive purchase verification receipts
                from Google Play.
              </li>
              <li>
                <strong>Advertising (Google Ads):</strong> The App displays
                advertisements provided by Google. Google AdMob may use device
                identifiers, advertising IDs, and cookies to serve ads tailored to
                your interests or manage ad delivery in compliance with applicable
                platform policies.
              </li>
              <li>
                <strong>Analytics and Crash Reporting:</strong> We{' '}
                <strong>do not</strong> use any third-party analytics trackers,
                telemetry tools, or crash reporting services.
              </li>
            </ul>

            <h2>3. Legal Basis for Processing Under GDPR</h2>
            <p>
              If you reside within the European Economic Area (EEA), our legal
              basis for processing data depends on the context:
            </p>
            <ul>
              <li>
                <strong>Performance of a Contract:</strong> Managing local app
                functionality, settings, and in-app purchase verification.
              </li>
              <li>
                <strong>Legitimate Interests &amp; Consent:</strong> Displaying
                non-intrusive or rewarded advertisements via Google Ads and
                complying with regional consent frameworks where applicable.
              </li>
            </ul>

            <h2>4. Your GDPR Data Protection Rights</h2>
            <p>
              Under the General Data Protection Regulation (GDPR), EEA users
              possess specific data rights. Because your core game data is stored{' '}
              <strong>strictly locally</strong>:
            </p>
            <ul>
              <li>
                <strong>Right of Access &amp; Portability:</strong> You can view
                all active game configurations directly inside the App settings.
              </li>
              <li>
                <strong>Right to Erasure (Deletions):</strong> You can completely
                wipe, reset, or delete all app data at any time by clearing the
                App&apos;s storage cache through your Android system settings, or
                by using the &quot;Reset All Categories&quot; button inside the
                App. No server-side data removal is required because we hold no
                external database records of your gameplay.
              </li>
            </ul>

            <h2>5. Children&apos;s Privacy</h2>
            <p>
              The App is a party game intended for general audiences. We do not
              knowingly collect personal information from children under the age
              of 13.
            </p>

            <h2>6. Changes to This Privacy Policy</h2>
            <p>
              We may update our Privacy Policy from time to time. Any changes will
              be published on this page with a revised effective date.
            </p>

            <h2>7. Contact Us</h2>
            <p>
              If you have any questions regarding this Privacy Policy or your data
              rights, please contact us at:
            </p>
            <p>
              <strong>Email:</strong>{' '}
              <a href={LINKS.supportMailto}>{LINKS.supportEmail}</a>
            </p>
          </article>
        </div>

        <Footer />
      </main>
    </div>
  )
}
