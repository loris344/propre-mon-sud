# Configuration du Service d'Email

## Option 1: Formspree (Recommandé - Gratuit)

### Étapes de configuration :

1. **Créer un compte Formspree**
   - Aller sur https://formspree.io/
   - Créer un compte gratuit
   - Vérifier votre email

2. **Créer un nouveau formulaire**
   - Cliquer sur "New Form"
   - Nommer le formulaire : "SOS Nettoyage Diogène - Contact"
   - Choisir l'email de destination : `loris@sosnettoyagediogene.fr`

3. **Configurer les champs**
   - Ajouter les champs suivants :
     - `name` (Prénom)
     - `phone` (Téléphone)
     - `email` (Email)
     - `city` (Ville)
     - `message` (Description)

4. **Récupérer l'endpoint**
   - Copier l'URL du formulaire (format: `https://formspree.io/f/YOUR_FORM_ID`)
   - ✅ **CONFIGURÉ** : Votre endpoint est `https://formspree.io/f/xandgpjv`

5. **Configurer les notifications**
   - Dans les paramètres du formulaire
   - Activer les notifications par email
   - Configurer l'email de destination : `loris@sosnettoyagediogene.fr`

### Avantages de Formspree :
- ✅ Gratuit jusqu'à 50 soumissions/mois
- ✅ Pas de serveur backend nécessaire
- ✅ Protection anti-spam intégrée
- ✅ Interface simple
- ✅ Emails bien formatés

---

## Option 2: EmailJS (Alternative)

### Étapes de configuration :

1. **Créer un compte EmailJS**
   - Aller sur https://www.emailjs.com/
   - Créer un compte gratuit

2. **Configurer le service email**
   - Ajouter Gmail ou votre fournisseur d'email
   - Connecter votre compte email

3. **Créer un template**
   - Créer un nouveau template
   - Configurer le template avec les variables :
     - `{{from_name}}` (Prénom)
     - `{{from_phone}}` (Téléphone)
     - `{{from_email}}` (Email)
     - `{{city}}` (Ville)
     - `{{message}}` (Description)

4. **Récupérer les identifiants**
   - Service ID
   - Template ID
   - Public Key

5. **Mettre à jour le code**
   - Remplacer les valeurs dans `src/lib/emailService.ts`

---

## Option 3: Netlify Forms (Si déployé sur Netlify)

### Configuration automatique :

1. **Ajouter l'attribut `netlify` au formulaire**
2. **Ajouter un champ caché pour l'email de destination**
3. **Configurer les notifications dans Netlify**

---

## Configuration Actuelle

Le formulaire est configuré pour utiliser **Formspree** par défaut.

### ✅ Service Activé et Configuré !

1. ✅ Endpoint Formspree configuré : `https://formspree.io/f/xandgpjv`
2. ✅ Code mis à jour dans `src/lib/emailService.ts`
3. ✅ Formulaire prêt à être testé

### Structure de l'email reçu :

```
Sujet: Nouvelle demande de devis - [Prénom]

Prénom: [Prénom]
Téléphone: [Téléphone]
Email: [Email]
Ville d'intervention: [Ville]

Description:
[Description]

Envoyé le [Date] depuis [URL de la page]
```

---

## Test du Formulaire

1. Remplir le formulaire de contact
2. Cliquer sur "Envoyer ma demande"
3. Vérifier que l'email arrive bien à `loris@sosnettoyagediogene.fr`
4. Vérifier que l'utilisateur voit le message de confirmation

---

## Support

Si vous avez des questions sur la configuration, contactez le développeur ou consultez la documentation de Formspree.
