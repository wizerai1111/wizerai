import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from '../context/FormContext';

const Navbar: React.FC = () => {
  const { setShowPartnershipForm } = useForm();

  return (
    <header className="bg-white shadow-sm">
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
            <Link 
              to="/#about-us" 
              className="text-gray-600 hover:text-gray-900 cursor-pointer"
            >
              About
            </Link>
            <Link 
              to="/#products" 
              className="text-gray-600 hover:text-gray-900 cursor-pointer"
            >
              Products
            </Link>
            <Link 
              to="/#contact-form" 
              className="text-gray-600 hover:text-gray-900 cursor-pointer"
            >
              Contact
            </Link>
            <Link 
              to="/blog-post" 
              className="text-gray-600 hover:text-gray-900 cursor-pointer"
            >
              Blog
            </Link>
          </nav>
          <button
            onClick={() => setShowPartnershipForm(true)}
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-md transition duration-300 ease-in-out cursor-pointer !rounded-button whitespace-nowrap"
          >
            Partner with Us
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar; 