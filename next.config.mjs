/** @type {import('next').NextConfig} */
const nextConfig = {
  // Export 100% statique → dossier out/ (compatible GitHub Pages)
  output: "export",

  // GitHub Pages n'a pas d'optimiseur d'images : on sert les images telles quelles
  images: {
    unoptimized: true,
  },

  // Émet /route/index.html → URLs robustes sur GitHub Pages
  trailingSlash: true,

  // La vérification TypeScript est active (le code passe `tsc --noEmit`).
  // ESLint reste désactivé au build tant qu'aucune config eslint n'est définie.
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
