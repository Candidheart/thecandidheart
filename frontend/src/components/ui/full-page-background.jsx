import React from 'react';

const FullPageBackground = ({
  children,
  className = "",
}) => {
  return (
    <div className={`min-h-screen relative ${className}`}>
      {/* Full Page Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/honeycomb-sunflower-background.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      ></div>

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default FullPageBackground; 