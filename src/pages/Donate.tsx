import { useRef } from 'react'
import { BUNDLE_ITEMS, DONATION_TIERS, SITE } from '../config/content'
import { LINKS } from '../config/links'
import { appendUtmToUrl } from '../utils/utm'
import { useGSAP, gsap } from '../motion/gsap'
import { PageHeader } from '../components/ui/PageHeader'
import { Button } from '../components/ui/Button'
import { Icon } from '../components/ui/Icon'
import { SpotlightCard } from '../components/bits/SpotlightCard'

export function Donate() {
  const root = useRef<HTMLDivElement>(null)
  const handleDonate = (amount: number) => window.open(appendUtmToUrl(`${LINKS.gofundme}?amount=${amount}`), '_blank', 'noopener,noreferrer')

  useGSAP(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    gsap.from('.donation-tier-new', { y: 70, opacity: 0, rotate: (i: number) => i % 2 ? 1.5 : -1.5, stagger: .09, duration: .8, ease: 'power3.out', scrollTrigger: { trigger: '.donation-grid-new', start: 'top 78%' } })
    gsap.to('.donation-path-line', { scaleX: 1, ease: 'none', scrollTrigger: { trigger: '.donation-path', start: 'top 75%', end: 'bottom 55%', scrub: .6 } })
  }, { scope: root })

  return <div ref={root} className="donate-page">
    <PageHeader title="Turn a gift into a birthday" subtitle="Choose the part you want to make possible. Every dollar funds birthday bundles for families in need." />
    <section className="donation-meaning" aria-labelledby="donation-meaning-heading">
      <div className="section-container-wide">
        <p className="donation-trust">{SITE.trustCopy}</p>
        <h2 id="donation-meaning-heading">What your gift puts inside the box.</h2>
        <div className="donation-grid-new">
          {DONATION_TIERS.map((tier) => <button type="button" onClick={() => handleDonate(tier.amount)} key={tier.amount} className={`donation-tier-new ${tier.highlighted ? 'is-featured' : ''}`}>
            <span className="donation-amount">${tier.amount}</span><span className="donation-tier-title">{tier.title}</span><span className="donation-tier-copy">{tier.description}</span><span className="donation-tier-action">Choose this gift <Icon name="arrow-right" size={18} /></span>
          </button>)}
        </div>
      </div>
    </section>
    <section className="donation-path" aria-labelledby="donation-path-heading">
      <div className="section-container-wide">
        <h2 id="donation-path-heading">From your hands to their celebration.</h2>
        <div className="donation-path-line" aria-hidden="true" />
        <ol>{BUNDLE_ITEMS.map((item, index) => <li key={item.label}><span>{String(index + 1).padStart(2,'0')}</span><Icon name={item.icon} size={30}/><h3>{item.label}</h3><p>{item.description}</p></li>)}</ol>
      </div>
    </section>
    <section className="donation-direct" aria-labelledby="donation-direct-heading">
      <div className="section-container-wide donation-direct-grid">
        <div><p>A secure next step</p><h2 id="donation-direct-heading">Ready when you are.</h2><p>Your donation continues on GoFundMe. The campaign link is centralized and preserves campaign tracking.</p><Button as="a" href={appendUtmToUrl(LINKS.gofundme)} target="_blank" rel="noopener noreferrer" size="lg" variant="white">Donate on GoFundMe <Icon name="external" size={17}/></Button></div>
        <SpotlightCard className="donation-widget"><Icon name="gift" size={48}/><h3>Campaign widget</h3><p>The live GoFundMe embed will appear here once the organization supplies its campaign code.</p></SpotlightCard>
      </div>
    </section>
  </div>
}
