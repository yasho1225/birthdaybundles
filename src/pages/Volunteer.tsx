import { useState } from 'react'
import { LINKS } from '../config/links'
import { appendUtmToUrl } from '../utils/utm'
import { VOLUNTEER_FAQ, VOLUNTEER_ROLES } from '../config/content'
import { Button } from '../components/ui/Button'
import { PageHeader } from '../components/ui/PageHeader'
import { ScrollReveal } from '../components/ui/ScrollReveal'
import { SectionHeading } from '../components/ui/SectionHeading'

export function Volunteer() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <>
      <PageHeader
        eyebrow="Get involved"
        title="Volunteer & Bake"
        subtitle="Join our community of volunteers and bakers making birthdays happen."
      />

      <section aria-labelledby="roles-heading" className="section-padding">
        <div className="section-container">
          <ScrollReveal>
            <SectionHeading
              id="roles-heading"
              eyebrow="Two ways to help"
              title="How You Can Help"
              subtitle="Whether you have an hour or a day, there is a role for you."
            />
          </ScrollReveal>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {VOLUNTEER_ROLES.map((role, index) => (
              <ScrollReveal key={role.title} delay={index * 80}>
                <article className="card-surface-hover flex h-full flex-col p-8 md:p-10">
                  <span className="text-4xl" aria-hidden="true">
                    {role.title === 'Volunteers' ? '🤝' : '🎂'}
                  </span>
                  <h3 className="mt-5 font-display text-2xl uppercase text-secondary-fg">
                    {role.title}
                  </h3>
                  <p className="mt-4 flex-1 font-body leading-relaxed text-muted">
                    {role.description}
                  </p>
                  <Button
                    as="a"
                    href={appendUtmToUrl(LINKS[role.linkKey])}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant={index === 0 ? 'primary' : 'secondary'}
                    className="mt-8"
                  >
                    {role.cta}
                  </Button>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="faq-heading" className="section-padding bg-surface">
        <div className="section-container max-w-3xl">
          <ScrollReveal>
            <SectionHeading id="faq-heading" eyebrow="Common questions" title="FAQ" />
          </ScrollReveal>

          <div className="mt-10 space-y-3">
            {VOLUNTEER_FAQ.map((item, index) => (
              <ScrollReveal key={item.question} delay={index * 40}>
                <div className="overflow-hidden rounded-2xl border border-ink/8 bg-cream dark:border-white/10">
                  <button
                    type="button"
                    id={`faq-button-${index}`}
                    className="flex w-full items-center justify-between px-6 py-5 text-left font-heading font-bold text-ink transition-colors hover:bg-surface focus-ring"
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    aria-expanded={openFaq === index}
                    aria-controls={`faq-panel-${index}`}
                  >
                    {item.question}
                    <span
                      className={`ml-4 flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-lg transition-colors ${
                        openFaq === index ? 'bg-primary text-white' : 'bg-secondary/10 text-secondary-fg'
                      }`}
                      aria-hidden="true"
                    >
                      {openFaq === index ? '−' : '+'}
                    </span>
                  </button>
                  <div
                    id={`faq-panel-${index}`}
                    role="region"
                    aria-labelledby={`faq-button-${index}`}
                    hidden={openFaq !== index}
                    className="border-t border-ink/8 bg-surface px-6 py-5 dark:border-white/10"
                  >
                    <p className="font-body leading-relaxed text-muted">{item.answer}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="volunteer-photos-heading" className="section-padding">
        <div className="section-container">
          <ScrollReveal>
            <SectionHeading
              id="volunteer-photos-heading"
              eyebrow="Community"
              title="Volunteers in Action"
            />
          </ScrollReveal>
          <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
            {['volunteer-1', 'volunteer-2', 'gallery-1', 'gallery-2'].map((name, index) => (
              <ScrollReveal key={name} delay={index * 60}>
                <img
                  src={`/images/placeholders/${name}.svg`}
                  alt={`Volunteer activity photo ${index + 1}`}
                  className="aspect-square w-full rounded-2xl object-cover shadow-card transition-transform duration-300 hover:scale-[1.02]"
                  loading="lazy"
                  decoding="async"
                />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
