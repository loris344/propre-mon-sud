"use client";

import { useEffect } from "react";

/**
 * Au chargement (ou changement de hash), fait défiler en douceur vers la
 * section ciblée par l'ancre de l'URL (ex. /#services). Reprend le comportement
 * de l'ancien Index avec react-router.
 */
export default function HashScroll() {
  useEffect(() => {
    const scrollToHash = () => {
      const hash = window.location.hash;
      if (!hash) return;
      const element = document.getElementById(hash.substring(1));
      if (element) {
        setTimeout(() => element.scrollIntoView({ behavior: "smooth" }), 100);
      }
    };
    scrollToHash();
    window.addEventListener("hashchange", scrollToHash);
    return () => window.removeEventListener("hashchange", scrollToHash);
  }, []);

  return null;
}
