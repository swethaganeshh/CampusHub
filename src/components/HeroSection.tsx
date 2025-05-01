import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, MapPin } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen pt-24 pb-16 overflow-hidden gradient-bg text-white">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left Side - Image */}
          <div className="order-2 lg:order-1 flex justify-center lg:justify-start">
            <div className="relative">
              <div className="absolute -inset-1 bg-white/20 rounded-3xl blur-md"></div>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/20">
                <img 
                  src="https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Tech Conference" 
                  className="w-full h-[400px] lg:h-[500px] object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-secondary/30 rounded-full blur-xl"></div>
              <div className="absolute -top-4 -left-4 w-32 h-32 bg-primary/30 rounded-full blur-xl"></div>
            </div>
          </div>
          
          {/* Right Side - Content */}
          <div className="order-1 lg:order-2 text-center lg:text-left slide-up">
            <div className="mb-6">
              <span className="inline-block py-1 px-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/80 text-sm mb-4">
                CampusHub 2025
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
                Fuel <span className="text-primary-light">Innovation</span>,<br />
                Spark <span className="text-secondary-light">Connection</span>
              </h1>
              <p className="text-lg md:text-xl text-white/80 max-w-xl mx-auto lg:mx-0">
                Discover breakthrough ideas, connect with experts, and unlock the future of technology.
              </p>
            </div>
            
            {/* Featured Event Box */}
            <div className="mt-10 max-w-md mx-auto lg:mx-0">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-lg">
                <h3 className="text-xl font-semibold mb-2">
                  Unleashing the Power of Change
                </h3>
                <div className="flex flex-col md:flex-row md:items-center gap-3 mb-4">
                  <div className="flex items-center">
                    <Calendar size={16} className="mr-2" />
                    <span>April 24, 2025</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin size={16} className="mr-2" />
                    <span>Ballroom Extra Hotel</span>
                  </div>
                </div>
                <Link 
                  to="/events" 
                  className="block w-full py-3 text-center bg-white text-primary font-semibold rounded-lg transition duration-300 hover:bg-primary-light hover:text-white"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;