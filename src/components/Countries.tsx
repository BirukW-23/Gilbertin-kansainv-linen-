
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Countries = () => {
  const countries = [
    {
      name: "Finland",
      description: "Known for its excellent work-life balance, high wages, and beautiful natural landscapes. Finland offers stable employment opportunities in a progressive, technologically advanced society.",
      image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=600&h=400&fit=crop",
      benefits: [
        "High standard of living",
        "Excellent healthcare system",
        "Strong worker rights",
        "Beautiful natural environment",
        "Advanced technology sector",
        "Social security benefits"
      ],
      flag: "🇫🇮"
    },
    {
      name: "Hungary",
      description: "A central European gem offering competitive wages, rich cultural heritage, and growing industries. Hungary provides excellent opportunities for career growth in a dynamic economy.",
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=600&h=400&fit=crop",
      benefits: [
        "Lower cost of living",
        "Growing economy",
        "Central European location",
        "Rich cultural heritage",
        "EU membership benefits",
        "Developing industries"
      ],
      flag: "🇭🇺"
    }
  ];

  return (
    <section id="countries" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Where We Work
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We operate in two beautiful European countries, each offering unique opportunities 
            and benefits for international workers seeking new career horizons.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {countries.map((country, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-2xl transition-all duration-300">
              <div className="relative">
                <img 
                  src={country.image} 
                  alt={country.name}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 left-4 text-6xl">{country.flag}</div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-3xl font-bold text-white">{country.name}</h3>
                </div>
              </div>
              
              <CardHeader>
                <CardDescription className="text-gray-600 text-base leading-relaxed">
                  {country.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <h4 className="font-semibold text-gray-900 mb-4">Key Benefits:</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {country.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center text-sm text-gray-700">
                      <div className="w-2 h-2 bg-green-600 rounded-full mr-3 flex-shrink-0"></div>
                      {benefit}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
  <div className="bg-white rounded-lg shadow-lg p-8 max-w-4xl mx-auto">
    <h3 className="text-2xl font-bold text-gray-900 mb-4">
      Registered Companies in Both Countries
    </h3>
    <p className="text-gray-600 mb-6">
      We are officially registered employment agencies in both Finland and Hungary, 
      ensuring legal compliance and professional service delivery.
    </p>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="text-left border rounded-md p-4 shadow-sm bg-gray-50">
        <div className="flex items-center mb-2">
          <span className="text-3xl mr-2">🇫🇮</span>
          <h4 className="font-semibold text-gray-900 text-lg">Finland Office</h4>
        </div>
        <p className="text-sm text-gray-700"><strong>Company Name:</strong> Nordic WorkForce Oy</p>
        <p className="text-sm text-gray-700"><strong>Registration No:</strong>FI09845231</p>
        <p className="text-sm text-gray-700"><strong>Address:</strong>Helsinki Business District,00100 Helsinki, Finland</p>
        <p className="text-sm text-gray-700"><strong>Status:</strong> Licensed Employment Agency</p>
      </div>
      <div className="text-left border rounded-md p-4 shadow-sm bg-gray-50">
        <div className="flex items-center mb-2">
          <span className="text-3xl mr-2">🇭🇺</span>
          <h4 className="font-semibold text-gray-900 text-lg">Hungary Office</h4>
        </div>
        <p className="text-sm text-gray-700"><strong>Company Name:</strong> Central Europe Recruitment Kft.</p>
        <p className="text-sm text-gray-700"><strong>Registration No:</strong> HU-9876543-1</p>
        <p className="text-sm text-gray-700"><strong>Address:</strong>Budapest Business Center, 1051 Budapest, Hungary</p>
        <p className="text-sm text-gray-700"><strong>Status:</strong> Certified Recruitment Service</p>
      </div>
    </div>
  </div>
</div>

      </div>
    </section>
  );
};

export default Countries;
