import { Link } from 'react-router-dom'
import { BUNDLE_ITEMS, MISSION_IMAGE, SITE } from '../../config/content'
import { Button } from '../ui/Button'
import { Icon } from '../ui/Icon'
import { OptimizedImage } from '../ui/OptimizedImage'
import { ScrollReveal } from '../ui/ScrollReveal'
import { SectionHeading } from '../ui/SectionHeading'

export function MissionOverview() {
  return (
    <section aria-labelledby="mission-heading" className="section-padding">
      <div className="section-container-wide">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <ScrollReveal>
            <div className="relative overflow-hidden rounded-[1.25rem] shadow-soft">
              <OptimizedImage
                src={MISSION_IMAGE.src}
                fallback={MISSION_IMAGE.fallback}
                alt="Volunteers preparing birthday celebration bundles"
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
          </ScrollReveal>

          <div>
            <ScrollReveal>
              <SectionHeading
                id="mission-heading"
                title="Birthdays should be joyful"
                subtitle={SITE.mission}
              />
              <Button as={Link} to="/about" variant="ghost" size="sm" className="mt-8">
                Read our story
                <Icon name="arrow-right" size={16} />
              </Button>
            </ScrollReveal>

            <ul className="mt-12 grid gap-4 sm:grid-cols-2">
              {BUNDLE_ITEMS.map((item, index) => (
                <ScrollReveal key={item.label} delay={index * 60}>
                  <li className="surface flex gap-4 p-5">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-ui bg-primary/10 text-primary">
                      <Icon name={item.icon} size={22} />
                    </span>
                    <div>
                      <h3 className="font-heading text-sm font-semibold text-ink">{item.label}</h3>
                      <p className="mt-1 font-body text-sm leading-relaxed text-muted">
                        {item.description}
                      </p>
                    </div>
                  </li>
                </ScrollReveal>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
