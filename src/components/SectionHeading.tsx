import React from 'react';

interface SectionHeadingProps {
  badge: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  badge,
  title,
  subtitle,
  align = 'left',
}) => {
  const alignmentClasses =
    align === 'center' ? 'text-center mx-auto items-center' : 'text-left items-start';

  return (
    <div className={`flex flex-col max-w-3xl mb-12 ${alignmentClasses}`}>
      <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono font-semibold uppercase tracking-wider bg-brand-primary/10 text-brand-primary dark:bg-brand-secondary/30 dark:text-emerald-300 border border-brand-primary/15 dark:border-brand-secondary/40 mb-3.5">
        <span className="w-1.5 h-1.5 rounded-full bg-brand-orange" />
        {badge}
      </div>
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-brand-charcoal dark:text-brand-cream leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3.5 text-base sm:text-lg text-brand-charcoal/75 dark:text-brand-cream/75 leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
};
