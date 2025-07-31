import { Calendar, User, ArrowRight, Clock, Mail, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { NavLink } from 'react-router-dom';
import SEOHead from '@/components/SEOHead';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'The Future of AI in African Business Operations',
      excerpt: 'Exploring how artificial intelligence is transforming business processes across Africa and what it means for small and medium enterprises.',
      author: 'Tunde Oluwamo',
      date: '2024-01-15',
      readTime: '5 min read',
      category: 'AI & Technology',
      image: '/placeholder.svg',
      featured: true
    },
    {
      id: 2,
      title: 'Digital Transformation for Nigerian SMEs: A Practical Guide',
      excerpt: 'Step-by-step guide for small and medium enterprises in Nigeria to successfully implement digital transformation strategies.',
      author: 'Ismail Adedapo',
      date: '2024-01-10',
      readTime: '7 min read',
      category: 'Business Strategy',
      image: '/placeholder.svg',
      featured: false
    },
    {
      id: 3,
      title: 'Why Every Business Needs Customer Support Automation',
      excerpt: 'Understanding the benefits of automated customer support and how AI assistants like PYE can revolutionize customer service.',
      author: 'Tunde Oluwamo',
      date: '2024-01-05',
      readTime: '4 min read',
      category: 'Customer Service',
      image: '/placeholder.svg',
      featured: false
    },
    {
      id: 4,
      title: 'HR Automation: Streamlining African Workforce Management',
      excerpt: 'How modern HR management systems are helping African businesses manage their workforce more efficiently and effectively.',
      author: 'Ismail Adedapo',
      date: '2023-12-28',
      readTime: '6 min read',
      category: 'Human Resources',
      image: '/placeholder.svg',
      featured: false
    },
    {
      id: 5,
      title: 'Accounting Software for Small Businesses: A Complete Overview',
      excerpt: 'Everything you need to know about choosing and implementing accounting software for your small business operations.',
      author: 'Tunde Oluwamo',
      date: '2023-12-20',
      readTime: '8 min read',
      category: 'Finance & Accounting',
      image: '/placeholder.svg',
      featured: false
    },
    {
      id: 6,
      title: 'Building a Tech-Savvy Workforce: The Role of Coding Education',
      excerpt: 'How coding education platforms are helping African professionals develop the skills needed for the digital economy.',
      author: 'Ismail Adedapo',
      date: '2023-12-15',
      readTime: '5 min read',
      category: 'Education & Training',
      image: '/placeholder.svg',
      featured: false
    }
  ];

  const categories = [
    'All Posts',
    'AI & Technology',
    'Business Strategy',
    'Customer Service',
    'Human Resources',
    'Finance & Accounting',
    'Education & Training'
  ];

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "3x0Tech Solutions Blog",
    "description": "Latest insights on software development, technology trends, and business automation in Africa",
    "url": "https://3x0techsolutionsltd.com.ng/blog",
    "publisher": {
      "@type": "Organization",
      "name": "3x0Tech Solutions Ltd"
    }
  };

  return (
    <div className="min-h-screen py-12">
      <SEOHead 
        title="Tech Blog – Software Development Insights | 3x0Tech Solutions"
        description="Read the latest insights on software development, AI technology, business automation, and digital transformation trends from 3x0Tech Solutions Nigeria."
        keywords="software development blog, tech insights Nigeria, AI technology trends, business automation, digital transformation Africa, programming tutorials, tech news Nigeria"
        structuredData={structuredData}
      />
      {/* Enhanced Hero Section */}
      <section className="relative py-32 bg-gradient-hero overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="w-full h-full bg-white/5 [mask-image:radial-gradient(circle_at_center,transparent_20%,black_50%)]"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-sm font-medium mb-6 animate-scale-in">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-glow-pulse"></span>
              Latest Tech Insights
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
              <span className="bg-gradient-to-r from-white to-green-200 bg-clip-text text-transparent">
                3x0Tech
              </span>
              <br />
              <span className="text-white/90">Knowledge Hub</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed">
              Expert insights, cutting-edge trends, and practical solutions for 
              <span className="text-green-200 font-semibold"> African businesses</span> in the digital age.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-8 text-white/70">
              <span className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                Technology Trends
              </span>
              <span className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                Business Growth
              </span>
              <span className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                Digital Transformation
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Featured Post */}
      {featuredPost && (
        <section className="py-24 bg-background relative">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center animate-fade-in">
              <span className="inline-flex items-center px-4 py-2 bg-gradient-primary text-white text-sm font-semibold rounded-full shadow-card">
                <span className="w-2 h-2 bg-yellow-400 rounded-full mr-2 animate-glow-pulse"></span>
                Featured Article
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mt-6 mb-4">Most Popular Read</h2>
              <p className="text-muted-foreground text-lg">Dive into our most engaging content</p>
            </div>
            
            <Card className="overflow-hidden shadow-elegant hover:shadow-glow transition-all duration-500 group animate-scale-in border-0 bg-gradient-to-br from-white to-gray-50/50">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="aspect-video lg:aspect-auto relative overflow-hidden">
                  <img 
                    src={featuredPost.image} 
                    alt={featuredPost.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <CardContent className="p-10 flex flex-col justify-center">
                  <div className="mb-6">
                    <span className="inline-block px-3 py-1.5 bg-accent text-accent-foreground text-sm font-semibold rounded-lg shadow-sm">
                      {featuredPost.category}
                    </span>
                  </div>
                  
                  <CardTitle className="text-3xl md:text-4xl mb-6 leading-tight text-foreground group-hover:text-primary transition-colors duration-300">
                    {featuredPost.title}
                  </CardTitle>
                  
                  <CardDescription className="text-lg mb-8 text-muted-foreground leading-relaxed">
                    {featuredPost.excerpt}
                  </CardDescription>
                  
                  <div className="flex flex-wrap items-center text-sm text-muted-foreground mb-8 gap-4">
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-2 text-primary" />
                      <span className="font-medium">{featuredPost.author}</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2 text-primary" />
                      <span>{new Date(featuredPost.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-2 text-primary" />
                      <span>{featuredPost.readTime}</span>
                    </div>
                  </div>
                  
                  <Button variant="default" size="lg" className="group w-fit bg-gradient-primary hover:shadow-glow transition-all duration-300">
                    Read Full Article
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </CardContent>
              </div>
            </Card>
          </div>
        </section>
      )}

      {/* Enhanced Categories Filter */}
      <section className="py-16 bg-gradient-subtle relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold mb-4">Explore by Category</h3>
            <p className="text-muted-foreground">Find content that matches your interests</p>
          </div>
          <div className="flex flex-wrap gap-3 justify-center animate-fade-in">
            {categories.map((category, index) => (
              <Button
                key={index}
                variant={index === 0 ? "default" : "outline"}
                size="lg"
                className={`mb-3 transition-all duration-300 ${
                  index === 0 
                    ? "bg-gradient-primary shadow-glow hover:shadow-elegant scale-105" 
                    : "hover:bg-primary hover:text-primary-foreground hover:scale-105 hover:shadow-card"
                }`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Blog Posts Grid */}
      <section className="py-24 bg-background relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Latest Articles</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Stay ahead with our latest insights and expert analysis
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post, index) => (
              <Card 
                key={post.id} 
                className="overflow-hidden hover:shadow-glow transition-all duration-500 hover:scale-[1.03] group border-0 bg-white shadow-card animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-video overflow-hidden relative">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute top-4 left-4">
                    <span className="inline-block px-3 py-1 bg-white/90 backdrop-blur-sm text-primary text-xs font-semibold rounded-full shadow-sm">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <CardHeader className="pb-3">
                  <CardTitle className="text-xl leading-tight line-clamp-2 group-hover:text-primary transition-colors duration-300">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <CardDescription className="mb-6 line-clamp-3 text-base leading-relaxed">
                    {post.excerpt}
                  </CardDescription>
                  
                  <div className="flex flex-wrap items-center text-sm text-muted-foreground mb-6 gap-3">
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-1.5 text-primary" />
                      <span className="font-medium">{post.author}</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1.5 text-primary" />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1.5 text-primary" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  
                  <Button variant="outline" size="lg" className="group w-full hover:bg-primary hover:text-primary-foreground hover:shadow-card transition-all duration-300">
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Newsletter Subscription */}
      <section className="py-24 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full bg-white/5 [mask-image:radial-gradient(circle_at_center,transparent_20%,black_50%)]"></div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto animate-fade-in-up">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-sm font-medium mb-8 animate-scale-in">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-glow-pulse"></span>
              Join 5,000+ Tech Leaders
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
              Never Miss a 
              <span className="bg-gradient-to-r from-green-200 to-blue-200 bg-clip-text text-transparent"> Breakthrough</span>
            </h2>
            <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed">
              Get exclusive access to cutting-edge insights, expert analysis, and practical solutions 
              delivered straight to your inbox every week.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto mb-8">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 rounded-xl border-0 text-foreground bg-white/95 backdrop-blur-sm shadow-elegant text-lg placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-green-400 transition-all duration-300"
              />
              <Button variant="secondary" size="lg" className="px-8 py-4 text-lg font-semibold bg-white text-primary hover:bg-white/90 hover:shadow-glow transition-all duration-300 rounded-xl">
                Subscribe Now
              </Button>
            </div>
            
            <div className="flex flex-wrap justify-center gap-6 text-white/70 text-sm">
              <span className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                Weekly Tech Updates
              </span>
              <span className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                Exclusive Case Studies
              </span>
              <span className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                No Spam, Ever
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Contact CTA */}
      <section className="py-24 bg-background relative">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-primary text-white text-sm font-medium rounded-full mb-8 shadow-card">
              <span className="w-2 h-2 bg-yellow-400 rounded-full mr-2 animate-glow-pulse"></span>
              Let's Connect
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              Got Questions or 
              <span className="bg-gradient-primary bg-clip-text text-transparent"> Ideas?</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
              We're here to help and always excited to hear from our community. 
              Share your thoughts, ask questions, or suggest topics you'd like us to cover.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <NavLink to="/contact">
                <Button variant="default" size="lg" className="group bg-gradient-primary hover:shadow-glow transition-all duration-300 px-8 py-4 text-lg">
                  Start a Conversation
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </NavLink>
              <Button variant="outline" size="lg" className="hover:bg-primary hover:text-primary-foreground transition-all duration-300 px-8 py-4 text-lg">
                Suggest a Topic
              </Button>
            </div>
            
            <div className="flex flex-wrap justify-center gap-8 mt-12 text-muted-foreground">
              <div className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-primary" />
                <span>info@3x0techsolutionsltd.com.ng</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-primary" />
                <span>0816 4435695</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;