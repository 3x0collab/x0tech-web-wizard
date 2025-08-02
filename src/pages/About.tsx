import { Target, Eye, Award, Users } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import SEOHead from '@/components/SEOHead';
import teamImage from '@/assets/team-collaboration.jpg';

const About = () => {
  const teamMembers = [
    {
      name: 'Tunde Oluwamo',
      role: 'CEO',
      description: 'Visionary leader driving innovation and strategic growth across African markets.',
      image: '/placeholder.svg' // Using placeholder for now
    },
    {
      name: 'Ismail Adedapo',
      role: 'Co-Founder',
      description: 'Technical architect and product innovator focused on scalable software solutions.',
      image: '/placeholder.svg' // Using placeholder for now
    }
  ];

  const values = [
    {
      icon: Target,
      title: 'Innovation',
      description: 'We pioneer breakthrough technologies and methodologies that redefine industry standards and create lasting competitive advantages for our clients.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We foster deep partnerships with our clients, understanding that the best solutions emerge from collaborative relationships built on trust and shared vision.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We maintain uncompromising standards in every aspect of our work, from code quality and security to user experience and client satisfaction.'
    },
    {
      icon: Eye,
      title: 'Transparency',
      description: 'We build trust through clear communication, honest feedback, and complete visibility into our processes, progress, and decision-making.'
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "mainEntity": {
      "@type": "Organization",
      "name": "3x0Tech Solutions Ltd",
      "description": "Nigerian tech startup building intelligent, affordable, and scalable software solutions for everyday business challenges.",
      "foundingDate": "2024",
      "founders": [
        {
          "@type": "Person",
          "name": "Tunde Oluwamo",
          "jobTitle": "CEO"
        },
        {
          "@type": "Person", 
          "name": "Ismail Adedapo",
          "jobTitle": "Co-Founder & Lead Developer"
        }
      ],
      "employee": [
        {
          "@type": "Person",
          "name": "Iyanu Pamilerin Johnson", 
          "jobTitle": "Head of Marketing"
        }
      ]
    }
  };

  return (
    <div className="min-h-screen py-12">
      <SEOHead 
        title="About 3x0Tech Solutions Ltd | Leading Enterprise Software Development Company in Nigeria & Africa"
        description="Discover Nigeria's premier technology company transforming businesses across Africa. Learn about our expert leadership team, innovative culture, and mission to deliver world-class enterprise software solutions, AI platforms, and digital transformation services."
        keywords="about 3x0tech solutions Nigeria, enterprise software development company Africa, technology leadership Nigeria, digital transformation experts Africa, AI software development Nigeria, custom enterprise applications, African tech innovation, software consulting services, technology company Lagos, enterprise software Nigeria"
        structuredData={structuredData}
      />
      {/* Hero Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              About 3x0Tech Solutions
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We are a forward-thinking technology company committed to revolutionizing how African businesses operate, 
              grow, and compete in the global digital economy through innovative software solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                To democratize enterprise-grade technology across Africa by delivering intelligent, scalable solutions 
                that transform business operations and accelerate sustainable growth.
              </p>
              <p className="text-muted-foreground mb-6">
                We champion the belief that every organization deserves access to world-class technology. Our commitment 
                extends beyond software development—we partner with businesses to understand their unique challenges and 
                engineer solutions that deliver measurable impact and competitive advantage.
              </p>
              <p className="text-muted-foreground">
                By combining cutting-edge innovation with deep market insight, we're not just building software—we're 
                shaping the digital infrastructure that will power Africa's next generation of business leaders.
              </p>
            </div>
            <div className="relative">
              <div className="w-full h-96 rounded-2xl shadow-elegant overflow-hidden">
                <img 
                  src={teamImage} 
                  alt="3x0Tech Solutions team collaborating on innovative software development projects in Nigeria"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-glow transition-all duration-300 hover:scale-105">
                <CardHeader className="pb-4">
                  <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Meet Our Leadership Team
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The visionaries behind 3x0Tech Solutions
            </p>
          </div>

          {/* Team Members */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* CEO */}
            <Card className="text-center hover:shadow-glow transition-all duration-300">
              <CardContent className="pt-6">
                <div className="w-32 h-32 bg-primary/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-16 w-16 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Tunde Oluwamo</h3>
                <p className="text-primary font-medium mb-2">Chief Executive Officer</p>
                <p className="text-muted-foreground text-sm">
                  Strategic technology executive with extensive experience scaling digital transformation initiatives across emerging markets. 
                  Passionate about leveraging technology to solve complex business challenges and drive sustainable growth.
                </p>
              </CardContent>
            </Card>

            {/* Co-Founder */}
            <Card className="text-center hover:shadow-glow transition-all duration-300">
              <CardContent className="pt-6">
                <div className="w-32 h-32 bg-primary/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Target className="h-16 w-16 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Ismail Adedapo</h3>
                <p className="text-primary font-medium mb-2">Co-Founder & Lead Developer</p>
                <p className="text-muted-foreground text-sm">
                  Senior software architect and AI specialist focused on building robust, scalable platforms that deliver exceptional performance. 
                  Expert in modern development frameworks and emerging technologies.
                </p>
              </CardContent>
            </Card>

            {/* Head of Marketing */}
            <Card className="text-center hover:shadow-glow transition-all duration-300">
              <CardContent className="pt-6">
                <div className="w-32 h-32 bg-primary/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Award className="h-16 w-16 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Iyanu Pamilerin Johnson</h3>
                <div className="inline-flex items-center gap-2 bg-accent/10 px-3 py-1 rounded-full mb-2">
                  <span className="text-primary font-medium text-sm">Marketing Lead</span>
                  <span className="text-xs text-muted-foreground">Driving Growth & Strategy</span>
                </div>
                <p className="text-muted-foreground text-sm">
                  Growth marketing strategist with expertise in digital transformation and market expansion. 
                  Dedicated to building brand presence and driving customer acquisition through data-driven marketing initiatives.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="py-20 bg-gradient-primary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Our Impact
            </h2>
            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
              Making a difference across African businesses
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary-foreground mb-2">4</div>
              <div className="text-primary-foreground/90">Core Solutions</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary-foreground mb-2">100+</div>
              <div className="text-primary-foreground/90">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary-foreground mb-2">3</div>
              <div className="text-primary-foreground/90">Leadership Team</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;