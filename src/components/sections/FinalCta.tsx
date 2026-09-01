import { Link } from 'react-router-dom'
import { Button } from '../ui/Button'
import { ScrollReveal } from '../ui/ScrollReveal'

export function FinalCta() {
  return (
    <section aria-labelledby="final-cta-heading" className="relative overflow-hidden bg-primary py-20 md:py-28">
      <div className="absolute inset-0 bg-cta-pattern" aria-hidden="true" />
      <div
        className="absolute -right-20 top-0 h-64 w-64 rounded-full bg-white/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="section-container relative text-center">
        <ScrollReveal>
          <h2
            id="final-cta-heading"
            className="font-display text-display-sm uppercase text-white md:text-display-md"
          >
            Help Us Celebrate Every Child
          </h2>
          <p className="mx-auto mt-5 max-w-2xl font-body text-lg leading-relaxed text-white/90 md:text-xl">
            Your donation funds a complete birthday bundle — cake, decorations, gift, and party
            supplies — for a child who deserves to feel special.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button as={Link} to="/donate" variant="white" size="lg">
              Donate Now
            </Button>
            <Button
              as={Link}
              to="/volunteer"
              variant="ghost"
              size="lg"
              className="border-2 border-white/40 text-white hover:bg-white/10"
            >
              Volunteer
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
