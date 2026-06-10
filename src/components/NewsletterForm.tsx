"use client";

import { useState } from "react";
import { subscribeToNewsletter } from "@/lib/newsletterService";
import { toast } from "sonner";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [isSubscribing, setIsSubscribing] = useState(false);

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email.trim()) {
      toast.error("Veuillez saisir votre adresse email");
      return;
    }

    setIsSubscribing(true);

    try {
      const success = await subscribeToNewsletter(email.trim());
      if (success) {
        toast.success("Inscription réussie ! Vous recevrez nos actualités par email.");
        setEmail("");
      } else {
        toast.error("Erreur lors de l'inscription. Veuillez réessayer.");
      }
    } catch (error) {
      console.error("Erreur newsletter:", error);
      toast.error("Erreur lors de l'inscription. Veuillez réessayer.");
    } finally {
      setIsSubscribing(false);
    }
  };

  return (
    <form
      onSubmit={handleNewsletterSubmit}
      className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
    >
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Votre adresse email"
        disabled={isSubscribing}
        className="flex-1 px-4 py-2 rounded-md border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary disabled:opacity-50"
        required
      />
      <button
        type="submit"
        disabled={isSubscribing}
        className="px-6 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubscribing ? "Inscription..." : "S'abonner"}
      </button>
    </form>
  );
}
