import { Link } from "react-router-dom";
const Footer = () => {
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">G</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Gilbertin</h3>
                <p className="text-gray-400">kansainvälinen työagentti</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Professional work visa and job placement services connecting
              individuals with opportunities in Finland and Hungary.
              Your trusted partner for European employment.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3 grid">
              <Link
                to="/"
                className={`transition-colors ${
                  isActive("/")
                    ? "text-blue-600 font-medium"
                    : "text-gray-700 hover:text-blue-600"
                }`}
              >
                Home
              </Link>
              <Link
                to="/about"
                className={`transition-colors ${
                  isActive("/about")
                    ? "text-blue-600 font-medium"
                    : "text-gray-700 hover:text-blue-600"
                }`}
              >
                About Us
              </Link>
              <Link
                to="/services"
                className={`transition-colors ${
                  isActive("/services")
                    ? "text-blue-600 font-medium"
                    : "text-gray-700 hover:text-blue-600"
                }`}
              >
                Services
              </Link>
              <Link
                to="/testimonial"
                className={`transition-colors ${
                  isActive("/testimonial")
                    ? "text-blue-600 font-medium"
                    : "text-gray-700 hover:text-blue-600"
                }`}
              >
                Testimonials
              </Link>
              <Link
                to="/contact"
                className={`transition-colors ${
                  isActive("/contact")
                    ? "text-blue-600 font-medium"
                    : "text-gray-700 hover:text-blue-600"
                }`}
              >
                Contact
              </Link>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="text-blue-400 mt-1">🇫🇮</div>
                <div>
                  <div className="font-medium">Finland Office</div>
                  <div className="text-gray-300 text-sm">Helsinki Business District,00100 Helsinki, Finland</div>
                  <div className="text-gray-300 text-sm">+358 9 876 5432</div>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="text-blue-400 mt-1">🇭🇺</div>
                <div>
                  <div className="font-medium">Hungary Office</div>
                  <div className="text-gray-300 text-sm">Budapest Business Center, 1051 Budapest, Hungary</div>
                  <div className="text-gray-300 text-sm">+36 1 234 5678</div>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="text-blue-400 mt-1">📧</div>
                <div>
                  <div className="text-gray-300 text-sm">
                  info@kansainvalinentyo.com
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 Gilbertin kansainvälinen työagentti. All rights reserved. |
            Registered employment agency in Finland and Hungary.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
