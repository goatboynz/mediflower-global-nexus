
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const backgroundPattern = "data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23059669' fill-opacity='0.05'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/svg%3E";

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-50 via-blue-50 to-slate-50">
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 opacity-30" 
        style={{ backgroundImage: `url("${backgroundPattern}")` }}
      ></div>
      
      {/* Split Visual Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
          <div className="bg-gradient-to-br from-emerald-100 to-green-200 flex items-center justify-center">
            <div className="text-6xl opacity-30">🌱</div>
          </div>
          <div className="bg-gradient-to-br from-blue-100 to-slate-200 flex items-center justify-center">
            <div className="text-6xl opacity-30">⚗️</div>
          </div>
        </div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Beyond Premium Cultivation:
            <span className="text-emerald-600 block mt-2">
              Integrated Cannabis Solutions
            </span>
            <span className="text-slate-700 text-3xl md:text-4xl lg:text-5xl block mt-4">
              from Seed to Global Market
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-10 leading-relaxed max-w-4xl mx-auto">
            Pioneering sustainable cultivation, expert consulting, custom technology, and global 
            distribution for a healthier, progressive tomorrow.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 px-10 py-4 text-lg font-semibold">
              Explore Our Solutions
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-slate-400 text-slate-700 hover:bg-slate-50 px-10 py-4 text-lg font-semibold">
              Contact Us
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <ArrowDown className="h-6 w-6 text-gray-400 animate-bounce" />
      </div>
    </section>
  );
};

export default Hero;
