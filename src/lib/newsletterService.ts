/**
 * Service pour gérer les inscriptions à la newsletter via Formspree
 */

const FORMSPREE_NEWSLETTER_ENDPOINT = 'https://formspree.io/f/xandgpjv';

/**
 * Enregistre un email dans la newsletter via Formspree
 */
export const subscribeToNewsletter = async (email: string): Promise<boolean> => {
  try {
    if (!email || !isValidEmail(email)) {
      throw new Error('Email invalide');
    }

    const response = await fetch(FORMSPREE_NEWSLETTER_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email,
        message: `Nouvelle inscription newsletter : ${email}`,
        _subject: `Newsletter - Nouvelle inscription : ${email}`,
        _format: 'plain',
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    console.log('✅ Inscription newsletter envoyée via Formspree');
    return true;
  } catch (error) {
    console.error('Erreur lors de l\'inscription à la newsletter:', error);
    return false;
  }
};

const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

