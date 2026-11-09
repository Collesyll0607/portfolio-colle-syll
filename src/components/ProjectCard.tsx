import React, { useState } from 'react';
import {
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Clock,
  ExternalLink,
  Github,
  Globe,
  Sparkles,
} from 'lucide-react';
import { PROFILE_DATA, ProjectItem } from '../data/portfolioData';
import { ProjectSchematic } from '../assets/ProjectSchematics';

interface ProjectCardProps {
  project: ProjectItem;
  featured?: boolean;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, featured = false }) => {
  const [showDetails, setShowDetails] = useState(featured);
  const hasGithubLink = Boolean(project.githubUrl && project.githubUrl.trim().length > 0);
  const hasLiveLink = Boolean(project.liveUrl && project.liveUrl.trim().length > 0);

  return (
    <article
      className={`group relative flex flex-col rounded-2xl border transition-all duration-300 overflow-hidden bg-brand-white dark:bg-brand-darkSurface ${
        featured
          ? 'lg:col-span-2 border-brand-primary/20 dark:border-brand-secondary/50 shadow-elevated'
          : 'border-brand-primary/12 dark:border-brand-darkBorder shadow-soft hover:shadow-elevated hover:-translate-y-1'
      }`}
    >
      {/* En-tête visuel : Schéma d'architecture sur-mesure */}
      <div className="relative bg-brand-primary/95 dark:bg-brand-darkBg px-4 pt-4 pb-3 border-b border-brand-secondary/30 overflow-hidden">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-mono font-semibold bg-brand-secondary/60 text-brand-cream border border-brand-cream/15">
              {project.domainLabel}
            </span>
            {hasLiveLink && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-mono font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-400/40 hover:bg-emerald-500/30 transition-colors"
                title="Ouvrir l'application déployée en ligne"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>Application en ligne</span>
                <ExternalLink className="w-2.5 h-2.5" />
              </a>
            )}
            {project.status === 'in-progress' && (
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-mono font-bold bg-brand-orange/20 text-brand-orange border border-brand-orange/40">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-orange animate-ping" />
                {project.statusLabel || 'En cours'}
              </span>
            )}
          </div>
          {project.keyMetric && (
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-mono font-bold bg-brand-orange text-brand-charcoal">
              <Sparkles className="w-3 h-3" />
              {project.keyMetric}
            </span>
          )}
        </div>

        <div className="transition-transform duration-300 group-hover:scale-[1.015]">
          <ProjectSchematic type={project.architectureType} />
        </div>
      </div>

      {/* Corps de la carte */}
      <div className="flex-1 flex flex-col p-6">
        <div className="mb-2">
          <span className="font-mono text-xs font-semibold text-brand-secondary dark:text-emerald-400">
            {project.shortTag}
          </span>
          <h3 className="mt-1 text-xl font-extrabold text-brand-charcoal dark:text-brand-cream group-hover:text-brand-primary dark:group-hover:text-emerald-300 transition-colors">
            {hasLiveLink ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline inline-flex items-center gap-1.5"
              >
                <span>{project.title}</span>
              </a>
            ) : (
              project.title
            )}
          </h3>
        </div>

        <p className="text-sm sm:text-[15px] text-brand-charcoal/80 dark:text-brand-cream/80 leading-relaxed">
          {project.description}
        </p>

        {/* Bouton pour afficher/masquer les points techniques clés */}
        <div className="mt-4">
          <button
            type="button"
            onClick={() => setShowDetails((prev) => !prev)}
            aria-expanded={showDetails}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-primary dark:text-emerald-400 hover:text-brand-secondary transition-colors"
          >
            <span>
              {showDetails
                ? 'Masquer les détails techniques'
                : 'Voir l’architecture & les réalisations clés'}
            </span>
            {showDetails ? (
              <ChevronUp className="w-3.5 h-3.5" />
            ) : (
              <ChevronDown className="w-3.5 h-3.5" />
            )}
          </button>

          {showDetails && (
            <ul className="mt-3 space-y-2 p-3.5 rounded-xl bg-brand-cream/80 dark:bg-brand-darkBg/70 border border-brand-primary/10 dark:border-brand-darkBorder">
              {project.highlights.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 text-xs sm:text-sm text-brand-charcoal/85 dark:text-brand-cream/85"
                >
                  <CheckCircle2 className="w-4 h-4 text-brand-secondary dark:text-emerald-400 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Technologies utilisées */}
        <div className="mt-5 pt-4 border-t border-brand-primary/10 dark:border-brand-darkBorder">
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded-lg text-xs font-mono font-semibold bg-brand-cream dark:bg-brand-darkBg text-brand-primary dark:text-brand-cream border border-brand-primary/15 dark:border-brand-darkBorder"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Encadré affichant explicitement les liens d'accès (Démo + GitHub) */}
        {(hasLiveLink || hasGithubLink) && (
          <div className="mt-4 p-3 rounded-xl bg-brand-cream/70 dark:bg-brand-darkBg/60 border border-brand-primary/10 dark:border-brand-darkBorder space-y-1.5 text-xs font-mono">
            {hasLiveLink && (
              <div className="flex items-center gap-2 truncate">
                <Globe className="w-3.5 h-3.5 text-brand-orange shrink-0" />
                <span className="font-semibold text-brand-charcoal/70 dark:text-brand-cream/70 shrink-0">
                  Lien d'accès :
                </span>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-primary dark:text-emerald-400 font-bold hover:underline truncate"
                >
                  {project.liveUrl}
                </a>
              </div>
            )}
            {hasGithubLink && (
              <div className="flex items-center gap-2 truncate">
                <Github className="w-3.5 h-3.5 text-brand-secondary dark:text-emerald-400 shrink-0" />
                <span className="font-semibold text-brand-charcoal/70 dark:text-brand-cream/70 shrink-0">
                  Dépôt GitHub :
                </span>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-charcoal/85 dark:text-brand-cream/85 hover:underline truncate"
                >
                  {project.githubUrl?.replace('https://', '')}
                </a>
              </div>
            )}
          </div>
        )}

        {/* Actions / Lien GitHub configurable + Lien Démo en ligne */}
        <div className="mt-4 pt-2 flex flex-wrap items-center justify-between gap-3">
          {hasGithubLink ? (
            <div className="flex flex-wrap items-center gap-2.5 w-full">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold bg-brand-orange text-brand-charcoal hover:bg-brand-orange/90 transition-colors shadow-sm"
                >
                  <Globe className="w-4 h-4" />
                  <span>Ouvrir l'application déployée</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold bg-brand-primary text-brand-cream hover:bg-brand-secondary dark:bg-brand-secondary dark:hover:bg-brand-secondary/80 transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>Consulter le code source</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-80" />
              </a>
            </div>
          ) : (
            <div className="flex flex-wrap items-center justify-between w-full gap-2">
              <span
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold bg-brand-cream dark:bg-brand-darkBg text-brand-charcoal/70 dark:text-brand-cream/70 border border-brand-primary/12 dark:border-brand-darkBorder select-none"
                title="Le dépôt public de ce projet sera publié prochainement"
              >
                <Clock className="w-3.5 h-3.5 text-brand-orange" />
                <span>Code source bientôt disponible</span>
              </span>

              <a
                href={PROFILE_DATA.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-brand-primary dark:text-emerald-400 hover:underline"
              >
                <Github className="w-3.5 h-3.5" />
                <span>Profil GitHub</span>
              </a>
            </div>
          )}
        </div>
      </div>
    </article>
  );
};
