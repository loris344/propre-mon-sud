"use client";

import Script from "next/script";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

/**
 * Suivi des appels Google Ads avec NUMÉRO DE TRANSFERT (website call conversions).
 *
 * Google remplace dynamiquement le numéro affiché sur le site par un numéro de
 * transfert Google : les appels réellement passés (et de durée suffisante) sont
 * comptés comme conversions, avec attribution au mot-clé / annonce / campagne.
 *
 * ⚠️ À RENSEIGNER depuis Google Ads (action de conversion
 *    « Appels à un numéro de téléphone figurant sur votre site Web ») :
 *    l'extrait fourni ressemble à
 *      gtag('config', 'AW-XXXXXXXXX/AbCd-EfGhIjk12_34', {'phone_conversion_number': '07 67 13 54 58'});
 *    -> AW_ID      = la partie 'AW-XXXXXXXXX'
 *    -> CALL_LABEL = la partie après le '/'
 *
 * Tant que ces 2 valeurs ne sont pas remplies, le composant ne rend RIEN
 * (aucun script chargé sur le site en production).
 */
const AW_ID: string = "AW-17579670391"; // ← ID de conversion
const CALL_LABEL: string = "Y7ihCN245cAcEPf20b5B"; // ← libellé d'appel (la partie après le /)

// Doit correspondre EXACTEMENT au numéro affiché sur le site pour que gtag
// le retrouve et le remplace (Header, Footer, Hero, Contact, landings…).
const PHONE_DISPLAY = "07 67 13 54 58";

const CONFIGURED = !AW_ID.includes("X") && CALL_LABEL !== "REMPLACE_MOI";

export default function CallTracking() {
  const pathname = usePathname();

  // Le remplacement gtag ne s'exécute qu'au chargement initial. En navigation
  // client (SPA Next.js), le corps des pages re-render : on redéclenche la
  // config à chaque changement de route pour re-swapper les numéros du contenu.
  // (Le Header/Footer, dans le layout persistant, restent swappés une seule fois.)
  useEffect(() => {
    if (!CONFIGURED || typeof window.gtag !== "function") return;
    window.gtag("config", `${AW_ID}/${CALL_LABEL}`, {
      phone_conversion_number: PHONE_DISPLAY,
    });
  }, [pathname]);

  if (!CONFIGURED) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${AW_ID}`}
        strategy="afterInteractive"
      />
      <Script id="gtag-call" strategy="afterInteractive">
        {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${AW_ID}');gtag('config','${AW_ID}/${CALL_LABEL}',{phone_conversion_number:'${PHONE_DISPLAY}'});`}
      </Script>
    </>
  );
}
