/**
 * Consentement cookies (RGPD / CNIL) via tarteaucitron.js + Google Consent Mode v2.
 *
 * - Par défaut TOUT est refusé (script inline `CONSENT_DEFAULT_SCRIPT`, exécuté
 *   dans app/layout.tsx AVANT GTM et gtag.js). Il réapplique aussi le choix
 *   déjà enregistré dans le cookie tarteaucitron, sans attendre son chargement.
 * - Le bandeau est tarteaucitron (components/CookieBanner.tsx), avec 2 services
 *   « maison » (`TAC_ANALYTICS`, `TAC_ADS`) qui ne chargent rien eux-mêmes : GTM
 *   charge les tags, eux ne font que piloter le consentement via `applyConsent`.
 * - À chaque choix : `gtag('consent','update',…)` + événement dataLayer
 *   `cookie_consent_update` (déclencheur GTM pour le Meta Pixel) + événement
 *   DOM `CONSENT_CHANGE_EVENT` (PostHog, voir components/Analytics.tsx).
 */

export const TAC_COOKIE = "tarteaucitron";
export const TAC_ANALYTICS = "sosanalytics";
export const TAC_ADS = "sosads";
export const CONSENT_CHANGE_EVENT = "sos-consent-change";

export type ConsentChoice = {
  /** Mesure d'audience : Google Analytics 4, PostHog */
  analytics: boolean;
  /** Publicité : Google Ads (conversions, remarketing), Meta Pixel */
  ads: boolean;
};

declare global {
  interface Window {
    __sosConsent?: ConsentChoice;
    tarteaucitron?: {
      init: (params: Record<string, unknown>) => void;
      services: Record<string, unknown>;
      job?: string[];
      userInterface: { openPanel: () => void };
    };
  }
}

export function getConsent(): ConsentChoice {
  return window.__sosConsent ?? { analytics: false, ads: false };
}

export function applyConsent(partial: Partial<ConsentChoice>) {
  const prev = getConsent();
  const next = { ...prev, ...partial };
  window.__sosConsent = next;

  window.dataLayer = window.dataLayer || [];
  // gtag() doit pousser l'objet `arguments` (et non un tableau) dans le dataLayer.
  const gtag =
    window.gtag ||
    function () {
      // eslint-disable-next-line prefer-rest-params
      window.dataLayer!.push(arguments);
    };
  const update: Record<string, string> = {};
  if (partial.analytics !== undefined) {
    update.analytics_storage = next.analytics ? "granted" : "denied";
  }
  if (partial.ads !== undefined) {
    const ads = next.ads ? "granted" : "denied";
    update.ad_storage = ads;
    update.ad_user_data = ads;
    update.ad_personalization = ads;
  }
  gtag("consent", "update", update);
  window.dataLayer.push({
    event: "cookie_consent_update",
    consent_analytics: next.analytics,
    consent_ads: next.ads,
  });

  // Meta Pixel (posé via GTM) : retire le consentement s'il est déjà chargé.
  if (partial.ads !== undefined && typeof window.fbq === "function") {
    window.fbq("consent", next.ads ? "grant" : "revoke");
  }

  window.dispatchEvent(new CustomEvent<ConsentChoice>(CONSENT_CHANGE_EVENT, { detail: next }));
}

export function openCookiePreferences() {
  window.tarteaucitron?.userInterface.openPanel();
}

/**
 * Script inline à exécuter AVANT GTM / gtag.js : état par défaut « refusé »,
 * puis réapplication immédiate du choix déjà enregistré par tarteaucitron
 * (cookie `tarteaucitron=!sosanalytics=true!sosads=false`).
 */
export const CONSENT_DEFAULT_SCRIPT =
  "(function(){window.dataLayer=window.dataLayer||[];" +
  "function gtag(){dataLayer.push(arguments);}window.gtag=window.gtag||gtag;" +
  "gtag('consent','default',{ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied'," +
  "analytics_storage:'denied',functionality_storage:'granted',security_storage:'granted',wait_for_update:500});" +
  "gtag('set','ads_data_redaction',true);gtag('set','url_passthrough',true);" +
  "var m=document.cookie.match(/(?:^|; )" + TAC_COOKIE + "=([^;]*)/),c=m?decodeURIComponent(m[1]):'';" +
  "var an=c.indexOf('!" + TAC_ANALYTICS + "=true')>-1,ad=c.indexOf('!" + TAC_ADS + "=true')>-1;" +
  "window.__sosConsent={analytics:an,ads:ad};" +
  "if(an||ad){var a=ad?'granted':'denied';" +
  "gtag('consent','update',{ad_storage:a,ad_user_data:a,ad_personalization:a," +
  "analytics_storage:an?'granted':'denied'});}})();";
