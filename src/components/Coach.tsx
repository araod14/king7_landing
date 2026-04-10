import React from 'react';
import { Section } from './Section';
import { Placeholder } from './Placeholder';

export const Coach: React.FC = () => {
  return (
    <Section id="coach" title="Conoce a tu Coach">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="h-[400px] md:h-[600px] order-2 md:order-1 overflow-hidden rounded-tr-[100px]">
          <img src="/assets/images/image2.jpg" alt="Coach Jose Miguel 'El Pony'" className="w-full h-full object-cover" />
        </div>
        <div className="order-1 md:order-2">
          <div className="mb-6">
            <span className="text-accent text-lg font-bold uppercase tracking-widest block mb-2">Head Coach</span>
            <h3 className="text-4xl md:text-6xl font-black italic uppercase leading-none tracking-tighter">
              Jose Miguel Dominguez <br />
              <span className="text-accent">"El Pony"</span>
            </h3>
          </div>
          
          <p className="text-xl text-neutral-300 leading-relaxed mb-8">
            Enfocado en la técnica y el rendimiento de alto nivel, Jose Miguel te llevará al límite para desbloquear tu verdadero potencial físico y mental.
          </p>

          <div className="bg-neutral-900 p-8 border-r-8 border-accent">
            <h4 className="text-accent font-black uppercase tracking-tighter text-sm mb-4">Logros Destacados</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-2xl">🏆</span>
                <span className="text-xl font-bold italic uppercase tracking-tighter">
                  Tercer lugar en los Fit Games 2026
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
};
