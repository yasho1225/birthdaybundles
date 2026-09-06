import { useState } from 'react'
import { TESTIMONIALS } from '../../config/content'
import { Icon } from '../ui/Icon'
import { OptimizedImage } from '../ui/OptimizedImage'

export function EditorialCarousel() {
  const [active, setActive] = useState(0)
  const testimonial = TESTIMONIALS[active]
  const change = (direction: number) => setActive((current) => (current + direction + TESTIMONIALS.length) % TESTIMONIALS.length)

  return (
    <div className="editorial-carousel" aria-roledescription="carousel" aria-label="Community updates from Birthday Bundles">
      <div className="carousel-portraits" aria-hidden="true">
        {TESTIMONIALS.map((item, index) => (
          <span key={item.name} className={index === active ? 'is-active' : ''}>
            <OptimizedImage src={item.src} fallback={item.fallback} alt="" />
          </span>
        ))}
      </div>
      <blockquote key={testimonial.name}>“{testimonial.quote}”</blockquote>
      <div className="carousel-meta">
        <p><strong>{testimonial.name}</strong><span>{testimonial.role}</span></p>
        <div className="carousel-controls">
          <button type="button" onClick={() => change(-1)} aria-label="Previous community update"><Icon name="arrow-right" className="carousel-prev-icon" size={18} /></button>
          <span>{active + 1} / {TESTIMONIALS.length}</span>
          <button type="button" onClick={() => change(1)} aria-label="Next community update"><Icon name="arrow-right" size={18} /></button>
        </div>
      </div>
    </div>
  )
}
