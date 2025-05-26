import { useState } from 'react';
import { Menu, X, Leaf } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '#services' },
    { name: 'Premium Cultivation', href: '/premium-cultivation' },
    { name: 'Expert Consulting', href: '/expert-consulting' },
    { name: 'Custom Technology', href: '/custom-technology' },
    { name: 'Solutions', href: '#solutions' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '#contact' },
  ];

  const isInternalRoute = (href: string) => href.startsWith('/');

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Leaf className="h-8 w-8 text-emerald-600" />
            <span className="text-xl font-bold text-gray-900">MediFlower NZ</span>
          </Link>
          
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              isInternalRoute(item.href) ? (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-gray-700 hover:text-emerald-600 transition-colors duration-200 ${
                    location.pathname === item.href ? 'text-emerald-600 font-medium' : ''
                  }`}
                >
                  {item.name}
                </Link>
              ) : (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-emerald-600 transition-colors duration-200"
                >
                  {item.name}
                </a>
              )
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" className="border-emerald-600 text-emerald-600 hover:bg-emerald-50">
              Partner Portal
            </Button>
            <Button className="bg-emerald-600 hover:bg-emerald-700">
              Get Consultation
            </Button>
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              {navItems.map((item) => (
                isInternalRoute(item.href) ? (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`block px-3 py-2 text-gray-700 hover:text-emerald-600 ${
                      location.pathname === item.href ? 'text-emerald-600 font-medium' : ''
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block px-3 py-2 text-gray-700 hover:text-emerald-600"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                )
              ))}
              <div className="pt-4 space-y-2">
                <Button variant="outline" className="w-full border-emerald-600 text-emerald-600">
                  Partner Portal
                </Button>
                <Button className="w-full bg-emerald-600 hover:bg-emerald-700">
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
