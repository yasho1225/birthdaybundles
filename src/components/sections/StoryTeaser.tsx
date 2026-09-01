import { Link } from 'react-router-dom'
import { STORY_QUOTE } from '../../config/content'
import { Icon } from '../ui/Icon'
import { ScrollReveal } from '../ui/ScrollReveal'

export function StoryTeaser() {
  return (
    <section aria-labelledby="story-teaser-heading" className="section-padding bg-inverse text-on-dark">
      <div className="section-container-wide">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <ScrollReveal className="lg:col-span-8">
            <h2 id="story-teaser-heading" className="font-display text-display-sm text-on-dark md:text-display-md">
              Why we started
            </h2>
            <blockquote className="mt-8 font-quote text-2xl italic leading-snug text-on-dark md:text-3xl lg:text-4xl">
              &ldquo;{STORY_QUOTE.text}&rdquo;
            </blockquote>
            <cite className="mt-6 block font-heading text-base font-medium not-italic text-accent">
              — {STORY_QUOTE.attribution}
            </cite>
          </ScrollReveal>

          <ScrollReveal delay={100} className="lg:col-span-4">
            <div className="surface-muted border-white/10 bg-white/5 p-8 backdrop-blur-sm">
              <p className="font-body leading-relaxed text-on-dark-muted">
                What began as one neighbor&apos;s idea has grown into a community movement — powered
                by volunteers, bakers, and donors who believe every milestone matters.
              </p>
              <Link to="/about" className="link-arrow-on-dark mt-8">
                Explore our journey
                <Icon name="arrow-right" size={16} />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
