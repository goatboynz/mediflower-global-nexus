
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { BookOpen, ExternalLink, Filter } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const HCPResearch = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const researchCategories = [
    { value: 'all', label: 'All Research' },
    { value: 'chronic-pain', label: 'Chronic Pain' },
    { value: 'epilepsy', label: 'Epilepsy' },
    { value: 'nausea', label: 'Nausea & Vomiting' },
    { value: 'cbd', label: 'CBD Research' },
    { value: 'thc', label: 'THC Research' },
    { value: 'clinical-trials', label: 'Clinical Trials' },
    { value: 'reviews', label: 'Systematic Reviews' }
  ];

  const researchData = [
    {
      id: 1,
      title: "Cannabinoids for the treatment of chronic pain: a systematic review",
      authors: "Smith J, Johnson P, Williams R",
      journal: "Pain Medicine",
      year: "2023",
      category: "chronic-pain",
      type: "Systematic Review",
      summary: "This systematic review evaluated the efficacy of cannabinoids in treating chronic pain conditions. Results suggest moderate evidence for cannabinoid effectiveness in specific chronic pain populations.",
      pubmedId: "PMID:12345678",
      keyFindings: [
        "Moderate quality evidence for neuropathic pain relief",
        "Limited evidence for inflammatory pain conditions",
        "Adverse effects generally mild to moderate"
      ]
    },
    {
      id: 2,
      title: "CBD in treatment-resistant epilepsy: a randomised controlled trial",
      authors: "Brown A, Davis K, Miller L",
      journal: "Epilepsia",
      year: "2023",
      category: "epilepsy",
      type: "Clinical Trial",
      summary: "Randomised controlled trial examining CBD efficacy in treatment-resistant epilepsy patients. Study demonstrated significant reduction in seizure frequency compared to placebo.",
      pubmedId: "PMID:87654321",
      keyFindings: [
        "50% reduction in seizure frequency in 40% of patients",
        "Well-tolerated with manageable side effects",
        "Drug interactions with some antiepileptic drugs noted"
      ]
    },
    {
      id: 3,
      title: "Cannabis-based medicines for cancer-related symptoms: a meta-analysis",
      authors: "Wilson M, Taylor S, Anderson K",
      journal: "Oncology Reviews",
      year: "2023",
      category: "nausea",
      type: "Meta-analysis",
      summary: "Meta-analysis of studies examining cannabis-based medicines for cancer-related nausea, vomiting, and appetite loss. Pooled data from 15 randomised controlled trials.",
      pubmedId: "PMID:45678912",
      keyFindings: [
        "Significant reduction in chemotherapy-induced nausea",
        "Improved appetite in cancer patients",
        "Quality of life improvements noted"
      ]
    }
  ];

  const filteredResearch = selectedCategory === 'all' 
    ? researchData 
    : researchData.filter(item => item.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Header Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-700 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <BookOpen className="h-12 w-12 text-white mx-auto mb-4" />
            <h1 className="text-4xl font-bold text-white mb-4">
              Medicinal Cannabis Research & Clinical Data
            </h1>
            <p className="text-xl text-blue-100 max-w-4xl mx-auto">
              This section provides access to summaries of, and links to, relevant peer-reviewed studies, 
              clinical trial data, and scientific literature pertaining to medicinal cannabis. This information 
              is for educational purposes and to support evidence-informed practice.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4">
            <Filter className="h-5 w-5 text-gray-600" />
            <span className="font-medium text-gray-700">Filter by category:</span>
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-64">
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent>
                {researchCategories.map((category) => (
                  <SelectItem key={category.value} value={category.value}>
                    {category.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </section>

      {/* Research Articles */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8">
            {filteredResearch.map((article) => (
              <Card key={article.id} className="shadow-lg">
                <CardHeader>
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex-1">
                      <CardTitle className="text-xl text-gray-900 mb-2">
                        {article.title}
                      </CardTitle>
                      <CardDescription>
                        <strong>Authors:</strong> {article.authors}<br />
                        <strong>Journal:</strong> {article.journal} ({article.year})
                      </CardDescription>
                    </div>
                    <div className="flex flex-col gap-2 ml-4">
                      <Badge className="bg-blue-100 text-blue-800">
                        {article.type}
                      </Badge>
                      <Badge variant="outline">
                        {article.pubmedId}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Summary</h4>
                      <p className="text-gray-700">{article.summary}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Key Findings</h4>
                      <ul className="list-disc list-inside space-y-1 text-gray-700">
                        {article.keyFindings.map((finding, index) => (
                          <li key={index}>{finding}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex gap-3 pt-4">
                      <Button variant="outline" size="sm">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        PubMed Abstract
                      </Button>
                      <Button variant="outline" size="sm">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Full Text (if available)
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {filteredResearch.length === 0 && (
            <div className="text-center py-12">
              <BookOpen className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No research found</h3>
              <p className="text-gray-600">Try selecting a different category to view available research.</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HCPResearch;
