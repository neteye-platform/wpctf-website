import { useCookies } from 'vue3-cookies'

// Also read by the inline gtag snippet in index.html.
const consentCookieName = 'user-accepts-cookies'

const { cookies } = useCookies()

export function hasConsentChoice(): boolean {
  return cookies.isKey(consentCookieName)
}

export function setConsent(accepted: boolean): void {
  cookies.set(
    consentCookieName,
    String(accepted),
    '1y',
    '/',
    undefined,
    window.location.protocol === 'https:',
    'Strict'
  )
  window.gtag?.('consent', 'update', {
    analytics_storage: accepted ? 'granted' : 'denied'
  })
}
