
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Leaf, Zap, Droplets, Recycle, Package, Award, Heart, TreePine, Sun, Wind } from 'lucide-react';

const SustainabilityInitiatives = () => {
  const environmentalPractices = [
    {
      title: "Energy Efficiency",
      description: "Advanced energy management systems and renewable energy integration to minimize our carbon footprint.",
      icon: <Zap className="h-8 w-8 text-emerald-600" />,
      initiatives: [
        "LED lighting systems with spectrum optimization",
        "Smart HVAC systems with AI-driven climate control",
        "Solar panel installations for renewable energy",
        "Energy monitoring and optimization software"
      ]
    },
    {
      title: "Water Conservation",
      description: "Comprehensive water management strategies ensuring responsible use and recycling of this precious resource.",
      icon: <Droplets className="h-8 w-8 text-emerald-600" />,
      initiatives: [
        "Closed-loop hydroponic systems",
        "Rainwater harvesting and filtration",
        "Greywater recycling for irrigation",
        "Advanced water treatment and reuse systems"
      ]
    },
    {
      title: "Waste Reduction & Management",
      description: "Innovative waste management solutions that turn byproducts into valuable resources.",
      icon: <Recycle className="h-8 w-8 text-emerald-600" />,
      initiatives: [
        "Organic waste composting programs",
        "Biodigester systems for organic matter",
        "Material recycling and reuse protocols",
        "Zero-waste-to-landfill initiatives"
      ]
    },
    {
      title: "Sustainable Sourcing",
      description: "Responsible procurement of materials and inputs from environmentally conscious suppliers.",
      icon: <TreePine className="h-8 w-8 text-emerald-600" />,
      initiatives: [
        "Organic growing media and substrates",
        "Sustainable nutrient solutions",
        "Local supplier partnerships",
        "Carbon-neutral shipping options"
      ]
    }
  ];

  const certifications = [
    {
      name: "BioGro Organic Certification",
      description: "Certified organic cultivation practices ensuring natural, chemical-free production.",
      status: "Certified"
    },
    {
      name: "Carbon Neutral Certification",
      description: "Committed to achieving carbon neutrality across all operations.",
      status: "In Progress"
    },
    {
      name: "Sustainable Agriculture Initiative",
      description: "Member of industry sustainability programs and best practice networks.",
      status: "Active Member"
    }
  ];

  const communityInitiatives = [
    {
      area: "Education & Awareness",
      description: "Community workshops on sustainable agriculture and environmental stewardship.",
      impact: "500+ participants annually"
    },
    {
      area: "Local Employment",
      description: "Creating meaningful employment opportunities within our local communities.",
      impact: "50+ local jobs created"
    },
    {
      area: "Environmental Restoration",
      description: "Supporting native habitat restoration and biodiversity conservation projects.",
      impact: "10 hectares restored"
    },
    {
      area: "Research Partnerships",
      description: "Collaborating with universities on sustainable agriculture research projects.",
      impact: "5 active research projects"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="outline" className="mb-4 border-emerald-200 text-emerald-700">
                Sustainability & Environment
              </Badge>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Sustainable Practices for a Healthier Planet and Future
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                At MediFlower NZ, sustainability isn't just a commitment—it's the foundation of 
                everything we do. We believe that responsible cultivation and operations today 
                ensure a healthier planet for future generations while delivering the highest 
                quality medical cannabis products.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
                  <Leaf className="mr-2 h-5 w-5" />
                  Our Green Practices
                </Button>
                <Button variant="outline" size="lg" className="border-emerald-600 text-emerald-600 hover:bg-emerald-50">
                  <Heart className="mr-2 h-5 w-5" />
                  Community Impact
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=800&h=600"
                alt="Sustainable agriculture and green practices"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
                <div className="flex items-center space-x-3">
                  <Sun className="h-8 w-8 text-emerald-600" />
                  <div>
                    <p className="font-semibold text-gray-900">100% Renewable</p>
                    <p className="text-sm text-gray-600">Clean energy powered</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Environmental Stewardship */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Environmental Stewardship Practices
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We implement comprehensive environmental management systems across all 
              aspects of our operations, from cultivation to final product delivery.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {environmentalPractices.map((practice, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-4 mb-4">
                    {practice.icon}
                    <CardTitle className="text-2xl text-gray-900 group-hover:text-emerald-600 transition-colors">
                      {practice.title}
                    </CardTitle>
                  </div>
                  <CardDescription className="text-gray-600 text-lg">
                    {practice.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {practice.initiatives.map((initiative, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></div>
                        <span className="text-sm">{initiative}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainable Packaging */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Eco-Friendly Packaging Solutions
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Our commitment to sustainability extends to every aspect of our product delivery, 
                including innovative packaging solutions that minimize environmental impact while 
                maintaining product integrity and compliance standards.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Package className="h-6 w-6 text-emerald-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Biodegradable Materials</h3>
                    <p className="text-gray-600">Plant-based packaging materials that decompose naturally without harmful residues.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Recycle className="h-6 w-6 text-emerald-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Recycled Content</h3>
                    <p className="text-gray-600">Utilizing post-consumer recycled materials in our packaging wherever possible.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Leaf className="h-6 w-6 text-emerald-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Hemp-Based Solutions</h3>
                    <p className="text-gray-600">Innovative hemp fiber packaging that's both sustainable and industry-appropriate.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=600&h=500"
                alt="Eco-friendly packaging and sustainable materials"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Sustainability Certifications and Commitments
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We maintain rigorous standards and third-party certifications that 
              validate our commitment to sustainable and responsible business practices.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <Award className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
                  <CardTitle className="text-xl text-gray-900">{cert.name}</CardTitle>
                  <Badge variant="outline" className="border-emerald-200 text-emerald-700 mx-auto">
                    {cert.status}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    {cert.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Community Impact */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Impact Beyond Business
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              True sustainability encompasses social responsibility. We're committed to 
              making a positive impact in our communities and contributing to broader 
              environmental and social causes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {communityInitiatives.map((initiative, index) => (
              <Card key={index} className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-3">
                    <CardTitle className="text-xl text-gray-900">{initiative.area}</CardTitle>
                    <Badge variant="outline" className="border-emerald-200 text-emerald-700">
                      {initiative.impact}
                    </Badge>
                  </div>
                  <CardDescription className="text-gray-600">
                    {initiative.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center">
            <img 
              src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&h=400"
              alt="Community engagement and environmental stewardship"
              className="rounded-xl shadow-lg mx-auto mb-8"
            />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Building a Sustainable Future Together
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              Our sustainability journey is ongoing, and we're always looking for new ways 
              to minimize our environmental footprint while maximizing our positive impact 
              on communities and the planet.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
                <Wind className="mr-2 h-5 w-5" />
                Join Our Mission
              </Button>
              <Button variant="outline" size="lg" className="border-emerald-600 text-emerald-600 hover:bg-emerald-50">
                Sustainability Report
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SustainabilityInitiatives;
