/**
 * Service pour envoyer des notifications Telegram
 */

// Configuration Telegram
const TELEGRAM_TOKEN = "8415965887:AAHalznyaxrDz8c9jeCVeiueyNBJ4qEqlLI";
const CHAT_ID = "969261894";

/**
 * Envoie un message à votre bot Telegram
 * @param message - Le message à envoyer
 * @returns Promise<boolean> - true si l'envoi a réussi, false sinon
 */
export const sendTelegramMessage = async (message: string): Promise<boolean> => {
  try {
    const telegramUrl = `https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`;
    
    const response = await fetch(telegramUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text: message,
        parse_mode: 'HTML'
      })
    });

    if (!response.ok) {
      throw new Error(`Telegram API error: ${response.status}`);
    }

    console.log('Message Telegram envoyé avec succès');
    return true;

  } catch (error) {
    console.error('Erreur lors de l\'envoi du message Telegram:', error);
    return false;
  }
};

/**
 * Envoie une notification d'inscription à la newsletter
 * @param email - L'email de la personne qui s'inscrit
 * @returns Promise<boolean> - true si l'envoi a réussi, false sinon
 */
export const sendNewsletterNotification = async (email: string): Promise<boolean> => {
  const message = `📧 <b>Nouvelle inscription à la newsletter</b>

👤 Email: <code>${email}</code>
🕐 Date: ${new Date().toLocaleString('fr-FR')}
🌐 Site: SOS Nettoyage Diogène

Une nouvelle personne s'est inscrite à votre newsletter !`;

  return await sendTelegramMessage(message);
};

/**
 * Envoie une notification de demande de devis
 * @param formData - Les données du formulaire
 * @returns Promise<boolean> - true si l'envoi a réussi, false sinon
 */
export const sendContactNotification = async (formData: {
  firstName: string;
  phone: string;
  email: string;
  city: string;
  description: string;
}): Promise<boolean> => {
  const message = `📞 <b>Nouvelle demande de devis</b>

👤 Prénom: <code>${formData.firstName}</code>
📧 Email: <code>${formData.email}</code>
📱 Téléphone: <code>${formData.phone}</code>
🏙️ Ville: <code>${formData.city}</code>

📝 Description:
${formData.description}

🕐 Date: ${new Date().toLocaleString('fr-FR')}
🌐 Site: SOS Nettoyage Diogène`;

  return await sendTelegramMessage(message);
};

