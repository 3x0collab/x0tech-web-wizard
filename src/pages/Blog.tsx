import { Calendar, User, ArrowRight, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { NavLink } from 'react-router-dom';

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

  return (
    <div className="min-h-screen py-12">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              3x0Tech Blog
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Insights, updates, and expert perspectives on technology, business growth, 
              and digital transformation in Africa.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="mb-8">
              <span className="inline-block px-3 py-1 bg-primary text-primary-foreground text-sm font-medium rounded-full">
                Featured Article
              </span>
            </div>
            
            <Card className="overflow-hidden shadow-elegant hover:shadow-glow transition-all duration-300">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="aspect-video lg:aspect-auto">
                  <img 
                    src={featuredPost.image} 
                    alt={featuredPost.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-8 flex flex-col justify-center">
                  <div className="mb-4">
                    <span className="inline-block px-2 py-1 bg-accent text-accent-foreground text-xs font-medium rounded">
                      {featuredPost.category}
                    </span>
                  </div>
                  
                  <CardTitle className="text-2xl md:text-3xl mb-4 leading-tight">
                    {featuredPost.title}
                  </CardTitle>
                  
                  <CardDescription className="text-base mb-6">
                    {featuredPost.excerpt}
                  </CardDescription>
                  
                  <div className="flex items-center text-sm text-muted-foreground mb-6">
                    <User className="h-4 w-4 mr-1" />
                    <span className="mr-4">{featuredPost.author}</span>
                    <Calendar className="h-4 w-4 mr-1" />
                    <span className="mr-4">{new Date(featuredPost.date).toLocaleDateString()}</span>
                    <Clock className="h-4 w-4 mr-1" />
                    <span>{featuredPost.readTime}</span>
                  </div>
                  
                  <Button variant="default" size="lg" className="group w-fit">
                    Read Full Article
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </div>
            </Card>
          </div>
        </section>
      )}

      {/* Categories Filter */}
      <section className="py-8 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category, index) => (
              <Button
                key={index}
                variant={index === 0 ? "default" : "outline"}
                size="sm"
                className="mb-2"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post) => (
              <Card key={post.id} className="overflow-hidden hover:shadow-glow transition-all duration-300 hover:scale-[1.02]">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                <CardHeader className="pb-3">
                  <div className="mb-2">
                    <span className="inline-block px-2 py-1 bg-accent text-accent-foreground text-xs font-medium rounded">
                      {post.category}
                    </span>
                  </div>
                  <CardTitle className="text-lg leading-tight line-clamp-2">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <CardDescription className="mb-4 line-clamp-3">
                    {post.excerpt}
                  </CardDescription>
                  
                  <div className="flex items-center text-xs text-muted-foreground mb-4">
                    <User className="h-3 w-3 mr-1" />
                    <span className="mr-3">{post.author}</span>
                    <Calendar className="h-3 w-3 mr-1" />
                    <span className="mr-3">{new Date(post.date).toLocaleDateString()}</span>
                    <Clock className="h-3 w-3 mr-1" />
                    <span>{post.readTime}</span>
                  </div>
                  
                  <Button variant="outline" size="sm" className="group w-full">
                    Read More
                    <ArrowRight className="ml-2 h-3 w-3 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="py-20 bg-gradient-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Stay Updated with Our Latest Insights
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter and get the latest articles, tips, and updates 
            delivered directly to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 rounded-md border-0 text-foreground"
            />
            <Button variant="secondary" size="lg">
              Subscribe
            </Button>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Have a Question or Topic Suggestion?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            We'd love to hear from you. Contact us with your questions or suggestions for future articles.
          </p>
          <NavLink to="/contact">
            <Button variant="default" size="lg" className="group">
              Get in Touch
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </NavLink>
        </div>
      </section>
    </div>
  );
};

export default Blog;