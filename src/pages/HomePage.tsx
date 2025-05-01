import React from 'react';
import HeroSection from '../components/HeroSection';
import TrustedBySection from '../components/TrustedBySection';
import DecorativeElements from '../components/DecorativeElements';

const HomePage: React.FC = () => {
  return (
    <div className="relative">
      <DecorativeElements variant="home" />
      <HeroSection />
      <TrustedBySection />
    </div>
  );
};

export default HomePage;