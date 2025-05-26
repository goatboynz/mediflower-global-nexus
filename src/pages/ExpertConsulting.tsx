import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Users, Target, Lightbulb, TrendingUp, Globe, Award, CheckCircle, ArrowRight, Shield, BarChart, Cpu } from 'lucide-react';

const ExpertConsulting = () => {
  const coreServices = [
    {
      title: "Strategic Consulting",
      description: "Expert guidance on market entry, regulatory compliance, and business strategy",
      icon: Target
    },
    {
      title: "Operational Optimization",
      description: "Improving efficiency and profitability through process improvements and technology integration",
      icon: Lightbulb
    },
    {
      title: "Financial Planning",
      description: "Developing robust financial models and investment strategies for sustainable growth",
      icon: TrendingUp
    }
  ];

  const whyChooseUs = [
    {
      title: "Industry Expertise",
      description: "Deep understanding of the medical cannabis sector and its unique challenges",
      icon: Users
    },
    {
      title: "Proven Track Record",
      description: "Successful project delivery and measurable results for our clients",
      icon: Award
    },
    {
      title: "Global Network",
      description: "Extensive connections with industry leaders, regulators, and investors worldwide",
      icon: Globe
    }
  ];

  const expertiseAreas = [
    {
      title: "Cultivation Consulting",
      description: "Optimizing cultivation practices for maximum yield and quality",
      icon: Lightbulb
    },
    {
      title: "Regulatory Compliance",
      description: "Navigating complex regulatory frameworks and ensuring full compliance",
      icon: Shield
    },
    {
      title: "Market Analysis",
      description: "Providing in-depth market insights and competitive analysis",
      icon: BarChart
    },
    {
      title: "Technology Integration",
      description: "Implementing cutting-edge technology solutions to improve efficiency",
      icon: Cpu
    }
  ];

  const globalExperience = [
    {
      region: "North America",
      description: "Assisting clients with market entry and expansion strategies",
      icon: Globe
    },
    {
      region: "Europe",
      description: "Providing regulatory guidance and operational support",
      icon: Globe
    },
    {
      region: "Asia-Pacific",
      description: "Facilitating partnerships and market development",
      icon: Globe
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Expert Consulting Services
            </h1>
            <p className="text-2xl text-blue-700 mb-8">
              for the Medical Cannabis Industry
            </p>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              MediFlower NZ provides expert consulting services to help businesses navigate the complex 
              and rapidly evolving medical cannabis industry. Our team of experienced consultants 
              offers strategic guidance, operational support, and regulatory expertise to ensure 
              your success in this dynamic market.
            </p>
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Our Core Consulting Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer a comprehensive suite of consulting services designed to address the unique 
              challenges and opportunities in the medical cannabis industry.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {coreServices.map((service, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    <service.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Why Choose MediFlower NZ?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We bring unparalleled expertise, a proven track record, and a global network to help 
              your business thrive in the medical cannabis industry.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyChooseUs.map((reason, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    <reason.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{reason.title}</h3>
                  <p className="text-gray-600">{reason.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Areas */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Areas of Expertise
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our consulting services cover a wide range of critical areas, ensuring comprehensive 
              support for your business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {expertiseAreas.map((area, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center mb-3">
                    <area.icon className="h-6 w-6 text-blue-600 mr-3" />
                    <h3 className="text-xl font-semibold text-gray-900">{area.title}</h3>
                  </div>
                  <p className="text-gray-600">{area.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Global Experience */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Global Experience
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              We have extensive experience working with clients in key markets around the world, 
              providing tailored solutions to meet local regulatory requirements and market dynamics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {globalExperience.map((experience, index) => (
              <Card key={index} className="bg-white hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center mb-3">
                    <experience.icon className="h-6 w-6 text-blue-600 mr-3" />
                    <h3 className="text-xl font-semibold text-gray-900">{experience.region}</h3>
                  </div>
                  <p className="text-gray-600">{experience.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Elevate Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Contact us today to learn how our expert consulting services can help you achieve 
            your goals in the medical cannabis industry.
          </p>
          <Button className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 text-lg">
            Schedule a Consultation
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ExpertConsulting;
