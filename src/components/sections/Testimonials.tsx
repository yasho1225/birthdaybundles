import { TESTIMONIALS } from '../../config/content'
import { OptimizedImage } from '../ui/OptimizedImage'
import { ScrollReveal } from '../ui/ScrollReveal'
import { SectionHeading } from '../ui/SectionHeading'

export function Testimonials() {
  const [featured, ...rest] = TESTIMONIALS

  return (
    <section aria-labelledby="testimonials-heading" className="section-padding">
      <div className="section-container-wide">
        <ScrollReveal>
          <SectionHeading
            id="testimonials-heading"
            title="Stories from our community"
            subtitle="Families, volunteers, and partners who make every celebration possible."
            className="max-w-2xl"
          />
        </ScrollReveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-12">
          <ScrollReveal delay={60} className="lg:col-span-7">
            <article className="surface flex h-full flex-col justify-between p-8 lg:p-10">
              <blockquote className="font-quote text-xl italic leading-relaxed text-ink md:text-2xl lg:text-3xl">
                &ldquo;{featured.quote}&rdquo;
              </blockquote>
              <div className="mt-8 flex items-center gap-4 border-t border-ink/8 pt-6 dark:border-white/10">
                <OptimizedImage
                  src={featured.src}
                  fallback={featured.fallback}
                  alt={`Photo of ${featured.name}`}
                  className="h-14 w-14 rounded-full object-cover ring-2 ring-secondary/20"
                />
                <div>
                  <cite className="font-heading text-base font-semibold not-italic text-ink">
                    {featured.name}
                  </cite>
                  <p className="font-body text-sm text-secondary-fg">{featured.role}</p>
                </div>
              </div>
            </article>
          </ScrollReveal>

          <div className="flex flex-col gap-6 lg:col-span-5">
            {rest.map((testimonial, index) => (
              <ScrollReveal key={testimonial.name} delay={120 + index * 60}>
                <article className="surface-muted flex flex-1 flex-col p-6 sm:p-8">
                  <blockquote className="flex-1 font-body leading-relaxed text-muted">
                    &ldquo;{testimonial.quote}&rdquo;
                  </blockquote>
                  <div className="mt-5 flex items-center gap-3 border-t border-ink/8 pt-5 dark:border-white/10">
                    <OptimizedImage
                      src={testimonial.src}
                      fallback={testimonial.fallback}
                      alt={`Photo of ${testimonial.name}`}
                      className="h-10 w-10 rounded-full object-cover"
                    />
                    <div>
                      <cite className="font-heading text-sm font-semibold not-italic text-ink">
                        {testimonial.name}
                      </cite>
                      <p className="font-body text-xs text-secondary-fg">{testimonial.role}</p>
                    </div>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
