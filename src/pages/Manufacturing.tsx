
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Factory, Shield, FlaskConical, Award, Beaker } from 'lucide-react';

const Manufacturing = () => {
  const capabilities = [
    {
      title: "CO2 Extraction",
      description: "Supercritical CO2 extraction for pure, solvent-free cannabis extracts",
      icon: <Beaker className="h-8 w-8 text-emerald-600" />
    },
    {
      title: "Ethanol Extraction",
      description: "Food-grade ethanol extraction for high-volume production",
      icon: <FlaskConical className="h-8 w-8 text-emerald-600" />
    },
    {
      title: "Purification & Refinement",
      description: "Advanced purification processes for pharmaceutical-grade products",
      icon: <Shield className="h-8 w-8 text-emerald-600" />
    },
    {
      title: "Formulation & Production",
      description: "Custom formulation of oils, tinctures, and standardized products",
      icon: <Factory className="h-8 w-8 text-emerald-600" />
    }
  ];

  const productCategories = [
    {
      category: "Premium Dried Flower",
      description: "Multiple grades of dried cannabis flower for various therapeutic applications",
      features: ["Pharmaceutical grade", "Consistent cannabinoid profiles", "Low microbial counts", "Export ready"]
    },
    {
      category: "Cannabis APIs & Extracts",
      description: "Pure cannabinoid active pharmaceutical ingredients for manufacturers",
      features: ["99%+ purity", "Full spectrum options", "Standardized potency", "Bulk quantities"]
    },
    {
      category: "Medical Cannabis Oils",
      description: "Standardized oil formulations for consistent therapeutic outcomes",
      features: ["Precise dosing", "Stable formulations", "Multiple strengths", "White-label options"]
    },
    {
      category: "Custom Formulations",
      description: "Bespoke product development for specific therapeutic requirements",
      features: ["Tailored cannabinoid ratios", "Custom delivery methods", "Regulatory support", "Scale-up capabilities"]
    }
  ];

  const qualityStandards = [
    "Potency analysis (HPLC)",
    "Microbial testing",
    "Pesticide screening",
    "Heavy metals analysis",
    "Residual solvents testing",
    "Stability studies",
    "Mycotoxin detection",
    "Water activity testing"
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-50 to-teal-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Precision Manufacturing
            </h1>
            <p className="text-2xl text-emerald-700 mb-8">
              High-Quality Medical Cannabis Products
            </p>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              MediFlower NZ's manufacturing capabilities deliver a comprehensive range of medical cannabis products 
              for B2B markets, adhering to the highest quality and regulatory standards for both domestic supply and international export.
            </p>
          </div>
        </div>
      </section>

      {/* Manufacturing Capabilities */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Our Advanced Manufacturing Processes
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              State-of-the-art extraction, purification, and formulation capabilities designed 
              for pharmaceutical-grade medical cannabis products.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {capabilities.map((capability, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    {capability.icon}
                  </div>
                  <CardTitle className="text-xl">{capability.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{capability.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* GMP Compliance */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-emerald-100 text-emerald-800">GMP Certified</Badge>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Commitment to Good Manufacturing Practice (GMP)
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                All MediFlower NZ manufacturing operations adhere to strict Good Manufacturing Practice (GMP) standards, 
                essential for domestic pharmaceutical supply and international export compliance. Our GMP certification 
                covers every stage from raw material processing through final product packaging and distribution.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-emerald-600 mr-3" />
                  <span className="text-gray-700">GMP-certified extraction facilities</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-emerald-600 mr-3" />
                  <span className="text-gray-700">Pharmaceutical-grade processing equipment</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-emerald-600 mr-3" />
                  <span className="text-gray-700">Validated manufacturing processes</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-emerald-600 mr-3" />
                  <span className="text-gray-700">Comprehensive quality management system</span>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-xl">
              <div className="flex items-center mb-6">
                <Award className="h-12 w-12 text-emerald-600 mr-4" />
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">GMP Certification</h3>
                  <p className="text-gray-600">Pharmaceutical Manufacturing Standards</p>
                </div>
              </div>
              <p className="text-gray-700">
                Our facilities maintain continuous GMP compliance through regular audits, 
                ongoing training programs, and adherence to international pharmaceutical manufacturing standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Product Categories for Our Partners
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive product portfolio available for wholesale, contract manufacturing, 
              and international export partnerships.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {productCategories.map((product, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-2xl text-emerald-700">{product.category}</CardTitle>
                  <CardDescription className="text-lg">{product.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {product.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-emerald-600 mr-3" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quality & Testing */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Uncompromising Product Quality & Testing
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Rigorous testing protocols ensure every product meets NZMQS requirements 
              and international compliance standards for safety, potency, and purity.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Comprehensive Testing Protocol</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {qualityStandards.map((standard, index) => (
                  <div key={index} className="flex items-center bg-white p-4 rounded-lg shadow-sm">
                    <CheckCircle className="h-5 w-5 text-emerald-600 mr-3" />
                    <span className="text-gray-700">{standard}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Quality Assurance</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900">NZMQS Compliance</h4>
                  <p className="text-gray-600">Full adherence to New Zealand Medicinal Cannabis Quality Standards</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">International Standards</h4>
                  <p className="text-gray-600">Meeting EU-GMP, TGA, and other international regulatory requirements</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Stability Testing</h4>
                  <p className="text-gray-600">Long-term stability studies ensuring consistent product quality</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-emerald-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Partner with Us?
          </h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-3xl mx-auto">
            Explore manufacturing partnerships and discover our comprehensive product portfolio 
            for your medical cannabis business needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="outline" className="bg-white text-emerald-600 hover:bg-emerald-50">
              Explore Manufacturing Partnerships
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-emerald-600">
              Enquire About Our Products
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Manufacturing;
