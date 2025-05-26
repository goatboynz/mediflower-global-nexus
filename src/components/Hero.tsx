
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const backgroundPattern = "data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23059669' fill-opacity='0.05'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/svg%3E";

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-50 via-blue-50 to-slate-50">
      <div 
        className="absolute inset-0 opacity-30" 
        style={{ backgroundImage: `url("${backgroundPattern}")` }}
      ></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Leading Medical Cannabis
            <span className="text-emerald-600"> Innovation</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
            Christchurch-based B2B consulting, custom technology solutions, and premium medical cannabis 
            cultivation for international partners and distributors.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 px-8 py-4 text-lg">
              Explore Partnership Opportunities
            </Button>
            <Button size="lg" variant="outline" className="border-slate-300 text-slate-700 hover:bg-slate-50 px-8 py-4 text-lg">
              View Technology Solutions
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg border border-white/20">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Expert Consulting</h3>
              <p className="text-gray-600">Strategic guidance for cannabis businesses worldwide</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg border border-white/20">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Custom Technology</h3>
              <p className="text-gray-600">Proprietary software and hardware solutions</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg border border-white/20">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Premium Cultivation</h3>
              <p className="text-gray-600">High-quality medical cannabis production</p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <ArrowDown className="h-6 w-6 text-gray-400 animate-bounce" />
      </div>
    </section>
  );
};

export default Hero;
