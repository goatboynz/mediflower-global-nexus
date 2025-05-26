
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Shield, Award, FileCheck, Globe, Microscope, ClipboardCheck } from 'lucide-react';

const QualityCompliancePage = () => {
  const nzmqsRequirements = [
    "Active ingredient assays (cannabinoid profiling)",
    "Contaminant testing (pesticides, heavy metals, microorganisms)",
    "Stability testing and shelf-life validation",
    "Residual solvent analysis",
    "Mycotoxin detection",
    "Water activity and moisture content testing"
  ];

  const gmpScope = [
    "Cultivation operations",
    "Extraction and processing",
    "Manufacturing and formulation",
    "Packaging and labeling",
    "Quality control testing",
    "Distribution and storage"
  ];

  const licenses = [
    { name: "Cultivation License", authority: "Medicinal Cannabis Agency", scope: "Cannabis cultivation operations" },
    { name: "Manufacturing License", authority: "Medicinal Cannabis Agency", scope: "Extraction and product manufacturing" },
    { name: "Supply License", authority: "Medicinal Cannabis Agency", scope: "Domestic distribution and supply" },
    { name: "Export License", authority: "Medicinal Cannabis Agency", scope: "International market export" },
    { name: "GMP Certification", authority: "Medsafe", scope: "Pharmaceutical manufacturing standards" }
  ];

  const testingProtocols = [
    { category: "Potency Testing", tests: ["Cannabinoid profiling (THC, CBD, CBG, CBN)", "Terpene analysis", "Active ingredient assays"] },
    { category: "Purity Testing", tests: ["Pesticide residue screening", "Heavy metals analysis", "Microbiological testing"] },
    { category: "Safety Testing", tests: ["Mycotoxin detection", "Residual solvents", "Foreign matter inspection"] },
    { category: "Stability Testing", tests: ["Accelerated stability studies", "Real-time stability testing", "Shelf-life validation"] }
  ];

  const internationalStandards = [
    { standard: "EU-GMP", region: "European Union", description: "European Good Manufacturing Practice for pharmaceutical products" },
    { standard: "TGO 93", region: "Australia", description: "Therapeutic Goods Order 93 for medicinal cannabis products" },
    { standard: "GACP", region: "Global", description: "Good Agricultural and Collection Practices for medicinal plants" },
    { standard: "ICH Guidelines", region: "International", description: "International harmonization of pharmaceutical standards" }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Our Unwavering Commitment to Quality
            </h1>
            <p className="text-2xl text-blue-700 mb-8">
              and Regulatory Excellence
            </p>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              At MediFlower NZ, we maintain the highest standards of product quality, safety, and full regulatory 
              compliance across all operations. Our commitment to excellence ensures that every product meets 
              international pharmaceutical standards and exceeds patient expectations.
            </p>
          </div>
        </div>
      </section>

      {/* NZ Medicinal Cannabis Scheme */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-blue-100 text-blue-800">Fully Licensed</Badge>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Operating Under the NZ Medicinal Cannabis Scheme
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                MediFlower NZ operates in full compliance with New Zealand's Medicinal Cannabis Scheme, 
                established to ensure the safe, legal, and regulated production and supply of medicinal 
                cannabis products. Our operations are continuously monitored and audited to maintain 
                the highest standards of regulatory compliance.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We work closely with the Medicinal Cannabis Agency to ensure our practices not only 
                meet current requirements but also adapt to evolving regulations, maintaining our 
                position as a trusted leader in the New Zealand medical cannabis industry.
              </p>
              <Button className="bg-blue-600 hover:bg-blue-700 px-8 py-3 text-lg">
                Learn About NZ Regulations
              </Button>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-8 rounded-2xl">
              <div className="flex items-center mb-6">
                <Shield className="h-12 w-12 text-blue-600 mr-4" />
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Regulatory Compliance</h3>
                  <p className="text-gray-600">New Zealand Medicinal Cannabis Scheme</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-blue-600 mr-3" />
                  <span className="text-gray-700">Continuous regulatory monitoring</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-blue-600 mr-3" />
                  <span className="text-gray-700">Regular compliance audits</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-blue-600 mr-3" />
                  <span className="text-gray-700">Proactive regulatory adaptation</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NZMQS Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Meeting and Exceeding the NZ Minimum Quality Standard
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our products and processes not only meet but exceed the New Zealand Minimum Quality Standard (NZMQS), 
              ensuring the highest levels of safety, efficacy, and consistency.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {nzmqsRequirements.map((requirement, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    <Microscope className="h-8 w-8 text-emerald-600" />
                  </div>
                  <p className="text-gray-700 font-medium">{requirement}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* GMP Certification */}
      <section className="py-20 bg-emerald-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-white text-emerald-600">GMP Certified</Badge>
            <h2 className="text-4xl font-bold text-white mb-6">
              Our GMP Certification: The Gold Standard
            </h2>
            <p className="text-xl text-emerald-100 max-w-3xl mx-auto">
              MediFlower NZ holds comprehensive Good Manufacturing Practice (GMP) certification, 
              representing the gold standard in pharmaceutical manufacturing quality and safety.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="bg-white p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">GMP Certification Scope</h3>
              <div className="space-y-4">
                {gmpScope.map((scope, index) => (
                  <div key={index} className="flex items-center">
                    <Award className="h-6 w-6 text-emerald-600 mr-3" />
                    <span className="text-gray-700">{scope}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="text-white">
              <h3 className="text-2xl font-bold mb-6">Why GMP Matters</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-emerald-100 mb-2">Quality Assurance</h4>
                  <p className="text-emerald-100">Ensures consistent product quality and pharmaceutical-grade standards</p>
                </div>
                <div>
                  <h4 className="font-semibold text-emerald-100 mb-2">Safety Guarantee</h4>
                  <p className="text-emerald-100">Comprehensive safety protocols protecting patients and consumers</p>
                </div>
                <div>
                  <h4 className="font-semibold text-emerald-100 mb-2">Export Readiness</h4>
                  <p className="text-emerald-100">Essential for international market access and regulatory compliance</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Licenses and Certifications */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Our Licenses and Certifications
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              MediFlower NZ holds all necessary licenses and certifications required for comprehensive 
              medicinal cannabis operations in New Zealand and international markets.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {licenses.map((license, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center mb-2">
                    <FileCheck className="h-8 w-8 text-blue-600 mr-3" />
                    <CardTitle className="text-xl">{license.name}</CardTitle>
                  </div>
                  <CardDescription className="text-sm text-gray-600">
                    Issued by: {license.authority}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">{license.scope}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Management System */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="bg-white p-8 rounded-2xl shadow-xl">
              <div className="flex items-center mb-6">
                <ClipboardCheck className="h-12 w-12 text-blue-600 mr-4" />
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Quality Management System</h3>
                  <p className="text-gray-600">Comprehensive QMS Framework</p>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900">Systematic Approach</h4>
                  <p className="text-gray-600">Integrated quality management across all operations</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Continuous Improvement</h4>
                  <p className="text-gray-600">Regular review and enhancement of quality processes</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Documentation Control</h4>
                  <p className="text-gray-600">Comprehensive documentation and traceability systems</p>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Our Comprehensive Quality Management System
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                MediFlower NZ operates under a comprehensive Quality Management System (QMS) that ensures 
                systematic quality control across all aspects of our operations. Our QMS integrates 
                risk management, process control, and continuous improvement methodologies.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                This systematic approach ensures that quality is built into every process, from initial 
                cultivation through final product delivery, providing consistent, reliable, and 
                pharmaceutical-grade medicinal cannabis products.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testing Protocols */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Our Rigorous Testing Protocols
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every product undergoes comprehensive internal and third-party laboratory testing 
              to ensure compliance with NZMQS and international quality standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testingProtocols.map((protocol, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-2xl text-blue-700">{protocol.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {protocol.tests.map((test, idx) => (
                      <div key={idx} className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-emerald-600 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{test}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* International Standards */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Meeting Global Standards
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our commitment to quality extends beyond New Zealand requirements, ensuring compliance 
              with international standards for global market access.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {internationalStandards.map((standard, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center mb-2">
                    <Globe className="h-8 w-8 text-emerald-600 mr-3" />
                    <CardTitle className="text-xl">{standard.standard}</CardTitle>
                  </div>
                  <CardDescription className="text-sm text-gray-600">
                    {standard.region}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">{standard.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Trust in Our Quality Commitment
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Partner with MediFlower NZ for medicinal cannabis products that meet the highest 
            international quality and compliance standards.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="outline" className="bg-white text-blue-600 hover:bg-blue-50">
              View Our Certifications
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-blue-600">
              Contact Our Quality Team
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default QualityCompliancePage;
