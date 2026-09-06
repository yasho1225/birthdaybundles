import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { SITE } from '../../config/content'
import { IMAGES } from '../../config/images'
import { useGSAP, gsap } from '../../motion/gsap'
import { Magnetic } from '../bits/Magnetic'
import { Button } from '../ui/Button'
import { Icon } from '../ui/Icon'
import { OptimizedImage } from '../ui/OptimizedImage'

export function HeroExperience() {
  const root = useRef<HTMLElement>(null)

  useGSAP(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const intro = gsap.timeline({ defaults: { ease: 'power3.out' } })
    intro
      .from('.hero-line-inner', { yPercent: 112, rotate: 1.2, duration: 0.95, stagger: 0.1 })
      .from('.hero-kicker, .hero-detail, .hero-actions, .hero-trust', { y: 20, autoAlpha: 0, duration: 0.58, stagger: 0.08 }, '-=.58')
      .from('.hero-media', { clipPath: 'inset(8% 10% 8% 8%)', scale: 0.96, duration: 1.1 }, '-=.98')
      .from('.hero-media-note', { y: 42, rotate: 7, autoAlpha: 0, duration: 0.62 }, '-=.48')

    const mm = gsap.matchMedia()
    mm.add('(min-width: 900px)', () => {
      gsap.timeline({
        scrollTrigger: {
          trigger: root.current,
          start: 'top top',
          end: '+=125%',
          pin: true,
          scrub: 0.9,
          anticipatePin: 1,
        },
      })
        .to('.hero-kicker, .hero-detail, .hero-actions, .hero-trust', { y: -32, autoAlpha: 0, stagger: 0.025, duration: 0.32 }, 0)
        .to('.hero-title', { yPercent: -14, scale: 0.8, autoAlpha: 0.82, transformOrigin: 'left top', duration: 0.78 }, 0)
        .to('.hero-media', { xPercent: -23, scale: 1.18, clipPath: 'inset(0% 0% 0% 0%)', duration: 1 }, 0)
        .to('.hero-media img', { scale: 1.08, yPercent: -3, duration: 1 }, 0)
        .to('.hero-media-note', { yPercent: -32, rotate: -2, duration: 1 }, 0)
    })
    return () => mm.revert()
  }, { scope: root })

  return (
    <section ref={root} aria-labelledby="hero-heading" className="birthday-hero">
      <div className="hero-grid section-container-wide">
        <div className="hero-copy-layer">
          <p className="hero-kicker">One thoughtful box. One child fully celebrated.</p>
          <h1 id="hero-heading" className="hero-title">
            <span className="hero-line"><span className="hero-line-inner">Make a birthday</span></span>
            <span className="hero-line"><span className="hero-line-inner">feel <em>remembered.</em></span></span>
          </h1>
          <p className="hero-detail">{SITE.missionBlurb}</p>
          <div className="hero-actions">
            <Magnetic><Button as={Link} to="/donate" size="lg">Sponsor a birthday <Icon name="arrow-right" size={18} /></Button></Magnetic>
            <Button as="a" href="#bundle-assembly" variant="white" size="lg">See what’s inside</Button>
          </div>
          <p className="hero-trust"><span aria-hidden="true">✓</span>{SITE.trustCopy}</p>
        </div>

        <figure className="hero-media">
          <OptimizedImage src="/images/photos/hero-celebration.png" fallback={IMAGES.gallery[4]} alt="Volunteers arranging a birthday cake, decorations, a gift, and party supplies" loading="eager" fetchPriority="high" />
          <div className="hero-media-wash" aria-hidden="true" />
          <figcaption className="hero-media-note">
            <span>Prepared by volunteers</span>
            <strong>Packed for one child,<br />with their day in mind.</strong>
          </figcaption>
        </figure>
      </div>
    </section>
  )
}
