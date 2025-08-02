import React from 'react';

const FullPageBackground = ({
  children,
  className = "",
  overlayOpacity = 0.2
}) => {
  return (
    <div className={`min-h-screen relative ${className}`}>
      {/* Full Page Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-90"
        style={{
          backgroundImage: `url('/healing-sanctuary-background.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      ></div>

      {/* Subtle overlay for content readability */}
      <div 
        className="absolute inset-0 bg-white/20"
        style={{ opacity: overlayOpacity }}
      ></div>

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default FullPageBackground; 