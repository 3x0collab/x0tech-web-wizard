import { Zap, Users, Calculator, Code, ArrowRight, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { NavLink } from 'react-router-dom';
import SEOHead from '@/components/SEOHead';
import pyeImage from '@/assets/pye-ai-support.jpg';
import orbityxImage from '@/assets/orbityx-hr.jpg';
import quicksumImage from '@/assets/quicksum-accounting.jpg';
import stepCodeImage from '@/assets/step-code-learning.jpg';

const Solutions = () => {
  const solutions = [
    {
      title: 'PYE',
      subtitle: 'AI-Powered Customer Experience Platform',
      description: 'PYE revolutionizes customer interactions through advanced conversational AI technology. This intelligent platform seamlessly integrates across digital touchpoints, delivering personalized support experiences that drive engagement, satisfaction, and business growth through automated yet human-like interactions.',
      image: pyeImage,
      icon: Zap,
      features: [
        '24/7 Automated Customer Support',
        'Real-time Visitor Interaction',
        'Smart Question Answering',
        'User Guidance & Navigation',
        'Customer Engagement Analytics',
        'Easy Website Integration',
        'Multi-language Support',
        'Custom Branding Options'
      ],
      benefits: [
        'Reduce Customer Support Costs',
        'Improve Response Times',
        'Increase Customer Satisfaction',
        'Scale Support Operations'
      ]
    },
    {
      title: 'Orbityx',
      subtitle: 'Enterprise HR Management Suite',
      description: 'Orbityx transforms human capital management through intelligent automation and data-driven insights. This comprehensive platform streamlines recruitment, optimizes workforce operations, and provides strategic analytics that empower HR leaders to make informed decisions and drive organizational excellence.',
      image: orbityxImage,
      icon: Users,
      features: [
        'Automated Recruitment Process',
        'Digital Employee Onboarding',
        'Leave Management System',
        'Attendance Tracking',
        'Performance Management',
        'Employee Self-Service Portal',
        'Payroll Integration',
        'Compliance Management'
      ],
      benefits: [
        'Streamline HR Processes',
        'Reduce Administrative Tasks',
        'Improve Employee Experience',
        'Ensure Compliance'
      ]
    },
    {
      title: 'Quicksum',
      subtitle: 'Intelligent Financial Management Platform',
      description: 'Quicksum delivers sophisticated financial management capabilities through an intuitive, cloud-based platform. Designed for growing businesses, it automates complex accounting processes, provides real-time financial insights, and ensures compliance while maintaining the simplicity that busy entrepreneurs demand.',
      image: quicksumImage,
      icon: Calculator,
      features: [
        'Invoice Generation & Management',
        'Expense Tracking',
        'Financial Report Generation',
        'Receipt Management',
        'Tax Calculation',
        'Bank Reconciliation',
        'Multi-currency Support',
        'Cloud Data Backup'
      ],
      benefits: [
        'Simplify Financial Management',
        'Save Time on Bookkeeping',
        'Improve Cash Flow Visibility',
        'Ensure Tax Compliance'
      ]
    },
    {
      title: 'Step-Code',
      subtitle: 'Advanced Developer Education Ecosystem',
      description: 'Step-Code creates immersive learning experiences that bridge the gap between theoretical knowledge and practical expertise. This comprehensive platform combines interactive coding environments, industry-standard projects, and recognized certifications to accelerate career development and technical mastery.',
      image: stepCodeImage,
      icon: Code,
      features: [
        'Interactive Coding Lessons',
        'Hands-on Project Building',
        'Progress Tracking',
        'Certification Programs',
        'Code Editor & Compiler',
        'Community Support',
        'Multiple Programming Languages',
        'Beginner to Advanced Courses'
      ],
      benefits: [
        'Learn Programming Skills',
        'Build Real Projects',
        'Earn Recognized Certificates',
        'Join Developer Community'
      ]
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "3x0Tech Software Solutions",
    "description": "Comprehensive suite of intelligent software solutions for businesses",
    "itemListElement": solutions.map((solution, index) => ({
      "@type": "SoftwareApplication",
      "position": index + 1,
      "name": solution.title,
      "description": solution.description,
      "applicationCategory": "BusinessApplication",
      "operatingSystem": "Web, Windows, macOS, iOS, Android",
      "offers": {
        "@type": "Offer",
        "category": "Software Development Service"
      }
    }))
  };

  return (
    <div className="min-h-screen py-12">
      <SEOHead 
        title="Enterprise Software Solutions – AI, HR, Financial & Learning Platforms | 3x0Tech"
        description="Discover industry-leading software platforms: PYE AI Customer Experience, Orbityx HR Management Suite, Quicksum Financial Platform, and Step-Code Developer Education. Enterprise-grade solutions for modern businesses."
        keywords="enterprise software platforms, AI customer experience platform, HR management suite, financial management software, developer education platform, business automation solutions Africa, enterprise technology Nigeria"
        structuredData={structuredData}
      />
      {/* Hero Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our Software Solutions
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore our portfolio of enterprise-grade platforms engineered to optimize performance, 
              accelerate digital transformation, and unlock sustainable competitive advantages for modern businesses.
            </p>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="space-y-20">
            {solutions.map((solution, index) => (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}>
                {/* Content */}
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <solution.icon className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-foreground">{solution.title}</h2>
                      <p className="text-lg text-primary font-semibold">{solution.subtitle}</p>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground mb-6 text-lg">
                    {solution.description}
                  </p>

                  {/* Features Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                    {solution.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm">
                        <Check className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Benefits */}
                  <div className="mb-8">
                    <h4 className="font-semibold text-foreground mb-3">Key Benefits:</h4>
                    <div className="space-y-2">
                      {solution.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="flex items-center">
                          <ArrowRight className="h-4 w-4 text-primary mr-2" />
                          <span className="text-muted-foreground">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <NavLink to="/contact">
                    <Button variant="default" size="lg" className="group">
                      Get Started with {solution.title}
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </NavLink>
                </div>

                {/* Image */}
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <div className="relative">
                    <div className="w-full h-96 rounded-2xl shadow-elegant overflow-hidden">
                      <img 
                        src={solution.image} 
                        alt={`${solution.title} ${solution.subtitle} - Advanced business software solution by 3x0Tech for Nigerian companies`}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </div>
                </div>
              </div>
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
            Partner with us to implement enterprise-grade solutions that drive measurable results and position your organization for sustained success in the digital economy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <NavLink to="/contact">
              <Button variant="secondary" size="xl" className="group">
                Contact Our Team
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </NavLink>
            <NavLink to="/about">
              <Button variant="outline" size="xl" className="bg-transparent text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary">
                Learn More About Us
              </Button>
            </NavLink>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Solutions;