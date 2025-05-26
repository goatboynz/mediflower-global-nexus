
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Shield, Mail, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const HCPLogin = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('HCP Login submitted:', formData);
    // Handle login logic here - redirect to HCP Dashboard
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <Header />
      
      <section className="py-20">
        <div className="max-w-lg mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <Shield className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              HCP Portal Login
            </h1>
          </div>

          <Card className="shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Healthcare Professional Access</CardTitle>
              <CardDescription className="text-center">
                Login to access the MediFlower NZ HCP Portal
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Mail className="h-4 w-4 inline mr-2" />
                    Email Address
                  </label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    required
                    placeholder="Enter your email address"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Lock className="h-4 w-4 inline mr-2" />
                    Password
                  </label>
                  <Input
                    type="password"
                    value={formData.password}
                    onChange={(e) => setFormData({...formData, password: e.target.value})}
                    required
                    placeholder="Enter your password"
                  />
                </div>

                <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 py-3">
                  Login
                </Button>
              </form>

              <div className="mt-6 space-y-2 text-center">
                <p>
                  <a href="#" className="text-sm text-blue-600 hover:text-blue-500">
                    Forgot Password?
                  </a>
                </p>
                <p className="text-sm text-gray-600">
                  Not Registered?{' '}
                  <Link to="/hcp-registration" className="text-blue-600 hover:text-blue-500">
                    Request Access Here
                  </Link>
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

export default HCPLogin;
