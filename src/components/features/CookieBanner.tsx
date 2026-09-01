import { useEffect, useState } from 'react'
import { setCookieConsent } from '../../hooks/useCookieConsent'
import { Button } from '../ui/Button'

export function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('bb-cookie-consent')
    if (!consent) setVisible(true)
  }, [])

  const dismiss = () => {
    setCookieConsent()
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div
      role="dialog"
      aria-label="Cookie notice"
      className="fixed bottom-0 left-0 right-0 z-40 border-t border-ink/8 bg-surface/95 p-4 backdrop-blur-lg no-print md:p-5"
    >
      <div className="section-container flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <p className="max-w-2xl font-body text-sm text-muted">
          We use essential cookies and local storage to remember your preferences (theme, cookie
          consent). No third-party tracking cookies are used.
        </p>
        <Button type="button" onClick={dismiss} size="sm" variant="secondary" className="shrink-0">
          Got it
        </Button>
      </div>
    </div>
  )
}
