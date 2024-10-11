import React from 'react';
import { useNavigate } from 'react-router-dom';
import BannerImage from '../assets/images/BannerImg10.jpg'; // Example Banner

const OrderTracking = () => {
  const orderDetails = {
    orderId: '#95465761',
    expectedArrival: '29 Jan, 2024',
    totalAmount: 'Rs 248.00',
    status: ['Order Placed', 'Packaging', 'On The Road', 'Delivered'],
  };

  const orderActivity = [
    { status: 'Your order has been delivered.', timestamp: '29 Jan, 2024 12:29 PM' },
    { status: 'Our delivery executive picked up your order for delivery.', timestamp: '29 Jan, 2024 08:32 AM' },
    { status: 'Your order has reached the main hub.', timestamp: '29 Jan, 2024 08:00 AM' },
    { status: 'Your order is on the way to the next hub.', timestamp: '29 Jan, 2024 05:32 AM' },
    { status: 'Your order is successfully verified.', timestamp: '28 Jan, 2024 04:12 PM' },
    { status: 'Your order has been confirmed.', timestamp: '28 Jan, 2024 12:05 PM' },
  ];

  return (
    <div className="pb-10">
      {/* Banner Section */}
      <div className="relative w-full h-64 bg-cover bg-center mb-6" 
        style={{ backgroundImage: `url(${BannerImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-4xl font-bold">Order Track</h1>
        </div>
      </div>

      {/* Order Summary */}
      <div className="bg-green-100 p-4 rounded-lg mx-auto text-center" style={{ maxWidth: '600px' }}>
        <h2 className="text-xl font-semibold">Order #{orderDetails.orderId}</h2>
        <p className="text-gray-600 mt-2">Order expected to arrive: <strong>{orderDetails.expectedArrival}</strong></p>
        <p className="text-green-600 font-semibold text-2xl mt-2">Total: {orderDetails.totalAmount}</p>
      </div>

      {/* Progress Bar */}
      <div className="mt-8 mx-auto text-center" style={{ maxWidth: '600px' }}>
        <div className="flex justify-between items-center">
          {orderDetails.status.map((step, index) => (
            <div key={index} className={`text-sm ${index < 3 ? 'text-green-500' : 'text-gray-500'}`}>
              {step}
            </div>
          ))}
        </div>
        <div className="flex justify-between items-center mt-2">
          <div className="w-1/3 h-1 bg-green-500"></div>
          <div className="w-1/3 h-1 bg-green-500"></div>
          <div className="w-1/3 h-1 bg-gray-400"></div>
        </div>
      </div>

      {/* Order Activity */}
      <div className="mt-8 mx-auto" style={{ maxWidth: '600px' }}>
        <h2 className="text-xl font-semibold mb-4">Order Activity</h2>
        {orderActivity.map((activity, index) => (
          <div key={index} className="mb-4">
            <div className="flex items-center">
              <div className="bg-green-500 text-white p-2 rounded-full mr-4">
                ✓
              </div>
              <div>
                <p className="font-semibold">{activity.status}</p>
                <p className="text-gray-500 text-sm">{activity.timestamp}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderTracking;