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
        
        {/* Secondary images */}
        <div className="col-span-1 row-span-1 overflow-hidden">
          <img src="/assets/images/image4.jpeg" alt="Gallery 2" className="w-full h-full object-cover transition-transform hover:scale-105 duration-700" />
        </div>
        
        <div className="col-span-1 row-span-2 overflow-hidden">
          <img src="/assets/images/image5.jpeg" alt="Gallery 3" className="w-full h-full object-cover transition-transform hover:scale-105 duration-700" />
        </div>
        
        <div className="col-span-1 row-span-1 overflow-hidden">
          <img src="/assets/images/image6.jpeg" alt="Gallery 4" className="w-full h-full object-cover transition-transform hover:scale-105 duration-700" />
        </div>

        {/* Video placeholder - making it span more on desktop for better balance */}
        <div className="col-span-2 md:col-span-3 row-span-1 overflow-hidden border-2 border-accent">
          <video 
            src="/assets/videos/video1.mp4" 
            className="w-full h-full object-cover"
            autoPlay 
            loop 
            muted 
            playsInline
          />
        </div>
        
        {/* Fill the gap on desktop */}
        <div className="hidden md:flex col-span-1 row-span-1 items-center justify-center bg-neutral-900">
          <img src="/assets/logos/LOGO2.png" alt="Logo" className="w-3/4 h-3/4 object-contain opacity-20" />
        </div>
      </div>
    </Section>
  );
};
