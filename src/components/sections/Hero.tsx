import { Link } from 'react-router-dom'
import { HERO_IMAGE, IMPACT_STATS } from '../../config/content'
import { Button } from '../ui/Button'
import { OptimizedImage } from '../ui/OptimizedImage'

export function Hero() {
  const previewStats = IMPACT_STATS.slice(0, 2)

  return (
    <section aria-labelledby="hero-heading" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-cream" aria-hidden="true" />
      <div className="absolute inset-0 bg-hero-mesh" aria-hidden="true" />
      <div
        className="absolute -right-32 top-20 h-96 w-96 rounded-full bg-primary/10 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="absolute -left-24 bottom-20 h-72 w-72 rounded-full bg-secondary/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="section-container relative grid items-center gap-10 py-16 sm:gap-12 sm:py-20 md:grid-cols-2 md:py-24 lg:gap-16 lg:py-28">
        <div className="order-2 text-center md:order-1 md:text-left">
          <span className="eyebrow">Nonprofit · Community · Celebration</span>
          <h1
            id="hero-heading"
            className="mt-5 font-display text-display-sm uppercase text-ink md:mt-6 md:text-display-md lg:text-display-lg"
          >
            Every Kid Deserves a{' '}
            <span className="text-primary">Birthday</span> to Remember
          </h1>
          <p className="prose-body mx-auto mt-5 max-w-xl md:mx-0 md:mt-6">
            We deliver complete birthday bundles — cake, decorations, and small gifts — to
            children and families who need a little extra joy on their special day.
          </p>

          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row md:mt-10 md:justify-start">
            <Button as={Link} to="/donate" size="lg" className="w-full sm:w-auto">
              Donate
            </Button>
            <Button as={Link} to="/donate" variant="secondary" size="lg" className="w-full sm:w-auto">
              Sponsor a Bundle
            </Button>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 md:mt-10 md:justify-start">
            {previewStats.map((stat, index) => (
              <div key={stat.label} className="flex items-center gap-6">
                {index > 0 && (
                  <div className="hidden h-8 w-px bg-ink/15 sm:block" aria-hidden="true" />
                )}
                <div className="text-center md:text-left">
                  <p className="font-display text-2xl text-primary">{stat.value}</p>
                  <p className="font-body text-xs font-bold uppercase tracking-wider text-muted">
                    {stat.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="order-1 md:order-2">
          <div className="relative mx-auto max-w-lg">
            <div
              className="absolute -inset-3 rounded-4xl bg-gradient-to-br from-secondary/20 via-primary/10 to-accent/20"
              aria-hidden="true"
            />
            <div className="relative overflow-hidden rounded-4xl border border-white/40 shadow-glow">
              <OptimizedImage
                src={HERO_IMAGE.src}
                fallback={HERO_IMAGE.fallback}
                alt="Volunteers preparing a birthday celebration bundle for a family"
                className="aspect-[4/3] w-full object-cover md:aspect-square"
                loading="eager"
                fetchPriority="high"
              />
            </div>
            <div className="absolute -bottom-4 left-4 right-4 rounded-2xl border border-ink/5 bg-surface p-4 shadow-card-hover sm:left-auto sm:right-4 sm:max-w-xs">
              <p className="font-quote text-sm font-bold text-ink">
                &ldquo;Her first real birthday party.&rdquo;
              </p>
              <p className="mt-1 font-body text-xs text-muted">— A grateful parent</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
