
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const About = () => {
  const stats = [
    { number: "50+", label: "International Partners" },
    { number: "15", label: "Countries Served" },
    { number: "99.9%", label: "Quality Standard" },
    { number: "24/7", label: "Support Available" }
  ];

  const values = [
    {
      title: "Innovation",
      description: "Pioneering advanced technologies and methodologies in medical cannabis",
      icon: "💡"
    },
    {
      title: "Quality",
      description: "Uncompromising standards in every aspect of our operations",
      icon: "⭐"
    },
    {
      title: "Sustainability",
      description: "Environmental responsibility in cultivation and manufacturing processes",
      icon: "🌿"
    },
    {
      title: "Compliance",
      description: "Rigorous adherence to international regulations and standards",
      icon: "✅"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            About MediFlower NZ
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Based in Christchurch, New Zealand, we're at the forefront of medical cannabis innovation, 
            delivering world-class consulting, technology, and cultivation services to partners globally.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold text-emerald-600 mb-2">{stat.number}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Leading the Future of Medical Cannabis
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              MediFlower NZ combines New Zealand's pristine growing conditions with cutting-edge 
              technology and decades of industry expertise. Our comprehensive approach spans the 
              entire cannabis value chain, from genetic development to global distribution.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              We work exclusively with B2B partners, providing the strategic guidance, technological 
              infrastructure, and premium products that leading cannabis companies need to succeed 
              in regulated markets worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-emerald-600 hover:bg-emerald-700">
                Partner With Us
              </Button>
              <Button variant="outline" className="border-slate-300 text-slate-700">
                Download Company Profile
              </Button>
            </div>
          </div>
          <div className="bg-gradient-to-br from-emerald-50 to-blue-50 rounded-2xl p-8">
            <h4 className="text-xl font-semibold text-gray-900 mb-6">Our Location Advantage</h4>
            <ul className="space-y-4">
              {[
                "Strategic access to Asia-Pacific markets",
                "World-class regulatory environment",
                "Advanced agricultural infrastructure", 
                "Strong IP protection framework",
                "Skilled workforce and research partnerships"
              ].map((advantage, idx) => (
                <li key={idx} className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></div>
                  {advantage}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div>
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Core Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="border-0 shadow-lg bg-gradient-to-br from-white to-gray-50 hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl mb-4">{value.icon}</div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">{value.title}</h4>
                  <p className="text-gray-600 text-sm">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
