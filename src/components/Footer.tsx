import { NavLink } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img 
                src="/lovable-uploads/29d73fec-f2da-4dcd-8ba9-2a01937574bd.png" 
                alt="3x0Tech Solution" 
                className="h-10 w-10"
              />
              <h3 className="text-2xl font-bold">3x0Tech Solution</h3>
            </div>
            <p className="mb-4 text-primary-foreground/80">
              Powering Africa's Growth with Smart Software. We build intelligent, 
              affordable, and scalable software solutions for everyday business challenges.
            </p>
            <div className="space-y-2">
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                <span>info@3x0techsolutionsltd.com.ng</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                <span>0816 4435695, 0701 657 3950, 0802 906 3771</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2" />
                <span>Number 22, Charity Avenue, Sango Ota, Ogun State, Nigeria</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <NavLink to="/" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink to="/solutions" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Our Solutions
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Contact
                </NavLink>
              </li>
              <li>
                <NavLink to="/blog" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Blog
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Our Solutions */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Solutions</h4>
            <ul className="space-y-2">
              <li>
                <span className="text-primary-foreground/80">PYE - AI Assistant</span>
              </li>
              <li>
                <span className="text-primary-foreground/80">Orbityx - HR Software</span>
              </li>
              <li>
                <span className="text-primary-foreground/80">Quicksum - Accounting</span>
              </li>
              <li>
                <span className="text-primary-foreground/80">Step-Code - Learning</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Links & Copyright */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-4 mb-4 md:mb-0">
            <Facebook className="h-6 w-6 text-primary-foreground/60 hover:text-primary-foreground cursor-pointer transition-colors" />
            <Twitter className="h-6 w-6 text-primary-foreground/60 hover:text-primary-foreground cursor-pointer transition-colors" />
            <Linkedin className="h-6 w-6 text-primary-foreground/60 hover:text-primary-foreground cursor-pointer transition-colors" />
            <Instagram className="h-6 w-6 text-primary-foreground/60 hover:text-primary-foreground cursor-pointer transition-colors" />
          </div>
          <div className="text-center text-primary-foreground/60">
            <p>&copy; 2024 3x0Tech Solution. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;