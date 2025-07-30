import { Calendar, User, ArrowRight, Clock } from 'lucide-react';
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
    <div className="min-h-screen">
      <SEOHead 
        title="Tech Blog – Software Development Insights | 3x0Tech Solutions"
        description="Read the latest insights on software development, AI technology, business automation, and digital transformation trends from 3x0Tech Solutions Nigeria."
        keywords="software development blog, tech insights Nigeria, AI technology trends, business automation, digital transformation Africa, programming tutorials, tech news Nigeria"
        structuredData={structuredData}
      />
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-primary overflow-hidden">
        <div className="absolute inset-0 bg-gradient-shift opacity-30"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-extrabold text-primary-foreground mb-8 tracking-tight">
              3x0Tech Blog
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-4xl mx-auto leading-relaxed">
              Insights, updates, and expert perspectives on technology, business growth, 
              and digital transformation in Africa.
            </p>
            <div className="mt-8 flex justify-center">
              <div className="h-1 w-24 bg-gradient-secondary rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-24 bg-gradient-card">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center animate-slide-in">
              <span className="inline-block px-6 py-3 bg-gradient-primary text-primary-foreground text-sm font-semibold rounded-full shadow-soft">
                ✨ Featured Article
              </span>
            </div>
            
            <Card className="overflow-hidden shadow-elegant hover:shadow-glow transition-all duration-500 hover:scale-[1.02] bg-gradient-card border-0 animate-bounce-in">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="aspect-video lg:aspect-auto overflow-hidden">
                  <img 
                    src={featuredPost.image} 
                    alt={featuredPost.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <CardContent className="p-10 flex flex-col justify-center bg-white/80 backdrop-blur-sm">
                  <div className="mb-6">
                    <span className="inline-block px-4 py-2 bg-gradient-secondary text-secondary-foreground text-sm font-semibold rounded-full shadow-soft">
                      {featuredPost.category}
                    </span>
                  </div>
                  
                  <CardTitle className="text-3xl md:text-4xl mb-6 leading-tight font-extrabold text-foreground">
                    {featuredPost.title}
                  </CardTitle>
                  
                  <CardDescription className="text-lg mb-8 text-muted-foreground leading-relaxed">
                    {featuredPost.excerpt}
                  </CardDescription>
                  
                  <div className="flex items-center text-sm text-muted-foreground mb-8 space-x-6">
                    <div className="flex items-center">
                      <User className="h-5 w-5 mr-2 text-primary" />
                      <span className="font-medium">{featuredPost.author}</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-5 w-5 mr-2 text-primary" />
                      <span>{new Date(featuredPost.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-5 w-5 mr-2 text-primary" />
                      <span>{featuredPost.readTime}</span>
                    </div>
                  </div>
                  
                  <Button variant="default" size="lg" className="group w-fit shadow-soft hover:shadow-glow transition-all duration-300">
                    Read Full Article
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
                  </Button>
                </CardContent>
              </div>
            </Card>
          </div>
        </section>
      )}

      {/* Categories Filter */}
      <section className="py-16 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-foreground">Explore by Category</h2>
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category, index) => (
              <Button
                key={index}
                variant={index === 0 ? "default" : "outline"}
                size="lg"
                className={`mb-2 shadow-soft hover:shadow-glow transition-all duration-300 hover:scale-105 ${
                  index === 0 ? 'bg-gradient-primary' : 'hover:bg-gradient-primary hover:text-primary-foreground'
                }`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Latest Articles</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover insights, tips, and industry updates from our team of experts
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post, index) => (
              <Card 
                key={post.id} 
                className={`overflow-hidden hover:shadow-glow transition-all duration-500 hover:scale-[1.05] bg-gradient-card border-0 shadow-soft group animate-fade-in`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-video overflow-hidden relative">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                </div>
                
                <CardHeader className="pb-4">
                  <div className="mb-3">
                    <span className="inline-block px-3 py-1 bg-gradient-secondary text-secondary-foreground text-xs font-semibold rounded-full shadow-soft">
                      {post.category}
                    </span>
                  </div>
                  <CardTitle className="text-xl leading-tight line-clamp-2 font-bold group-hover:text-primary transition-colors duration-300">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <CardDescription className="mb-6 line-clamp-3 text-base leading-relaxed">
                    {post.excerpt}
                  </CardDescription>
                  
                  <div className="flex items-center text-sm text-muted-foreground mb-6 space-x-4">
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-1 text-primary" />
                      <span className="font-medium">{post.author}</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1 text-primary" />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1 text-primary" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  
                  <Button variant="outline" size="lg" className="group w-full shadow-soft hover:shadow-glow hover:bg-gradient-primary hover:text-primary-foreground transition-all duration-300">
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-2 transition-transform duration-300" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="py-24 bg-gradient-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-shift opacity-20"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-extrabold text-primary-foreground mb-8 tracking-tight">
              Stay Updated with Our Latest Insights
            </h2>
            <p className="text-xl md:text-2xl text-primary-foreground/90 mb-12 max-w-3xl mx-auto leading-relaxed">
              Subscribe to our newsletter and get the latest articles, tips, and updates 
              delivered directly to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 rounded-lg border-0 text-foreground shadow-soft focus:shadow-glow transition-all duration-300 text-lg"
              />
              <Button variant="secondary" size="lg" className="px-8 py-4 shadow-soft hover:shadow-glow transition-all duration-300 hover:scale-105">
                Subscribe Now
              </Button>
            </div>
            <p className="text-primary-foreground/70 text-sm mt-4">
              No spam, unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-24 bg-gradient-card">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Have a Question or Topic Suggestion?
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
              We'd love to hear from you. Contact us with your questions or suggestions for future articles.
            </p>
            <NavLink to="/contact">
              <Button variant="default" size="lg" className="group shadow-elegant hover:shadow-glow transition-all duration-300 hover:scale-105 px-8 py-4 text-lg">
                Get in Touch
                <ArrowRight className="ml-2 h-6 w-6 group-hover:translate-x-2 transition-transform duration-300" />
              </Button>
            </NavLink>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;