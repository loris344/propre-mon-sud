#!/usr/bin/env node

/**
 * Script pour générer automatiquement le fichier llms.txt
 * Ce fichier aide les LLM (ChatGPT, Claude, Gemini) à mieux comprendre le contenu du site
 */

import fs from 'fs';
import path from 'path';

const siteUrl = 'https://sosnettoyagediogene.fr';
const outputPath = path.join(process.cwd(), 'public', 'llms.txt');

const llmsContent = `# SOS Nettoyage Diogène

> Société spécialisée dans le nettoyage et débarras syndrome de Diogène, insalubrité et gros volumes. Intervention discrète, professionnelle et respectueuse dans le Sud de la France. Disponible 7j/7 pour des interventions d'urgence.

## Services Principaux

- [Nettoyage Syndrome de Diogène](${siteUrl}/nettoyage-syndrome-diogene-montpellier) : Intervention spécialisée et respectueuse pour les situations d'accumulation compulsive avec respect et discrétion totale. Équipe formée aux techniques spécialisées et à l'accompagnement psychologique.

- [Débarras Gros Volumes](${siteUrl}/debarras-gros-volumes-montpellier) : Évacuation et tri de tous types d'objets, meubles et déchets en respectant l'environnement. Tri sélectif, recyclage maximal et évacuation complète.

- [Désinfection & Insalubrité](${siteUrl}/desinfection-insalubrite-montpellier) : Traitement des environnements insalubres avec des produits professionnels et techniques adaptées. Désinfection totale, traitement anti-nuisibles et remise en état.

## Informations de Contact

- **Téléphone** : 07 67 13 54 58
- **Email** : contact@sosnettoyagediogene.fr
- **Disponibilité** : 7j/7 de 8h00 à 20h00
- **Urgences** : Intervention rapide acceptée en soirée

## Zone d'Intervention

Intervention dans tout le Sud de la France :
- **Occitanie** : Montpellier, Sète, Béziers, Nîmes, Perpignan, Toulouse
- **PACA** : Marseille, Nice, Aix-en-Provence, Toulon, Avignon
- **Nouvelle-Aquitaine** : Bordeaux

## Avantages et Garanties

- **Discrétion totale** : Confidentialité et respect absolu de la vie privée
- **Équipe experte** : Professionnels formés et équipés
- **Disponibilité 7j/7** : Intervention rapide et flexible
- **Assurance complète** : Intervention sécurisée et assurée
- **Devis gratuit** : Évaluation gratuite et sans engagement

## Processus d'Intervention

1. **Évaluation bienveillante** : Visite gratuite et confidentielle pour évaluer la situation
2. **Plan personnalisé** : Établissement d'un plan d'intervention adapté
3. **Intervention respectueuse** : Tri minutieux et respect des objets personnels
4. **Nettoyage complet** : Désinfection et remise en état
5. **Suivi post-intervention** : Conseils pour maintenir un environnement sain

## Témoignages Clients

- **Note moyenne** : 4.7/5 (94 avis)
- **Satisfaction** : 98% de clients satisfaits
- **Recommandation** : 95% des clients nous recommandent

## Spécialisations

- Nettoyage extrême et situations complexes
- Accompagnement psychologique et bienveillant
- Respect de la dignité et de l'intimité
- Techniques spécialisées pour l'accumulation compulsive
- Équipement professionnel et produits adaptés
- Tri sélectif et respect de l'environnement

## Urgences

Pour toute situation nécessitant une intervention immédiate, contactez-nous au **07 67 13 54 58**. Nous intervenons rapidement dans tout le Sud de la France avec une équipe disponible 7j/7.

---

*SOS Nettoyage Diogène - Votre partenaire de confiance pour des interventions discrètes et professionnelles*`;

try {
  // Créer le dossier public s'il n'existe pas
  const publicDir = path.dirname(outputPath);
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  // Écrire le fichier llms.txt
  fs.writeFileSync(outputPath, llmsContent, 'utf8');
  
  console.log('✅ Fichier llms.txt généré avec succès');
  console.log(`📁 Emplacement: ${outputPath}`);
  console.log(`🌐 URL: ${siteUrl}/llms.txt`);
  
} catch (error) {
  console.error('❌ Erreur lors de la génération du fichier llms.txt:', error);
  process.exit(1);
}
