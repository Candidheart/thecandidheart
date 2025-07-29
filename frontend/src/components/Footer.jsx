import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 text-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <Heart className="h-5 w-5 text-[#C8A25C]" />
              <span className="font-serif text-lg font-semibold text-foreground">
                The Candid Heart
              </span>
            </div>
            <p className="font-sans text-sm text-muted-foreground leading-relaxed mb-4">
              Where strategy meets self-worth. A sacred creative studio for entrepreneurs 
              healing from betrayal trauma while building values-aligned businesses.
            </p>
            <p className="font-serif text-sm text-[#C8A25C] italic">
              "You are worthy of a business that honors your soul."
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-serif text-base font-semibold text-foreground mb-4">
              Services
            </h3>
            <ul className="space-y-2 font-sans text-sm text-muted-foreground">
              <li><Link to="/healing" className="hover:text-[#C8A25C] transition-colors">Healing & Coaching</Link></li>
              <li><Link to="/building" className="hover:text-[#C8A25C] transition-colors">Strategy & Systems</Link></li>
              <li><Link to="/creating" className="hover:text-[#C8A25C] transition-colors">Creative Projects</Link></li>
              <li><Link to="/organizations" className="hover:text-[#C8A25C] transition-colors">For Organizations</Link></li>
              <li><Link to="/speaking" className="hover:text-[#C8A25C] transition-colors">Speaking & Workshops</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-serif text-base font-semibold text-foreground mb-4">
              Resources
            </h3>
            <ul className="space-y-2 font-sans text-sm text-muted-foreground">
              <li><Link to="/soulful-strategy-book" className="hover:text-[#C8A25C] transition-colors">Soulful Strategy Book</Link></li>
              <li><Link to="/say-it-brave" className="hover:text-[#C8A25C] transition-colors">Say It Brave Assembly</Link></li>
              <li><Link to="/candid-heart-project" className="hover:text-[#C8A25C] transition-colors">Community Project</Link></li>
              <li><Link to="/coaching" className="hover:text-[#C8A25C] transition-colors">Beta Coaching Program</Link></li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="font-serif text-base font-semibold text-foreground mb-4">
              Connect
            </h3>
            <ul className="space-y-2 font-sans text-sm text-muted-foreground">
              <li><Link to="/contact" className="hover:text-[#C8A25C] transition-colors">Get in Touch</Link></li>
              <li><Link to="/book-call" className="hover:text-[#C8A25C] transition-colors">Book a Call</Link></li>
              <li>
                <a 
                  href="https://samanthajosette.me" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-[#C8A25C] transition-colors"
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

        <div className="border-t border-gray-300 mt-8 pt-8 text-center">
          <p className="font-sans text-sm text-muted-foreground">
            © {currentYear} The Candid Heart • Made with intention.
          </p>
          <p className="font-serif text-sm text-[#C8A25C] italic mt-2">
            "This is your digital front porch — a sacred creative studio where strategy meets self-worth."
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

