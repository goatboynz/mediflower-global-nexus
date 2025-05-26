
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Award, Leaf, Shield, Users, Zap, Handshake } from 'lucide-react';

const About = () => {
  const values = [
    {
      title: "Innovation",
      description: "Pioneering advanced technologies and methodologies in medical cannabis cultivation and processing.",
      icon: Zap
    },
    {
      title: "Quality",
      description: "Uncompromising standards in every aspect of our operations, from seed to final product.",
      icon: Award
    },
    {
      title: "Sustainability",
      description: "Environmental responsibility and sustainable practices throughout our operations.",
      icon: Leaf
    },
    {
      title: "Partnership",
      description: "Building lasting relationships with clients, suppliers, and the global cannabis community.",
      icon: Handshake
    },
    {
      title: "Compliance",
      description: "Rigorous adherence to all regulatory requirements and international standards.",
      icon: Shield
    },
    {
      title: "Integrity",
      description: "Transparent, ethical business practices that build trust and credibility.",
      icon: Users
    }
  ];

  const milestones = [
    { year: "2020", event: "MediFlower NZ founded in Christchurch with vision for premium medical cannabis" },
    { year: "2021", event: "State-of-the-art cultivation facility construction completed" },
    { year: "2022", event: "First harvest of export-quality medical cannabis products" },
    { year: "2023", event: "International partnerships established across 15+ countries" },
    { year: "2024", event: "Advanced technology solutions launched for global cannabis industry" }
  ];

  const leadership = [
    {
      name: "Dr. Sarah Mitchell",
      title: "Chief Executive Officer",
      bio: "15+ years in pharmaceutical development with expertise in regulatory affairs and international market expansion.",
      image: "👩‍💼"
    },
    {
      name: "James Thompson",
      title: "Chief Technology Officer",
      bio: "Former Silicon Valley executive specializing in agricultural technology and IoT solutions for controlled environments.",
      image: "👨‍💻"
    },
    {
      name: "Dr. Michael Chen",
      title: "Head of Cultivation",
      bio: "PhD in Plant Sciences with 20+ years experience in premium cannabis cultivation and genetics research.",
      image: "👨‍🔬"
    },
    {
      name: "Lisa Rodriguez",
      title: "Director of International Business",
      bio: "Former trade commissioner with extensive experience in Asia-Pacific markets and regulatory compliance.",
      image: "👩‍💼"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Leading Cannabis Innovation:
              <span className="text-emerald-600 block mt-2">Our Story, Mission, and Values</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              MediFlower NZ stands at the forefront of medical cannabis innovation, combining New Zealand's 
              pristine growing conditions with cutting-edge technology and decades of industry expertise. 
              Our comprehensive approach spans the entire cannabis value chain, from genetic development 
              and premium cultivation to advanced manufacturing, custom technology solutions, and global distribution.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="border-0 shadow-lg bg-gradient-to-br from-emerald-50 to-white">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  To provide high-quality, innovative medical cannabis solutions that improve lives 
                  through sustainable cultivation practices, expert consulting, cutting-edge technology, 
                  and reliable global distribution. We are committed to advancing the medical cannabis 
                  industry while maintaining the highest standards of safety, efficacy, and compliance.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-50 to-white">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Vision</h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  To be a global leader in sustainable and technologically advanced medical cannabis, 
                  setting industry standards for quality, innovation, and environmental responsibility. 
                  We envision a world where premium medical cannabis solutions are accessible, 
                  trusted, and contributing to better health outcomes worldwide.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600">
              The principles that guide everything we do at MediFlower NZ
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <value.icon className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Journey */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From our founding in Christchurch to becoming a global leader in medical cannabis innovation
            </p>
          </div>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-emerald-200"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                    <Card className="border-0 shadow-lg">
                      <CardContent className="p-6">
                        <div className="text-2xl font-bold text-emerald-600 mb-2">{milestone.year}</div>
                        <p className="text-gray-700">{milestone.event}</p>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="relative z-10">
                    <div className="w-4 h-4 bg-emerald-600 rounded-full border-4 border-white shadow-lg"></div>
                  </div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Leadership Team</h2>
            <p className="text-xl text-gray-600">
              Experienced professionals driving innovation in medical cannabis
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {leadership.map((member, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="text-6xl mb-4">{member.image}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                  <div className="text-emerald-600 font-medium mb-3">{member.title}</div>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Facility */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Our State-of-the-Art Christchurch Facility
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Our world-class facility in Christchurch represents the pinnacle of medical cannabis 
                cultivation and manufacturing technology. Designed with precision environmental controls, 
                advanced security systems, and GMP-compliant processing areas.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  "Climate-controlled cultivation environments",
                  "Advanced LED lighting systems", 
                  "Automated irrigation and nutrient delivery",
                  "GMP-compliant extraction and processing labs",
                  "Quality control and testing laboratories",
                  "Secure packaging and logistics center"
                ].map((feature, idx) => (
                  <div key={idx} className="flex items-center">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></div>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
              <Button className="bg-emerald-600 hover:bg-emerald-700">
                Schedule Facility Tour
              </Button>
            </div>
            <Card className="border-0 shadow-2xl">
              <CardContent className="p-0">
                <div className="aspect-video bg-gradient-to-br from-emerald-100 to-blue-100 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-8xl mb-4">🏢</div>
                    <p className="text-xl font-semibold text-gray-700">
                      MediFlower NZ Facility
                    </p>
                    <p className="text-gray-600">Christchurch, New Zealand</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Commitment to New Zealand */}
      <section className="py-20 bg-gradient-to-br from-emerald-600 to-emerald-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-0 shadow-2xl bg-white/95 backdrop-blur-sm">
            <CardContent className="p-12 text-center">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Our Commitment to New Zealand
              </h2>
              <p className="text-xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
                Proudly New Zealand-owned and operated, MediFlower NZ is committed to contributing 
                to the local economy while showcasing Kiwi innovation on the global stage. We employ 
                local talent, support New Zealand suppliers, and maintain the highest standards that 
                reflect our nation's reputation for quality and integrity.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                <div>
                  <div className="text-4xl mb-3">🇳🇿</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">New Zealand Made</h3>
                  <p className="text-gray-600">Cultivated and manufactured in New Zealand</p>
                </div>
                <div>
                  <div className="text-4xl mb-3">🌿</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Local Employment</h3>
                  <p className="text-gray-600">Supporting Canterbury communities</p>
                </div>
                <div>
                  <div className="text-4xl mb-3">🏆</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Quality Assured</h3>
                  <p className="text-gray-600">Certified to international standards</p>
                </div>
              </div>
              
              <Button className="bg-emerald-600 hover:bg-emerald-700 px-8 py-3">
                Learn About Our NZ Operations
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default About;
