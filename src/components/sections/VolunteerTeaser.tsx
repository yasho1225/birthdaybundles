import { Link } from 'react-router-dom'
import { LINKS } from '../../config/links'
import { appendUtmToUrl } from '../../utils/utm'
import { VOLUNTEER_ROLES } from '../../config/content'
import { Button } from '../ui/Button'
import { Icon } from '../ui/Icon'
import { OptimizedImage } from '../ui/OptimizedImage'
import { ScrollReveal } from '../ui/ScrollReveal'
import { SectionHeading } from '../ui/SectionHeading'

const TEASER_IMAGES = [
  '/images/placeholders/volunteer-1.svg',
  '/images/placeholders/volunteer-2.svg',
  '/images/placeholders/gallery-1.svg',
  '/images/placeholders/gallery-2.svg',
] as const

export function VolunteerTeaser() {
  return (
    <section aria-labelledby="volunteer-teaser-heading" className="section-padding bg-surface">
      <div className="section-container-wide">
        <ScrollReveal>
          <SectionHeading
            id="volunteer-teaser-heading"
            title="Join the celebration"
            subtitle="Pack bundles, bake cakes, or deliver joy — every hour makes a child's birthday unforgettable."
          />
        </ScrollReveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-12 lg:gap-8">
          <div className="grid grid-cols-2 gap-3 lg:col-span-5">
            {TEASER_IMAGES.map((src, index) => (
              <ScrollReveal key={src} delay={index * 50}>
                <div className="overflow-hidden rounded-ui">
                  <OptimizedImage
                    src={src}
                    fallback={src}
                    alt={`Community volunteer photo ${index + 1}`}
                    className="aspect-square w-full object-cover transition-transform duration-500 ease-out hover:scale-[1.03]"
                  />
                </div>
              </ScrollReveal>
            ))}
          </div>

          <div className="flex flex-col gap-6 lg:col-span-7">
            {VOLUNTEER_ROLES.map((role, index) => (
              <ScrollReveal key={role.title} delay={100 + index * 80}>
                <article className="surface flex flex-col gap-5 p-8 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h3 className="font-display text-2xl text-ink">{role.title}</h3>
                    <p className="mt-2 max-w-md font-body leading-relaxed text-muted">
                      {role.description}
                    </p>
                  </div>
                  <Button
                    as="a"
                    href={appendUtmToUrl(LINKS[role.linkKey])}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant={index === 0 ? 'secondary' : 'primary'}
                    className="shrink-0"
                  >
                    {role.cta}
                    <Icon name="external" size={16} />
                  </Button>
                </article>
              </ScrollReveal>
            ))}
            <Button as={Link} to="/volunteer" variant="ghost" className="w-fit">
              Learn more about volunteering
              <Icon name="arrow-right" size={16} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
