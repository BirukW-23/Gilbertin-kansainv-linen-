import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const TrustedCountries: React.FC = () => {
  const [activeCountry, setActiveCountry] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const countries = [
    { name: 'Ethiopia', code: 'et', description: 'Leading our African operations with our partners' },
    { name: 'Kenya', code: 'ke', description: 'Innovation hub with tech collaborations' },
    { name: 'Pakistan', code: 'pk', description: 'Fast-growing market with  strategic alliances' },
    { name: 'India', code: 'in', description: 'Our largest partner network with collaborations' },
    { name: 'Uganda', code: 'ug', description: 'Emerging market with local partnerships' },
  ];
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={containerVariants}
          className="flex flex-col md:flex-row items-center gap-8 md:gap-12"
        >
          <motion.div 
            variants={itemVariants}
            className="bg-[#0a1128] text-white p-8 rounded-xl shadow-lg max-w-md hover:shadow-xl transition-shadow duration-300"
          >
            <h2 className="text-3xl font-bold mb-4">Global Network</h2>
            <p className="text-gray-300 mb-6">
              We partner with innovative organizations across 5 countries and counting
            </p>
            <div className="flex space-x-2">
              {countries.map((country, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveCountry(activeCountry === idx ? null : idx)}
                  className={`w-8 h-6 rounded-sm overflow-hidden transition-transform duration-200 hover:scale-110 ${activeCountry === idx ? 'ring-2 ring-white' : ''}`}
                >
                  <img
                    src={`https://flagcdn.com/w40/${country.code}.png`}
                    alt={country.name}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="flex-1 grid grid-cols-2 md:grid-cols-3 gap-6"
          >
            {countries.map((country, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                onClick={() => setActiveCountry(idx)}
                className={`bg-white p-6 rounded-lg shadow-md cursor-pointer transition-all duration-300 ${activeCountry === idx ? 'ring-2 ring-[#0a1128]' : 'hover:shadow-lg'}`}
              >
                <div className="flex items-center space-x-3 mb-3">
                  <img
                    src={`https://flagcdn.com/w40/${country.code}.png`}
                    alt={country.name}
                    className="w-8 h-6 object-cover rounded-sm shadow-sm"
                  />
                  <h3 className="font-bold text-lg text-gray-800">{country.name}</h3>
                </div>
                {(activeCountry === idx || activeCountry === null) && (
                  <motion.p 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="text-gray-600 text-sm"
                  >
                    {country.description}
                  </motion.p>
                )}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {activeCountry !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-12 bg-white p-6 rounded-xl shadow-lg max-w-3xl mx-auto"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold flex items-center space-x-3">
                <img
                  src={`https://flagcdn.com/w40/${countries[activeCountry].code}.png`}
                  alt={countries[activeCountry].name}
                  className="w-8 h-6 object-cover rounded-sm"
                />
                <span>Our Partners in {countries[activeCountry].name}</span>
              </h3>
              <button 
                onClick={() => setActiveCountry(null)}
                className="text-gray-500 hover:text-gray-700"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <p className="text-gray-700 mb-4">
              {countries[activeCountry].description}. We've been working with partners in {countries[activeCountry].name} since 2018, establishing strong local networks and delivering exceptional results.
            </p>
            <div className="flex space-x-4 mt-6">
              <button className="px-4 py-2 bg-[#0a1128] text-white rounded-md hover:bg-opacity-90 transition">
                View Case Studies
              </button>
              <button className="px-4 py-2 border border-[#0a1128] text-[#0a1128] rounded-md hover:bg-gray-100 transition">
                Become a Partner
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default TrustedCountries;