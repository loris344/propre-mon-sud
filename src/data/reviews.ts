/**
 * Avis Google RÉELS, recopiés depuis la fiche Google Business (prénom seul).
 * Affichés sur la page d'accueil (CustomerReviews) et les landing pages
 * (LandingReviews).
 *
 * ⚠️ Ne JAMAIS inventer, réécrire ni ajouter un avis absent de la fiche Google
 * (pratique commerciale trompeuse, art. L121-4 Code conso), ni afficher l'avis
 * d'un membre de l'équipe. Pour mettre à jour : recopier depuis la fiche,
 * puis ajuster GOOGLE_RATING / GOOGLE_REVIEW_COUNT.
 */
export const GOOGLE_REVIEWS_URL = "https://www.google.com/maps?cid=17374493770164689124";
export const GOOGLE_RATING = 5.0;
export const GOOGLE_REVIEW_COUNT = 10;

export interface Review {
  id: number;
  name: string;
  rating: number;
  /** Mois de la visite, tel qu'affiché par Google */
  date: string;
  text: string;
}

export const REVIEWS: Review[] = [
  {
    id: 1,
    name: "Julien",
    rating: 5,
    date: "Août 2026",
    text: "Excellent service. Bon relationnel client. Nous avons solicité leur service pour le nettoyage complet d'une maison et nous en sommes très satisfait.",
  },
  {
    id: 2,
    name: "Rg",
    rating: 5,
    date: "Juin 2026",
    text: "Service au top sur Marseille pour un gros débarras de volumes et d'encombrants. Le résultat avant/après est impressionnant, tout a été vidé et nettoyé en un …",
  },
  {
    id: 3,
    name: "Françoise",
    rating: 5,
    date: "Mai 2026",
    text: "La réponse à la demande d'intervention et l'intervention elle-même sont rapides et efficaces.",
  },
  {
    id: 4,
    name: "Emmanuelle",
    rating: 5,
    date: "Mai 2026",
    text: "Travail sérieux et responsable effectué dans le respect du délai et du contrat établi. Échange fluide avec l'entreprise qui est à l'écoute des contraintes et particularités de la mission à effectuer.",
  },
  {
    id: 5,
    name: "Amandine",
    rating: 5,
    date: "Mai 2026",
    text: "Entreprise de confiance, service efficace, je recommande !",
  },
];

export const formatGoogleRating = () =>
  `${GOOGLE_RATING.toFixed(1).replace(".", ",")}/5 · ${GOOGLE_REVIEW_COUNT} avis Google`;
