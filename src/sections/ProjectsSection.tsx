import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { PROFILE_DATA, PROJECTS_DATA, ProjectDomain } from '../data/portfolioData';
import { SectionHeading } from '../components/SectionHeading';
import { ProjectCard } from '../components/ProjectCard';

type FilterType = 'all' | ProjectDomain;

export const ProjectsSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<FilterType>('all');

  const filteredProjects =
    activeFilter === 'all'
      ? PROJECTS_DATA
      : PROJECTS_DATA.filter((project) => project.domain === activeFilter);

  const dataAiCount = PROJECTS_DATA.filter((p) => p.domain === 'data-ai').length;
  const webCount = PROJECTS_DATA.filter((p) => p.domain === 'web-software').length;

  return (
    <section
      id="projets"
      className="py-20 sm:py-28 bg-brand-white dark:bg-brand-darkSurface border-y border-brand-primary/10 dark:border-brand-darkBorder"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <SectionHeading
              badge="Réalisations Techniques"
              title="Projets en Data Engineering, Machine Learning et Génie Logiciel"
              subtitle="Chaque projet répond à une problématique concrète d’exploitation de données, de prédiction statistique ou d’architecture applicative."
            />
          </div>

          {/* Filtres par pôle */}
          <div
            className="flex flex-wrap items-center gap-2 mb-12"
            role="tablist"
            aria-label="Filtrer les projets par domaine"
          >
            <button
              type="button"
              role="tab"
              aria-selected={activeFilter === 'all'}
              onClick={() => setActiveFilter('all')}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeFilter === 'all'
                  ? 'bg-brand-primary text-brand-cream shadow-sm dark:bg-brand-orange dark:text-brand-charcoal'
                  : 'bg-brand-cream dark:bg-brand-darkBg text-brand-charcoal/80 dark:text-brand-cream/80 border border-brand-primary/15 dark:border-brand-darkBorder hover:border-brand-secondary'
              }`}
            >
              Tous ({PROJECTS_DATA.length})
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={activeFilter === 'data-ai'}
              onClick={() => setActiveFilter('data-ai')}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeFilter === 'data-ai'
                  ? 'bg-brand-primary text-brand-cream shadow-sm dark:bg-brand-orange dark:text-brand-charcoal'
                  : 'bg-brand-cream dark:bg-brand-darkBg text-brand-charcoal/80 dark:text-brand-cream/80 border border-brand-primary/15 dark:border-brand-darkBorder hover:border-brand-secondary'
              }`}
            >
              Data &amp; IA ({dataAiCount})
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={activeFilter === 'web-software'}
              onClick={() => setActiveFilter('web-software')}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeFilter === 'web-software'
                  ? 'bg-brand-primary text-brand-cream shadow-sm dark:bg-brand-orange dark:text-brand-charcoal'
                  : 'bg-brand-cream dark:bg-brand-darkBg text-brand-charcoal/80 dark:text-brand-cream/80 border border-brand-primary/15 dark:border-brand-darkBorder hover:border-brand-secondary'
              }`}
            >
              Web &amp; Architecture ({webCount})
            </button>
          </div>
        </div>

        {/* Grille des cartes de projets */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              featured={activeFilter === 'all' && index === 0}
            />
          ))}
        </div>

        {/* Bandeau d'accès au profil GitHub global */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-brand-primary text-brand-cream flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 shadow-elevated">
          <div className="space-y-1.5">
            <p className="font-mono text-xs uppercase tracking-wider text-brand-orange font-semibold">
              Open Source &amp; Dépôts Académiques
            </p>
            <h3 className="text-lg sm:text-xl font-extrabold">
              Retrouvez l’ensemble de mes travaux et évolutions sur GitHub
            </h3>
            <p className="text-xs sm:text-sm text-brand-cream/80 max-w-xl">
              Les dépôts de mes projets académiques et personnels sont progressivement documentés
              et publiés sur mon compte GitHub officiel.
            </p>
          </div>

          <a
            href={PROFILE_DATA.contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-5 py-3 rounded-xl text-sm font-bold bg-brand-orange text-brand-charcoal hover:bg-brand-orange/90 transition-all shrink-0 shadow-sm"
          >
            <Github className="w-4 h-4" />
            <span>Voir mon GitHub ({PROFILE_DATA.contact.githubHandle})</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
};
