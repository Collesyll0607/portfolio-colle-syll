export interface NavItem {
  label: string;
  href: string;
}

export interface VerifiableMetric {
  value: string;
  label: string;
  detail: string;
}

export type SkillProficiencyLevel = 'core' | 'applied' | 'exploring';

export interface SkillItem {
  name: string;
  level: SkillProficiencyLevel;
  levelLabel: string;
  context: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  subtitle: string;
  iconName: 'Code2' | 'DatabaseZap' | 'Layers' | 'HardDrive' | 'Wrench';
  skills: SkillItem[];
}

export type ProjectDomain = 'data-ai' | 'web-software';

export interface ProjectItem {
  id: string;
  title: string;
  shortTag: string;
  domain: ProjectDomain;
  domainLabel: string;
  status?: 'completed' | 'in-progress';
  statusLabel?: string;
  description: string;
  highlights: string[];
  technologies: string[];
  keyMetric?: string;
  architectureType:
    | 'youtube-pipeline'
    | 'ml-housing'
    | 'uasz-ml'
    | 'edepot-microservices'
    | 'university-3tier';
  /**
   * Renseigner l'URL complète du dépôt GitHub (ex: "https://github.com/Collesyll0607/mon-projet")
   * Laisser une chaîne vide "" tant que le dépôt n'est pas encore public :
   * l'interface affichera automatiquement le badge discret « Code source bientôt disponible ».
   */
  githubUrl: string;
  liveUrl?: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  location: string;
  period: string;
  description: string;
  missions: string[];
  skillsDeveloped: string[];
}

export interface EducationItem {
  id: string;
  title: string;
  institution: string;
  location: string;
  period?: string;
  status: string;
  statusType: 'in-progress' | 'completed-pending-cert' | 'completed';
  description: string;
  focusAreas: string[];
}

export interface LanguageItem {
  language: string;
  level: string;
}

export const PROFILE_DATA = {
  fullName: 'Collé Syll',
  initials: 'CS',
  role: 'Développeuse Web & Mobile',
  headline: "Développeuse Web & Mobile | Passionnée par la Data et l'Intelligence Artificielle",
  heroGreeting: 'Bonjour, je suis Collé Syll',
  heroIntro:
    "Étudiante en Licence 3 Ingénierie Informatique à l'Université Assane Seck de Ziguinchor, je m'intéresse particulièrement à l'exploitation des données, au Data Engineering et au Machine Learning. J'aime concevoir des applications et développer des solutions qui répondent à des problèmes concrets.",
  slogan: '« Je transforme les données en informations utiles et les idées en solutions numériques. »',
  degree: 'Licence 3 Ingénierie Informatique (2023 – 2026)',
  university: 'Université Assane Seck de Ziguinchor (UASZ)',
  country: 'Sénégal',
  locationDisplay: 'Dakar / Ziguinchor, Sénégal',
  primaryInterests: [
    'Data Engineering',
    'Data Science',
    'Intelligence Artificielle',
    'Machine Learning',
  ],
  secondaryInterests: [
    'Développement Web',
    'Développement Mobile',
    'Architecture Backend & N-tier',
    'Réseaux informatiques',
  ],
  careerGoal:
    "Développer des solutions informatiques intelligentes basées sur les données et l'IA.",

  languages: [
    { language: 'Français', level: 'Courant' },
    { language: 'Anglais', level: 'Intermédiaire' },
    { language: 'Wolof', level: 'Langue maternelle' },
  ] as LanguageItem[],

  /**
   * FICHIERS & LIENS CONFIGURABLES :
   * - Votre CV officiel est intégré dans `public/cv-colle-syll.pdf`
   * - Pour ajouter une photo de profil : déposez votre image dans `public/photo-colle-syll.jpg`
   *   puis renseignez `avatarUrl: '/photo-colle-syll.jpg'` ci-dessous.
   */
  cvUrl: './cv-colle-syll.pdf',
  cvFileName: 'CV_Colle_Syll_Data_Engineering_IA.pdf',
  avatarUrl: '',

  contact: {
    email: 'collesyll9@gmail.com',
    phone: '+221 78 462 93 02',
    phoneHref: 'tel:+221784629302',
    github: 'https://github.com/Collesyll0607',
    githubHandle: '@Collesyll0607',
    /**
     * Remplacez la chaîne vide par votre URL LinkedIn complète dès que souhaité,
     * par exemple : 'https://www.linkedin.com/in/colle-syll/'
     */
    linkedin: '',
    location: 'Dakar / Ziguinchor, Sénégal',
  },
};

export const NAV_ITEMS: NavItem[] = [
  { label: 'Accueil', href: '#accueil' },
  { label: 'À propos', href: '#a-propos' },
  { label: 'Compétences', href: '#competences' },
  { label: 'Projets', href: '#projets' },
  { label: 'Expériences', href: '#experiences' },
  { label: 'Contact', href: '#contact' },
];

/**
 * Statistiques 100% vérifiables issues du parcours réel et du CV de Collé Syll.
 */
export const VERIFIABLE_METRICS: VerifiableMetric[] = [
  {
    value: 'Licence 3',
    label: 'Ingénierie Informatique (2023 – 2026)',
    detail: 'Université Assane Seck de Ziguinchor (UASZ)',
  },
  {
    value: '5 Projets',
    label: 'Académiques & Collaboratifs',
    detail: 'Pipelines Data en streaming, ML & Architectures Web',
  },
  {
    value: 'R² ≈ 0,77',
    label: 'Modélisation prédictive ML',
    detail: 'Random Forest appliqué à la prédiction des loyers',
  },
  {
    value: '3 Langues',
    label: 'Communication & Collaboration',
    detail: 'Français (courant), Anglais (intermédiaire), Wolof',
  },
];

export const ABOUT_CONTENT = {
  sectionSubtitle: 'Parcours & Vision',
  sectionTitle: 'Une formation d’ingénierie tournée vers la Data et les systèmes intelligents',
  paragraphs: [
    "Actuellement étudiante en troisième année de Licence en Ingénierie Informatique (2023 – 2026) à l'Université Assane Seck de Ziguinchor (UASZ), après un Baccalauréat scientifique obtenu avec Mention Assez Bien au Lycée Galandou Diouf de Dakar, je me passionne pour la Data Science, le Data Engineering et l'Intelligence Artificielle.",
    "Mes projets académiques et communautaires m'ont permis de travailler concrètement sur des pipelines de données en streaming (Python, Apache Kafka, Hive, Snowflake), des modèles de Machine Learning supervisés (Scikit-learn, Random Forest) ainsi que sur des architectures logicielles N-tier et microservices (Spring Boot, Jakarta EE, React.js).",
    "Mon objectif professionnel est de renforcer et déployer ces compétences pour concevoir des solutions informatiques intelligentes basées sur les données et l'IA, capables de répondre à des enjeux réels.",
  ],
  pillars: [
    {
      title: 'Data Engineering & Streaming',
      description:
        'Conception de pipelines de données, traitement en streaming (Kafka), stockage distribué (Hive), entrepôt Snowflake, ETL et modélisation dimensionnelle.',
    },
    {
      title: 'Data Science & Machine Learning',
      description:
        'Nettoyage, exploration et visualisation de données (Pandas, NumPy, Matplotlib) et entraînement de modèles prédictifs avec Scikit-learn.',
    },
    {
      title: 'Développement Web, Mobile & N-tier',
      description:
        'Création d’applications complètes, API REST, architectures N-tier et microservices avec React.js, Spring Boot, Jakarta EE et Flutter.',
    },
    {
      title: 'Leadership & Engagement IA',
      description:
        "Responsable de la Section Féminine et membre de la Commission d'Organisation au sein de l'UASZ AI Community.",
    },
  ],
};

export const SKILL_LEVEL_LEGEND: Record<
  SkillProficiencyLevel,
  { badge: string; description: string; dotColor: string }
> = {
  core: {
    badge: 'Socle principal',
    description: 'Pratique régulière sur plusieurs projets académiques et personnels',
    dotColor: 'bg-brand-primary dark:bg-emerald-400',
  },
  applied: {
    badge: 'Pratique appliquée',
    description: 'Mis en œuvre concrètement dans des projets ciblés et travaux pratiques',
    dotColor: 'bg-brand-secondary dark:bg-emerald-500/80',
  },
  exploring: {
    badge: 'En approfondissement',
    description: 'Technologies étudiées en formation spécialisée et projets d’exploration',
    dotColor: 'bg-brand-orange',
  },
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'programmation',
    title: 'Programmation',
    subtitle: 'Langages fondamentaux pour le traitement de données, le backend et le web',
    iconName: 'Code2',
    skills: [
      {
        name: 'Python',
        level: 'core',
        levelLabel: 'Socle principal',
        context: 'Data Engineering, nettoyage, analyse de données & Machine Learning',
      },
      {
        name: 'SQL',
        level: 'core',
        levelLabel: 'Socle principal',
        context: 'Exploitation analytique de données, requêtes complexes & bases relationnelles',
      },
      {
        name: 'Java',
        level: 'core',
        levelLabel: 'Socle principal',
        context: 'Programmation orientée objet, architectures N-tier Jakarta EE & Spring Boot',
      },
      {
        name: 'JavaScript',
        level: 'applied',
        levelLabel: 'Pratique appliquée',
        context: 'Développement d’interfaces web interactives et composants React.js',
      },
      {
        name: 'PHP',
        level: 'applied',
        levelLabel: 'Pratique appliquée',
        context: 'Développement d’applications web dynamiques côté serveur',
      },
    ],
  },
  {
    id: 'data-ia',
    title: 'Data Engineering & Data Science',
    subtitle: 'Pipelines de données, traitement en streaming, modélisation dimensionnelle et ML',
    iconName: 'DatabaseZap',
    skills: [
      {
        name: 'Pandas',
        level: 'core',
        levelLabel: 'Socle principal',
        context: 'Nettoyage, préparation et transformation de jeux de données structurés',
      },
      {
        name: 'NumPy',
        level: 'core',
        levelLabel: 'Socle principal',
        context: 'Calcul scientifique et manipulation de tableaux numériques',
      },
      {
        name: 'Matplotlib',
        level: 'applied',
        levelLabel: 'Pratique appliquée',
        context: 'Exploration visuelle des données et analyse graphique des modèles',
      },
      {
        name: 'Scikit-learn',
        level: 'core',
        levelLabel: 'Socle principal',
        context: 'Entraînement et évaluation de modèles supervisés (Random Forest, R² ≈ 0,77)',
      },
      {
        name: 'ETL',
        level: 'applied',
        levelLabel: 'Pratique appliquée',
        context: 'Pipelines de collecte, transformation et chargement de données',
      },
      {
        name: 'Modélisation dimensionnelle',
        level: 'applied',
        levelLabel: 'Pratique appliquée',
        context: 'Conception de schémas analytiques pour vidéos et commentaires YouTube',
      },
      {
        name: 'Apache Kafka',
        level: 'applied',
        levelLabel: 'Pratique appliquée',
        context: 'Collecte et traitement de données en flux de streaming temps réel',
      },
      {
        name: 'Apache Hive',
        level: 'exploring',
        levelLabel: 'En approfondissement',
        context: 'Stockage et interrogation distribuée au sein de pipelines Big Data',
      },
      {
        name: 'Snowflake',
        level: 'exploring',
        levelLabel: 'En approfondissement',
        context: 'Entrepôt de données cloud et analyse SQL décisionnelle',
      },
    ],
  },
  {
    id: 'web-mobile',
    title: 'Développement Web & Mobile',
    subtitle: 'Interfaces modernes, applications mobiles et architectures distribuées / N-tier',
    iconName: 'Layers',
    skills: [
      {
        name: 'React.js',
        level: 'applied',
        levelLabel: 'Pratique appliquée',
        context: 'Interfaces web modernes basées sur les composants (plateforme E-Dépôt)',
      },
      {
        name: 'Spring Boot',
        level: 'applied',
        levelLabel: 'Pratique appliquée',
        context: 'Conception de services backend Java et architecture microservices',
      },
      {
        name: 'HTML',
        level: 'core',
        levelLabel: 'Socle principal',
        context: 'Structuration sémantique et accessible des pages web',
      },
      {
        name: 'CSS',
        level: 'core',
        levelLabel: 'Socle principal',
        context: 'Mise en page responsive et design d’interfaces soignées',
      },
      {
        name: 'API REST',
        level: 'core',
        levelLabel: 'Socle principal',
        context: 'Communication client-serveur et exposition de services métiers',
      },
      {
        name: 'Microservices',
        level: 'applied',
        levelLabel: 'Pratique appliquée',
        context: 'Conception modulaire appliquée à la plateforme logistique E-Dépôt',
      },
      {
        name: 'Flutter',
        level: 'exploring',
        levelLabel: 'En approfondissement',
        context: 'Développement d’applications mobiles multiplateformes',
      },
    ],
  },
  {
    id: 'bases-de-donnees',
    title: 'Bases de données',
    subtitle: 'Modélisation relationnelle (MCD / MLD), SGBD transactionnels et NoSQL',
    iconName: 'HardDrive',
    skills: [
      {
        name: 'MySQL',
        level: 'core',
        levelLabel: 'Socle principal',
        context: 'Modélisation relationnelle (MCD/MLD) et persistance pour applications Jakarta EE',
      },
      {
        name: 'PostgreSQL',
        level: 'core',
        levelLabel: 'Socle principal',
        context: 'Base de données relationnelle pour architectures Spring Boot & Microservices',
      },
      {
        name: 'MongoDB',
        level: 'exploring',
        levelLabel: 'En approfondissement',
        context: 'Bases de données orientées documents et stockage NoSQL',
      },
    ],
  },
  {
    id: 'outils-methodes',
    title: 'Outils & Méthodes',
    subtitle: 'Gestion de versions, système Linux, conteneurisation et ingénierie de projet',
    iconName: 'Wrench',
    skills: [
      {
        name: 'Git et GitHub',
        level: 'core',
        levelLabel: 'Socle principal',
        context: 'Suivi de versions, gestion de dépôts et collaboration en équipe',
      },
      {
        name: 'UML',
        level: 'core',
        levelLabel: 'Socle principal',
        context: 'Conception orientée objet, modélisation MCD/MLD et architectures N-tier',
      },
      {
        name: 'Méthodes Agile/Scrum',
        level: 'applied',
        levelLabel: 'Pratique appliquée',
        context: 'Gestion de projet itérative, planification et diagrammes de Gantt',
      },
      {
        name: 'Linux',
        level: 'applied',
        levelLabel: 'Pratique appliquée',
        context: 'Environnement système, terminal et déploiement d’outils techniques',
      },
      {
        name: 'Docker',
        level: 'exploring',
        levelLabel: 'En approfondissement',
        context: 'Conteneurisation de services et d’environnements Data Engineering',
      },
    ],
  },
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'pipeline-youtube-data',
    title: 'Pipeline Data Engineering – Analyse de données YouTube',
    shortTag: 'Data Engineering & Streaming',
    domain: 'data-ai',
    domainLabel: 'Data Engineering',
    description:
      'Conception d’un pipeline de traitement de données permettant de collecter et traiter des données provenant de YouTube en flux de streaming, de les stocker et de les analyser. Le projet comprend également une modélisation dimensionnelle et l’analyse des données relatives aux vidéos et commentaires.',
    highlights: [
      'Collecte et traitement de données YouTube dans un flux de streaming avec Python et Apache Kafka',
      'Pipeline avec export CSV, stockage Hive et exploitation analytique des données avec SQL',
      'Modélisation dimensionnelle sous Snowflake et analyse approfondie des vidéos et commentaires',
    ],
    technologies: ['Python', 'Apache Kafka', 'CSV', 'Hive', 'SQL', 'Snowflake'],
    keyMetric: 'Streaming • Modèle Dimensionnel',
    architectureType: 'youtube-pipeline',
    githubUrl: 'https://github.com/Collesyll0607/projet-4-youtube-streaming-analytics',
  },
  {
    id: 'prediction-loyers-ml',
    title: 'Prédiction des prix de location immobilière – UASZ AI Community',
    shortTag: 'Machine Learning Supervisé • UASZ AI Community',
    domain: 'data-ai',
    domainLabel: 'Machine Learning & IA',
    description:
      'Développement collaboratif au sein de l’UASZ AI Community d’un modèle de Machine Learning permettant de prédire les prix de location immobilière à partir des caractéristiques des logements (traitement des données, entraînement et évaluation). Le modèle obtenu présente un coefficient de détermination R² d’environ 0,77.',
    highlights: [
      'Préparation, nettoyage et traitement collaboratif du jeu de données immobilières avec Python et Pandas',
      'Entraînement et optimisation d’un modèle ensembliste Random Forest sous Scikit-learn',
      'Évaluation des performances prédictives avec un score R² vérifié d’environ 0,77 et restitution au sein de l’UASZ AI Community',
    ],
    technologies: ['Python', 'Pandas', 'Scikit-learn', 'Random Forest'],
    keyMetric: 'Score R² ≈ 0,77 • UASZ AI',
    architectureType: 'ml-housing',
    githubUrl: 'https://github.com/Collesyll0607/prediction-loyers-ml',
  },
  {
    id: 'edepot-plateforme-transport',
    title: 'E-Dépôt – Plateforme de transport de marchandises',
    shortTag: 'Architecture Microservices & Logistique',
    domain: 'web-software',
    domainLabel: 'Full-Stack & Microservices',
    description:
      'Conception d’une plateforme destinée à faciliter la mise en relation entre commerçants, producteurs agricoles, transporteurs et destinataires pour le transport de marchandises en Casamance.',
    highlights: [
      'Conception d’une plateforme reliant transporteurs, commerçants, producteurs agricoles et destinataires',
      'Participation à la conception d’une architecture backend basée sur les microservices (Spring Boot, PostgreSQL)',
      'Développement d’une interface web moderne et réactive avec React.js',
    ],
    technologies: ['React.js', 'Spring Boot', 'PostgreSQL', 'Microservices'],
    keyMetric: 'Logistique • Casamance',
    architectureType: 'edepot-microservices',
    githubUrl: 'https://github.com/Collesyll0607/e-depot-plateforme',
  },
  {
    id: 'systeme-decisionnel-gestion-notes',
    title: 'Système Décisionnel & Data Warehouse – Gestion des Notes',
    shortTag: 'Data Warehouse, ETL & BI',
    domain: 'data-ai',
    domainLabel: 'Data Engineering & BI',
    description:
      'Conception et réalisation d’un système décisionnel complet pour la gestion et l’analyse des notes académiques, intégrant la génération de jeux de données, la modélisation MCD/MLD, l’intégration SQL/NoSQL, un entrepôt de données (Data Warehouse) et un tableau de bord analytique.',
    highlights: [
      'Modélisation conceptuelle et logique complète (MCD / MLD) et structuration Data Warehouse',
      'Pipeline maître automatisé en Python combinant sources relationnelles (SQL) et NoSQL',
      'Tableau de bord interactif d’aide à la décision pour le suivi des performances académiques',
    ],
    technologies: ['Python', 'SQL', 'NoSQL', 'Data Warehouse', 'ETL', 'Dashboard'],
    keyMetric: 'Data Warehouse • SQL/NoSQL',
    architectureType: 'youtube-pipeline',
    githubUrl: 'https://github.com/Collesyll0607/projet-global-gestion-notes',
  },
  {
    id: 'app-mobile-tourisme-uasz',
    title: 'Application Mobile & Microservices – Réservation de Visites Touristiques',
    shortTag: 'Projet de Mémoire L3 (En cours) • Flutter & Spring Boot',
    domain: 'web-software',
    domainLabel: 'Mobile & Microservices',
    status: 'in-progress',
    statusLabel: 'En cours de développement',
    description:
      'Projet de mémoire de Licence 3 Ingénierie Informatique (UASZ) actuellement en cours de réalisation : conception et développement d’une application mobile multiplateforme (Flutter/Dart) connectée à un backend Spring Boot pour la réservation de visites et circuits touristiques.',
    highlights: [
      'Conception de l’application mobile en Flutter / Dart (catalogue des sites, réservation de créneaux et guides)',
      'Interconnexion prévue et en cours avec le backend REST Spring Boot & MySQL (gestion du patrimoine et des réservations)',
      'Travail de mémoire L3 en binôme sous la direction du Dr. Lamine FATY (UASZ)',
    ],
    technologies: ['Flutter', 'Dart', 'Spring Boot', 'Microservices', 'API REST', 'MySQL'],
    keyMetric: 'Mémoire L3 • En cours',
    architectureType: 'edepot-microservices',
    githubUrl: 'https://github.com/Collesyll0607/App_mobile_reservation_visites_touristiques',
  },
  {
    id: 'mamacare-ia-sante',
    title: 'MamaCare IA – Plateforme Intelligente Santé Maternelle & Pédiatrie',
    shortTag: 'Projet Collaboratif (En cours) • IA & Santé',
    domain: 'data-ai',
    domainLabel: 'IA & Santé',
    status: 'in-progress',
    statusLabel: 'En cours de développement',
    description:
      'Projet d’innovation technologique (L3 UASZ) actuellement en cours de développement : plateforme interactive en Python / Streamlit dédiée à la santé maternelle et pédiatrique au Sénégal (calendrier vaccinal PEV, triage des symptômes PCIME, nutrition OMS et assistance IA).',
    highlights: [
      'Développement du Module 4 (Calendrier Vaccinal PEV du Sénégal) et structuration des données JSON',
      'Travail collaboratif en cours d’intégration avec les modules Chatbot IA, Triage PCIME, Nutrition OMS et Langues locales',
      'Application concrète des technologies numériques et de l’IA à un enjeu de santé publique',
    ],
    technologies: ['Python', 'Streamlit', 'JSON', 'IA Appliquée', 'Git'],
    keyMetric: 'En cours • Innovation UASZ',
    architectureType: 'uasz-ml',
    githubUrl:
      'https://github.com/Mamadoulaminecissoko/Projet_Innovations_Technologiques/tree/feature/vaccins-syll',
  },
  {
    id: 'gestion-universitaire-jee',
    title: 'Application de gestion universitaire',
    shortTag: 'Architecture N-tier (3 Couches) & Jakarta EE',
    domain: 'web-software',
    domainLabel: 'Ingénierie Logicielle',
    description:
      'Développement d’une application de gestion universitaire basée sur une architecture trois couches permettant de gérer les étudiants, les cours et les notes.',
    highlights: [
      'Architecture N-tier en trois couches garantissant la séparation des responsabilités',
      'Gestion complète des étudiants, des cours et des notes avec gestion des sessions HTTP (Servlets)',
      'Persistance relationnelle sous MySQL et déploiement sur serveur Apache Tomcat',
    ],
    technologies: ['Java', 'Jakarta EE', 'Servlets', 'MySQL', 'Apache Tomcat'],
    keyMetric: 'Architecture 3 Couches',
    architectureType: 'university-3tier',
    githubUrl: 'https://github.com/Collesyll0607/gestion-universitaire-jee',
  },
];

export const EXPERIENCES_DATA: ExperienceItem[] = [
  {
    id: 'uasz-ai-community-leadership',
    role: "Responsable de la Section Féminine / Commission d'Organisation",
    organization: 'UASZ AI Community',
    location: 'Université Assane Seck de Ziguinchor, Sénégal',
    period: 'Engagement associatif & technologique',
    description:
      "Participation à l'organisation d'activités autour de l'intelligence artificielle, à la sensibilisation aux technologies numériques, à la mobilisation des participants et aux initiatives collaboratives de la communauté.",
    missions: [
      "Organisation d'événements autour de l'Intelligence Artificielle et animation d'ateliers de sensibilisation aux technologies numériques.",
      'Mobilisation, accompagnement et coordination des participantes au sein de la Section Féminine.',
      "Contribution active aux initiatives collaboratives et aux projets autour de l'innovation technologique.",
    ],
    skillsDeveloped: [
      'Travail en équipe',
      'Organisation',
      'Communication',
      'Leadership',
      'Collaboration autour de projets technologiques',
    ],
  },
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    id: 'licence-3-uasz',
    title: 'Licence 3 – Ingénierie Informatique',
    institution: 'Université Assane Seck de Ziguinchor (UASZ)',
    location: 'Ziguinchor, Sénégal',
    period: '2023 – 2026',
    status: '2023 – 2026 • En cours',
    statusType: 'in-progress',
    description:
      "Formation universitaire en ingénierie informatique couvrant l'algorithmique, la programmation (Python, Java), les bases de données (SQL, MCD/MLD), le génie logiciel (UML, architectures N-tier & microservices) et l'analyse de données.",
    focusAreas: [
      'Programmation Python & Java',
      'Bases de données SQL (MCD / MLD)',
      'Développement Web, Mobile & N-tier',
      'Génie Logiciel, UML & Agile/Scrum',
      'Data Science & Machine Learning',
    ],
  },
  {
    id: 'formation-data-engineering-forcen',
    title: 'Certification Data Engineering – Forcen',
    institution: 'Programme Forcen',
    location: 'Sénégal',
    status: 'Formation terminée • Certificat en attente de réception',
    statusType: 'completed-pending-cert',
    description:
      "Formation spécialisée centrée sur la conception de pipelines de données, le traitement de flux en streaming, l'intégration ETL, la modélisation dimensionnelle et l'exploitation d'entrepôts de données.",
    focusAreas: [
      'Pipelines ETL & Python',
      'Streaming (Apache Kafka)',
      'Apache Hive',
      'Snowflake & SQL Analytique',
      'Modélisation dimensionnelle',
    ],
  },
  {
    id: 'baccalaureat-scientifique-dakar',
    title: 'Baccalauréat Scientifique – Mention Assez Bien',
    institution: 'Lycée Galandou Diouf',
    location: 'Dakar, Sénégal',
    period: '2022 – 2023',
    status: '2022 – 2023 • Obtenu (Mention Assez Bien)',
    statusType: 'completed',
    description:
      "Diplôme de fin d'études secondaires générales scientifiques obtenu avec la Mention Assez Bien à Dakar.",
    focusAreas: [
      'Mathématiques',
      'Sciences Physiques',
      'Raisonnement analytique & scientifique',
    ],
  },
];
