import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import BannerImage from '../assets/images/BannerImg9.jpg'; // Import your banner image
import Navbar from '../components/CC_Navbar';

const OrderManagement = () => {
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchOrders();
  }, []);

  // Fetch orders from the backend
  const fetchOrders = async () => {
    try {
      const response = await axios.get('http://localhost:8081/orders'); // Replace with your backend API endpoint
      const fetchedOrders = response.data;

      // Add random status to each order
      const statuses = ['Processing', 'Shipped', 'Delivered'];
      const updatedOrders = fetchedOrders.map(order => ({
        ...order,
        status: statuses[Math.floor(Math.random() * statuses.length)],
      }));

      setOrders(updatedOrders);
    } catch (error) {
      console.error('Error fetching orders:', error);
    }
  };

  const handleReview = () => {
    navigate('/review'); // Navigate to the Review page
  };

  const handleView = (orderId) => {
    navigate(`/order/${orderId}`); // Navigate to a specific order details page
  };

  return (
    <div>
      <Navbar/>
      <div className="order-management-container">
        <div className="pb-10">
          {/* Banner Section */}
          <div
            className="relative w-full h-96 bg-cover bg-center mb-6"
            style={{ backgroundImage: `url(${BannerImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
          >
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <h1 className="text-white text-4xl font-bold">Order Management</h1>
            </div>
          </div>
        </div>

        <div className="overflow-x-auto mb-9">
          <table className="min-w-full bg-white border border-gray-300">
            <thead>
              <tr className="bg-gray-200">
                <th className="py-3 px-5 border-b text-left">Product Name</th>
                <th className="py-3 px-5 border-b text-left">Total Price</th>
                <th className="py-3 px-5 border-b text-left">Quantity</th>
                <th className="py-3 px-5 border-b text-left">Date</th>
                <th className="py-3 px-5 border-b text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              {orders.map(order => (
                <tr key={order.id} className="hover:bg-gray-100">
                  <td className="py-4 px-5">{order.productName}</td>
                  <td className="py-4 px-5">Rs {order.totalAmount.toFixed(2)}</td>
                  <td className="py-4 px-5">{order.quantity}</td>
                  <td className="py-4 px-5">
                    {new Date(order.orderDate).toLocaleDateString()}
                  </td>
                  <td className="py-3 px-5 border-b flex space-x-2">
                    <button onClick={handleReview} className="bg-blue-500 text-white px-4 py-2 rounded">Review</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {orders.length === 0 && (
            <div className="text-center py-8 text-gray-500">No orders found.</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default OrderManagement;
