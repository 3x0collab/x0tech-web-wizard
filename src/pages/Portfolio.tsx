import { useState } from "react";
import { ExternalLink, Code, ShoppingCart, Shield, Sparkles, Zap, Users, Calculator, Smartphone, Building2, Database, Cloud, Cpu, TrendingUp, Award, CheckCircle2, ArrowRight, Globe, Lock, Rocket, BarChart3, MessageSquare, GraduationCap } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SEOHead from "@/components/SEOHead";
import { NavLink } from "react-router-dom";

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState("all");

  const stats = [
    { label: "Projects Completed", value: "50+", icon: Rocket },
    { label: "Happy Clients", value: "40+", icon: Users },
    { label: "Years Experience", value: "5+", icon: Award },
    { label: "Success Rate", value: "100%", icon: TrendingUp },
  ];

  const externalProjects = [
    {
      name: "RadarPro",
      description: "Enterprise-grade banking and financial management system with real-time transaction processing, advanced security protocols, and comprehensive reporting for institutional clients",
      link: "https://radarprodemo.netlify.app/#/login",
      category: "banking",
      tags: ["Banking", "FinTech", "Enterprise"],
      icon: Building2,
      color: "from-blue-500 to-cyan-500",
      featured: true,
    },
    {
      name: "DataFrame Engine",
      description: "High-performance data processing engine leveraging distributed computing for enterprise-scale analytics, featuring real-time insights and machine learning integration",
      link: "#",
      category: "data",
      tags: ["Data Analytics", "Big Data", "ML"],
      icon: Database,
      color: "from-purple-500 to-pink-500",
      featured: false,
    },
    {
      name: "Iconcept4Pro",
      description: "Professional concept development and project management platform with collaborative tools, workflow automation, and advanced reporting capabilities",
      link: "https://iconcept4prodemo.netlify.app/",
      category: "enterprise",
      tags: ["Enterprise", "Project Management", "SaaS"],
      icon: Cpu,
      color: "from-orange-500 to-red-500",
      featured: true,
    },
  ];

  const ourSolutions = [
    {
      name: "PYE - AI Customer Experience",
      description: "Revolutionary conversational AI platform providing 24/7 intelligent customer support with natural language processing, sentiment analysis, and seamless CRM integration",
      link: "/solutions",
      category: "ai",
      tags: ["AI", "Customer Support", "Automation"],
      icon: MessageSquare,
      color: "from-green-500 to-emerald-500",
      featured: true,
    },
    {
      name: "Orbityx HR Suite",
      description: "Comprehensive human capital management platform featuring automated recruitment, performance tracking, payroll management, and advanced workforce analytics",
      link: "/solutions",
      category: "enterprise",
      tags: ["HR Management", "Enterprise", "Automation"],
      icon: Users,
      color: "from-indigo-500 to-purple-500",
      featured: true,
    },
    {
      name: "QuickSum Accounting",
      description: "Cloud-based intelligent financial management system with automated bookkeeping, invoice generation, expense tracking, and real-time financial insights",
      link: "/solutions",
      category: "fintech",
      tags: ["Accounting", "FinTech", "Cloud"],
      icon: Calculator,
      color: "from-yellow-500 to-orange-500",
      featured: true,
    },
    {
      name: "Step-Code Learning Platform",
      description: "Interactive coding education ecosystem with hands-on projects, industry-standard certifications, AI-powered mentoring, and career placement assistance",
      link: "/solutions",
      category: "edtech",
      tags: ["EdTech", "E-Learning", "Certification"],
      icon: GraduationCap,
      color: "from-blue-500 to-indigo-500",
      featured: true,
    },
    {
      name: "CampusCafe Printing",
      description: "Revolutionary on-demand document printing and delivery platform connecting students with nearby agents, featuring real-time tracking and digital payment integration",
      link: "/solutions",
      category: "mobile",
      tags: ["Mobile App", "On-Demand", "Logistics"],
      icon: Smartphone,
      color: "from-pink-500 to-rose-500",
      featured: false,
    },
    {
      name: "Essentials by Salmons",
      description: "Full-stack e-commerce platform with advanced inventory management, secure payment processing, analytics dashboard, and customer relationship tools",
      link: "https://essentialsbysalmons.pythonanywhere.com/",
      category: "ecommerce",
      tags: ["E-commerce", "Retail", "Web App"],
      icon: ShoppingCart,
      color: "from-teal-500 to-cyan-500",
      featured: false,
    },
    {
      name: "F & F Global Ltd",
      description: "International e-commerce solution with multi-currency support, global shipping integration, and localized payment gateways for seamless cross-border transactions",
      link: "https://fandfgloballtd.pythonanywhere.com/",
      category: "ecommerce",
      tags: ["E-commerce", "Global", "Multi-Currency"],
      icon: Globe,
      color: "from-green-500 to-teal-500",
      featured: false,
    },
    {
      name: "Web3 Secured Wallet",
      description: "Next-generation cryptocurrency wallet with military-grade encryption, multi-signature authentication, hardware wallet support, and DeFi integration",
      link: "https://web3-securedwallet.netlify.app/",
      category: "blockchain",
      tags: ["Blockchain", "Crypto", "Security"],
      icon: Shield,
      color: "from-purple-500 to-indigo-500",
      featured: true,
    },
    {
      name: "Enterprise Analytics Suite",
      description: "Comprehensive business intelligence platform with custom dashboards, predictive analytics, automated reporting, and data visualization tools",
      link: "#",
      category: "data",
      tags: ["Analytics", "BI", "Enterprise"],
      icon: BarChart3,
      color: "from-cyan-500 to-blue-500",
      featured: false,
    },
    {
      name: "CloudSync Infrastructure",
      description: "Scalable cloud infrastructure management platform with auto-scaling, load balancing, monitoring, and disaster recovery capabilities",
      link: "#",
      category: "cloud",
      tags: ["Cloud", "DevOps", "Infrastructure"],
      icon: Cloud,
      color: "from-sky-500 to-blue-500",
      featured: false,
    },
  ];

  const allProjects = [...externalProjects, ...ourSolutions];
  
  const getFilteredProjects = () => {
    if (activeTab === "all") return allProjects;
    if (activeTab === "featured") return allProjects.filter(p => p.featured);
    return allProjects.filter(p => p.category === activeTab);
  };

  const ProjectCard = ({ project, index }: { project: typeof allProjects[0], index: number }) => {
    const Icon = project.icon;
    
    return (
      <Card 
        className="group relative overflow-hidden border-0 bg-gradient-to-br from-card via-card to-card/95 backdrop-blur-xl transition-all duration-500 hover:shadow-brutal hover:-translate-y-2 animate-fade-in"
        style={{ animationDelay: `${index * 100}ms` }}
      >
        {/* Gradient overlay */}
        <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
        
        {/* Featured badge */}
        {project.featured && (
          <div className="absolute top-4 right-4 z-10">
            <Badge className="bg-gradient-primary text-primary-foreground border-0 shadow-glow">
              <Sparkles className="h-3 w-3 mr-1" />
              Featured
            </Badge>
          </div>
        )}

        <CardHeader className="relative">
          <div className="flex items-start gap-4 mb-4">
            <div className={`relative p-4 rounded-2xl bg-gradient-to-br ${project.color} shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
              <Icon className="w-7 h-7 text-white" />
              <div className="absolute inset-0 rounded-2xl bg-white/20 blur-xl scale-0 group-hover:scale-150 transition-transform duration-500"></div>
            </div>
            <div className="flex-1">
              <CardTitle className="text-2xl font-black mb-2 group-hover:gradient-text-flow transition-all duration-300">
                {project.name}
              </CardTitle>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, i) => (
                  <Badge key={i} variant="outline" className="text-xs border-border/40 bg-background/50">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </CardHeader>

        <CardContent className="relative space-y-4">
          <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3 group-hover:line-clamp-none transition-all duration-300">
            {project.description}
          </p>
          
          {/* Features list */}
          <div className="flex items-center gap-2 text-xs text-muted-foreground pt-2 border-t border-border/30">
            <CheckCircle2 className="h-4 w-4 text-primary" />
            <span>Production Ready</span>
            <span className="text-border">•</span>
            <CheckCircle2 className="h-4 w-4 text-primary" />
            <span>Scalable</span>
          </div>
        </CardContent>

        <CardFooter className="relative">
          {project.link !== "#" ? (
            <Button 
              variant="default" 
              className="w-full group/btn bg-gradient-primary hover:shadow-glow"
              onClick={() => {
                if (project.link.startsWith('http')) {
                  window.open(project.link, '_blank');
                } else {
                  window.location.href = project.link;
                }
              }}
            >
              <span className="font-semibold">View Project</span>
              <ExternalLink className="ml-2 w-4 h-4 transition-transform group-hover/btn:translate-x-1 group-hover/btn:scale-110" />
            </Button>
          ) : (
            <Button variant="outline" className="w-full" disabled>
              <Lock className="mr-2 h-4 w-4" />
              Coming Soon
            </Button>
          )}
        </CardFooter>
      </Card>
    );
  };

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Portfolio - 3x0Tech Solutions",
    "description": "Explore our portfolio of custom software solutions, from enterprise banking systems to e-commerce platforms and blockchain applications.",
    "url": "https://3x0tech.com/portfolio",
  };

  return (
    <>
      <SEOHead
        title="Portfolio - 3x0Tech Solutions | Award-Winning Software Development Projects"
        description="Explore our impressive portfolio of 50+ successful projects: enterprise banking systems, AI-powered platforms, blockchain solutions, e-commerce applications, and more. 100% client satisfaction guaranteed."
        keywords="software portfolio, custom software development, enterprise solutions, AI applications, blockchain development, e-commerce platforms, banking software, mobile apps, web applications"
        canonical="https://3x0tech.com/portfolio"
        structuredData={schemaData}
      />
      
      <main className="min-h-screen pt-24 pb-20 px-4 bg-gradient-to-b from-background via-background to-muted/20">
        {/* Hero Section */}
        <section className="relative max-w-7xl mx-auto mb-20 text-center overflow-hidden">
          {/* Background decorations */}
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-accent/5 rounded-full blur-3xl"></div>
          
          <div className="relative z-10">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 rounded-full border border-primary/30 backdrop-blur-sm mb-8 hover-lift">
              <Award className="h-5 w-5 text-primary mr-2" />
              <span className="text-sm font-bold gradient-text-flow">Award-Winning Projects</span>
              <Sparkles className="h-4 w-4 text-accent ml-2" />
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-8 leading-tight animate-fade-in">
              <span className="text-foreground">Our</span>{' '}
              <span className="gradient-text-flow">Portfolio</span>
              <br />
              <span className="text-foreground">of</span>{' '}
              <span className="gradient-text-flow">Excellence</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-12 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Discover <strong className="text-foreground font-bold">50+ transformative projects</strong> that are reshaping industries 
              across Africa and beyond. From enterprise banking to cutting-edge AI solutions.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-5xl mx-auto animate-fade-in" style={{ animationDelay: '0.4s' }}>
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="group relative p-6 rounded-2xl bg-gradient-to-br from-card to-card/80 border border-border/40 backdrop-blur-sm hover-lift cursor-default">
                    <div className="absolute inset-0 rounded-2xl bg-gradient-primary opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
                    <Icon className="h-8 w-8 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
                    <div className="text-3xl md:text-4xl font-black gradient-text-flow mb-2">{stat.value}</div>
                    <div className="text-sm font-semibold text-muted-foreground">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Projects Section with Tabs */}
        <section className="max-w-7xl mx-auto mb-20">
          <Tabs defaultValue="all" className="w-full" onValueChange={setActiveTab}>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
              <div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-3">
                  Explore Our <span className="gradient-text-flow">Work</span>
                </h2>
                <p className="text-lg text-muted-foreground">
                  Filter by category to discover solutions in your industry
                </p>
              </div>
              
              <TabsList className="grid grid-cols-3 md:grid-cols-6 gap-2 bg-card/50 backdrop-blur-sm p-2 rounded-xl border border-border/40">
                <TabsTrigger value="all" className="data-[state=active]:bg-gradient-primary data-[state=active]:text-primary-foreground font-semibold">
                  All
                </TabsTrigger>
                <TabsTrigger value="featured" className="data-[state=active]:bg-gradient-primary data-[state=active]:text-primary-foreground font-semibold">
                  Featured
                </TabsTrigger>
                <TabsTrigger value="ai" className="data-[state=active]:bg-gradient-primary data-[state=active]:text-primary-foreground font-semibold">
                  AI
                </TabsTrigger>
                <TabsTrigger value="banking" className="data-[state=active]:bg-gradient-primary data-[state=active]:text-primary-foreground font-semibold">
                  Banking
                </TabsTrigger>
                <TabsTrigger value="ecommerce" className="data-[state=active]:bg-gradient-primary data-[state=active]:text-primary-foreground font-semibold">
                  E-Commerce
                </TabsTrigger>
                <TabsTrigger value="blockchain" className="data-[state=active]:bg-gradient-primary data-[state=active]:text-primary-foreground font-semibold">
                  Blockchain
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value={activeTab} className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {getFilteredProjects().map((project, index) => (
                  <ProjectCard key={index} project={project} index={index} />
                ))}
              </div>
              
              {getFilteredProjects().length === 0 && (
                <div className="text-center py-20">
                  <Zap className="h-16 w-16 text-muted-foreground/30 mx-auto mb-4" />
                  <p className="text-xl text-muted-foreground">No projects found in this category.</p>
                </div>
              )}
            </TabsContent>
          </Tabs>
        </section>

        {/* Technologies Section */}
        <section className="max-w-7xl mx-auto mb-20">
          <div className="relative p-12 md:p-16 rounded-3xl bg-gradient-to-br from-card via-card/95 to-card/90 border border-border/40 backdrop-blur-xl overflow-hidden">
            <div className="absolute top-0 right-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl"></div>
            
            <div className="relative z-10">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-4">
                  <span className="gradient-text-flow">Technology</span> Stack
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  We leverage cutting-edge technologies to build scalable, secure, and performant solutions
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {[
                  { name: "React", icon: Code },
                  { name: "Node.js", icon: Cpu },
                  { name: "Python", icon: Zap },
                  { name: "PostgreSQL", icon: Database },
                  { name: "AWS", icon: Cloud },
                  { name: "Docker", icon: Building2 },
                ].map((tech, index) => {
                  const Icon = tech.icon;
                  return (
                    <div key={index} className="group p-6 rounded-2xl bg-background/50 border border-border/40 hover-lift text-center">
                      <Icon className="h-10 w-10 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
                      <p className="font-bold text-sm">{tech.name}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="max-w-5xl mx-auto">
          <div className="relative p-12 md:p-16 rounded-3xl bg-gradient-to-br from-primary/10 via-accent/10 to-primary/10 border-2 border-primary/20 backdrop-blur-sm overflow-hidden group hover-lift">
            <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl"></div>
            
            <div className="relative z-10 text-center">
              <div className="inline-flex items-center px-6 py-3 bg-gradient-primary rounded-full mb-6 shadow-glow">
                <Sparkles className="h-5 w-5 text-white mr-2" />
                <span className="text-sm font-bold text-white">Let's Build Together</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-6">
                Ready to Start Your <span className="gradient-text-flow">Next Project?</span>
              </h2>
              
              <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
                Join <strong className="text-foreground">40+ satisfied clients</strong> who trust us to deliver exceptional software solutions. 
                Let's transform your vision into reality.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <NavLink to="/contact">
                  <Button variant="hero" size="xl" className="group shadow-brutal">
                    <Rocket className="mr-3 h-6 w-6 group-hover:rotate-12 transition-transform duration-500" />
                    Start Your Project
                    <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform duration-300" />
                  </Button>
                </NavLink>
                <NavLink to="/solutions">
                  <Button variant="outline-hero" size="xl" className="backdrop-blur-sm">
                    <Zap className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                    View All Solutions
                  </Button>
                </NavLink>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Portfolio;
