'use client';

import React, { useState } from 'react';
import { Section } from './Section';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="mb-4 border-b border-neutral-800">
      <button
        className="w-full py-6 flex justify-between items-center text-left focus:outline-none group"
        onClick={onClick}
      >
        <h3 className={`text-xl md:text-2xl font-black uppercase italic transition-colors ${isOpen ? 'text-accent' : 'text-support group-hover:text-accent'}`}>
          {question}
        </h3>
        <span className={`text-3xl font-black transition-transform duration-300 ${isOpen ? 'rotate-45 text-accent' : 'text-neutral-600'}`}>
          +
        </span>
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-48 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <p className="text-neutral-400 text-lg leading-relaxed max-w-3xl">
          {answer}
        </p>
      </div>
    </div>
  );
};

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "¿Necesito estar en forma para empezar?",
      answer: "¡Para nada! El CrossFit es 100% escalable. Adaptamos cada ejercicio a tu nivel actual, asegurando que entrenes de forma segura y efectiva desde el primer día."
    },
    {
      question: "¿Qué debo llevar a mi primera clase?",
      answer: "Solo necesitas ropa deportiva cómoda, calzado deportivo (preferiblemente de suela plana), hidratación y mucha energía. Nosotros ponemos el resto."
    },
    {
      question: "¿Ofrecen clases de prueba?",
      answer: "¡Sí! Creemos que la mejor forma de conocernos es entrenando. Contáctanos por WhatsApp para agendar tu primera sesión de cortesía."
    },
    {
      question: "¿Dónde están ubicados?",
      answer: "Nos encontramos en el Estadio Las Casitas, Barcelona, Anzoátegui. Un espacio diseñado para llevar tu entrenamiento al siguiente nivel."
    }
  ];

  return (
    <Section id="faq" title="Preguntas Frecuentes">
      <div className="max-w-4xl mx-auto">
        {faqs.map((faq, index) => (
          <FAQItem
            key={index}
            question={faq.question}
            answer={faq.answer}
            isOpen={openIndex === index}
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
          />
        ))}
      </div>
    </Section>
  );
};
