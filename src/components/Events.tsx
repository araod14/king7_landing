import React from 'react';
import { Section } from './Section';

export const Events: React.FC = () => {
  return (
    <Section id="events" title="Eventos">
      <div className="bg-neutral-900 border-2 border-dashed border-neutral-700 p-16 text-center">
        <div className="text-6xl mb-6 grayscale opacity-30">📅</div>
        <p className="text-2xl font-black uppercase italic text-neutral-500">
          No hay eventos próximos por ahora
        </p>
        <p className="mt-4 text-neutral-600 font-bold uppercase tracking-widest text-sm">
          Mantente atento a nuestras redes sociales
        </p>
      </div>
    </Section>
  );
};
