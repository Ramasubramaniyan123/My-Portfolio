import React from 'react';

const Card = ({ 
  children, 
  className = '', 
  hover = true, 
  ...props 
}) => {
  const baseClasses = 'bg-card border border-border rounded-xl p-6';
  const hoverClasses = hover ? 'hover:bg-card/95 hover:border-accent-primary hover:shadow-xl hover:shadow-black/30 transition-all duration-300 hover:-translate-y-1 hover:scale-[1.01]' : '';
  
  const classes = `${baseClasses} ${hoverClasses} ${className}`;

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};

export default Card;
