import React, { useState } from 'react';
import {
  Code2,
  DatabaseZap,
  HardDrive,
  Info,
  Layers,
  Wrench,
} from 'lucide-react';
import {
  SKILL_CATEGORIES,
  SKILL_LEVEL_LEGEND,
  SkillCategory,
  SkillProficiencyLevel,
} from '../data/portfolioData';
import { SectionHeading } from '../components/SectionHeading';

const CATEGORY_ICONS: Record<SkillCategory['iconName'], React.FC<{ className?: string }>> = {
  Code2,
  DatabaseZap,
  Layers,
  HardDrive,
  Wrench,
};

export const SkillsSection: React.FC = () => {
  const [selectedCategoryId, setSelectedCategoryId] = useState<string>('all');

  const displayedCategories =
    selectedCategoryId === 'all'
      ? SKILL_CATEGORIES
      : SKILL_CATEGORIES.filter((cat) => cat.id === selectedCategoryId);

  const renderLevelIndicator = (level: SkillProficiencyLevel) => {
    const activeBars = level === 'core' ? 3 : level === 'applied' ? 2 : 1;
    const barColor =
      level === 'core'
        ? 'bg-brand-primary dark:bg-emerald-400'
        : level === 'applied'
        ? 'bg-brand-secondary dark:bg-emerald-500'
        : 'bg-brand-orange';

    return (
      <div className="flex items-center gap-1" aria-hidden="true">
        {[1, 2, 3].map((step) => (
          <span
            key={step}
            className={`h-1.5 w-4 rounded-full transition-colors ${
              step <= activeBars
                ? barColor
                : 'bg-brand-primary/15 dark:bg-brand-cream/15'
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <section id="competences" className="py-20 sm:py-28 bg-brand-cream dark:bg-brand-darkBg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Stack Technique & Méthodologies"
          title="Compétences organisées par domaine d’expertise"
          subtitle="Une cartographie transparente et structurée de mes acquis académiques, de mes projets pratiques et des technologies que j’approfondis en Data Engineering et IA."
        />

        {/* Légende d'honnêteté professionnelle sur les niveaux de maîtrise */}
        <div className="mb-10 p-4 sm:p-5 rounded-2xl bg-brand-white dark:bg-brand-darkSurface border border-brand-primary/12 dark:border-brand-darkBorder shadow-soft">
          <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-brand-primary dark:text-emerald-400 mb-3">
            <Info className="w-4 h-4 text-brand-orange" />
            <span>Lecture transparente des niveaux de pratique</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {(
              Object.entries(SKILL_LEVEL_LEGEND) as [
                SkillProficiencyLevel,
                (typeof SKILL_LEVEL_LEGEND)[SkillProficiencyLevel]
              ][]
            ).map(([levelKey, info]) => (
              <div
                key={levelKey}
                className="flex items-start gap-3 p-3 rounded-xl bg-brand-cream/70 dark:bg-brand-darkBg/60 border border-brand-primary/10 dark:border-brand-darkBorder"
              >
                <div className="mt-1 shrink-0">{renderLevelIndicator(levelKey)}</div>
                <div>
                  <p className="text-xs font-bold text-brand-charcoal dark:text-brand-cream">
                    {info.badge}
                  </p>
                  <p className="text-[11px] text-brand-charcoal/70 dark:text-brand-cream/70 mt-0.5 leading-snug">
                    {info.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Filtres rapides par catégorie */}
        <div
          className="flex flex-wrap items-center gap-2 mb-10"
          role="tablist"
          aria-label="Filtrer les compétences par catégorie"
        >
          <button
            type="button"
            role="tab"
            aria-selected={selectedCategoryId === 'all'}
            onClick={() => setSelectedCategoryId('all')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
              selectedCategoryId === 'all'
                ? 'bg-brand-primary text-brand-cream shadow-sm dark:bg-brand-orange dark:text-brand-charcoal'
                : 'bg-brand-white dark:bg-brand-darkSurface text-brand-charcoal/80 dark:text-brand-cream/80 border border-brand-primary/12 dark:border-brand-darkBorder hover:border-brand-secondary'
            }`}
          >
            Toutes les catégories ({SKILL_CATEGORIES.length})
          </button>

          {SKILL_CATEGORIES.map((category) => {
            const isSelected = selectedCategoryId === category.id;
            return (
              <button
                key={category.id}
                type="button"
                role="tab"
                aria-selected={isSelected}
                onClick={() => setSelectedCategoryId(category.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                  isSelected
                    ? 'bg-brand-primary text-brand-cream shadow-sm dark:bg-brand-orange dark:text-brand-charcoal'
                    : 'bg-brand-white dark:bg-brand-darkSurface text-brand-charcoal/80 dark:text-brand-cream/80 border border-brand-primary/12 dark:border-brand-darkBorder hover:border-brand-secondary'
                }`}
              >
                {category.title}
              </button>
            );
          })}
        </div>

        {/* Cartes des catégories de compétences */}
        <div className="space-y-8">
          {displayedCategories.map((category) => {
            const IconComponent = CATEGORY_ICONS[category.iconName];
            return (
              <div
                key={category.id}
                className="rounded-2xl bg-brand-white dark:bg-brand-darkSurface border border-brand-primary/12 dark:border-brand-darkBorder p-6 sm:p-8 shadow-soft"
              >
                {/* En-tête de la catégorie */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-6 border-b border-brand-primary/10 dark:border-brand-darkBorder">
                  <div className="flex items-start sm:items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-brand-primary text-brand-cream flex items-center justify-center shrink-0 shadow-sm">
                      <IconComponent className="w-6 h-6 text-brand-orange" />
                    </div>
                    <div>
                      <h3 className="text-xl font-extrabold text-brand-charcoal dark:text-brand-cream">
                        {category.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-brand-charcoal/70 dark:text-brand-cream/70 mt-0.5">
                        {category.subtitle}
                      </p>
                    </div>
                  </div>
                  <span className="self-start sm:self-center px-3 py-1 rounded-full font-mono text-xs font-semibold bg-brand-cream dark:bg-brand-darkBg text-brand-primary dark:text-emerald-300 border border-brand-primary/15 dark:border-brand-darkBorder">
                    {category.skills.length} compétences
                  </span>
                </div>

                {/* Grille des compétences de cette catégorie */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {category.skills.map((skill) => {
                    const badgeStyle =
                      skill.level === 'core'
                        ? 'bg-brand-primary/10 text-brand-primary dark:bg-emerald-500/20 dark:text-emerald-300 border-brand-primary/20'
                        : skill.level === 'applied'
                        ? 'bg-brand-secondary/10 text-brand-secondary dark:bg-emerald-400/15 dark:text-emerald-200 border-brand-secondary/20'
                        : 'bg-brand-orange/15 text-brand-charcoal dark:text-brand-orange border-brand-orange/30';

                    return (
                      <div
                        key={skill.name}
                        className="group p-4 rounded-xl bg-brand-cream/60 dark:bg-brand-darkBg/70 border border-brand-primary/10 dark:border-brand-darkBorder hover:border-brand-secondary/50 transition-all duration-200 flex flex-col justify-between"
                      >
                        <div>
                          <div className="flex items-center justify-between gap-2 mb-2">
                            <h4 className="font-extrabold text-base text-brand-charcoal dark:text-brand-cream group-hover:text-brand-primary dark:group-hover:text-emerald-300 transition-colors">
                              {skill.name}
                            </h4>
                            {renderLevelIndicator(skill.level)}
                          </div>

                          <p className="text-xs text-brand-charcoal/75 dark:text-brand-cream/75 leading-relaxed">
                            {skill.context}
                          </p>
                        </div>

                        <div className="mt-3.5 pt-2.5 border-t border-brand-primary/10 dark:border-brand-darkBorder flex items-center justify-between">
                          <span
                            className={`inline-flex items-center px-2.5 py-0.5 rounded-md text-[11px] font-mono font-semibold border ${badgeStyle}`}
                          >
                            {skill.levelLabel}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
