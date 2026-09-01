import { type ReactNode } from 'react'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion'

type ScrollRevealProps = {
  children: ReactNode
  className?: string
  delay?: number
}

export function ScrollReveal({ children, className = '', delay = 0 }: ScrollRevealProps) {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>()
  const prefersReducedMotion = usePrefersReducedMotion()

  const transitionStyle = prefersReducedMotion
    ? {}
    : { transitionDelay: `${delay}ms` }

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
      } ${className}`}
      style={transitionStyle}
    >
      {children}
    </div>
  )
}
