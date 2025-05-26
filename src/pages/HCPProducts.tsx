
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { FileText, Download, Shield, AlertTriangle } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const HCPProducts = () => {
  const products = [
    {
      id: 1,
      name: "MediFlower CBD Oil 10mg/mL",
      dosageForm: "Oral solution",
      activeIngredients: "CBD (Cannabidiol): 10mg/mL, THC: <1mg/mL",
      terpenes: "Myrcene, Limonene, Pinene",
      packSizes: ["10mL", "30mL"],
      classification: "Class C1 controlled drug",
      nzmqsCompliant: true
    },
    {
      id: 2,
      name: "MediFlower Balanced 1:1",
      dosageForm: "Dried flower for vaporisation",
      activeIngredients: "THC: 15-20%, CBD: 15-20%",
      terpenes: "Caryophyllene, Linalool, Myrcene",
      packSizes: ["5g", "10g"],
      classification: "Class C1 controlled drug",
      nzmqsCompliant: true
    },
    {
      id: 3,
      name: "MediFlower CBD Capsules",
      dosageForm: "Hard capsules",
      activeIngredients: "CBD: 25mg per capsule, THC: <2mg per capsule",
      terpenes: "N/A (Isolated CBD)",
      packSizes: ["30 capsules", "60 capsules"],
      classification: "Class C1 controlled drug",
      nzmqsCompliant: true
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Header Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-700 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <FileText className="h-12 w-12 text-white mx-auto mb-4" />
            <h1 className="text-4xl font-bold text-white mb-4">
              Medicinal Cannabis Product Information
            </h1>
            <p className="text-xl text-blue-100 max-w-4xl mx-auto">
              This section provides factual, non-promotional information about MediFlower NZ's 
              medicinal cannabis products that meet the New Zealand Minimum Quality Standard (NZMQS). 
              This information is intended to support healthcare professionals in their prescribing decisions.
            </p>
          </div>
        </div>
      </section>

      {/* Products Listing */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8">
            {products.map((product) => (
              <Card key={product.id} className="shadow-lg">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-2xl text-gray-900 mb-2">
                        {product.name}
                      </CardTitle>
                      <CardDescription className="text-lg">
                        {product.dosageForm}
                      </CardDescription>
                    </div>
                    <div className="flex flex-col gap-2">
                      {product.nzmqsCompliant && (
                        <Badge className="bg-green-100 text-green-800">
                          <Shield className="h-3 w-3 mr-1" />
                          NZMQS Compliant
                        </Badge>
                      )}
                      <Badge variant="outline" className="text-orange-700 border-orange-300">
                        {product.classification}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Active Ingredients</h4>
                      <p className="text-gray-700 mb-4">{product.activeIngredients}</p>
                      
                      <h4 className="font-semibold text-gray-900 mb-2">Key Terpene Profile</h4>
                      <p className="text-gray-700 mb-4">{product.terpenes}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Pack Sizes Available</h4>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {product.packSizes.map((size, index) => (
                          <Badge key={index} variant="secondary">{size}</Badge>
                        ))}
                      </div>
                      
                      <h4 className="font-semibold text-gray-900 mb-2">Storage Conditions</h4>
                      <p className="text-gray-700 text-sm mb-4">
                        Store in a cool, dry place away from light. Keep out of reach of children.
                      </p>
                    </div>
                  </div>
                  
                  <div className="border-t pt-4 mt-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-sm text-gray-600 mb-2">
                          <strong>NZMQS Compliance:</strong> This product has been verified as meeting 
                          the New Zealand Minimum Quality Standard.
                        </p>
                        <p className="text-sm text-gray-600">
                          <strong>Important Note:</strong> This product is an unapproved medicine. 
                          Its safety and efficacy have not been fully assessed by Medsafe for all conditions. 
                          Prescribe in accordance with the Medicinal Cannabis Scheme.
                        </p>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          <Download className="h-4 w-4 mr-2" />
                          Certificate of Analysis
                        </Button>
                        <Link to={`/hcp-product/${product.id}`}>
                          <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                            View Details
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="bg-yellow-50 border-t-4 border-yellow-400 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start">
            <AlertTriangle className="h-6 w-6 text-yellow-600 mr-3 mt-1 flex-shrink-0" />
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Professional Use Only</h3>
              <p className="text-sm text-gray-700">
                All information provided is for registered healthcare professionals only. 
                Products listed are unapproved medicines requiring prescriber assessment 
                and patient consent under the Medicinal Cannabis Scheme guidelines.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HCPProducts;
