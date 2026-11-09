import React from 'react';
import {
  BrainCircuit,
  Code,
  Compass,
  Database,
  Globe,
  GraduationCap,
  MapPin,
  Target,
  Users,
} from 'lucide-react';
import { ABOUT_CONTENT, PROFILE_DATA, VERIFIABLE_METRICS } from '../data/portfolioData';
import { SectionHeading } from '../components/SectionHeading';

export const AboutSection: React.FC = () => {
  const pillarIcons = [Database, BrainCircuit, Code, Users];

  return (
    <section
      id="a-propos"
      className="py-20 sm:py-28 bg-brand-white dark:bg-brand-darkSurface border-y border-brand-primary/10 dark:border-brand-darkBorder"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge={ABOUT_CONTENT.sectionSubtitle}
          title={ABOUT_CONTENT.sectionTitle}
          subtitle="Allier la rigueur du génie logiciel à la puissance analytique de la Data et du Machine Learning pour concevoir des solutions utiles et durables."
        />

        {/* Grille principale : Profil / Ambition + Récit détaillé */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Carte d'identité professionnelle (5 colonnes) */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl bg-brand-cream dark:bg-brand-darkBg border border-brand-primary/15 dark:border-brand-darkBorder p-6 sm:p-7 shadow-soft space-y-6">
              {/* En-tête de la carte avec Avatar configurable ou Monogramme Ingénieure */}
              <div className="flex items-center gap-4">
                {PROFILE_DATA.avatarUrl ? (
                  <img
                    src={PROFILE_DATA.avatarUrl}
                    alt={`Portrait professionnel de ${PROFILE_DATA.fullName}`}
                    className="w-20 h-20 rounded-2xl object-cover border-2 border-brand-orange shadow-sm"
                  />
                ) : (
                  <div className="relative w-20 h-20 rounded-2xl bg-brand-primary text-brand-cream flex flex-col items-center justify-center font-extrabold text-2xl border-2 border-brand-secondary shadow-sm shrink-0">
                    <span>{PROFILE_DATA.initials}</span>
                    <span className="text-[10px] font-mono font-medium text-brand-orange tracking-wider">
                      DATA•IA
                    </span>
                  </div>
                )}

                <div>
                  <h3 className="text-xl font-extrabold text-brand-charcoal dark:text-brand-cream">
                    {PROFILE_DATA.fullName}
                  </h3>
                  <p className="text-sm font-semibold text-brand-secondary dark:text-emerald-400">
                    {PROFILE_DATA.role}
                  </p>
                  <p className="text-xs text-brand-charcoal/70 dark:text-brand-cream/70 mt-1 inline-flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-brand-orange" />
                    {PROFILE_DATA.locationDisplay}
                  </p>
                </div>
              </div>

              {/* Détails structurés du profil */}
              <div className="space-y-3 pt-2 border-t border-brand-primary/10 dark:border-brand-darkBorder text-sm">
                <div className="flex items-start gap-3">
                  <GraduationCap className="w-5 h-5 text-brand-primary dark:text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs font-mono uppercase tracking-wider text-brand-charcoal/60 dark:text-brand-cream/60 block">
                      Formation actuelle
                    </span>
                    <span className="font-bold text-brand-charcoal dark:text-brand-cream">
                      {PROFILE_DATA.degree} — UASZ
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Compass className="w-5 h-5 text-brand-secondary dark:text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs font-mono uppercase tracking-wider text-brand-charcoal/60 dark:text-brand-cream/60 block">
                      Spécialisation visée
                    </span>
                    <span className="font-bold text-brand-charcoal dark:text-brand-cream">
                      Data Engineering, Data Science, IA &amp; Machine Learning
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Target className="w-5 h-5 text-brand-orange shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs font-mono uppercase tracking-wider text-brand-charcoal/60 dark:text-brand-cream/60 block">
                      Objectif professionnel
                    </span>
                    <span className="font-bold text-brand-charcoal dark:text-brand-cream">
                      {PROFILE_DATA.careerGoal}
                    </span>
                  </div>
                </div>
              </div>

              {/* Domaines complémentaires */}
              <div className="pt-3 border-t border-brand-primary/10 dark:border-brand-darkBorder">
                <span className="text-xs font-mono uppercase tracking-wider text-brand-charcoal/60 dark:text-brand-cream/60 block mb-2.5">
                  Autres domaines de compétences
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {PROFILE_DATA.secondaryInterests.map((domain) => (
                    <span
                      key={domain}
                      className="px-3 py-1 rounded-lg text-xs font-semibold bg-brand-white dark:bg-brand-darkSurface text-brand-charcoal dark:text-brand-cream border border-brand-primary/15 dark:border-brand-darkBorder"
                    >
                      {domain}
                    </span>
                  ))}
                </div>
              </div>

              {/* Langues parlées (issues du CV officiel) */}
              <div className="pt-3 border-t border-brand-primary/10 dark:border-brand-darkBorder">
                <span className="text-xs font-mono uppercase tracking-wider text-brand-charcoal/60 dark:text-brand-cream/60 flex items-center gap-1.5 mb-2.5">
                  <Globe className="w-3.5 h-3.5 text-brand-orange" />
                  Langues
                </span>
                <div className="grid grid-cols-3 gap-2">
                  {PROFILE_DATA.languages.map((item) => (
                    <div
                      key={item.language}
                      className="p-2.5 rounded-xl bg-brand-white dark:bg-brand-darkSurface border border-brand-primary/12 dark:border-brand-darkBorder text-center"
                    >
                      <p className="text-xs font-bold text-brand-charcoal dark:text-brand-cream">
                        {item.language}
                      </p>
                      <p className="text-[11px] text-brand-charcoal/65 dark:text-brand-cream/65 mt-0.5">
                        {item.level}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Présentation narrative & Piliers (7 colonnes) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-4 text-base text-brand-charcoal/85 dark:text-brand-cream/85 leading-relaxed">
              {ABOUT_CONTENT.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            {/* 4 Piliers d'approche */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {ABOUT_CONTENT.pillars.map((pillar, index) => {
                const IconComponent = pillarIcons[index % pillarIcons.length];
                return (
                  <div
                    key={pillar.title}
                    className="p-5 rounded-2xl bg-brand-cream/70 dark:bg-brand-darkBg/80 border border-brand-primary/10 dark:border-brand-darkBorder hover:border-brand-secondary/50 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-xl bg-brand-primary text-brand-cream flex items-center justify-center mb-3">
                      <IconComponent className="w-5 h-5 text-brand-orange" />
                    </div>
                    <h4 className="font-bold text-base text-brand-charcoal dark:text-brand-cream">
                      {pillar.title}
                    </h4>
                    <p className="mt-1.5 text-xs sm:text-sm text-brand-charcoal/75 dark:text-brand-cream/75 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Repères factuels et vérifiables */}
        <div className="mt-14 pt-10 border-t border-brand-primary/10 dark:border-brand-darkBorder">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {VERIFIABLE_METRICS.map((metric) => (
              <div
                key={metric.label}
                className="p-5 rounded-2xl bg-brand-cream dark:bg-brand-darkBg border border-brand-primary/12 dark:border-brand-darkBorder flex flex-col justify-between"
              >
                <span className="font-mono text-2xl sm:text-3xl font-extrabold text-brand-primary dark:text-brand-orange">
                  {metric.value}
                </span>
                <div className="mt-2">
                  <p className="font-bold text-sm text-brand-charcoal dark:text-brand-cream">
                    {metric.label}
                  </p>
                  <p className="text-xs text-brand-charcoal/70 dark:text-brand-cream/70 mt-0.5">
                    {metric.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
