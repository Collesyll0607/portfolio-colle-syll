import React, { useState } from 'react';
import { Activity, Cpu, Database, GitBranch, Layers, Sparkles } from 'lucide-react';

interface PipelineNode {
  id: string;
  stage: string;
  title: string;
  subtitle: string;
  metrics: string;
  techs: string[];
}

const PIPELINE_NODES: PipelineNode[] = [
  {
    id: 'ingestion',
    stage: '01 • INGESTION & COLLECTE',
    title: 'Sources & Flux de Données',
    subtitle: 'Collecte structurée et streaming événementiel',
    metrics: 'Flux API, Web & Fichiers structurés',
    techs: ['Python', 'Apache Kafka', 'CSV', 'API REST'],
  },
  {
    id: 'warehouse',
    stage: '02 • DATA ENGINEERING & ETL',
    title: 'Transformation & Entrepôt',
    subtitle: 'Nettoyage, modélisation dimensionnelle & stockage',
    metrics: 'Schémas Étoile • Tables Faits & Dimensions',
    techs: ['Pandas', 'Apache Hive', 'Snowflake', 'SQL'],
  },
  {
    id: 'ml',
    stage: '03 • MACHINE LEARNING & IA',
    title: 'Modélisation Prédictive',
    subtitle: 'Entraînement supervisé & évaluation statistique',
    metrics: 'Random Forest • R² ≈ 0,77 vérifié',
    techs: ['Scikit-learn', 'NumPy', 'Random Forest', 'Matplotlib'],
  },
  {
    id: 'apps',
    stage: '04 • SOLUTIONS NUMÉRIQUES',
    title: 'Applications & Décision',
    subtitle: 'Mise en production Web, Mobile & Microservices',
    metrics: 'Architectures 3-Tiers & Microservices',
    techs: ['React.js', 'Spring Boot', 'PostgreSQL', 'Flutter'],
  },
];

export const DataNetworkGraphic: React.FC = () => {
  const [activeNodeId, setActiveNodeId] = useState<string>('ml');

  const activeNode =
    PIPELINE_NODES.find((node) => node.id === activeNodeId) || PIPELINE_NODES[2];

  return (
    <div className="relative w-full max-w-xl mx-auto">
      {/* Halo décoratif subtil */}
      <div
        aria-hidden="true"
        className="absolute -inset-3 rounded-3xl bg-gradient-to-tr from-brand-primary/15 via-brand-secondary/10 to-brand-orange/15 blur-2xl dark:from-brand-secondary/25 dark:to-brand-orange/15"
      />

      {/* Carte principale d'architecture Data & IA */}
      <div className="relative rounded-2xl border border-brand-primary/15 dark:border-brand-darkBorder bg-brand-white/95 dark:bg-brand-darkSurface/95 backdrop-blur-md shadow-elevated overflow-hidden">
        {/* Barre supérieure de terminal d'architecture */}
        <div className="flex items-center justify-between px-5 py-3.5 border-b border-brand-primary/10 dark:border-brand-darkBorder bg-brand-cream/70 dark:bg-brand-darkBg/60">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-brand-orange" />
            <span className="w-2.5 h-2.5 rounded-full bg-brand-secondary" />
            <span className="w-2.5 h-2.5 rounded-full bg-brand-primary dark:bg-emerald-400" />
            <span className="ml-2 font-mono text-xs font-medium text-brand-charcoal/75 dark:text-brand-cream/75">
              colle-syll://data-ai-architecture.graph
            </span>
          </div>
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-mono font-medium bg-brand-primary/10 text-brand-primary dark:bg-emerald-500/15 dark:text-emerald-300">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-orange animate-ping" />
            Interactif
          </span>
        </div>

        {/* Zone graphique SVG : Réseau de neurones & Connexions Data */}
        <div className="relative p-5 sm:p-6">
          <div className="relative rounded-xl bg-brand-primary text-brand-cream p-4 sm:p-5 overflow-hidden border border-brand-secondary/40">
            {/* Grille de fond du graphe */}
            <svg
              className="w-full h-52 sm:h-56"
              viewBox="0 0 520 220"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-label="Graphe interactif représentant les connexions entre l'ingénierie des données, les réseaux de neurones et les applications développées par Collé Syll"
            >
              <defs>
                <linearGradient id="lineGradPrimary" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#236B4A" stopOpacity="0.6" />
                  <stop offset="50%" stopColor="#E88945" stopOpacity="0.95" />
                  <stop offset="100%" stopColor="#F8F7F2" stopOpacity="0.85" />
                </linearGradient>
                <radialGradient id="nodeGlowOrange" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#E88945" stopOpacity="0.45" />
                  <stop offset="100%" stopColor="#E88945" stopOpacity="0" />
                </radialGradient>
                <radialGradient id="nodeGlowGreen" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#236B4A" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#236B4A" stopOpacity="0" />
                </radialGradient>
              </defs>

              {/* Lignes de grille subtiles */}
              <g stroke="#236B4A" strokeOpacity="0.25" strokeWidth="1">
                <line x1="0" y1="45" x2="520" y2="45" />
                <line x1="0" y1="110" x2="520" y2="110" />
                <line x1="0" y1="175" x2="520" y2="175" />
                <line x1="80" y1="0" x2="80" y2="220" />
                <line x1="205" y1="0" x2="205" y2="220" />
                <line x1="335" y1="0" x2="335" y2="220" />
                <line x1="450" y1="0" x2="450" y2="220" />
              </g>

              {/* Connexions synaptiques entre couches (Ingestion -> ETL -> Neural ML -> Apps) */}
              <g stroke="#236B4A" strokeOpacity="0.55" strokeWidth="1.4">
                {/* Couche 1 -> Couche 2 */}
                <path d="M80 55 C140 55, 145 75, 205 75" />
                <path d="M80 110 C140 110, 145 75, 205 75" />
                <path d="M80 110 C140 110, 145 145, 205 145" />
                <path d="M80 165 C140 165, 145 145, 205 145" />

                {/* Couche 2 -> Couche 3 (Réseau neuronal) */}
                <path d="M205 75 C265 75, 275 50, 335 50" />
                <path d="M205 75 C265 75, 275 110, 335 110" />
                <path d="M205 75 C265 75, 275 170, 335 170" />
                <path d="M205 145 C265 145, 275 50, 335 50" />
                <path d="M205 145 C265 145, 275 110, 335 110" />
                <path d="M205 145 C265 145, 275 170, 335 170" />

                {/* Couche 3 -> Couche 4 (Sortie applicative) */}
                <path d="M335 50 C390 50, 400 85, 450 85" />
                <path d="M335 110 C390 110, 400 85, 450 85" />
                <path d="M335 110 C390 110, 400 140, 450 140" />
                <path d="M335 170 C390 170, 400 140, 450 140" />
              </g>

              {/* Flux de données actifs animés */}
              <g
                stroke="url(#lineGradPrimary)"
                strokeWidth="2.2"
                className="animate-data-flow"
              >
                <path d="M80 55 C140 55, 145 75, 205 75" />
                <path d="M80 165 C140 165, 145 145, 205 145" />
                <path d="M205 75 C265 75, 275 110, 335 110" />
                <path d="M205 145 C265 145, 275 110, 335 110" />
                <path d="M335 110 C390 110, 400 85, 450 85" />
                <path d="M335 110 C390 110, 400 140, 450 140" />
              </g>

              {/* COUCHE 1 : INGESTION (Kafka / Python / CSV) */}
              <g
                className="cursor-pointer"
                onClick={() => setActiveNodeId('ingestion')}
                onMouseEnter={() => setActiveNodeId('ingestion')}
              >
                {activeNodeId === 'ingestion' && (
                  <circle cx="80" cy="110" r="36" fill="url(#nodeGlowOrange)" />
                )}
                <circle
                  cx="80"
                  cy="55"
                  r="9"
                  fill="#123B2A"
                  stroke={activeNodeId === 'ingestion' ? '#E88945' : '#F8F7F2'}
                  strokeWidth="2.2"
                />
                <circle
                  cx="80"
                  cy="110"
                  r="12"
                  fill={activeNodeId === 'ingestion' ? '#E88945' : '#236B4A'}
                  stroke="#F8F7F2"
                  strokeWidth="2.2"
                />
                <circle
                  cx="80"
                  cy="165"
                  r="9"
                  fill="#123B2A"
                  stroke={activeNodeId === 'ingestion' ? '#E88945' : '#F8F7F2'}
                  strokeWidth="2.2"
                />
                <text
                  x="80"
                  y="198"
                  textAnchor="middle"
                  fill={activeNodeId === 'ingestion' ? '#E88945' : '#F8F7F2'}
                  fontSize="10"
                  fontFamily="JetBrains Mono, monospace"
                  fontWeight="600"
                >
                  KAFKA / RAW
                </text>
              </g>

              {/* COUCHE 2 : DATA ENGINEERING (ETL / Hive / Snowflake) */}
              <g
                className="cursor-pointer"
                onClick={() => setActiveNodeId('warehouse')}
                onMouseEnter={() => setActiveNodeId('warehouse')}
              >
                {activeNodeId === 'warehouse' && (
                  <circle cx="205" cy="110" r="42" fill="url(#nodeGlowOrange)" />
                )}
                <rect
                  x="191"
                  y="61"
                  width="28"
                  height="28"
                  rx="8"
                  fill={activeNodeId === 'warehouse' ? '#E88945' : '#236B4A'}
                  stroke="#F8F7F2"
                  strokeWidth="2"
                />
                <rect
                  x="191"
                  y="131"
                  width="28"
                  height="28"
                  rx="8"
                  fill={activeNodeId === 'warehouse' ? '#E88945' : '#236B4A'}
                  stroke="#F8F7F2"
                  strokeWidth="2"
                />
                <text
                  x="205"
                  y="198"
                  textAnchor="middle"
                  fill={activeNodeId === 'warehouse' ? '#E88945' : '#F8F7F2'}
                  fontSize="10"
                  fontFamily="JetBrains Mono, monospace"
                  fontWeight="600"
                >
                  ETL • SNOWFLAKE
                </text>
              </g>

              {/* COUCHE 3 : MACHINE LEARNING & IA (Scikit-learn / Random Forest) */}
              <g
                className="cursor-pointer"
                onClick={() => setActiveNodeId('ml')}
                onMouseEnter={() => setActiveNodeId('ml')}
              >
                <circle cx="335" cy="110" r="46" fill="url(#nodeGlowOrange)" />
                <circle
                  cx="335"
                  cy="50"
                  r="11"
                  fill="#236B4A"
                  stroke={activeNodeId === 'ml' ? '#E88945' : '#F8F7F2'}
                  strokeWidth="2.2"
                />
                <circle
                  cx="335"
                  cy="110"
                  r="17"
                  fill={activeNodeId === 'ml' ? '#E88945' : '#236B4A'}
                  stroke="#F8F7F2"
                  strokeWidth="2.5"
                />
                <circle
                  cx="335"
                  cy="170"
                  r="11"
                  fill="#236B4A"
                  stroke={activeNodeId === 'ml' ? '#E88945' : '#F8F7F2'}
                  strokeWidth="2.2"
                />
                <text
                  x="335"
                  y="114"
                  textAnchor="middle"
                  fill="#123B2A"
                  fontSize="9.5"
                  fontFamily="JetBrains Mono, monospace"
                  fontWeight="700"
                >
                  ML
                </text>
                <text
                  x="335"
                  y="198"
                  textAnchor="middle"
                  fill={activeNodeId === 'ml' ? '#E88945' : '#F8F7F2'}
                  fontSize="10"
                  fontFamily="JetBrains Mono, monospace"
                  fontWeight="600"
                >
                  MODÈLES IA
                </text>
              </g>

              {/* COUCHE 4 : APPLICATIONS & API (React / Spring Boot) */}
              <g
                className="cursor-pointer"
                onClick={() => setActiveNodeId('apps')}
                onMouseEnter={() => setActiveNodeId('apps')}
              >
                {activeNodeId === 'apps' && (
                  <circle cx="450" cy="112" r="38" fill="url(#nodeGlowOrange)" />
                )}
                <circle
                  cx="450"
                  cy="85"
                  r="12"
                  fill={activeNodeId === 'apps' ? '#E88945' : '#236B4A'}
                  stroke="#F8F7F2"
                  strokeWidth="2.2"
                />
                <circle
                  cx="450"
                  cy="140"
                  r="12"
                  fill={activeNodeId === 'apps' ? '#E88945' : '#236B4A'}
                  stroke="#F8F7F2"
                  strokeWidth="2.2"
                />
                <text
                  x="450"
                  y="198"
                  textAnchor="middle"
                  fill={activeNodeId === 'apps' ? '#E88945' : '#F8F7F2'}
                  fontSize="10"
                  fontFamily="JetBrains Mono, monospace"
                  fontWeight="600"
                >
                  WEB & MOBILE
                </text>
              </g>
            </svg>

            {/* Sélecteur d'étapes interactif sous le graphe */}
            <div className="grid grid-cols-4 gap-1.5 mt-3 pt-3 border-t border-brand-secondary/40">
              {PIPELINE_NODES.map((node, index) => {
                const isSelected = node.id === activeNodeId;
                return (
                  <button
                    key={node.id}
                    type="button"
                    onClick={() => setActiveNodeId(node.id)}
                    className={`px-2 py-1.5 rounded-lg text-left transition-all duration-200 ${
                      isSelected
                        ? 'bg-brand-orange text-brand-charcoal font-semibold shadow-sm'
                        : 'bg-brand-secondary/30 text-brand-cream/80 hover:bg-brand-secondary/50'
                    }`}
                  >
                    <div className="font-mono text-[10px] opacity-80">0{index + 1}</div>
                    <div className="text-[11px] truncate leading-tight">
                      {node.id === 'ingestion' && 'Ingestion'}
                      {node.id === 'warehouse' && 'Data / ETL'}
                      {node.id === 'ml' && 'Modèles ML'}
                      {node.id === 'apps' && 'Apps & API'}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Panneau d'inspection du nœud sélectionné */}
          <div className="mt-4 p-4 rounded-xl bg-brand-cream dark:bg-brand-darkBg/90 border border-brand-primary/10 dark:border-brand-darkBorder transition-all duration-300">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
              <span className="font-mono text-[11px] font-semibold uppercase tracking-wider text-brand-secondary dark:text-emerald-400">
                {activeNode.stage}
              </span>
              <span className="inline-flex items-center gap-1 text-xs font-mono font-medium px-2.5 py-0.5 rounded-md bg-brand-orange/15 text-brand-charcoal dark:text-brand-orange">
                <Sparkles className="w-3 h-3 text-brand-orange" />
                {activeNode.metrics}
              </span>
            </div>

            <h3 className="text-base font-bold text-brand-charcoal dark:text-brand-cream">
              {activeNode.title}
            </h3>
            <p className="text-xs text-brand-charcoal/75 dark:text-brand-cream/70 mt-0.5">
              {activeNode.subtitle}
            </p>

            <div className="flex flex-wrap gap-1.5 mt-3">
              {activeNode.techs.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-0.5 rounded-md text-xs font-mono font-medium bg-brand-white dark:bg-brand-darkSurface text-brand-primary dark:text-brand-cream border border-brand-primary/15 dark:border-brand-darkBorder"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Barre de statut en bas de la carte visuelle */}
          <div className="mt-4 pt-3 border-t border-brand-primary/10 dark:border-brand-darkBorder flex flex-wrap items-center justify-between gap-2 text-xs text-brand-charcoal/70 dark:text-brand-cream/70">
            <div className="flex items-center gap-2">
              <Database className="w-3.5 h-3.5 text-brand-secondary dark:text-emerald-400" />
              <span>De la donnée brute à l’application intelligente</span>
            </div>
            <div className="flex items-center gap-3 font-mono text-[11px]">
              <span className="inline-flex items-center gap-1">
                <Cpu className="w-3.5 h-3.5 text-brand-orange" />
                Data & IA
              </span>
              <span className="inline-flex items-center gap-1">
                <GitBranch className="w-3.5 h-3.5 text-brand-secondary dark:text-emerald-400" />
                Full-Stack
              </span>
              <span className="inline-flex items-center gap-1">
                <Activity className="w-3.5 h-3.5 text-brand-primary dark:text-emerald-300" />
                UASZ
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Badge flottant discret en bas à gauche */}
      <div className="hidden sm:flex items-center gap-3 absolute -bottom-4 -left-4 px-4 py-2.5 rounded-xl bg-brand-white dark:bg-brand-darkSurface border border-brand-primary/15 dark:border-brand-darkBorder shadow-elevated">
        <div className="w-9 h-9 rounded-lg bg-brand-primary text-brand-cream flex items-center justify-center">
          <Layers className="w-4 h-4 text-brand-orange" />
        </div>
        <div>
          <p className="text-xs font-bold text-brand-charcoal dark:text-brand-cream">
            Architecture & Modélisation
          </p>
          <p className="text-[11px] text-brand-charcoal/70 dark:text-brand-cream/70">
            Cliquez sur un nœud du graphe pour explorer
          </p>
        </div>
      </div>
    </div>
  );
};
