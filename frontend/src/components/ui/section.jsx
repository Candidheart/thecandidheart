import React from 'react';
import { DESIGN_SYSTEM } from '@/lib/design-system';

const Section = ({ 
  children, 
  size = 'medium', 
  background = false, 
  decorativeElements = [],
  className = ''
}) => {
  const sizeClasses = DESIGN_SYSTEM.spacing.section[size];

  return (
    <section className={`relative ${sizeClasses} ${className}`}>
      {/* Content */}
      <div className={DESIGN_SYSTEM.layouts.section.container}>
        {children}
      </div>
    </section>
  );
};

export default Section; 