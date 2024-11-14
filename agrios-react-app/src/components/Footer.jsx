import React from 'react';
import agriosLogo from '../assets/images/agriosLogo.png'; // Import the logo image

const Footer = () => {
  return (
    <footer className="bg-green-500 text-white py-12">
      <div className="container mx-auto grid grid-cols-4 gap-8">
        
        {/* Logo and Description Section */}
        <div>
          <img src={agriosLogo} alt="Agrios Logo" className="h-16 mb-4" /> {/* Logo */}
          <p>A User Friendly Website That Provides Various Services related to Agriculture Field in Sri Lanka.</p>
          <div className="flex space-x-4 mt-4">
            {/* Social Media Icons */}
            <a href="#" className="hover:text-gray-200"><i className="fab fa-twitter"></i></a>
            <a href="#" className="hover:text-gray-200"><i className="fab fa-facebook"></i></a>
            <a href="#" className="hover:text-gray-200"><i className="fab fa-pinterest"></i></a>
            <a href="#" className="hover:text-gray-200"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
        
        {/* Explore Section */}
        <div>
          <h3 className="text-xl font-bold">Explore</h3>
          <ul className="mt-4 space-y-2">
            <li><a href="#" className="hover:text-gray-200">About</a></li>
            <li><a href="#" className="hover:text-gray-200">Services</a></li>
            <li><a href="#" className="hover:text-gray-200">Our Projects</a></li>
            <li><a href="#" className="hover:text-gray-200">Meet the Farmers</a></li>
            <li><a href="#" className="hover:text-gray-200">Latest News</a></li>
            <li><a href="#" className="hover:text-gray-200">Contact</a></li>
          </ul>
        </div>

        {/* News Section */}
        <div>
          <h3 className="text-xl font-bold">News</h3>
          <ul className="mt-4 space-y-2">
            <li><a href="#" className="hover:text-gray-200">Bringing Food Production Back To Cities</a></li>
            <li><a href="#" className="hover:text-gray-200">The Future of Farming, Smart Irrigation Solutions</a></li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="text-xl font-bold">Contact</h3>
          <p className="mt-4">Phone: +94 332000432</p>
          <p>Email: agrios@company.com</p>
          <p>Vidya road, Colombo 7, Sri Lanka</p>
          <div className="mt-6">
            <input
              type="email"
              placeholder="Your Email Address"
              className="w-full px-4 py-2 rounded bg-white text-green-500 placeholder-gray-500 focus:outline-none"
            />
            <button className="mt-4 w-full px-4 py-2 bg-white text-green-500 rounded hover:bg-gray-100">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Copyright and Links */}
      <div className="text-center mt-12 border-t border-white-00 pt-6">
        <p>© All Copyright 2024 by Oshadha K & Sohan</p>
        <div className="flex justify-center space-x-4 mt-2">
          <a href="#" className="hover:text-gray-200">Terms of Use</a>
          <span>|</span>
          <a href="#" className="hover:text-gray-200">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
