import React from 'react';
import { DESIGN_SYSTEM } from '@/lib/design-system';

const Section = ({ 
  children, 
  size = 'medium', 
  background = true, 
  decorativeElements = [],
  className = ''
}) => {
  const sizeClasses = DESIGN_SYSTEM.spacing.section[size];
  const backgroundClasses = background ? DESIGN_SYSTEM.layouts.section.background : '';

  return (
    <section className={`relative ${sizeClasses} ${backgroundClasses} ${className}`}>
      {/* Decorative Elements */}
      {decorativeElements.map((element, index) => (
        <div
          key={index}
          className={`decorative-element floaty ${element.position} ${element.color}`}
          style={{ animationDelay: `${element.delay || index}s` }}
        >
          {element.icon}
        </div>
      ))}

      {/* Content */}
      <div className={DESIGN_SYSTEM.layouts.section.container}>
        {children}
      </div>
    </section>
  );
};

export default Section; 