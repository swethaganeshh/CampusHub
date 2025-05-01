import React from 'react';

const TrustedBySection: React.FC = () => {
  const companies = [
    {
      id: 1,
      image: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      name: "Tech Innovation Summit"
    },
    {
      id: 2,
      image: "https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      name: "Developer Conference"
    },
    {
      id: 3,
      image: "https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      name: "AI Symposium"
    },
    {
      id: 4,
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      name: "Robotics Workshop"
    },
    {
      id: 5,
      image: "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      name: "Startup Meetup"
    },
    {
      id: 6,
      image: "https://images.pexels.com/photos/6330644/pexels-photo-6330644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      name: "Game Dev Summit"
    }
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-purple-50 to-white">
      <div className="container mx-auto">
        <h2 className="text-center mb-12">
          <span className="text-primary font-bold text-2xl md:text-3xl">Trusted by </span>
          <span className="text-gray-900 font-bold text-2xl md:text-3xl">15,000+ </span>
          <span className="text-primary font-bold text-2xl md:text-3xl">Organizations</span>
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {companies.map((company) => (
            <div 
              key={company.id} 
              className="bg-white rounded-xl shadow-md overflow-hidden transition duration-300 hover:shadow-lg group"
            >
              <div className="aspect-square relative">
                <img 
                  src={company.image} 
                  alt={company.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-sm font-medium text-center px-2">{company.name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBySection;