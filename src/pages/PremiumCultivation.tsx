
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Leaf, Settings, Globe, Award, Shield } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const PremiumCultivation = () => {
  const geneticsFeatures = [
    {
      title: "Medicinal Strain Selection",
      description: "Carefully curated genetics focused on specific cannabinoid profiles for therapeutic applications",
      icon: Leaf
    },
    {
      title: "Quality Breeding Programs",
      description: "Strategic partnerships with leading genetics providers to ensure premium, stable cultivars",
      icon: Award
    },
    {
      title: "Genetic Stability",
      description: "Rigorous testing and selection processes to maintain consistent plant characteristics",
      icon: Shield
    }
  ];

  const cultivationPractices = [
    {
      title: "Controlled Environment Agriculture (CEA)",
      description: "State-of-the-art indoor facilities with precise environmental controls for optimal growing conditions"
    },
    {
      title: "Advanced LED Lighting Systems",
      description: "Full-spectrum LED technology optimized for each growth stage to maximize cannabinoid and terpene production"
    },
    {
      title: "Automated Climate Control",
      description: "Precision temperature, humidity, and CO2 management systems ensuring consistent environmental conditions"
    },
    {
      title: "Sustainable Growing Practices",
      description: "Environmentally responsible cultivation methods including water recycling and energy-efficient systems"
    },
    {
      title: "Hydroponic Systems",
      description: "Soilless cultivation using nutrient-rich solutions for enhanced plant health and yield consistency"
    },
    {
      title: "Integrated Pest Management",
      description: "Biological and preventative pest control methods ensuring clean, residue-free final products"
    }
  ];

  const qualityControlSteps = [
    {
      phase: "Seed Selection",
      controls: "Genetic verification, viability testing, and pathogen screening"
    },
    {
      phase: "Vegetative Growth",
      controls: "Plant health monitoring, nutrient analysis, and environmental compliance"
    },
    {
      phase: "Flowering Stage",
      controls: "Cannabinoid development tracking, trichome density assessment, and contamination prevention"
    },
    {
      phase: "Harvest & Curing",
      controls: "Optimal harvest timing, controlled drying conditions, and final product testing"
    }
  ];

  const exportAttributes = [
    {
      attribute: "Consistent Cannabinoid Profiles",
      description: "Standardized THC, CBD, and minor cannabinoid ratios meeting international pharmaceutical standards"
    },
    {
      attribute: "Low Microbial Counts",
      description: "Strict contamination control ensuring products meet the most stringent international safety requirements"
    },
    {
      attribute: "Scalable Production",
      description: "Proven processes capable of meeting large-scale international demand while maintaining quality"
    },
    {
      attribute: "Complete Documentation",
      description: "Comprehensive chain of custody and compliance documentation for seamless international trade"
    },
    {
      attribute: "Regulatory Compliance",
      description: "Products cultivated to meet diverse international regulatory frameworks and quality standards"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 to-green-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Excellence in Cultivation:
              <span className="text-emerald-600 block mt-2">Premium Medical Cannabis for Global Markets</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              MediFlower NZ sets the international standard for premium medical cannabis cultivation. 
              Our expert cultivation practices combine advanced environmental controls, premium genetics, 
              and strict quality protocols to produce export-quality medical cannabis that meets the 
              highest international standards.
            </p>
          </div>
        </div>
      </section>

      {/* Our Genetics Program */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Genetics Program</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Premium genetics are the foundation of exceptional medical cannabis. Our comprehensive 
              genetics program ensures we cultivate only the finest medicinal strains with proven therapeutic profiles.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {geneticsFeatures.map((feature, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <feature.icon className="h-16 w-16 text-emerald-600 mx-auto mb-6" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 bg-emerald-50 rounded-lg p-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Strategic Genetics Partnerships</h3>
            <p className="text-gray-700 leading-relaxed">
              We maintain strategic partnerships with leading international genetics providers to access 
              premium cultivars specifically selected for their medicinal properties. Our selection criteria 
              prioritize genetic stability, therapeutic efficacy, and cultivation consistency, ensuring 
              every strain in our program meets the exacting standards required for international export.
            </p>
          </div>
        </div>
      </section>

      {/* Advanced Cultivation Practices */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Advanced Cultivation Practices</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our state-of-the-art cultivation facility employs cutting-edge Controlled Environment Agriculture 
              techniques to ensure optimal growing conditions and consistent, premium-quality results.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {cultivationPractices.map((practice, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{practice.title}</h3>
                  <p className="text-gray-600">{practice.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Precision Environmental Control</h3>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Every aspect of our growing environment is precisely controlled and monitored 24/7. 
                Our advanced systems maintain optimal temperature, humidity, CO2 levels, and light 
                spectrum throughout each growth phase, ensuring maximum cannabinoid and terpene production.
              </p>
              <div className="space-y-4">
                {[
                  "Temperature: ±0.5°C precision control",
                  "Humidity: Automated VPD optimization", 
                  "CO2: Dynamic enrichment systems",
                  "Light: Full-spectrum LED with photoperiod control"
                ].map((spec, idx) => (
                  <div key={idx} className="flex items-center">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></div>
                    <span className="text-gray-700">{spec}</span>
                  </div>
                ))}
              </div>
            </div>
            <Card className="border-0 shadow-2xl">
              <CardContent className="p-0">
                <div className="aspect-video bg-gradient-to-br from-green-100 to-emerald-100 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <Settings className="h-20 w-20 text-emerald-600 mx-auto mb-4" />
                    <p className="text-xl font-semibold text-gray-700">Advanced CEA Systems</p>
                    <p className="text-gray-600">Precision cultivation technology</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Quality Control */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Quality Control from Seed to Harvest</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive quality control protocols ensure every step of the cultivation process 
              meets the highest standards, aligned with Good Agricultural and Collection Practices (GACP).
            </p>
          </div>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-emerald-200"></div>
            <div className="space-y-12">
              {qualityControlSteps.map((step, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                    <Card className="border-0 shadow-lg">
                      <CardContent className="p-6">
                        <div className="text-xl font-bold text-emerald-600 mb-2">{step.phase}</div>
                        <p className="text-gray-700">{step.controls}</p>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="relative z-10">
                    <div className="w-4 h-4 bg-emerald-600 rounded-full border-4 border-white shadow-lg"></div>
                  </div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 bg-blue-50 rounded-lg p-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">GACP Alignment</h3>
            <p className="text-gray-700 leading-relaxed">
              Our cultivation protocols are designed to align with Good Agricultural and Collection Practices (GACP), 
              ensuring our medical cannabis meets international pharmaceutical standards. This includes rigorous 
              documentation, traceability systems, and quality assurance measures throughout the entire cultivation cycle.
            </p>
          </div>
        </div>
      </section>

      {/* Export Quality Focus */}
      <section className="py-20 bg-gradient-to-br from-emerald-600 to-emerald-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-0 shadow-2xl bg-white/95 backdrop-blur-sm">
            <CardContent className="p-12">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">
                  Cultivated for International Export Standards
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Every aspect of our cultivation process is designed to meet and exceed international 
                  export requirements, ensuring our medical cannabis products are ready for global markets.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {exportAttributes.map((attr, index) => (
                  <div key={index} className="text-center">
                    <div className="bg-emerald-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                      <Globe className="h-8 w-8 text-emerald-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{attr.attribute}</h3>
                    <p className="text-gray-600 text-sm">{attr.description}</p>
                  </div>
                ))}
              </div>
              
              <div className="mt-12 text-center">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Export-Ready Excellence</h3>
                <p className="text-gray-600 mb-8 max-w-4xl mx-auto">
                  Our cultivation facility is designed specifically for international export, with every process 
                  optimized to produce medical cannabis that meets the diverse regulatory requirements of global 
                  markets while maintaining the premium quality that defines the MediFlower NZ brand.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Ready to Partner with Premium Cultivation Excellence?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Discover how our world-class cultivation services can meet your medical cannabis needs. 
            Connect with our cultivation experts to discuss your requirements and explore partnership opportunities.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 px-8 py-4">
              Inquire About Our Cultivation Services
            </Button>
            <Button size="lg" variant="outline" className="border-emerald-600 text-emerald-600 hover:bg-emerald-50 px-8 py-4">
              Request a Cultivation Consultation
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PremiumCultivation;
