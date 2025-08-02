import React from 'react';

const StationaryBackground = ({ 
  children, 
  className = "", 
  overlayOpacity = 0.1
}) => {
  return (
    <div className={`relative ${className}`}>
      {/* Main Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-cream-50 to-sage-50"></div>
      
      {/* Stationary Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-90"
        style={{ 
          backgroundImage: `url('/stationary-background.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      ></div>
      
      {/* Subtle Overlay for Content Readability */}
      <div 
        className="absolute inset-0 bg-background/80"
        style={{ opacity: overlayOpacity }}
      ></div>
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default StationaryBackground; 