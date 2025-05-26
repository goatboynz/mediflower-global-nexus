
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    inquiryType: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission logic here
  };

  const contactInfo = [
    {
      title: "Business Development",
      email: "partnerships@mediflowernz.com",
      phone: "+64 3 123 4567",
      description: "For partnership opportunities and distribution inquiries"
    },
    {
      title: "Technology Solutions",
      email: "tech@mediflowernz.com", 
      phone: "+64 3 123 4568",
      description: "For custom software and hardware development"
    },
    {
      title: "Consulting Services",
      email: "consulting@mediflowernz.com",
      phone: "+64 3 123 4569", 
      description: "For strategic guidance and regulatory compliance"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-slate-50 to-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Let's Discuss Your Cannabis Business Needs
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to take your cannabis business to the next level? Our experts are here to help 
            you navigate opportunities in the global medical cannabis market.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <Card className="bg-white shadow-lg border-0">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900">Get in Touch</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you within 24 hours.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <Input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        required
                        className="border-gray-300"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <Input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        required
                        className="border-gray-300"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Company Name *
                    </label>
                    <Input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({...formData, company: e.target.value})}
                      required
                      className="border-gray-300"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Inquiry Type *
                    </label>
                    <Select onValueChange={(value) => setFormData({...formData, inquiryType: value})}>
                      <SelectTrigger className="border-gray-300">
                        <SelectValue placeholder="Select inquiry type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="partnership">Partnership Opportunities</SelectItem>
                        <SelectItem value="consulting">Consulting Services</SelectItem>
                        <SelectItem value="technology">Technology Solutions</SelectItem>
                        <SelectItem value="cultivation">Cultivation Services</SelectItem>
                        <SelectItem value="distribution">Distribution Network</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <Textarea
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      required
                      rows={4}
                      placeholder="Tell us about your business needs and how we can help..."
                      className="border-gray-300"
                    />
                  </div>

                  <Button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="bg-white shadow-md border-0">
                    <CardContent className="p-6">
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">{info.title}</h4>
                      <p className="text-gray-600 text-sm mb-3">{info.description}</p>
                      <div className="space-y-1">
                        <p className="text-emerald-600 font-medium">{info.email}</p>
                        <p className="text-gray-700">{info.phone}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <Card className="bg-gradient-to-br from-emerald-600 to-emerald-700 text-white border-0">
              <CardContent className="p-6 text-center">
                <h4 className="text-xl font-semibold mb-3">Headquarters</h4>
                <p className="mb-2">MediFlower NZ Ltd.</p>
                <p className="mb-2">123 Innovation Drive</p>
                <p className="mb-4">Christchurch 8041, New Zealand</p>
                <Button variant="secondary" className="bg-white text-emerald-600 hover:bg-gray-100">
                  View on Map
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
