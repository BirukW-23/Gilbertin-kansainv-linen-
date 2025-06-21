import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
const Services = () => {
  const services = [
    {
      title: "Factory Work",
      description:
        "Modern manufacturing facilities across Finland and Hungary offering competitive wages and excellent working conditions.",
      image:
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
      features: [
        "Competitive salary",
        "Modern facilities",
        "Safety training",
        "Career progression",
      ],
    },
    {
      title: "Agriculture",
      description:
        "Seasonal and permanent positions in agricultural sector with accommodation and transportation provided.",
      image:
        "https://media.istockphoto.com/id/1452381098/photo/agronomist-inspecting-soya-bean-crops-growing-in-the-farm-field-agriculture-production.jpg?s=612x612&w=0&k=20&c=AcAXU46SI2G3ti2-sdH08aUiuuNdiPtsXIc4jSnhKpw=",
      features: [
        "Seasonal work",
        "Accommodation included",
        "Transportation",
        "Outdoor environment",
      ],
    },
    {
      title: "Construction",
      description:
        "Building the future with construction positions in major development projects across Europe.",
      image:
        "https://media.istockphoto.com/id/1584787887/photo/construction-workers-working-on-a-construction-site.jpg?s=612x612&w=0&k=20&c=mZQrV05Ktm77xoq7j03z4fRj5JHUilMrQrAI1hUoP48=",
      features: [
        "Major projects",
        "Skill development",
        "Safety certification",
        "Team environment",
      ],
    },
    {
      title: "Cleaning Services",
      description:
        "cleaning positions in offices, hospitals, and commercial buildings with flexible schedules.",
      image:
        "https://elements-resized.envatousercontent.com/envato-dam-assets-production/EVA/TRX/66/0f/b2/c0/34/v1_E10/E1032C7E.jpg?w=500&cf_fit=scale-down&mark-alpha=18&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark4.png&q=85&format=auto&s=84ffc67d37e0b12fa844e6df2507746ed87a9155a82aab461a433d73841ec28b",
      features: [
        "Flexible hours",
        "Professional training",
        "Health benefits",
        "Stable employment",
      ],
    },
    {
      title: "General Labour",
      description:
        "Various entry-level positions perfect for those starting their European career journey.",
      image:
        "https://labourco.ca/wp-content/uploads/2023/05/general-labourer-canada.jpg",
      features: [
        "Entry level",
        "Training provided",
        "Quick start",
        "Growth opportunities",
      ],
    },
    {
      title: "Specialized Roles",
      description:
        "Technical and specialized positions for individuals seeking European opportunities.",
      image:
        "https://images.unsplash.com/photo-1466442929976-97f336a657be?auto=format&fit=crop&w=800&q=80",
      features: [
        "Professional roles",
        "High demand",
        "Excellent pay",
        "Career advancement",
      ],
    },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Jobs <span className="text-blue-600"> we offer</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We specialize in connecting individuals with job opportunities
            across various industries in Finland and Hungary with free
            accommodation food free and medical insurance included.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center text-sm text-gray-600"
                    >
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  variant="outline"
                  className="w-full border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
                >
                  Learn More
                </Button>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Start Your European Career?
          </h3>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of successful professionals who have found their
            dream jobs through Gilbertin.
          </p>
          <Button
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 px-8 py-4 text-lg"
          >
            <Link to="/contact">Apply Now</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
