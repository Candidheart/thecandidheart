import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { DESIGN_SYSTEM } from '@/lib/design-system';

const ContentCard = ({ 
  icon, 
  title, 
  description, 
  children, 
  variant = 'primary',
  interactive = true,
  className = ''
}) => {
  const getVariantClasses = () => {
    switch (variant) {
      case 'primary':
        return {
          iconBg: 'bg-primary/10',
          iconColor: 'text-primary',
          border: 'hover:border-primary/30'
        };
      case 'accent':
        return {
          iconBg: 'bg-accent/10',
          iconColor: 'text-accent',
          border: 'hover:border-accent/30'
        };
      default:
        return {
          iconBg: 'bg-primary/10',
          iconColor: 'text-primary',
          border: 'hover:border-primary/30'
        };
    }
  };

  const variantClasses = getVariantClasses();
  const cardClasses = `${DESIGN_SYSTEM.components.card.base} ${interactive ? DESIGN_SYSTEM.components.card.interactive : ''} ${variantClasses.border} ${className}`;

  return (
    <Card className={cardClasses}>
      <CardContent className="p-8">
        {icon && (
          <div className={`rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 ${variantClasses.iconBg}`}>
            <icon className={`h-8 w-8 ${variantClasses.iconColor}`} />
          </div>
        )}
        
        {title && (
          <h3 className="font-serif text-xl md:text-2xl font-semibold text-foreground text-center mb-4">
            {title}
          </h3>
        )}
        
        {description && (
          <p className="font-sans text-foreground mb-6 leading-relaxed text-center">
            {description}
          </p>
        )}
        
        {children}
      </CardContent>
    </Card>
  );
};

export default ContentCard; 