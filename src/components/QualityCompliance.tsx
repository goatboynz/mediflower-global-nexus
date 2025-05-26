
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const QualityCompliance = () => {
  const standards = [
    { name: "NZMQS", description: "New Zealand Medical Quality Standards" },
    { name: "GMP", description: "Good Manufacturing Practice" },
    { name: "ISO", description: "International Standards Organization" },
    { name: "HACCP", description: "Hazard Analysis Critical Control Points" }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <Card className="border-0 shadow-2xl bg-gradient-to-br from-emerald-50 to-blue-50">
              <CardContent className="p-12">
                <div className="text-center">
                  <div className="w-24 h-24 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-3xl">✅</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Laboratory Excellence
                  </h3>
                  <p className="text-gray-600">
                    State-of-the-art testing and quality assurance facilities
                  </p>
                </div>
              </CardContent>
            </Card>
            
            {/* Floating compliance badges */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {standards.map((standard, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-4 border border-gray-100 text-center">
                  <div className="font-bold text-emerald-600 text-lg">{standard.name}</div>
                  <div className="text-xs text-gray-600 mt-1">{standard.description}</div>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Uncompromising Quality,
              <span className="text-emerald-600 block">Assured Compliance</span>
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              MediFlower NZ is dedicated to maintaining the highest quality standards 
              throughout our operations. Our commitment to NZMQS and GMP compliance 
              ensures the safety, efficacy, and consistency of every product.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              From cultivation to final product delivery, our rigorous quality control 
              processes and state-of-the-art testing facilities guarantee that our 
              medical cannabis meets international pharmaceutical standards.
            </p>
            <Button className="bg-emerald-600 hover:bg-emerald-700 px-8 py-3 text-lg">
              Our Quality Standards
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QualityCompliance;
