
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const AboutIntro = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Leading Innovation in
              <span className="text-emerald-600 block">Medical Cannabis</span>
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Based in Christchurch, New Zealand, MediFlower NZ is revolutionizing the 
              medical cannabis industry through premium cultivation, expert consulting, 
              cutting-edge technology, and seamless global distribution.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our state-of-the-art facility produces export-quality medical cannabis 
              products while our team of experts provides comprehensive solutions for 
              cannabis businesses worldwide.
            </p>
            <Button className="bg-emerald-600 hover:bg-emerald-700 px-8 py-3 text-lg">
              Learn More About Us
            </Button>
          </div>
          
          <div className="relative">
            <Card className="border-0 shadow-2xl bg-gradient-to-br from-white to-gray-50">
              <CardContent className="p-0">
                <div className="aspect-video bg-gradient-to-br from-emerald-100 to-blue-100 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-4">🏢</div>
                    <p className="text-lg font-semibold text-gray-700">
                      MediFlower NZ Facility
                    </p>
                    <p className="text-gray-600">Christchurch, New Zealand</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Floating stats */}
            <div className="absolute -top-6 -right-6 bg-white rounded-lg shadow-lg p-4 border border-emerald-100">
              <div className="text-center">
                <div className="text-2xl font-bold text-emerald-600">GMP</div>
                <div className="text-sm text-gray-600">Certified</div>
              </div>
            </div>
            
            <div className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-lg p-4 border border-blue-100">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">15+</div>
                <div className="text-sm text-gray-600">Countries</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutIntro;
