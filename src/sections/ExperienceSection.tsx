import React from 'react';
import {
  Award,
  BookOpen,
  CheckCircle2,
  Clock,
  GraduationCap,
  MapPin,
  Sparkles,
  Users,
} from 'lucide-react';
import { EDUCATION_DATA, EXPERIENCES_DATA } from '../data/portfolioData';
import { SectionHeading } from '../components/SectionHeading';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experiences" className="py-20 sm:py-28 bg-brand-cream dark:bg-brand-darkBg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        {/* SOUS-SECTION F : ENGAGEMENT & EXPÉRIENCES */}
        <div>
          <SectionHeading
            badge="Engagement Communautaire & Leadership"
            title="Implication au sein de l’écosystème Intelligence Artificielle"
            subtitle="Au-delà de la technique, je m’investis activement pour promouvoir le partage de connaissances, l’inclusion des femmes dans la Tech et la réussite de projets collectifs."
          />

          <div className="space-y-6">
            {EXPERIENCES_DATA.map((exp) => (
              <div
                key={exp.id}
                className="rounded-2xl bg-brand-white dark:bg-brand-darkSurface border border-brand-primary/15 dark:border-brand-darkBorder p-6 sm:p-9 shadow-soft"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  {/* Colonne Gauche : Rôle & Organisation */}
                  <div className="lg:col-span-5 space-y-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-brand-orange/15 text-brand-charcoal dark:text-brand-orange border border-brand-orange/30">
                      <Users className="w-3.5 h-3.5 text-brand-orange" />
                      <span>{exp.period}</span>
                    </div>

                    <div>
                      <h3 className="text-xl sm:text-2xl font-extrabold text-brand-charcoal dark:text-brand-cream leading-snug">
                        {exp.role}
                      </h3>
                      <p className="mt-1 text-base font-bold text-brand-primary dark:text-emerald-400">
                        {exp.organization}
                      </p>
                      <p className="mt-1 text-xs text-brand-charcoal/70 dark:text-brand-cream/70 inline-flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-brand-orange shrink-0" />
                        <span>{exp.location}</span>
                      </p>
                    </div>

                    {/* Compétences humaines et transversales développées */}
                    <div className="pt-4 border-t border-brand-primary/10 dark:border-brand-darkBorder">
                      <p className="font-mono text-xs font-bold uppercase tracking-wider text-brand-secondary dark:text-emerald-400 mb-3">
                        Compétences développées
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {exp.skillsDeveloped.map((skill) => (
                          <span
                            key={skill}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold bg-brand-primary text-brand-cream dark:bg-brand-secondary"
                          >
                            <Sparkles className="w-3 h-3 text-brand-orange shrink-0" />
                            <span>{skill}</span>
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Colonne Droite : Description & Missions */}
                  <div className="lg:col-span-7 space-y-5">
                    <div className="p-4 sm:p-5 rounded-xl bg-brand-cream/80 dark:bg-brand-darkBg/80 border border-brand-primary/10 dark:border-brand-darkBorder">
                      <p className="text-sm sm:text-base text-brand-charcoal/90 dark:text-brand-cream/90 leading-relaxed font-medium">
                        {exp.description}
                      </p>
                    </div>

                    <div className="space-y-3">
                      <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-brand-charcoal/70 dark:text-brand-cream/70">
                        Actions &amp; Responsabilités clés
                      </h4>
                      <ul className="space-y-2.5">
                        {exp.missions.map((mission) => (
                          <li
                            key={mission}
                            className="flex items-start gap-3 text-sm text-brand-charcoal/85 dark:text-brand-cream/85 leading-relaxed"
                          >
                            <CheckCircle2 className="w-4 h-4 text-brand-secondary dark:text-emerald-400 shrink-0 mt-1" />
                            <span>{mission}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SOUS-SECTION G : FORMATION ET CERTIFICATIONS */}
        <div id="formations" className="scroll-mt-24">
          <SectionHeading
            badge="Cursus Académique & Spécialisation"
            title="Formation et parcours certifiant"
            subtitle="Un socle universitaire solide en ingénierie informatique complété par une spécialisation ciblée en ingénierie des données."
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {EDUCATION_DATA.map((edu) => {
              const isPendingCert = edu.statusType === 'completed-pending-cert';
              const isCompleted = edu.statusType === 'completed';
              return (
                <div
                  key={edu.id}
                  className="flex flex-col justify-between rounded-2xl bg-brand-white dark:bg-brand-darkSurface border border-brand-primary/15 dark:border-brand-darkBorder p-6 sm:p-7 shadow-soft"
                >
                  <div>
                    {/* En-tête : Icône + Statut vérifiable */}
                    <div className="flex flex-wrap items-center justify-between gap-2.5 mb-5">
                      <div className="w-11 h-11 rounded-2xl bg-brand-primary text-brand-cream flex items-center justify-center shadow-sm shrink-0">
                        {isPendingCert ? (
                          <Award className="w-5 h-5 text-brand-orange" />
                        ) : (
                          <GraduationCap className="w-5 h-5 text-brand-orange" />
                        )}
                      </div>

                      <span
                        className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-mono font-semibold border ${
                          isPendingCert
                            ? 'bg-brand-orange/15 text-brand-charcoal dark:text-brand-orange border-brand-orange/35'
                            : isCompleted
                            ? 'bg-brand-secondary/15 text-brand-secondary dark:text-emerald-300 border-brand-secondary/30'
                            : 'bg-brand-primary/10 text-brand-primary dark:bg-emerald-500/20 dark:text-emerald-300 border-brand-primary/20'
                        }`}
                      >
                        {isCompleted ? (
                          <CheckCircle2 className="w-3.5 h-3.5 text-brand-secondary dark:text-emerald-400 shrink-0" />
                        ) : (
                          <Clock className="w-3.5 h-3.5 text-brand-orange shrink-0" />
                        )}
                        <span>{edu.status}</span>
                      </span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-extrabold text-brand-charcoal dark:text-brand-cream leading-snug">
                      {edu.title}
                    </h3>
                    <p className="mt-1 text-sm font-bold text-brand-secondary dark:text-emerald-400">
                      {edu.institution}
                    </p>
                    <p className="mt-1 text-xs text-brand-charcoal/65 dark:text-brand-cream/65 inline-flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-brand-orange" />
                      <span>{edu.location}</span>
                    </p>

                    <p className="mt-4 text-sm text-brand-charcoal/80 dark:text-brand-cream/80 leading-relaxed">
                      {edu.description}
                    </p>
                  </div>

                  {/* Modules / Domaines étudiés */}
                  <div className="mt-6 pt-4 border-t border-brand-primary/10 dark:border-brand-darkBorder">
                    <div className="flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-brand-charcoal/65 dark:text-brand-cream/65 mb-2.5">
                      <BookOpen className="w-3.5 h-3.5 text-brand-orange" />
                      <span>Enseignements &amp; Modules clés</span>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {edu.focusAreas.map((area) => (
                        <span
                          key={area}
                          className="px-2.5 py-1 rounded-lg text-xs font-medium bg-brand-cream dark:bg-brand-darkBg text-brand-charcoal dark:text-brand-cream border border-brand-primary/12 dark:border-brand-darkBorder"
                        >
                          {area}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
