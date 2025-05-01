import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ActivitySquare, Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const navbarClasses = `fixed w-full z-50 transition-all duration-300 ${
    scrolled 
      ? 'bg-white/90 backdrop-blur-md shadow-md py-3' 
      : 'bg-transparent py-5'
  }`;

  const linkClasses = (path: string) => 
    `font-medium transition-colors duration-300 hover:text-primary ${
      location.pathname === path 
        ? 'text-primary' 
        : scrolled ? 'text-gray-800' : 'text-gray-800'
    }`;

  return (
    <nav className={navbarClasses}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <Link 
            to="/" 
            className="flex items-center space-x-2 text-xl font-bold"
            onClick={closeMenu}
          >
            <ActivitySquare 
              size={28}
              className="text-primary" 
            />
            <span className={`font-bold ${scrolled ? 'text-gray-800' : 'text-gray-800'}`}>
              CampusHub
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className={linkClasses('/')}>Home</Link>
            <Link to="/about" className={linkClasses('/about')}>About Us</Link>
            <Link to="/exhibitors" className={linkClasses('/exhibitors')}>Exhibitors</Link>
            <Link to="/sponsors" className={linkClasses('/sponsors')}>Sponsors</Link>
            <Link to="/blogs" className={linkClasses('/blogs')}>Blogs</Link>
            <Link to="/contact" className={linkClasses('/contact')}>Contact Us</Link>
            <Link 
              to="/events" 
              className="btn-primary"
            >
              Get a Ticket
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMenu} 
            className="md:hidden text-gray-800"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`md:hidden absolute left-0 right-0 top-full bg-white shadow-lg transition-transform duration-300 ease-in-out ${
            isOpen ? 'translate-y-0' : '-translate-y-full'
          }`}
        >
          <div className="flex flex-col space-y-4 p-6">
            <Link to="/" className="text-gray-800 font-medium" onClick={closeMenu}>Home</Link>
            <Link to="/about" className="text-gray-800 font-medium" onClick={closeMenu}>About Us</Link>
            <Link to="/exhibitors" className="text-gray-800 font-medium" onClick={closeMenu}>Exhibitors</Link>
            <Link to="/sponsors" className="text-gray-800 font-medium" onClick={closeMenu}>Sponsors</Link>
            <Link to="/blogs" className="text-gray-800 font-medium" onClick={closeMenu}>Blogs</Link>
            <Link to="/contact" className="text-gray-800 font-medium" onClick={closeMenu}>Contact Us</Link>
            <Link 
              to="/events" 
              className="btn-primary text-center"
              onClick={closeMenu}
            >
              Get a Ticket
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;