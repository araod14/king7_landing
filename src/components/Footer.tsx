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
          <h4 className="text-accent font-black uppercase italic mb-6">Síguenos</h4>
          <div className="flex gap-4 mb-8">
            <a 
              href="https://www.instagram.com/elponydominguez" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center gap-3 bg-neutral-900 border border-neutral-800 px-4 py-2 hover:bg-accent transition-all duration-300"
            >
              <svg className="w-6 h-6 fill-current group-hover:text-black" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.054 1.805.249 2.227.412.56.216.96.475 1.382.897.422.422.681.822.897 1.382.164.422.359 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.013 3.584-.07 4.85c-.054 1.17-.249 1.805-.413 2.227-.216.56-.475.96-.897 1.382-.422.422-.822.681-1.382.897-.422.164-1.057.359-2.227.413-1.266.057-1.646.07-4.85.07s-3.584-.013-4.85-.07c-1.17-.054-1.805-.249-2.227-.412-.56-.216-.96-.475-1.382-.897-.422-.422-.681-.822-.897-1.382-.164-.422-.359-1.057-.413-2.227-.057-1.266-.07-1.646-.07-4.85s.013-3.584.07-4.85c.054-1.17.249-1.805.412-2.227.216-.56.475-.96.897-1.382.422-.422.822-.681 1.382-.897.422-.164 1.057-.359 2.227-.413 1.266-.057 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-1.277.057-2.15.26-2.914.557-.79.306-1.459.717-2.126 1.384-.667.667-1.078 1.335-1.384 2.126-.297.764-.5 1.637-.557 2.914-.058 1.28-.072 1.688-.072 4.947s.014 3.667.072 4.947c.057 1.277.26 2.15.557 2.914.306.79.717 1.459 1.384 2.126.667.667 1.335 1.078 2.126 1.384.764.297 1.637.5 2.914.557 1.28.058 1.688.072 4.947.072s3.667-.014 4.947-.072c1.277-.057 2.15-.26 2.914-.557.79-.306 1.459-.717 2.126-1.384.667-.667 1.078-1.335 1.384-2.126.297-.764.5-1.637.557-2.914.058-1.28.072-1.688.072-4.947s-.014-3.667-.072-4.947c-.057-1.277-.26-2.15-.557-2.914-.306-.79-.717-1.459-1.384-2.126-.667-.667-1.335-1.078-2.126-1.384-.764-.297-1.637-.5-2.914-.557-1.28-.058-1.688-.072-4.947-.072z" />
                <path d="M12 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
              <span className="font-black italic uppercase group-hover:text-black">@elponydominguez</span>
            </a>
          </div>
          <p className="text-neutral-400">contacto@king7boxcross.com</p>
          <p className="text-neutral-300 font-bold text-xl mt-2 tracking-tighter">+58 414 838 0149</p>
        </div>
      </div>
      
      <div className="max-w-6xl mx-auto mt-20 pt-8 border-t border-neutral-900 flex flex-col md:flex-row justify-between items-center text-xs text-neutral-600 font-bold uppercase tracking-widest">
        <p>© 2026 KING7 BOXCROSS. TODOS LOS DERECHOS RESERVADOS.</p>
        <p className="mt-4 md:mt-0">DESIGNED BY THE PONY TECH TEAM</p>
      </div>
    </footer>
  );
};
