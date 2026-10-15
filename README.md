# Site vitrine – CBDH Coaching (Cyril Bonnet d'Hulster)

Site statique (HTML + CSS), sans outil de build.

## Architecture

```
site-coaching/
├── index.html        Page principale (accroche, pour qui, à propos, FAQ)
├── offre.html        Page des offres (séance unique, packs, étapes, infos pratiques)
├── mentions-legales.html  Mentions légales
├── conditions-generales.html  Conditions de vente (modèle à faire relire)
├── css/
│   └── style.css     Feuille de style commune (conçue mobile d'abord)
├── js/
│   └── site.js       FAQ, effet d'échelle des encadrés, lecture de la vidéo
├── images/
│   ├── favicon.svg   Icône de l'onglet
│   ├── partage.png   Image d'aperçu pour Instagram / WhatsApp
│   ├── hero.jpg      Photo d'accueil (traîneau)
│   ├── portrait.jpg  Photo « À propos » (football américain)
│   └── seance.jpg    Image d'aperçu de la vidéo et fond de la page des offres
├── videos/
│   └── seance.mp4    Vidéo « En séance » (720×1280, sans son, ~1,6 Mo)
└── README.md
```

## Reste à compléter

- `conditions-generales.html`, article 8 : choisir un médiateur de la consommation (repéré par la classe `a-completer`).
- Déclarer « CBDH Coaching » comme nom commercial de l'entreprise (guichet des formalités).

## Publier gratuitement

- **GitHub Pages** : envoyer le dossier dans un dépôt, puis Settings > Pages > branche `main`, dossier `/ (root)`.
- **Vercel** : importer le dépôt (ou glisser le dossier), sans configuration particulière : « Other » comme framework, pas de commande de build.

## Effet au défilement

Les encadrés grossissent jusqu'à leur taille pleine au centre de l'écran et rétrécissent légèrement vers les bords.
Réglages dans `js/site.js` : `REDUCTION` (force de l'effet, 0.08 = 8 %) et `ZONE_PLEINE` (zone centrale à taille pleine).
L'effet est désactivé automatiquement pour les personnes qui ont réduit les animations dans leur système.
Pour le retirer, supprimer la ligne `<script src="js/site.js">` des pages.
