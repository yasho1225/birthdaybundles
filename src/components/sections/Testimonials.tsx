import { TESTIMONIALS } from '../../config/content'
import { OptimizedImage } from '../ui/OptimizedImage'
import { ScrollReveal } from '../ui/ScrollReveal'
import { SectionHeading } from '../ui/SectionHeading'

export function Testimonials() {
  return (
    <section aria-labelledby="testimonials-heading" className="section-padding bg-surface">
      <div className="section-container">
        <ScrollReveal>
          <SectionHeading
            id="testimonials-heading"
            eyebrow="Real stories"
            title="Stories That Inspire"
            subtitle="Hear from families, volunteers, and partners who make Birthday Bundles possible."
          />
        </ScrollReveal>

        <div className="mt-10 grid gap-5 sm:gap-6 md:mt-14 md:grid-cols-3">
          {TESTIMONIALS.map((testimonial, index) => (
            <ScrollReveal key={testimonial.name} delay={index * 80}>
              <article className="card-surface-hover flex h-full flex-col p-6 sm:p-7">
                <div className="flex items-center gap-4">
                  <OptimizedImage
                    src={testimonial.src}
                    fallback={testimonial.fallback}
                    alt={`Photo of ${testimonial.name}`}
                    className="h-14 w-14 rounded-full object-cover ring-2 ring-secondary/20"
                  />
                  <div>
                    <cite className="font-quote text-base font-bold not-italic text-ink">
                      {testimonial.name}
                    </cite>
                    <p className="font-body text-xs font-bold uppercase tracking-wider text-secondary-fg">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
                <blockquote className="mt-5 flex-1 font-body leading-relaxed text-muted">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
