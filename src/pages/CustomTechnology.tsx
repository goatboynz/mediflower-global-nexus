
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { 
  Monitor, 
  Cpu, 
  Settings, 
  BarChart3, 
  Shield, 
  TrendingUp,
  CheckCircle,
  Lightbulb,
  Zap,
  Database,
  Wifi,
  Camera,
  Thermometer,
  Package,
  Cog,
  LineChart,
  Globe
} from 'lucide-react';

const CustomTechnology = () => {
  const challenges = [
    {
      title: "Complex Compliance Requirements",
      description: "Navigate intricate regulatory frameworks with automated compliance tracking and reporting",
      icon: <Shield className="h-8 w-8 text-blue-600" />
    },
    {
      title: "Environmental Precision Control",
      description: "Achieve optimal growing conditions with custom sensors and automated control systems",
      icon: <Thermometer className="h-8 w-8 text-green-600" />
    },
    {
      title: "Operational Efficiency",
      description: "Streamline processes with integrated systems that reduce manual work and human error",
      icon: <Zap className="h-8 w-8 text-orange-600" />
    },
    {
      title: "Data-Driven Decision Making",
      description: "Transform operational data into actionable insights with advanced analytics platforms",
      icon: <BarChart3 className="h-8 w-8 text-purple-600" />
    }
  ];

  const softwareSolutions = [
    {
      title: "Cultivation Management Systems",
      description: "Comprehensive platforms for managing every aspect of cannabis cultivation",
      features: [
        "Advanced growth analytics and predictive modeling",
        "NZMQS and international compliance automation",
        "Real-time hardware integration and control",
        "Batch tracking and genealogy management",
        "Yield optimization algorithms",
        "Automated reporting and documentation"
      ],
      benefits: "Increase yields by 25-40% while ensuring perfect regulatory compliance"
    },
    {
      title: "Environmental Monitoring Software",
      description: "Precision environmental control with intelligent automation",
      features: [
        "Multi-parameter monitoring (temperature, humidity, CO2, light)",
        "Predictive environmental modeling",
        "Energy optimization algorithms",
        "Early detection of environmental stress",
        "Remote monitoring and alerts",
        "Integration with HVAC and lighting systems"
      ],
      benefits: "Reduce energy costs by 30% while maintaining optimal growing conditions"
    },
    {
      title: "Inventory & Seed-to-Sale Tracking",
      description: "Complete traceability and inventory management solutions",
      features: [
        "GMP-compliant inventory tracking",
        "NZMQS regulatory reporting automation",
        "Barcode and RFID integration",
        "Real-time inventory visibility",
        "Automated compliance alerts",
        "Chain of custody documentation"
      ],
      benefits: "Eliminate compliance violations and reduce inventory shrinkage by 15%"
    },
    {
      title: "Manufacturing Process Control",
      description: "Automated control systems for extraction and processing",
      features: [
        "Recipe management and process control",
        "Quality control automation",
        "Batch record management",
        "Equipment integration and monitoring",
        "Statistical process control",
        "Deviation management systems"
      ],
      benefits: "Achieve 99.5% batch consistency and reduce processing time by 20%"
    },
    {
      title: "Data Analytics & Reporting Platforms",
      description: "Transform operational data into strategic insights",
      features: [
        "Real-time operational dashboards",
        "Predictive analytics for yield optimization",
        "Regulatory compliance reporting",
        "Financial performance analytics",
        "Quality trend analysis",
        "Custom KPI tracking"
      ],
      benefits: "Enable data-driven decisions that improve profitability by 18%"
    }
  ];

  const hardwareSolutions = [
    {
      title: "Bespoke Environmental Control Hardware",
      description: "Custom-designed sensors and automation components",
      features: [
        "Precision environmental sensors (±0.1°C accuracy)",
        "Wireless mesh networking capabilities",
        "Long-life battery systems for remote monitoring",
        "Corrosion-resistant materials for harsh environments",
        "Edge computing for real-time decision making",
        "Modular design for easy expansion"
      ],
      applications: "Ideal for large-scale cultivation facilities requiring precise environmental control"
    },
    {
      title: "Automation for Cultivation & Manufacturing",
      description: "Robotic and automated systems for operational efficiency",
      features: [
        "Automated irrigation and nutrient delivery systems",
        "Robotic harvesting and trimming equipment",
        "Conveyor systems for processing workflows",
        "Automated packaging and labeling systems",
        "Quality inspection automation",
        "Material handling robotics"
      ],
      applications: "Reduce labor costs by 40% while improving consistency and quality"
    },
    {
      title: "Specialized Processing Equipment",
      description: "Custom extraction and processing machinery",
      features: [
        "Closed-loop extraction systems",
        "Custom distillation equipment",
        "Automated cleaning and sanitization systems",
        "Precision dosing and formulation equipment",
        "Temperature and pressure control systems",
        "Safety and containment systems"
      ],
      applications: "Optimize extraction efficiency and ensure product consistency"
    },
    {
      title: "Integrated IoT Solutions",
      description: "Connected device ecosystems for comprehensive monitoring",
      features: [
        "Industrial IoT gateway systems",
        "Edge computing platforms",
        "Secure data transmission protocols",
        "Cloud integration capabilities",
        "Mobile device connectivity",
        "API integration for third-party systems"
      ],
      applications: "Create intelligent facilities that optimize themselves automatically"
    }
  ];

  const developmentSteps = [
    {
      step: "1",
      title: "Needs Analysis & Discovery",
      description: "Comprehensive assessment of your operational challenges, goals, and technical requirements",
      icon: <Monitor className="h-6 w-6" />
    },
    {
      step: "2", 
      title: "Custom Design & Architecture",
      description: "Development of tailored solutions that integrate seamlessly with your existing systems",
      icon: <Cpu className="h-6 w-6" />
    },
    {
      step: "3",
      title: "Development & Testing",
      description: "Agile development process with continuous testing and quality assurance",
      icon: <Settings className="h-6 w-6" />
    },
    {
      step: "4",
      title: "Deployment & Integration",
      description: "Seamless implementation with minimal operational disruption",
      icon: <Wifi className="h-6 w-6" />
    },
    {
      step: "5",
      title: "Training & Support",
      description: "Comprehensive training and ongoing technical support for optimal performance",
      icon: <Database className="h-6 w-6" />
    }
  ];

  const caseStudies = [
    {
      title: "Large-Scale Cultivation Optimization",
      challenge: "A 50,000 sq ft cultivation facility was experiencing inconsistent yields and high energy costs due to manual environmental controls.",
      solution: "Custom IoT sensor network with AI-powered environmental control system and predictive analytics platform.",
      outcome: "35% increase in average yield, 42% reduction in energy costs, and 99.8% compliance record.",
      technologies: ["IoT Sensors", "Machine Learning", "Cloud Analytics", "Mobile Apps"]
    },
    {
      title: "Manufacturing Process Automation",
      challenge: "Processing facility needed to improve consistency and reduce contamination risks in their extraction operations.",
      solution: "Automated extraction control system with real-time quality monitoring and contamination prevention protocols.",
      outcome: "99.7% batch consistency, 60% reduction in contamination incidents, 25% faster processing time.",
      technologies: ["Process Control", "Quality Automation", "Safety Systems", "Data Analytics"]
    },
    {
      title: "Regulatory Compliance Integration", 
      challenge: "Multi-facility operator struggling with complex compliance requirements across different jurisdictions.",
      solution: "Integrated compliance platform with automated reporting and real-time regulatory tracking.",
      outcome: "Zero compliance violations over 18 months, 80% reduction in compliance-related labor costs.",
      technologies: ["Compliance Software", "Automated Reporting", "Multi-Jurisdiction Support", "Real-time Tracking"]
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
              Innovative Technology: 
              <span className="text-blue-600 block">Tailored Hardware & Software for Cannabis</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
              Transform your cannabis operations with custom-built technology solutions designed to solve your unique challenges. 
              From precision cultivation management to automated processing systems, we develop hardware and software that gives you 
              competitive advantages over off-the-shelf products.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Badge variant="outline" className="px-4 py-2 text-blue-700 border-blue-300">
                Custom Software Development
              </Badge>
              <Badge variant="outline" className="px-4 py-2 text-blue-700 border-blue-300">
                IoT Hardware Solutions
              </Badge>
              <Badge variant="outline" className="px-4 py-2 text-blue-700 border-blue-300">
                Process Automation
              </Badge>
              <Badge variant="outline" className="px-4 py-2 text-blue-700 border-blue-300">
                Data Analytics
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Solving Your Unique Operational Challenges
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every cannabis operation faces distinct challenges. Our custom technology solutions are designed 
              to address your specific problems with tailored hardware and software that delivers measurable results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {challenges.map((challenge, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    {challenge.icon}
                  </div>
                  <CardTitle className="text-lg text-gray-900">
                    {challenge.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{challenge.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Software Solutions Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Our Custom Software Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Purpose-built software applications that integrate seamlessly with your operations, 
              providing capabilities that generic solutions simply cannot match.
            </p>
          </div>

          <Accordion type="single" collapsible className="max-w-6xl mx-auto">
            {softwareSolutions.map((solution, index) => (
              <AccordionItem key={index} value={`software-${index}`} className="border border-gray-200 rounded-lg mb-4 bg-white">
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  <div className="text-left flex items-center">
                    <Monitor className="h-6 w-6 text-blue-600 mr-4" />
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">{solution.title}</h3>
                      <p className="text-gray-600 mt-1">{solution.description}</p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                      <ul className="space-y-2">
                        {solution.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start">
                            <CheckCircle className="h-4 w-4 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700 text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">Proven Results:</h4>
                      <p className="text-gray-700 text-sm">{solution.benefits}</p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Hardware Solutions Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Our Custom Hardware Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Engineered hardware components and systems designed specifically for cannabis operations, 
              delivering precision, reliability, and integration capabilities beyond standard equipment.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {hardwareSolutions.map((solution, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center mb-4">
                    <Cpu className="h-8 w-8 text-orange-600 mr-4" />
                    <div>
                      <CardTitle className="text-xl text-gray-900">
                        {solution.title}
                      </CardTitle>
                      <CardDescription className="text-gray-600">
                        {solution.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Technical Capabilities:</h4>
                      <ul className="space-y-2">
                        {solution.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start">
                            <Cog className="h-4 w-4 text-orange-500 mr-3 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700 text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-orange-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">Applications:</h4>
                      <p className="text-gray-700 text-sm">{solution.applications}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Development Process Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Our Collaborative Technology Development Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From initial consultation to ongoing support, our proven development methodology 
              ensures your custom technology solutions deliver exceptional results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {developmentSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="flex flex-col items-center">
                    <span className="text-sm font-bold text-blue-600 mb-1">{step.step}</span>
                    {step.icon}
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Technology in Action: Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real-world examples of how our custom technology solutions have transformed 
              cannabis operations and delivered measurable business outcomes.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <Card key={index} className="bg-gradient-to-br from-white to-gray-50 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-lg text-gray-900 mb-2">
                    {study.title}
                  </CardTitle>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {study.technologies.map((tech, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-red-600 mb-2">Challenge:</h4>
                    <p className="text-gray-700 text-sm">{study.challenge}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-600 mb-2">Solution:</h4>
                    <p className="text-gray-700 text-sm">{study.solution}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-600 mb-2">Outcome:</h4>
                    <p className="text-gray-700 text-sm">{study.outcome}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Transform Your Operations with Custom Technology?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Let's discuss your specific challenges and explore how our custom hardware and software 
            solutions can deliver the competitive advantages your business needs.
          </p>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 px-8 py-4 text-lg">
            Discuss Your Custom Tech Needs
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CustomTechnology;
