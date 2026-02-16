import React from 'react';

const SectionTitle = ({ 
  title, 
  subtitle, 
  className = '', 
  center = true,
  ...props 
}) => {
  const containerClasses = center ? 'text-center' : 'text-left';
  const combinedClasses = `${containerClasses} ${className}`;

  return (
    <div className={combinedClasses} {...props}>
      <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-text-secondary max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
