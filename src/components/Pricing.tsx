
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Pricing = () => {
  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Simple, fair pricing for professional job placement services. 
            No hidden fees, no surprises - just results.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="relative hover:shadow-2xl transition-all duration-300 border-2 border-gray-200">
            <CardHeader className="text-center pb-8">
              <CardTitle className="text-2xl font-bold text-gray-900">
                Individual Registration
              </CardTitle>
              <CardDescription className="text-gray-600 mt-2">
                Perfect for individual job seekers
              </CardDescription>
              <div className="mt-6">
                <div className="text-5xl font-bold text-blue-600">$250</div>
                <div className="text-gray-500 mt-2">One-time registration fee</div>
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  <span className="text-gray-700">Complete job matching service</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  <span className="text-gray-700">Work visa assistance</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  <span className="text-gray-700">Document preparation support</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  <span className="text-gray-700">Interview preparation</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  <span className="text-gray-700">Ongoing support for 6 months</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  <span className="text-gray-700">Access to both Finland & Hungary jobs</span>
                </li>
              </ul>
              <Button className="w-full bg-blue-600 hover:bg-blue-700 py-3">
                Register Now
              </Button>
            </CardContent>
          </Card>
          <Card className="relative hover:shadow-2xl transition-all duration-300 border-2 border-green-500 bg-gradient-to-br from-green-50 to-blue-50">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <div className="bg-green-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
                50% OFF
              </div>
            </div>
            <CardHeader className="text-center pb-8 pt-8">
              <CardTitle className="text-2xl font-bold text-gray-900">
                Agency Partnership
              </CardTitle>
              <CardDescription className="text-gray-600 mt-2">
                Special pricing for recruitment agencies
              </CardDescription>
              <div className="mt-6">
                <div className="flex items-center justify-center space-x-2">
                  <div className="text-2xl text-gray-400 line-through">$250</div>
                  <div className="text-5xl font-bold text-green-600">$130</div>
                </div>
                <div className="text-gray-500 mt-2">Per registration</div>
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                  <span className="text-gray-700">All individual features included</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                  <span className="text-gray-700">Bulk registration discounts</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                  <span className="text-gray-700">Dedicated account manager</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                  <span className="text-gray-700">Priority job placement</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                  <span className="text-gray-700">White-label service options</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                  <span className="text-gray-700">Extended 12-month support</span>
                </li>
              </ul>
              <Button className="w-full bg-green-600 hover:bg-green-700 py-3">
                Partner With Us
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              What's Included in Every Registration
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-2xl">📋</div>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Complete Documentation</h4>
                <p className="text-sm text-gray-600">We handle all paperwork and visa applications</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-2xl">🎯</div>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Perfect Job Match</h4>
                <p className="text-sm text-gray-600">AI-powered matching to find your ideal position</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-2xl">🤝</div>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Ongoing Support</h4>
                <p className="text-sm text-gray-600">Continued assistance throughout your journey</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
