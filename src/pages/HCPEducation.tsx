
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BookOpen, Brain, Pill, AlertTriangle, Users, FileText, Leaf, Shield } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const HCPEducation = () => {
  const educationModules = [
    {
      id: 1,
      title: "The Endocannabinoid System",
      description: "Comprehensive overview of the ECS, its receptors, and physiological functions",
      icon: Brain,
      duration: "15 min read",
      topics: [
        "CB1 and CB2 receptor distribution and function",
        "Endogenous cannabinoids (anandamide, 2-AG)",
        "Physiological roles in homeostasis",
        "Therapeutic implications"
      ]
    },
    {
      id: 2,
      title: "Pharmacology of THC, CBD, and Other Cannabinoids",
      description: "Detailed pharmacological profiles of major cannabinoids",
      icon: Pill,
      duration: "20 min read",
      topics: [
        "THC: psychoactivity, therapeutic effects, pharmacokinetics",
        "CBD: non-psychoactive effects, drug interactions",
        "Minor cannabinoids: CBG, CBN, CBC",
        "Bioavailability and route-dependent effects"
      ]
    },
    {
      id: 3,
      title: "Terpenes and the Entourage Effect",
      description: "Scientific evidence for terpene interactions and combined effects",
      icon: Leaf,
      duration: "12 min read",
      topics: [
        "Common terpenes in cannabis",
        "Potential synergistic effects",
        "Current research limitations",
        "Clinical relevance"
      ]
    },
    {
      id: 4,
      title: "Potential Drug Interactions",
      description: "Important considerations for drug-drug interactions",
      icon: AlertTriangle,
      duration: "18 min read",
      topics: [
        "CYP450 enzyme interactions",
        "Anticoagulant interactions",
        "Antiepileptic drug considerations",
        "Monitoring recommendations"
      ]
    },
    {
      id: 5,
      title: "Adverse Effects and Contraindications",
      description: "Comprehensive safety profile and risk assessment",
      icon: AlertTriangle,
      duration: "16 min read",
      topics: [
        "Common adverse effects by route of administration",
        "Contraindications and precautions",
        "Special populations (elderly, pregnant)",
        "Long-term safety considerations"
      ]
    },
    {
      id: 6,
      title: "Dosing Considerations and Titration Strategies",
      description: "Evidence-based approaches to dosing and titration",
      icon: FileText,
      duration: "22 min read",
      topics: [
        "Start low, go slow principles",
        "Route-specific dosing considerations",
        "Patient-specific factors",
        "Monitoring response and adjusting doses"
      ]
    },
    {
      id: 7,
      title: "Patient Assessment and Monitoring",
      description: "Clinical assessment tools and monitoring protocols",
      icon: Users,
      duration: "25 min read",
      topics: [
        "Pre-treatment assessment protocols",
        "Baseline investigations",
        "Ongoing monitoring requirements",
        "Documentation and reporting"
      ]
    },
    {
      id: 8,
      title: "Understanding NZMQS and Product Quality",
      description: "New Zealand quality standards and product assessment",
      icon: Shield,
      duration: "14 min read",
      topics: [
        "NZMQS requirements and testing",
        "Product standardisation",
        "Certificate of Analysis interpretation",
        "Quality assurance in clinical practice"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Header Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-700 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <BookOpen className="h-12 w-12 text-white mx-auto mb-4" />
            <h1 className="text-4xl font-bold text-white mb-4">
              Educational Resources on Medicinal Cannabis
            </h1>
            <p className="text-xl text-blue-100 max-w-4xl mx-auto">
              Access educational materials on the endocannabinoid system, pharmacology of cannabinoids, 
              patient consultation best practices, and other relevant topics to enhance your understanding 
              of medicinal cannabis.
            </p>
          </div>
        </div>
      </section>

      {/* Education Modules */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {educationModules.map((module) => (
              <Card key={module.id} className="shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center">
                      <module.icon className="h-8 w-8 text-blue-600 mr-3" />
                      <div>
                        <CardTitle className="text-xl text-gray-900">
                          {module.title}
                        </CardTitle>
                        <CardDescription className="mt-1">
                          {module.duration}
                        </CardDescription>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">{module.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Topics Covered:</h4>
                    <ul className="space-y-1">
                      {module.topics.map((topic, index) => (
                        <li key={index} className="text-sm text-gray-600 flex items-start">
                          <span className="text-blue-600 mr-2">•</span>
                          {topic}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    Access Module
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Resources */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Additional Clinical Resources
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardContent className="p-6">
                <FileText className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Clinical Guidelines
                </h3>
                <p className="text-gray-600 mb-4">
                  Evidence-based clinical practice guidelines for medicinal cannabis use
                </p>
                <Button variant="outline" className="w-full">
                  Download Guidelines
                </Button>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Case Studies
                </h3>
                <p className="text-gray-600 mb-4">
                  Real-world clinical cases and treatment outcomes
                </p>
                <Button variant="outline" className="w-full">
                  View Case Studies
                </Button>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <BookOpen className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Reference Library
                </h3>
                <p className="text-gray-600 mb-4">
                  Comprehensive library of research papers and clinical resources
                </p>
                <Button variant="outline" className="w-full">
                  Access Library
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HCPEducation;
