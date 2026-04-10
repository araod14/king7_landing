import React from 'react';
import { Section } from './Section';
import { Button } from './Button';

export const Pricing: React.FC = () => {
  return (
    <Section id="pricing" title="Mensualidad" className="bg-neutral-900">
      <div className="max-w-xl mx-auto">
        <div className="bg-primary p-12 border-t-8 border-accent relative overflow-hidden">
          <div className="absolute top-0 right-0 bg-accent text-primary px-4 py-1 font-bold uppercase text-xs transform translate-x-1/4 translate-y-1/2 rotate-45 w-40 text-center">
            Popular
          </div>
          
          <div className="text-center mb-10">
            <h3 className="text-3xl font-black uppercase italic mb-4">Plan Full Access</h3>
            <div className="flex items-center justify-center gap-2">
              <span className="text-6xl md:text-8xl font-black italic text-accent leading-none">20$</span>
              <div className="text-left">
                <p className="text-sm font-bold uppercase text-neutral-400 leading-tight">al mes</p>
                <p className="text-xs text-neutral-500 uppercase">tasa euro BCV</p>
              </div>
            </div>
          </div>

          <ul className="space-y-4 mb-12 border-y border-neutral-800 py-8">
            <li className="flex items-center gap-3">
              <span className="text-accent">✓</span> Acceso ilimitado a todas las clases
            </li>
            <li className="flex items-center gap-3">
              <span className="text-accent">✓</span> Programación diaria de WODs
            </li>
            <li className="flex items-center gap-3">
              <span className="text-accent">✓</span> Coaching personalizado en cada sesión
            </li>
            <li className="flex items-center gap-3">
              <span className="text-accent">✓</span> Acceso a eventos comunitarios
            </li>
          </ul>

          <Button variant="primary" className="w-full text-xl py-6">
            Inscribirme ahora
          </Button>
        </div>
      </div>
    </Section>
  );
};
