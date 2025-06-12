# Portfolio Vitrine

Un site web vitrine moderne et responsive pour présenter vos projets et compétences.

## Fonctionnalités

- Design moderne et responsive
- Section d'accueil avec animation
- Présentation des projets avec cartes interactives
- Section compétences
- Formulaire de contact
- Navigation fluide
- Liens vers les réseaux sociaux

## Structure du Projet

```
.
├── index.html
├── css/
│   └── style.css
├── js/
│   └── main.js
└── README.md
```

## Personnalisation

### Modifier les Projets

Pour ajouter ou modifier vos projets, éditez le tableau `projects` dans le fichier `js/main.js`. Chaque projet doit suivre cette structure :

```javascript
{
    title: "Titre du Projet",
    description: "Description du projet",
    image: "chemin/vers/image.jpg",
    technologies: ["Tech1", "Tech2"],
    link: "lien/vers/projet"
}
```

### Modifier les Couleurs

Les couleurs du site sont définies dans des variables CSS dans le fichier `css/style.css`. Modifiez les valeurs dans la section `:root` :

```css
:root {
    --primary-color: #2c3e50;
    --secondary-color: #3498db;
    --text-color: #333;
    --background-color: #f5f6fa;
    --white: #ffffff;
}
```

### Modifier les Liens Sociaux

Dans le fichier `index.html`, trouvez la section footer et modifiez les liens des réseaux sociaux :

```html
<div class="social-links">
    <a href="votre-lien-github" target="_blank"><i class="fab fa-github"></i></a>
    <a href="votre-lien-linkedin" target="_blank"><i class="fab fa-linkedin"></i></a>
</div>
```

## Déploiement

1. Personnalisez le contenu selon vos besoins
2. Remplacez les images placeholder par vos propres images
3. Mettez à jour les liens des projets et réseaux sociaux
4. Déployez sur votre hébergeur web préféré

## Technologies Utilisées

- HTML5
- CSS3 (avec variables CSS et Flexbox/Grid)
- JavaScript (Vanilla)
- Font Awesome pour les icônes

## Contribution

N'hésitez pas à proposer des améliorations en ouvrant une issue ou en soumettant une pull request.

## Licence

Ce projet est sous licence MIT. Vous êtes libre de l'utiliser et de le modifier comme bon vous semble. 