
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const AboutIntro = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center px-4 py-2 bg-emerald-100 text-emerald-800 rounded-full text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></span>
              About MediFlower NZ
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
              Leading Innovation in
              <span className="text-emerald-600 block mt-2">Medical Cannabis</span>
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Based in Christchurch, New Zealand, MediFlower NZ is revolutionizing the 
              medical cannabis industry through premium cultivation, expert consulting, 
              cutting-edge technology, and seamless global distribution.
            </p>
            <p className="text-lg text-gray-600 mb-10 leading-relaxed">
              Our state-of-the-art facility produces export-quality medical cannabis 
              products while our team of experts provides comprehensive solutions for 
              cannabis businesses worldwide.
            </p>
            <Link to="/about">
              <Button className="bg-emerald-600 hover:bg-emerald-700 px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                Learn More About Us
              </Button>
            </Link>
          </div>
          
          <div className="relative">
            <Card className="border-0 shadow-2xl bg-gradient-to-br from-white to-gray-50 overflow-hidden">
              <CardContent className="p-0">
                <div className="aspect-video bg-gradient-to-br from-emerald-100 via-blue-100 to-purple-100 flex items-center justify-center relative overflow-hidden">
                  {/* Abstract Background Pattern */}
                  <div className="absolute inset-0 opacity-30">
                    <div className="absolute top-4 left-4 w-16 h-16 bg-emerald-200 rounded-full"></div>
                    <div className="absolute top-8 right-8 w-12 h-12 bg-blue-200 rounded-full"></div>
                    <div className="absolute bottom-6 left-1/3 w-10 h-10 bg-purple-200 rounded-full"></div>
                  </div>
                  
                  <div className="text-center z-10">
                    <div className="text-6xl mb-4">🏢</div>
                    <p className="text-xl font-semibold text-gray-700 mb-2">
                      MediFlower NZ Facility
                    </p>
                    <p className="text-gray-600">Christchurch, New Zealand</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Floating stats */}
            <div className="absolute -top-6 -right-6 bg-white rounded-xl shadow-xl p-6 border border-emerald-100">
              <div className="text-center">
                <div className="text-2xl font-bold text-emerald-600">GMP</div>
                <div className="text-sm text-gray-600">Certified</div>
              </div>
            </div>
            
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-6 border border-blue-100">
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
