import { useState } from 'react'
import { LINKS } from '../config/links'
import { appendUtmToUrl } from '../utils/utm'
import { VOLUNTEER_FAQ, VOLUNTEER_ROLES } from '../config/content'
import { Button } from '../components/ui/Button'
import { Icon } from '../components/ui/Icon'
import { OptimizedImage } from '../components/ui/OptimizedImage'
import { PageHeader } from '../components/ui/PageHeader'
import { ScrollReveal } from '../components/ui/ScrollReveal'
import { SectionHeading } from '../components/ui/SectionHeading'

const VOLUNTEER_PHOTOS = [
  '/images/placeholders/volunteer-1.svg',
  '/images/placeholders/volunteer-2.svg',
  '/images/placeholders/gallery-1.svg',
  '/images/placeholders/gallery-2.svg',
] as const

export function Volunteer() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <>
      <PageHeader
        title="Volunteer & bake"
        subtitle="Join our community of volunteers and bakers making birthdays happen."
      />

      <section aria-labelledby="roles-heading" className="section-padding">
        <div className="section-container-wide">
          <ScrollReveal>
            <SectionHeading
              id="roles-heading"
              title="Ways to get involved"
              subtitle="Whether you pack bundles or bake cakes, your time creates unforgettable moments."
            />
          </ScrollReveal>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {VOLUNTEER_ROLES.map((role, index) => (
              <ScrollReveal key={role.title} delay={index * 80}>
                <article
                  className={`flex h-full flex-col justify-between rounded-[1.25rem] p-8 sm:p-10 ${
                    index === 0 ? 'surface' : 'bg-secondary text-white shadow-soft'
                  }`}
                >
                  <div>
                    <span
                      className={`flex h-12 w-12 items-center justify-center rounded-ui ${
                        index === 0 ? 'bg-secondary/10 text-secondary-fg' : 'bg-white/15 text-white'
                      }`}
                    >
                      <Icon name={index === 0 ? 'hand-heart' : 'cake'} size={24} />
                    </span>
                    <h3
                      className={`mt-6 font-display text-2xl ${index === 0 ? 'text-ink' : 'text-white'}`}
                    >
                      {role.title}
                    </h3>
                    <p
                      className={`mt-4 max-w-md font-body leading-relaxed ${
                        index === 0 ? 'text-muted' : 'text-white/85'
                      }`}
                    >
                      {role.description}
                    </p>
                  </div>
                  <Button
                    as="a"
                    href={appendUtmToUrl(LINKS[role.linkKey])}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant={index === 0 ? 'secondary' : 'white'}
                    className="mt-8 w-fit"
                  >
                    {role.cta}
                    <Icon name="external" size={16} />
                  </Button>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="faq-heading" className="section-padding bg-surface">
        <div className="section-container-wide">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <ScrollReveal className="lg:col-span-4">
              <SectionHeading
                id="faq-heading"
                title="Common questions"
                subtitle="Everything you need to know before signing up to volunteer or bake with us."
              />
            </ScrollReveal>

            <div className="lg:col-span-8">
              {VOLUNTEER_FAQ.map((item, index) => (
                <ScrollReveal key={item.question} delay={index * 50}>
                  <div className="border-b border-ink/8 last:border-b-0 dark:border-white/10">
                    <button
                      type="button"
                      id={`faq-button-${index}`}
                      className="flex w-full items-center justify-between gap-4 py-5 text-left font-heading font-semibold text-ink transition-colors duration-200 ease-out hover:text-primary focus-ring"
                      onClick={() => setOpenFaq(openFaq === index ? null : index)}
                      aria-expanded={openFaq === index}
                      aria-controls={`faq-panel-${index}`}
                    >
                      {item.question}
                      <span
                        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-ui text-lg transition-colors duration-200 ease-out ${
                          openFaq === index
                            ? 'bg-primary text-white'
                            : 'bg-secondary/10 text-secondary-fg'
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
                      className="pb-5"
                    >
                      <p className="font-body leading-relaxed text-muted">{item.answer}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="volunteer-photos-heading" className="section-padding">
        <div className="section-container-wide">
          <ScrollReveal>
            <SectionHeading id="volunteer-photos-heading" title="Volunteers in action" />
          </ScrollReveal>
          <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
            {VOLUNTEER_PHOTOS.map((src, index) => (
              <ScrollReveal key={src} delay={index * 60}>
                <div className="overflow-hidden rounded-ui shadow-soft">
                  <OptimizedImage
                    src={src}
                    fallback={src}
                    alt={`Volunteer activity photo ${index + 1}`}
                    className="aspect-square w-full object-cover transition-transform duration-500 ease-out hover:scale-[1.03]"
                  />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
