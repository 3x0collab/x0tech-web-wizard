import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, ChevronRight, Sparkles } from 'lucide-react';
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
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      scrolled 
        ? 'bg-background/98 backdrop-blur-xl border-b border-border/40 shadow-elegant' 
        : 'bg-background/70 backdrop-blur-md'
    }`}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <NavLink to="/" className="flex items-center gap-3 group">
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-gradient-primary opacity-0 group-hover:opacity-30 blur-xl transition-all duration-500"></div>
                <img 
                  src="/lovable-uploads/29d73fec-f2da-4dcd-8ba9-2a01937574bd.png" 
                  alt="3x0Tech Solutions" 
                  className="h-12 w-12 relative z-10 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xl lg:text-2xl font-black gradient-text-flow">
                  3x0Tech Solutions
                </span>
                <span className="text-xs text-muted-foreground font-semibold hidden lg:flex items-center gap-1">
                  <Sparkles className="h-3 w-3 text-accent" />
                  Enterprise Technology Excellence
                </span>
              </div>
            </NavLink>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex">
            <div className="flex items-center space-x-2">
              {navItems.map((item, index) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  className={({ isActive }) =>
                    `group relative px-5 py-3 rounded-xl text-sm font-semibold transition-all duration-500 ${
                      isActive
                        ? 'text-primary-foreground' 
                        : 'text-foreground hover:text-primary'
                    }`
                  }
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {({ isActive }) => (
                    <>
                      <span className="relative z-10 flex items-center gap-2">
                        {item.name}
                        {isActive && <div className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />}
                      </span>
                      {isActive && (
                        <div className="absolute inset-0 rounded-xl bg-gradient-primary shadow-glow"></div>
                      )}
                      {!isActive && (
                        <div className="absolute inset-0 rounded-xl bg-accent/0 group-hover:bg-accent/30 transition-all duration-500"></div>
                      )}
                      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-primary group-hover:w-full transition-all duration-500"></div>
                    </>
                  )}
                </NavLink>
              ))}
            </div>
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <NavLink to="/contact">
              <Button 
                variant="hero" 
                size="lg" 
                className="group relative"
              >
                <Sparkles className="h-4 w-4 mr-2 group-hover:rotate-180 transition-transform duration-500" />
                <span className="relative z-10 font-bold">Get Started</span>
                <ChevronRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </NavLink>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="relative group"
            >
              <div className="absolute inset-0 rounded-xl bg-gradient-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              {isOpen ? (
                <X className="h-6 w-6 relative z-10 text-foreground group-hover:text-primary-foreground transition-all duration-500 rotate-90" />
              ) : (
                <Menu className="h-6 w-6 relative z-10 text-foreground group-hover:text-primary-foreground transition-all duration-500" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden transition-all duration-500 ease-in-out ${
          isOpen 
            ? 'max-h-[32rem] opacity-100 transform translate-y-0' 
            : 'max-h-0 opacity-0 transform -translate-y-4 pointer-events-none'
        }`}>
          <div className="pb-6 pt-4">
            <div className="bg-gradient-to-br from-background via-card to-background backdrop-blur-xl border border-border/50 rounded-2xl shadow-brutal p-6 space-y-3">
              {navItems.map((item, index) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  className={({ isActive }) =>
                    `group block px-5 py-4 rounded-xl text-base font-semibold transition-all duration-500 ${
                      isActive
                        ? 'text-primary-foreground bg-gradient-primary shadow-glow scale-[1.02]'
                        : 'text-foreground hover:text-primary hover:bg-accent/30 hover:scale-[1.02]'
                    }`
                  }
                  onClick={() => setIsOpen(false)}
                  style={{ animationDelay: `${index * 75}ms` }}
                >
                  <div className="flex items-center justify-between">
                    <span>{item.name}</span>
                    <ChevronRight className="h-5 w-5 opacity-60 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </NavLink>
              ))}
              <div className="pt-4 border-t border-border/40">
                <NavLink to="/contact" onClick={() => setIsOpen(false)}>
                  <Button 
                    variant="hero" 
                    size="lg" 
                    className="w-full group"
                  >
                    <Sparkles className="h-4 w-4 mr-2 group-hover:rotate-180 transition-transform duration-500" />
                    <span className="relative z-10 font-bold">Get Started</span>
                    <ChevronRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
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