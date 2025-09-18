# Système d'Images par Ville

## Vue d'ensemble

Le système d'images par ville permet d'afficher automatiquement des images spécifiques à chaque ville sur les pages de service. Les images proviennent d'Unsplash et sont configurées pour chaque ville couverte par le service.

## Architecture

### 1. Service d'Images (`src/lib/imageService.ts`)

Le service central gère toutes les images par ville :

```typescript
interface CityImage {
  hero: string;        // Image principale pour le hero
  gallery: string[];   // Galerie d'images
  landmarks: string[]; // Images de monuments/points d'intérêt
  description: string; // Description de la ville
}
```

### 2. Configuration des Villes

Actuellement configurées :
- **Montpellier** : Images urbaines modernes
- **Sète** : Images portuaires et maritimes
- **Béziers** : Images historiques et viticoles
- **Nîmes** : Images romaines et historiques
- **Perpignan** : Images catalanes et montagnardes

### 3. Composants Réutilisables

#### CityHero (`src/components/CityHero.tsx`)
- Affiche la section hero avec image de fond
- Adapte automatiquement le titre et la description selon la ville
- Inclut le bouton d'appel

#### CityGallery (`src/components/CityGallery.tsx`)
- Affiche une galerie d'images de la ville
- Effets hover et animations
- Responsive design

## Utilisation

### Dans les Pages de Service

```typescript
import CityHero from "../components/CityHero";
import CityGallery from "../components/CityGallery";

const ServiceDiogene = () => {
  const location = useLocation();
  const cityName = extractCityName(location.pathname);
  
  return (
    <>
      <CityHero
        cityName={cityName}
        pathname={location.pathname}
        title="Nettoyage Syndrome de Diogène"
        description={`Description adaptée à ${cityName}`}
      />
      
      <CityGallery
        cityName={cityName}
        pathname={location.pathname}
      />
    </>
  );
};
```

### Extraction Automatique de la Ville

Le système extrait automatiquement la ville depuis l'URL :
- `/nettoyage-syndrome-diogene-montpellier` → Montpellier
- `/nettoyage-syndrome-diogene-sete` → Sète
- `/debarras-gros-volumes-beziers` → Béziers

## Pages Statiques

### Génération Automatique

Le générateur de pages statiques (`scripts/generate-static-pages.js`) :
1. Détecte automatiquement la ville depuis l'URL
2. Utilise les images appropriées dans les métadonnées Open Graph
3. Génère des pages SEO optimisées avec images spécifiques

### Métadonnées SEO

Chaque page statique inclut :
- Image Open Graph spécifique à la ville
- Image Twitter Card adaptée
- Alt text contextuel
- Preload des images pour les performances

## Ajout de Nouvelles Villes

### 1. Ajouter les Images

Dans `src/lib/imageService.ts` :

```typescript
const cityImages: Record<string, CityImage> = {
  // ... villes existantes
  nouvelleVille: {
    hero: "https://images.unsplash.com/photo-XXXXX?w=1200&h=630&fit=crop&crop=center",
    gallery: [
      "https://images.unsplash.com/photo-XXXXX?w=800&h=600&fit=crop&crop=center",
      // ... autres images
    ],
    landmarks: [
      "https://images.unsplash.com/photo-XXXXX?w=400&h=300&fit=crop&crop=center",
      // ... autres images
    ],
    description: "Description de la nouvelle ville"
  }
};
```

### 2. Ajouter la Configuration de Page

Dans `scripts/generate-static-pages.js` :

```javascript
const staticPages = [
  // ... pages existantes
  {
    route: '/nettoyage-syndrome-diogene-nouvelleVille',
    title: 'Nettoyage Syndrome de Diogène NouvelleVille | SOS Nettoyage Diogène',
    description: 'Description adaptée à NouvelleVille...',
    keywords: 'mots-clés avec nouvelleVille...',
    content: 'ServiceDiogene',
    city: 'nouvelleVille'
  }
];
```

### 3. Mettre à Jour la Logique d'Extraction

Dans les composants de page :

```typescript
const cityName = location.pathname.includes('montpellier') ? 'Montpellier' :
                 location.pathname.includes('sete') ? 'Sète' :
                 location.pathname.includes('nouvelleVille') ? 'NouvelleVille' :
                 // ... autres villes
                 'Montpellier';
```

## Sources d'Images

### Unsplash
- Images haute qualité et libres de droits
- API gratuite avec limitations raisonnables
- Images optimisées pour le web

### Alternatives Possibles
- **Pexels** : Alternative gratuite à Unsplash
- **Pixabay** : Images libres de droits
- **Images locales** : Stockage local pour plus de contrôle

## Optimisations

### Performance
- Lazy loading des images de galerie
- Preload des images hero
- Compression et redimensionnement automatiques via Unsplash

### SEO
- Alt text descriptif pour chaque image
- Métadonnées Open Graph optimisées
- Images structurées pour les moteurs de recherche

### Accessibilité
- Alt text approprié
- Contraste respecté
- Navigation au clavier

## Maintenance

### Mise à Jour des Images
1. Modifier les URLs dans `imageService.ts`
2. Régénérer les pages statiques : `npm run build`
3. Tester sur toutes les pages concernées

### Monitoring
- Vérifier que les images se chargent correctement
- Surveiller les performances de chargement
- Tester la responsivité sur différents appareils

## Exemples d'URLs d'Images Unsplash

```typescript
// Format de base
"https://images.unsplash.com/photo-XXXXX?w=WIDTH&h=HEIGHT&fit=crop&crop=center"

// Exemples
"https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1200&h=630&fit=crop&crop=center" // Hero
"https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop&crop=center"  // Gallery
"https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop&crop=center"  // Landmarks
```

## Commandes Utiles

```bash
# Construire et générer les pages statiques
npm run build

# Générer uniquement les pages statiques
node scripts/generate-static-pages.js

# Démarrer le serveur de développement
npm run dev
```
