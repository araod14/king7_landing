import React from 'react';
import { Button } from './Button';

export const StickyCTA: React.FC = () => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 p-4 bg-gradient-to-t from-black to-transparent pointer-events-none">
      <div className="pointer-events-auto">
        <Button 
          variant="primary" 
          className="w-full text-xl shadow-[0_-4px_20px_rgba(250,204,21,0.3)]"
          href="https://wa.me/584148380149"
        >
          ¡Entrena Hoy!
        </Button>
      </div>
    </div>
  );
};
