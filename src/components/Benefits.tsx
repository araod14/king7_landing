import React from 'react';
import { Section } from './Section';

const BenefitCard: React.FC<{ title: string; index: number }> = ({ title, index }) => (
  <div className="group p-8 border-l-4 border-accent bg-neutral-900 transition-all hover:bg-accent hover:border-support hover:translate-x-2 cursor-default">
    <div className="text-5xl font-black text-accent mb-6 opacity-30 group-hover:text-primary transition-colors">
      0{index}
    </div>
    <h3 className="text-2xl font-black uppercase italic group-hover:text-primary transition-colors">
      {title}
    </h3>
  </div>
);

export const Benefits: React.FC = () => {
  const benefits = [
    "Mejora tu resistencia",
    "Incrementa fuerza y movilidad",
    "Quema grasa de forma eficiente",
    "Entrenamientos dinámicos y variados"
  ];

  return (
    <Section id="benefits" title="¿Por qué entrenamiento funcional?">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {benefits.map((benefit, i) => (
          <BenefitCard key={benefit} title={benefit} index={i + 1} />
        ))}
      </div>
    </Section>
  );
};
