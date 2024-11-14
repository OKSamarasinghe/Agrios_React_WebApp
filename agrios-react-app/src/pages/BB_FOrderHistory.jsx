import React, { useState } from 'react';
import Navbar from '../components/BB_FNavbar';
import { useNavigate } from 'react-router-dom';
import BannerImage from '../assets/images/BannerImg16.jpg';

const OrderHistory = () => {
  const [selectedFilter, setSelectedFilter] = useState('Date');
  const navigate = useNavigate();

  const handleProceedToPay = () => {
    // Add any payment logic here if needed
    navigate('/orderHistory');  // Step 3: Navigate to Order Confirmation page
  };

  // Placeholder data for orders
  const orders = [
    { id: 1, product: 'Tomato', status: 'Processing', date: '04/05/2023', price: '$5.99', quantity: 2 },
    { id: 2, product: 'Carrot', status: 'Shipped', date: '03/27/2023', price: '$3.49', quantity: 5 },
    { id: 3, product: 'Potato', status: 'Delivered', date: '03/20/2023', price: '$4.29', quantity: 3 },
    { id: 4, product: 'Eggplant', status: 'Cancelled', date: '03/15/2023', price: '$2.99', quantity: 1 },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      {/* Banner */}
      <div className="bg-cover bg-center h-96 flex items-center justify-center text-white text-4xl font-bold" 
      style={{
          backgroundImage: `url(${BannerImage})`, // Properly format the background image
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          margin: 0, // Remove margin if any
          padding: 0 // Remove padding if any
        }}>
        Order History
      </div>

      {/* Order Summary */}
      <div className="max-w-6xl mx-auto p-8">
        <div className="grid grid-cols-4 gap-4 text-center mb-8">
          <div className="bg-white p-6 rounded shadow">
            <h4 className="text-xl font-semibold">Total Orders</h4>
            <p className="text-2xl mt-2">21</p>
          </div>
          <div className="bg-white p-6 rounded shadow">
            <h4 className="text-xl font-semibold">Processing</h4>
            <p className="text-2xl mt-2">13</p>
          </div>
          <div className="bg-white p-6 rounded shadow">
            <h4 className="text-xl font-semibold">Shipped</h4>
            <p className="text-2xl mt-2">5</p>
          </div>
          <div className="bg-white p-6 rounded shadow">
            <h4 className="text-xl font-semibold">Delivered</h4>
            <p className="text-2xl mt-2">3</p>
          </div>
        </div>

        {/* Order Table */}
        <div className="bg-white p-6 rounded shadow mb-8">
          <h4 className="text-xl font-semibold mb-4">Order Status</h4>
          <p className="mb-2 text-gray-600">25+ Orders Ready to be Shipped</p>
          <div className="flex justify-end mb-4">
            <select className="p-2 border rounded" value={selectedFilter} onChange={(e) => setSelectedFilter(e.target.value)}>
              <option>Date</option>
              <option>Product</option>
              <option>Status</option>
            </select>
          </div>

          <table className="w-full text-left border-collapse">
            <thead>
              <tr>
                <th className="border p-4">Product</th>
                <th className="border p-4">Status</th>
                <th className="border p-4">Date</th>
                <th className="border p-4">Price</th>
                <th className="border p-4">Quantity</th>
                <th className="border p-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id} className="hover:bg-gray-100">
                  <td className="border p-4">{order.product}</td>
                  <td className="border p-4">{order.status}</td>
                  <td className="border p-4">{order.date}</td>
                  <td className="border p-4">{order.price}</td>
                  <td className="border p-4">{order.quantity}</td>
                  <td className="border p-4">
                    <button className="text-blue-500 hover:underline">View</button>
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

export default OrderHistory;
