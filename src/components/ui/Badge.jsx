
const Badge = ({ 
  children, 
  variant = 'default', 
  size = 'md', 
  className = '',
  ...props 
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-medium rounded-full';
  
  const variants = {
    default: 'bg-secondary text-white border border-secondary',
    secondary: 'bg-primary/10 text-primary border border-primary/30 dark:bg-primary/20 dark:text-primary dark:border-primary/40',
    success: 'bg-primary/10 text-primary border border-primary/30 dark:bg-primary/20 dark:text-primary dark:border-primary/40',
    outline: 'border border-border text-text-secondary dark:text-slate-300 dark:border-slate-600'
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
