import { ArrowRight, Zap, Users, Calculator, Code, Smartphone, ChevronRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { NavLink } from 'react-router-dom';
import SEOHead from '@/components/SEOHead';
import heroImage from '@/assets/hero-banner.jpg';
import pyeImage from '@/assets/pye-ai-support.jpg';
import orbityxImage from '@/assets/orbityx-hr.jpg';
import quicksumImage from '@/assets/quicksum-accounting.jpg';
import stepCodeImage from '@/assets/step-code-learning.jpg';
import campusCafeImage from '@/assets/campuscafe-printing.jpg';

const Home = () => {
  const solutions = [
    {
      title: 'PYE',
      subtitle: 'AI-Powered Customer Experience Platform',
      description: 'Revolutionary conversational AI that transforms customer interactions with intelligent, 24/7 support capabilities and seamless integration across all digital touchpoints.',
      image: pyeImage,
      icon: Zap,
      features: ['24/7 Customer Support', 'Real-time Interaction', 'Smart Guidance']
    },
    {
      title: 'Orbityx',
      subtitle: 'Enterprise HR Management Suite',
      description: 'Comprehensive human capital management platform that automates recruitment, streamlines workforce operations, and delivers actionable insights for strategic HR decisions.',
      image: orbityxImage,
      icon: Users,
      features: ['Automated Recruitment', 'Employee Management', 'Performance Tracking']
    },
    {
      title: 'Quicksum',
      subtitle: 'Intelligent Financial Management Platform',
      description: 'Cloud-based accounting solution that simplifies financial operations with automated reporting, real-time insights, and intelligent expense management for growing businesses.',
      image: quicksumImage,
      icon: Calculator,
      features: ['Invoice Management', 'Financial Reports', 'Receipt Tracking']
    },
    {
      title: 'Step-Code',
      subtitle: 'Advanced Developer Education Ecosystem',
      description: 'Immersive coding education platform featuring hands-on learning experiences, industry-standard projects, and recognized certifications that bridge the gap between education and career success.',
      image: stepCodeImage,
      icon: Code,
      features: ['Interactive Learning', 'Project Building', 'Certifications']
    },
    {
      title: 'CampusCafe',
      subtitle: 'On-Demand Document Printing & Delivery Platform',
      description: 'Revolutionary mobile platform connecting students with nearby printing agents for instant document printing and delivery services, operating like a modern food delivery app.',
      image: campusCafeImage,
      icon: Smartphone,
      features: ['Document Upload', 'Agent Network', 'Delivery Tracking']
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
        title="3x0Tech Solutions Ltd – Leading Enterprise Software Development Company in Nigeria | AI Solutions & Digital Transformation"
        description="Transform your business with enterprise-grade software solutions from Nigeria's premier technology company. We deliver AI-powered platforms, custom enterprise applications, digital transformation services, and technology consulting across Africa. Trusted by businesses for innovative solutions."
        keywords="enterprise software development Nigeria, digital transformation Africa, AI technology solutions Nigeria, custom software development Lagos, business automation software, technology consulting Africa, software integration services, enterprise applications Nigeria, Nigerian tech company, Africa software development, PYE AI assistant, Orbityx HR software, Quicksum accounting, Step-Code learning platform"
        structuredData={structuredData}
      />
      {/* Revolutionary Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-muted/30">
        {/* Advanced Background Layers */}
        <div className="absolute inset-0 bg-gradient-mesh opacity-60"></div>
        <div className="absolute inset-0 opacity-10">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${heroImage})` }}
          ></div>
        </div>
        
        {/* Floating geometric shapes */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-accent/10 rounded-full blur-3xl bounce-subtle"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-primary/10 rounded-full blur-3xl float"></div>
        <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-accent/15 rounded-full blur-2xl pulse-glow"></div>
        <div className="absolute bottom-1/3 left-1/3 w-40 h-40 bg-primary/10 rounded-full blur-3xl float" style={{ animationDelay: '2s' }}></div>
        
        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="text-center lg:text-left space-y-10">
              {/* Main Headline */}
              <div className="space-y-6 animate-fade-in">
                <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-accent/20 via-primary/20 to-accent/20 rounded-full border border-accent/30 backdrop-blur-sm shadow-lg mb-8 hover-lift">
                  <Sparkles className="h-4 w-4 text-accent mr-2" />
                  <span className="text-sm font-bold text-accent">Revolutionary Tech Solutions</span>
                  <div className="ml-2 h-2 w-2 rounded-full bg-accent animate-pulse"></div>
                </div>
                <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-[1.1]">
                  <span className="text-foreground">Transforming</span>
                  <br />
                  <span className="gradient-text-flow">African Business</span>
                  <br />
                  <span className="text-foreground">with AI</span>{' '}
                  <span className="inline-block gradient-text-flow hover-tilt">Excellence</span>
                </h1>
              </div>

              {/* Enhanced Description */}
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl animate-fade-in" style={{ animationDelay: '0.2s' }}>
                We craft <strong className="text-foreground font-bold">next-generation software ecosystems</strong> that propel 
                African enterprises into the future. Experience the power of <span className="text-primary font-semibold">intelligent automation</span>, 
                seamless integration, and unparalleled scalability.
              </p>

              {/* Advanced CTA Section */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start animate-fade-in" style={{ animationDelay: '0.4s' }}>
                <NavLink to="/contact">
                  <Button variant="hero" size="xl" className="group shadow-brutal hover:shadow-glow">
                    <Zap className="mr-3 h-6 w-6 group-hover:rotate-180 transition-transform duration-500" />
                    Launch Your Transformation
                    <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform duration-300" />
                  </Button>
                </NavLink>
                <NavLink to="/solutions">
                  <Button variant="outline-hero" size="xl" className="backdrop-blur-sm hover-lift">
                    <Code className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                    Explore Solutions
                    <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </NavLink>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-8 lg:gap-12 pt-8 animate-fade-in" style={{ animationDelay: '0.6s' }}>
                <div className="group text-center hover-lift cursor-default">
                  <div className="text-4xl lg:text-5xl font-black gradient-text-flow mb-2">50+</div>
                  <div className="text-sm font-semibold text-muted-foreground">Projects Delivered</div>
                </div>
                <div className="h-12 w-px bg-border"></div>
                <div className="group text-center hover-lift cursor-default">
                  <div className="text-4xl lg:text-5xl font-black gradient-text-flow mb-2">100%</div>
                  <div className="text-sm font-semibold text-muted-foreground">Client Satisfaction</div>
                </div>
                <div className="h-12 w-px bg-border"></div>
                <div className="group text-center hover-lift cursor-default">
                  <div className="text-4xl lg:text-5xl font-black gradient-text-flow mb-2">24/7</div>
                  <div className="text-sm font-semibold text-muted-foreground">Support Available</div>
                </div>
              </div>
            </div>
            <div className="relative hidden lg:block animate-fade-in" style={{ animationDelay: '0.3s' }}>
              {/* 3D Hero Visual */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-primary rounded-[2rem] blur-3xl opacity-20 group-hover:opacity-40 transition-all duration-1000"></div>
                <div className="relative w-full h-[600px] rounded-[2rem] shadow-brutal overflow-hidden hover-lift bg-gradient-to-br from-card via-card/95 to-card/90 backdrop-blur-xl border-2 border-border/50">
                  <img 
                    src={heroImage} 
                    alt="3x0Tech Solutions: Advanced software development and AI solutions transforming African businesses"
                    className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-accent/20"></div>
                  
                  {/* Floating Tech Icons */}
                  <div className="absolute top-8 right-8 p-4 bg-gradient-to-br from-accent to-accent/80 rounded-2xl shadow-glow float backdrop-blur-sm border border-white/20">
                    <Zap className="h-7 w-7 text-white" />
                  </div>
                  <div className="absolute bottom-8 left-8 p-4 bg-gradient-to-br from-primary to-primary/80 rounded-2xl shadow-glow bounce-subtle backdrop-blur-sm border border-white/20">
                    <Code className="h-7 w-7 text-white" />
                  </div>
                  <div className="absolute top-1/2 left-8 p-3 bg-gradient-to-br from-accent/90 to-accent/70 rounded-xl shadow-lg pulse-glow backdrop-blur-sm border border-white/20">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <div className="absolute top-1/3 right-12 p-3 bg-gradient-to-br from-primary/90 to-primary/70 rounded-xl shadow-lg float backdrop-blur-sm border border-white/20" style={{ animationDelay: '1s' }}>
                    <Smartphone className="h-6 w-6 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Revolutionary Services Section */}
      <section className="py-32 bg-background relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-mesh"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-6 py-3 bg-accent/10 rounded-full border border-accent/20 mb-8">
              <span className="text-sm font-semibold text-accent">💡 Our Expertise</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground mb-6 leading-tight">
              What We <span className="gradient-text-flow">Craft</span>
            </h2>
            <p className="text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              We architect digital ecosystems that transform businesses, accelerate growth, 
              and unlock unprecedented possibilities across the African continent
            </p>
          </div>

          {/* Advanced Service Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
            {/* Revolutionary Web Development */}
            <Card className="group card-interactive border-0 bg-gradient-to-br from-background to-muted/50 shadow-brutal hover:shadow-glow">
              <CardHeader className="pb-6">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-4 bg-gradient-primary rounded-2xl shadow-lg group-hover:rotate-12 transition-transform duration-500">
                    <Code className="h-10 w-10 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-3xl font-black">Web Development</CardTitle>
                    <p className="text-accent font-semibold">Next-Gen Digital Experiences</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground text-lg leading-relaxed">
                  We architect <strong className="text-foreground">sophisticated web ecosystems</strong> that merge 
                  cutting-edge technology with intuitive design. Our platforms don't just look stunning—they 
                  drive conversions, enhance engagement, and scale effortlessly with your business growth.
                </p>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-accent/5 rounded-xl border border-accent/20">
                    <div className="flex items-center mb-2">
                      <ChevronRight className="h-5 w-5 text-accent mr-2" />
                      <span className="font-semibold">Responsive Design</span>
                    </div>
                    <p className="text-sm text-muted-foreground">Mobile-first architecture</p>
                  </div>
                  <div className="p-4 bg-accent/5 rounded-xl border border-accent/20">
                    <div className="flex items-center mb-2">
                      <ChevronRight className="h-5 w-5 text-accent mr-2" />
                      <span className="font-semibold">E-commerce</span>
                    </div>
                    <p className="text-sm text-muted-foreground">Advanced shopping platforms</p>
                  </div>
                  <div className="p-4 bg-accent/5 rounded-xl border border-accent/20">
                    <div className="flex items-center mb-2">
                      <ChevronRight className="h-5 w-5 text-accent mr-2" />
                      <span className="font-semibold">SEO Mastery</span>
                    </div>
                    <p className="text-sm text-muted-foreground">Search engine dominance</p>
                  </div>
                  <div className="p-4 bg-accent/5 rounded-xl border border-accent/20">
                    <div className="flex items-center mb-2">
                      <ChevronRight className="h-5 w-5 text-accent mr-2" />
                      <span className="font-semibold">CMS Integration</span>
                    </div>
                    <p className="text-sm text-muted-foreground">Content management excellence</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Advanced Software Development */}
            <Card className="group card-interactive border-0 bg-gradient-to-br from-background to-muted/50 shadow-brutal hover:shadow-glow">
              <CardHeader className="pb-6">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-4 bg-gradient-primary rounded-2xl shadow-lg group-hover:rotate-12 transition-transform duration-500">
                    <Zap className="h-10 w-10 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-3xl font-black">Software Development</CardTitle>
                    <p className="text-accent font-semibold">Enterprise-Grade Solutions</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground text-lg leading-relaxed">
                  We engineer <strong className="text-foreground">enterprise-grade software platforms</strong> using 
                  modern architecture patterns and industry best practices. Our solutions seamlessly integrate 
                  with existing systems while providing unmatched scalability and security.
                </p>
                
                <div className="space-y-6">
                  <div className="p-6 bg-primary/5 rounded-2xl border border-primary/20">
                    <h4 className="font-black text-xl text-foreground mb-4">Mobile Excellence</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-center">
                        <ChevronRight className="h-5 w-5 text-primary mr-3" />
                        <span className="font-medium">Native Android Apps</span>
                      </div>
                      <div className="flex items-center">
                        <ChevronRight className="h-5 w-5 text-primary mr-3" />
                        <span className="font-medium">iOS Applications</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6 bg-primary/5 rounded-2xl border border-primary/20">
                    <h4 className="font-black text-xl text-foreground mb-4">Desktop Mastery</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-center">
                        <ChevronRight className="h-5 w-5 text-primary mr-3" />
                        <span className="font-medium">Business Applications</span>
                      </div>
                      <div className="flex items-center">
                        <ChevronRight className="h-5 w-5 text-primary mr-3" />
                        <span className="font-medium">Enterprise Solutions</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Revolutionary Solutions Showcase */}
      <section className="py-32 bg-gradient-to-br from-muted/30 via-background to-muted/50 relative overflow-hidden">
        {/* Advanced Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl float"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-primary opacity-5 rounded-full blur-2xl pulse-glow"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-24">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-primary/10 rounded-full border border-primary/20 mb-8 shadow-lg">
              <span className="text-sm font-bold text-primary">⚡ Revolutionary Solutions</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-black text-foreground mb-8 leading-tight">
              Our <span className="gradient-text-flow">Game-Changing</span>
              <br />Platforms
            </h2>
            <p className="text-2xl text-muted-foreground max-w-5xl mx-auto leading-relaxed">
              Discover our portfolio of <strong className="text-foreground">industry-disrupting platforms</strong> engineered 
              to revolutionize operations, amplify productivity, and catalyze exponential business growth across Africa
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 stagger-animation">
            {solutions.map((solution, index) => (
              <Card key={index} className="group card-interactive border-0 bg-gradient-to-br from-background via-background to-muted/30 shadow-brutal hover:shadow-glow overflow-hidden">
                {/* Enhanced Image Container */}
                <div className="relative aspect-video overflow-hidden">
                  <img 
                    src={solution.image} 
                    alt={`${solution.title} - ${solution.subtitle} revolutionary software solution by 3x0Tech`}
                    className="w-full h-full object-cover group-hover:scale-125 transition-all duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                  
                  {/* Floating Icon */}
                  <div className="absolute top-4 right-4 p-3 bg-gradient-primary rounded-full shadow-lg group-hover:rotate-12 transition-transform duration-500">
                    <solution.icon className="h-6 w-6 text-white" />
                  </div>
                  
                  {/* Tech Badge */}
                  <div className="absolute bottom-4 left-4 px-3 py-1 bg-accent/90 rounded-full backdrop-blur-sm">
                    <span className="text-xs font-bold text-white">NEXT-GEN TECH</span>
                  </div>
                </div>

                {/* Enhanced Content */}
                <div className="p-8 space-y-6">
                  <div className="space-y-2">
                    <CardTitle className="text-2xl font-black text-foreground group-hover:text-primary transition-colors">
                      {solution.title}
                    </CardTitle>
                    <CardDescription className="text-accent font-semibold text-base">
                      {solution.subtitle}
                    </CardDescription>
                  </div>

                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {solution.description}
                  </p>

                  {/* Enhanced Features Grid */}
                  <div className="grid grid-cols-1 gap-3">
                    {solution.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center p-3 bg-accent/5 rounded-lg border border-accent/20">
                        <div className="p-1 bg-accent/20 rounded-full mr-3">
                          <ChevronRight className="h-4 w-4 text-accent" />
                        </div>
                        <span className="font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Advanced CTA */}
                  <NavLink to="/solutions">
                    <Button variant="outline" className="w-full group bg-gradient-to-r from-background to-muted hover:from-primary hover:to-accent hover:text-white transition-all duration-500 shadow-lg hover:shadow-primary/25 border-2 border-primary/20 hover:border-transparent">
                      <span className="flex items-center justify-center">
                        <span className="font-bold">Explore Platform</span>
                        <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-2 transition-transform" />
                      </span>
                    </Button>
                  </NavLink>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Revolutionary CTA Section */}
      <section className="relative py-32 bg-gradient-hero overflow-hidden">
        {/* Advanced Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-48 h-48 bg-accent/30 rounded-full blur-3xl bounce-subtle"></div>
          <div className="absolute bottom-10 right-10 w-64 h-64 bg-primary/20 rounded-full blur-3xl float"></div>
          <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-accent/40 rounded-full blur-2xl pulse-glow"></div>
          <div className="absolute top-1/3 right-1/4 w-40 h-40 bg-primary/30 rounded-full blur-2xl morph-bg"></div>
          
          {/* Mesh Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-mesh opacity-30"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center space-y-12">
            {/* Enhanced Icon */}
            <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-primary rounded-2xl shadow-brutal mb-8 hover-tilt">
              <Zap className="w-12 h-12 text-white" />
            </div>
            
            {/* Revolutionary Heading */}
            <div className="space-y-6">
              <h2 className="text-5xl md:text-6xl lg:text-8xl font-black text-primary-foreground leading-tight">
                Ready to{' '}
                <span className="bg-gradient-to-r from-accent via-white to-accent bg-clip-text text-transparent">
                  Revolutionize
                </span>
                <br />
                Your Business?
              </h2>
              
              <p className="text-2xl md:text-3xl text-primary-foreground/90 max-w-4xl mx-auto leading-relaxed font-light">
                Join <strong className="text-accent">industry leaders</strong> across Africa who trust our 
                cutting-edge technology to drive their digital transformation and unlock exponential growth potential.
              </p>
            </div>
            
            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center pt-8">
              <NavLink to="/contact">
                <Button variant="secondary" size="xl" className="group magnetic shadow-brutal hover:shadow-glow transition-all duration-500 px-12 py-6 text-lg font-bold">
                  <Users className="mr-4 h-6 w-6" />
                  <span>Request Elite Demo</span>
                  <ArrowRight className="ml-4 h-6 w-6 group-hover:translate-x-2 transition-transform" />
                </Button>
              </NavLink>
              
              <NavLink to="/solutions">
                <Button 
                  variant="outline" 
                  size="xl" 
                  className="glass text-primary-foreground border-2 border-primary-foreground/40 hover:bg-primary-foreground hover:text-primary magnetic transition-all duration-500 px-12 py-6 text-lg font-bold hover-tilt"
                >
                  <Code className="mr-4 h-6 w-6" />
                  <span>Explore Arsenal</span>
                </Button>
              </NavLink>
            </div>
            
            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center items-center gap-12 pt-16 opacity-80">
              <div className="text-center space-y-2">
                <div className="text-4xl font-black text-accent">50+</div>
                <div className="text-primary-foreground/70">Elite Clients</div>
              </div>
              <div className="text-center space-y-2">
                <div className="text-4xl font-black text-accent">100%</div>
                <div className="text-primary-foreground/70">Success Rate</div>
              </div>
              <div className="text-center space-y-2">
                <div className="text-4xl font-black text-accent">24/7</div>
                <div className="text-primary-foreground/70">Expert Support</div>
              </div>
              <div className="text-center space-y-2">
                <div className="text-4xl font-black text-accent">5⭐</div>
                <div className="text-primary-foreground/70">Client Rating</div>
              </div>
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