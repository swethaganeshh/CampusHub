import React from 'react';
import { Users, Target, Award, Rocket } from 'lucide-react';
import DecorativeElements from '../components/DecorativeElements';

const AboutPage: React.FC = () => {
  const teamMembers = [
    {
      name: 'Sarah Chen',
      role: 'Founder & CEO',
      image: 'https://images.pexels.com/photos/3796217/pexels-photo-3796217.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      name: 'Michael Rodriguez',
      role: 'Head of Operations',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      name: 'Emily Thompson',
      role: 'Community Lead',
      image: 'https://images.pexels.com/photos/3776932/pexels-photo-3776932.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    }
  ];

  const stats = [
    { icon: Users, label: 'Active Users', value: '50,000+' },
    { icon: Target, label: 'Events Hosted', value: '1,000+' },
    { icon: Award, label: 'Partner Colleges', value: '100+' },
    { icon: Rocket, label: 'Student Projects', value: '5,000+' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <DecorativeElements />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-purple-600 to-pink-500">
        <div className="container mx-auto max-w-4xl text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Empowering the Next Generation of Tech Leaders
          </h1>
          <p className="text-xl text-white/90 mb-8">
            CampusHub connects students with transformative tech experiences, fostering innovation and growth across campuses nationwide.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-white rounded-2xl shadow-xl p-8 -mt-20 relative z-10">
            <h2 className="text-3xl font-bold mb-6 text-center">Our Mission</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              At CampusHub, we believe in the power of connecting students with transformative tech experiences. Our platform serves as a bridge between ambitious students and innovative tech events, fostering a community where learning, networking, and growth happen naturally.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <stat.icon size={40} className="mx-auto mb-4 text-primary" />
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-12 text-center">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                  <p className="text-gray-600">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;