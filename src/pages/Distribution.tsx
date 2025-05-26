import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Truck, Globe, Shield, Clock, CheckCircle, MapPin, Package, Plane } from 'lucide-react';

const Distribution = () => {
  const distributionNetwork = [
    {
      title: "Strategic Distribution Hubs",
      description: "Optimized locations for efficient regional and international distribution",
      icon: MapPin
    },
    {
      title: "Temperature-Controlled Logistics",
      description: "Ensuring product integrity with advanced temperature monitoring and control",
      icon: Clock
    },
    {
      title: "Secure Transportation",
      description: "Stringent security protocols and real-time tracking for safe and reliable delivery",
      icon: Shield
    }
  ];

  const logisticsExcellence = [
    {
      title: "Advanced Tracking Systems",
      description: "Real-time monitoring of shipments from origin to destination",
      icon: Globe
    },
    {
      title: "Customs and Regulatory Compliance",
      description: "Expert handling of international customs and regulatory requirements",
      icon: Shield
    },
    {
      title: "Efficient Route Optimization",
      description: "Optimized delivery routes for faster transit times and reduced costs",
      icon: Truck
    }
  ];

  const serviceFeatures = [
    {
      title: "Global Distribution Network",
      description: "Extensive network covering key international markets",
      icon: Globe
    },
    {
      title: "Secure and Compliant Transportation",
      description: "Stringent security measures and full regulatory compliance",
      icon: Shield
    },
    {
      title: "Temperature-Controlled Shipping",
      description: "Advanced temperature monitoring and control during transit",
      icon: Clock
    },
    {
      title: "Real-Time Tracking",
      description: "End-to-end visibility with real-time tracking and monitoring",
      icon: Truck
    },
    {
      title: "Customs Clearance Expertise",
      description: "Expert handling of international customs and regulatory requirements",
      icon: Package
    },
    {
      title: "Express Delivery Options",
      description: "Fast and reliable express delivery services",
      icon: Plane
    }
  ];

  const globalReachPoints = [
    "North America",
    "Europe",
    "Asia-Pacific",
    "Latin America",
    "Australia",
    "Africa"
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-cyan-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Global Distribution Solutions
            </h1>
            <p className="text-2xl text-blue-700 mb-8">
              for Medical Cannabis
            </p>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              MediFlower NZ offers comprehensive distribution services, ensuring safe, secure, and compliant 
              delivery of medical cannabis products to global markets. Our expertise in international 
              logistics and regulatory compliance guarantees seamless distribution for our partners.
            </p>
          </div>
        </div>
      </section>

      {/* Distribution Network */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Our Strategic Distribution Network
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Leverage our strategically located distribution hubs and advanced logistics infrastructure 
              for efficient and reliable global distribution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {distributionNetwork.map((item, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <item.icon className="h-10 w-10 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Logistics Excellence */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-blue-100 text-blue-800">Logistics Excellence</Badge>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Ensuring Seamless Logistics
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Our logistics excellence ensures the safe, secure, and timely delivery of your medical 
                cannabis products to destinations worldwide. We handle every detail with precision 
                and care, from initial pickup to final delivery.
              </p>
              <ul className="space-y-4">
                {logisticsExcellence.map((item, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-3" />
                    <span className="text-gray-700">{item.title}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-xl">
              <Truck className="h-16 w-16 text-blue-600 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Advanced Logistics Solutions</h3>
              <p className="text-gray-700">
                We leverage cutting-edge technology and industry best practices to optimize our logistics 
                operations, ensuring efficiency, reliability, and full regulatory compliance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Key Service Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive distribution services are designed to meet the unique needs of the medical 
              cannabis industry, ensuring compliance, security, and efficiency.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceFeatures.map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center mb-3">
                    <item.icon className="h-8 w-8 text-blue-600 mr-3" />
                    <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
                  </div>
                  <p className="text-gray-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Global Reach */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Extending Your Reach Globally
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              We provide distribution services to key markets worldwide, ensuring your products reach 
              patients in need across the globe.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {globalReachPoints.map((region, index) => (
              <div key={index} className="flex items-center justify-center">
                <Globe className="h-6 w-6 text-white mr-2" />
                <span className="text-white">{region}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Partner with a Global Distributor?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Contact us to learn more about our distribution services and how we can help you expand 
            your reach in the medical cannabis market.
          </p>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
            Explore Partnership Opportunities
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Distribution;
