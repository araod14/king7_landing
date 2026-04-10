'use client';

import React, { useState } from 'react';
import { Placeholder } from './Placeholder';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Beneficios', href: '#benefits' },
    { name: 'Coach', href: '#coach' },
    { name: 'Nuestro Box', href: '#gallery' },
    { name: 'Tarifas', href: '#pricing' },
    { name: 'Eventos', href: '#events' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary border-b border-neutral-800 px-6 py-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <a href="#hero" className="h-14 w-44 flex items-center">
          <img src="/assets/logos/LOGO1.png" alt="King7 Boxcross Logo" className="h-full w-auto object-contain" />
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-support uppercase font-bold text-sm hover:text-accent transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-support focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="space-y-2">
            <span className={`block w-8 h-1 bg-accent transition-transform ${isOpen ? 'rotate-45 translate-y-3' : ''}`}></span>
            <span className={`block w-8 h-1 bg-accent ${isOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-8 h-1 bg-accent transition-transform ${isOpen ? '-rotate-45 -translate-y-3' : ''}`}></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-primary border-b border-neutral-800 p-6 flex flex-col space-y-4 animate-in slide-in-from-top duration-300">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-support uppercase font-black text-2xl italic hover:text-accent transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};
