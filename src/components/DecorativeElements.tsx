import React from 'react';
import { Star, Sparkles, CircleDot } from 'lucide-react';

interface DecorativeElementsProps {
  variant?: 'home' | 'events';
}

const DecorativeElements: React.FC<DecorativeElementsProps> = ({ variant = 'home' }) => {
  return (
    <>
      {/* Top Left */}
      <div className="decorative-element top-20 left-10 md:top-40 md:left-20 animate-float">
        <Star size={24} className="text-primary/30" />
      </div>
      
      {/* Top Right */}
      <div className="decorative-element top-40 right-10 md:top-60 md:right-40 animate-pulse-slow">
        <CircleDot size={20} className="text-secondary/30" />
      </div>
      
      {/* Bottom Left */}
      <div className="decorative-element bottom-20 left-20 md:bottom-40 md:left-40 animate-pulse-slow">
        <Sparkles size={24} className="text-accent/30" />
      </div>
      
      {/* Bottom Right */}
      <div className="decorative-element bottom-40 right-20 md:bottom-60 md:right-40 animate-float">
        <Star size={20} className="text-primary/30" />
      </div>
      
      {variant === 'home' && (
        <>
          {/* Additional elements for home */}
          <div className="decorative-element top-1/3 right-1/4 animate-float delay-300">
            <Star size={16} className="text-secondary/30" />
          </div>
          <div className="decorative-element bottom-1/3 left-1/4 animate-pulse-slow delay-500">
            <CircleDot size={14} className="text-accent/30" />
          </div>
        </>
      )}
    </>
  );
};

export default DecorativeElements;