import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from '../context/FormContext';

const Navbar: React.FC = () => {
  const { setShowPartnershipForm } = useForm();

  const handleSectionClick = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="text-2xl font-bold text-gray-800">
                Wizer AI
              </Link>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button
              onClick={() => handleSectionClick('products')}
              className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
            >
              Products
            </button>
            <button
              onClick={() => handleSectionClick('about')}
              className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
            >
              About
            </button>
            <Link
              to="/vision-2030"
              className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
            >
              Vision 2030
            </Link>
            <button
              onClick={() => setShowPartnershipForm(true)}
              className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700"
            >
              Partner with Us
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 