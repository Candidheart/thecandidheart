import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Heart, Feather } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Work With Me', path: '/work-with-me' },
    { name: 'Poetry & Devotionals', path: '/poetry' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-card/80 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="flex items-center space-x-1">
              <Heart className="h-6 w-6 text-primary group-hover:text-accent transition-colors" />
              <Feather className="h-6 w-6 text-accent group-hover:text-primary transition-colors" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-lg font-semibold text-foreground">
                The Candid Heart
              </span>
              <span className="font-sans text-xs text-muted-foreground -mt-1">
                with Samantha Josette
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`font-sans text-sm transition-all-smooth hover:text-primary ${
                  isActive(item.path)
                    ? 'text-primary font-medium border-b-2 border-primary'
                    : 'text-foreground hover:text-primary'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Button 
              asChild 
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-sans"
            >
              <Link to="/contact">Start Here</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden animate-fade-in">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-card border-t border-border">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`block px-3 py-2 text-base font-sans transition-all-smooth ${
                    isActive(item.path)
                      ? 'text-primary font-medium bg-secondary/50'
                      : 'text-foreground hover:text-primary hover:bg-secondary/30'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-3 py-2">
                <Button 
                  asChild 
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-sans"
                  onClick={() => setIsOpen(false)}
                >
                  <Link to="/contact">Start Here</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;

