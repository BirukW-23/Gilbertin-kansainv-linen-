import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Services = () => {
  return (
    <div className="min-h-screen font-inter bg-gray-50">
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
          Our <span className="text-blue-300">Services</span>
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
          Comprehensive European work visa solutions and premium job placements
          </p>
        </div>
      </section>
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our <span className="text-blue-600">Specializations</span>
            </h2>
            <div className="w-20 h-1 bg-blue-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Premium job placement services across Europe's most in-demand sectors
            </p>
          </div>

          <div className="grid gap-20">
            <div className="grid md:grid-cols-2 gap-12 items-center group">
              <div className="relative h-96 rounded-xl overflow-hidden shadow-2xl transition-all duration-500 group-hover:shadow-blue-500/20">
                <img
                  src="https://images.unsplash.com/photo-1513828583688-c52646db42da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                  alt="Factory Work"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <span className="bg-blue-600 text-xs font-semibold px-3 py-1 rounded-full mb-2 inline-block">
                    Industrial Sector
                  </span>
                  <h3 className="text-2xl font-bold">Factory Work</h3>
                </div>
              </div>
              <div className="transition-all duration-300 group-hover:-translate-y-1">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Factory Positions</h3>
                </div>
                <p className="text-gray-600 mb-6">
                  Modern manufacturing facilities across Finland and Hungary offer excellent opportunities for skilled and entry-level workers. Our factory positions include assembly line work, quality control, packaging, and machine operation.
                </p>
                <ul className="space-y-3">
                  {[
                    "Competitive hourly wages with overtime options",
                    "Safe working environments with EU standards",
                    "Opportunities for skill development and advancement",
                    "Full work visa and relocation support"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start group">
                      <svg className="flex-shrink-0 h-5 w-5 text-blue-500 mr-3 mt-0.5 group-hover:scale-125 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-600 group-hover:text-gray-900 transition-colors">{item}</span>
                    </li>
                  ))}
                </ul>
                <button className="mt-6 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow-md transition-all duration-300 transform hover:scale-105">
                  View Open Positions
                </button>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-12 items-center group">
              <div className="order-1 md:order-2 relative h-96 rounded-xl overflow-hidden shadow-2xl transition-all duration-500 group-hover:shadow-green-500/20">
                <img
                  src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                  alt="Agriculture Work"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <span className="bg-green-600 text-xs font-semibold px-3 py-1 rounded-full mb-2 inline-block">
                    Seasonal Work
                  </span>
                  <h3 className="text-2xl font-bold">Agriculture</h3>
                </div>
              </div>
              <div className="order-2 md:order-1 transition-all duration-300 group-hover:-translate-y-1">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Agriculture Work</h3>
                </div>
                <p className="text-gray-600 mb-6">
                  Seasonal and year-round agricultural work in Finland's fertile farms. From berry picking to greenhouse operations, we connect workers with legitimate agricultural employers offering competitive packages.
                </p>
                <ul className="space-y-3">
                  {[
                    "Seasonal contracts with potential extensions",
                    "Comfortable accommodation often provided",
                    "Experience beautiful Finnish countryside",
                    "Fair wages and regulated working conditions"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start group">
                      <svg className="flex-shrink-0 h-5 w-5 text-green-500 mr-3 mt-0.5 group-hover:scale-125 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-600 group-hover:text-gray-900 transition-colors">{item}</span>
                    </li>
                  ))}
                </ul>
                <button className="mt-6 px-6 py-2 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg shadow-md transition-all duration-300 transform hover:scale-105">
                  Seasonal Opportunities
                </button>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-12 items-center group">
              <div className="relative h-96 rounded-xl overflow-hidden shadow-2xl transition-all duration-500 group-hover:shadow-yellow-500/20">
                <img
                  src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                  alt="Construction Work"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <span className="bg-yellow-600 text-xs font-semibold px-3 py-1 rounded-full mb-2 inline-block">
                    Skilled Labor
                  </span>
                  <h3 className="text-2xl font-bold">Construction</h3>
                </div>
              </div>
              <div className="transition-all duration-300 group-hover:-translate-y-1">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Construction Work</h3>
                </div>
                <p className="text-gray-600 mb-6">
                  Building Europe's future with construction opportunities in both residential and commercial projects. From general labor to specialized trades, we offer positions at all skill levels.
                </p>
                <ul className="space-y-3">
                  {[
                    "Various skill levels welcome with training provided",
                    "Comprehensive safety training and equipment",
                    "Long-term project opportunities available",
                    "Clear career advancement pathways"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start group">
                      <svg className="flex-shrink-0 h-5 w-5 text-yellow-500 mr-3 mt-0.5 group-hover:scale-125 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-600 group-hover:text-gray-900 transition-colors">{item}</span>
                    </li>
                  ))}
                </ul>
                <button className="mt-6 px-6 py-2 bg-yellow-600 hover:bg-yellow-700 text-white font-medium rounded-lg shadow-md transition-all duration-300 transform hover:scale-105">
                  Construction Jobs
                </button>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-12 items-center group">
              <div className="order-1 md:order-2 relative h-96 rounded-xl overflow-hidden shadow-2xl transition-all duration-500 group-hover:shadow-purple-500/20">
                <img
                  src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                  alt="Cleaning Services"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <span className="bg-purple-600 text-xs font-semibold px-3 py-1 rounded-full mb-2 inline-block">
                    Service Sector
                  </span>
                  <h3 className="text-2xl font-bold">Cleaning Services</h3>
                </div>
              </div>
              <div className="order-2 md:order-1 transition-all duration-300 group-hover:-translate-y-1">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Cleaning Positions</h3>
                </div>
                <p className="text-gray-600 mb-6">
                  Professional cleaning positions in offices, hotels, hospitals, and residential complexes. We offer flexible schedules and professional development in the growing service sector.
                </p>
                <ul className="space-y-3">
                  {[
                    "Flexible working hours (day/evening shifts)",
                    "Professional training provided",
                    "Stable employment with regular hours",
                    "Growth opportunities into supervisory roles"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start group">
                      <svg className="flex-shrink-0 h-5 w-5 text-purple-500 mr-3 mt-0.5 group-hover:scale-125 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-600 group-hover:text-gray-900 transition-colors">{item}</span>
                    </li>
                  ))}
                </ul>
                <button className="mt-6 px-6 py-2 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg shadow-md transition-all duration-300 transform hover:scale-105">
                  Service Jobs
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-gradient-to-br from-blue-900 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why <span className="text-blue-300">Gilbertin</span> Stands Out
            </h2>
            <div className="w-20 h-1 bg-blue-300 mx-auto mb-6"></div>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Our comprehensive approach ensures your European work experience is seamless and successful
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                ),
                title: "Verified Employers",
                description: "We partner only with legitimate, verified employers who meet strict European labor standards and regulations.",
                bg: "bg-blue-800/50 hover:bg-blue-800/70"
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                ),
                title: "Accommodation Solutions",
                description: "We help you find safe, affordable housing near your workplace, with options for shared or private living.",
                bg: "bg-blue-800/50 hover:bg-blue-800/70"
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                ),
                title: "Ongoing Support",
                description: "24/7 multilingual support throughout your employment period, including assistance with any workplace issues.",
                bg: "bg-blue-800/50 hover:bg-blue-800/70"
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                ),
                title: "Visa Expertise",
                description: "Complete visa processing and documentation support for various European countries.",
                bg: "bg-blue-800/50 hover:bg-blue-800/70"
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                ),
                title: "Community Network",
                description: "Access to our community of international workers for support and networking.",
                bg: "bg-blue-800/50 hover:bg-blue-800/70"
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                title: "Financial Guidance",
                description: "Assistance with bank accounts, taxes, and financial planning in your new country.",
                bg: "bg-blue-800/50 hover:bg-blue-800/70"
              }
            ].map((benefit, index) => (
              <div 
                key={index} 
                className={`p-8 rounded-xl ${benefit.bg} backdrop-blur-sm border border-blue-700/30 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-2`}
              >
                <div className="w-14 h-14 bg-blue-700/30 rounded-full flex items-center justify-center mb-6 mx-auto text-blue-300">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-center mb-4 text-white">{benefit.title}</h3>
                <p className="text-blue-100 text-center">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our <span className="text-blue-600">Process</span>
            </h2>
            <div className="w-20 h-1 bg-blue-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Simple, transparent steps to your European career journey
            </p>
          </div>
          <div className="relative">
            {/* Timeline bar */}
            <div className="hidden md:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 h-2 w-4/5 bg-blue-100 rounded-full">
              <div className="h-full bg-blue-600 rounded-full w-full transition-all duration-1000 animate-progress"></div>
            </div>
            
            <div className="grid md:grid-cols-4 gap-8 relative z-10">
              {[
                {
                  number: "1",
                  title: "Application",
                  description: "Submit your application with required documents",
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  )
                },
                {
                  number: "2",
                  title: "Matching",
                  description: "We match you with suitable job opportunities",
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  )
                },
                {
                  number: "3",
                  title: "Visa Support",
                  description: "Complete visa processing and documentation",
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  )
                },
                {
                  number: "4",
                  title: "Success",
                  description: "Start your new career in Europe",
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  )
                }
              ].map((step, index) => (
                <div 
                  key={index} 
                  className="text-center bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 group"
                >
                  <div className="w-20 h-20 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold group-hover:bg-blue-700 transition-colors duration-300 relative">
                    <div className="absolute inset-0 rounded-full border-4 border-blue-100 opacity-0 group-hover:opacity-100 animate-ping-slow transition-opacity duration-300"></div>
                    {step.number}
                  </div>
                  <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-600">
                    {step.icon}
                  </div>
                  <h3 className="font-semibold text-lg mb-2 group-hover:text-blue-600 transition-colors duration-300">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;