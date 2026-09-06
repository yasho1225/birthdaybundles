import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { HOW_IT_WORKS, IMPACT_STATS, VOLUNTEER_ROLES } from '../config/content'
import { LINKS } from '../config/links'
import { IMAGES } from '../config/images'
import { appendUtmToUrl } from '../utils/utm'
import { useGSAP, gsap } from '../motion/gsap'
import { HeroExperience } from '../components/sections/HeroExperience'
import { BundleAssembly } from '../components/sections/BundleAssembly'
import { EditorialCarousel } from '../components/bits/EditorialCarousel'
import { CountUp } from '../components/bits/CountUp'
import { SpotlightCard } from '../components/bits/SpotlightCard'
import { Magnetic } from '../components/bits/Magnetic'
import { Button } from '../components/ui/Button'
import { Icon } from '../components/ui/Icon'
import { OptimizedImage } from '../components/ui/OptimizedImage'

export function Home() {
  const root = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const mm = gsap.matchMedia()

    gsap.from('.proof-statement > *', { y: 28, opacity: 0, duration: 0.7, stagger: 0.1, ease: 'power3.out', scrollTrigger: { trigger: '.proof-bridge', start: 'top 72%' } })
    gsap.from('.proof-stat', { y: 34, opacity: 0, scale: 0.96, duration: 0.65, stagger: 0.08, ease: 'power2.out', scrollTrigger: { trigger: '.proof-grid', start: 'top 82%' } })
    gsap.from('.process-rail-fill', { scaleX: 0, transformOrigin: 'left center', ease: 'none', scrollTrigger: { trigger: '.delivery-path', start: 'top 70%', end: 'bottom 70%', scrub: 0.7 } })
    gsap.from('.process-card', { y: 30, opacity: 0, duration: 0.6, stagger: 0.1, ease: 'power2.out', scrollTrigger: { trigger: '.process-accordion', start: 'top 78%' } })
    gsap.from('.action-route', { y: 42, opacity: 0, duration: 0.75, stagger: 0.12, ease: 'power3.out', scrollTrigger: { trigger: '.choose-part', start: 'top 72%' } })

    mm.add('(min-width: 900px)', () => {
      gsap.fromTo('.outcome-image img', { scale: 1.12 }, { scale: 1, ease: 'none', scrollTrigger: { trigger: '.human-outcome', start: 'top bottom', end: 'bottom top', scrub: 0.8 } })
      gsap.from('.outcome-image', { clipPath: 'inset(7% 8% 12% 8% round 2rem)', duration: 1, ease: 'power3.out', scrollTrigger: { trigger: '.human-outcome', start: 'top 76%' } })
      gsap.to('.outcome-caption', { yPercent: -20, ease: 'none', scrollTrigger: { trigger: '.human-outcome', start: 'top bottom', end: 'bottom top', scrub: 1 } })
    })

    return () => mm.revert()
  }, { scope: root })

  return (
    <div ref={root} className="home-experience">
      <HeroExperience />

      <section className="proof-bridge" aria-labelledby="proof-heading">
        <div className="section-container-wide proof-layout">
          <div className="proof-statement">
            <p className="chapter-kicker">The promise</p>
            <h2 id="proof-heading">A birthday is a small day that can say something <em>enormous.</em></h2>
            <p>It says: you belong here, your milestones matter, and your community remembered.</p>
          </div>
          <div className="proof-grid">
            {IMPACT_STATS.map((stat) => (
              <div key={stat.label} className="proof-stat"><span><CountUp value={stat.value} /></span><p>{stat.label}</p></div>
            ))}
          </div>
        </div>
      </section>

      <BundleAssembly />

      <section className="human-outcome" aria-labelledby="outcome-heading">
        <div className="section-container-wide outcome-layout">
          <figure className="outcome-image">
            <OptimizedImage src={IMAGES.gallery[0]} fallback="/images/placeholders/gallery-2.svg" alt="A volunteer holding a handwritten celebration card before a community delivery" />
            <figcaption className="outcome-caption">The box is the object. Feeling remembered is the outcome.</figcaption>
          </figure>
          <div className="outcome-copy">
            <p className="chapter-kicker">What the bundle really holds</p>
            <h2 id="outcome-heading">More than supplies. A memory.</h2>
            <p className="outcome-lead">The cake gets eaten. The balloons come down. The feeling of being celebrated stays.</p>
            <EditorialCarousel />
            <Button as={Link} to="/about" variant="outline">Read our story <Icon name="arrow-right" size={17} /></Button>
          </div>
        </div>
      </section>

      <section className="delivery-path" aria-labelledby="delivery-heading">
        <div className="section-container-wide">
          <div className="delivery-heading">
            <p className="chapter-kicker">How joy gets there</p>
            <h2 id="delivery-heading">A clear path from a quiet need to a full celebration.</h2>
            <p>Every referral is handled privately. Every bundle is prepared thoughtfully. Every delivery protects a family’s dignity.</p>
          </div>
          <div className="process-rail" aria-hidden="true"><span className="process-rail-fill" /></div>
          <div className="process-accordion">
            {HOW_IT_WORKS.map((step, index) => (
              <article key={step.title} className="process-card">
                <span className="process-number">0{index + 1}</span>
                <Icon name={step.icon} size={34} />
                <div><h3>{step.title}</h3><p>{step.description}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="choose-part" aria-labelledby="choose-heading">
        <div className="section-container-wide">
          <div className="choose-heading">
            <p className="chapter-kicker">Choose your part</p>
            <h2 id="choose-heading">The next birthday needs a few good people.</h2>
            <p>Fund the complete bundle or help make one by hand. Both paths end at the same place: a child feeling seen.</p>
          </div>
          <div className="action-routes">
            <SpotlightCard className="action-route action-sponsor">
              <span className="action-icon"><Icon name="gift" size={34} /></span>
              <p>A complete birthday bundle costs $75.</p>
              <h3>Sponsor the whole celebration.</h3>
              <Magnetic><Button as={Link} to="/donate" size="lg" variant="white">Sponsor a bundle <Icon name="arrow-right" size={18} /></Button></Magnetic>
            </SpotlightCard>
            <SpotlightCard className="action-route action-volunteer">
              <span className="action-icon"><Icon name="hand-heart" size={34} /></span>
              <p>{VOLUNTEER_ROLES[0].description}</p>
              <h3>Bring your time, care, or cake.</h3>
              <div className="action-links">
                <a href={appendUtmToUrl(LINKS.volunteerForm)} target="_blank" rel="noreferrer">Volunteer with us <Icon name="external" size={16} /></a>
                <Link to="/volunteer">Explore volunteer roles <Icon name="arrow-right" size={16} /></Link>
              </div>
            </SpotlightCard>
          </div>
        </div>
      </section>
    </div>
  )
}
