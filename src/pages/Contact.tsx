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
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import DOMPurify from 'dompurify';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';

// Enhanced form validation schema with security constraints
const contactFormSchema = z.object({
  name: z.string()
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name must be less than 100 characters')
    .regex(/^[a-zA-Z\s.-]+$/, 'Name can only contain letters, spaces, dots, and hyphens'),
  email: z.string()
    .email('Please enter a valid email address')
    .max(254, 'Email address is too long'),
  phone: z.string()
    .regex(/^[\d\s\-+()]*$/, 'Phone number contains invalid characters')
    .max(20, 'Phone number is too long')
    .optional()
    .or(z.literal('')),
  message: z.string()
    .min(10, 'Message must be at least 10 characters')
    .max(5000, 'Message must be less than 5000 characters')
});

type ContactFormData = z.infer<typeof contactFormSchema>;

const Contact = () => {
  const [lastSubmission, setLastSubmission] = useState<number>(0);
  const { toast } = useToast();

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      message: ''
    }
  });

  // Rate limiting: prevent submissions within 30 seconds
  const checkRateLimit = (): boolean => {
    const now = Date.now();
    const timeSinceLastSubmission = now - lastSubmission;
    const rateLimitMs = 30 * 1000; // 30 seconds
    
    if (timeSinceLastSubmission < rateLimitMs) {
      const remainingTime = Math.ceil((rateLimitMs - timeSinceLastSubmission) / 1000);
      toast({
        title: "Please Wait",
        description: `Please wait ${remainingTime} seconds before submitting another message.`,
        variant: "destructive"
      });
      return false;
    }
    return true;
  };

  // Sanitize input data
  const sanitizeData = (data: ContactFormData): ContactFormData => {
    return {
      name: DOMPurify.sanitize(data.name.trim()),
      email: DOMPurify.sanitize(data.email.trim().toLowerCase()),
      phone: data.phone ? DOMPurify.sanitize(data.phone.trim()) : '',
      message: DOMPurify.sanitize(data.message.trim())
    };
  };

  const onSubmit = async (data: ContactFormData) => {
    if (!checkRateLimit()) return;

    try {
      // Sanitize all input data
      const sanitizedData = sanitizeData(data);
      
      setLastSubmission(Date.now());

      const { error } = await supabase.functions.invoke('send-contact-email', {
        body: sanitizedData
      });

      if (error) {
        throw error;
      }

      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for contacting us. We'll get back to you within 24 hours.",
      });
      
      // Reset form
      form.reset();
    } catch (error: any) {
      console.error('Error sending message:', error);
      toast({
        title: "Error Sending Message",
        description: "Please try again or contact us directly at info@3x0techsolutionsltd.com.ng",
        variant: "destructive"
      });
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Address',
      details: 'info@3x0techsolutionsltd.com.ng',
      description: 'Professional inquiries and project consultations'
    },
    {
      icon: Phone,
      title: 'Phone Numbers',
      details: '0816 4435695, 0701 657 3950, 0802 906 3771',
      description: 'Direct consultation and technical support'
    },
    {
      icon: MapPin,
      title: 'Office Address',
      details: 'Number 22, Charity Avenue, Sango Ota, Ogun State, Nigeria',
      description: 'Technology development center and client meeting space'
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
        title="Contact 3x0Tech Solutions Ltd | Get Your Enterprise Software Development Quote | Nigeria & Africa"
        description="Ready to transform your business with enterprise-grade software solutions? Contact Nigeria's leading technology company for AI-powered platforms, custom software development, and digital transformation services. Get your free consultation and project quote today."
        keywords="contact 3x0tech solutions Nigeria, enterprise software development quote Africa, AI solutions consultation Nigeria, digital transformation services quote, technology consulting Nigeria, custom software development contact, business automation consultation, enterprise applications quote Nigeria, software development company Lagos contact"
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
              Ready to accelerate your digital transformation? Partner with us to unlock innovative technology solutions 
              that drive measurable business results. Let's explore how we can elevate your organization's capabilities.
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
                    Share your project requirements and business objectives. Our technology consultants will provide a comprehensive proposal tailored to your needs.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Full Name *</FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="Your full name"
                                  {...field}
                                  maxLength={100}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="phone"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Phone Number</FormLabel>
                              <FormControl>
                                <Input
                                  type="tel"
                                  placeholder="Your phone number"
                                  {...field}
                                  maxLength={20}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email Address *</FormLabel>
                            <FormControl>
                              <Input
                                type="email"
                                placeholder="your.email@example.com"
                                {...field}
                                maxLength={254}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Message *</FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Tell us about your project or how we can help you..."
                                rows={6}
                                {...field}
                                maxLength={5000}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <Button 
                        type="submit" 
                        variant="default" 
                        size="lg" 
                        className="w-full group" 
                        disabled={form.formState.isSubmitting}
                      >
                        <Send className="w-4 h-4 mr-2" />
                        {form.formState.isSubmitting ? 'Sending...' : 'Send Message'}
                      </Button>
                    </form>
                  </Form>
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
                  Connect with our expert team to discuss your technology requirements and discover how our innovative solutions can transform your business operations.
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
              Essential information about our development process, implementation timelines, and service offerings
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">What are your implementation timelines?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Project timelines depend on scope and complexity. Most enterprise solutions are delivered within 2-8 weeks, 
                  including requirements analysis, development, testing, and deployment phases.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">What support services do you offer?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We provide comprehensive onboarding, user training, technical documentation, and ongoing support 
                  to ensure successful adoption and maximum ROI from your technology investment.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">How do you approach customization?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Every solution is tailored to your unique business processes, industry requirements, and growth objectives. 
                  We conduct thorough analysis to ensure optimal integration with your existing systems.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">What investment models are available?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We offer flexible engagement models including project-based development, software licensing, 
                  and subscription services. All pricing is transparent and scaled to deliver optimal value for your investment.
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