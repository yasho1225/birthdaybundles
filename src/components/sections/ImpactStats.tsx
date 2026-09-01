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
            title="Our impact"
            subtitle="Together, we're making birthdays happen for families across our community."
          />
        </ScrollReveal>

        <ScrollReveal delay={80}>
          <div className="mt-10 grid grid-cols-2 gap-4 md:mt-14 md:grid-cols-4">
            {IMPACT_STATS.map((stat) => (
              <StatCard key={stat.label} value={stat.value} label={stat.label} />
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
