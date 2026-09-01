const UTM_STORAGE_KEY = 'bb-utm-params'
const UTM_KEYS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'] as const

export type UtmParams = Partial<Record<(typeof UTM_KEYS)[number], string>>

export function captureUtmParams(): void {
  if (typeof window === 'undefined') return

  const params = new URLSearchParams(window.location.search)
  const captured: UtmParams = {}

  for (const key of UTM_KEYS) {
    const value = params.get(key)
    if (value) captured[key] = value
  }

  if (Object.keys(captured).length > 0) {
    sessionStorage.setItem(UTM_STORAGE_KEY, JSON.stringify(captured))
  }
}

export function getStoredUtmParams(): UtmParams {
  if (typeof window === 'undefined') return {}

  try {
    const raw = sessionStorage.getItem(UTM_STORAGE_KEY)
    return raw ? (JSON.parse(raw) as UtmParams) : {}
  } catch {
    return {}
  }
}

export function appendUtmToUrl(url: string): string {
  const utm = getStoredUtmParams()
  if (Object.keys(utm).length === 0) return url

  try {
    const parsed = new URL(url, window.location.origin)
    if (parsed.origin === window.location.origin) return url

    for (const [key, value] of Object.entries(utm)) {
      if (value && !parsed.searchParams.has(key)) {
        parsed.searchParams.set(key, value)
      }
    }
    return parsed.toString()
  } catch {
    return url
  }
}
