import { ArrowRight, Zap, Users, Calculator, Code, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { NavLink } from 'react-router-dom';
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

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-subtle overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{ backgroundImage: `url(${heroImage})` }}
        ></div>
        <div className="relative z-10 container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                Powering Africa's Growth with{' '}
                <span className="text-primary bg-gradient-primary bg-clip-text text-transparent">
                  Smart Software
                </span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
                3x0Tech Solution is a Nigerian tech startup building intelligent, affordable, 
                and scalable software solutions for everyday business challenges.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <NavLink to="/contact">
                  <Button variant="hero" size="xl" className="group">
                    Get Started
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </NavLink>
                <NavLink to="/solutions">
                  <Button variant="outline-hero" size="xl">
                    Our Solutions
                  </Button>
                </NavLink>
              </div>
            </div>
            <div className="relative hidden lg:block">
              <div className="w-full h-96 rounded-2xl shadow-elegant overflow-hidden">
                <img 
                  src={heroImage} 
                  alt="Technology and innovation in Africa" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Preview Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Core Solutions
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover our suite of innovative software solutions designed to transform your business operations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <Card key={index} className="group hover:shadow-glow transition-all duration-300 hover:scale-[1.02] border-border">
                <div className="aspect-video overflow-hidden rounded-t-lg">
                  <img 
                    src={solution.image} 
                    alt={solution.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Join hundreds of African businesses already using our smart software solutions to grow and succeed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <NavLink to="/contact">
              <Button variant="secondary" size="xl" className="group">
                Contact Us Today
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </NavLink>
            <NavLink to="/about">
              <Button variant="outline" size="xl" className="bg-transparent text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary">
                Learn About Us
              </Button>
            </NavLink>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;