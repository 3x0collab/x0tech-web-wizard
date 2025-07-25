import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Home, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { NavLink } from 'react-router-dom';
import SEOHead from '@/components/SEOHead';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen py-12">
      <SEOHead 
        title="Page Not Found - 3x0Tech Solutions"
        description="The page you're looking for doesn't exist. Return to 3x0Tech Solutions homepage to explore our software development services."
        keywords="404 error, page not found, 3x0tech solutions"
      />
      
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center py-20">
          <div className="mb-8">
            <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
            <h2 className="text-3xl font-bold text-foreground mb-4">Page Not Found</h2>
            <p className="text-xl text-muted-foreground mb-8">
              The page you're looking for doesn't exist or has been moved.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <NavLink to="/">
              <Button variant="default" size="lg" className="group">
                <Home className="mr-2 h-5 w-5" />
                Go Home
              </Button>
            </NavLink>
            <Button 
              variant="outline" 
              size="lg" 
              onClick={() => window.history.back()}
              className="group"
            >
              <ArrowLeft className="mr-2 h-5 w-5" />
              Go Back
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;