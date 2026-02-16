
const Badge = ({ 
  children, 
  variant = 'default', 
  size = 'md', 
  className = '',
  ...props 
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-medium rounded-full';
  
  const variants = {
    default: 'bg-secondary text-text-secondary border border-border',
    secondary: 'bg-accent-secondary/10 text-accent-secondary border border-accent-secondary/30',
    success: 'bg-accent-primary/10 text-accent-primary border border-accent-primary/30',
    outline: 'border border-border text-text-secondary'
  };
  
  const sizes = {
    sm: 'px-2 py-1 text-xs',
    md: 'px-3 py-1 text-sm',
    lg: 'px-4 py-2 text-base'
  };

  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`;

  return (
    <span className={classes} {...props}>
      {children}
    </span>
  );
};

export default Badge;
