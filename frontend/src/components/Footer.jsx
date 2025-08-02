import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Mail, MapPin, Sparkles, Flower2 } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden">
      {/* Wildflower and Butterfly Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-90"
        style={{ 
          backgroundImage: `url('/footer-wildflowers.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center bottom'
        }}
      ></div>
      
      {/* Subtle overlay for content readability */}
      <div className="absolute inset-0 bg-background/85 backdrop-blur-[0.5px]"></div>
      
              {/* Decorative elements (fallback if image not available) */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Wildflowers along bottom */}
          <div className="absolute bottom-0 left-0 right-0 h-32 opacity-60">
            <div className="absolute bottom-4 left-8 w-6 h-16">
              <Flower2 className="w-full h-full text-sage-400" />
            </div>
            <div className="absolute bottom-2 left-16 w-4 h-12">
              <Flower2 className="w-full h-full text-sage-300" />
            </div>
            <div className="absolute bottom-6 left-24 w-5 h-14">
              <Flower2 className="w-full h-full text-sage-500" />
            </div>
            <div className="absolute bottom-3 left-32 w-4 h-10">
              <Flower2 className="w-full h-full text-sage-400" />
            </div>
            <div className="absolute bottom-5 left-40 w-6 h-16">
              <Flower2 className="w-full h-full text-sage-300" />
            </div>
            <div className="absolute bottom-2 left-48 w-4 h-12">
              <Flower2 className="w-full h-full text-sage-500" />
            </div>
            <div className="absolute bottom-4 left-56 w-5 h-14">
              <Flower2 className="w-full h-full text-sage-400" />
            </div>
            <div className="absolute bottom-6 left-64 w-4 h-10">
              <Flower2 className="w-full h-full text-sage-300" />
            </div>
            <div className="absolute bottom-3 left-72 w-6 h-16">
              <Flower2 className="w-full h-full text-sage-500" />
            </div>
            <div className="absolute bottom-5 left-80 w-4 h-12">
              <Flower2 className="w-full h-full text-sage-400" />
            </div>
            <div className="absolute bottom-2 left-88 w-5 h-14">
              <Flower2 className="w-full h-full text-sage-300" />
            </div>
            <div className="absolute bottom-4 left-96 w-4 h-10">
              <Flower2 className="w-full h-full text-sage-500" />
            </div>
          </div>
          
          {/* Sparkles scattered above (representing butterflies) */}
          <div className="absolute bottom-16 left-12 w-8 h-8 opacity-70 animate-float">
            <Sparkles className="w-full h-full text-blue-300" />
          </div>
          <div className="absolute bottom-20 left-32 w-6 h-6 opacity-60 animate-float" style={{ animationDelay: '1s' }}>
            <Sparkles className="w-full h-full text-pink-300" />
          </div>
          <div className="absolute bottom-14 left-48 w-7 h-7 opacity-80 animate-float" style={{ animationDelay: '2s' }}>
            <Sparkles className="w-full h-full text-sage-400" />
          </div>
          <div className="absolute bottom-18 left-64 w-5 h-5 opacity-70 animate-float" style={{ animationDelay: '0.5s' }}>
            <Sparkles className="w-full h-full text-blue-200" />
          </div>
          <div className="absolute bottom-16 left-80 w-6 h-6 opacity-60 animate-float" style={{ animationDelay: '1.5s' }}>
            <Sparkles className="w-full h-full text-pink-200" />
          </div>
          <div className="absolute bottom-20 left-96 w-7 h-7 opacity-80 animate-float" style={{ animationDelay: '0.8s' }}>
            <Sparkles className="w-full h-full text-sage-300" />
          </div>
        </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <Heart className="h-5 w-5 text-sage-600" />
              <span className="font-serif text-lg font-semibold text-foreground">
                The Candid Heart
              </span>
            </div>
            <p className="font-sans text-sm text-muted-foreground leading-relaxed mb-4">
              Where strategy meets self-worth. A sacred creative studio for entrepreneurs 
              healing from betrayal trauma while building values-aligned businesses.
            </p>
            <p className="font-serif text-sm text-sage-600 italic">
              "You are worthy of a business that honors your soul."
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-serif text-base font-semibold text-foreground mb-4">
              Services
            </h3>
            <ul className="space-y-2 font-sans text-sm text-muted-foreground">
              <li><Link to="/healing" className="hover:text-sage-600 transition-colors">Healing & Coaching</Link></li>
              <li><Link to="/building" className="hover:text-sage-600 transition-colors">Strategy & Systems</Link></li>
              <li><Link to="/creating" className="hover:text-sage-600 transition-colors">Creative Projects</Link></li>
              <li><Link to="/organizations" className="hover:text-sage-600 transition-colors">For Organizations</Link></li>
              <li><Link to="/speaking" className="hover:text-sage-600 transition-colors">Speaking & Workshops</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-serif text-base font-semibold text-foreground mb-4">
              Resources
            </h3>
            <ul className="space-y-2 font-sans text-sm text-muted-foreground">
              <li><Link to="/soulful-strategy-book" className="hover:text-sage-600 transition-colors">Soulful Strategy Book</Link></li>
              <li><Link to="/say-it-brave" className="hover:text-sage-600 transition-colors">Say It Brave Assembly</Link></li>
              <li><Link to="/candid-heart-project" className="hover:text-sage-600 transition-colors">Community Project</Link></li>
              <li><Link to="/coaching" className="hover:text-sage-600 transition-colors">Beta Coaching Program</Link></li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="font-serif text-base font-semibold text-foreground mb-4">
              Connect
            </h3>
            <ul className="space-y-2 font-sans text-sm text-muted-foreground">
              <li><Link to="/contact" className="hover:text-sage-600 transition-colors">Get in Touch</Link></li>
              <li><Link to="/book-call" className="hover:text-sage-600 transition-colors">Book a Call</Link></li>
              <li>
                <a 
                  href="https://samanthajosette.me" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-sage-600 transition-colors"
                >
                  Personal Stories
                </a>
              </li>
            </ul>
            <div className="mt-4 flex items-center space-x-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4" />
              <span>Bowling Green, Ohio</span>
            </div>
          </div>
        </div>

        <div className="border-t border-sage-200/50 mt-12 pt-8 text-center">
          <p className="font-sans text-sm text-muted-foreground">
            © {currentYear} The Candid Heart • Made with intention.
          </p>
          <p className="font-serif text-sm text-sage-600 italic mt-2">
            "This is your digital front porch — a sacred creative studio where strategy meets self-worth."
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

