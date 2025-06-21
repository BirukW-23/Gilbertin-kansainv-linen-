import React from 'react';

const TrustedCountries: React.FC = () => {
  const countries = [
    { name: 'Ethiopia', code: 'et' },
    { name: 'Kenya', code: 'ke' },
    { name: 'Pakistan', code: 'pk' },
    { name: 'India', code: 'in' },
    { name: 'Uganda', code: 'ug' },
  ];

  return (
    <div className="bg-[#f6f8fc] py-12">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
        <div className="bg-[#0a1128] text-white p-8 rounded-lg max-w-md">
          <h2 className="text-2xl font-semibold mb-2">Partners around the world</h2>
        </div>
        <div className="flex flex-wrap justify-center gap-10 text-gray-600 text-lg">
          {countries.map((country, idx) => (
            <div key={idx} className="flex items-center space-x-2">
              <img
                src={`https://flagcdn.com/w40/${country.code}.png`}
                alt={country.name}
                className="w-6 h-4 object-cover rounded-sm shadow-sm"
              />
              <span className="font-medium">{country.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustedCountries;
