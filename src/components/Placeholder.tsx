import React from 'react';

interface PlaceholderProps {
  label: string;
  className?: string;
}

export const Placeholder: React.FC<PlaceholderProps> = ({ label, className = '' }) => {
  return (
    <div className={`bg-neutral-800 border-2 border-dashed border-neutral-600 flex items-center justify-center text-neutral-400 font-bold uppercase ${className}`}>
      {label}
    </div>
  );
};
