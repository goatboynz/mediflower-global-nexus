
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Shield, User, Mail, Lock, Building, IdCard } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const HCPRegistration = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    medicalCouncilNumber: '',
    clinicHospitalName: '',
    email: '',
    password: '',
    confirmPassword: '',
    isRegisteredHCP: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('HCP Registration submitted:', formData);
    // Handle registration logic here
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <Header />
      
      <section className="py-20">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <Shield className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Register for Access to the MediFlower NZ HCP Portal
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              This portal provides resources and information on medicinal cannabis for registered 
              healthcare professionals in New Zealand. Please complete the form below to request 
              access. Verification of credentials will be required.
            </p>
          </div>

          <Card className="shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Healthcare Professional Registration</CardTitle>
              <CardDescription className="text-center">
                Complete all fields to request access to the HCP Portal
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <User className="h-4 w-4 inline mr-2" />
                    Full Name *
                  </label>
                  <Input
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                    required
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <IdCard className="h-4 w-4 inline mr-2" />
                    Medical Council Number *
                  </label>
                  <Input
                    type="text"
                    value={formData.medicalCouncilNumber}
                    onChange={(e) => setFormData({...formData, medicalCouncilNumber: e.target.value})}
                    required
                    placeholder="Professional registration ID"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Building className="h-4 w-4 inline mr-2" />
                    Clinic/Hospital Name *
                  </label>
                  <Input
                    type="text"
                    value={formData.clinicHospitalName}
                    onChange={(e) => setFormData({...formData, clinicHospitalName: e.target.value})}
                    required
                    placeholder="Your practice or hospital name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Mail className="h-4 w-4 inline mr-2" />
                    Email Address *
                  </label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    required
                    placeholder="Professional email address"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Lock className="h-4 w-4 inline mr-2" />
                    Create Password *
                  </label>
                  <Input
                    type="password"
                    value={formData.password}
                    onChange={(e) => setFormData({...formData, password: e.target.value})}
                    required
                    placeholder="Create a secure password"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Lock className="h-4 w-4 inline mr-2" />
                    Confirm Password *
                  </label>
                  <Input
                    type="password"
                    value={formData.confirmPassword}
                    onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
                    required
                    placeholder="Confirm your password"
                  />
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="hcp-confirmation"
                    checked={formData.isRegisteredHCP}
                    onCheckedChange={(checked) => setFormData({...formData, isRegisteredHCP: !!checked})}
                  />
                  <label htmlFor="hcp-confirmation" className="text-sm text-gray-700">
                    I confirm I am a registered healthcare professional in New Zealand
                  </label>
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-blue-600 hover:bg-blue-700 py-3"
                  disabled={!formData.isRegisteredHCP}
                >
                  Request Access
                </Button>
              </form>

              <div className="mt-6 text-center">
                <p className="text-sm text-gray-600">
                  Already have access?{' '}
                  <a href="/hcp-login" className="text-blue-600 hover:text-blue-500">
                    Login here
                  </a>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HCPRegistration;
