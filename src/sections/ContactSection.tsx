import React, { useState } from 'react';
import {
  AlertCircle,
  Check,
  CheckCircle2,
  Copy,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
} from 'lucide-react';
import { PROFILE_DATA } from '../data/portfolioData';
import { SectionHeading } from '../components/SectionHeading';

interface ContactFormValues {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface ContactFormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export const ContactSection: React.FC = () => {
  const [formValues, setFormValues] = useState<ContactFormValues>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [submittedPayload, setSubmittedPayload] = useState<ContactFormValues | null>(null);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPayload, setCopiedPayload] = useState(false);

  const validate = (values: ContactFormValues): ContactFormErrors => {
    const newErrors: ContactFormErrors = {};

    if (!values.name.trim() || values.name.trim().length < 2) {
      newErrors.name = 'Veuillez renseigner votre nom complet (au moins 2 caractères).';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!values.email.trim()) {
      newErrors.email = 'Veuillez renseigner votre adresse email.';
    } else if (!emailRegex.test(values.email.trim())) {
      newErrors.email = 'Veuillez saisir une adresse email valide (ex. nom@domaine.com).';
    }

    if (!values.subject.trim() || values.subject.trim().length < 3) {
      newErrors.subject = 'Veuillez préciser le sujet de votre message (au moins 3 caractères).';
    }

    if (!values.message.trim() || values.message.trim().length < 15) {
      newErrors.message = 'Votre message doit contenir au moins 15 caractères.';
    }

    return newErrors;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof ContactFormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationErrors = validate(formValues);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSubmittedPayload(null);
      return;
    }

    setErrors({});
    setSubmittedPayload({
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      subject: formValues.subject.trim(),
      message: formValues.message.trim(),
    });
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PROFILE_DATA.contact.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    } catch {
      // Fallback silencieux
    }
  };

  const buildMailtoHref = (payload: ContactFormValues) => {
    const subject = encodeURIComponent(`[Portfolio Collé Syll] ${payload.subject}`);
    const body = encodeURIComponent(
      `Bonjour Collé,\n\n${payload.message}\n\n---\nDe : ${payload.name}\nEmail : ${payload.email}`
    );
    return `mailto:${PROFILE_DATA.contact.email}?subject=${subject}&body=${body}`;
  };

  const handleCopyFormattedMessage = async (payload: ContactFormValues) => {
    const formatted = `Destinataire : ${PROFILE_DATA.contact.email}\nSujet : ${payload.subject}\nDe : ${payload.name} (${payload.email})\n\n${payload.message}`;
    try {
      await navigator.clipboard.writeText(formatted);
      setCopiedPayload(true);
      setTimeout(() => setCopiedPayload(false), 2500);
    } catch {
      // Fallback silencieux
    }
  };

  return (
    <section
      id="contact"
      className="py-20 sm:py-28 bg-brand-white dark:bg-brand-darkSurface border-t border-brand-primary/10 dark:border-brand-darkBorder"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Échangeons"
          title="Discutons de vos projets Data, IA ou Développement"
          subtitle="Disponible pour échanger autour d’opportunités de stage, d’intégration en filière Data/IA, de projets collaboratifs ou de développement d’applications."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Colonne Coordonnées Directes (5 colonnes) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-2xl bg-brand-primary text-brand-cream p-6 sm:p-8 shadow-elevated space-y-6">
              <div>
                <span className="font-mono text-xs uppercase tracking-wider text-brand-orange font-bold">
                  Coordonnées directes
                </span>
                <h3 className="mt-1 text-2xl font-extrabold">
                  Contacter {PROFILE_DATA.fullName}
                </h3>
                <p className="mt-2 text-sm text-brand-cream/80 leading-relaxed">
                  N’hésitez pas à m’écrire par email, à me joindre par téléphone ou à consulter mes
                  travaux sur GitHub.
                </p>
              </div>

              <div className="space-y-3.5 pt-2 border-t border-brand-secondary/50">
                {/* Email */}
                <div className="p-3.5 rounded-xl bg-brand-secondary/40 border border-brand-cream/10 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-10 h-10 rounded-xl bg-brand-orange text-brand-charcoal flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div className="min-w-0">
                      <span className="text-[11px] font-mono uppercase tracking-wider text-brand-cream/70 block">
                        Email
                      </span>
                      <a
                        href={`mailto:${PROFILE_DATA.contact.email}`}
                        className="text-sm font-bold text-brand-cream hover:text-brand-orange transition-colors truncate block"
                      >
                        {PROFILE_DATA.contact.email}
                      </a>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="px-2.5 py-1.5 rounded-lg bg-brand-primary/70 hover:bg-brand-primary text-xs font-mono font-semibold text-brand-cream inline-flex items-center gap-1 shrink-0 transition-colors"
                    title="Copier l'adresse email"
                  >
                    {copiedEmail ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-brand-orange" />
                        <span>Copié</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copier</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Téléphone */}
                <a
                  href={PROFILE_DATA.contact.phoneHref}
                  className="p-3.5 rounded-xl bg-brand-secondary/40 hover:bg-brand-secondary/60 border border-brand-cream/10 flex items-center justify-between gap-3 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-brand-primary text-brand-cream flex items-center justify-center shrink-0 border border-brand-cream/15">
                      <Phone className="w-5 h-5 text-brand-orange" />
                    </div>
                    <div>
                      <span className="text-[11px] font-mono uppercase tracking-wider text-brand-cream/70 block">
                        Téléphone
                      </span>
                      <span className="text-sm font-bold text-brand-cream">
                        {PROFILE_DATA.contact.phone}
                      </span>
                    </div>
                  </div>
                </a>

                {/* GitHub */}
                <a
                  href={PROFILE_DATA.contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl bg-brand-secondary/40 hover:bg-brand-secondary/60 border border-brand-cream/10 flex items-center justify-between gap-3 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-brand-primary text-brand-cream flex items-center justify-center shrink-0 border border-brand-cream/15">
                      <Github className="w-5 h-5 text-brand-orange" />
                    </div>
                    <div>
                      <span className="text-[11px] font-mono uppercase tracking-wider text-brand-cream/70 block">
                        GitHub
                      </span>
                      <span className="text-sm font-bold text-brand-cream">
                        github.com/Collesyll0607
                      </span>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-brand-orange shrink-0" />
                </a>

                {/* LinkedIn (configurable) */}
                {PROFILE_DATA.contact.linkedin ? (
                  <a
                    href={PROFILE_DATA.contact.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3.5 rounded-xl bg-brand-secondary/40 hover:bg-brand-secondary/60 border border-brand-cream/10 flex items-center justify-between gap-3 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-brand-primary text-brand-cream flex items-center justify-center shrink-0 border border-brand-cream/15">
                        <Linkedin className="w-5 h-5 text-brand-orange" />
                      </div>
                      <div>
                        <span className="text-[11px] font-mono uppercase tracking-wider text-brand-cream/70 block">
                          LinkedIn
                        </span>
                        <span className="text-sm font-bold text-brand-cream">
                          Profil LinkedIn
                        </span>
                      </div>
                    </div>
                    <ExternalLink className="w-4 h-4 text-brand-orange shrink-0" />
                  </a>
                ) : (
                  <div className="p-3.5 rounded-xl bg-brand-secondary/25 border border-brand-cream/10 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-brand-primary/70 text-brand-cream flex items-center justify-center shrink-0">
                      <Linkedin className="w-5 h-5 text-brand-orange/80" />
                    </div>
                    <div>
                      <span className="text-[11px] font-mono uppercase tracking-wider text-brand-cream/70 block">
                        LinkedIn
                      </span>
                      <span className="text-xs text-brand-cream/80">
                        Profil LinkedIn (lien configurable dans{' '}
                        <code className="font-mono text-brand-orange">portfolioData.ts</code>)
                      </span>
                    </div>
                  </div>
                )}

                {/* Localisation */}
                <div className="p-3.5 rounded-xl bg-brand-secondary/25 border border-brand-cream/10 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-brand-primary/70 text-brand-cream flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-brand-orange" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-brand-cream/70 block">
                      Localisation
                    </span>
                    <span className="text-sm font-bold text-brand-cream">
                      {PROFILE_DATA.contact.location}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Colonne Formulaire de Contact avec validation (7 colonnes) */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-brand-cream dark:bg-brand-darkBg border border-brand-primary/15 dark:border-brand-darkBorder p-6 sm:p-8 shadow-soft">
              <h3 className="text-xl font-extrabold text-brand-charcoal dark:text-brand-cream mb-1">
                Préparer un message
              </h3>
              <p className="text-xs sm:text-sm text-brand-charcoal/70 dark:text-brand-cream/70 mb-6">
                Remplissez les champs ci-dessous : après validation, vous pourrez envoyer votre
                message directement via votre client mail ou le copier en un clic.
              </p>

              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Nom */}
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-xs font-mono font-bold uppercase tracking-wider text-brand-charcoal dark:text-brand-cream mb-2"
                    >
                      Nom complet <span className="text-brand-orange">*</span>
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      value={formValues.name}
                      onChange={handleChange}
                      placeholder="Ex. Aminata Diallo"
                      className={`w-full px-4 py-3 rounded-xl text-sm bg-brand-white dark:bg-brand-darkSurface text-brand-charcoal dark:text-brand-cream border transition-colors focus:outline-none ${
                        errors.name
                          ? 'border-red-500 focus:border-red-500'
                          : 'border-brand-primary/20 dark:border-brand-darkBorder focus:border-brand-primary dark:focus:border-brand-orange'
                      }`}
                    />
                    {errors.name && (
                      <p className="mt-1.5 text-xs text-red-600 dark:text-red-400 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.name}</span>
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-xs font-mono font-bold uppercase tracking-wider text-brand-charcoal dark:text-brand-cream mb-2"
                    >
                      Adresse email <span className="text-brand-orange">*</span>
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      value={formValues.email}
                      onChange={handleChange}
                      placeholder="Ex. contact@entreprise.com"
                      className={`w-full px-4 py-3 rounded-xl text-sm bg-brand-white dark:bg-brand-darkSurface text-brand-charcoal dark:text-brand-cream border transition-colors focus:outline-none ${
                        errors.email
                          ? 'border-red-500 focus:border-red-500'
                          : 'border-brand-primary/20 dark:border-brand-darkBorder focus:border-brand-primary dark:focus:border-brand-orange'
                      }`}
                    />
                    {errors.email && (
                      <p className="mt-1.5 text-xs text-red-600 dark:text-red-400 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>
                </div>

                {/* Sujet */}
                <div>
                  <label
                    htmlFor="contact-subject"
                    className="block text-xs font-mono font-bold uppercase tracking-wider text-brand-charcoal dark:text-brand-cream mb-2"
                  >
                    Sujet <span className="text-brand-orange">*</span>
                  </label>
                  <input
                    id="contact-subject"
                    name="subject"
                    type="text"
                    value={formValues.subject}
                    onChange={handleChange}
                    placeholder="Ex. Proposition de stage Data Engineering / Collaboration IA"
                    className={`w-full px-4 py-3 rounded-xl text-sm bg-brand-white dark:bg-brand-darkSurface text-brand-charcoal dark:text-brand-cream border transition-colors focus:outline-none ${
                      errors.subject
                        ? 'border-red-500 focus:border-red-500'
                        : 'border-brand-primary/20 dark:border-brand-darkBorder focus:border-brand-primary dark:focus:border-brand-orange'
                    }`}
                  />
                  {errors.subject && (
                    <p className="mt-1.5 text-xs text-red-600 dark:text-red-400 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>{errors.subject}</span>
                    </p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-mono font-bold uppercase tracking-wider text-brand-charcoal dark:text-brand-cream mb-2"
                  >
                    Message <span className="text-brand-orange">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={5}
                    value={formValues.message}
                    onChange={handleChange}
                    placeholder="Bonjour Collé, je souhaiterais échanger avec vous concernant..."
                    className={`w-full px-4 py-3 rounded-xl text-sm bg-brand-white dark:bg-brand-darkSurface text-brand-charcoal dark:text-brand-cream border transition-colors focus:outline-none resize-y ${
                      errors.message
                        ? 'border-red-500 focus:border-red-500'
                        : 'border-brand-primary/20 dark:border-brand-darkBorder focus:border-brand-primary dark:focus:border-brand-orange'
                    }`}
                  />
                  {errors.message && (
                    <p className="mt-1.5 text-xs text-red-600 dark:text-red-400 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>{errors.message}</span>
                    </p>
                  )}
                </div>

                <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold bg-brand-primary text-brand-cream hover:bg-brand-secondary dark:bg-brand-orange dark:text-brand-charcoal dark:hover:bg-brand-orange/90 transition-all shadow-sm"
                  >
                    <Send className="w-4 h-4" />
                    <span>Valider et préparer l’envoi</span>
                  </button>

                  <span className="text-[11px] text-brand-charcoal/65 dark:text-brand-cream/65">
                    Fonctionnement local sans serveur tiers • Envoi direct vers{' '}
                    <strong className="font-mono">{PROFILE_DATA.contact.email}</strong>
                  </span>
                </div>
              </form>

              {/* Panneau de retour clair et honnête après validation du formulaire */}
              {submittedPayload && (
                <div
                  role="status"
                  aria-live="polite"
                  className="mt-6 p-5 rounded-2xl bg-brand-white dark:bg-brand-darkSurface border-2 border-brand-secondary dark:border-emerald-500/60 space-y-4 shadow-soft"
                >
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-brand-secondary dark:text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm sm:text-base font-extrabold text-brand-charcoal dark:text-brand-cream">
                        Message validé et prêt à être transmis
                      </h4>
                      <p className="text-xs text-brand-charcoal/75 dark:text-brand-cream/75 mt-1 leading-relaxed">
                        Ce portfolio statique n’utilise aucun service d’envoi externe afin de
                        garantir la confidentialité de vos données. Cliquez ci-dessous pour ouvrir
                        votre messagerie avec le message pré-rempli ou copiez-le directement :
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 pt-1">
                    <a
                      href={buildMailtoHref(submittedPayload)}
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold bg-brand-primary text-brand-cream hover:bg-brand-secondary dark:bg-brand-orange dark:text-brand-charcoal transition-colors"
                    >
                      <Mail className="w-4 h-4" />
                      <span>Ouvrir dans mon application mail</span>
                    </a>

                    <button
                      type="button"
                      onClick={() => handleCopyFormattedMessage(submittedPayload)}
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold bg-brand-cream dark:bg-brand-darkBg text-brand-charcoal dark:text-brand-cream border border-brand-primary/20 dark:border-brand-darkBorder hover:border-brand-secondary transition-colors"
                    >
                      {copiedPayload ? (
                        <>
                          <Check className="w-4 h-4 text-brand-secondary dark:text-emerald-400" />
                          <span>Message copié !</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-4 h-4 text-brand-orange" />
                          <span>Copier le message formaté</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
