import React from 'react';
import { DESIGN_SYSTEM } from '@/lib/design-system';

const Hero = ({ 
  title, 
  subtitle, 
  children, 
  background = true, 
  backgroundImage,
  decorativeElements = [],
  badge,
  size = 'large'
}) => {
  const sizeClasses = {
    small: 'py-12 lg:py-16',
    medium: 'py-16 lg:py-20',
    large: 'py-20 lg:py-24',
    xlarge: 'py-24 lg:py-32'
  };

  return (
    <section className={`relative ${sizeClasses[size]} overflow-hidden`}>
      {/* Background */}
      {backgroundImage ? (
        <>
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${backgroundImage})` }}
          ></div>
          <div className="absolute inset-0 bg-background/20 backdrop-blur-[0.5px]"></div>
        </>
      ) : background && (
        <>
          <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 via-background to-accent/10"></div>
          <div className="absolute inset-0 bg-hexagons gentle-pulse"></div>
        </>
      )}
      
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
      <div className={DESIGN_SYSTEM.layouts.hero.container}>
        <div className={DESIGN_SYSTEM.layouts.hero.content}>
          {badge && (
            <div className="mb-6">
              <span className={`${DESIGN_SYSTEM.components.badge.base} ${DESIGN_SYSTEM.components.badge.primary}`}>
                {badge.icon && <badge.icon className="h-4 w-4 mr-2" />}
                {badge.text}
              </span>
            </div>
          )}
          
          {title && (
            <h1 className={`font-serif ${DESIGN_SYSTEM.typography.hero.desktop} font-semibold text-foreground mb-6 leading-tight`}>
              {title}
            </h1>
          )}
          
          {subtitle && (
            <p className="font-sans text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              {subtitle}
            </p>
          )}
          
          {children}
        </div>
      </div>
    </section>
  );
};

export default Hero; 