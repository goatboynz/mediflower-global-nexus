
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const TechnologySolutions = () => {
  const solutions = [
    {
      title: "Cultivation Management Platform",
      description: "Advanced IoT-enabled system for monitoring and optimizing growing conditions",
      features: ["Real-time environmental monitoring", "Automated nutrient delivery", "Predictive analytics", "Compliance reporting"],
      tech: ["IoT Sensors", "Machine Learning", "Cloud Analytics", "Mobile Apps"]
    },
    {
      title: "Quality Control Suite",
      description: "Comprehensive testing and quality assurance software with lab integration",
      features: ["Automated testing workflows", "Certificate generation", "Batch tracking", "Regulatory compliance"],
      tech: ["Laboratory LIMS", "Blockchain", "API Integration", "QR Tracking"]
    },
    {
      title: "Supply Chain Intelligence",
      description: "End-to-end visibility and optimization for complex cannabis supply chains",
      features: ["Inventory optimization", "Demand forecasting", "Logistics planning", "Cost analysis"],
      tech: ["AI/ML", "Predictive Models", "ERP Integration", "Business Intelligence"]
    }
  ];

  return (
    <section id="solutions" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Cutting-Edge Technology Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our proprietary technology stack combines IoT, AI, and blockchain to deliver 
            unparalleled efficiency and compliance for cannabis operations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {solutions.map((solution, index) => (
            <Card key={index} className="bg-white shadow-lg border-0 hover:shadow-xl transition-all duration-300">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl text-gray-900">
                  {solution.title}
                </CardTitle>
                <CardDescription className="text-gray-600">
                  {solution.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {solution.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-700 text-sm">
                        <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {solution.tech.map((tech, idx) => (
                      <span key={idx} className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Custom Development Services
              </h3>
              <p className="text-gray-600 mb-6">
                Our experienced development team creates bespoke solutions tailored to your specific 
                operational needs and regulatory requirements. From concept to deployment, we ensure 
                your technology investment delivers measurable ROI.
              </p>
              <ul className="space-y-3 mb-6">
                {["Rapid prototyping and MVP development", "Scalable cloud architecture", "Regulatory compliance integration", "24/7 technical support"].map((item, idx) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></div>
                    {item}
                  </li>
                ))}
              </ul>
              <Button className="bg-emerald-600 hover:bg-emerald-700">
                Discuss Your Project
              </Button>
            </div>
            <div className="bg-gradient-to-br from-emerald-100 to-blue-100 rounded-xl p-8">
              <div className="text-center">
                <div className="text-4xl mb-4">🚀</div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">Ready to Innovate?</h4>
                <p className="text-gray-600 mb-4">
                  Join leading cannabis companies leveraging our technology for competitive advantage.
                </p>
                <Button variant="outline" className="border-emerald-600 text-emerald-600">
                  View Case Studies
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologySolutions;
