
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Users, Target, Award, Globe, Lightbulb, Heart, Leaf, Shield, Factory, Beaker } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const About = () => {
  const teamMembers = [
    {
      name: "Dr. Emily Carter",
      title: "Chief Science Officer",
      description: "Ph.D. in Plant Genetics with 15+ years in cannabis research.",
      image: "https://images.unsplash.com/photo-1584438473107-3ca207489496?auto=format&fit=crop&w=400&h=400",
      linkedin: "#"
    },
    {
      name: "Michael Thompson",
      title: "Chief Cultivation Officer",
      description: "Expert in controlled environment agriculture and sustainable cultivation practices.",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286467?auto=format&fit=crop&w=400&h=400",
      linkedin: "#"
    },
    {
      name: "Sarah Johnson",
      title: "Chief Strategy Officer",
      description: "MBA with extensive experience in cannabis business strategy and market development.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&h=400",
      linkedin: "#"
    }
  ];

  const visionPoints = [
    "Pioneering cannabis-based therapies",
    "Setting new standards for quality and safety",
    "Driving innovation through research and development",
    "Promoting sustainable and ethical practices"
  ];

  const missionStatements = [
    "To lead the medical cannabis industry through innovation and research.",
    "To provide patients with safe, effective, and consistent cannabis-based therapies.",
    "To promote sustainable and ethical practices in cannabis cultivation and production."
  ];

  const coreValues = [
    {
      title: "Innovation",
      description: "We embrace cutting-edge research and technology to drive advancements in medical cannabis.",
      icon: Lightbulb
    },
    {
      title: "Quality",
      description: "We are committed to the highest standards of product quality, safety, and consistency.",
      icon: Shield
    },
    {
      title: "Sustainability",
      description: "We prioritize environmentally responsible practices and sustainable resource management.",
      icon: Leaf
    },
    {
      title: "Integrity",
      description: "We operate with transparency, ethics, and accountability in all our business practices.",
      icon: Heart
    }
  ];

  const expertiseAreas = [
    {
      title: "Genetics & Cultivation",
      description: "Expertise in cannabis genetics, breeding, and advanced cultivation techniques.",
      icon: Leaf
    },
    {
      title: "Pharmaceutical Manufacturing",
      description: "GMP-certified manufacturing of pharmaceutical-grade cannabis products.",
      icon: Factory
    },
    {
      title: "Clinical Research",
      description: "Dedicated to advancing medical cannabis science through rigorous clinical research.",
      icon: Beaker
    },
    {
      title: "Regulatory Compliance",
      description: "Expertise in navigating complex regulatory frameworks for medical cannabis.",
      icon: Shield
    }
  ];

  const globalReachPoints = [
    "Strategic partnerships with international cannabis companies",
    "Export capabilities to key global markets",
    "Compliance with international regulatory standards",
    "Commitment to global patient access"
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
                About Us
              </Badge>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Pioneering Medical Cannabis Solutions
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                MediFlower NZ is at the forefront of medical cannabis innovation, dedicated to 
                improving patient outcomes through cutting-edge research, advanced cultivation 
                practices, and pharmaceutical-grade manufacturing.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
                  Our Mission
                </Button>
                <Button variant="outline" size="lg" className="border-emerald-600 text-emerald-600 hover:bg-emerald-50">
                  Meet the Team
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1563783446494-64b7ef130a39?auto=format&fit=crop&w=800&h=600"
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

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Story</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Founded in New Zealand, MediFlower NZ emerged from a vision to transform the medical 
              cannabis landscape through science-backed solutions and patient-centered care.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <CardHeader className="pb-4">
                  <img 
                    src={member.image}
                    alt={member.name}
                    className="rounded-full w-24 h-24 mx-auto mb-4"
                  />
                  <CardTitle className="text-2xl text-gray-900 group-hover:text-emerald-600 transition-colors text-center">
                    {member.name}
                  </CardTitle>
                  <CardDescription className="text-gray-600 text-center">
                    {member.title}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 text-center">{member.description}</p>
                  <div className="mt-4 text-center">
                    <Link to={member.linkedin} className="text-blue-500 hover:text-blue-700">
                      LinkedIn Profile
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Vision</h2>
              <ul className="list-disc list-inside text-lg text-gray-600 space-y-3">
                {visionPoints.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <ul className="list-decimal list-inside text-lg text-gray-600 space-y-3">
                {missionStatements.map((statement, index) => (
                  <li key={index}>{statement}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These values guide our decisions and actions, shaping our culture and driving our success.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {coreValues.map((value, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-4 mb-4">
                    <value.icon className="h-8 w-8 text-emerald-600" />
                    <CardTitle className="text-2xl text-gray-900 group-hover:text-emerald-600 transition-colors">
                      {value.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Areas */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Areas of Expertise</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our multidisciplinary team brings together expertise in genetics, cultivation, 
              pharmaceutical manufacturing, clinical research, and regulatory compliance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {expertiseAreas.map((area, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-4 mb-4">
                    <area.icon className="h-8 w-8 text-emerald-600" />
                    <CardTitle className="text-2xl text-gray-900 group-hover:text-emerald-600 transition-colors">
                      {area.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">{area.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Global Reach */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Global Reach</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We are committed to expanding access to our medical cannabis solutions worldwide, 
              partnering with leading organizations to serve patients in key global markets.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <ul className="list-disc list-inside text-lg text-gray-600 space-y-3">
                {globalReachPoints.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </div>
            <div>
              <Globe className="h-48 w-full text-gray-300" />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-emerald-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Partner with Us?
          </h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-3xl mx-auto">
            Discover how our expertise and commitment to quality can benefit your organization 
            and the patients you serve.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="bg-white text-emerald-600 hover:bg-emerald-50">
              Contact Us
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-emerald-600">
              Explore Partnership Opportunities
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
