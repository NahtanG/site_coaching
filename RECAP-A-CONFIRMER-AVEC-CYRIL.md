# Récap : ce qu'il faut confirmer ou changer avec Cyril

Dans le code, chaque point est repéré par un commentaire `À CONFIRMER AVEC CYRIL`.
Astuce : dans ton éditeur, recherche cette phrase pour tout retrouver.

## 1. Avant toute mise en ligne (bloquant)

**Remettre le lien « Mentions légales » dans le pied de page** de `index.html` et `offre.html` (un commentaire `À RÉACTIVER` indique l'endroit). Il est retiré pour l'instant, mais les mentions légales sont obligatoires sur tout site public et doivent être accessibles depuis toutes les pages.

| Point | Où | Valeur actuelle |
|---|---|---|
| Micro-entreprise créée, **SIREN** obtenu | `mentions-legales.html` | « À compléter » |
| Adresse, téléphone, e-mail pro | `mentions-legales.html` | « À compléter » |
| **Diplôme** d'éducateur sportif et **n° de carte professionnelle** (déclaration EAPS) | `mentions-legales.html`, bloc « À propos » de `index.html` | « À compléter » |
| **Assurance RC Pro** (nom de l'assureur) | `mentions-legales.html` | « À compléter » |
| Hébergeur retenu (nom + adresse) : GitHub Pages ou Vercel | `mentions-legales.html` | « À compléter » |

À demander aussi : son contrat de coach en salle contient-il une clause d'exclusivité ou une interdiction de démarcher les adhérents ?
Ne pas citer le nom de la salle sur le site.

## 2. Liens et coordonnées

| Point | Où | Valeur actuelle |
|---|---|---|
| Lien Calendly général | `index.html`, `offre.html` | `https://calendly.com/VOTRE-LIEN` |
| Lien Calendly **séance découverte** (créer un événement dédié) | `index.html`, `offre.html` | `https://calendly.com/VOTRE-LIEN/seance-decouverte` |
| Téléphone | barre du bas, JSON-LD | `+33600000000` |
| WhatsApp (format `33612345678`, sans + ni 0) | barre du bas | `33600000000` |
| Nom de domaine du site | balises `og:` et JSON-LD (`VOTRE-DOMAINE.fr`) | à choisir |

## 3. Contenu à valider

- **Séance découverte** : prix (30 € = exemple), durée (1 h), contenu (bilan + premier entraînement ?).
- **Les 3 offres** : prix (50 € / 200 € / 350 € = exemples), durée de validité du pack 5 séances, rythme du mois intensif.
- **Lieu des séances** : salle (laquelle ?), domicile, extérieur ? Mettre à jour la FAQ et « Informations pratiques ».
- **Matériel à apporter** (FAQ).
- **Politique d'annulation** : délai exact (24 h = exemple).
- **Modes de paiement** à afficher (FAQ), à n'indiquer qu'une fois la micro-entreprise créée.
- **Parcours** : durée exacte chez les pompiers, statut (volontaire ou professionnel), spécialités d'entraînement. Rester factuel.
- **Profils « C'est pour toi si… »** : lui correspondent-ils ? Ajouter par exemple « préparation aux tests physiques » si pertinent.
- Demande-t-il un **questionnaire de santé** avant la première séance ? À mentionner dans la FAQ si oui.

## 4. Photos à lui demander (dossier `images/`)

| Fichier | Idée de prise de vue | Format |
|---|---|---|
| `hero.jpg` | En action (exercice, matériel), plan large avec de l'espace | Paysage, ex. 1920 × 1080 |
| `portrait.jpg` | Portrait en tenue, visage plutôt à droite de l'image | Portrait |
| `seance.jpg` | Séance de coaching (avec l'accord de la personne) ou extérieur | Paysage |

Photos compressées (moins de 400 Ko chacune). Les fichiers `favicon.svg` et `partage.png` sont déjà fournis.

## 5. Après la mise en ligne

- Créer la fiche **Google Business Profile** avec le même nom et le même téléphone que sur le site.
- Mettre le lien du site dans la bio Instagram.
- Collecter ses 3 premiers avis (Google ou Instagram) pour ajouter une section témoignages.
- Option RGPD : héberger les polices soi-même pour ne plus passer par Google Fonts (puis retirer la phrase correspondante dans les mentions légales).
