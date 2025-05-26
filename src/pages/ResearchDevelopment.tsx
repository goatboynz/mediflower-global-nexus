
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Microscope, FlaskConical, Dna, Lightbulb, Users, TrendingUp, Beaker, Leaf, Cpu, Database } from 'lucide-react';

const ResearchDevelopment = () => {
  const focusAreas = [
    {
      title: "Advanced Cultivation Techniques",
      description: "Pioneering innovative growing methods to maximize yield, potency, and consistency while reducing environmental impact.",
      icon: <Leaf className="h-8 w-8 text-emerald-600" />,
      highlights: ["Precision hydroponics", "LED optimization", "Climate control algorithms", "Sustainable practices"]
    },
    {
      title: "Cannabis Genetics Research",
      description: "Developing proprietary strains with specific cannabinoid and terpene profiles for targeted therapeutic applications.",
      icon: <Dna className="h-8 w-8 text-emerald-600" />,
      highlights: ["Strain development", "Genetic mapping", "Phenotype selection", "Stability testing"]
    },
    {
      title: "Novel Product Formulations",
      description: "Creating innovative delivery methods and formulations to improve bioavailability and patient outcomes.",
      icon: <FlaskConical className="h-8 w-8 text-emerald-600" />,
      highlights: ["Nanoemulsion technology", "Extended-release formulas", "Novel extraction methods", "Bioavailability enhancement"]
    },
    {
      title: "Proprietary Technology Development",
      description: "Building cutting-edge software and hardware solutions to optimize every aspect of the cannabis value chain.",
      icon: <Cpu className="h-8 w-8 text-emerald-600" />,
      highlights: ["AI-driven analytics", "IoT sensors", "Automation systems", "Predictive modeling"]
    }
  ];

  const collaborations = [
    {
      type: "Academic Partnerships",
      description: "Collaborating with leading universities on cannabis research and development projects.",
      partners: ["University research institutions", "Agricultural science departments", "Pharmaceutical faculties"]
    },
    {
      type: "Industry Alliances",
      description: "Strategic partnerships with technology companies and industry leaders to drive innovation.",
      partners: ["Technology solution providers", "Equipment manufacturers", "International cannabis companies"]
    },
    {
      type: "Research Institutions",
      description: "Working with specialized research organizations to advance medical cannabis science.",
      partners: ["Medical research institutes", "Plant science laboratories", "Regulatory science organizations"]
    }
  ];

  const futureInnovations = [
    {
      area: "Precision Medicine",
      description: "Developing personalized cannabis therapies based on individual patient genetics and conditions.",
      timeline: "Medium-term focus"
    },
    {
      area: "Sustainable Production",
      description: "Revolutionary approaches to carbon-neutral and environmentally positive cultivation methods.",
      timeline: "Ongoing development"
    },
    {
      area: "Advanced Analytics",
      description: "AI and machine learning applications for predictive cultivation and quality optimization.",
      timeline: "Active research"
    },
    {
      area: "Novel Delivery Systems",
      description: "Next-generation products with enhanced therapeutic benefits and patient convenience.",
      timeline: "Future pipeline"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-emerald-50 via-white to-green-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="outline" className="mb-4 border-emerald-200 text-emerald-700">
                Innovation & Research
              </Badge>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Driving the Future of Medical Cannabis: Our R&D Initiatives
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                At MediFlower NZ, innovation drives everything we do. Our dedicated Research & Development 
                team is committed to advancing the medical cannabis sector through cutting-edge research, 
                groundbreaking technology, and collaborative partnerships that shape the future of 
                therapeutic cannabis solutions.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
                  <Microscope className="mr-2 h-5 w-5" />
                  Explore Our Research
                </Button>
                <Button variant="outline" size="lg" className="border-emerald-600 text-emerald-600 hover:bg-emerald-50">
                  <Users className="mr-2 h-5 w-5" />
                  Research Partnerships
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&h=600"
                alt="Modern laboratory research technology"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
                <div className="flex items-center space-x-3">
                  <Lightbulb className="h-8 w-8 text-emerald-600" />
                  <div>
                    <p className="font-semibold text-gray-900">Innovation First</p>
                    <p className="text-sm text-gray-600">Leading cannabis research</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* R&D Focus Areas */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Key Research & Development Focus Areas
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our multidisciplinary approach spans cultivation science, genetics research, 
              product development, and technology innovation to advance medical cannabis therapeutics.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {focusAreas.map((area, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-4 mb-4">
                    {area.icon}
                    <CardTitle className="text-2xl text-gray-900 group-hover:text-emerald-600 transition-colors">
                      {area.title}
                    </CardTitle>
                  </div>
                  <CardDescription className="text-gray-600 text-lg">
                    {area.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-3">
                    {area.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-700">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></div>
                        {highlight}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Collaborative Innovation */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Collaborations and Partnerships in R&D
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Innovation thrives through collaboration. We partner with leading academic institutions, 
              research organizations, and industry pioneers to accelerate breakthrough discoveries 
              in medical cannabis science.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {collaborations.map((collab, index) => (
              <Card key={index} className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-3">
                    <Users className="h-8 w-8 text-emerald-600" />
                    <CardTitle className="text-xl text-gray-900">{collab.type}</CardTitle>
                  </div>
                  <CardDescription className="text-gray-600">
                    {collab.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {collab.partners.map((partner, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-700">
                        <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-3"></div>
                        {partner}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="bg-gradient-to-r from-emerald-600 to-green-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Join Our Research Network</h3>
              <p className="text-emerald-100 mb-6 max-w-2xl mx-auto">
                We're always seeking new partnerships with innovative organizations 
                committed to advancing medical cannabis research and development.
              </p>
              <Button variant="secondary" size="lg" className="bg-white text-emerald-600 hover:bg-gray-100">
                <Database className="mr-2 h-5 w-5" />
                Partnership Opportunities
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Innovation Pipeline */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Innovating for Tomorrow
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our forward-thinking approach ensures we're always exploring the next frontier 
              in medical cannabis innovation, preparing for the therapeutic solutions of tomorrow.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {futureInnovations.map((innovation, index) => (
              <div key={index} className="relative">
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow bg-gradient-to-br from-white to-emerald-50">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-3">
                      <CardTitle className="text-xl text-gray-900">{innovation.area}</CardTitle>
                      <Badge variant="outline" className="border-emerald-200 text-emerald-700">
                        {innovation.timeline}
                      </Badge>
                    </div>
                    <CardDescription className="text-gray-600 text-base">
                      {innovation.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center text-emerald-600">
                      <TrendingUp className="h-5 w-5 mr-2" />
                      <span className="text-sm font-medium">Future Impact Area</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <img 
              src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=1200&h=400"
              alt="Advanced research and development technology"
              className="rounded-xl shadow-lg mx-auto mb-8"
            />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Leading the Cannabis Innovation Revolution
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              Our commitment to research and development positions MediFlower NZ at the 
              forefront of medical cannabis innovation, creating solutions that transform 
              patient outcomes and industry standards.
            </p>
            <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
              <Beaker className="mr-2 h-5 w-5" />
              Explore Research Opportunities
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ResearchDevelopment;
