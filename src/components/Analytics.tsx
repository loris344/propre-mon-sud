"use client";

import { useEffect } from "react";

/**
 * Initialise PostHog après le rendu initial (déféré pour ne pas pénaliser le
 * chargement). Reprend la logique de l'ancien main.tsx.
 */
export default function Analytics() {
  useEffect(() => {
    const schedulePostHog = () => {
      import("posthog-js").then(({ default: posthog }) => {
        posthog.init("phc_yfy5hw92dKEGdcfSC98cTGzNK8nxgJvwunnLFTSznXNc", {
          api_host: "https://eu.i.posthog.com",
          loaded: (ph) => ph.capture("$pageview"),
        });
      });
    };

    if (typeof window !== "undefined" && "requestIdleCallback" in window) {
      (window as Window & typeof globalThis).requestIdleCallback(schedulePostHog);
    } else {
      setTimeout(schedulePostHog, 1000);
    }
  }, []);

  return null;
}
