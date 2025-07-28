import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Heart } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Healing', path: '/healing' },
    { name: 'Building', path: '/building' },
    { name: 'Creating', path: '/creating' },
    { name: 'For Organizations', path: '/organizations' },
    { name: 'Speaking & Workshops', path: '/speaking' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-white/95 backdrop-blur-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 text-gray-800 hover:text-gray-600 transition-colors">
            <Heart className="h-5 w-5 text-rose-400" />
            <div className="flex flex-col">
              <span className="font-serif text-lg font-medium leading-tight">The Candid Heart</span>
              <span className="font-sans text-xs text-gray-500 leading-tight">Strategy, Healing, Innovation</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`font-sans text-sm transition-colors ${
                  isActive(item.path)
                    ? 'text-gray-900 font-medium border-b-2 border-rose-400 pb-1'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {item.name}
              </Link>
            ))}
            
            {/* Cross-link to SamanthaJosette.me */}
            <a
              href="https://samanthajosette.me"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-rose-100 text-rose-700 px-3 py-1 rounded-full text-sm font-sans hover:bg-rose-200 transition-colors"
            >
              Meet Samantha
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden border-t border-gray-100 bg-white">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-2 text-base font-sans transition-colors ${
                    isActive(item.path)
                      ? 'text-gray-900 font-medium bg-rose-50 rounded-md'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Mobile cross-link */}
              <a
                href="https://samanthajosette.me"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 text-base font-sans text-rose-700 hover:text-rose-900 hover:bg-rose-50 rounded-md transition-colors"
              >
                Meet Samantha
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
