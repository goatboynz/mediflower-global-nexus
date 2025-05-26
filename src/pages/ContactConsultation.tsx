
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar, Clock, Users, Lightbulb } from 'lucide-react';
import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const ContactConsultation = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    consultationType: '',
    projectScope: '',
    timeline: '',
    budget: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Consultation form submitted:', formData);
    // Handle form submission logic here
  };

  const consultationTypes = [
    { title: "Cultivation Consulting", description: "Facility design, cultivation techniques, and optimization", icon: "🌱" },
    { title: "Regulatory Compliance", description: "Licensing, compliance frameworks, and regulatory strategy", icon: "📋" },
    { title: "Technology Solutions", description: "Custom software, hardware integration, and automation", icon: "⚙️" },
    { title: "Market Entry Strategy", description: "International expansion and distribution planning", icon: "🌍" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-emerald-50">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Book a Consultation
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get expert guidance from our cannabis industry specialists. Schedule a consultation 
              to discuss your project and explore how we can help you succeed.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Consultation Form */}
            <Card className="bg-white shadow-xl border-0">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900">Schedule Your Consultation</CardTitle>
                <CardDescription>
                  Tell us about your project and we'll arrange a consultation with the right expert.
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
                      Consultation Type *
                    </label>
                    <Select onValueChange={(value) => setFormData({...formData, consultationType: value})}>
                      <SelectTrigger className="border-gray-300">
                        <SelectValue placeholder="Select consultation type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="cultivation">Cultivation Consulting</SelectItem>
                        <SelectItem value="regulatory">Regulatory Compliance</SelectItem>
                        <SelectItem value="technology">Technology Solutions</SelectItem>
                        <SelectItem value="market-entry">Market Entry Strategy</SelectItem>
                        <SelectItem value="comprehensive">Comprehensive Assessment</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Project Timeline
                      </label>
                      <Select onValueChange={(value) => setFormData({...formData, timeline: value})}>
                        <SelectTrigger className="border-gray-300">
                          <SelectValue placeholder="Select timeline" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="immediate">Immediate (1-3 months)</SelectItem>
                          <SelectItem value="short">Short term (3-6 months)</SelectItem>
                          <SelectItem value="medium">Medium term (6-12 months)</SelectItem>
                          <SelectItem value="long">Long term (12+ months)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Budget Range
                      </label>
                      <Select onValueChange={(value) => setFormData({...formData, budget: value})}>
                        <SelectTrigger className="border-gray-300">
                          <SelectValue placeholder="Select budget" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="under-50k">Under $50k</SelectItem>
                          <SelectItem value="50k-100k">$50k - $100k</SelectItem>
                          <SelectItem value="100k-500k">$100k - $500k</SelectItem>
                          <SelectItem value="500k-plus">$500k+</SelectItem>
                          <SelectItem value="tbd">To be determined</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Project Description *
                    </label>
                    <Textarea
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      required
                      rows={4}
                      placeholder="Describe your project, challenges, and what you hope to achieve..."
                      className="border-gray-300"
                    />
                  </div>

                  <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 py-3">
                    Request Consultation
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Consultation Information */}
            <div className="space-y-6">
              <Card className="bg-white shadow-lg border-0">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">What to Expect</h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <Calendar className="h-5 w-5 text-blue-600 mt-1" />
                      <div>
                        <p className="font-medium text-gray-900">Initial Assessment</p>
                        <p className="text-gray-600 text-sm">30-60 minute consultation to understand your needs</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Lightbulb className="h-5 w-5 text-blue-600 mt-1" />
                      <div>
                        <p className="font-medium text-gray-900">Expert Recommendations</p>
                        <p className="text-gray-600 text-sm">Tailored advice and strategic recommendations</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Users className="h-5 w-5 text-blue-600 mt-1" />
                      <div>
                        <p className="font-medium text-gray-900">Follow-up Plan</p>
                        <p className="text-gray-600 text-sm">Clear next steps and implementation roadmap</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="grid grid-cols-1 gap-4">
                {consultationTypes.map((type, index) => (
                  <Card key={index} className="bg-white shadow-md border-0 hover:shadow-lg transition-shadow">
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl">{type.icon}</span>
                        <div>
                          <h4 className="font-semibold text-gray-900">{type.title}</h4>
                          <p className="text-gray-600 text-sm">{type.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card className="bg-gradient-to-br from-blue-600 to-blue-700 text-white border-0">
                <CardContent className="p-6 text-center">
                  <Clock className="h-8 w-8 mx-auto mb-3" />
                  <h3 className="text-lg font-semibold mb-2">Response Time</h3>
                  <p className="text-blue-100">We'll respond to your consultation request within 24 hours</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactConsultation;
