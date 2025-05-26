
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      title: "Premium Cultivation",
      description: "Expert cultivation of export-quality medical cannabis using advanced techniques and premium genetics.",
      features: ["GMP-Standard Facilities", "Genetic Development", "Quality Assurance", "Sustainable Practices"],
      icon: "🌱",
      link: "/premium-cultivation",
      gradient: "from-green-50 to-emerald-50"
    },
    {
      title: "Expert Consulting", 
      description: "Comprehensive consulting for cannabis businesses worldwide, from facility design to market entry.",
      features: ["Market Entry Strategy", "Regulatory Compliance", "Operational Excellence", "Risk Management"],
      icon: "🤝",
      link: "/expert-consulting",
      gradient: "from-blue-50 to-indigo-50"
    },
    {
      title: "Custom Technology Solutions",
      description: "Proprietary software and hardware development for cultivation, processing, and distribution operations.",
      features: ["Cultivation Management Systems", "Quality Control Software", "Supply Chain Solutions", "IoT Hardware Integration"],
      icon: "⚙️",
      link: "/custom-technology",
      gradient: "from-purple-50 to-violet-50"
    },
    {
      title: "Advanced Manufacturing",
      description: "GMP-compliant manufacturing of high-quality medical cannabis products for diverse market needs.",
      features: ["Product Development", "Quality Control", "Regulatory Compliance", "Scalable Production"],
      icon: "🏭",
      link: "/manufacturing",
      gradient: "from-orange-50 to-amber-50"
    },
    {
      title: "Global Distribution Network",
      description: "Comprehensive distribution solutions connecting New Zealand quality with international markets.",
      features: ["International Logistics", "Quality Certification", "Cold Chain Management", "Regulatory Documentation"],
      icon: "🌍",
      link: "/distribution", 
      gradient: "from-teal-50 to-cyan-50"
    },
    {
      title: "Quality & Compliance",
      description: "Rigorous quality assurance and regulatory compliance services ensuring pharmaceutical-grade standards.",
      features: ["Testing & Analysis", "Compliance Auditing", "Documentation", "Certification Support"],
      icon: "✅",
      link: "/quality-compliance",
      gradient: "from-red-50 to-pink-50"
    },
    {
      title: "Research & Development",
      description: "Cutting-edge research initiatives driving innovation in cultivation techniques and product development.",
      features: ["Novel Cultivation Methods", "Product Innovation", "Genetic Research", "Technology Development"],
      icon: "🔬",
      link: "/research-development",
      gradient: "from-indigo-50 to-purple-50"
    },
    {
      title: "Sustainability Initiatives",
      description: "Environmental stewardship and sustainable practices for responsible cannabis production.",
      features: ["Energy Efficiency", "Water Conservation", "Waste Reduction", "Sustainable Sourcing"],
      icon: "♻️",
      link: "/sustainability-initiatives",
      gradient: "from-emerald-50 to-green-50"
    }
  ];

  return (
    <section id="services" className="py-24 bg-gradient-to-br from-slate-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-emerald-100 text-emerald-800 rounded-full text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></span>
            Comprehensive B2B Solutions
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            End-to-End Cannabis Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From strategic consulting to cutting-edge technology and premium cultivation, 
            we provide comprehensive solutions for the global medical cannabis industry.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg overflow-hidden h-full">
              <CardContent className={`p-0 bg-gradient-to-br ${service.gradient} h-full flex flex-col`}>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-md">
                    <span className="text-2xl">{service.icon}</span>
                  </div>
                  
                  <h3 className="text-lg font-bold text-gray-900 mb-4 group-hover:text-emerald-600 transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed text-sm flex-1">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-700 text-sm">
                        <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Link to={service.link} className="mt-auto">
                    <Button 
                      variant="outline" 
                      className="w-full border-gray-300 hover:border-emerald-500 hover:text-emerald-600 hover:bg-white transition-all duration-300"
                    >
                      Learn More
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link to="/contact-partnerships">
            <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 px-12 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300">
              Schedule a Consultation
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
