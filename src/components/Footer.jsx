import { Link } from 'react-router-dom';
import { Heart, Feather, Mail, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="flex items-center space-x-1">
                <Heart className="h-6 w-6 text-primary" />
                <Feather className="h-6 w-6 text-accent" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-lg font-semibold text-foreground">
                  The Candid Heart
                </span>
                <span className="font-sans text-xs text-muted-foreground -mt-1">
                  with Samantha Josette
                </span>
              </div>
            </div>
            <p className="font-sans text-muted-foreground mb-6 max-w-md leading-relaxed">
              Built for the ones who don't fit in boxes. A digital garden where systems meet soul, 
              and poetry holds hands with planning. All of you is welcome here.
            </p>
            <div className="flex space-x-4">
              <a 
                href="mailto:hello@samanthajosette.com" 
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-lg font-semibold text-foreground mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/work-with-me" 
                  className="font-sans text-muted-foreground hover:text-primary transition-colors"
                >
                  Work With Me
                </Link>
              </li>
              <li>
                <Link 
                  to="/poetry" 
                  className="font-sans text-muted-foreground hover:text-primary transition-colors"
                >
                  Poetry & Devotionals
                </Link>
              </li>
              <li>
                <Link 
                  to="/about" 
                  className="font-sans text-muted-foreground hover:text-primary transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  className="font-sans text-muted-foreground hover:text-primary transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-serif text-lg font-semibold text-foreground mb-4">
              Services
            </h3>
            <ul className="space-y-2">
              <li>
                <span className="font-sans text-muted-foreground">
                  Empathy Audits
                </span>
              </li>
              <li>
                <span className="font-sans text-muted-foreground">
                  Candid Copy & Automation
                </span>
              </li>
              <li>
                <span className="font-sans text-muted-foreground">
                  Speaking & Workshops
                </span>
              </li>
              <li>
                <span className="font-sans text-muted-foreground">
                  Creative Tools & Apps
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="font-sans text-muted-foreground">
            © 2025 The Candid Heart. All rights reserved. 
            <span className="block sm:inline sm:ml-2 mt-2 sm:mt-0 italic">
              You're not too much. You're just too whole for a template.
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

