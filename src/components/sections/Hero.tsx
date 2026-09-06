import { Link } from 'react-router-dom'
import { HERO_IMAGE, SITE } from '../../config/content'
import { Button } from '../ui/Button'
import { Icon } from '../ui/Icon'
import { OptimizedImage } from '../ui/OptimizedImage'

export function Hero() {
  return (
    <section aria-labelledby="hero-heading" className="relative min-h-[92vh] overflow-hidden">
      <div className="absolute inset-0 bg-warm-glow" aria-hidden="true" />

      <div className="section-container-wide relative grid min-h-[92vh] items-center gap-10 py-20 lg:grid-cols-12 lg:gap-16 lg:py-24">
        <div className="flex flex-col justify-center lg:col-span-5 xl:col-span-5">
          <p className="animate-fade-up font-heading text-sm font-semibold text-secondary-fg">
            {SITE.trustCopy}
          </p>
          <h1
            id="hero-heading"
            className="animate-fade-up mt-5 font-display text-display-lg text-ink [animation-delay:80ms]"
          >
            Every child deserves a birthday to remember
          </h1>
          <p className="animate-fade-up prose-body mt-6 [animation-delay:160ms]">
            {SITE.missionBlurb}
          </p>
          <div className="animate-fade-up mt-10 flex flex-col gap-3 sm:flex-row [animation-delay:240ms]">
            <Button as={Link} to="/request" size="lg" className="w-full sm:w-auto">
              Request a free bundle
            </Button>
            <Button as={Link} to="/donate" variant="outline" size="lg" className="w-full sm:w-auto">
              Support a birthday
            </Button>
          </div>
          <p className="animate-fade-up mt-8 flex items-center gap-2 font-body text-sm text-muted [animation-delay:320ms]">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary/10 text-secondary-fg">
              <Icon name="heart" size={16} />
            </span>
            Official 501(c)(3) nonprofit based in Alpharetta, GA
          </p>
        </div>

        <div className="relative lg:col-span-7 xl:col-span-7">
          <div className="relative overflow-hidden rounded-[1.25rem] shadow-lift">
            <OptimizedImage
              src={HERO_IMAGE.src}
              fallback={HERO_IMAGE.fallback}
              alt="Volunteers preparing a birthday celebration bundle for a family"
              className="aspect-[4/5] w-full animate-hero-scale object-cover sm:aspect-[5/4] lg:aspect-[4/5] lg:min-h-[560px]"
              loading="eager"
              fetchPriority="high"
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent to-transparent"
              aria-hidden="true"
            />
            <p className="absolute bottom-0 left-0 right-0 p-6 font-heading text-sm font-medium text-on-dark sm:p-8">
              Free birthday, holiday, milestone, and just-because deliveries in the Atlanta area.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
