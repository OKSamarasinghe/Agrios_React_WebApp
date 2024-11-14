import React from 'react';
import { useNavigate } from 'react-router-dom';
import BannerImage from '../assets/images/BannerImg8.jpg';
import Navbar from '../components/Navbar';

const OrderConfirmation = () => {
  const navigate = useNavigate();

  const handleProceedToPay = () => {
    // Add any payment logic here if needed
    navigate('/sub-order');  // Step 3: Navigate to Order Confirmation page
  };
  

  return (
    <div>
    <navbar/>
    <div className="pb-10">
      {/* Banner Section */}
      <div className="relative w-full h-96 bg-cover bg-center mb-6" 
        style={{ backgroundImage: `url(${BannerImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-4xl font-bold">Order Confirmation</h1>
        </div>
      </div>

      {/* Order Summary */}
      <div className="text-center mt-10">
        <h2 className="text-2xl font-semibold">You are now a <b>PREMIUM</b> Member</h2>
        <p className="text-gray-600 mt-2">Please check your inbox for order updates and discounts.</p>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-center mt-8">
        <button 
          onClick={() => navigate('/')} 
          className="bg-green-500 text-white px-6 py-2 rounded mr-4">
          Go to Dashboard
        </button>
      </div>
      </div>
    </div>
  );
};

export default OrderConfirmation;
