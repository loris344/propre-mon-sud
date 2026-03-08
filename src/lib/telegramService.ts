/**
 * Service pour envoyer des notifications Telegram
 * 
 * ⚠️ IMPORTANT : Le token Telegram ne doit PAS être stocké côté client.
 * Pour sécuriser ce service, il faut activer Lovable Cloud et créer
 * une edge function qui enverra les messages Telegram côté serveur.
 * 
 * En attendant, les notifications Telegram sont désactivées.
 */

/**
 * Envoie un message à votre bot Telegram
 * @param message - Le message à envoyer
 * @returns Promise<boolean> - true si l'envoi a réussi, false sinon
 */
export const sendTelegramMessage = async (message: string): Promise<boolean> => {
  console.warn('Telegram notifications are disabled. Enable Lovable Cloud to use server-side Telegram notifications.');
  return false;
};

/**
 * Envoie une notification d'inscription à la newsletter
 */
export const sendNewsletterNotification = async (email: string): Promise<boolean> => {
  return await sendTelegramMessage(`Newsletter: ${email}`);
};

/**
 * Envoie une notification de demande de devis
 */
export const sendContactNotification = async (formData: {
  firstName: string;
  phone: string;
  email: string;
  city: string;
  description: string;
}): Promise<boolean> => {
  return await sendTelegramMessage(`Contact: ${formData.firstName}`);
};
