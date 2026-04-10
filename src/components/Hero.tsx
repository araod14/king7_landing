import React from 'react';
import { Placeholder } from './Placeholder';
import { Button } from './Button';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Hero Image - Outdoor Competition Style */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=2070" 
          alt="KING7 BOXCROSS Competition Background" 
          className="w-full h-full object-cover opacity-50" 
        />
      </div>

      {/* Overlay Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center md:text-left w-full">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
          <div>
            <div className="mb-4 inline-block bg-accent px-4 py-1 text-primary font-bold uppercase tracking-widest text-sm">
              Estadio Las Casitas, Barcelona
            </div>
            <h1 className="text-6xl md:text-9xl font-black italic uppercase leading-none tracking-tighter mb-4">
              KING7 <br />
              <span className="text-accent">BOXCROSS</span>
            </h1>
            <p className="text-xl md:text-3xl font-medium text-neutral-300 max-w-2xl mb-12">
              Transforma tu cuerpo con entrenamiento funcional
            </p>
          </div>
          <div className="hidden md:block opacity-70 -mt-16">
            <img src="/assets/logos/LOGO2.png" alt="King7 Logo" className="h-64 w-64 rounded-full object-contain" />
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-4">
          <Button variant="primary" className="text-xl">
            Entrena con Nosotros
          </Button>
          <Button variant="outline" className="text-xl">
            Ver Clases
          </Button>
        </div>
      </div>
    </section>
  );
};
