import React from 'react';
import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-8">
      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex items-center justify-center space-x-2 mb-4">
          <Heart className="h-4 w-4 text-sage-600" />
          <span className="font-serif text-sm font-semibold text-sage-800">
            The Candid Heart
          </span>
        </div>
        
        <div className="space-y-2">
          <p className="font-sans text-sm text-sage-700">
            © {currentYear} The Candid Heart • Made with intention.
          </p>
          <p className="font-sans text-xs text-sage-600">
            <Link to="/contact" className="hover:text-sage-800 transition-colors">
              Get in Touch
            </Link>
            {' • '}
            <a 
              href="https://samanthajosette.me" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-sage-800 transition-colors"
            >
              Personal Stories
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

