# To-Do List React 📝

Une application moderne de gestion de tâches développée avec React et Sass, offrant une interface utilisateur intuitive et responsive.

## ✨ Fonctionnalités

- ✅ **Affichage des tâches** - Liste claire et organisée
- ➕ **Ajout de tâches** - Interface modale pour créer de nouvelles tâches
- 🗑️ **Suppression de tâches** - Suppression rapide avec confirmation
- ✔️ **Marquage des tâches** - Système de checkbox personnalisé
- 📅 **Date actuelle** - Affichage de la date du jour
- 🎨 **Interface moderne** - Design épuré avec animations fluides
- 📱 **Responsive** - Optimisé pour tous les appareils

## 🚀 Démo

[Voir la démo en ligne](https://antonin.github.io/To-do_list_React)

## 🛠️ Technologies utilisées

- **React 19.2.0** - Framework JavaScript
- **Sass** - Préprocesseur CSS
- **Vite** - Build tool moderne
- **Font Awesome** - Icônes
- **Google Fonts** - Typographies (Google Sans, Rubik)

## 📦 Installation

1. **Clonez le repository**

   ```bash
   git clone https://github.com/Drack0r/To-do_list_React.git
   cd To-do_list_React
   ```

2. **Installez les dépendances**

   ```bash
   npm install
   ```

3. **Lancez le serveur de développement**

   ```bash
   npm run dev
   ```

4. **Ouvrez votre navigateur**
   ```
   http://localhost:5173
   ```

## 🏗️ Structure du projet

```
src/
├── assets/
│   └── styles/
│       ├── base/          # Reset, global, typography
│       ├── components/    # Styles des composants
│       ├── utils/         # Variables, mixins, keyframes
│       └── main.scss      # Point d'entrée Sass
├── components/
│   ├── Button/
│   ├── Modal/
│   ├── Task/
│   ├── TaskList/
│   └── index.js           # Barrel exports
├── utils/
│   ├── getCurrentDate.js
│   └── index.js
├── App.jsx
└── main.jsx
```

## 🎨 Architecture CSS

Le projet utilise une architecture **SCSS modulaire** suivant la méthodologie **7-1** :

- **Base** : Reset, styles globaux, typographie
- **Components** : Styles spécifiques aux composants
- **Utils** : Variables, mixins, fonctions utilitaires

### Conventions de nommage

- **BEM** pour les classes CSS
- **Kebab-case** pour les fichiers et dossiers
- **PascalCase** pour les composants React

## 📋 Scripts disponibles

```bash
# Développement
npm run dev          # Lance le serveur de développement

# Production
npm run build        # Build de production
npm run preview      # Prévisualise le build

# Qualité de code
npm run lint         # Analyse ESLint
```

## 🚢 Déploiement

Le projet est configuré pour un déploiement automatique sur **GitHub Pages** :

1. Push sur la branche `main`
2. GitHub Actions build automatiquement
3. Déploiement sur `https://Drack0r.github.io/To-do_list_React`

## 🔧 Configuration

### Vite

- Base URL configurée pour GitHub Pages
- Plugin React intégré

### ESLint

- Configuration moderne avec hooks React
- Rules personnalisées pour les variables inutilisées

## 📱 Responsive Design

- **Mobile First** approach
- Breakpoints : 481px (tablet), 769px (laptop), 1280px (desktop)
- Interface adaptative sur tous les écrans

## 🎯 Roadmap

- [ ] Persistance des données (localStorage)
- [ ] Filtrage des tâches (toutes, complétées, en cours)
- [ ] Édition des tâches existantes
- [ ] Réorganisation par drag & drop
- [ ] Mode sombre/clair

## 🤝 Contribution

1. Forkez le projet
2. Créez votre branche (`git checkout -b feature/nouvelle-fonctionnalite`)
3. Commitez (`git commit -m 'Ajout nouvelle fonctionnalité'`)
4. Pushez (`git push origin feature/nouvelle-fonctionnalite`)
5. Ouvrez une Pull Request

## 👤 Auteur

**Drack0r** - [GitHub](https://github.com/Drack0r)

---

⭐ N'hésitez pas à donner une étoile si ce projet vous a plu !
