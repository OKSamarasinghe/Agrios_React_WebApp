import React, { useState, useEffect } from 'react';
import AAdmin_Navbar from '../components/AAdmin_Navbar';
import axios from 'axios';
import { FaUserTie, FaUsers, FaShoppingCart, FaBoxes, FaUser } from 'react-icons/fa';

const AAdmin_Home = () => {
  const [dashboardStats, setDashboardStats] = useState({
    farmers: 0,
    users: 0,
    customers: 0,
    orders: 0,
    products: 0,
  });

  const fetchFarmers = async () => {
    try {
      const response = await axios.get('http://localhost:8081/users', {
        params: { accountType: 'Farmer' },
      });
      console.log('Farmers Response:', response.data); // Log the farmer data
      return response.data.length; // Return the farmer count
    } catch (error) {
      console.error('Error fetching farmers:', error);
      return 0; // Return 0 in case of an error
    }
  };

  const fetchCustomers = async () => {
    try {
      const response = await axios.get('http://localhost:8081/users', {
        params: { accountType: 'Customer' },
      });
      console.log('Customers Response:', response.data); // Log the customer data
      return response.data.length; // Return the customer count
    } catch (error) {
      console.error('Error fetching customers:', error);
      return 0; // Return 0 in case of an error
    }
  };

  useEffect(() => {
    const fetchDashboardStats = async () => {
      try {
        const farmersCount = await fetchFarmers(); // Get the farmer count
        const customersCount = await fetchCustomers(); // Get the customer count

        const usersResponse = await axios.get('http://localhost:8081/users');
        console.log('Users Response:', usersResponse.data); // Log the response

        const ordersResponse = await axios.get('http://localhost:8081/orders');
        console.log('Orders Response:', ordersResponse.data); // Log the response

        const productsResponse = await axios.get('http://localhost:8081/products');
        console.log('Products Response:', productsResponse.data); // Log the response

        setDashboardStats({
          farmers: farmersCount,
          customers: customersCount,
          users: usersResponse.data.length,
          orders: ordersResponse.data.length,
          products: productsResponse.data.length,
        });
      } catch (error) {
        console.error('Error fetching dashboard stats:', error);
      }
    };

    fetchDashboardStats();
  }, []);

  return (
    <div className="relative min-h-screen bg-gray-100">
      {/* Admin Navbar */}
      <AAdmin_Navbar />

      {/* Dashboard Header */}
      <header className="bg-green-500 text-white py-12">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl font-bold">Admin Dashboard</h1>
          <p className="mt-4">Overview of key platform statistics</p>
        </div>
      </header>

      {/* Dashboard Summary */}
      <main className="max-w-6xl mx-auto p-8">
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-green-800 to-green-600 text-white p-10 rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out flex items-center space-x-6">
            <FaUserTie size={40} />
            <div>
              <h4 className="text-2xl font-semibold uppercase tracking-wide">Farmers</h4>
              <p className="text-5xl font-extrabold mt-2">{dashboardStats.farmers}</p>
            </div>
          </div>
          <div className="bg-gradient-to-br from-blue-800 to-blue-600 text-white p-10 rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out flex items-center space-x-6">
            <FaUsers size={40} />
            <div>
              <h4 className="text-2xl font-semibold uppercase tracking-wide">Users</h4>
              <p className="text-5xl font-extrabold mt-2">{dashboardStats.users}</p>
            </div>
          </div>
          <div className="bg-gradient-to-br from-red-800 to-red-600 text-white p-10 rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out flex items-center space-x-6">
            <FaUser size={40} />
            <div>
              <h4 className="text-2xl font-semibold uppercase tracking-wide">Customers</h4>
              <p className="text-5xl font-extrabold mt-2">{dashboardStats.customers}</p>
            </div>
          </div>
          <div className="bg-gradient-to-br from-yellow-800 to-yellow-600 text-white p-10 rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out flex items-center space-x-6">
            <FaShoppingCart size={40} />
            <div>
              <h4 className="text-2xl font-semibold uppercase tracking-wide">Orders</h4>
              <p className="text-5xl font-extrabold mt-2">{dashboardStats.orders}</p>
            </div>
          </div>
          <div className="bg-gradient-to-br from-purple-800 to-purple-600 text-white p-10 rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out flex items-center space-x-6">
            <FaBoxes size={40} />
            <div>
              <h4 className="text-2xl font-semibold uppercase tracking-wide">Products</h4>
              <p className="text-5xl font-extrabold mt-2">{dashboardStats.products}</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AAdmin_Home;
