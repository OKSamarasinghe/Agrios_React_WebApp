import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import agriosLogo from '../assets/images/agriosLogo.png'; // Import the logo image

const AAdmin_Navbar = () => {
  return (
    <nav className="bg-green-500">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center text-white text-3xl font-bold">
          <img src={agriosLogo} alt="Agrios Logo" className="h-17 w-16 mr-0.2" /> {/* Increased size */}
          Agrios
        </Link>
        <ul className="flex space-x-6 text-white">
          <li><Link to="/adminhome" className="hover:underline">Dashboard</Link></li>
          <li><Link to="/adminusermanagement" className="hover:underline">User Management</Link></li>
          <li><Link to="/adminfarmermanagement" className="hover:underline">Farmer Management</Link></li>
          <li><Link to="/adminproductmanagement" className="hover:underline">Product Management</Link></li>
          <li><Link to="/adminordermanagement" className="hover:underline">Order Management</Link></li>
          <li><Link to="/adminpricePrediction" className="hover:underline">Price Prediction Graph</Link></li>
          <li><Link to="/adminhelpsupport" className="hover:underline">Help & Support</Link></li>
        </ul>
        <div className="space-x-4">
          
          <Link to="/">
            <button className="text-green-500 bg-red-600 px-3 py-1 rounded">Log Out</button> {/* Changed to Log Out with red color */}
          </Link>  
        </div>
      </div>
    </nav>
  );
};

export default AAdmin_Navbar;
