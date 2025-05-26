
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useState } from 'react';
import { MapPin, Phone, Mail, Users, Globe, Handshake, Linkedin } from 'lucide-react';

const contactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  company: z.string().min(2, 'Company name is required'),
  inquiryType: z.string().min(1, 'Please select an inquiry type'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

const partnershipFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  company: z.string().min(2, 'Company name is required'),
  partnershipType: z.string().min(1, 'Please select a partnership type'),
  description: z.string().min(20, 'Partnership description must be at least 20 characters'),
});

const ContactPartnerships = () => {
  const [activeForm, setActiveForm] = useState<'contact' | 'partnership'>('contact');

  const contactForm = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      company: '',
      inquiryType: '',
      message: '',
    },
  });

  const partnershipForm = useForm<z.infer<typeof partnershipFormSchema>>({
    resolver: zodResolver(partnershipFormSchema),
    defaultValues: {
      name: '',
      email: '',
      company: '',
      partnershipType: '',
      description: '',
    },
  });

  const onContactSubmit = (values: z.infer<typeof contactFormSchema>) => {
    console.log('Contact form submitted:', values);
    // Handle contact form submission
  };

  const onPartnershipSubmit = (values: z.infer<typeof partnershipFormSchema>) => {
    console.log('Partnership form submitted:', values);
    // Handle partnership form submission
  };

  const contactMethods = [
    {
      icon: Mail,
      title: "General Inquiries",
      value: "info@mediflower.nz",
      description: "For general questions and information"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+64 3 123 4567",
      description: "Business hours: 9 AM - 5 PM NZST"
    },
    {
      icon: MapPin,
      title: "Address",
      value: "123 Innovation Drive, Christchurch 8041, New Zealand",
      description: "Our headquarters and main facility"
    }
  ];

  const partnershipTypes = [
    {
      icon: Globe,
      title: "Distribution Agreements",
      description: "Partner with us to distribute premium medical cannabis products in your region"
    },
    {
      icon: Users,
      title: "Research Collaborations",
      description: "Joint research initiatives to advance medical cannabis science and applications"
    },
    {
      icon: Handshake,
      title: "Technology Ventures",
      description: "Collaborate on innovative cannabis technology and cultivation solutions"
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-600 to-emerald-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Connect With Us: Let's Innovate Together
          </h1>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed opacity-90">
            Ready to explore opportunities in the medical cannabis industry? Whether you're seeking partnerships, 
            consulting services, or innovative solutions, we're here to collaborate and drive the future together.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're always ready to discuss new opportunities and answer your questions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <Card key={index} className="text-center border-0 shadow-lg">
                  <CardContent className="p-8">
                    <Icon className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{method.title}</h3>
                    <p className="text-emerald-600 font-medium mb-2">{method.value}</p>
                    <p className="text-gray-600 text-sm">{method.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Contact and Partnership Forms */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">Contact Form</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you within 24 hours.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Form {...contactForm}>
                  <form onSubmit={contactForm.handleSubmit(onContactSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <FormField
                        control={contactForm.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Full Name *</FormLabel>
                            <FormControl>
                              <Input {...field} className="border-gray-300" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={contactForm.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email Address *</FormLabel>
                            <FormControl>
                              <Input type="email" {...field} className="border-gray-300" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={contactForm.control}
                      name="company"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Company Name *</FormLabel>
                          <FormControl>
                            <Input {...field} className="border-gray-300" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={contactForm.control}
                      name="inquiryType"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Reason for Inquiry *</FormLabel>
                          <Select onValueChange={field.onChange} value={field.value}>
                            <FormControl>
                              <SelectTrigger className="border-gray-300">
                                <SelectValue placeholder="Select inquiry type" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="sales-export">Sales/Export</SelectItem>
                              <SelectItem value="consulting">Consulting Services</SelectItem>
                              <SelectItem value="technology">Custom Technology</SelectItem>
                              <SelectItem value="partnerships">Partnerships</SelectItem>
                              <SelectItem value="general">General Inquiry</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={contactForm.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message *</FormLabel>
                          <FormControl>
                            <Textarea
                              {...field}
                              rows={4}
                              placeholder="Tell us about your needs and how we can help..."
                              className="border-gray-300"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700">
                      Send Message
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>

            {/* Interactive Map */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">Visit Our Headquarters</CardTitle>
                <CardDescription>
                  Located in the innovation hub of Christchurch, New Zealand
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-lg p-8 text-center h-64 flex items-center justify-center">
                  <div>
                    <MapPin className="h-16 w-16 text-emerald-600 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">MediFlower NZ Headquarters</h3>
                    <p className="text-gray-700 mb-4">123 Innovation Drive<br />Christchurch 8041, New Zealand</p>
                    <Button variant="outline" className="border-emerald-600 text-emerald-600 hover:bg-emerald-50">
                      View on Map
                    </Button>
                  </div>
                </div>
                
                {/* Social Media */}
                <div className="mt-8 text-center">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Connect With Us</h4>
                  <div className="flex justify-center space-x-4">
                    <Button variant="outline" size="icon" className="border-emerald-600 text-emerald-600 hover:bg-emerald-50">
                      <Linkedin className="h-5 w-5" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Partnership Opportunities */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Partnership Opportunities</h2>
            <h3 className="text-2xl font-semibold text-emerald-600 mb-6">Collaborate with MediFlower NZ</h3>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              We're actively seeking strategic partnerships to expand our reach and impact in the medical cannabis industry. 
              Join us in shaping the future of medical cannabis solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {partnershipTypes.map((type, index) => {
              const Icon = type.icon;
              return (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-8 text-center">
                    <Icon className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">{type.title}</h3>
                    <p className="text-gray-600">{type.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Partnership Form */}
          <Card className="max-w-4xl mx-auto border-0 shadow-lg">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Propose a Partnership</CardTitle>
              <CardDescription>
                Tell us about your partnership idea and how we can work together.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...partnershipForm}>
                <form onSubmit={partnershipForm.handleSubmit(onPartnershipSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={partnershipForm.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Contact Name *</FormLabel>
                          <FormControl>
                            <Input {...field} className="border-gray-300" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={partnershipForm.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email Address *</FormLabel>
                          <FormControl>
                            <Input type="email" {...field} className="border-gray-300" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={partnershipForm.control}
                    name="company"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Company/Organization *</FormLabel>
                        <FormControl>
                          <Input {...field} className="border-gray-300" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={partnershipForm.control}
                    name="partnershipType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Partnership Type *</FormLabel>
                        <Select onValueChange={field.onChange} value={field.value}>
                          <FormControl>
                            <SelectTrigger className="border-gray-300">
                              <SelectValue placeholder="Select partnership type" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="distribution">Distribution Agreement</SelectItem>
                            <SelectItem value="research">Research Collaboration</SelectItem>
                            <SelectItem value="technology">Technology Venture</SelectItem>
                            <SelectItem value="investment">Investment Opportunity</SelectItem>
                            <SelectItem value="manufacturing">Contract Manufacturing</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={partnershipForm.control}
                    name="description"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Partnership Description *</FormLabel>
                        <FormControl>
                          <Textarea
                            {...field}
                            rows={5}
                            placeholder="Describe your partnership proposal, goals, and how we can work together..."
                            className="border-gray-300"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700">
                    Submit Partnership Proposal
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactPartnerships;
