import { IMPACT_STATS } from '../../config/content'
import { ScrollReveal } from '../ui/ScrollReveal'
import { SectionHeading } from '../ui/SectionHeading'
import { StatCard } from '../ui/StatCard'

export function ImpactStats() {
  return (
    <section aria-labelledby="impact-heading" className="section-padding bg-surface">
      <div className="section-container">
        <ScrollReveal>
          <SectionHeading
            id="impact-heading"
            eyebrow="By the numbers"
            title="Our Impact"
            subtitle="Together, we're making birthdays happen for families across our community."
          />
        </ScrollReveal>

        <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 md:mt-14 md:grid-cols-4 md:gap-6">
          {IMPACT_STATS.map((stat, index) => (
            <ScrollReveal key={stat.label} delay={index * 80}>
              <StatCard value={stat.value} label={stat.label} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
