import React from 'react';
import logo from '../assets/images/agrios-logo.jpg';

const Navbar = () => {
  return (
    <nav className="bg-green-600 p-4 flex justify-between items-center">
      <img src={logo} alt="Agrios Logo" className="w-24" />
      <ul className="flex space-x-8 text-white">
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="#">Products</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
