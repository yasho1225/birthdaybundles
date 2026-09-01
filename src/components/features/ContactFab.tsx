import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const COOKIE_KEY = 'bb-cookie-consent'

export function ContactFab() {
  const [cookieVisible, setCookieVisible] = useState(false)

  useEffect(() => {
    const check = () => setCookieVisible(!localStorage.getItem(COOKIE_KEY))
    check()
    window.addEventListener('storage', check)
    const interval = setInterval(check, 500)
    return () => {
      window.removeEventListener('storage', check)
      clearInterval(interval)
    }
  }, [])

  return (
    <Link
      to="/contact"
      className={`fixed right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white shadow-glow transition-all hover:-translate-y-0.5 hover:shadow-card-hover focus-ring no-print md:right-8 ${
        cookieVisible ? 'bottom-28 md:bottom-32' : 'bottom-5 md:bottom-8'
      }`}
      aria-label="Contact us"
    >
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    </Link>
  )
}
