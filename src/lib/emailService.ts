export interface ContactFormData {
  firstName: string;
  phone: string;
  email: string;
  city: string;
  description: string;
}

// Solution avec Formspree (gratuit et simple)
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

    console.log('Email envoyé avec succès via Formspree');
    return true;

  } catch (error) {
    console.error('Erreur lors de l\'envoi de l\'email:', error);
    return false;
  }
};

// Alternative avec fetch vers un service d'email (si EmailJS ne convient pas)
export const sendContactEmailViaAPI = async (formData: ContactFormData): Promise<boolean> => {
  try {
    const response = await fetch('/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        to: 'loris@sosnettoyagediogene.fr',
        subject: `Nouvelle demande de devis - ${formData.firstName}`,
        html: `
          <h2>Nouvelle demande de devis</h2>
          <p><strong>Prénom:</strong> ${formData.firstName}</p>
          <p><strong>Téléphone:</strong> ${formData.phone}</p>
          <p><strong>Email:</strong> ${formData.email || 'Non renseigné'}</p>
          <p><strong>Ville d'intervention:</strong> ${formData.city || 'Non renseignée'}</p>
          <p><strong>Description:</strong></p>
          <p>${formData.description || 'Aucune description fournie'}</p>
          <hr>
          <p><small>Envoyé le ${new Date().toLocaleString('fr-FR')} depuis ${window.location.href}</small></p>
        `,
        text: `
Nouvelle demande de devis

Prénom: ${formData.firstName}
Téléphone: ${formData.phone}
Email: ${formData.email || 'Non renseigné'}
Ville d'intervention: ${formData.city || 'Non renseignée'}

Description:
${formData.description || 'Aucune description fournie'}

Envoyé le ${new Date().toLocaleString('fr-FR')} depuis ${window.location.href}
        `
      })
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return true;

  } catch (error) {
    console.error('Erreur lors de l\'envoi de l\'email via API:', error);
    return false;
  }
};
