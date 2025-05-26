
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { 
  Target, 
  Building, 
  FileText, 
  Shield, 
  TrendingUp, 
  CheckCircle,
  Users,
  Lightbulb,
  Star
} from 'lucide-react';

const ExpertConsulting = () => {
  const targetClients = [
    {
      title: "New Market Entrants",
      description: "Companies looking to establish their first cannabis operations in New Zealand or international markets.",
      icon: <Target className="h-8 w-8 text-emerald-600" />
    },
    {
      title: "Existing Operators",
      description: "Established cannabis businesses seeking optimization, expansion, or operational excellence improvements.",
      icon: <TrendingUp className="h-8 w-8 text-emerald-600" />
    },
    {
      title: "International Expansion",
      description: "Global cannabis companies entering the New Zealand market or NZ companies expanding internationally.",
      icon: <Users className="h-8 w-8 text-emerald-600" />
    }
  ];

  const consultingServices = [
    {
      title: "Facility Design & Optimization",
      description: "Comprehensive facility planning and optimization services",
      details: [
        "GMP-compliant facility design principles",
        "Workflow optimization for maximum efficiency",
        "Scalability planning for future growth",
        "Biosecurity and contamination prevention",
        "Energy-efficient systems integration",
        "Regulatory compliance infrastructure"
      ]
    },
    {
      title: "Operational Procedures Development",
      description: "Standard Operating Procedure development for excellence",
      details: [
        "Cultivation SOP development",
        "Quality control procedures",
        "Manufacturing process optimization",
        "Inventory management systems",
        "Staff training protocols",
        "Compliance documentation frameworks"
      ]
    },
    {
      title: "Compliance & Licensing Guidance",
      description: "Expert navigation of regulatory requirements",
      details: [
        "New Zealand Medicinal Cannabis Scheme expertise",
        "International regulatory framework guidance",
        "License application support",
        "Ongoing compliance monitoring",
        "Regulatory change management",
        "Audit preparation and support"
      ]
    },
    {
      title: "Market Entry Strategies",
      description: "Strategic guidance for successful market entry",
      details: [
        "Comprehensive market analysis",
        "Regulatory landscape assessment",
        "Partnership and joint venture facilitation",
        "Go-to-market strategy development",
        "Risk assessment and mitigation",
        "Competitive positioning analysis"
      ]
    }
  ];

  const approachSteps = [
    {
      step: "1",
      title: "Initial Assessment",
      description: "Comprehensive evaluation of your current state, goals, and challenges"
    },
    {
      step: "2",
      title: "Strategic Planning",
      description: "Development of customized strategies and action plans"
    },
    {
      step: "3",
      title: "Implementation Support",
      description: "Hands-on guidance during execution and rollout phases"
    },
    {
      step: "4",
      title: "Ongoing Partnership",
      description: "Continuous support, monitoring, and optimization"
    }
  ];

  const advantages = [
    "Direct operational experience in premium cultivation",
    "Proven expertise in GMP manufacturing processes",
    "Custom technology development capabilities",
    "International market distribution knowledge",
    "Regulatory compliance track record",
    "Sustainable and innovative practice implementation"
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-50 to-teal-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Strategic Cannabis Consulting: 
              <span className="text-emerald-600 block">Guiding Your Success Worldwide</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
              Leverage our comprehensive operational experience to navigate the complex cannabis landscape. 
              From facility design and regulatory compliance to market entry strategies, we provide expert 
              guidance for cannabis businesses seeking excellence and growth.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Badge variant="outline" className="px-4 py-2 text-emerald-700 border-emerald-300">
                Facility Design
              </Badge>
              <Badge variant="outline" className="px-4 py-2 text-emerald-700 border-emerald-300">
                Regulatory Compliance
              </Badge>
              <Badge variant="outline" className="px-4 py-2 text-emerald-700 border-emerald-300">
                Market Entry
              </Badge>
              <Badge variant="outline" className="px-4 py-2 text-emerald-700 border-emerald-300">
                Operational Excellence
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Target Clients Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Who We Partner With for Consulting Success
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We work with diverse cannabis businesses at various stages of their journey, 
              providing tailored consulting solutions for sustainable growth and compliance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {targetClients.map((client, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    {client.icon}
                  </div>
                  <CardTitle className="text-xl text-gray-900">
                    {client.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{client.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Consulting Expertise Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Our Consulting Expertise
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive consulting services covering every aspect of cannabis business operations, 
              from initial planning to ongoing optimization.
            </p>
          </div>

          <Accordion type="single" collapsible className="max-w-4xl mx-auto">
            {consultingServices.map((service, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border border-gray-200 rounded-lg mb-4 bg-white">
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  <div className="text-left">
                    <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                    <p className="text-gray-600 mt-1">{service.description}</p>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {service.details.map((detail, idx) => (
                      <div key={idx} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-emerald-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{detail}</span>
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Consulting Approach Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Our Collaborative Consulting Approach
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We believe in partnership-driven consulting that combines strategic thinking 
              with practical implementation support throughout your journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {approachSteps.map((approach, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-emerald-600">{approach.step}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {approach.title}
                </h3>
                <p className="text-gray-600">{approach.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MediFlower Advantage Section */}
      <section className="py-20 bg-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              The MediFlower NZ Advantage in Consulting
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our consulting insights are backed by real operational experience across the entire 
              cannabis value chain, providing practical solutions that work in the real world.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {advantages.map((advantage, index) => (
              <div key={index} className="flex items-start bg-white p-6 rounded-lg shadow-sm">
                <Lightbulb className="h-6 w-6 text-emerald-600 mr-4 mt-1 flex-shrink-0" />
                <span className="text-gray-700">{advantage}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our consulting partnerships have helped cannabis businesses achieve regulatory 
              compliance, operational excellence, and sustainable growth across global markets.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-gradient-to-br from-emerald-50 to-teal-50 border-0">
              <CardHeader>
                <div className="flex items-center mb-2">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <CardTitle className="text-gray-900">Market Entry Success</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 italic mb-4">
                  "MediFlower NZ's consulting team provided invaluable guidance for our market entry. 
                  Their practical experience and regulatory expertise helped us navigate complex 
                  compliance requirements and establish operations ahead of schedule."
                </p>
                <p className="text-gray-600 font-medium">— International Cannabis Company</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 border-0">
              <CardHeader>
                <div className="flex items-center mb-2">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <CardTitle className="text-gray-900">Operational Excellence</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 italic mb-4">
                  "The facility optimization consulting delivered exceptional results. Our operational 
                  efficiency improved by 40% while maintaining the highest quality standards. 
                  The team's hands-on approach made all the difference."
                </p>
                <p className="text-gray-600 font-medium">— Established Cannabis Operator</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Transform Your Cannabis Business?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Schedule a discovery call with our consulting experts to discuss your specific 
            challenges and explore how we can help you achieve your business objectives.
          </p>
          <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 px-8 py-4 text-lg">
            Schedule a Consulting Discovery Call
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ExpertConsulting;
