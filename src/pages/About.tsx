import { Target, Eye, Award, Users } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
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

  return (
    <div className="min-h-screen py-12">
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
                  alt="Team collaboration at 3x0Tech Solution" 
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {teamMembers.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-glow transition-all duration-300 hover:scale-105">
                <CardHeader className="pb-4">
                  <div className="mx-auto mb-4 w-32 h-32 rounded-full overflow-hidden shadow-elegant">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardTitle className="text-2xl">{member.name}</CardTitle>
                  <p className="text-primary font-semibold">{member.role}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{member.description}</p>
                </CardContent>
              </Card>
            ))}
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
              <div className="text-4xl md:text-5xl font-bold text-primary-foreground mb-2">2</div>
              <div className="text-primary-foreground/90">Founding Team</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;