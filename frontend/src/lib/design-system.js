// Design System Configuration
// This file defines consistent patterns for the entire site

export const DESIGN_SYSTEM = {
  // Typography Scale
  typography: {
    hero: {
      mobile: 'text-4xl md:text-5xl lg:text-6xl',
      desktop: 'text-4xl md:text-6xl lg:text-7xl'
    },
    h1: 'text-3xl md:text-4xl lg:text-5xl',
    h2: 'text-2xl md:text-3xl lg:text-4xl',
    h3: 'text-xl md:text-2xl lg:text-3xl',
    h4: 'text-lg md:text-xl lg:text-2xl',
    body: 'text-base md:text-lg',
    small: 'text-sm md:text-base',
    caption: 'text-xs md:text-sm'
  },

  // Spacing Scale
  spacing: {
    section: {
      small: 'py-12 lg:py-16',
      medium: 'py-16 lg:py-20',
      large: 'py-20 lg:py-24',
      xlarge: 'py-24 lg:py-32'
    },
    container: {
      narrow: 'max-w-4xl',
      medium: 'max-w-6xl',
      wide: 'max-w-7xl'
    }
  },

  // Color Patterns
  colors: {
    primary: {
      text: 'text-primary',
      bg: 'bg-primary',
      border: 'border-primary',
      hover: 'hover:bg-primary/90',
      light: 'bg-primary/10',
      medium: 'bg-primary/20'
    },
    accent: {
      text: 'text-accent',
      bg: 'bg-accent',
      border: 'border-accent',
      hover: 'hover:bg-accent/90',
      light: 'bg-accent/10',
      medium: 'bg-accent/20'
    },
    neutral: {
      text: 'text-foreground',
      muted: 'text-muted-foreground',
      bg: 'bg-background',
      card: 'bg-card'
    }
  },

  // Component Patterns
  components: {
    card: {
      base: 'bg-card border border-border/50 rounded-lg shadow-sm hover:shadow-md transition-all duration-300',
      interactive: 'hover:border-primary/30 hover:shadow-lg',
      elevated: 'shadow-lg hover:shadow-xl'
    },
    button: {
      primary: 'bg-primary hover:bg-primary/90 text-primary-foreground',
      secondary: 'bg-secondary hover:bg-secondary/90 text-secondary-foreground',
      outline: 'border border-primary text-primary hover:bg-primary hover:text-primary-foreground',
      ghost: 'text-foreground hover:bg-muted'
    },
    badge: {
      base: 'inline-flex items-center px-3 py-1 rounded-full text-sm font-medium',
      primary: 'bg-primary/10 text-primary border border-primary/20',
      accent: 'bg-accent/10 text-accent border border-accent/20'
    }
  },

  // Animation Patterns
  animations: {
    fadeIn: 'animate-fade-in',
    slideUp: 'animate-slide-up',
    float: 'floaty',
    pulse: 'gentle-pulse'
  },

  // Layout Patterns
  layouts: {
    hero: {
      container: 'relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8',
      content: 'text-center animate-fade-in',
      background: 'absolute inset-0 bg-gradient-to-br from-secondary/20 via-background to-accent/10'
    },
    section: {
      container: 'relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8',
      background: 'absolute inset-0 bg-dots opacity-20'
    },
    grid: {
      twoCol: 'grid md:grid-cols-2 gap-12 items-center',
      threeCol: 'grid md:grid-cols-3 gap-8',
      cards: 'grid md:grid-cols-2 lg:grid-cols-3 gap-8'
    }
  }
};

// Helper functions for consistent usage
export const createSectionClasses = (size = 'medium', hasBackground = true) => {
  const baseClasses = DESIGN_SYSTEM.spacing.section[size];
  const backgroundClasses = hasBackground ? DESIGN_SYSTEM.layouts.section.background : '';
  return `${baseClasses} ${backgroundClasses}`;
};

export const createCardClasses = (variant = 'base', interactive = false) => {
  let classes = DESIGN_SYSTEM.components.card.base;
  if (interactive) classes += ` ${DESIGN_SYSTEM.components.card.interactive}`;
  if (variant === 'elevated') classes += ` ${DESIGN_SYSTEM.components.card.elevated}`;
  return classes;
};

export const createButtonClasses = (variant = 'primary', size = 'default') => {
  const baseClasses = DESIGN_SYSTEM.components.button[variant];
  const sizeClasses = size === 'lg' ? 'px-6 py-3 text-lg' : 'px-4 py-2';
  return `${baseClasses} ${sizeClasses} font-sans transition-all duration-300`;
}; 