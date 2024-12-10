import React, { useEffect, useState } from 'react';
import Navbar from '../components/BB_FNavbar';
import axios from 'axios';
import BannerImage from '../assets/images/BannerImg16.jpg';

const OrderHistory = () => {
  const [orders, setOrders] = useState([]); // Store orders fetched from backend
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state
  const [selectedFilter, setSelectedFilter] = useState('Date'); // Filter state

  // Randomize status
  const randomizeStatus = (orders) => {
    const statuses = ['Processing', 'Shipped', 'Delivered'];
    return orders.map((order) => ({
      ...order,
      status: statuses[Math.floor(Math.random() * statuses.length)], // Randomly assign a status
    }));
  };

  // Fetch orders from the backend
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get('http://localhost:8081/orders'); // Adjust backend URL if needed
        const randomizedOrders = randomizeStatus(response.data); // Randomize the status
        setOrders(randomizedOrders);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch orders. Please try again later.');
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  if (loading) {
    return <div className="text-center mt-10">Loading...</div>;
  }

  if (error) {
    return <div className="text-center mt-10 text-red-500">{error}</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      {/* Banner */}
      <div
        className="bg-cover bg-center h-96 flex items-center justify-center text-white text-4xl font-bold"
        style={{
          backgroundImage: `url(${BannerImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          margin: 0,
          padding: 0,
        }}
      >
        Order History
      </div>

      {/* Order Summary */}
      <div className="max-w-6xl mx-auto p-8">
        <div className="grid grid-cols-4 gap-4 text-center mb-8">
          <div className="bg-white p-6 rounded shadow">
            <h4 className="text-xl font-semibold">Total Orders</h4>
            <p className="text-2xl mt-2">{orders.length}</p>
          </div>
          <div className="bg-white p-6 rounded shadow">
            <h4 className="text-xl font-semibold">Processing</h4>
            <p className="text-2xl mt-2">
              {orders.filter((order) => order.status === 'Processing').length}
            </p>
          </div>
          <div className="bg-white p-6 rounded shadow">
            <h4 className="text-xl font-semibold">Shipped</h4>
            <p className="text-2xl mt-2">
              {orders.filter((order) => order.status === 'Shipped').length}
            </p>
          </div>
          <div className="bg-white p-6 rounded shadow">
            <h4 className="text-xl font-semibold">Delivered</h4>
            <p className="text-2xl mt-2">
              {orders.filter((order) => order.status === 'Delivered').length}
            </p>
          </div>
        </div>

        {/* Order Table */}
        <div className="bg-white p-6 rounded shadow mb-8">
          <h4 className="text-xl font-semibold mb-4">Order Status</h4>
          <p className="mb-2 text-gray-600">{orders.length} Orders Available</p>
          <div className="flex justify-end mb-4">
            <select
              className="p-2 border rounded"
              value={selectedFilter}
              onChange={(e) => setSelectedFilter(e.target.value)}
            >
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
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id} className="hover:bg-gray-100">
                  <td className="border p-4">{order.productName}</td>
                  <td className="border p-4">{order.status}</td>
                  <td className="border p-4">
                    {new Date(order.orderDate).toLocaleDateString()}
                  </td>
                  <td className="border p-4">Rs {order.totalAmount.toFixed(2)}</td>
                  <td className="border p-4">{order.quantity}</td>
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
