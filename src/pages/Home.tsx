import { ArrowRight, Zap, Users, Calculator, Code, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { NavLink } from 'react-router-dom';
import SEOHead from '@/components/SEOHead';
import heroImage from '@/assets/hero-banner.jpg';
import pyeImage from '@/assets/pye-ai-support.jpg';
import orbityxImage from '@/assets/orbityx-hr.jpg';
import quicksumImage from '@/assets/quicksum-accounting.jpg';
import stepCodeImage from '@/assets/step-code-learning.jpg';

const Home = () => {
  const solutions = [
    {
      title: 'PYE',
      subtitle: 'AI Customer Support Assistant',
      description: 'Intelligent AI-powered personal customer care assistant that integrates seamlessly into websites and platforms.',
      image: pyeImage,
      icon: Zap,
      features: ['24/7 Customer Support', 'Real-time Interaction', 'Smart Guidance']
    },
    {
      title: 'Orbityx',
      subtitle: 'Human Resource Automation Software',
      description: 'Complete HR management system handling recruitment, onboarding, leave tracking, and performance management.',
      image: orbityxImage,
      icon: Users,
      features: ['Automated Recruitment', 'Employee Management', 'Performance Tracking']
    },
    {
      title: 'Quicksum',
      subtitle: 'Simplified Accounting Software',
      description: 'Fast, lightweight accounting tool for small businesses handling invoices, financial summaries, and receipts.',
      image: quicksumImage,
      icon: Calculator,
      features: ['Invoice Management', 'Financial Reports', 'Receipt Tracking']
    },
    {
      title: 'Step-Code',
      subtitle: 'Interactive Coding & Learning Platform',
      description: 'E-learning platform for coding education, project building, and certification programs for developers.',
      image: stepCodeImage,
      icon: Code,
      features: ['Interactive Learning', 'Project Building', 'Certifications']
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "3x0Tech Solutions Ltd",
    "alternateName": "3x0Tech Solutions",
    "url": "https://3x0techsolutionsltd.com.ng",
    "logo": "https://3x0techsolutionsltd.com.ng/lovable-uploads/29d73fec-f2da-4dcd-8ba9-2a01937574bd.png",
    "description": "Nigerian tech startup building intelligent, affordable, and scalable software solutions including AI assistants, HR software, accounting tools, and learning platforms.",
    "foundingDate": "2024",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Number 22, Charity Avenue",
      "addressLocality": "Sango Ota",
      "addressRegion": "Ogun State",
      "addressCountry": "NG"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+234-816-443-5695",
      "email": "info@3x0techsolutionsltd.com.ng",
      "contactType": "Customer Service",
      "availableLanguage": "English"
    },
    "sameAs": [
      "https://3x0techsolutionsltd.com.ng"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Software Development Services",
      "itemListElement": solutions.map(solution => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "SoftwareApplication",
          "name": solution.title,
          "description": solution.description
        }
      }))
    }
  };

  return (
    <div className="min-h-screen">
      <SEOHead 
        title="3x0Tech Solutions Ltd – Web & Software Development Experts in Nigeria"
        description="Leading Nigerian tech startup building intelligent software solutions. We create custom websites, mobile apps, AI assistants, HR software, and accounting tools for businesses across Africa."
        keywords="web development Nigeria, software development Lagos, mobile app developers Nigeria, custom software Nigeria, AI assistants, HR software, accounting software, Nigerian tech startup, business automation Nigeria"
        structuredData={structuredData}
      />
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-subtle overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{ backgroundImage: `url(${heroImage})` }}
        ></div>
        <div className="relative z-10 container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left animate-fade-in">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                Powering Africa's Growth with{' '}
                <span className="gradient-text-flow">
                  Smart Software
                </span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
                3x0Tech Solutions is a Nigerian tech startup building intelligent, affordable, 
                and scalable software solutions for everyday business challenges.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <NavLink to="/contact">
                  <Button variant="hero" size="xl" className="group pulse-glow">
                    Get Started
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </NavLink>
                <NavLink to="/solutions">
                  <Button variant="outline-hero" size="xl" className="hover-lift">
                    Our Solutions
                  </Button>
                </NavLink>
              </div>
            </div>
            <div className="relative hidden lg:block float">
              <div className="w-full h-96 rounded-2xl shadow-elegant overflow-hidden hover-lift">
                <img 
                  src={heroImage} 
                  alt="3x0Tech Solutions team developing innovative software solutions for African businesses"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What We Do
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We specialize in creating cutting-edge digital solutions that drive business success
            </p>
          </div>

          {/* Service Categories */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            {/* Website Development */}
            <Card className="group hover:shadow-glow transition-all duration-300 hover:scale-[1.02] border-border">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Code className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">Website Development</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6 text-lg">
                  Custom-built websites tailored to client needs with responsive, modern design that engages users and drives conversions.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center text-sm">
                    <ChevronRight className="h-4 w-4 text-primary mr-2" />
                    <span>Responsive & Mobile-First Design</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <ChevronRight className="h-4 w-4 text-primary mr-2" />
                    <span>E-commerce Solutions</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <ChevronRight className="h-4 w-4 text-primary mr-2" />
                    <span>SEO Optimization</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <ChevronRight className="h-4 w-4 text-primary mr-2" />
                    <span>Content Management Systems</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Software Development */}
            <Card className="group hover:shadow-glow transition-all duration-300 hover:scale-[1.02] border-border">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Zap className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">Software Development</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6 text-lg">
                  Comprehensive software solutions including mobile apps and desktop applications for businesses and organizations.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <h4 className="font-semibold text-foreground">Mobile Apps</h4>
                    <div className="flex items-center text-sm">
                      <ChevronRight className="h-4 w-4 text-primary mr-2" />
                      <span>Android Development</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <ChevronRight className="h-4 w-4 text-primary mr-2" />
                      <span>iOS Development</span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-semibold text-foreground">Desktop Software</h4>
                    <div className="flex items-center text-sm">
                      <ChevronRight className="h-4 w-4 text-primary mr-2" />
                      <span>Business Applications</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <ChevronRight className="h-4 w-4 text-primary mr-2" />
                      <span>Enterprise Solutions</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Core Solutions Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Core Solutions
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover our suite of innovative software solutions designed to transform your business operations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 stagger-animation">
            {solutions.map((solution, index) => (
              <Card key={index} className="group card-interactive border-border">
                <div className="aspect-video overflow-hidden rounded-t-lg">
                  <img 
                    src={solution.image} 
                    alt={`${solution.title} - ${solution.subtitle} software solution by 3x0Tech`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <solution.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{solution.title}</CardTitle>
                      <CardDescription className="text-sm text-muted-foreground">
                        {solution.subtitle}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    {solution.description}
                  </p>
                  <div className="space-y-2 mb-4">
                    {solution.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm">
                        <ChevronRight className="h-4 w-4 text-primary mr-2" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  <NavLink to="/solutions">
                    <Button variant="outline" className="w-full group">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </NavLink>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Premium CTA Section */}
      <section className="relative py-24 bg-primary overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 bg-accent rounded-full blur-xl bounce-subtle"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-accent rounded-full blur-xl float"></div>
          <div className="absolute top-1/2 left-1/4 w-20 h-20 bg-accent rounded-full blur-lg pulse-glow"></div>
          <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-accent rounded-full blur-lg float"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            {/* Icon */}
            <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/20 rounded-full mb-6">
              <Zap className="w-8 h-8 text-accent" />
            </div>
            
            {/* Heading */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
              Ready to take your business to the{' '}
              <span className="text-accent">next level?</span>
            </h2>
            
            {/* Subheading */}
            <p className="text-xl md:text-2xl text-primary-foreground/90 mb-12 max-w-3xl mx-auto leading-relaxed">
              Join hundreds of African businesses already transforming their operations with our intelligent software solutions. Get started today and experience the future of business automation.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <NavLink to="/contact">
                <Button variant="secondary" size="xl" className="group shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  <Users className="mr-3 h-5 w-5" />
                  Request a Demo
                  <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </NavLink>
              
              <NavLink to="/solutions">
                <Button 
                  variant="outline" 
                  size="xl" 
                  className="bg-transparent text-primary-foreground border-2 border-primary-foreground/30 hover:bg-primary-foreground hover:text-primary shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  <Code className="mr-3 h-5 w-5" />
                  Explore Solutions
                </Button>
              </NavLink>
            </div>
            
            {/* Trust Indicators */}
            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-8 text-primary-foreground/70">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span className="text-sm">100+ Happy Clients</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span className="text-sm">24/7 Support</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span className="text-sm">Nigerian-Built Solutions</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;