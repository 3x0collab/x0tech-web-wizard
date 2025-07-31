import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Our Solutions', path: '/solutions' },
    { name: 'Contact', path: '/contact' },
    { name: 'Blog', path: '/blog' }
  ];

  return (
    <nav className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <NavLink to="/" className="flex items-center gap-2">
              <img 
                src="/lovable-uploads/29d73fec-f2da-4dcd-8ba9-2a01937574bd.png" 
                alt="3x0Tech Solutions" 
                className="h-10 w-10 hover:rotate-12 transition-transform duration-300"
              />
              <span className="text-xl font-bold text-primary">3x0Tech Solutions</span>
            </NavLink>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  className={({ isActive }) =>
                    `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      isActive
                        ? 'text-primary bg-accent'
                        : 'text-foreground hover:text-primary hover:bg-accent'
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              ))}
            </div>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <NavLink to="/contact">
              <Button variant="default" size="sm">
                Get Started
              </Button>
            </NavLink>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-card border rounded-lg mt-2 mb-2">
              {navItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  className={({ isActive }) =>
                    `block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                      isActive
                        ? 'text-primary bg-accent'
                        : 'text-foreground hover:text-primary hover:bg-accent'
                    }`
                  }
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </NavLink>
              ))}
              <div className="pt-2">
                <NavLink to="/contact" onClick={() => setIsOpen(false)}>
                  <Button variant="default" size="sm" className="w-full">
                    Get Started
                  </Button>
                </NavLink>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;