import React from 'react';
import { useNavigate } from 'react-router-dom';
import BannerImage from '../assets/images/BannerImg9.jpg'; // Import your banner image
import tomatoImg from '../assets/images/tomato.jpg'; // Import the tomato image
import brinjalImg from '../assets/images/brinjal.jpg';
import cucumber from '../assets/images/cucumber.jpg';

const OrderManagement = () => {
  const orders = [
    { id: 1, name: 'Tomato', status: 'Shipped', date: '2024-10-11', price: 50, image: tomatoImg },
    { id: 2, name: 'Potato', status: 'Pending', date: '2024-10-10', price: 30, image: brinjalImg },
    { id: 3, name: 'Cucumber', status: 'Delivered', date: '2024-10-09', price: 25, image: cucumber },
  ];

  const navigate = useNavigate();

  const handleReview = () => {
    navigate('/review'); // Navigate to the Review page
  };

  const handleView = (orderId) => {
    // Logic to view order details; you can navigate to a specific order page
    navigate(`/order`); // Adjust this route based on your application structure
  };

  return (
    <div>
      <navbar />
      <div className="order-management-container">
        <div className="pb-10">
          {/* Banner Section */}
          <div
            className="relative w-full h-96 bg-cover bg-center mb-6"
            style={{ backgroundImage: `url(${BannerImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
          >
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <h1 className="text-white text-4xl font-bold">Order Confirmation</h1>
            </div>
          </div>
        </div>

        <div className="overflow-x-auto mb-9">
          <table className="min-w-full bg-white border border-gray-300">
            <thead>
              <tr className="bg-gray-200">
                <th className="py-3 px-5 border-b text-left">Product</th>
                <th className="py-3 px-5 border-b text-left">Status</th>
                <th className="py-3 px-5 border-b text-left">Date</th>
                <th className="py-3 px-5 border-b text-left">Price</th>
                <th className="py-3 px-5 border-b text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              {orders.map(order => (
                <tr key={order.id} className="hover:bg-gray-100">
                  <td className="py-3 px-5 border-b flex items-center">
                    <img src={order.image} alt={order.name} className="w-10 h-10 mr-5 object-cover" />
                    {order.name}
                  </td>
                  <td className="py-3 px-5 border-b">{order.status}</td>
                  <td className="py-3 px-5 border-b">{order.date}</td>
                  <td className="py-3 px-5 border-b">Rs {order.price}.00</td>
                  <td className="py-3 px-5 border-b flex space-x-2">
                    <button onClick={ handleView} className="bg-green-500 text-white px-4 py-2 rounded">View</button>
                    <button onClick={handleReview} className="bg-blue-500 text-white px-4 py-2 rounded">Review</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default OrderManagement;
