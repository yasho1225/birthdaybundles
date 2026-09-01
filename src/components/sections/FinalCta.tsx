import { Link } from 'react-router-dom'
import { BUNDLE_ITEMS, SITE } from '../../config/content'
import { Button } from '../ui/Button'
import { Icon } from '../ui/Icon'
import { ScrollReveal } from '../ui/ScrollReveal'

export function FinalCta() {
  return (
    <section aria-labelledby="final-cta-heading" className="relative overflow-hidden">
      <div className="grid lg:grid-cols-2">
        <div className="relative flex flex-col justify-center bg-primary px-5 py-16 sm:px-6 md:px-8 lg:px-12 lg:py-24">
          <div className="absolute inset-0 bg-cta-glow" aria-hidden="true" />
          <ScrollReveal className="relative">
            <h2 id="final-cta-heading" className="font-display text-display-sm text-white md:text-display-md">
              Help us celebrate every child
            </h2>
            <p className="mt-5 max-w-md font-body text-lg leading-relaxed text-white/90">
              {SITE.trustCopy} Your gift funds a complete birthday bundle for a child who deserves
              to feel special.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button as={Link} to="/donate" variant="white" size="lg">
                Donate now
              </Button>
              <Button
                as={Link}
                to="/volunteer"
                variant="outline"
                size="lg"
                className="border-white/40 text-white hover:border-white hover:bg-white/10"
              >
                Volunteer
              </Button>
            </div>
          </ScrollReveal>
        </div>

        <div className="flex flex-col justify-center bg-inverse px-5 py-16 sm:px-6 md:px-8 lg:px-12 lg:py-24">
          <ScrollReveal delay={80}>
            <p className="font-heading text-sm font-semibold text-accent">Every bundle includes</p>
            <ul className="mt-6 space-y-5">
              {BUNDLE_ITEMS.map((item) => (
                <li key={item.label} className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-ui bg-white/10 text-accent">
                    <Icon name={item.icon} size={20} />
                  </span>
                  <div>
                    <p className="font-heading font-semibold text-on-dark">{item.label}</p>
                    <p className="mt-1 font-body text-sm text-on-dark-muted">{item.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
