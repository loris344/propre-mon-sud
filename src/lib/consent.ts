/**
 * Consentement cookies (RGPD / CNIL) + Google Consent Mode v2.
 *
 * - Par défaut TOUT est refusé (script inline `CONSENT_DEFAULT_SCRIPT`, exécuté
 *   dans app/layout.tsx AVANT GTM et gtag.js).
 * - Le choix du visiteur est stocké dans localStorage (`STORAGE_KEY`) et
 *   redemandé au bout de 6 mois (recommandation CNIL).
 * - À chaque choix : `gtag('consent','update',…)` + événement dataLayer
 *   `cookie_consent_update` (déclencheur GTM pour le Meta Pixel) + événement
 *   DOM `CONSENT_CHANGE_EVENT` (PostHog, voir components/Analytics.tsx).
 */

export const STORAGE_KEY = "sos_cookie_consent";
export const CONSENT_VERSION = 1;
export const CONSENT_MAX_AGE_MS = 182 * 24 * 60 * 60 * 1000; // ~6 mois
export const CONSENT_CHANGE_EVENT = "sos-consent-change";
export const OPEN_PREFERENCES_EVENT = "sos-open-cookie-preferences";

export type ConsentChoice = {
  /** Mesure d'audience : Google Analytics 4, PostHog */
  analytics: boolean;
  /** Publicité : Google Ads (conversions, remarketing), Meta Pixel */
  ads: boolean;
};

type StoredConsent = ConsentChoice & { v: number; ts: number };

export function readConsent(): ConsentChoice | null {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const c = JSON.parse(raw) as StoredConsent;
    if (c.v !== CONSENT_VERSION || Date.now() - c.ts > CONSENT_MAX_AGE_MS) return null;
    return { analytics: !!c.analytics, ads: !!c.ads };
  } catch {
    return null;
  }
}

function toConsentModeState(c: ConsentChoice) {
  const ads = c.ads ? "granted" : "denied";
  return {
    ad_storage: ads,
    ad_user_data: ads,
    ad_personalization: ads,
    analytics_storage: c.analytics ? "granted" : "denied",
  };
}

export function saveConsent(choice: ConsentChoice) {
  const stored: StoredConsent = { ...choice, v: CONSENT_VERSION, ts: Date.now() };
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(stored));
  } catch {
    // Stockage bloqué (navigation privée stricte) : le choix vaut pour la page.
  }

  window.dataLayer = window.dataLayer || [];
  // gtag() doit pousser l'objet `arguments` (et non un tableau) dans le dataLayer.
  const gtag =
    window.gtag ||
    function () {
      // eslint-disable-next-line prefer-rest-params
      window.dataLayer!.push(arguments);
    };
  gtag("consent", "update", toConsentModeState(choice));
  window.dataLayer.push({
    event: "cookie_consent_update",
    consent_analytics: choice.analytics,
    consent_ads: choice.ads,
  });

  // Meta Pixel (posé via GTM) : retire le consentement s'il est déjà chargé.
  if (typeof window.fbq === "function") {
    window.fbq("consent", choice.ads ? "grant" : "revoke");
  }

  window.dispatchEvent(new CustomEvent<ConsentChoice>(CONSENT_CHANGE_EVENT, { detail: choice }));
}

export function openCookiePreferences() {
  window.dispatchEvent(new Event(OPEN_PREFERENCES_EVENT));
}

/**
 * Script inline à exécuter AVANT GTM / gtag.js : état par défaut « refusé »,
 * puis réapplication immédiate du choix déjà enregistré (visiteur qui revient).
 */
export const CONSENT_DEFAULT_SCRIPT =
  "(function(){window.dataLayer=window.dataLayer||[];" +
  "function gtag(){dataLayer.push(arguments);}window.gtag=window.gtag||gtag;" +
  "gtag('consent','default',{ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied'," +
  "analytics_storage:'denied',functionality_storage:'granted',security_storage:'granted',wait_for_update:500});" +
  "gtag('set','ads_data_redaction',true);gtag('set','url_passthrough',true);" +
  "try{var c=JSON.parse(localStorage.getItem('" + STORAGE_KEY + "'));" +
  "if(c&&c.v===" + CONSENT_VERSION + "&&Date.now()-c.ts<=" + CONSENT_MAX_AGE_MS + "){" +
  "var a=c.ads?'granted':'denied';" +
  "gtag('consent','update',{ad_storage:a,ad_user_data:a,ad_personalization:a," +
  "analytics_storage:c.analytics?'granted':'denied'});}}catch(e){}})();";
