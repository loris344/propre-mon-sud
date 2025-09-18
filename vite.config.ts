import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  // Configuration pour GitHub Pages
  base: mode === "production" ? "/" : "/",
  
  server: {
    host: "::",
    port: 8080,
  },
  
  plugins: [react()],
  
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  
  // Configuration du build pour GitHub Pages
  build: {
    outDir: "dist",
    assetsDir: "assets",
    sourcemap: false,
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom"],
          ui: ["@radix-ui/react-slot", "@radix-ui/react-toast", "@radix-ui/react-tooltip"],
          router: ["react-router-dom"],
        },
      },
    },
    target: 'es2015',
    cssCodeSplit: false,
    chunkSizeWarningLimit: 1000,
    cssMinify: 'lightningcss',
  },
  
  // Configuration pour le preview
  preview: {
    port: 4173,
    host: true,
  },
}));
