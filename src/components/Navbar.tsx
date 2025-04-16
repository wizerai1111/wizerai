import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleSectionClick = (sectionId: string) => {
    if (location.pathname === '/') {
      // If we're on the home page, scroll to the section
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        // Update URL without page reload
        window.history.pushState(null, '', `#${sectionId}`);
      }
    } else {
      // If we're on another page, navigate to home with hash
      navigate(`/#${sectionId}`);
    }
  };

  return (
    <header className="bg-white shadow-sm fixed w-full top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/">
            <img 
              src="https://static.readdy.ai/image/7d8beb85d8ebd3e9bf548cb44f2d5616/053d7dcdb45e8c6d6f0bacab19090caa.png" 
              alt="Wizer AI Logo" 
              className="h-8" 
            />
          </Link>
        </div>
        <div className="flex items-center space-x-8">
          <nav className="hidden md:flex space-x-8 items-center">
            <button 
              onClick={() => handleSectionClick('about-us')}
              className="text-gray-600 hover:text-gray-900 cursor-pointer"
            >
              About
            </button>
            <button 
              onClick={() => handleSectionClick('products')}
              className="text-gray-600 hover:text-gray-900 cursor-pointer"
            >
              Products
            </button>
            <button 
              onClick={() => handleSectionClick('contact-form')}
              className="text-gray-600 hover:text-gray-900 cursor-pointer"
            >
              Contact
            </button>
            <Link 
              to="/blog-post" 
              className="text-gray-600 hover:text-gray-900 cursor-pointer"
            >
              Blog
            </Link>
          </nav>
          <Link 
            to="/contact"
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-md transition duration-300 ease-in-out cursor-pointer !rounded-button whitespace-nowrap"
          >
            Partner with Us
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar; 