"use client";

import { useRouter } from "next/navigation";

/** Encart d'appel à l'action affiché en fin d'article. */
export default function ArticleCTA() {
  const router = useRouter();

  return (
    <div className="bg-primary/5 rounded-lg p-6 border border-primary/20 not-prose mt-8">
      <h3 className="text-xl font-bold text-foreground mb-3">
        💡 Besoin d&apos;aide professionnelle ?
      </h3>
      <p className="text-muted-foreground mb-4">
        Si vous êtes confronté à une situation difficile, des professionnels
        spécialisés peuvent vous accompagner. SOS Nettoyage Diogène propose des
        interventions respectueuses et bienveillantes dans tout le Sud de la France.
      </p>
      <div className="flex flex-col sm:flex-row gap-3">
        <button
          onClick={() => router.push("/#contact")}
          className="bg-primary text-primary-foreground px-6 py-2 rounded-md hover:bg-primary/90 transition-colors font-medium"
        >
          Demander un devis
        </button>
        <a
          href="tel:0767135458"
          onClick={() => gtag_report_conversion()}
          className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition-colors font-medium text-center"
        >
          📞 07 67 13 54 58
        </a>
      </div>
    </div>
  );
}
