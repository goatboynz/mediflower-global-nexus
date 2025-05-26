
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const PartnerCTA = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-emerald-600 to-emerald-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="border-0 shadow-2xl bg-white/95 backdrop-blur-sm">
          <CardContent className="p-12 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Partner with MediFlower NZ
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Ready to explore innovative cannabis solutions or discuss partnership opportunities? 
              Connect with our expert team today and discover how we can help transform your business.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
              <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 px-10 py-4 text-lg">
                Get In Touch
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-50 px-10 py-4 text-lg">
                Schedule Consultation
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 text-center">
              <div>
                <div className="text-3xl mb-2">🌱</div>
                <div className="font-semibold text-gray-900">Premium Products</div>
                <div className="text-gray-600 text-sm">Export-quality cultivation</div>
              </div>
              <div>
                <div className="text-3xl mb-2">🔬</div>
                <div className="font-semibold text-gray-900">Expert Solutions</div>
                <div className="text-gray-600 text-sm">Comprehensive consulting</div>
              </div>
              <div>
                <div className="text-3xl mb-2">🌍</div>
                <div className="font-semibold text-gray-900">Global Reach</div>
                <div className="text-gray-600 text-sm">International distribution</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default PartnerCTA;
