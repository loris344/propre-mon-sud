"use client";

import { useEffect } from "react";
import { CONSENT_CHANGE_EVENT, readConsent, type ConsentChoice } from "@/lib/consent";

/**
 * Initialise PostHog après le rendu initial (déféré pour ne pas pénaliser le
 * chargement), UNIQUEMENT si le visiteur a accepté la mesure d'audience
 * (bandeau cookies, voir lib/consent.ts). Un refus ultérieur coupe la collecte.
 */
export default function Analytics() {
  useEffect(() => {
    let started = false;

    const startPostHog = () => {
      import("posthog-js").then(({ default: posthog }) => {
        if (started) {
          posthog.opt_in_capturing();
          return;
        }
        started = true;
        posthog.init("phc_yfy5hw92dKEGdcfSC98cTGzNK8nxgJvwunnLFTSznXNc", {
          api_host: "https://eu.i.posthog.com",
          loaded: (ph) => {
            // Un refus précédent est mémorisé par PostHog : le lever si le
            // visiteur a depuis accepté.
            if (ph.has_opted_out_capturing()) ph.opt_in_capturing();
            ph.capture("$pageview");
          },
        });
      });
    };

    const schedulePostHog = () => {
      if (typeof window !== "undefined" && "requestIdleCallback" in window) {
        (window as Window & typeof globalThis).requestIdleCallback(startPostHog);
      } else {
        setTimeout(startPostHog, 1000);
      }
    };

    if (readConsent()?.analytics) schedulePostHog();

    const onConsentChange = (e: Event) => {
      const { analytics } = (e as CustomEvent<ConsentChoice>).detail;
      if (analytics) schedulePostHog();
      else if (started) import("posthog-js").then(({ default: posthog }) => posthog.opt_out_capturing());
    };
    window.addEventListener(CONSENT_CHANGE_EVENT, onConsentChange);
    return () => window.removeEventListener(CONSENT_CHANGE_EVENT, onConsentChange);
  }, []);

  return null;
}
