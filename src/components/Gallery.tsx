import React from 'react';
import { Section } from './Section';
import { Placeholder } from './Placeholder';

export const Gallery: React.FC = () => {
  return (
    <Section id="gallery" title="Nuestro Box">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px] md:auto-rows-[250px]">
        {/* Main large image */}
        <div className="col-span-2 row-span-2 overflow-hidden">
          <img src="/assets/images/image3.jpeg" alt="Gallery 1" className="w-full h-full object-cover transition-transform hover:scale-105 duration-700" />
        </div>
        
        {/* Vertical Video */}
        <div className="col-span-2 md:col-span-1 row-span-3 md:row-span-2 overflow-hidden border-2 border-accent relative">
          <div className="absolute inset-0 bg-accent/10 pointer-events-none z-10"></div>
          <video 
            src="/assets/videos/video1.mp4" 
            className="w-full h-full object-cover"
            autoPlay 
            loop 
            muted 
            playsInline
          />
          <div className="absolute bottom-4 right-4 bg-accent text-primary text-xs font-black px-3 py-1 z-20 uppercase italic tracking-tighter shadow-lg">
            En Acción
          </div>
        </div>
        
        {/* Tall Image */}
        <div className="col-span-1 row-span-2 overflow-hidden">
          <img src="/assets/images/image5.jpeg" alt="Gallery 3" className="w-full h-full object-cover transition-transform hover:scale-105 duration-700" />
        </div>
        
        {/* Small Images */}
        <div className="col-span-1 row-span-1 overflow-hidden">
          <img src="/assets/images/image4.jpeg" alt="Gallery 2" className="w-full h-full object-cover transition-transform hover:scale-105 duration-700" />
        </div>
        
        <div className="col-span-1 row-span-1 overflow-hidden">
          <img src="/assets/images/image6.jpeg" alt="Gallery 4" className="w-full h-full object-cover transition-transform hover:scale-105 duration-700" />
        </div>
        
        {/* Logo Fill - Balanced to fill the gap */}
        <div className="col-span-2 md:col-span-1 row-span-1 flex items-center justify-center bg-neutral-900 border border-neutral-800">
          <img src="/assets/logos/LOGO2.png" alt="Logo" className="w-1/2 h-1/2 object-contain opacity-40" />
        </div>
      </div>
    </Section>
  );
};
