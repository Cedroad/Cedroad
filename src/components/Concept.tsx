import { CONCEPT, HOW_TO_PLAY } from '@/config/content'
import { Reveal } from '@/components/Reveal'

export function Concept() {
  return (
    <section className="section concept" id="how-to-play" aria-labelledby="concept-heading">
      <div className="section__inner">
        <Reveal>
          <p className="eyebrow">{CONCEPT.eyebrow}</p>
          <h2 id="concept-heading" className="section__title">
            {CONCEPT.title}
          </h2>
          <p className="section__lead">{CONCEPT.body}</p>
        </Reveal>

        <div className="concept__beats">
          {CONCEPT.beats.map((beat, i) => (
            <Reveal key={beat.title} delay={i * 90} className="concept__beat">
              <h3>{beat.title}</h3>
              <p>{beat.text}</p>
            </Reveal>
          ))}
        </div>

        <Reveal className="howto" delay={120}>
          <p className="eyebrow">{HOW_TO_PLAY.eyebrow}</p>
          <h2 className="section__title section__title--sm">{HOW_TO_PLAY.title}</h2>
          <ol className="howto__steps">
            {HOW_TO_PLAY.steps.map((step) => (
              <li key={step.n} className="howto__step">
                <span className="howto__n" aria-hidden="true">
                  {step.n}
                </span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  )
}
