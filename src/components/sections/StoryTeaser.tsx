import { Link } from 'react-router-dom'
import { STORY_QUOTE } from '../../config/content'
import { ScrollReveal } from '../ui/ScrollReveal'

export function StoryTeaser() {
  return (
    <section aria-labelledby="story-teaser-heading" className="section-padding bg-inverse">
      <div className="section-container">
        <ScrollReveal>
          <div className="relative mx-auto max-w-4xl text-center">
            <span
              className="font-serif-accent text-8xl leading-none text-primary/30"
              aria-hidden="true"
            >
              &ldquo;
            </span>
            <h2 id="story-teaser-heading" className="sr-only">
              Our Story
            </h2>
            <blockquote className="-mt-10 font-serif-accent text-2xl italic leading-snug text-white md:text-3xl lg:text-4xl">
              {STORY_QUOTE.text}
            </blockquote>
            <cite className="mt-8 block font-quote text-base font-bold not-italic text-accent md:text-lg">
              — {STORY_QUOTE.attribution}
            </cite>
            <Link
              to="/about"
              className="mt-10 inline-flex items-center gap-2 font-heading text-sm font-bold uppercase tracking-widest text-white transition-colors hover:text-accent focus-ring rounded"
            >
              Read our story
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
