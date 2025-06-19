import Header from "@/components/Header";
import Footer from "@/components/Footer";

const About = () => {
  const teamMembers = [
    {
      name: "Mikael Virtanen",
      role: "Country Director - Finland",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      description: "15 years experience in international recruitment",
    },
    {
      name: "Anna Kovács",
      role: "Country Director - Hungary",
      image: "https://randomuser.me/api/portraits/women/32.jpg",
      description: "Expert in EU work permit regulations",
    },
    {
      name: "Erik Johansson",
      role: "Operations Manager",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      description: "Specializes in industrial placements",
    },
  ];

  return (
    <div className="min-h-screen font-inter">
      <Header />
      <section
        className="relative py-28 bg-center bg-cover bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            About <span className="text-blue-400">Gilbertin</span>
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Your trusted partner for European work opportunities since 2019
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <p className="text-gray-600 mb-4">
                Gilbertin kansainvälinen työagentti was founded with a simple
                mission: to connect talented individuals with life-changing
                opportunities across Europe. What started as a small placement
                agency has grown into a trusted partner for both workers and
                employers.
              </p>
              <p className="text-gray-600 mb-4">
                With offices strategically located in both Finland and Hungary,
                we have established ourselves as a leading international work
                agency, specializing in various sectors including factory work,
                agriculture, construction, cleaning, and general labor.
              </p>
              <p className="text-gray-600 mb-6">
                Our team of experienced professionals understands the
                complexities of international employment and visa processes,
                ensuring a smooth journey for every client while maintaining the
                highest standards of service.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  <div className="text-2xl font-bold text-blue-600">500+</div>
                  <div className="text-sm text-gray-600">
                    Successful Placements
                  </div>
                </div>
                <div className="text-center p-4 bg-gradient-to-br from-green-50 to-green-100 rounded-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  <div className="text-2xl font-bold text-green-600">5+</div>
                  <div className="text-sm text-gray-600">
                    Years of Excellence
                  </div>
                </div>
              </div>
            </div>
            <div className="relative group">
              <img
                src="https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=600&h=400&fit=crop"
                alt="Modern office building"
                className="rounded-lg shadow-lg w-full transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-blue-600/10 rounded-lg transition-all duration-500 group-hover:bg-blue-600/20"></div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-white to-blue-50 p-8 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-blue-100">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Our Mission
              </h3>
              <p className="text-gray-600">
                To bridge the gap between talented individuals seeking
                opportunities and European employers in need of skilled workers.
                We believe that everyone deserves the chance to build a better
                future, and we make that possible through our comprehensive
                placement and support services.
              </p>
            </div>
            <div className="bg-gradient-to-br from-white to-blue-50 p-8 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-blue-100">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Our Vision
              </h3>
              <p className="text-gray-600">
                To become the leading international work agency in Northern and
                Central Europe, known for our integrity, success rates, and
                unwavering commitment to both workers and employers. We envision
                a future where geographical boundaries don't limit career
                opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600">
              Experienced professionals dedicated to your success
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="text-center bg-gradient-to-b from-white to-blue-50 p-6 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border border-blue-100 group"
              >
                <div className="relative w-24 h-24 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="rounded-full w-full h-full object-cover border-4 border-white shadow-md"
                  />
                  <div className="absolute inset-0 rounded-full border-2 border-blue-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                  {member.name}
                </h3>
                <p className="text-blue-600 font-medium mb-2">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.description}</p>
                
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center bg-white p-8 rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border-t-4 border-blue-500">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 transform hover:rotate-12 transition-transform duration-300">
                <span className="text-blue-600 text-2xl font-bold">P</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Professionalism</h3>
              <p className="text-gray-600">
                We work with pride, delivering high-quality services profitably.
                Our entrepreneurial attitude ensures we are a trusted partner for
                both employees and clients.
              </p>
            </div>
            <div className="text-center bg-white p-8 rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border-t-4 border-green-500">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 transform hover:rotate-12 transition-transform duration-300">
                <span className="text-green-600 text-2xl font-bold">R</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Responsibility</h3>
              <p className="text-gray-600">
                We take full responsibility for our actions, keeping our promises
                and fostering a culture of trust and accountability in all we do.
              </p>
            </div>
            <div className="text-center bg-white p-8 rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border-t-4 border-blue-500">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 transform hover:rotate-12 transition-transform duration-300">
                <span className="text-blue-600 text-2xl font-bold">C</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Courage</h3>
              <p className="text-gray-600">
                We embrace innovation and reform, daring to try new approaches
                and learn from our mistakes to shape the future of working life.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose Gilbertin?
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors duration-300">
                <span className="text-blue-600 text-xl group-hover:scale-110 transition-transform duration-300">
                  🏢
                </span>
              </div>
              <h4 className="font-semibold mb-2 group-hover:text-blue-600 transition-colors duration-300">
                Registered Offices
              </h4>
              <p className="text-gray-600 text-sm">
                Legal operations in both Finland and Hungary
              </p>
            </div>
            <div className="text-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors duration-300">
                <span className="text-green-600 text-xl group-hover:scale-110 transition-transform duration-300">
                  📋
                </span>
              </div>
              <h4 className="font-semibold mb-2 group-hover:text-green-600 transition-colors duration-300">
                Full Documentation
              </h4>
              <p className="text-gray-600 text-sm">
                Complete visa and work permit assistance
              </p>
            </div>
            <div className="text-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors duration-300">
                <span className="text-blue-600 text-xl group-hover:scale-110 transition-transform duration-300">
                  🤝
                </span>
              </div>
              <h4 className="font-semibold mb-2 group-hover:text-blue-600 transition-colors duration-300">
                Partner Network
              </h4>
              <p className="text-gray-600 text-sm">
                Strong relationships with top employers
              </p>
            </div>
            <div className="text-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors duration-300">
                <span className="text-blue-600 text-xl group-hover:scale-110 transition-transform duration-300">
                  🛡️
                </span>
              </div>
              <h4 className="font-semibold mb-2 group-hover:text-blue-600 transition-colors duration-300">
                Ongoing Support
              </h4>
              <p className="text-gray-600 text-sm">
                24/7 assistance throughout your journey
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;