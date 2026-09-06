import { useRef } from 'react'
import { useGSAP, gsap } from '../../motion/gsap'

export function CountUp({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const target = Number.parseInt(value, 10)
  const suffix = value.replace(String(target), '')

  useGSAP(() => {
    if (!ref.current || Number.isNaN(target)) return
    const state = { value: 0 }
    gsap.to(state, {
      value: target,
      duration: 1.4,
      ease: 'power2.out',
      scrollTrigger: { trigger: ref.current, start: 'top 88%', once: true },
      onUpdate: () => {
        if (ref.current) ref.current.textContent = `${Math.round(state.value)}${suffix}`
      },
    })
  }, { scope: ref })

  return <span ref={ref}>{value}</span>
}
