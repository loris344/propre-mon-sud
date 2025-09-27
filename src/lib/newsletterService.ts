/**
 * Service pour gérer les inscriptions à la newsletter
 */
import { sendNewsletterNotification } from './telegramService';

/**
 * Interface pour les données d'inscription à la newsletter
 */
export interface NewsletterData {
  email: string;
}

/**
 * Enregistre un email dans la newsletter et envoie une notification Telegram
 * @param email - L'email à enregistrer
 * @returns Promise<boolean> - true si l'inscription a réussi, false sinon
 */
export const subscribeToNewsletter = async (email: string): Promise<boolean> => {
  try {
    // Validation de l'email
    if (!email || !isValidEmail(email)) {
      throw new Error('Email invalide');
    }

    // Ici vous pourriez sauvegarder l'email dans une base de données
    // Pour l'instant, on simule juste l'enregistrement
    console.log('Email enregistré dans la newsletter:', email);

    // Envoi de la notification Telegram
    const telegramSent = await sendNewsletterNotification(email);
    
    if (!telegramSent) {
      console.warn('Email enregistré mais notification Telegram échouée');
    }

    return true;

  } catch (error) {
    console.error('Erreur lors de l\'inscription à la newsletter:', error);
    return false;
  }
};

/**
 * Valide le format d'un email
 * @param email - L'email à valider
 * @returns boolean - true si l'email est valide, false sinon
 */
const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Vérifie si un email est déjà inscrit (simulation)
 * @param email - L'email à vérifier
 * @returns Promise<boolean> - true si l'email est déjà inscrit, false sinon
 */
export const isEmailSubscribed = async (email: string): Promise<boolean> => {
  // Simulation - dans un vrai projet, vous vérifieriez en base de données
  // ou dans votre service d'email marketing (Mailchimp, Sendinblue, etc.)
  return false;
};

