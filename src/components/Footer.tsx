
import { Link } from 'react-router-dom';
import { Github, Twitter, Mail, Globe } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-space-900 border-t border-space-700">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block mb-4">
              <span className="text-2xl font-display font-bold tracking-wider text-white">
                SciFiNames<span className="text-neon-blue">.com</span>
              </span>
            </Link>
            <p className="text-white/60 max-w-md mb-6">
              Creating the perfect names for your sci-fi universe. From starships to alien species, 
              our generators help bring your cosmic imagination to life.
            </p>
            <div className="flex space-x-4">
              <SocialLink href="https://github.com" icon={<Github size={20} />} />
              <SocialLink href="https://twitter.com" icon={<Twitter size={20} />} />
              <SocialLink href="mailto:contact@scifinames.com" icon={<Mail size={20} />} />
              <SocialLink href="https://scifinames.com" icon={<Globe size={20} />} />
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-white font-display font-bold mb-4">Generators</h3>
            <ul className="space-y-2">
              <FooterLink to="/generator/starship">Starship Names</FooterLink>
              <FooterLink to="/generator/alien">Alien Species</FooterLink>
              <FooterLink to="/generator/station">Space Stations</FooterLink>
              <FooterLink to="/generator/empire">Galactic Empires</FooterLink>
              <FooterLink to="/generator/ai">AI Entities</FooterLink>
              <FooterLink to="/generator/colony">Space Colonies</FooterLink>
            </ul>
          </div>
          
          {/* Company */}
          <div>
            <h3 className="text-white font-display font-bold mb-4">Company</h3>
            <ul className="space-y-2">
              <FooterLink to="/about">About Us</FooterLink>
              <FooterLink to="/contact">Contact</FooterLink>
              <FooterLink to="/privacy">Privacy Policy</FooterLink>
              <FooterLink to="/terms">Terms of Service</FooterLink>
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-space-700 mt-12 pt-6 text-center md:flex md:justify-between md:text-left">
          <p className="text-white/50 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} SciFiNames.com. All rights reserved.
          </p>
          <p className="text-white/50 text-sm">
            <span className="font-mono">Venturing beyond Earth, one name at a time.</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

const SocialLink = ({ href, icon }: { href: string; icon: React.ReactNode }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer"
    className="w-9 h-9 flex items-center justify-center rounded-full bg-space-700 text-white/70 hover:bg-space-600 hover:text-neon-blue transition-colors duration-300"
  >
    {icon}
  </a>
);

const FooterLink = ({ to, children }: { to: string; children: React.ReactNode }) => (
  <li>
    <Link 
      to={to} 
      className="text-white/60 hover:text-neon-blue transition-colors duration-300"
    >
      {children}
    </Link>
  </li>
);

export default Footer;
