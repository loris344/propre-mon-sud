import type { Metadata } from "next";
import NotFoundActions from "@/components/NotFoundActions";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata("/404");

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20 flex items-center justify-center py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="mb-8">
            <div className="text-8xl sm:text-9xl font-bold text-primary/20 mb-4">404</div>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
          </div>

          <div className="mb-8 bg-card rounded-xl border border-border/50 p-6">
            <h1 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
              Page Introuvable
            </h1>
            <p className="text-muted-foreground text-lg">
              Désolé, la page que vous recherchez n&apos;existe pas ou a été déplacée.
            </p>
          </div>

          <NotFoundActions />
        </div>
      </div>
    </div>
  );
}
