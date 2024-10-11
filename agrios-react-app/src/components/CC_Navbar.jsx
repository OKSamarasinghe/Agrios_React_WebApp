import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import agriosLogo from '../assets/images/agriosLogo.png'; // Import the logo image

const CC_Navbar = () => {
  return (
    <nav className="bg-green-500">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center text-white text-3xl font-bold">
          <img src={agriosLogo} alt="Agrios Logo" className="h-17 w-16 mr-0.2" /> {/* Increased size */}
          Agrios
        </Link>
        <ul className="flex space-x-6 text-white">
          <li><Link to="/cushome" className="hover:underline">Home</Link></li>
          <li><Link to="/about" className="hover:underline">About</Link></li>
          <li><Link to="/services" className="hover:underline">Services</Link></li>
          <li><Link to="/news" className="hover:underline">News</Link></li>
          <li><Link to="/shop" className="hover:underline">Shop</Link></li>
          <li><Link to="/contact" className="hover:underline">Contact</Link></li>
        </ul>
        <div className="space-x-4">
          <Link to="/cusprofile">
            <button className="text-white bg-blue-700 px-3 py-1 rounded">Profile</button> {/* Changed to Profile with blue color */}
          </Link>
          <Link to="/">
            <button className="text-white bg-red-600 px-3 py-1 rounded">Log Out</button> {/* Changed to Log Out with red color */}
          </Link>  
        </div>
      </div>
    </nav>
  );
};

export default CC_Navbar;