
import { Card, CardContent } from '@/components/ui/card';
import image1 from '@/assets/vis1.jpg';
import image2 from '@/assets/vis2.jpg'
const SuccessStories = () => {
  const groupStories = [
    {
      title: "Finnish Factory Team Success",
      location: "Tampere, Finland",
      image: image1,
      description: "Our team of 5 workers successfully completed a 6-month contract at a leading electronics factory in Tampere. All team members received permanent positions with competitive salaries.",
      achievements: ["100% Job Retention", "Average Salary: €1,800/month", "Career Advancement: 8/12 promoted"],
      industry: "Electronics Manufacturing"
    },
    {
      title: "Hungarian Construction Crew",
      location: "Budapest, Hungary",
      image: image2,
      description: "A dedicated team of 15 construction workers who built their careers in Hungary's booming construction sector. From foundations to project management roles.",
      achievements: ["Zero Accidents Record", "Average Salary: €1,500/month", "5 Team Leaders Promoted"],
      industry: "Construction & Infrastructure"
    },
    {
      title: "Agricultural Excellence Team",
      location: "Oulu, Finland",
      image: "https://media.istockphoto.com/id/815720696/photo/group-of-passengers-standing-at-airport-lounge.webp?a=1&b=1&s=612x612&w=0&k=20&c=sMVahOGUH7j_yBVKnl26x-VXWh4r0vHvpGxwBcJrmVs=",
      description: "Our agricultural specialists working in Finnish greenhouses, mastering sustainable farming techniques while earning excellent wages and contributing to food security.",
      achievements: ["Sustainable Farming Certified", "Average Salary: €1,600/month", "Contract Extensions: 90%"],
      industry: "Sustainable Agriculture"
    }
  ];

  return (
    <section id="success" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Team Success Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real teams, real success. See how our job placement services have transformed 
            entire groups of workers across Finland and Hungary.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {groupStories.map((story, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={story.image} 
                  alt={story.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold mb-1">{story.title}</h3>
                  <p className="text-sm opacity-90">{story.location}</p>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="mb-4">
                  <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full font-medium">
                    {story.industry}
                  </span>
                </div>
                
                <p className="text-gray-700 text-sm mb-4">
                  {story.description}
                </p>
                
                <div className="space-y-2">
                  {story.achievements.map((achievement, idx) => (
                    <div key={idx} className="flex items-center text-sm">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                      <span className="text-gray-600">{achievement}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-lg p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-gray-600">Workers Placed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">95%</div>
              <div className="text-gray-600">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">50+</div>
              <div className="text-gray-600">Partner Companies</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">24/7</div>
              <div className="text-gray-600">Support</div>
            </div>
          </div>
          
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Join Our Success Stories?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Join hundreds of successful professionals who have transformed their careers 
              through our placement services in Finland and Hungary.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
