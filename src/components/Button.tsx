import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  onClick?: () => void;
  href?: string;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  onClick, 
  href,
  className = '' 
}) => {
  const baseStyles = 'px-8 py-3 font-black uppercase tracking-tighter transition-all duration-300 transform active:scale-95 text-center cursor-pointer inline-block';
  
  const variants = {
    primary: 'bg-accent text-primary hover:bg-support',
    secondary: 'bg-support text-primary hover:bg-accent',
    outline: 'border-2 border-accent text-accent hover:bg-accent hover:text-primary'
  };

  const combinedClassName = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noopener noreferrer' : undefined} className={combinedClassName}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={combinedClassName}>
      {children}
    </button>
  );
};
