import { useEffect, useState } from 'react'

const STORAGE_KEY = 'bb-cookie-consent'
const CONSENT_EVENT = 'bb-cookie-consent-change'

export function getCookieConsent(): boolean {
  if (typeof window === 'undefined') return false
  return Boolean(localStorage.getItem(STORAGE_KEY))
}

export function setCookieConsent(): void {
  localStorage.setItem(STORAGE_KEY, 'accepted')
  window.dispatchEvent(new CustomEvent(CONSENT_EVENT))
}

export function useCookieConsent(): boolean {
  const [visible, setVisible] = useState(() => !getCookieConsent())

  useEffect(() => {
    const sync = () => setVisible(!getCookieConsent())
    window.addEventListener('storage', sync)
    window.addEventListener(CONSENT_EVENT, sync)
    return () => {
      window.removeEventListener('storage', sync)
      window.removeEventListener(CONSENT_EVENT, sync)
    }
  }, [])

  return visible
}

export function useFloatingBottomOffset(): string {
  const cookieVisible = useCookieConsent()
  return cookieVisible ? 'bottom-28 md:bottom-32' : 'bottom-5 md:bottom-8'
}

export function useBackToTopBottomOffset(): string {
  const cookieVisible = useCookieConsent()
  // Stack above the contact FAB (56px) with a 12px gap
  return cookieVisible ? 'bottom-44 md:bottom-48' : 'bottom-24 md:bottom-28'
}
