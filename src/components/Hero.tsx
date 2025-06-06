
import { Button } from '@/components/ui/button';
import { ArrowDown, ArrowRight, Leaf, Users, Globe, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const backgroundPattern = "data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23059669' fill-opacity='0.03'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/svg%3E";

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-50 via-blue-50 to-slate-50 overflow-hidden">
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 opacity-30" 
        style={{ backgroundImage: `url("${backgroundPattern}")` }}
      ></div>
      
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-emerald-100 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-20 h-20 bg-blue-100 rounded-full opacity-30 animate-pulse delay-1000"></div>
        <div className="absolute bottom-32 left-1/4 w-16 h-16 bg-emerald-200 rounded-full opacity-25 animate-pulse delay-2000"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <div className="max-w-5xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-6 py-3 bg-emerald-100 text-emerald-800 rounded-full text-sm font-medium mb-8 shadow-lg">
            <Leaf className="w-4 h-4 mr-2" />
            Leading Medical Cannabis Innovation from New Zealand
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-gray-900 mb-8 leading-tight">
            MediFlower NZ
            <span className="text-emerald-600 block mt-4 bg-gradient-to-r from-emerald-600 to-emerald-500 bg-clip-text text-transparent">
              Medical Cannabis
            </span>
            <span className="text-slate-700 text-3xl md:text-5xl lg:text-6xl block mt-6 font-semibold">
              Solutions for Global Markets
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed max-w-4xl mx-auto">
            From our Christchurch facility, we deliver <span className="font-semibold text-emerald-600">premium cultivation</span>, 
            <span className="font-semibold text-blue-600"> expert consulting</span>, 
            <span className="font-semibold text-purple-600"> custom technology</span>, and 
            <span className="font-semibold text-teal-600"> global distribution</span> solutions.
          </p>
          
          {/* Main CTAs */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Link to="/about">
              <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 px-12 py-4 text-xl font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 group">
                Discover Our Story
                <ArrowRight className="ml-2 h-6 w-6 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/contact-partnerships">
              <Button size="lg" variant="outline" className="border-2 border-slate-400 text-slate-700 hover:bg-slate-50 hover:border-slate-500 px-12 py-4 text-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                Partner With Us
              </Button>
            </Link>
          </div>

          {/* Quick Navigation Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto mb-12">
            <Link to="/premium-cultivation" className="group">
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-emerald-100 hover:shadow-xl transition-all duration-300 hover:scale-105">
                <Leaf className="h-8 w-8 text-emerald-600 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <div className="text-lg font-bold text-gray-900 mb-2">Cultivation</div>
                <div className="text-gray-600 text-sm">Premium growing solutions</div>
              </div>
            </Link>
            
            <Link to="/expert-consulting" className="group">
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-blue-100 hover:shadow-xl transition-all duration-300 hover:scale-105">
                <Users className="h-8 w-8 text-blue-600 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <div className="text-lg font-bold text-gray-900 mb-2">Consulting</div>
                <div className="text-gray-600 text-sm">Expert guidance & strategy</div>
              </div>
            </Link>
            
            <Link to="/custom-technology" className="group">
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-purple-100 hover:shadow-xl transition-all duration-300 hover:scale-105">
                <Award className="h-8 w-8 text-purple-600 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <div className="text-lg font-bold text-gray-900 mb-2">Technology</div>
                <div className="text-gray-600 text-sm">Custom tech solutions</div>
              </div>
            </Link>
            
            <Link to="/distribution" className="group">
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-teal-100 hover:shadow-xl transition-all duration-300 hover:scale-105">
                <Globe className="h-8 w-8 text-teal-600 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <div className="text-lg font-bold text-gray-900 mb-2">Distribution</div>
                <div className="text-gray-600 text-sm">Global market access</div>
              </div>
            </Link>
          </div>
          
          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-emerald-100">
              <div className="text-3xl font-bold text-emerald-600 mb-2">GMP</div>
              <div className="text-gray-600">Certified Facility</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-blue-100">
              <div className="text-3xl font-bold text-blue-600 mb-2">15+</div>
              <div className="text-gray-600">Countries Served</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-purple-100">
              <div className="text-3xl font-bold text-purple-600 mb-2">2024</div>
              <div className="text-gray-600">Founded</div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <ArrowDown className="h-6 w-6 text-gray-400" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
