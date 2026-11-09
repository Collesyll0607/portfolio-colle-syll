import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import { NAV_ITEMS, PROFILE_DATA } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-primary text-brand-cream border-t border-brand-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-10 border-b border-brand-secondary/40">
          {/* Colonne Identité & Slogan */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-brand-secondary text-brand-cream flex items-center justify-center font-extrabold text-base border border-brand-cream/20">
                {PROFILE_DATA.initials}
              </div>
              <div>
                <p className="font-extrabold text-lg text-brand-cream">
                  {PROFILE_DATA.fullName}
                </p>
                <p className="text-xs font-mono text-brand-cream/75">
                  {PROFILE_DATA.role} • Data &amp; Intelligence Artificielle
                </p>
              </div>
            </div>

            <blockquote className="text-sm sm:text-base italic text-brand-cream/90 border-l-2 border-brand-orange pl-3.5 max-w-lg">
              {PROFILE_DATA.slogan}
            </blockquote>

            <div className="flex items-center gap-2 text-xs text-brand-cream/75">
              <MapPin className="w-4 h-4 text-brand-orange shrink-0" />
              <span>
                {PROFILE_DATA.university} — {PROFILE_DATA.locationDisplay}
              </span>
            </div>
          </div>

          {/* Colonne Navigation rapide */}
          <div className="md:col-span-3 space-y-3">
            <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-brand-orange">
              Navigation
            </h3>
            <ul className="space-y-2 text-sm">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-brand-cream/80 hover:text-brand-orange transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#formations"
                  className="text-brand-cream/80 hover:text-brand-orange transition-colors"
                >
                  Formation &amp; Certifications
                </a>
              </li>
            </ul>
          </div>

          {/* Colonne Coordonnées */}
          <div className="md:col-span-3 space-y-3">
            <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-brand-orange">
              Réseaux &amp; Contact
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href={`mailto:${PROFILE_DATA.contact.email}`}
                  className="inline-flex items-center gap-2 text-brand-cream/85 hover:text-brand-orange transition-colors break-all"
                >
                  <Mail className="w-4 h-4 text-brand-orange shrink-0" />
                  <span>{PROFILE_DATA.contact.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={PROFILE_DATA.contact.phoneHref}
                  className="inline-flex items-center gap-2 text-brand-cream/85 hover:text-brand-orange transition-colors"
                >
                  <Phone className="w-4 h-4 text-brand-orange shrink-0" />
                  <span>{PROFILE_DATA.contact.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={PROFILE_DATA.contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-brand-cream/85 hover:text-brand-orange transition-colors"
                >
                  <Github className="w-4 h-4 text-brand-orange shrink-0" />
                  <span>GitHub ({PROFILE_DATA.contact.githubHandle})</span>
                </a>
              </li>
              {PROFILE_DATA.contact.linkedin ? (
                <li>
                  <a
                    href={PROFILE_DATA.contact.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-brand-cream/85 hover:text-brand-orange transition-colors"
                  >
                    <Linkedin className="w-4 h-4 text-brand-orange shrink-0" />
                    <span>LinkedIn</span>
                  </a>
                </li>
              ) : (
                <li className="inline-flex items-center gap-2 text-brand-cream/60 text-xs">
                  <Linkedin className="w-4 h-4 text-brand-orange/70 shrink-0" />
                  <span>LinkedIn (configurable dans portfolioData.ts)</span>
                </li>
              )}
            </ul>
          </div>
        </div>

        {/* Bas de pied de page */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-brand-cream/70">
          <p>
            © {currentYear} {PROFILE_DATA.fullName}. Conçu avec rigueur pour l’Ingénierie
            Informatique, la Data et l’IA.
          </p>

          <a
            href="#accueil"
            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-brand-secondary/60 hover:bg-brand-secondary text-brand-cream font-semibold transition-colors"
            aria-label="Retourner en haut de la page"
          >
            <span>Haut de page</span>
            <ArrowUp className="w-3.5 h-3.5 text-brand-orange" />
          </a>
        </div>
      </div>
    </footer>
  );
};
