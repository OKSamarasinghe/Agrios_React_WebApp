import React, { useEffect, useState } from 'react';
import AAdmin_Navbar from '../components/AAdmin_Navbar';
import axios from 'axios';

const AAdmin_OrderManage = () => {
  const [orders, setOrders] = useState([]);

  // Fetch orders from the backend
  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const response = await axios.get('http://localhost:8081/orders');
      setOrders(response.data);
    } catch (error) {
      console.error("Error fetching orders:", error);
    }
  };

  // Delete order
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8081/orders/${id}`);
      setOrders(orders.filter(order => order.id !== id));
    } catch (error) {
      console.error("Error deleting order:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <AAdmin_Navbar />
      {/* Dashboard Header */}
      <header className="bg-green-500 text-white py-12">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl font-bold">Order Dashboard</h1>
          <p className="mt-4">Overview of Order statistics</p>
        </div>
      </header>
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">Admin Order Management</h1>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-green-500 text-white text-left">
                <th className="py-3 px-5">Address</th>
                <th className="py-3 px-5">Product Name</th>
                <th className="py-3 px-5">Total Amount</th>
                <th className="py-3 px-5">Quantity</th>
                <th className="py-3 px-5">Order Date</th>
                <th className="py-3 px-5">Action</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id} className="border-b hover:bg-gray-100">
                  <td className="py-4 px-5">{order.address}</td>
                  <td className="py-4 px-5">{order.productName}</td>
                  <td className="py-4 px-5">Rs {order.totalAmount.toFixed(2)}</td>
                  <td className="py-4 px-5">{order.quantity}</td>
                  <td className="py-4 px-5">
                    {new Date(order.orderDate).toLocaleDateString()}
                  </td>
                  <td className="py-4 px-5">
                    <button 
                      onClick={() => handleDelete(order.id)}
                      className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-200 mr-2"
                    >
                      Delete
                    </button>
                    <button
                      className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-200"
                    >
                      View
                    </button>
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

export default AAdmin_OrderManage;
