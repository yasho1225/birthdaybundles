import { Link } from 'react-router-dom'
import { useFloatingBottomOffset } from '../../hooks/useCookieConsent'

export function ContactFab() {
  const bottomOffset = useFloatingBottomOffset()

  return (
    <Link
      to="/contact"
      className={`fixed right-5 z-40 flex h-14 w-14 items-center justify-center rounded-none bg-primary text-white transition-[bottom] duration-200 hover:bg-primary/90 focus-ring no-print md:right-8 ${bottomOffset}`}
      aria-label="Contact us"
    >
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    </Link>
  )
}
