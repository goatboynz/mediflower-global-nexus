
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const PartnerCTA = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-emerald-600 to-emerald-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 bg-white rounded-full"></div>
        <div className="absolute bottom-32 right-16 w-20 h-20 bg-white rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white rounded-full"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Card className="border-0 shadow-2xl bg-white/95 backdrop-blur-sm overflow-hidden">
          <CardContent className="p-16">
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 bg-emerald-100 text-emerald-800 rounded-full text-sm font-medium mb-8">
                <span className="w-2 h-2 bg-emerald-500 rounded-full mr-2 animate-pulse"></span>
                Ready to Partner?
              </div>
              
              <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-8 leading-tight">
                Partner with MediFlower NZ
              </h2>
              <p className="text-xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
                Ready to explore innovative cannabis solutions or discuss partnership opportunities? 
                Connect with our expert team today and discover how we can help transform your business.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
                <Link to="/contact-partnerships">
                  <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 px-12 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300">
                    Get In Touch
                  </Button>
                </Link>
                <Link to="/contact-partnerships">
                  <Button size="lg" variant="outline" className="border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-50 px-12 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                    Schedule Consultation
                  </Button>
                </Link>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-2xl p-8 border border-emerald-100">
                  <div className="text-4xl mb-4">🌱</div>
                  <div className="font-bold text-xl text-gray-900 mb-2">Premium Products</div>
                  <div className="text-gray-600">Export-quality cultivation and manufacturing</div>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100">
                  <div className="text-4xl mb-4">🔬</div>
                  <div className="font-bold text-xl text-gray-900 mb-2">Expert Solutions</div>
                  <div className="text-gray-600">Comprehensive consulting and R&D</div>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-2xl p-8 border border-purple-100">
                  <div className="text-4xl mb-4">🌍</div>
                  <div className="font-bold text-xl text-gray-900 mb-2">Global Reach</div>
                  <div className="text-gray-600">International distribution network</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default PartnerCTA;
