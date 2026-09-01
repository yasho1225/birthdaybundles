import { useEffect, useState } from 'react'
import { useBackToTopBottomOffset } from '../../hooks/useCookieConsent'
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion'

const SCROLL_THRESHOLD = 400

export function BackToTopButton() {
  const [visible, setVisible] = useState(false)
  const prefersReducedMotion = usePrefersReducedMotion()
  const bottomOffset = useBackToTopBottomOffset()

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > SCROLL_THRESHOLD)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: prefersReducedMotion ? 'auto' : 'smooth' })
  }

  if (!visible) return null

  return (
    <button
      type="button"
      onClick={scrollToTop}
      className={`fixed left-5 z-40 flex h-11 w-11 items-center justify-center rounded-none bg-secondary text-white transition-[bottom] duration-200 hover:bg-secondary/90 focus-ring no-print md:left-8 ${bottomOffset}`}
      aria-label="Back to top"
    >
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
      </svg>
    </button>
  )
}
