import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/logo.png';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center bg-white px-4 sm:px-6 py-3 sm:py-4 shadow-xl h-16">
      <Link to={'/'} className="flex items-center">
        <img 
          src={Logo} 
          alt="Digital Identity Platform Logo"
          className="h-12 md:h-14 w-auto"
        />
      </Link>

      <div className="flex items-center space-x-2 sm:space-x-4">
        <Link to={'/about'}>
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 sm:px-4 sm:py-2 rounded text-sm sm:text-base transition-colors duration-200">
            About Us
          </button>
        </Link>
      </div>
       {/* Optional Mobile burger Menu Button -----> if want to add new menu then  */}
        {/* <button className="md:hidden p-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button> */}
    </nav>
  );
};

export default Navbar;
