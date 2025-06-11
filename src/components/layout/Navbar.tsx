
import { useState, useEffect } from 'react';
import { List, X, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { OneArcLogo } from '@/components/ui/OneArcLogo';
import { ThemeToggle } from '@/components/ui/ThemeToggle';

const NavLinks = [
  { name: 'About', href: '/about' },
  { name: 'Services', href: '#features' },
  { name: 'Portfolio', href: '#testimonials' },
  { name: 'Contact', href: '#contact' },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const renderNavLink = (link: typeof NavLinks[0]) => {
    if (link.href.startsWith('/')) {
      return (
        <Link 
          key={link.name}
          to={link.href}
          className="text-foreground/70 hover:text-foreground transition-all duration-300 text-sm font-medium relative group px-3 py-2"
        >
          {link.name}
          <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
        </Link>
      );
    }
    
    return (
      <a 
        key={link.name}
        href={link.href}
        className="text-foreground/70 hover:text-foreground transition-all duration-300 text-sm font-medium relative group px-3 py-2"
      >
        {link.name}
        <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
      </a>
    );
  };

  const renderMobileNavLink = (link: typeof NavLinks[0]) => {
    if (link.href.startsWith('/')) {
      return (
        <Link 
          key={link.name}
          to={link.href}
          className="text-foreground hover:text-primary transition-colors duration-300 py-3 text-lg font-medium"
          onClick={() => setMobileMenuOpen(false)}
        >
          {link.name}
        </Link>
      );
    }
    
    return (
      <a 
        key={link.name}
        href={link.href}
        className="text-foreground hover:text-primary transition-colors duration-300 py-3 text-lg font-medium"
        onClick={() => setMobileMenuOpen(false)}
      >
        {link.name}
      </a>
    );
  };

  return (
    <>
      {/* Urgency Banner with Blue-White-Purple Gradient */}
      <div className="bg-gradient-to-r from-blue-600 via-white to-purple-600 text-gray-800 text-center py-2 text-sm font-medium animate-pulse">
        🔥 Limited Time: FREE Strategy Session - Only 5 Spots Left This Month!
      </div>
      
      <nav className="fixed top-10 left-4 right-4 z-50 glass-morphism-navbar">
        <div className="container mx-auto px-6 py-3">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <OneArcLogo size="small" />
            </Link>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex md:items-center md:space-x-2">
              {NavLinks.map(renderNavLink)}
            </div>

            {/* Right side controls */}
            <div className="hidden md:flex items-center gap-4">
              <ThemeToggle />
              <a 
                href="tel:+1234567890"
                className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors text-sm font-medium nav-link-glow"
              >
                <Phone size={16} />
                Call Now
              </a>
              <a 
                href="#contact"
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-6 py-2 rounded-full font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 text-sm cta-glow"
              >
                Get Free Quote →
              </a>
            </div>
            
            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center gap-2">
              <ThemeToggle />
              <button 
                className="text-foreground hover:text-primary p-2 hover:bg-muted rounded-lg transition-colors nav-button-glow"
                onClick={() => setMobileMenuOpen(true)}
              >
                <List size={20} />
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile Menu */}
        <div className={cn(
          "fixed inset-y-0 right-0 w-full max-w-sm glass-morphism-mobile z-50 transform transition-transform duration-300 ease-in-out",
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}>
          <div className="p-6 flex flex-col h-full">
            <div className="flex justify-between items-center mb-8">
              <Link to="/">
                <OneArcLogo />
              </Link>
              <button 
                className="text-foreground hover:text-primary p-2 hover:bg-muted rounded-lg transition-colors nav-button-glow"
                onClick={() => setMobileMenuOpen(false)}
              >
                <X size={24} />
              </button>
            </div>
            
            <div className="flex flex-col space-y-4">
              {NavLinks.map(renderMobileNavLink)}
              <a 
                href="tel:+1234567890"
                className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors py-3 text-lg font-medium nav-link-glow"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Phone size={20} />
                Call Now
              </a>
              <a 
                href="#contact"
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 text-center mt-6 cta-glow"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get Free Quote →
              </a>
            </div>
          </div>
        </div>
        
        {/* Backdrop */}
        {mobileMenuOpen && (
          <div 
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
            onClick={() => setMobileMenuOpen(false)}
          />
        )}
      </nav>
    </>
  );
};
