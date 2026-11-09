import React from 'react';
import { ArrowRight, GraduationCap, Mail, MapPin, Sparkles, Terminal } from 'lucide-react';
import { PROFILE_DATA } from '../data/portfolioData';
import { DataNetworkGraphic } from '../assets/DataNetworkGraphic';

export const HeroSection: React.FC = () => {
  return (
    <section
      id="accueil"
      className="relative min-h-screen pt-28 pb-16 sm:pt-32 sm:pb-24 flex items-center bg-data-grid bg-radial-glow overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Colonne Texte & Appel à l'action (7 colonnes sur grand écran) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Badges de contexte académique et spécialisation */}
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold bg-brand-primary text-brand-cream shadow-sm">
                <GraduationCap className="w-3.5 h-3.5 text-brand-orange" />
                {PROFILE_DATA.degree} • UASZ
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono font-medium bg-brand-white dark:bg-brand-darkSurface text-brand-charcoal dark:text-brand-cream border border-brand-primary/15 dark:border-brand-darkBorder">
                <MapPin className="w-3.5 h-3.5 text-brand-secondary dark:text-emerald-400" />
                {PROFILE_DATA.locationDisplay}
              </span>
            </div>

            {/* Titre principal */}
            <div className="space-y-3">
              <p className="font-mono text-sm sm:text-base font-semibold text-brand-secondary dark:text-emerald-400 tracking-wide">
                {PROFILE_DATA.heroGreeting}
              </p>
              <h1 className="text-3xl sm:text-5xl lg:text-[52px] font-extrabold tracking-tight text-brand-charcoal dark:text-brand-cream leading-[1.12]">
                Développeuse Web &amp; Mobile{' '}
                <span className="text-brand-primary dark:text-emerald-400">|</span>{' '}
                <span className="bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-orange dark:from-emerald-300 dark:via-emerald-400 dark:to-brand-orange bg-clip-text text-transparent">
                  Passionnée par la Data et l&apos;Intelligence Artificielle
                </span>
              </h1>
            </div>

            {/* Courte présentation officielle */}
            <p className="text-base sm:text-lg text-brand-charcoal/85 dark:text-brand-cream/85 leading-relaxed max-w-2xl">
              {PROFILE_DATA.heroIntro}
            </p>

            {/* Slogan mis en valeur */}
            <div className="p-4 sm:p-5 rounded-2xl bg-brand-white/90 dark:bg-brand-darkSurface/90 border-l-4 border-brand-orange shadow-soft max-w-2xl">
              <div className="flex items-start gap-3">
                <Sparkles className="w-5 h-5 text-brand-orange shrink-0 mt-0.5" />
                <p className="text-sm sm:text-base font-bold text-brand-primary dark:text-brand-cream italic">
                  {PROFILE_DATA.slogan}
                </p>
              </div>
            </div>

            {/* Deux boutons d'action principaux */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="#projets"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl text-sm sm:text-base font-bold bg-brand-primary text-brand-cream hover:bg-brand-secondary dark:bg-brand-orange dark:text-brand-charcoal dark:hover:bg-brand-orange/90 transition-all duration-200 shadow-elevated hover:-translate-y-0.5"
              >
                <span>Découvrir mes projets</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl text-sm sm:text-base font-bold bg-brand-white dark:bg-brand-darkSurface text-brand-primary dark:text-brand-cream border-2 border-brand-primary/20 dark:border-brand-secondary hover:border-brand-primary dark:hover:border-brand-orange transition-all duration-200 hover:-translate-y-0.5"
              >
                <Mail className="w-4 h-4 text-brand-orange" />
                <span>Me contacter</span>
              </a>
            </div>

            {/* Domaines clés en pilules */}
            <div className="pt-4 flex flex-wrap items-center gap-2 text-xs text-brand-charcoal/75 dark:text-brand-cream/75">
              <span className="inline-flex items-center gap-1.5 font-mono font-semibold text-brand-primary dark:text-emerald-400 mr-1">
                <Terminal className="w-3.5 h-3.5" />
                Axes d&apos;intérêt :
              </span>
              {PROFILE_DATA.primaryInterests.map((interest) => (
                <span
                  key={interest}
                  className="px-2.5 py-1 rounded-lg bg-brand-primary/8 dark:bg-brand-secondary/25 text-brand-primary dark:text-brand-cream font-medium border border-brand-primary/10 dark:border-brand-secondary/30"
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>

          {/* Colonne Visuel Créatif Data, Réseaux de neurones & IA (5 colonnes sur grand écran) */}
          <div className="lg:col-span-5">
            <DataNetworkGraphic />
          </div>
        </div>
      </div>
    </section>
  );
};
