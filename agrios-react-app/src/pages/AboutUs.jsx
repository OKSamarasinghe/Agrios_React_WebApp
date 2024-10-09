import React from 'react';

import AboutUsImage from '../assets/images/aboutUs2.jpg';
import MarketImage from '../assets/images/market.jpg';
import Farmer1Image from '../assets/images/farmer1.jpg';
import Farmer2Image from '../assets/images/farmer2.jpg';
import Farmer3Image from '../assets/images/farmer3.jpg';


const AboutUs = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative w-full h-96 bg-cover bg-center" style={{ backgroundImage: `url(${AboutUsImage})` }}>
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="relative z-10 flex items-center justify-center h-full text-center">
          <h1 className="text-white text-4xl font-bold">About Us</h1>
        </div>
      </section>

      {/* Best Agriculture Market Section */}
      <section className="py-12 px-6 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <img src={MarketImage} alt="Agriculture" className="w-full h-auto rounded-lg shadow-lg"/>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-green-600 mb-4">The Best Agriculture Market</h2>
            <p className="text-gray-700 mb-4">Agrios is your trusted platform for fresh, locally grown vegetables, connecting farmers directly with consumers.</p>
            <ul className="list-disc list-inside text-gray-700 mb-6">
              <li>Fresh vegetables delivered directly from the farm</li>
              <li>Affordable and competitive pricing</li>
              <li>Supporting local farmers and sustainable agriculture</li>
            </ul>
            <div className="flex space-x-4">
              <button className="bg-green-500 text-white px-4 py-2 rounded-lg">Discover More</button>
              <button className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg">FAQ</button>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="relative bg-gray-900 text-white py-16 px-6 lg:px-24 text-center">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10">
          <h2 className="text-3xl font-bold mb-6">ECO-Friendly Products can be Made from Scratch</h2>
          <button className="bg-green-500 text-white px-6 py-3 rounded-lg font-semibold">
            <i className="fas fa-play mr-2"></i> Watch Video
          </button>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 px-6 lg:px-24">
        <h2 className="text-3xl font-bold text-center text-green-600 mb-8">What They Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
            <p className="text-gray-700 mb-4">"Agrios makes it so easy to get fresh produce. I love knowing my veggies come straight from the farmer!"</p>
            <p className="text-green-600 font-bold">Nuwan Dias</p>
            <p className="text-gray-500">Customer</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
            <p className="text-gray-700 mb-4">"Affordable prices and top quality! This is my go-to place for fresh vegetables now."</p>
            <p className="text-green-600 font-bold">Sarah Vindy</p>
            <p className="text-gray-500">Customer</p>
          </div>
        </div>
      </section>

      {/* Meet Our Farmers Section */}
      <section className="py-12 px-6 lg:px-24 bg-gray-50">
        <h2 className="text-3xl font-bold text-center text-green-600 mb-8">Meet Our Farmers</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <img src={Farmer1Image} alt="Farmer 1" className="w-full h-auto rounded-lg shadow-lg mb-4"/>
            <h3 className="text-xl font-bold text-gray-700">Kevin Dias</h3>
            <p className="text-green-600">Farmer</p>
          </div>
          <div className="text-center">
            <img src={Farmer2Image} alt="Farmer 2" className="w-full h-auto rounded-lg shadow-lg mb-4"/>
            <h3 className="text-xl font-bold text-gray-700">Amali Perera</h3>
            <p className="text-green-600">Farmer</p>
          </div>
          <div className="text-center">
            <img src={Farmer3Image} alt="Farmer 3" className="w-full h-auto rounded-lg shadow-lg mb-4"/>
            <h3 className="text-xl font-bold text-gray-700">Sadaru P</h3>
            <p className="text-green-600">Farmer</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
