# Portfolio Professionnel — Collé Syll

> **« Je transforme les données en informations utiles et les idées en solutions numériques. »**

Portfolio personnel moderne, responsive et haut de gamme conçu pour **Collé Syll** — Développeuse Web & Mobile, étudiante en **Licence 3 Ingénierie Informatique** à l'**Université Assane Seck de Ziguinchor (UASZ)** au Sénégal, passionnée par le **Data Engineering**, la **Data Science**, l'**Intelligence Artificielle** et le **Machine Learning**.

---

## Stack Technique

- **Framework UI** : [React 18](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Outil de build** : [Vite](https://vitejs.dev/)
- **Design & Styles** : [Tailwind CSS](https://tailwindcss.com/) (avec support Mode Clair / Mode Sombre)
- **Icônes** : [Lucide React](https://lucide.dev/)
- **Typographies** : `Manrope` (titres & corps) et `JetBrains Mono` (métadonnées techniques & schémas Data)

---

## Architecture du Projet

```text
├── public/
│   ├── cv-colle-syll.pdf          # Fichier CV téléchargeable (à remplacer par votre CV final)
│   └── favicon.svg                # Monogramme "CS" aux couleurs de votre charte
├── src/
│   ├── assets/
│   │   ├── DataNetworkGraphic.tsx # Graphe interactif Data/ETL/Réseau Neuronal (Hero)
│   │   └── ProjectSchematics.tsx  # Schémas d'architecture SVG sur-mesure pour les 5 projets
│   ├── components/
│   │   ├── Navbar.tsx             # Navigation fixe responsive + Téléchargement CV + Thème
│   │   ├── SectionHeading.tsx     # En-têtes de sections réutilisables
│   │   ├── ProjectCard.tsx        # Carte projet avec schéma, détails techniques & lien GitHub
│   │   └── Footer.tsx             # Pied de page complet
│   ├── data/
│   │   └── portfolioData.ts       # FICHIER CENTRAL : profil, compétences, projets, expériences
│   ├── sections/
│   │   ├── HeroSection.tsx        # Section A/B : Accueil & Graphe interactif Data/IA
│   │   ├── AboutSection.tsx       # Section C : À propos & repères vérifiables
│   │   ├── SkillsSection.tsx      # Section D : Compétences par catégories & niveaux honnêtes
│   │   ├── ProjectsSection.tsx    # Section E : Les 5 projets avec filtres Data/IA & Web
│   │   ├── ExperienceSection.tsx  # Sections F & G : UASZ AI Community + Formations
│   │   └── ContactSection.tsx     # Section H : Coordonnées + Formulaire avec validation
│   ├── styles/
│   │   └── index.css              # Styles globaux, grille Data et variables CSS
│   ├── App.tsx                    # Assemblage principal et gestion du thème clair/sombre
│   └── main.tsx                   # Point d'entrée React
├── index.html                     # SEO, balises OpenGraph et polices Google Fonts
├── tailwind.config.js             # Palette de couleurs officielle (#123B2A, #236B4A, #F8F7F2, #E88945...)
└── package.json
```

---

## Installation et Lancement en Local

### 1. Prérequis
Assurez-vous d'avoir **Node.js** (version 18 ou supérieure) et **npm** installés sur votre machine.
*(Note : sur ce poste, Node.js LTS a également été installé dans `C:\Users\user\tools\nodejs`).*

### 2. Installer les dépendances
Ouvrez un terminal à la racine du projet et exécutez :

```bash
npm install
```

### 3. Lancer le serveur de développement
```bash
npm run dev
```
Ouvrez ensuite l'URL affichée dans le terminal (généralement `http://localhost:5173`).

### 4. Compiler pour la production
```bash
npm run build
```
Les fichiers optimisés prêts à être hébergés seront générés dans le dossier `dist/`.

---

## Guide de Personnalisation Rapide (CV, Photo, GitHub, LinkedIn)

Toutes vos données personnelles sont centralisées dans un seul fichier :
👉 **[`src/data/portfolioData.ts`](./src/data/portfolioData.ts)**

### 1. Remplacer votre CV
1. Exportez votre CV au format PDF.
2. Nommez-le **`cv-colle-syll.pdf`** et placez-le dans le dossier **`public/`** (en écrasant le fichier `public/cv-colle-syll.pdf` existant).
3. Le bouton **« Télécharger mon CV »** dans la barre de navigation téléchargera immédiatement votre nouveau fichier sous le nom `CV_Colle_Syll_Data_IA_Dev.pdf`.

### 2. Ajouter votre photo de profil (Optionnel)
Par défaut, la section **À propos** affiche un élégant badge monogramme `CS • DATA•IA`. Si vous souhaitez afficher votre photo :
1. Placez votre photo (ex. `photo-colle-syll.jpg`) dans le dossier **`public/`**.
2. Ouvrez [`src/data/portfolioData.ts`](./src/data/portfolioData.ts) et modifiez la propriété `avatarUrl` dans `PROFILE_DATA` :
   ```ts
   avatarUrl: '/photo-colle-syll.jpg',
   ```

### 3. Configurer votre lien LinkedIn
Dans [`src/data/portfolioData.ts`](./src/data/portfolioData.ts), au sein de `PROFILE_DATA.contact`, renseignez votre URL LinkedIn complète :
```ts
contact: {
  email: 'collesyll9@gmail.com',
  github: 'https://github.com/Collesyll0607',
  githubHandle: '@Collesyll0607',
  linkedin: 'https://www.linkedin.com/in/votre-profil/', // <-- Renseignez votre lien ici
  location: 'Sénégal (Ziguinchor)',
},
```
Dès que ce champ est rempli, le bouton cliquable LinkedIn s'active automatiquement dans la section Contact et dans le pied de page.

### 4. Ajouter les liens GitHub de chaque projet
Dans [`src/data/portfolioData.ts`](./src/data/portfolioData.ts), au sein du tableau `PROJECTS_DATA`, chaque projet possède un champ `githubUrl` :
- Tant que `githubUrl: ''` est vide, la carte affiche proprement le badge discret **« Code source bientôt disponible »** ainsi qu'un lien vers votre profil GitHub général (`https://github.com/Collesyll0607`).
- Dès que vous publiez le code source d'un projet sur GitHub, renseignez son URL :
  ```ts
  githubUrl: 'https://github.com/Collesyll0607/youtube-data-pipeline',
  ```
  Le bouton se transformera automatiquement en bouton **« Consulter le code source »**.

---

## Déploiement en Ligne (Vercel / Netlify / GitHub Pages)

Le projet est 100 % prêt pour un déploiement gratuit en quelques clics :

- **Sur Vercel ou Netlify** :
  1. Poussez ce dépôt sur votre compte GitHub (`https://github.com/Collesyll0607`).
  2. Importez le dépôt sur Vercel ou Netlify.
  3. Paramètres de build :
     - **Build command** : `npm run build`
     - **Output directory** : `dist`
- Votre portfolio sera accessible en ligne avec HTTPS automatique.
