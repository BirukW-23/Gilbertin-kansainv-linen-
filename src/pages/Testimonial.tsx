import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Testimonial = () => {
  const testimonials = [
    {
      name: "Maria Rodriguez",
      job: "Factory Worker",
      country: "Finland",
      image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=300&h=300&fit=crop&crop=face",
      text: "Gilbertin helped me find a great factory job in Finland. The visa process was smooth and the support was excellent throughout my journey.",
      rating: 5
    },
    {
      name: "Ahmed Hassan",
      job: "Construction Worker",
      country: "Hungary",
      image: "https://randomuser.me/api/portraits/men/45.jpg",
      text: "I've been working in construction in Budapest for 2 years now thanks to Gilbertin. They truly care about their clients' success.",
      rating: 5
    },
    {
      name: "Anna Kowalski",
      job: "Agriculture Worker",
      country: "Finland",
      image: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=300&h=300&fit=crop&crop=face",
      text: "The agricultural work in Finnish farms has been a wonderful experience. Gilbertin made everything possible for me and my family.",
      rating: 4
    },
    {
      name: "Viktor Petrov",
      job: "Cleaning Supervisor",
      country: "Hungary",
      image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=300&h=300&fit=crop&crop=face",
      text: "Started as a cleaner and now I'm a supervisor. Gilbertin not only found me work but helped me grow in my career.",
      rating: 5
    },
    {
      name: "Fatima Al-Zahra",
      job: "Factory Supervisor",
      country: "Finland",
      image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=300&h=300&fit=crop&crop=face",
      text: "Three years ago I came to Finland through Gilbertin. Now I supervise a team of 15 people. Dreams do come true with the right support.",
      rating: 5
    },
    {
      name: "Carlos Mendoza",
      job: "Construction Manager",
      country: "Hungary",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&h=300&fit=crop&crop=face",
      text: "From general laborer to construction manager in 4 years. Gilbertin's network and support made this career growth possible.",
      rating: 5
    },
  ];

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
          Success <span className="text-blue-300">Stories</span>
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
          Real stories from real people who transformed their lives through European work opportunities
          </p>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: "500+", label: "Success Stories", color: "text-blue-600" },
              { value: "95%", label: "Job Retention Rate", color: "text-green-600" },
              { value: "2", label: "Countries", color: "text-blue-600" },
              { value: "5", label: "Years Experience", color: "text-green-600" }
            ].map((stat, index) => (
              <div 
                key={index} 
                className="text-center p-6 bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 border border-gray-100"
              >
                <div className={`text-4xl font-bold ${stat.color} mb-2 transition-all duration-500 hover:scale-110 inline-block`}>
                  {stat.value}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <div className="w-20 h-1 bg-blue-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from those who made their European dreams come true
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 group"
              >
                <div className="flex items-center mb-6">
                  <div className="relative">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover mr-4 border-4 border-white shadow-md group-hover:border-blue-200 transition-all duration-300"
                    />
                    <div className="absolute -bottom-1 -right-1 bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">
                      {testimonial.rating}
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {testimonial.name}
                    </h3>
                    <p className="text-blue-600 text-sm">{testimonial.job}</p>
                    <p className="text-gray-500 text-sm flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {testimonial.country}
                    </p>
                  </div>
                </div>
                <p className="text-gray-600 italic relative pl-6 before:absolute before:left-0 before:top-0 before:h-full before:w-1 before:bg-blue-500 before:rounded-full">
                  "{testimonial.text}"
                </p>
                <div className="flex mt-6">
                  {[...Array(5)].map((_, i) => (
                    <span 
                      key={i} 
                      className={`text-sm ${i < testimonial.rating ? "text-yellow-400" : "text-gray-300"}`}
                    >
                      ★
                    </span>
                  ))}
                </div>
                <div className="mt-4 flex space-x-2">
                  {testimonial.job.includes("Factory") && (
                    <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">Industrial</span>
                  )}
                  {testimonial.job.includes("Construction") && (
                    <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded">Construction</span>
                  )}
                  {testimonial.job.includes("Agriculture") && (
                    <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Agriculture</span>
                  )}
                  {testimonial.job.includes("Cleaning") && (
                    <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded">Service</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Career Growth Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Career Growth Stories
            </h2>
            <div className="w-20 h-1 bg-blue-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how our clients advanced in their careers
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                value: "60%",
                title: "Career Advancement",
                description: "Of our clients get promoted within 2 years",
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                ),
                color: "bg-blue-100 text-blue-600"
              },
              {
                value: "40%",
                title: "Salary Increase",
                description: "Average salary increase within first year",
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                color: "bg-green-100 text-green-600"
              },
              {
                value: "85%",
                title: "Long-term Success",
                description: "Stay in their positions for 3+ years",
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                ),
                color: "bg-blue-100 text-blue-600"
              }
            ].map((stat, index) => (
              <div 
                key={index} 
                className="text-center p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
              >
                <div className={`w-20 h-20 ${stat.color} rounded-full flex items-center justify-center mx-auto mb-6 transition-all duration-500 hover:rotate-6`}>
                  {stat.icon}
                </div>
                <div className={`text-3xl font-bold ${stat.color.replace('bg-', 'text-')} mb-2`}>
                  {stat.value}
                </div>
                <h3 className="text-xl font-semibold mb-2">{stat.title}</h3>
                <p className="text-gray-600">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Testimonial;