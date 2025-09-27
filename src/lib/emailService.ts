import { sendContactNotification } from './telegramService';

/**
 * Interface pour les données du formulaire de contact
 */
export interface ContactFormData {
  firstName: string;
  phone: string;
  email: string;
  city: string;
  description: string;
}

/**
 * Envoie un email via Formspree avec les données du formulaire de contact
 * @param formData - Les données du formulaire de contact
 * @returns Promise<boolean> - true si l'envoi a réussi, false sinon
 */
export const sendContactEmail = async (formData: ContactFormData): Promise<boolean> => {
  try {
    // URL Formspree - Endpoint configuré
    const formspreeEndpoint = 'https://formspree.io/f/xandgpjv';
    
    const response = await fetch(formspreeEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        // Champs principaux pour Formspree
        email: formData.email || 'Non renseigné',
        message: `
NOUVELLE DEMANDE DE DEVIS - SOS NETTOYAGE DIOGÈNE

Informations de contact :
• Prénom : ${formData.firstName}
• Téléphone : ${formData.phone}
• Email : ${formData.email || 'Non renseigné'}
• Ville d'intervention : ${formData.city || 'Non renseignée'}

Description de la situation :
${formData.description || 'Aucune description fournie'}

---
Envoyé le ${new Date().toLocaleString('fr-FR')} depuis ${window.location.href}
        `,
        // Champs personnalisés Formspree
        _subject: `Nouvelle demande de devis - ${formData.firstName}`,
        _replyto: formData.email || 'contact@sosnettoyagediogene.fr',
        // Métadonnées
        _format: 'plain',
        _next: window.location.href + '?success=true'
      })
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    // Envoi de la notification Telegram
    try {
      await sendContactNotification(formData);
    } catch (telegramError) {
      console.warn('Email envoyé mais notification Telegram échouée:', telegramError);
    }

    console.log('Email envoyé avec succès via Formspree');
    return true;

  } catch (error) {
    console.error('Erreur lors de l\'envoi de l\'email:', error);
    return false;
  }
};

