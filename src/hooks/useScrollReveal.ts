import { useEffect, useRef, useState } from 'react'
import { usePrefersReducedMotion } from './usePrefersReducedMotion'

export function useScrollReveal<T extends HTMLElement>(threshold = 0.15) {
  const ref = useRef<T>(null)
  const prefersReducedMotion = usePrefersReducedMotion()
  const [isVisible, setIsVisible] = useState(prefersReducedMotion)

  useEffect(() => {
    if (prefersReducedMotion) {
      setIsVisible(true)
      return
    }

    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(element)
        }
      },
      { threshold },
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [prefersReducedMotion, threshold])

  return { ref, isVisible }
}
