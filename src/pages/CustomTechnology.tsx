import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Cpu, Smartphone, Cloud, BarChart3, Shield, Zap, CheckCircle, Cog } from 'lucide-react';

const CustomTechnology = () => {
  const technologySolutions = [
    {
      title: "AI-Driven Cultivation",
      description: "Predictive analytics and machine learning for optimized growing conditions",
      icon: Cpu
    },
    {
      title: "Supply Chain Management",
      description: "Blockchain-enabled tracking for transparency and compliance",
      icon: Cloud
    },
    {
      title: "Patient Management Systems",
      description: "Secure, HIPAA-compliant platforms for patient data and care coordination",
      icon: Smartphone
    },
    {
      title: "Data Analytics & Reporting",
      description: "Real-time dashboards and custom reports for informed decision-making",
      icon: BarChart3
    }
  ];

  const keyFeatures = [
    {
      feature: "Scalable Architecture",
      description: "Designed to grow with your business, from startup to enterprise-level operations"
    },
    {
      feature: "Secure Data Management",
      description: "Advanced encryption and security protocols to protect sensitive information"
    },
    {
      feature: "Regulatory Compliance",
      description: "Built-in compliance tools to meet evolving industry regulations"
    },
    {
      feature: "Customizable Modules",
      description: "Tailored solutions to fit your specific needs and workflows"
    },
    {
      feature: "Integration Capabilities",
      description: "Seamless integration with existing systems and third-party applications"
    },
    {
      feature: "24/7 Support",
      description: "Dedicated support team available around the clock to assist with any issues"
    }
  ];

  const implementationSteps = [
    {
      step: "Needs Assessment",
      description: "In-depth analysis of your current technology infrastructure and business requirements"
    },
    {
      step: "Solution Design",
      description: "Customized technology solutions tailored to your specific needs and goals"
    },
    {
      step: "Implementation & Integration",
      description: "Seamless integration with existing systems and data migration"
    },
    {
      step: "Training & Support",
      description: "Comprehensive training programs and ongoing support to ensure successful adoption"
    }
  ];

  const benefits = [
    {
      benefit: "Increased Efficiency",
      description: "Streamline operations and automate key processes for maximum productivity"
    },
    {
      benefit: "Improved Compliance",
      description: "Ensure adherence to regulatory requirements and industry best practices"
    },
    {
      benefit: "Enhanced Security",
      description: "Protect sensitive data and prevent unauthorized access with advanced security measures"
    },
    {
      benefit: "Data-Driven Insights",
      description: "Gain valuable insights into your business performance with real-time analytics"
    },
    {
      benefit: "Cost Savings",
      description: "Reduce operational costs and improve profitability with optimized technology solutions"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 to-indigo-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Custom Technology Solutions
            </h1>
            <p className="text-2xl text-indigo-700 mb-8">
              for the Medical Cannabis Industry
            </p>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              MediFlower NZ delivers custom technology solutions tailored to the unique needs of the medical cannabis industry. 
              From AI-driven cultivation to secure patient management systems, we provide innovative technology solutions 
              that drive efficiency, compliance, and growth.
            </p>
          </div>
        </div>
      </section>

      {/* Technology Solutions */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Our Technology Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer a comprehensive suite of technology solutions designed to optimize every aspect 
              of your medical cannabis business, from cultivation to patient care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technologySolutions.map((solution, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <solution.icon className="h-8 w-8 text-indigo-600" />
                  </div>
                  <CardTitle className="text-xl">{solution.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{solution.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Key Features of Our Technology Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our technology solutions are packed with features designed to meet the unique needs 
              of the medical cannabis industry and drive your business forward.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {keyFeatures.map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.feature}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Our Streamlined Implementation Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We ensure a smooth and efficient implementation process, from initial assessment to ongoing support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {implementationSteps.map((step, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-2xl text-indigo-700">{step.step}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              The Benefits of Our Technology Solutions
            </h2>
            <p className="text-xl text-indigo-100 max-w-3xl mx-auto">
              Our technology solutions deliver tangible benefits, from increased efficiency to improved compliance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow bg-white">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.benefit}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business with Technology?
          </h2>
          <p className="text-xl text-indigo-100 mb-8 max-w-3xl mx-auto">
            Discover how our custom technology solutions can drive efficiency, compliance, and growth for your medical cannabis business.
          </p>
          <Button size="lg" className="bg-white text-purple-600 hover:bg-purple-50">
            Explore Our Technology Solutions
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CustomTechnology;
