import { cloneElement, isValidElement, useRef, type ReactElement } from 'react'
import { gsap } from '../../motion/gsap'

type MagneticProps = { children: ReactElement<{ className?: string }>; strength?: number }

export function Magnetic({ children, strength = 0.16 }: MagneticProps) {
  const ref = useRef<HTMLSpanElement>(null)

  const move = (event: React.PointerEvent<HTMLSpanElement>) => {
    if (event.pointerType === 'touch' || window.matchMedia('(prefers-reduced-motion: reduce)').matches || !ref.current) return
    const rect = ref.current.getBoundingClientRect()
    gsap.to(ref.current, {
      x: (event.clientX - rect.left - rect.width / 2) * strength,
      y: (event.clientY - rect.top - rect.height / 2) * strength,
      duration: 0.35,
      ease: 'power2.out',
    })
  }

  const reset = () => {
    if (!ref.current) return
    gsap.to(ref.current, { x: 0, y: 0, duration: 0.65, ease: 'elastic.out(1, .45)' })
  }

  return (
    <span ref={ref} className="magnetic-wrap" onPointerMove={move} onPointerLeave={reset}>
      {isValidElement(children) ? cloneElement(children) : children}
    </span>
  )
}
