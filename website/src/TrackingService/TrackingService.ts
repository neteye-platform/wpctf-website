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
    try {
      app.use(VueMatomo, {
        host: 'https://analytics.neteye.cloud',
        siteId: 4,
        enableLinkTracking: true
      })
    } catch {
      // Do not block app boot when analytics plugin setup fails.
      return
    }

    this.safePush(['enableHeartBeatTimer'])
    this.safePush(['requireConsent'])
    this.safePush(['requireCookieConsent'])

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
    this.safePush(['setConsentGiven'])
    this.safePush(['setCookieConsentGiven'])
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
      this.safePush(['trackPageView', path])
    } else {
      this.safePush(['trackPageView'])
    }
  }

  public eventRegistrationCredentials(credentials: string): void {
    this.safePush(['trackEvent', 'registration', 'credentials', credentials])
  }

  public eventRegistrationSuccess(): void {
    this.safePush(['trackEvent', 'registration', 'success'])
  }

  private safePush(entry: unknown[]): void {
    const queue = (window as Window & { _paq?: unknown[] })._paq
    if (!Array.isArray(queue)) {
      return
    }

    queue.push(entry)
  }
}

const TrackingService = TrackingServiceWrapper.instance
export default TrackingService
