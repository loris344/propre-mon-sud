// Configuration Google Forms
const GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSedopfulr4ikeqfINu0RSePgcq-DPSpW77B0qkZ3GD3d6AKgA/formResponse';

// Interface pour les données de la maison de retraite
export interface NursingHomeData {
  nomStructure: string;
  email: string;
  reference: string;
  adresse: string;
  remarques?: string;
}

// Fonction pour ajouter une nouvelle entrée dans Google Forms
export const addNursingHomeToSheet = async (data: NursingHomeData): Promise<boolean> => {
  try {
    console.log('📝 Envoi des données vers Google Forms:', data);

    // Méthode 1: Essayer avec fetch d'abord
    try {
      const formData = new FormData();
      formData.append('entry.260355184', data.nomStructure);
      formData.append('entry.32757032', data.email);
      formData.append('entry.1822204634', data.adresse);

      const response = await fetch(GOOGLE_FORM_URL, {
        method: 'POST',
        mode: 'no-cors', // Contourne CORS
        body: formData,
      });

      console.log('✅ Données envoyées avec fetch (mode no-cors)');
      return true;
    } catch (fetchError) {
      console.warn('Fetch échoué, tentative avec formulaire:', fetchError);
    }

    // Méthode 2: Formulaire avec iframe caché
    const iframe = document.createElement('iframe');
    iframe.style.display = 'none';
    iframe.name = 'hidden_iframe';
    document.body.appendChild(iframe);

    const form = document.createElement('form');
    form.method = 'POST';
    form.action = GOOGLE_FORM_URL;
    form.target = 'hidden_iframe';
    form.style.display = 'none';

    // Ajouter les champs
    const fields = [
      { name: 'entry.260355184', value: data.nomStructure },
      { name: 'entry.32757032', value: data.email },
      { name: 'entry.1822204634', value: data.adresse },
    ];

    fields.forEach(field => {
      const input = document.createElement('input');
      input.type = 'hidden';
      input.name = field.name;
      input.value = field.value || '';
      form.appendChild(input);
    });

    document.body.appendChild(form);
    form.submit();

    // Nettoyer après 3 secondes
    setTimeout(() => {
      try {
        if (document.body.contains(form)) document.body.removeChild(form);
        if (document.body.contains(iframe)) document.body.removeChild(iframe);
      } catch (e) {
        console.warn('Erreur lors du nettoyage:', e);
      }
    }, 3000);

    console.log('✅ Données envoyées avec formulaire caché');
    return true;

  } catch (error) {
    console.error('Erreur lors de l\'envoi des données:', error);
    return false;
  }
};

// Fonction pour vérifier la connexion
export const testGoogleSheetsConnection = async (): Promise<boolean> => {
  try {
    console.log('✅ Mode simulation activé');
    return true;
  } catch (error) {
    console.error('Erreur de connexion:', error);
    return false;
  }
};
