import { HOW_IT_WORKS } from '../../config/content'
import { Icon } from '../ui/Icon'
import { ScrollReveal } from '../ui/ScrollReveal'
import { SectionHeading } from '../ui/SectionHeading'

export function HowItWorks() {
  return (
    <section aria-labelledby="how-heading" className="section-padding bg-surface">
      <div className="section-container-wide">
        <ScrollReveal>
          <SectionHeading
            id="how-heading"
            title="How Birthday Bundles works"
            subtitle="From referral to celebration. A simple path to joy, delivered with dignity."
            className="max-w-2xl"
          />
        </ScrollReveal>

        <ol className="mt-14 grid gap-8 md:grid-cols-3 md:gap-6 lg:gap-10">
          {HOW_IT_WORKS.map((step, index) => (
            <ScrollReveal key={step.title} delay={index * 80}>
              <li className="relative flex flex-col">
                {index < HOW_IT_WORKS.length - 1 && (
                  <span
                    className="absolute left-8 top-16 hidden h-px w-[calc(100%+1.5rem)] bg-ink/10 md:block dark:bg-white/10"
                    aria-hidden="true"
                  />
                )}
                <div className="flex h-16 w-16 items-center justify-center rounded-ui bg-secondary/10 text-secondary-fg">
                  <Icon name={step.icon} size={28} />
                </div>
                <h3 className="mt-6 font-display text-2xl text-ink">{step.title}</h3>
                <p className="mt-3 font-body leading-relaxed text-muted">{step.description}</p>
              </li>
            </ScrollReveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
