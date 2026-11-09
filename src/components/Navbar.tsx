import React, { useEffect, useState } from 'react';
import { Download, Menu, Moon, Sun, X } from 'lucide-react';
import { NAV_ITEMS, PROFILE_DATA } from '../data/portfolioData';

interface NavbarProps {
  isDark: boolean;
  onToggleTheme: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ isDark, onToggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('#accueil');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sectionIds = NAV_ITEMS.map((item) => item.href.replace('#', ''));
      const scrollPosition = window.scrollY + 160;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const element = document.getElementById(sectionIds[i]);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(`#${sectionIds[i]}`);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setActiveSection(href);
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-brand-cream/90 dark:bg-brand-darkBg/90 backdrop-blur-md border-b border-brand-primary/10 dark:border-brand-darkBorder shadow-soft py-3'
          : 'bg-transparent py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav
          className="flex items-center justify-between"
          aria-label="Navigation principale"
        >
          {/* Logo typographique CS + Nom */}
          <a
            href="#accueil"
            onClick={() => handleNavClick('#accueil')}
            className="group flex items-center gap-3 focus:outline-none"
          >
            <div className="relative w-10 h-10 rounded-xl bg-brand-primary text-brand-cream flex items-center justify-center font-extrabold text-base tracking-tight shadow-sm group-hover:bg-brand-secondary transition-colors">
              <span>{PROFILE_DATA.initials}</span>
              <span
                aria-hidden="true"
                className="absolute top-1.5 right-1.5 w-1.5 h-1.5 rounded-full bg-brand-orange"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-base tracking-tight text-brand-charcoal dark:text-brand-cream group-hover:text-brand-primary dark:group-hover:text-emerald-300 transition-colors">
                {PROFILE_DATA.fullName}
              </span>
              <span className="font-mono text-[11px] text-brand-charcoal/65 dark:text-brand-cream/65">
                Data • IA • Full-Stack
              </span>
            </div>
          </a>

          {/* Liens de navigation Desktop */}
          <ul className="hidden lg:flex items-center gap-1 bg-brand-white/80 dark:bg-brand-darkSurface/80 px-2 py-1.5 rounded-full border border-brand-primary/10 dark:border-brand-darkBorder backdrop-blur-sm">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.href;
              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => handleNavClick(item.href)}
                    className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-all duration-200 ${
                      isActive
                        ? 'bg-brand-primary text-brand-cream shadow-sm dark:bg-brand-secondary'
                        : 'text-brand-charcoal/80 dark:text-brand-cream/80 hover:text-brand-primary dark:hover:text-brand-cream hover:bg-brand-primary/5 dark:hover:bg-brand-white/5'
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Actions Desktop : Thème + Télécharger mon CV */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              type="button"
              onClick={onToggleTheme}
              aria-label={isDark ? 'Activer le mode clair' : 'Activer le mode sombre'}
              title={isDark ? 'Mode clair' : 'Mode sombre'}
              className="p-2.5 rounded-xl border border-brand-primary/15 dark:border-brand-darkBorder bg-brand-white dark:bg-brand-darkSurface text-brand-charcoal dark:text-brand-cream hover:border-brand-secondary transition-colors"
            >
              {isDark ? (
                <Sun className="w-4 h-4 text-brand-orange" />
              ) : (
                <Moon className="w-4 h-4 text-brand-primary" />
              )}
            </button>

            <a
              href={PROFILE_DATA.cvUrl}
              download={PROFILE_DATA.cvFileName}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-bold bg-brand-primary text-brand-cream hover:bg-brand-secondary dark:bg-brand-orange dark:text-brand-charcoal dark:hover:bg-brand-orange/90 transition-all duration-200 shadow-sm hover:shadow-glow-green"
            >
              <Download className="w-4 h-4" />
              <span>Télécharger mon CV</span>
            </a>
          </div>

          {/* Boutons Mobile */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              type="button"
              onClick={onToggleTheme}
              aria-label={isDark ? 'Activer le mode clair' : 'Activer le mode sombre'}
              className="p-2.5 rounded-xl border border-brand-primary/15 dark:border-brand-darkBorder bg-brand-white dark:bg-brand-darkSurface text-brand-charcoal dark:text-brand-cream"
            >
              {isDark ? (
                <Sun className="w-4 h-4 text-brand-orange" />
              ) : (
                <Moon className="w-4 h-4 text-brand-primary" />
              )}
            </button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-expanded={mobileMenuOpen}
              aria-label="Ouvrir ou fermer le menu de navigation"
              className="p-2.5 rounded-xl border border-brand-primary/15 dark:border-brand-darkBorder bg-brand-white dark:bg-brand-darkSurface text-brand-charcoal dark:text-brand-cream"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>

        {/* Menu Mobile Déroulant */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 p-4 rounded-2xl bg-brand-white dark:bg-brand-darkSurface border border-brand-primary/15 dark:border-brand-darkBorder shadow-elevated">
            <ul className="flex flex-col gap-1">
              {NAV_ITEMS.map((item) => {
                const isActive = activeSection === item.href;
                return (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      onClick={() => handleNavClick(item.href)}
                      className={`block px-4 py-2.5 rounded-xl text-sm font-semibold transition-colors ${
                        isActive
                          ? 'bg-brand-primary text-brand-cream dark:bg-brand-secondary'
                          : 'text-brand-charcoal dark:text-brand-cream hover:bg-brand-primary/5 dark:hover:bg-brand-white/5'
                      }`}
                    >
                      {item.label}
                    </a>
                  </li>
                );
              })}
            </ul>

            <div className="mt-4 pt-3 border-t border-brand-primary/10 dark:border-brand-darkBorder">
              <a
                href={PROFILE_DATA.cvUrl}
                download={PROFILE_DATA.cvFileName}
                onClick={() => setMobileMenuOpen(false)}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-bold bg-brand-primary text-brand-cream hover:bg-brand-secondary dark:bg-brand-orange dark:text-brand-charcoal transition-colors"
              >
                <Download className="w-4 h-4" />
                <span>Télécharger mon CV</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
