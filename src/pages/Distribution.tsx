
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Globe, Truck, Shield, CheckCircle, MapPin, Users } from 'lucide-react';

const Distribution = () => {
  const internationalMarkets = [
    {
      country: "Australia",
      flag: "🇦🇺",
      requirements: [
        "TGA (Therapeutic Goods Administration) compliance",
        "TGO 93 adherence for cannabis medicines",
        "ODC (Office of Drug Control) licensing",
        "EU-GMP certification requirements"
      ],
      description: "Comprehensive export program serving Australian medical cannabis market with full regulatory compliance."
    },
    {
      country: "Germany",
      flag: "🇩🇪",
      requirements: [
        "BfArM (Federal Institute for Drugs) approval",
        "EU-GMP compliance",
        "GACP (Good Agricultural and Collection Practices)",
        "German Narcotics Act adherence"
      ],
      description: "Strategic entry into the European market through Germany's established medical cannabis framework."
    }
  ];

  const logisticsFeatures = [
    {
      title: "Cold Chain Management",
      description: "Temperature-controlled storage and transport maintaining product integrity",
      icon: <Shield className="h-8 w-8 text-blue-600" />
    },
    {
      title: "Secure Transportation",
      description: "Licensed secure transport with real-time tracking and monitoring",
      icon: <Truck className="h-8 w-8 text-blue-600" />
    },
    {
      title: "Regulatory Documentation",
      description: "Complete compliance documentation for domestic and international shipments",
      icon: <CheckCircle className="h-8 w-8 text-blue-600" />
    },
    {
      title: "Quality Assurance",
      description: "Chain of custody protocols ensuring product quality from facility to destination",
      icon: <Globe className="h-8 w-8 text-blue-600" />
    }
  ];

  const partnershipOpportunities = [
    {
      type: "International Distributors",
      description: "Strategic partnerships with established distributors in key medical cannabis markets",
      benefits: ["Market access", "Regulatory expertise", "Local relationships", "Distribution infrastructure"]
    },
    {
      type: "Pharmaceutical Companies",
      description: "B2B partnerships with pharmaceutical companies seeking high-quality cannabis APIs",
      benefits: ["Bulk supply agreements", "Custom formulations", "Regulatory support", "Consistent quality"]
    },
    {
      type: "Licensed Importers",
      description: "Direct relationships with licensed cannabis importers in international markets",
      benefits: ["Streamlined import process", "Compliance assurance", "Volume commitments", "Market intelligence"]
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
              Connecting New Zealand Cannabis to the World
            </h1>
            <p className="text-2xl text-blue-700 mb-8">
              Distribution & Export Expertise
            </p>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              MediFlower NZ provides comprehensive capabilities in buying, selling, and distributing medical cannabis 
              within New Zealand and to key international markets, ensuring compliance and quality at every step.
            </p>
          </div>
        </div>
      </section>

      {/* New Zealand Distribution */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-green-100 text-green-800">Domestic Network</Badge>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Serving the New Zealand Market
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Our comprehensive distribution network serves healthcare providers, pharmacies, and licensed distributors 
                throughout New Zealand, ensuring reliable access to high-quality medical cannabis products while 
                maintaining strict adherence to all local regulations and quality standards.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-green-600 mr-3" />
                  <span className="text-gray-700">Nationwide distribution coverage</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-green-600 mr-3" />
                  <span className="text-gray-700">NZMQS compliance throughout supply chain</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-green-600 mr-3" />
                  <span className="text-gray-700">Real-time inventory management</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-green-600 mr-3" />
                  <span className="text-gray-700">Secure transport and storage</span>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl">
              <div className="flex items-center mb-6">
                <MapPin className="h-12 w-12 text-green-600 mr-4" />
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Distribution Network</h3>
                  <p className="text-gray-600">Comprehensive New Zealand Coverage</p>
                </div>
              </div>
              <p className="text-gray-700 mb-6">
                Our established distribution network ensures reliable delivery of medical cannabis products 
                to healthcare providers and patients across both North and South Islands.
              </p>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="bg-white p-4 rounded-lg">
                  <div className="text-2xl font-bold text-green-600">100%</div>
                  <div className="text-sm text-gray-600">Compliance Rate</div>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <div className="text-2xl font-bold text-green-600">24/7</div>
                  <div className="text-sm text-gray-600">Monitoring</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* International Export Program */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Our Global Export Program
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Extensive experience in exporting high-quality medical cannabis to key international markets, 
              with deep understanding of specific import requirements and quality standards.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {internationalMarkets.map((market, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="flex items-center mb-4">
                    <span className="text-4xl mr-4">{market.flag}</span>
                    <div>
                      <CardTitle className="text-2xl">{market.country}</CardTitle>
                      <CardDescription>Medical Cannabis Export Market</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-6">{market.description}</p>
                  <h4 className="font-semibold text-gray-900 mb-4">Regulatory Compliance:</h4>
                  <div className="space-y-2">
                    {market.requirements.map((req, idx) => (
                      <div key={idx} className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-blue-600 mr-3" />
                        <span className="text-gray-700">{req}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Secure Logistics */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Secure and Compliant Supply Chain Management
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Advanced logistics processes for both domestic and international shipments, 
              ensuring product integrity and regulatory compliance throughout the supply chain.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {logisticsFeatures.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Opportunities */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Distribution Partnership Opportunities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Strategic partnership opportunities for international distributors, importers, 
              and pharmaceutical companies seeking reliable medical cannabis supply.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {partnershipOpportunities.map((opportunity, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center mb-4">
                    <Users className="h-8 w-8 text-blue-600 mr-3" />
                    <CardTitle className="text-xl">{opportunity.type}</CardTitle>
                  </div>
                  <CardDescription className="text-base">{opportunity.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold text-gray-900 mb-4">Partnership Benefits:</h4>
                  <div className="space-y-2">
                    {opportunity.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-blue-600 mr-3" />
                        <span className="text-gray-700">{benefit}</span>
                      </div>
                    ))}
                  </div>
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
            Expand Your Market Reach
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Partner with MediFlower NZ for reliable access to premium New Zealand medical cannabis 
            in your domestic and international markets.
          </p>
          <Button size="lg" variant="outline" className="bg-white text-blue-600 hover:bg-blue-50">
            Discuss Distribution Opportunities
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Distribution;
