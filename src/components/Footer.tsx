
import { Leaf } from 'lucide-react';

const Footer = () => {
  const footerLinks = {
    "Services": [
      "Strategic Consulting",
      "Technology Solutions", 
      "Cultivation Services",
      "Global Distribution"
    ],
    "Company": [
      "About Us",
      "Our Team",
      "Careers",
      "News & Updates"
    ],
    "Resources": [
      "Case Studies",
      "White Papers",
      "Industry Reports",
      "Documentation"
    ],
    "Support": [
      "Partner Portal",
      "Technical Support",
      "Training Programs",
      "Contact Us"
    ]
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Leaf className="h-8 w-8 text-emerald-500" />
              <span className="text-xl font-bold">MediFlower NZ</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Leading medical cannabis innovation from New Zealand to the world. 
              Providing expert consulting, cutting-edge technology, and premium 
              cultivation services to B2B partners globally.
            </p>
            <div className="space-y-2">
              <p className="text-gray-400">
                <span className="font-semibold">Email:</span> info@mediflowernz.com
              </p>
              <p className="text-gray-400">
                <span className="font-semibold">Phone:</span> +64 3 123 4567
              </p>
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-lg font-semibold mb-4">{category}</h4>
              <ul className="space-y-2">
                {links.map((link, index) => (
                  <li key={index}>
                    <a href="#" className="text-gray-400 hover:text-emerald-500 transition-colors duration-200">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 MediFlower NZ Ltd. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-emerald-500 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-500 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-500 transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
