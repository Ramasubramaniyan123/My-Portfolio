import React from 'react';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  href, 
  onClick, 
  className = '', 
  ...props 
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300';
  
  const variants = {
    primary: 'bg-primary text-white hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-0.5',
    secondary: 'border border-primary text-primary hover:bg-primary hover:text-white hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/10',
    outline: 'border border-border text-text-secondary hover:border-primary hover:text-text-primary'
  };
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };

  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`;

  const Component = href ? 'a' : 'button';

  return (
    <Component
      href={href}
      onClick={onClick}
      className={classes}
      {...props}
    >
      {children}
    </Component>
  );
};

export default Button;
