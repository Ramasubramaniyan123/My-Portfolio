import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const ExpandableCard = ({
  children,
  expandedContent,
  expandButtonText = 'Show Details',
  collapseButtonText = 'Hide Details',
  ariaLabel,
  contentId,
  className = '',
  buttonClassName = '',
  contentClassName = '',
  ...props
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const toggleExpanded = () => {
    setIsAnimating(true);
    setIsExpanded(!isExpanded);
    setTimeout(() => setIsAnimating(false), 300); // Match animation duration
  };

  return (
    <div className={className} {...props}>
      {children}

      <div className="space-y-2">
        <button
          onClick={toggleExpanded}
          className={`flex items-center space-x-2 text-primary hover:text-primary-hover text-sm font-semibold transition-colors ${buttonClassName}`}
          aria-expanded={isExpanded}
          aria-controls={contentId}
          aria-label={ariaLabel}
        >
          <span>{isExpanded ? collapseButtonText : expandButtonText}</span>
          {isExpanded ? (
            <ChevronUp size={16} className="transition-transform duration-250" />
          ) : (
            <ChevronDown size={16} className="transition-transform duration-250" />
          )}
        </button>

        <div
          id={contentId}
          className={`overflow-hidden transition-all duration-300 ${
            isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          } ${contentClassName}`}
          aria-hidden={!isExpanded}
        >
          <div className="pt-2">
            {expandedContent}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpandableCard;
