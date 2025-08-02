import React from 'react';

const StationaryBackground = ({ 
  children, 
  className = "", 
  overlayOpacity = 0.1,
  showBee = true,
  showHoneycomb = true,
  showSunflower = true 
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
        className="absolute inset-0 bg-background/80 backdrop-blur-[0.5px]"
        style={{ opacity: overlayOpacity }}
      ></div>
      
      {/* Decorative Elements (if image not available) */}
      {showBee && (
        <div className="absolute top-8 left-8 w-12 h-12 opacity-60">
          <svg viewBox="0 0 48 48" fill="none" className="w-full h-full">
            <path 
              d="M24 4C12.95 4 4 12.95 4 24s8.95 20 20 20 20-8.95 20-20S35.05 4 24 4zm0 36c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16z" 
              fill="currentColor" 
              className="text-amber-600"
            />
            <path 
              d="M20 18c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm8 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" 
              fill="currentColor" 
              className="text-amber-800"
            />
            <path 
              d="M24 28c-2.21 0-4-1.79-4-4h8c0 2.21-1.79 4-4 4z" 
              fill="currentColor" 
              className="text-amber-700"
            />
          </svg>
        </div>
      )}
      
      {showHoneycomb && (
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-16 h-16">
            <svg viewBox="0 0 64 64" fill="none" className="w-full h-full">
              <path 
                d="M32 4l24 14v28l-24 14L8 46V18L32 4z" 
                fill="currentColor" 
                className="text-amber-300"
              />
            </svg>
          </div>
          <div className="absolute top-1/3 right-1/3 w-12 h-12">
            <svg viewBox="0 0 48 48" fill="none" className="w-full h-full">
              <path 
                d="M24 4l18 10.5v21L24 44 6 35.5V14.5L24 4z" 
                fill="currentColor" 
                className="text-amber-200"
              />
            </svg>
          </div>
          <div className="absolute bottom-1/4 left-1/3 w-14 h-14">
            <svg viewBox="0 0 56 56" fill="none" className="w-full h-full">
              <path 
                d="M28 4l21 12.25v24.5L28 52 7 40.75V16.25L28 4z" 
                fill="currentColor" 
                className="text-amber-100"
              />
            </svg>
          </div>
        </div>
      )}
      
      {showSunflower && (
        <div className="absolute bottom-8 right-8 w-16 h-16 opacity-70">
          <svg viewBox="0 0 64 64" fill="none" className="w-full h-full">
            <circle cx="32" cy="32" r="8" fill="currentColor" className="text-amber-600"/>
            <path 
              d="M32 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 40c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z" 
              fill="currentColor" 
              className="text-sage-400"
            />
            <path 
              d="M8 32c0-2.21 1.79-4 4-4s4 1.79 4 4-1.79 4-4 4-4-1.79-4-4zm40 0c0-2.21 1.79-4 4-4s4 1.79 4 4-1.79 4-4 4-4-1.79-4-4z" 
              fill="currentColor" 
              className="text-sage-500"
            />
          </svg>
        </div>
      )}
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default StationaryBackground; 