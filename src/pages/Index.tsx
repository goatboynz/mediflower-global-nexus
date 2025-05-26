
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Leaf, Globe, Users, Award, Lightbulb, Shield, Beaker, Factory, Truck, CheckCircle, TreePine, Cpu } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Index = () => {
  const serviceCards = [
    {
      title: "Premium Cultivation",
      description: "Expert cultivation services for high-quality medical cannabis",
      icon: Leaf,
      href: "/premium-cultivation"
    },
    {
      title: "Expert Consulting",
      description: "Strategic guidance for navigating the medical cannabis industry",
      icon: Users,
      href: "/expert-consulting"
    },
    {
      title: "Custom Technology",
      description: "Innovative technology solutions tailored to your cannabis business",
      icon: Cpu,
      href: "/custom-technology"
    },
    {
      title: "Manufacturing",
      description: "Precision manufacturing of medical cannabis products",
      icon: Factory,
      href: "/manufacturing"
    },
    {
      title: "Distribution",
      description: "Global distribution network for medical cannabis products",
      icon: Truck,
      href: "/distribution"
    },
    {
      title: "Quality & Compliance",
      description: "Ensuring the highest standards of quality and regulatory compliance",
      icon: Shield,
      href: "/quality-compliance"
    },
    {
      title: "Research & Development",
      description: "Advancing medical cannabis through cutting-edge research and development",
      icon: Beaker,
      href: "/research-development"
    },
    {
      title: "Sustainability Initiatives",
      description: "Sustainable practices for a healthier planet and future",
      icon: TreePine,
      href: "/sustainability-initiatives"
    },
  ];

  const qualityFeatures = [
    {
      title: "NZMQS Compliance",
      description: "Full compliance with New Zealand Medicinal Cannabis Quality Standards",
      icon: Shield
    },
    {
      title: "GMP Certified",
      description: "Good Manufacturing Practice certified facilities and processes",
      icon: Award
    },
    {
      title: "Rigorous Testing",
      description: "Comprehensive testing protocols ensuring product safety and efficacy",
      icon: CheckCircle
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-green-50">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="text-center lg:text-left">
              <Badge className="mb-4 bg-emerald-100 text-emerald-700">
                Leading Medical Cannabis Solutions
              </Badge>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Innovating Medical Cannabis from New Zealand to the World
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                MediFlower NZ is at the forefront of medical cannabis innovation, providing expert
                consulting, cutting-edge technology, and premium cultivation services to B2B partners
                globally.
              </p>
              <div className="space-x-4">
                <Link to="/contact-consultation">
                  <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
                    Book a Consultation
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/about">
                  <Button variant="outline" size="lg" className="border-emerald-600 text-emerald-600 hover:bg-emerald-50">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1618381774741-1890916417a4?auto=format&fit=crop&w=800&h=600"
                alt="Medical Cannabis Innovation"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
                <div className="flex items-center space-x-3">
                  <Lightbulb className="h-8 w-8 text-emerald-600" />
                  <div>
                    <p className="font-semibold text-gray-900">Innovative Solutions</p>
                    <p className="text-sm text-gray-600">Expertise in every aspect</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Comprehensive Service Portfolio
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore our diverse range of services designed to support every stage of your medical
              cannabis business, from cultivation to global distribution.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {serviceCards.map((card, index) => (
              <Link key={index} to={card.href} className="hover:scale-105 transition-transform duration-300">
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-center h-16 mb-4">
                      <card.icon className="h-10 w-10 text-emerald-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2 text-center">{card.title}</h3>
                    <p className="text-gray-600 text-center">{card.description}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 to-green-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Driven by Excellence, Guided by Science
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                At MediFlower NZ, our mission is to advance the medical cannabis industry through
                scientific rigor, innovative solutions, and a commitment to quality.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We are dedicated to providing our partners with the tools and expertise they need to
                succeed in this rapidly evolving market, ensuring patient well-being and industry
                growth.
              </p>
              <Link to="/about">
                <Button variant="outline" size="lg" className="border-emerald-600 text-emerald-600 hover:bg-emerald-50">
                  More About Us
                </Button>
              </Link>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1576091166128-490991928455?auto=format&fit=crop&w=800&h=600"
                alt="Our Mission and Vision"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quality & Compliance */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Uncompromising Quality and Compliance
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We adhere to the highest standards of quality and regulatory compliance, ensuring the
              safety, efficacy, and consistency of our medical cannabis products.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {qualityFeatures.map((feature, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="flex items-center justify-center h-16 mb-4">
                    <feature.icon className="h-10 w-10 text-emerald-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link to="/quality-compliance">
              <Button variant="outline" size="lg" className="border-emerald-600 text-emerald-600 hover:bg-emerald-50">
                Learn More About Our Quality Standards
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Partnership CTA */}
      <section className="py-20 bg-gradient-to-br from-emerald-600 to-green-700 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Partner with MediFlower NZ for Medical Cannabis Excellence
          </h2>
          <p className="text-lg text-emerald-100 mb-8 max-w-3xl mx-auto">
            Explore partnership opportunities and discover how our expertise can elevate your medical
            cannabis business to new heights.
          </p>
          <Link to="/contact-partnerships">
            <Button size="lg" className="bg-white text-emerald-700 hover:bg-emerald-50">
              Partner With Us
              <Globe className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
