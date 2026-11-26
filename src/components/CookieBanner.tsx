"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  OPEN_PREFERENCES_EVENT,
  readConsent,
  saveConsent,
  type ConsentChoice,
} from "@/lib/consent";

/**
 * Bandeau cookies (CNIL) : « Tout refuser » aussi visible que « Tout accepter »,
 * réglage par finalité, réouvrable depuis le lien « Gérer les cookies » du Footer.
 * La logique (stockage + Consent Mode v2) est dans lib/consent.ts.
 */
export default function CookieBanner() {
  const [open, setOpen] = useState(false);
  const [details, setDetails] = useState(false);
  const [choice, setChoice] = useState<ConsentChoice>({ analytics: false, ads: false });

  useEffect(() => {
    const stored = readConsent();
    if (stored) setChoice(stored);
    else setOpen(true);

    const reopen = () => {
      setChoice(readConsent() ?? { analytics: false, ads: false });
      setDetails(true);
      setOpen(true);
    };
    window.addEventListener(OPEN_PREFERENCES_EVENT, reopen);
    return () => window.removeEventListener(OPEN_PREFERENCES_EVENT, reopen);
  }, []);

  if (!open) return null;

  const decide = (c: ConsentChoice) => {
    saveConsent(c);
    setChoice(c);
    setOpen(false);
    setDetails(false);
  };

  return (
    <div
      role="dialog"
      aria-modal="false"
      aria-labelledby="cookie-banner-title"
      className="fixed inset-x-0 bottom-0 z-[100] p-3 sm:p-4"
    >
      <div className="mx-auto max-w-3xl rounded-lg border bg-background p-4 text-sm text-muted-foreground shadow-2xl sm:p-5">
        <p id="cookie-banner-title" className="text-base font-semibold text-foreground">
          Cookies et confidentialité
        </p>
        <p className="mt-2">
          Avec votre accord, nous utilisons des cookies pour mesurer l'audience du site et
          mesurer l'efficacité de nos publicités (Google, Meta). Vous pouvez changer d'avis à
          tout moment via « Gérer les cookies » en bas de page.{" "}
          <Link href="/politique-confidentialite/" className="underline hover:text-foreground">
            En savoir plus
          </Link>
        </p>

        {details && (
          <div className="mt-4 space-y-3 border-t pt-4">
            <ConsentToggle
              label="Mesure d'audience"
              description="Google Analytics, PostHog : statistiques de visite pour améliorer le site."
              checked={choice.analytics}
              onChange={(v) => setChoice({ ...choice, analytics: v })}
            />
            <ConsentToggle
              label="Publicité"
              description="Google Ads, Meta (Facebook) : mesure des demandes de devis issues de nos annonces."
              checked={choice.ads}
              onChange={(v) => setChoice({ ...choice, ads: v })}
            />
          </div>
        )}

        <div className="mt-4 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end">
          {details ? (
            <Button variant="outline" onClick={() => decide(choice)}>
              Enregistrer mes choix
            </Button>
          ) : (
            <Button variant="outline" onClick={() => setDetails(true)}>
              Personnaliser
            </Button>
          )}
          <Button onClick={() => decide({ analytics: false, ads: false })}>Tout refuser</Button>
          <Button onClick={() => decide({ analytics: true, ads: true })}>Tout accepter</Button>
        </div>
      </div>
    </div>
  );
}

function ConsentToggle({
  label,
  description,
  checked,
  onChange,
}: {
  label: string;
  description: string;
  checked: boolean;
  onChange: (value: boolean) => void;
}) {
  return (
    <label className="flex cursor-pointer items-start justify-between gap-4">
      <span>
        <span className="block font-medium text-foreground">{label}</span>
        <span className="block">{description}</span>
      </span>
      <input
        type="checkbox"
        className="mt-1 h-5 w-5 shrink-0 accent-primary"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
      />
    </label>
  );
}
