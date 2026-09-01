import { Link } from 'react-router-dom'
import { MISSION_IMAGE } from '../../config/content'
import { SITE } from '../../config/content'
import { Button } from '../ui/Button'
import { OptimizedImage } from '../ui/OptimizedImage'
import { ScrollReveal } from '../ui/ScrollReveal'
import { SectionHeading } from '../ui/SectionHeading'

export function MissionOverview() {
  return (
    <section aria-labelledby="mission-heading" className="section-padding">
      <div className="section-container">
        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-14 lg:gap-20">
          <ScrollReveal>
            <SectionHeading
              eyebrow="What we do"
              title="Birthdays Should Be Joyful"
              subtitle={SITE.mission}
              align="left"
            />
            <p className="prose-body mt-6">
              Every bundle is assembled by volunteers and delivered with care. We partner with
              schools, shelters, and community organizations to reach families who need us most —
              because no child should miss their birthday.
            </p>
            <Button as={Link} to="/about" variant="secondary" size="sm" className="mt-8">
              Learn Our Story
            </Button>
          </ScrollReveal>

          <ScrollReveal delay={150}>
            <div className="relative">
              <div
                className="absolute -inset-3 rounded-4xl bg-gradient-to-br from-secondary/20 to-primary/20"
                aria-hidden="true"
              />
              <div className="relative overflow-hidden rounded-4xl shadow-card-hover">
                <OptimizedImage
                  src={MISSION_IMAGE.src}
                  fallback={MISSION_IMAGE.fallback}
                  alt="Volunteers preparing birthday celebration bundles"
                  className="aspect-[4/3] w-full object-cover"
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
