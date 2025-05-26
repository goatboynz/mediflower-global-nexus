
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Services = () => {
  const services = [
    {
      title: "Strategic Consulting",
      description: "Expert guidance for cannabis businesses entering new markets, regulatory compliance, and operational optimization.",
      features: ["Market Entry Strategy", "Regulatory Compliance", "Operational Excellence", "Risk Management"],
      icon: "🎯"
    },
    {
      title: "Custom Technology Solutions",
      description: "Proprietary software and hardware development for cultivation, processing, and distribution operations.",
      features: ["Cultivation Management Systems", "Quality Control Software", "Supply Chain Solutions", "IoT Hardware Integration"],
      icon: "⚙️"
    },
    {
      title: "Premium Cultivation Services",
      description: "High-quality medical cannabis cultivation using advanced techniques and sustainable practices.",
      features: ["GMP-Standard Facilities", "Genetic Development", "Quality Assurance", "Sustainable Practices"],
      icon: "🌱"
    },
    {
      title: "Global Distribution Network",
      description: "Comprehensive distribution solutions connecting New Zealand quality with international markets.",
      features: ["International Logistics", "Quality Certification", "Cold Chain Management", "Regulatory Documentation"],
      icon: "🌍"
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Comprehensive B2B Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From strategic consulting to cutting-edge technology and premium cultivation, 
            we provide end-to-end solutions for the global medical cannabis industry.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-gradient-to-br from-white to-gray-50">
              <CardHeader className="pb-4">
                <div className="text-4xl mb-4">{service.icon}</div>
                <CardTitle className="text-2xl text-gray-900 group-hover:text-emerald-600 transition-colors">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-gray-600 text-lg">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button variant="outline" className="w-full border-emerald-600 text-emerald-600 hover:bg-emerald-50">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 px-8 py-4">
            Schedule a Consultation
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
