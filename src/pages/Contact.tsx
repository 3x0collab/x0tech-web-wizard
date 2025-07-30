import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import SEOHead from '@/components/SEOHead';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { data, error } = await supabase.functions.invoke('send-contact-email', {
        body: formData
      });

      if (error) {
        throw error;
      }

      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for contacting us. We'll get back to you within 24 hours.",
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
    } catch (error: any) {
      console.error('Error sending message:', error);
      toast({
        title: "Error Sending Message",
        description: "Please try again or contact us directly at info@3x0techsolutionsltd.com.ng",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Address',
      details: 'info@3x0techsolutionsltd.com.ng',
      description: 'Send us an email anytime'
    },
    {
      icon: Phone,
      title: 'Phone Numbers',
      details: '0816 4435695, 0701 657 3950, 0802 906 3771',
      description: 'Call us during business hours'
    },
    {
      icon: MapPin,
      title: 'Office Address',
      details: 'Number 22, Charity Avenue, Sango Ota, Ogun State, Nigeria',
      description: 'Visit our headquarters'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: 'Monday - Friday: 9:00 AM - 6:00 PM',
      description: 'West Africa Time (WAT)'
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "mainEntity": {
      "@type": "Organization",
      "name": "3x0Tech Solutions Ltd",
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "telephone": "+234-816-443-5695",
          "email": "info@3x0techsolutionsltd.com.ng",
          "contactType": "Customer Service",
          "availableLanguage": "English",
          "hoursAvailable": "Mo-Fr 09:00-18:00"
        }
      ],
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Number 22, Charity Avenue",
        "addressLocality": "Sango Ota",
        "addressRegion": "Ogun State",
        "addressCountry": "NG"
      }
    }
  };

  return (
    <div className="min-h-screen py-12">
      <SEOHead 
        title="Contact 3x0Tech Solutions – Get Custom Software Development Quote"
        description="Contact 3x0Tech Solutions for custom software development, web design, and AI solutions. Located in Ogun State, Nigeria. Get your free consultation today."
        keywords="contact 3x0tech, software development quote Nigeria, custom software consultation, web development services Nigeria, business software inquiry, tech solutions contact"
        structuredData={structuredData}
      />
      {/* Hero Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ready to transform your business with our smart software solutions? 
              Contact us today and let's discuss how we can help you grow.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <Card className="shadow-elegant">
                <CardHeader>
                  <CardTitle className="text-2xl">Send us a Message</CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll get back to you as soon as possible.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          placeholder="Your full name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          placeholder="Your phone number"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="mt-1"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="your.email@example.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="mt-1"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Tell us about your project or how we can help you..."
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={6}
                        className="mt-1"
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      variant="default" 
                      size="lg" 
                      className="w-full group" 
                      disabled={isSubmitting}
                    >
                      <Send className="w-4 h-4 mr-2" />
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  Contact Information
                </h2>
                <p className="text-muted-foreground">
                  We're here to help you succeed. Reach out to us through any of the following channels.
                </p>
              </div>

              {contactInfo.map((info, index) => (
                <Card key={index} className="hover:shadow-glow transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <info.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-foreground mb-1">
                          {info.title}
                        </h3>
                        <p className="text-foreground font-medium mb-1">
                          {info.details}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {info.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}

              {/* Map Placeholder */}
              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="w-full h-64 bg-muted flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="h-12 w-12 text-muted-foreground mx-auto mb-2" />
                      <p className="text-muted-foreground">
                        Interactive Map Coming Soon
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Sango Ota, Ogun State, Nigeria
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ or Additional Info Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Quick answers to common questions about our services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">How quickly can you implement a solution?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Implementation time varies by solution complexity, typically ranging from 1-4 weeks 
                  for most of our software solutions.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Do you provide training and support?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Yes, we provide comprehensive training and ongoing support to ensure you get 
                  the most value from our solutions.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Can solutions be customized for my business?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Absolutely! All our solutions can be customized to meet your specific 
                  business requirements and workflows.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">What are your pricing models?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We offer flexible pricing models including one-time licenses and subscription 
                  plans to fit different business needs and budgets.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;