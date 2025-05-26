
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const CoreServicesOverview = () => {
  const services = [
    {
      title: "Premium Cultivation",
      description: "Expert cultivation of export-quality medical cannabis, utilizing advanced techniques and premium genetics.",
      icon: "🌱",
      link: "#cultivation",
      gradient: "from-green-50 to-emerald-50",
      iconBg: "bg-green-100"
    },
    {
      title: "Expert Consulting",
      description: "Comprehensive consulting for cannabis businesses worldwide, from facility design to market entry.",
      icon: "🤝",
      link: "#consulting",
      gradient: "from-blue-50 to-indigo-50",
      iconBg: "bg-blue-100"
    },
    {
      title: "Custom Technology Solutions",
      description: "Tailored hardware and software solutions, including cultivation management and environmental monitoring systems.",
      icon: "⚙️",
      link: "#technology",
      gradient: "from-purple-50 to-violet-50",
      iconBg: "bg-purple-100"
    },
    {
      title: "Advanced Manufacturing",
      description: "GMP-compliant manufacturing of high-quality medical cannabis products for diverse market needs.",
      icon: "🏭",
      link: "#manufacturing",
      gradient: "from-orange-50 to-amber-50",
      iconBg: "bg-orange-100"
    },
    {
      title: "Global Distribution",
      description: "Reliable buying, selling, and distribution of medical cannabis in New Zealand and key international markets.",
      icon: "🌍",
      link: "#distribution",
      gradient: "from-teal-50 to-cyan-50",
      iconBg: "bg-teal-100"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Core Service Pillars
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive solutions spanning the entire cannabis value chain, 
            from cultivation to global market delivery.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg overflow-hidden">
              <CardContent className={`p-0 bg-gradient-to-br ${service.gradient}`}>
                <div className="p-8">
                  <div className={`w-16 h-16 ${service.iconBg} rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <span className="text-2xl">{service.icon}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-emerald-600 transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <Button 
                    variant="outline" 
                    className="w-full border-gray-300 hover:border-emerald-500 hover:text-emerald-600 hover:bg-white"
                  >
                    Learn More
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreServicesOverview;
