import React from 'react';

interface SectionProps {
  id?: string;
  title?: string;
  children: React.ReactNode;
  className?: string;
  dark?: boolean;
}

export const Section: React.FC<SectionProps> = ({ id, title, children, className = '', dark = true }) => {
  return (
    <section id={id} className={`py-16 md:py-24 px-6 ${dark ? 'bg-primary text-support' : 'bg-support text-primary'} ${className}`}>
      <div className="max-w-6xl mx-auto">
        {title && (
          <h2 className="text-4xl md:text-6xl font-black italic uppercase mb-12 tracking-tighter text-center md:text-left">
            <span className="text-accent">/</span> {title}
          </h2>
        )}
        {children}
      </div>
    </section>
  );
};
