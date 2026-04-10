import React from 'react';
import { Placeholder } from './Placeholder';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white pt-20 pb-24 md:pb-12 px-6 border-t border-neutral-800">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <img src="/assets/logos/LOGO2.png" alt="King7 Logo" className="h-24 w-auto object-contain mb-8 grayscale hover:grayscale-0 transition-all duration-500" />
          <p className="text-neutral-400 leading-relaxed max-w-sm italic">
            "Donde se forjan los atletas del mañana. Fuerza, disciplina y comunidad."
          </p>
        </div>
        
        <div>
          <h4 className="text-accent font-black uppercase italic mb-6">Ubicación</h4>
          <p className="text-neutral-300 font-bold">Estadio Las Casitas</p>
          <p className="text-neutral-400">Barcelona, Edo. Anzoátegui</p>
          <p className="text-neutral-400 mt-4">Lunes a Viernes: 6:00 AM - 8:00 PM</p>
          <p className="text-neutral-400">Sábados: 8:00 AM - 12:00 PM</p>
        </div>

        <div>
          <h4 className="text-accent font-black uppercase italic mb-6">Redes Sociales</h4>
          <div className="flex gap-4 mb-8">
            <Placeholder label="Instagram" className="h-12 w-24 rounded-sm text-[10px] border-accent/20" />
            <Placeholder label="Facebook" className="h-12 w-24 rounded-sm text-[10px] border-accent/20" />
          </div>
          <p className="text-neutral-400">info@king7boxcross.com</p>
          <p className="text-neutral-300 font-bold text-xl mt-2 tracking-tighter">+58 412 123 4567</p>
        </div>
      </div>
      
      <div className="max-w-6xl mx-auto mt-20 pt-8 border-t border-neutral-900 flex flex-col md:flex-row justify-between items-center text-xs text-neutral-600 font-bold uppercase tracking-widest">
        <p>© 2026 KING7 BOXCROSS. TODOS LOS DERECHOS RESERVADOS.</p>
        <p className="mt-4 md:mt-0">DESIGNED BY THE PONY TECH TEAM</p>
      </div>
    </footer>
  );
};
