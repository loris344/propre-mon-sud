# SOS Nettoyage Diogène - Site Web Professionnel

Site web professionnel pour SOS Nettoyage Diogène, société spécialisée dans le nettoyage et débarras syndrome de Diogène à Montpellier et dans toute la région Occitanie.

## 🌐 Site Web

**URL de production** : https://sosnettoyagediogene.fr

## 🚀 Fonctionnalités

- **Site responsive** optimisé pour mobile et desktop
- **SEO optimisé** avec meta tags, structured data et sitemap
- **Google Analytics** intégré pour le suivi des performances
- **Pages de services** spécialisées :
  - Nettoyage Syndrome de Diogène
  - Débarras Gros Volumes
  - Désinfection et Insalubrité
- **Formulaire de contact** avec validation
- **Performance optimisée** avec lazy loading et code splitting

## 🛠️ Technologies Utilisées

- **Frontend** : React 18 + TypeScript
- **Build Tool** : Vite
- **Styling** : Tailwind CSS + shadcn/ui
- **Routing** : React Router DOM
- **SEO** : React Helmet Async
- **Analytics** : Google Tag Manager
- **Déploiement** : GitHub Pages

## 📦 Installation et Développement

### Prérequis
- Node.js (version 18 ou supérieure)
- npm ou yarn

### Installation

```bash
# Cloner le repository
git clone https://github.com/loris344/propre-mon-sud.git

# Naviguer vers le dossier
cd propre-mon-sud

# Installer les dépendances
npm install

# Démarrer le serveur de développement
npm run dev
```

### Scripts Disponibles

```bash
# Développement
npm run dev          # Serveur de développement (port 8080)

# Build
npm run build        # Build de production
npm run build:dev    # Build de développement

# Déploiement
npm run deploy       # Déploiement sur GitHub Pages
npm run deploy:build # Build + déploiement

# Utilitaires
npm run lint         # Linter ESLint
npm run preview      # Aperçu du build
npm run sitemap      # Génération du sitemap
```

## 📁 Structure du Projet

```
src/
├── components/          # Composants React réutilisables
│   ├── ui/             # Composants UI (shadcn/ui)
│   ├── Header.tsx      # En-tête du site
│   ├── Hero.tsx        # Section héro
│   ├── Services.tsx    # Section services
│   ├── Contact.tsx     # Formulaire de contact
│   └── SEOHead.tsx     # Gestion SEO dynamique
├── pages/              # Pages de l'application
│   ├── Index.tsx       # Page d'accueil
│   ├── ServiceDiogene.tsx
│   ├── ServiceDebarras.tsx
│   └── ServiceDesinfection.tsx
├── hooks/              # Hooks React personnalisés
├── lib/                # Utilitaires et helpers
└── assets/             # Images et ressources statiques
```

## 🎯 SEO et Performance

- **Meta tags** optimisés pour chaque page
- **Structured data** (JSON-LD) pour les moteurs de recherche
- **Sitemap XML** généré automatiquement
- **Robots.txt** configuré
- **Core Web Vitals** optimisés
- **Lazy loading** des images
- **Code splitting** pour un chargement rapide

## 📊 Analytics

- **Google Tag Manager** intégré (ID: G-VDZL4FT7QQ)
- **Suivi des événements** personnalisés
- **Métriques de performance** automatiques

## 🚀 Déploiement

Le site est déployé automatiquement sur GitHub Pages à chaque push sur la branche `main`.

### Déploiement Manuel

```bash
npm run deploy:build
```

## 📞 Contact

- **Téléphone** : 07 67 13 54 58
- **Email** : contact@nettoyage-diogene-montpellier.fr
- **Site** : https://sosnettoyagediogene.fr

## 📄 Licence

Ce projet est privé et propriété de SOS Nettoyage Diogène.

---

**Développé avec ❤️ pour SOS Nettoyage Diogène**