import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BannerImage from '../assets/images/BannerImg1.jpg';
import tomatoImg from '../assets/images/tomato.jpg';
import BrinjalImg from '../assets/images/brinjal.jpg';
import CarrotImg from '../assets/images/carrot.jpg';
import GarlicImg from '../assets/images/garlic.jpg';
import CucumberImg from '../assets/images/cucumber.jpg';
import CC_Navbar from '../components/Navbar';

const CC_Shop = () => {
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false); // Popup state

  // Function to handle navigation to product details
  const handleAddToCart = (productName) => {
    // Show the popup instead of navigating
    setShowPopup(true);
  };

  // Close popup function
  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="w-full">
      <CC_Navbar />

      {/* Shop Banner Section */}
      <div
        className="relative w-full h-96 bg-cover bg-center mb-6"
        style={{
          backgroundImage: `url(${BannerImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-4xl font-bold">Our Shop</h1>
        </div>
      </div>

      {/* Search and Filter Bar */}
      <div className="flex justify-center mb-4 px-5">
        <input
          type="text"
          className="border border-gray-300 rounded-l px-4 py-2"
          placeholder="Search..."
        />
        <button onClick={() => handleAddToCart('Brinjal')}className="bg-yellow-500 text-white px-4 py-2 rounded-r">
          Search products
        </button>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mx-auto px-5" style={{ maxWidth: '950px' }}>
        {/* Example product: Tomato */}
        <div className="border rounded-lg p-3 shadow-md hover:shadow-lg">
          <img src={tomatoImg} alt="Tomato" className="w-64 h-64 object-cover mb-3" />
          <h2 className="text-lg font-semibold">Tomato</h2>
          <p className="text-gray-700 mb-2">Rs 80.00</p>
          <button
            onClick={() => handleAddToCart('Tomato')}
            className="bg-green-500 text-white px-4 py-2 rounded"
          >
            Add to cart
          </button>
        </div>
        
        {/* Repeat for other products */}
        <div className="border rounded-lg p-3 shadow-md hover:shadow-lg">
          <img src={BrinjalImg} alt="Brinjal" className="w-64 h-64 object-cover mb-3" />
          <h2 className="text-lg font-semibold">Brinjal</h2>
          <p className="text-gray-700 mb-2">Rs 120.00</p>
          <button
            onClick={() => handleAddToCart('Brinjal')}
            className="bg-green-500 text-white px-4 py-2 rounded"
          >
            Add to cart
          </button>
        </div>

        <div className="border rounded-lg p-3 shadow-md hover:shadow-lg">
          <img src={CarrotImg} alt="Carrot" className="w-64 h-64 object-cover mb-3" />
          <h2 className="text-lg font-semibold">Carrot</h2>
          <p className="text-gray-700 mb-2">Rs 90.00</p>
          <button
            onClick={() => handleAddToCart('Carrot')}
            className="bg-green-500 text-white px-4 py-2 rounded"
          >
            Add to cart
          </button>
        </div>

        {/* Additional product components */}
        <div className="border rounded-lg p-3 shadow-md hover:shadow-lg">
          <img src={GarlicImg} alt="Garlic" className="w-64 h-64 object-cover mb-3" />
          <h2 className="text-lg font-semibold">Garlic</h2>
          <p className="text-gray-700 mb-2">Rs 120.00</p>
          <button
            onClick={() => handleAddToCart('Garlic')}
            className="bg-green-500 text-white px-4 py-2 rounded"
          >
            Add to cart
          </button>
        </div>

        <div className="border rounded-lg p-3 shadow-md hover:shadow-lg">
          <img src={CucumberImg} alt="Cucumber" className="w-64 h-64 object-cover mb-3" />
          <h2 className="text-lg font-semibold">Cucumber</h2>
          <p className="text-gray-700 mb-2">Rs 100.00</p>
          <button
            onClick={() => handleAddToCart('Cucumber')}
            className="bg-green-500 text-white px-4 py-2 rounded"
          >
            Add to cart
          </button>
        </div>

        {/* Additional products as per your design */}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-8 mb-6">
        <button className="bg-gray-200 px-4 py-2 rounded mr-2">1</button>
        <button className="bg-gray-200 px-4 py-2 rounded">2</button>
      </div>

      {/* Popup Message */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded shadow-lg">
            <p className="text-lg font-semibold mb-4">Please sign in to your account !</p>
            <div className="flex justify-center">
              <button
                onClick={closePopup}
                className="bg-blue-500 text-white px-4 py-2 rounded"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CC_Shop;
