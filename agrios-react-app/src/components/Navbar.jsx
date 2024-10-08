// src/components/Navbar.jsx

import React from 'react';
import agriosLogo from '../assets/images/agriosLogo.png'; // Import the logo image

const Navbar = () => {
  return (
    <nav className="bg-green-500">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a href="/" className="flex items-center text-white text-3xl font-bold">
          <img src={agriosLogo} alt="Agrios Logo" className="h-17 w-16 mr-0.2" /> {/* Increased size */}
          Agrios
        </a>
        <ul className="flex space-x-6 text-white">
          <li><a href="#" className="hover:underline">Home</a></li>
          <li><a href="#" className="hover:underline">About</a></li>
          <li><a href="#" className="hover:underline">Services</a></li>
          <li><a href="#" className="hover:underline">News</a></li>
          <li><a href="#" className="hover:underline">Shop</a></li>
          <li><a href="#" className="hover:underline">Contact</a></li>
        </ul>
        <div className="space-x-4">
          <button className="text-white border-white border-2 px-3 py-1 rounded">Sign In</button>
          <button className="text-green-500 bg-white px-3 py-1 rounded">Sign Up</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
