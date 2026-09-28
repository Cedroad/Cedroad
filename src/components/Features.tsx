import { FEATURES } from '@/config/content'
import { Reveal } from '@/components/Reveal'
import { Categories } from '@/components/Categories'

export function Features() {
  return (
    <section className="section features" id="features" aria-labelledby="features-heading">
      <div className="section__inner">
        <Reveal className="features__intro">
          <p className="eyebrow">Why you’ll love it</p>
          <h2 id="features-heading" className="section__title">
            Built for the loudest night of the week
          </h2>
          <p className="section__lead">
            Everything you need to keep the phone passing, the room laughing, and the secrets
            coming.
          </p>
        </Reveal>

        <ul className="feature-grid">
          {FEATURES.map((feature, i) => (
            <Reveal key={feature.title} as="li" delay={i * 70} className="feature-tile">
              <h3>{feature.title}</h3>
              <p>{feature.text}</p>
            </Reveal>
          ))}
        </ul>

        <Categories />
      </div>
    </section>
  )
}
