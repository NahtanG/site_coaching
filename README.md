# Site vitrine – Cyril Bonnet d'Hulster, coaching privé

Site statique (HTML + CSS), sans outil de build.

## Architecture

```
site-coaching/
├── index.html        Page principale (accroche, pour qui, à propos, séance découverte, FAQ)
├── offre.html        Page des offres (séance découverte, tarifs, étapes, infos pratiques)
├── mentions-legales.html  Mentions légales (à compléter avant publication)
├── css/
│   └── style.css     Feuille de style commune (conçue mobile d'abord)
├── js/
│   └── site.js       Effet d'échelle des encadrés au défilement (facultatif)
├── images/
│   ├── favicon.svg   Icône de l'onglet
│   ├── partage.png   Image d'aperçu pour Instagram / WhatsApp
│   └── LISEZMOI.txt  Noms des photos à déposer (hero.jpg, portrait.jpg, seance.jpg)
└── README.md
```

## À remplacer avant de publier

Tout est listé dans `RECAP-A-CONFIRMER-AVEC-CYRIL.md` (fourni à côté de ce dossier).
Dans le code, chaque point est repéré par un commentaire `À CONFIRMER AVEC CYRIL` : une recherche sur cette phrase dans l'éditeur les retrouve tous.

## Publier gratuitement

- **GitHub Pages** : envoyer le dossier dans un dépôt, puis Settings > Pages > branche `main`, dossier `/ (root)`.
- **Vercel** : importer le dépôt (ou glisser le dossier), sans configuration particulière : « Other » comme framework, pas de commande de build.

## Effet au défilement

Les encadrés grossissent jusqu'à leur taille pleine au centre de l'écran et rétrécissent légèrement vers les bords.
Réglages dans `js/site.js` : `REDUCTION` (force de l'effet, 0.08 = 8 %) et `ZONE_PLEINE` (zone centrale à taille pleine).
L'effet est désactivé automatiquement pour les personnes qui ont réduit les animations dans leur système.
Pour le retirer, supprimer la ligne `<script src="js/site.js">` des deux pages.
