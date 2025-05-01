import React from 'react';
import { Diamond, Shield, Star } from 'lucide-react';
import DecorativeElements from '../components/DecorativeElements';

const SponsorsPage: React.FC = () => {
  const sponsorTiers = [
    {
      icon: Diamond,
      name: 'Diamond',
      price: '$10,000',
      benefits: [
        'Premium booth location',
        'Keynote speaking opportunity',
        'VIP networking session',
        'Logo on all marketing materials',
        'Social media promotion',
        '10 VIP passes'
      ]
    },
    {
      icon: Shield,
      name: 'Platinum',
      price: '$5,000',
      benefits: [
        'Prime booth location',
        'Panel participation',
        'Branded workshop session',
        'Logo on website',
        '5 VIP passes'
      ]
    },
    {
      icon: Star,
      name: 'Gold',
      price: '$2,500',
      benefits: [
        'Standard booth',
        'Company presentation',
        'Logo on website',
        '3 VIP passes'
      ]
    }
  ];

  const currentSponsors = [
    {
      name: "Tech Innovation Hub",
      image: "https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      tier: "Diamond"
    },
    {
      name: "Future Labs",
      image: "https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      tier: "Diamond"
    },
    {
      name: "AI Solutions",
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      tier: "Platinum"
    },
    {
      name: "Cloud Systems",
      image: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      tier: "Platinum"
    },
    {
      name: "Dev Tools Co",
      image: "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      tier: "Gold"
    },
    {
      name: "Startup Accelerator",
      image: "https://images.pexels.com/photos/6330644/pexels-photo-6330644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      tier: "Gold"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <DecorativeElements />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-purple-600 to-pink-500">
        <div className="container mx-auto max-w-4xl text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Partner With Us
          </h1>
          <p className="text-xl text-white/90">
            Join our mission to empower the next generation of tech leaders through meaningful partnerships.
          </p>
        </div>
      </section>

      {/* Sponsorship Tiers */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {sponsorTiers.map((tier, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="text-center mb-6">
                  <tier.icon size={48} className="mx-auto mb-4 text-primary" />
                  <h2 className="text-2xl font-bold mb-2">{tier.name}</h2>
                  <p className="text-3xl font-bold text-primary">{tier.price}</p>
                </div>
                <ul className="space-y-4">
                  {tier.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center">
                      <Star size={16} className="text-primary mr-2" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
                <button className="w-full btn-primary mt-8">
                  Select {tier.name}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Sponsors */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Current Sponsors</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {currentSponsors.map((sponsor, index) => (
              <div 
                key={index} 
                className="group relative rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <img 
                  src={sponsor.image} 
                  alt={sponsor.name}
                  className="w-full aspect-video object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-4">
                  <span className="text-white font-semibold text-lg">{sponsor.name}</span>
                  <span className="text-white/80 text-sm">{sponsor.tier} Sponsor</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default SponsorsPage;