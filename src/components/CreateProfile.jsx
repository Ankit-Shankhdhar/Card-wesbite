import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ProfessionalIDForm from './ProfessionalIdForm.jsx';
import StudentIDForm from './StudentIDForm.jsx';
import BuyerCardForm from './BuyerCardForm.jsx';
import SellerCardForm from './SellerCardForm.jsx';
import BioDataForm from './BioDataForm.jsx';

const options = ['Student ID', 'Professional Portfolio', 'Buyer', 'Seller', 'Bio Data'];

const CreateProfile = () => {
  const [active, setActive] = useState('');
  const [arrowPosition, setArrowPosition] = useState(0);
  const [loading, setLoading] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (window.innerWidth > 768) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timeout);
  }, []);

  const handleClick = (label, index) => {
    setActive(label);
    setArrowPosition(index);
    if (windowWidth <= 768) {
      setIsMobileMenuOpen(false);
    }
  };

  const renderContent = () => {
    switch (active) {
      case 'Professional Portfolio':
        return <ProfessionalIDForm />;
      case 'Student ID':
        return <StudentIDForm />;
      case 'Buyer':
        return <BuyerCardForm />;
      case 'Seller':
        return <SellerCardForm />;
      case 'Bio Data':
        return <BioDataForm />;
      default:
        return <div className="mt-20 text-gray-700 text-lg">This is the {active} Form.</div>;
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-white">
        <motion.div
          className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
        />
      </div>
    );
  }

  return (
    <div className="flex flex-col md:flex-row h-[92.4vh]">
      {/* Mobile menu button */}
      <div className="md:hidden bg-gray-900 p-4 flex justify-between items-center">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="text-white focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        {active && (
          <h1 className="text-white text-lg font-semibold">
            {active}
          </h1>
        )}
      </div>

      {/* Sidebar - shown always on desktop, conditionally on mobile */}
      {(isMobileMenuOpen || windowWidth > 768) && (
        <div className="w-full md:w-64 bg-gray-900 text-white flex flex-col relative shadow-md z-10">
          <div className="flex flex-col items-start p-4 space-y-4">
            {options.map((label, index) => (
              <div
                key={label}
                className={`cursor-pointer px-4 py-2 w-full rounded-lg transition-all duration-300 ${
                  active === label ? 'bg-blue-600' : 'hover:bg-gray-700'
                }`}
                onClick={() => handleClick(label, index)}
              >
                {label}
              </div>
            ))}
          </div>

          {/* Arrow animation - only shown on desktop */}
          {active && windowWidth > 768 && (
            <motion.div
              className="absolute left-0 top-[25px] w-0 h-0 border-l-[15px] border-l-white border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent"
              animate={{
                top: `${arrowPosition * 56 + 25}px`,
              }}
              transition={{ type: 'spring', stiffness: 300 }}
            />
          )}
        </div>
      )}

      {/* Main content */}
      <div className="flex-1 bg-white p-6 relative overflow-y-auto">
        {active ? (
          <div className="mt-2">{renderContent()}</div>
        ) : (
          <div className="text-center text-gray-500 text-xl mt-40">
            Please select an option from the {windowWidth > 768 ? 'left' : 'menu'}.
          </div>
        )}
      </div>
    </div>
  );
};

export default CreateProfile;
