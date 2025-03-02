
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-space-900/80 backdrop-blur-md py-3 shadow-md' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center group">
          <span className="text-xl md:text-2xl font-display font-bold tracking-wider text-white group-hover:text-gradient transition-all duration-300">
            SciFiNames<span className="text-neon-blue">.com</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <NavLink to="/">Home</NavLink>
          <Link 
            to="/all-generators" 
            className="px-4 py-2 rounded-lg bg-gradient-to-r from-neon-blue to-neon-purple text-white font-medium hover:shadow-neon transition-all duration-300"
          >
            All Generators
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white hover:text-neon-blue transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X size={24} />
          ) : (
            <Menu size={24} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-space-800/95 backdrop-blur-md border-b border-space-600 animate-fade-in-up">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <MobileNavLink to="/" onClick={() => setIsMobileMenuOpen(false)}>Home</MobileNavLink>
            <Link 
              to="/all-generators"
              className="px-4 py-2 rounded-lg bg-gradient-to-r from-neon-blue to-neon-purple text-white font-medium text-center hover:shadow-neon transition-all duration-300"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              All Generators
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

// Desktop Nav Link
const NavLink = ({ to, children }: { to: string; children: React.ReactNode }) => (
  <Link 
    to={to} 
    className="text-white/90 hover:text-neon-blue font-medium transition-colors relative group"
  >
    {children}
    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-neon-blue transition-all duration-300 group-hover:w-full"></span>
  </Link>
);

// Mobile Nav Link
const MobileNavLink = ({ to, children, onClick }: { to: string; children: React.ReactNode; onClick: () => void }) => (
  <Link 
    to={to} 
    className="text-white/90 hover:text-neon-blue font-medium transition-colors py-2 border-b border-space-600/50"
    onClick={onClick}
  >
    {children}
  </Link>
);

export default Header;
