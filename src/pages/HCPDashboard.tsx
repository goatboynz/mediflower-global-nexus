
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Shield, FileText, BookOpen, Clipboard, Users, AlertTriangle, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const HCPDashboard = () => {
  const quickLinks = [
    {
      title: "Updated Product Information",
      description: "Latest medicinal cannabis product specifications",
      link: "/hcp-products",
      icon: FileText
    },
    {
      title: "New Research Summary",
      description: "Recent peer-reviewed studies on medicinal cannabis",
      link: "/hcp-research",
      icon: BookOpen
    },
    {
      title: "Regulatory Updates",
      description: "Important changes to NZ prescribing guidelines",
      link: "/hcp-guidelines",
      icon: Clipboard
    }
  ];

  const navigationSections = [
    {
      title: "Product Information",
      description: "Detailed, non-promotional product specifications",
      link: "/hcp-products",
      icon: FileText
    },
    {
      title: "Research & Clinical Data",
      description: "Evidence-based research and clinical studies",
      link: "/hcp-research",
      icon: BookOpen
    },
    {
      title: "Educational Resources",
      description: "Clinical education on medicinal cannabis",
      link: "/hcp-education",
      icon: BookOpen
    },
    {
      title: "Prescribing Guidelines",
      description: "NZ-specific prescribing and access information",
      link: "/hcp-guidelines",
      icon: Clipboard
    },
    {
      title: "HCP Support",
      description: "Professional support and contact information",
      link: "/hcp-support",
      icon: Users
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Welcome Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-700 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Shield className="h-16 w-16 text-white mx-auto mb-6" />
            <h1 className="text-4xl font-bold text-white mb-4">
              Welcome to the MediFlower NZ Healthcare Professionals Portal
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Your resource for evidence-based information on medicinal cannabis and our product offerings
            </p>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Featured Resources
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {quickLinks.map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <item.icon className="h-6 w-6 text-blue-600 mr-3" />
                    <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  <Link to={item.link}>
                    <Button variant="outline" className="w-full">
                      Access Resource
                      <ExternalLink className="h-4 w-4 ml-2" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Main Navigation */}
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Portal Sections
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {navigationSections.map((section, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <section.icon className="h-8 w-8 text-blue-600 mr-3" />
                    <h3 className="text-xl font-semibold text-gray-900">{section.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{section.description}</p>
                  <Link to={section.link}>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700">
                      Enter Section
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Disclaimer Section */}
      <section className="bg-yellow-50 border-t-4 border-yellow-400 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start">
            <AlertTriangle className="h-6 w-6 text-yellow-600 mr-3 mt-1 flex-shrink-0" />
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Important Disclaimer</h3>
              <p className="text-sm text-gray-700">
                The information provided in this portal is intended for registered healthcare professionals 
                in New Zealand only. It is not intended as a substitute for independent professional medical 
                judgment, diagnosis, or treatment. All prescribing decisions must be made in accordance with 
                the New Zealand Medicinal Cannabis Scheme and relevant professional guidelines. Therapeutic 
                claims are not made for unapproved medicines.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HCPDashboard;
