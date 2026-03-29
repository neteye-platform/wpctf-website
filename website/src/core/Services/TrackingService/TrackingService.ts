import Vue from "vue";
import VueMatomo from "vue-matomo";
import VueRouter from "vue-router";

class TrackingServiceWrapper {
  private static _instance = new TrackingServiceWrapper();
  public static get instance(): TrackingServiceWrapper {
    return this._instance;
  }

  public init(router: VueRouter): void {
    Vue.use(VueMatomo, {
      host: "https://analytics.neteye.cloud",
      siteId: 2,
      router,
      enableLinkTracking: true,
    });

    // @ts-ignore
    window._paq.push(["enableHeartBeatTimer"]);
    // @ts-ignore
    window._paq.push(["requireConsent"]);
    // @ts-ignore
    window._paq.push(["requireCookieConsent"]);

    if (this.userAccepted()) {
      this.conset();
    }
  }

  public userAccepted(): boolean {
    return Vue.$cookies.get("user-accepts-cookies") === "true";
  }

  public userRejected(): boolean {
    return Vue.$cookies.get("user-accepts-cookies") === "false";
  }

  public conset(): void {
    // @ts-ignore
    window._paq.push(["setConsentGiven"]);
    // @ts-ignore
    window._paq.push(["setCookieConsentGiven"]);
    Vue.$cookies.set(
      "user-accepts-cookies",
      true,
      3650,
      "/",
      window.location.hostname,
      true,
      "strict"
    );
  }

  public negate(): void {
    Vue.$cookies.set(
      "user-accepts-cookies",
      false,
      3650,
      "/",
      window.location.hostname,
      true,
      "strict"
    );
  }

  public trackPage(path: string | null = null): void {
    if (path) {
      // @ts-ignore
      window._paq.push(["trackPageView", path]);
    } else {
      // @ts-ignore
      window._paq.push(["trackPageView"]);
    }
  }

  public eventRegistrationShellCommand(command: string): void {
    //@ts-ignore
    window._paq.push(["trackEvent", "registration", "shell-command", command]);
  }
}

export const TrackingService = TrackingServiceWrapper.instance;
