import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Our Solutions', path: '/solutions' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Contact', path: '/contact' },
    { name: 'Blog', path: '/blog' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-background/95 backdrop-blur-md border-b border-border/50 shadow-lg shadow-primary/5' 
        : 'bg-background/80 backdrop-blur-sm'
    }`}>
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex justify-between items-center h-16 lg:h-18">
          {/* Logo */}
          <div className="flex-shrink-0">
            <NavLink to="/" className="flex items-center gap-3 group">
              <div className="relative">
                <img 
                  src="/lovable-uploads/29d73fec-f2da-4dcd-8ba9-2a01937574bd.png" 
                  alt="3x0Tech Solutions" 
                  className="h-10 w-10 transition-all duration-300 group-hover:scale-110 group-hover:rotate-12"
                />
                <div className="absolute inset-0 rounded-full bg-primary/20 scale-0 group-hover:scale-125 transition-transform duration-300"></div>
              </div>
              <div className="flex flex-col">
                <span className="text-xl lg:text-2xl font-bold bg-gradient-to-r from-primary via-primary to-primary-foreground bg-clip-text text-transparent leading-tight">
                  3x0Tech Solutions
                </span>
                <span className="text-xs text-muted-foreground font-medium hidden lg:block">
                  Enterprise Technology Solutions
                </span>
              </div>
            </NavLink>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex">
            <div className="flex items-center space-x-1">
              {navItems.map((item, index) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  className={({ isActive }) =>
                    `relative px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105 ${
                      isActive
                        ? 'text-primary bg-accent/80 shadow-sm' 
                        : 'text-foreground/80 hover:text-primary hover:bg-accent/50'
                    }`
                  }
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <span className="relative z-10">{item.name}</span>
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary/10 to-primary/5 scale-0 transition-transform duration-300 hover:scale-100"></div>
                </NavLink>
              ))}
            </div>
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <NavLink to="/contact">
              <Button 
                variant="default" 
                size="sm" 
                className="relative overflow-hidden group hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-primary/25"
              >
                <span className="relative z-10">Get Started</span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Button>
            </NavLink>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="relative group hover:scale-110 transition-all duration-300"
            >
              <div className="absolute inset-0 rounded-lg bg-accent/50 scale-0 group-hover:scale-100 transition-transform duration-300"></div>
              {isOpen ? (
                <X className="h-6 w-6 relative z-10 transition-transform duration-300 rotate-180" />
              ) : (
                <Menu className="h-6 w-6 relative z-10 transition-transform duration-300" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden transition-all duration-300 ease-in-out ${
          isOpen 
            ? 'max-h-96 opacity-100 transform translate-y-0' 
            : 'max-h-0 opacity-0 transform -translate-y-4 pointer-events-none'
        }`}>
          <div className="pb-4 pt-2">
            <div className="bg-card/95 backdrop-blur-sm border border-border/50 rounded-xl shadow-xl p-4 space-y-2">
              {navItems.map((item, index) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  className={({ isActive }) =>
                    `block px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 ${
                      isActive
                        ? 'text-primary bg-accent/80 shadow-sm scale-[1.02]'
                        : 'text-foreground/80 hover:text-primary hover:bg-accent/50 hover:scale-[1.02]'
                    }`
                  }
                  onClick={() => setIsOpen(false)}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="flex items-center justify-between">
                    <span>{item.name}</span>
                    <ChevronDown className="h-4 w-4 opacity-60 rotate-[-90deg]" />
                  </div>
                </NavLink>
              ))}
              <div className="pt-3 border-t border-border/30">
                <NavLink to="/contact" onClick={() => setIsOpen(false)}>
                  <Button 
                    variant="default" 
                    size="sm" 
                    className="w-full relative overflow-hidden group shadow-lg"
                  >
                    <span className="relative z-10">Get Started</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </Button>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;