/**
 * Avis clients affichés sur la page d'accueil.
 * Pour ajouter / modifier un avis, édite simplement ce fichier.
 */
export interface Review {
  id: number;
  name: string;
  location: string;
  rating: number;
  date: string;
  text: string;
  service: string;
}

export const REVIEWS: Review[] = [
  {
    id: 1,
    name: "Marie L.",
    location: "Montpellier",
    rating: 5,
    date: "2024-11-15",
    text: "Service exceptionnel ! Équipe très professionnelle et discrète. Intervention rapide et efficace. Je recommande vivement.",
    service: "Nettoyage Syndrome de Diogène",
  },
  {
    id: 2,
    name: "Jean-Pierre M.",
    location: "Sète",
    rating: 5,
    date: "2024-08-22",
    text: "Très satisfait du service. Respect total de la situation et intervention dans les délais. Prix correct pour la qualité.",
    service: "Débarras Gros Volumes",
  },
  {
    id: 3,
    name: "Michel R.",
    location: "Nîmes",
    rating: 5,
    date: "2024-03-10",
    text: "Excellent service ! L'équipe a su comprendre notre situation et nous accompagner avec bienveillance. Le résultat dépasse nos attentes.",
    service: "Nettoyage Syndrome de Diogène",
  },
  {
    id: 4,
    name: "Catherine B.",
    location: "Perpignan",
    rating: 5,
    date: "2023-09-18",
    text: "Service professionnel et humain. L'équipe a su gérer une situation complexe avec beaucoup de délicatesse. Je recommande sans hésitation.",
    service: "Débarras Gros Volumes",
  },
  {
    id: 5,
    name: "Alain T.",
    location: "Toulouse",
    rating: 5,
    date: "2023-05-14",
    text: "Très bon service, équipe compétente et discrète. Le nettoyage a été fait dans les règles de l'art. Merci pour votre professionnalisme.",
    service: "Désinfection Insalubrité",
  },
];
