import { useRef } from 'react'
import { LINKS } from '../config/links'
import { useGSAP, gsap } from '../motion/gsap'
import { PageHeader } from '../components/ui/PageHeader'
import { Button } from '../components/ui/Button'
import { Icon } from '../components/ui/Icon'

export function Donate() {
  const root = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    gsap.from('.donate-purpose-card', {
      y: 42,
      opacity: 0,
      stagger: .1,
      duration: .72,
      ease: 'power3.out',
      scrollTrigger: { trigger: '.donate-purpose-grid', start: 'top 78%' },
    })
  }, { scope: root })

  return (
    <div ref={root} className="donate-page">
      <PageHeader
        title="Support a birthday"
        subtitle="Your gift helps Birthday Bundles bring celebration supplies and baked goods to children in the Atlanta area."
      />

      <section className="donate-intro" aria-labelledby="donate-intro-heading">
        <div className="section-container-wide donate-intro-grid">
          <div>
            <p className="donate-eyebrow">A gift with a real destination</p>
            <h2 id="donate-intro-heading">Help make room for joy.</h2>
            <p>
              Birthday Bundles is a 501(c)(3) nonprofit. Donations support the supplies
              that make each bundle and baking delivery possible.
            </p>
            <Button
              as="a"
              href={LINKS.gofundme}
              target="_blank"
              rel="noopener noreferrer"
              size="lg"
            >
              Give on GoFundMe <Icon name="external" size={17} />
            </Button>
          </div>

          <aside className="donate-trust-note" aria-label="Donation information">
            <Icon name="heart" size={28} />
            <p>Donations are processed securely by GoFundMe.</p>
            <a href={LINKS.gofundme} target="_blank" rel="noopener noreferrer">
              Open the live campaign <Icon name="external" size={15} />
            </a>
          </aside>
        </div>
      </section>

      <section className="donate-purpose" aria-labelledby="donate-purpose-heading">
        <div className="section-container-wide">
          <div className="donate-section-heading">
            <p>What support makes possible</p>
            <h2 id="donate-purpose-heading">The care behind each delivery.</h2>
          </div>
          <div className="donate-purpose-grid">
            <article className="donate-purpose-card">
              <Icon name="package" size={31} />
              <h3>Bundle supplies</h3>
              <p>Celebration essentials are gathered with each recipient in mind.</p>
            </article>
            <article className="donate-purpose-card">
              <Icon name="cake" size={31} />
              <h3>Baking supplies</h3>
              <p>Ingredients help volunteers create thoughtful baked-good deliveries.</p>
            </article>
            <article className="donate-purpose-card">
              <Icon name="community" size={31} />
              <h3>Community care</h3>
              <p>Support helps Birthday Bundles respond to celebrations across the Atlanta area.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="donate-embed-section" aria-labelledby="donate-embed-heading">
        <div className="section-container-wide donate-embed-grid">
          <div className="donate-embed-copy">
            <p>A secure next step</p>
            <h2 id="donate-embed-heading">Give when it feels right.</h2>
            <p>
              The campaign below is managed by GoFundMe. If it does not load in your browser,
              use the secure campaign link instead.
            </p>
            <Button
              as="a"
              href={LINKS.gofundme}
              target="_blank"
              rel="noopener noreferrer"
              size="lg"
              variant="white"
            >
              Open secure GoFundMe <Icon name="external" size={17} />
            </Button>
          </div>
          <div className="donate-gofundme-frame">
            <iframe
              src={LINKS.gofundme}
              title="Birthday Bundles GoFundMe campaign"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </div>
  )
}
