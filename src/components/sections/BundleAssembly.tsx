import { useRef, useState } from 'react'
import { BUNDLE_ITEMS } from '../../config/content'
import { useGSAP, gsap, ScrollTrigger } from '../../motion/gsap'

const STAGES = ['Cake', 'Decorations', 'Gift', 'Party supplies', 'Ready']

export function BundleAssembly() {
  const root = useRef<HTMLElement>(null)
  const lastStage = useRef(-1)
  const [active, setActive] = useState(0)

  useGSAP(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const mm = gsap.matchMedia()

    mm.add('(min-width: 900px)', () => {
      const updateStage = (self: ScrollTrigger) => {
        const next = Math.min(4, Math.floor(self.progress * 5))
        if (next !== lastStage.current) {
          lastStage.current = next
          setActive(next)
        }
      }

      const timeline = gsap.timeline({
        defaults: { ease: 'power2.inOut' },
        scrollTrigger: {
          trigger: root.current,
          start: 'top top',
          end: () => `+=${Math.min(window.innerHeight * 2.9, 2700)}`,
          pin: true,
          scrub: 0.8,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onUpdate: updateStage,
        },
      })

      timeline
        .addLabel('cake')
        .from('.bundle-piece-0', { y: 90, z: 100, rotateX: -12, rotate: -4, scale: 0.8, duration: 0.95 }, 'cake')
        .from('.cake-candle', { scaleY: 0, stagger: 0.06, duration: 0.38, transformOrigin: 'bottom' }, 'cake+=.48')
        .to('.bundle-progress-fill', { scaleX: 0.2, duration: 0.55 }, 'cake+=.25')
        .addLabel('decor', '+=0.16')
        .from('.assembly-balloon', { y: 180, scale: 0.42, autoAlpha: 0, stagger: 0.07, duration: 0.7, ease: 'back.out(1.3)' }, 'decor')
        .from('.assembly-banner', { scaleX: 0.12, autoAlpha: 0, duration: 0.75, transformOrigin: 'center' }, 'decor+=.08')
        .from('.assembly-confetti i', { y: 50, rotate: 40, scale: 0, autoAlpha: 0, stagger: 0.045, duration: 0.45 }, 'decor+=.18')
        .to('.bundle-progress-fill', { scaleX: 0.4, duration: 0.55 }, 'decor+=.2')
        .addLabel('gift', '+=0.18')
        .from('.bundle-piece-2', { x: 320, y: -90, z: 180, rotate: 12, scale: 0.68, autoAlpha: 0, duration: 0.9, ease: 'back.out(1.2)' }, 'gift')
        .to('.bundle-progress-fill', { scaleX: 0.6, duration: 0.55 }, 'gift+=.18')
        .addLabel('supplies', '+=0.18')
        .from('.bundle-piece-3', { x: -230, y: 170, z: 120, rotate: -9, scale: 0.72, autoAlpha: 0, duration: 0.85, ease: 'back.out(1.15)' }, 'supplies')
        .to('.bundle-progress-fill', { scaleX: 0.8, duration: 0.55 }, 'supplies+=.16')
        .addLabel('complete', '+=0.2')
        .to('.assembly-cake', { scale: 1.045, y: -8, duration: 0.65 }, 'complete')
        .to('.assembly-decor', { scale: 1.03, duration: 0.65 }, 'complete')
        .fromTo('.assembly-ring', { scale: 0.6, autoAlpha: 0 }, { scale: 1, autoAlpha: 1, duration: 0.7, ease: 'power3.out' }, 'complete+=.12')
        .fromTo('.celebration-message', { y: 28, rotate: 5, autoAlpha: 0 }, { y: 0, rotate: -2, autoAlpha: 1, duration: 0.62, ease: 'back.out(1.25)' }, 'complete+=.32')
        .to('.bundle-progress-fill', { scaleX: 1, duration: 0.45 }, 'complete+=.28')

      return () => timeline.scrollTrigger?.kill()
    })

    mm.add('(max-width: 899px)', () => {
      gsap.from('.bundle-piece', { y: 44, scale: 0.9, autoAlpha: 0, stagger: 0.12, duration: 0.65, scrollTrigger: { trigger: '.bundle-visual', start: 'top 78%' } })
      gsap.from('.celebration-message', { y: 18, autoAlpha: 0, duration: 0.55, scrollTrigger: { trigger: '.celebration-message', start: 'top 88%' } })
    })

    return () => mm.revert()
  }, { scope: root })

  return (
    <section ref={root} id="bundle-assembly" className="bundle-assembly" aria-labelledby="bundle-assembly-heading">
      <div className="bundle-stage section-container-wide">
        <div className="bundle-copy-column">
          <p className="chapter-kicker">What your support becomes</p>
          <h2 id="bundle-assembly-heading">Build a birthday, one thoughtful thing at a time.</h2>
          <p className="bundle-intro">Not a collection of party supplies. A complete moment, considered from the child’s point of view.</p>
          <ol className="bundle-steps">
            {BUNDLE_ITEMS.map((item, index) => (
              <li key={item.label} className={`bundle-step ${active === index ? 'is-active' : ''} ${active > index ? 'is-complete' : ''}`} aria-current={active === index ? 'step' : undefined}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <div><h3>{item.label}</h3><p>{item.description}</p></div>
              </li>
            ))}
            <li className={`bundle-step bundle-final-step ${active === 4 ? 'is-active' : ''}`} aria-current={active === 4 ? 'step' : undefined}>
              <span>05</span><div><h3>Together, they become a birthday.</h3><p>Ready to deliver with dignity and care.</p></div>
            </li>
          </ol>
          <div className="bundle-progress" aria-hidden="true"><span className="bundle-progress-fill" /></div>
          <p className="bundle-status">Packing stage: {STAGES[active]}</p>
        </div>

        <div className={`bundle-visual bundle-stage-${active}`}>
          <div className="celebration-canvas" aria-hidden="true">
            <div className="assembly-ring" />
            <div className="bundle-piece bundle-piece-0 assembly-cake">
              <span className="cake-plate" />
              <span className="cake-layer cake-layer-bottom" />
              <span className="cake-layer cake-layer-top" />
              <span className="cake-icing cake-icing-one" />
              <span className="cake-icing cake-icing-two" />
              <span className="cake-candle cake-candle-one"><i /></span>
              <span className="cake-candle cake-candle-two"><i /></span>
              <span className="cake-candle cake-candle-three"><i /></span>
            </div>
            <div className="bundle-piece bundle-piece-1 assembly-decor">
              <div className="assembly-banner"><i /><i /><i /><i /><i /></div>
              <span className="assembly-balloon balloon-one" /><span className="assembly-balloon balloon-two" /><span className="assembly-balloon balloon-three" />
              <div className="assembly-confetti"><i /><i /><i /><i /><i /><i /></div>
            </div>
            <div className="bundle-piece bundle-piece-2 assembly-gift"><i /><span /></div>
            <div className="bundle-piece bundle-piece-3 assembly-supplies">
              <div className="plate-stack"><i /><i /><i /></div>
              <div className="party-cup"><i /></div>
              <div className="party-napkins"><i /><i /></div>
            </div>
            <div className="celebration-message"><span>Ready for one child</span><strong>A whole birthday,<br />thoughtfully made.</strong></div>
          </div>
        </div>
      </div>
      <div className="bundle-mobile-story section-container-wide">
        {BUNDLE_ITEMS.map((item, index) => <p key={item.label}><span>0{index + 1}</span><strong>{item.label}</strong>{item.description}</p>)}
      </div>
    </section>
  )
}
