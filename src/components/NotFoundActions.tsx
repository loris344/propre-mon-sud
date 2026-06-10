"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft, Phone } from "lucide-react";

export default function NotFoundActions() {
  const router = useRouter();

  return (
    <>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button variant="hero" size="lg" onClick={() => router.push("/")} className="text-base px-8">
          <Home className="w-5 h-5" />
          Retour à l&apos;Accueil
        </Button>
        <Button variant="outline" size="lg" onClick={() => router.back()} className="text-base px-8">
          <ArrowLeft className="w-5 h-5" />
          Page Précédente
        </Button>
      </div>

      <div className="mt-12 p-6 bg-card rounded-xl border border-border/50">
        <h3 className="text-lg font-semibold text-foreground mb-3">Besoin d&apos;aide ?</h3>
        <p className="text-muted-foreground mb-4">
          Si vous cherchez nos services de nettoyage spécialisé, contactez-nous directement.
        </p>
        <Button
          variant="accent"
          size="lg"
          onClick={() => router.push("/#contact")}
          className="text-base px-8"
        >
          <Phone className="w-5 h-5" />
          Contactez-nous
        </Button>
      </div>
    </>
  );
}
