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
      description: 'We continuously push boundaries to create cutting-edge solutions that address real-world challenges.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We believe in the power of teamwork and partnerships to achieve extraordinary results.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We are committed to delivering the highest quality products and services to our clients.'
    },
    {
      icon: Eye,
      title: 'Transparency',
      description: 'We maintain open and honest communication in all our business relationships.'
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
        title="About 3x0Tech Solutions – Nigerian Software Development Experts"
        description="Learn about 3x0Tech Solutions, a leading Nigerian tech startup building intelligent software solutions. Meet our team and discover our mission to transform African businesses."
        keywords="about 3x0tech, Nigerian software company, tech startup Nigeria, software development team, African technology solutions, business automation Africa"
        structuredData={structuredData}
      />
      {/* Hero Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              About 3x0Tech Solution
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We are a Nigerian tech startup dedicated to building intelligent, affordable, 
              and scalable software solutions that drive business growth across Africa.
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
                To simplify African business operations using smart, AI-powered, and user-friendly digital tools.
              </p>
              <p className="text-muted-foreground mb-6">
                We believe that technology should be accessible to every business, regardless of size or budget. 
                Our solutions are designed to be intuitive, affordable, and scalable, helping African businesses 
                compete on a global scale.
              </p>
              <p className="text-muted-foreground">
                Through innovation and dedication, we're building the future of business software in Africa, 
                one solution at a time.
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
              The visionaries behind 3x0Tech Solution
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
                  Visionary leader driving technological innovation across Africa with over 10 years of experience in software development and business strategy.
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
                  Technical expert specializing in AI integration and scalable software architecture, passionate about creating intelligent business solutions.
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
                  Strategic marketing professional focused on expanding 3x0Tech's reach across African markets through innovative digital campaigns and partnerships.
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