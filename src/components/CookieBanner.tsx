"use client";

import Script from "next/script";
import { TAC_ADS, TAC_ANALYTICS, TAC_COOKIE, applyConsent } from "@/lib/consent";

/**
 * Bandeau cookies tarteaucitron.js (open source, CNIL) chargé depuis jsDelivr.
 * Les 2 services déclarés ici ne chargent aucun script : GTM s'en charge déjà.
 * Ils ne font que transmettre le choix à lib/consent.ts (Consent Mode v2,
 * Meta Pixel, PostHog). Réouverture : lien « Gérer les cookies » du Footer.
 */
const TAC_VERSION = "1.37.0";
const TAC_CDN = `https://cdn.jsdelivr.net/npm/tarteaucitronjs@${TAC_VERSION}/`;

function initTarteaucitron() {
  const tac = window.tarteaucitron;
  if (!tac) return;

  tac.init({
    privacyUrl: "/politique-confidentialite/",
    readmoreLink: "/politique-confidentialite/",
    cookieName: TAC_COOKIE,
    hashtag: "#cookies",
    orientation: "bottom",
    highPrivacy: true,
    DenyAllCta: true,
    AcceptAllCta: true,
    mandatory: true,
    mandatoryCta: false,
    showIcon: false,
    showAlertSmall: false,
    removeCredit: true,
    moreInfoLink: true,
    groupServices: false,
    // Consent Mode géré par lib/consent.ts (services maison ci-dessous).
    googleConsentMode: false,
    bingConsentMode: false,
    pianoConsentMode: false,
    piwikConsentMode: false,
  });

  tac.services[TAC_ANALYTICS] = {
    key: TAC_ANALYTICS,
    type: "analytic",
    name: "Mesure d'audience (Google Analytics, PostHog)",
    uri: "https://policies.google.com/privacy",
    needConsent: true,
    cookies: ["_ga", "_gid", "_gat"],
    js: () => applyConsent({ analytics: true }),
    fallback: () => applyConsent({ analytics: false }),
  };
  tac.services[TAC_ADS] = {
    key: TAC_ADS,
    type: "ads",
    name: "Publicité (Google Ads, Meta / Facebook)",
    uri: "https://policies.google.com/technologies/ads",
    needConsent: true,
    cookies: ["_gcl_au", "_fbp", "_fbc"],
    js: () => applyConsent({ ads: true }),
    fallback: () => applyConsent({ ads: false }),
  };
  (tac.job = tac.job || []).push(TAC_ANALYTICS, TAC_ADS);

  // Retrait du consentement : tarteaucitron recharge la page à la fermeture,
  // mais on coupe tout de suite (PostHog, Meta Pixel, Consent Mode).
  document.addEventListener(`${TAC_ANALYTICS}_disallowed`, () => applyConsent({ analytics: false }));
  document.addEventListener(`${TAC_ADS}_disallowed`, () => applyConsent({ ads: false }));
}

export default function CookieBanner() {
  return (
    <>
      <Script id="tac-config" strategy="afterInteractive">
        {`window.tarteaucitronForceCDN='${TAC_CDN}';window.tarteaucitronUseMin=true;window.tarteaucitronForceLanguage='fr';window.tarteaucitronForceExpire=183;`}
      </Script>
      <Script
        src={`${TAC_CDN}tarteaucitron.min.js`}
        strategy="afterInteractive"
        onLoad={initTarteaucitron}
      />
    </>
  );
}
