import VueMatomo from 'vue-matomo'
import type { Router } from 'vue-router'
import { useCookies } from 'vue3-cookies'
import type { App } from 'vue'

const { cookies } = useCookies()

class TrackingServiceWrapper {
  private static _instance = new TrackingServiceWrapper()
  public static get instance(): TrackingServiceWrapper {
    return this._instance
  }

  public init(app: App, router: Router): void {
    app.use(VueMatomo, {
      host: 'https://analytics.neteye.cloud',
      siteId: 4,
      enableLinkTracking: true
    })

    // @ts-ignore
    window._paq.push(['enableHeartBeatTimer'])
    // @ts-ignore
    window._paq.push(['requireConsent'])
    // @ts-ignore
    window._paq.push(['requireCookieConsent'])

    if (this.userAccepted()) {
      this.consent()
    }
  }

  public userAccepted(): boolean {
    return this.getUserAcceptsValue() === 'true'
  }

  public getUserAcceptsValue(): string {
    return cookies.get('user-accepts-cookies')
  }

  public consent(): void {
    cookies.set('user-accepts-cookies', 'true', 3650, '/', window.location.hostname, true, 'strict')
    // @ts-ignore
    window._paq.push(['setConsentGiven'])
    // @ts-ignore
    window._paq.push(['setCookieConsentGiven'])
  }

  public decline() {
    cookies.set(
      'user-accepts-cookies',
      'false',
      3650,
      '/',
      window.location.hostname,
      true,
      'strict'
    )
  }

  public trackPage(path: string | null = null): void {
    if (path) {
      // @ts-ignore
      window._paq.push(['trackPageView', path])
    } else {
      // @ts-ignore
      window._paq.push(['trackPageView'])
    }
  }

  public eventRegistrationCredentials(credentials: string): void {
    //@ts-ignore
    window._paq.push(["trackEvent", "registration", "credentials", credentials]);
  }

  public eventRegistrationSuccess(): void {
    //@ts-ignore
    window._paq.push(["trackEvent", "registration", "success"]);
  }
}

const TrackingService = TrackingServiceWrapper.instance
export default TrackingService
