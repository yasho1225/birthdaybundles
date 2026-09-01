import { useEffect, useState } from 'react'

const STORAGE_KEY = 'bb-cookie-consent'

export function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem(STORAGE_KEY)
    if (!consent) setVisible(true)
  }, [])

  const dismiss = () => {
    localStorage.setItem(STORAGE_KEY, 'accepted')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div
      role="dialog"
      aria-label="Cookie notice"
      className="fixed bottom-0 left-0 right-0 z-[70] border-t border-ink/10 bg-surface p-4 shadow-card-hover no-print md:p-5"
    >
      <div className="section-container flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <p className="max-w-2xl font-body text-sm text-muted">
          We use essential cookies and local storage to remember your preferences (theme, cookie
          consent). No third-party tracking cookies are used.
        </p>
        <div className="flex shrink-0 gap-3">
          <button
            type="button"
            onClick={dismiss}
            className="rounded-full bg-secondary px-5 py-2.5 font-heading text-sm font-bold text-white transition-colors hover:bg-secondary/90 focus-ring"
          >
            Accept
          </button>
          <button
            type="button"
            onClick={dismiss}
            className="rounded-full px-5 py-2.5 font-heading text-sm font-bold text-subtle transition-colors hover:bg-ink/5 focus-ring dark:hover:bg-white/10"
          >
            Dismiss
          </button>
        </div>
      </div>
    </div>
  )
}
