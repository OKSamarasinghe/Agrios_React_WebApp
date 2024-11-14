import React from 'react';
import { Link } from 'react-router-dom';
import agriosLogo from '../assets/images/agriosLogo.png';

const BB_FNavbar = ({ onManageProductsClick, showDropdown }) => {
  return (
    <nav className="bg-green-500">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center text-white text-3xl font-bold">
          <img src={agriosLogo} alt="Agrios Logo" className="h-17 w-16 mr-0.2" />
          Agrios
        </Link>
        <ul className="flex space-x-6 text-white">
          <li><Link to="/farmerhome" className="hover:underline">Dashboard</Link></li>
          <li className="relative">
            <button
              onClick={onManageProductsClick}
              className="text-white hover:underline"
            >
              Manage Product
            </button>
            {showDropdown && (
              <div className="absolute top-full left-0 mt-2 bg-white shadow-lg p-4 rounded-lg w-48 z-10">
                <ul>
                  {/* Replace the "Add Product" button with a Link */}
                  <li className="mb-2 cursor-pointer text-blue-600 hover:text-blue-800">
                    <Link to="/addproduct">Add Product</Link>
                  </li>
                  <li className="mb-2 cursor-pointer text-blue-600 hover:text-blue-800"><Link to="/editproduct">Edit Product</Link></li>
                </ul>
              </div>
            )}
          </li>
          <li><Link to="/orderHistory" className="hover:underline">Order Management</Link></li>
          <li><Link to="/pricepredict" className="hover:underline">Price Prediction Graph</Link></li>
          <li><Link to="/farmcontact" className="hover:underline">Contact</Link></li>
        </ul>
        <div className="space-x-4">
          <Link to="/cusprofile">
            <button className="text-white bg-green-700 px-3 py-1 rounded">Profile</button>
          </Link>
          <Link to="/">
            <button className="text-green-500 bg-red-600 px-3 py-1 rounded">Log Out</button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default BB_FNavbar;
