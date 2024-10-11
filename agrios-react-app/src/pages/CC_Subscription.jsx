import React from 'react';
import { useNavigate } from 'react-router-dom';
import BannerImage from '../assets/images/BannerImg2.jpg'; // Import your banner image

const Subscription = () => {
  const navigate = useNavigate();

  // Function to handle navigation when 'Buy now' button is clicked
  const handleBuyNow = () => {
    navigate('/subscribe'); 
  };

  return (
    <div className="subscription-page flex flex-col items-center p-0"> {/* Set padding to 0 */}
      {/* Banner Section */}
      <div 
        className="relative w-full h-96 mb-6" 
        style={{
          backgroundImage: `url(${BannerImage})`, 
          backgroundSize: 'cover', 
          backgroundPosition: 'center',
          margin: 0, // Remove margin if any
          padding: 0 // Remove padding if any
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-4xl font-bold mb-6">Welcome to Our Subscription Plans!</h1>
        </div>
      </div>
      
    
      <h3 className="text-2xl font-semibold mb-10">Choose your plan</h3>
      <div className="subscription-cards grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {/* Free Plan */}
        <div className="subscription-card bg-gray-100 rounded-lg shadow-lg p-6 text-center flex flex-col">
          <h4 className="text-xl font-semibold mb-4">Free</h4>
          <p className="text-3xl font-bold text-gray-800 mb-6">R$ 0/mo</p>
          <ul className="text-gray-600 mb-6 space-y-3">
            <li>Order Vegetables Online</li>
            <li>Basic Customer Support</li>
            <li>Limited Order Tracking</li>
          </ul>
          <div className="flex-grow"></div>
          <button className="btn bg-gray-500 text-white py-2 px-6 rounded-lg hover:bg-gray-600">
            Already using
          </button>
        </div>

        {/* Premium Plan */}
        <div className="subscription-card bg-gray-100 rounded-lg shadow-lg p-6 text-center border-2 border-blue-500 flex flex-col">
          <h4 className="text-xl font-semibold mb-4">Premium</h4>
          <p className="text-3xl font-bold text-gray-800 mb-6">R$ 1999/mo</p>
          <ul className="text-gray-600 mb-6 space-y-3">
            <li>Exclusive Access to Products</li>
            <li>Priority Customer Support</li>
            <li>Real-time Order Tracking</li>
          </ul>
          <div className="flex-grow"></div>
          <button onClick={handleBuyNow} className="btn bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600">
            Buy now
          </button>
        </div>

        {/* Business Plan */}
        <div className="subscription-card bg-gray-100 rounded-lg shadow-lg p-6 text-center border-2 border-green-500 flex flex-col">
          <h4 className="text-xl font-semibold mb-4">Business</h4>
          <p className="text-3xl font-bold text-gray-800 mb-6">R$ 3999/mo</p>
          <ul className="text-gray-600 mb-6 space-y-3">
            <li>Additional Prices and Offers</li>
            <li>Priority Order Processing</li>
            <li>Unlimited Order Tracking</li>
            <li>Free Shipping</li>
          </ul>
          <div className="flex-grow"></div>
          <button onClick={handleBuyNow} className="btn bg-green-500 text-white py-2 px-6 rounded-lg hover:bg-green-600">
            Buy now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Subscription;
