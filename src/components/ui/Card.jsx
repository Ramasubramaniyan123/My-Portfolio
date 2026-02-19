import React from 'react';

const Card = ({ 
  children, 
  className = '', 
  hover = true, 
  ...props 
}) => {
  const baseClasses = 'bg-white dark:bg-slate-800 border border-border dark:border-slate-700 rounded-xl p-6';
  const hoverClasses = hover ? 'hover:shadow-lg hover:border-primary hover:scale-105 hover:-translate-y-1 transition-all duration-250' : '';
  
  const classes = `${baseClasses} ${hoverClasses} ${className}`;

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};

export default Card;
