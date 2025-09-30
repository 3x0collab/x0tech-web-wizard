import { ExternalLink, Code, ShoppingCart, Shield } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/SEOHead";

const Portfolio = () => {
  const externalProjects = [
    {
      name: "RadarPro",
      description: "Advanced banking and financial management system for institutional clients",
      link: "https://radarprodemo.netlify.app/#/login",
      category: "External - Banking",
      icon: Code,
    },
    {
      name: "DataFrame Engine",
      description: "High-performance data processing engine for enterprise analytics",
      link: "#",
      category: "External - Data Analytics",
      icon: Code,
    },
    {
      name: "Iconcept4Pro",
      description: "Professional concept development and management platform",
      link: "https://iconcept4prodemo.netlify.app/",
      category: "External - Enterprise",
      icon: Code,
    },
  ];

  const ourSolutions = [
    {
      name: "Essentials by Salmons",
      description: "Full-featured e-commerce platform with inventory management and payment processing",
      link: "https://essentialsbysalmons.pythonanywhere.com/",
      category: "E-commerce Platform",
      icon: ShoppingCart,
    },
    {
      name: "F & F Global Ltd",
      description: "International e-commerce solution with multi-currency support",
      link: "https://fandfgloballtd.pythonanywhere.com/",
      category: "E-commerce Platform",
      icon: ShoppingCart,
    },
    {
      name: "Web3 Secured Wallet",
      description: "Next-generation cryptocurrency wallet with advanced security features",
      link: "https://web3-securedwallet.netlify.app/",
      category: "Blockchain Solution",
      icon: Shield,
    },
    {
      name: "Orbityx HR",
      description: "Comprehensive human resources management system for modern workplaces",
      link: "/solutions",
      category: "HR Management",
      icon: Code,
    },
    {
      name: "Pye AI Support",
      description: "AI-powered customer support platform with intelligent routing",
      link: "/solutions",
      category: "AI Solution",
      icon: Code,
    },
    {
      name: "QuickSum Accounting",
      description: "Smart accounting software for small to medium-sized businesses",
      link: "/solutions",
      category: "Financial Software",
      icon: Code,
    },
    {
      name: "Step Code Learning",
      description: "Interactive coding education platform with hands-on exercises",
      link: "/solutions",
      category: "EdTech Platform",
      icon: Code,
    },
    {
      name: "CampusCafe Printing",
      description: "Campus-wide printing management and document services system",
      link: "/solutions",
      category: "Campus Solution",
      icon: Code,
    },
  ];

  const ProjectCard = ({ project }: { project: typeof externalProjects[0] }) => {
    const Icon = project.icon;
    
    return (
      <Card className="group overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:border-primary/20">
        <CardHeader>
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors">
                {project.name}
              </CardTitle>
              <CardDescription className="text-xs font-medium text-primary/70 mb-2">
                {project.category}
              </CardDescription>
            </div>
            <div className="p-2 rounded-lg bg-primary/10 text-primary">
              <Icon className="w-5 h-5" />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {project.description}
          </p>
        </CardContent>
        <CardFooter>
          {project.link !== "#" ? (
            <Button 
              variant="default" 
              size="sm" 
              className="w-full group/btn"
              onClick={() => window.open(project.link, '_blank')}
            >
              View Project
              <ExternalLink className="ml-2 w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
            </Button>
          ) : (
            <Button variant="outline" size="sm" className="w-full" disabled>
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
        title="Portfolio - 3x0Tech Solutions | Custom Software Development"
        description="Explore our diverse portfolio of custom software solutions including enterprise banking systems, e-commerce platforms, AI-powered applications, and blockchain solutions."
        keywords="software portfolio, custom software development, enterprise solutions, e-commerce platforms, banking software, blockchain applications"
        canonical="https://3x0tech.com/portfolio"
        structuredData={schemaData}
      />
      
      <main className="min-h-screen pt-24 pb-16 px-4">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto mb-16 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent">
            Our Portfolio
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover the innovative solutions we've built for clients worldwide and our own cutting-edge applications
          </p>
        </section>

        {/* External Projects Section */}
        <section className="max-w-7xl mx-auto mb-20">
          <div className="mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">External Projects</h2>
            <p className="text-muted-foreground">
              Custom solutions developed for banking institutions and enterprise clients
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {externalProjects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </section>

        {/* Our Solutions Section */}
        <section className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">Our Solutions</h2>
            <p className="text-muted-foreground">
              Proprietary applications and platforms built by 3x0Tech
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ourSolutions.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="max-w-4xl mx-auto mt-20 text-center">
          <div className="p-8 md:p-12 rounded-2xl bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border border-primary/20">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-muted-foreground mb-6 text-lg">
              Let's build something amazing together. Contact us to discuss your custom software needs.
            </p>
            <Button size="lg" onClick={() => window.location.href = '/contact'}>
              Get In Touch
            </Button>
          </div>
        </section>
      </main>
    </>
  );
};

export default Portfolio;
