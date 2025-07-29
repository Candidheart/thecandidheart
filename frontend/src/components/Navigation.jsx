import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Heart, PenTool } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Healing', path: '/healing' },
    { name: 'Building', path: '/building' },
    { name: 'Creating', path: '/creating' },
    { name: 'Organizations', path: '/organizations' },
    { name: 'Speaking', path: '/speaking' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-white/80 backdrop-blur-sm border-b border-primary/10 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <Heart className="h-4 w-4 text-amber-500" />
            <PenTool className="h-4 w-4 text-gray-500" />
            <div className="flex flex-col leading-tight">
              <span className="font-serif text-base font-semibold text-gray-900">
                The Candid Heart
              </span>
              <span className="font-sans text-sm text-gray-600">
                with Samantha Josette
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-5">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`font-sans text-sm transition-colors whitespace-nowrap ${
                  isActive(item.path)
                    ? 'text-amber-700 border-b-2 border-amber-500'
                    : 'text-gray-700 hover:text-amber-600'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="https://samanthajosette.me"
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-sm bg-amber-100 text-amber-700 px-3 py-1 rounded-full hover:bg-amber-200 transition-colors whitespace-nowrap"
            >
              Meet Samantha
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-amber-600 transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-primary/10">
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`font-sans text-sm transition-colors ${
                    isActive(item.path)
                      ? 'text-amber-700 font-semibold'
                      : 'text-gray-700 hover:text-amber-600'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="https://samanthajosette.me"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="font-sans text-sm bg-amber-100 text-amber-700 px-3 py-2 rounded-full hover:bg-amber-200 transition-colors text-center"
              >
                Meet Samantha
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;

