
import { useState } from 'react';
import { Menu, X, Leaf, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();

  const serviceItems = [
    { name: 'Premium Cultivation', href: '/premium-cultivation' },
    { name: 'Expert Consulting', href: '/expert-consulting' },
    { name: 'Custom Technology', href: '/custom-technology' },
    { name: 'Manufacturing', href: '/manufacturing' },
    { name: 'Distribution', href: '/distribution' },
    { name: 'Quality & Compliance', href: '/quality-compliance' },
    { name: 'Research & Development', href: '/research-development' },
    { name: 'Sustainability', href: '/sustainability-initiatives' },
  ];

  const mainNavItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Contact & Partnerships', href: '/contact-partnerships' },
  ];

  const isInternalRoute = (href: string) => href.startsWith('/');

  return (
    <header className="bg-white/95 backdrop-blur-sm shadow-lg sticky top-0 z-50 border-b border-emerald-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="p-2 bg-emerald-50 rounded-xl group-hover:bg-emerald-100 transition-colors">
              <Leaf className="h-8 w-8 text-emerald-600" />
            </div>
            <div>
              <span className="text-2xl font-bold text-gray-900">MediFlower NZ</span>
              <div className="text-xs text-emerald-600 font-medium">Medical Cannabis Solutions</div>
            </div>
          </Link>
          
          <nav className="hidden lg:flex items-center space-x-1">
            {mainNavItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-4 py-2 rounded-lg text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 transition-all duration-200 font-medium ${
                  location.pathname === item.href ? 'text-emerald-600 bg-emerald-50' : ''
                }`}
              >
                {item.name}
              </Link>
            ))}
            
            <div className="relative">
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="flex items-center px-4 py-2 rounded-lg text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 transition-all duration-200 font-medium"
              >
                Services
                <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isServicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50">
                  {serviceItems.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={`block px-4 py-3 text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 transition-colors ${
                        location.pathname === item.href ? 'text-emerald-600 bg-emerald-50' : ''
                      }`}
                      onClick={() => setIsServicesOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </nav>

          <div className="hidden lg:flex items-center space-x-3">
            <Button variant="outline" className="border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-50 px-6 py-2 font-semibold">
              Partner Portal
            </Button>
            <Button className="bg-emerald-600 hover:bg-emerald-700 px-6 py-2 font-semibold shadow-lg">
              Get Consultation
            </Button>
          </div>

          <button
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-100 mt-4">
            <div className="py-4 space-y-2">
              {mainNavItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block px-4 py-3 rounded-lg text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 ${
                    location.pathname === item.href ? 'text-emerald-600 bg-emerald-50 font-medium' : ''
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              
              <div className="px-4 py-2">
                <div className="text-sm font-semibold text-gray-900 mb-2">Services</div>
                <div className="pl-4 space-y-1">
                  {serviceItems.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={`block py-2 text-gray-600 hover:text-emerald-600 ${
                        location.pathname === item.href ? 'text-emerald-600 font-medium' : ''
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
              
              <div className="pt-4 space-y-3 px-4">
                <Button variant="outline" className="w-full border-2 border-emerald-600 text-emerald-600 font-semibold">
                  Partner Portal
                </Button>
                <Button className="w-full bg-emerald-600 hover:bg-emerald-700 font-semibold">
                  Get Consultation
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
