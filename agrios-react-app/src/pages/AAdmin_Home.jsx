import React, { useState, useEffect } from 'react';
import AAdmin_Navbar from '../components/AAdmin_Navbar';
import axios from 'axios';

const AAdmin_Home = () => {
  const [dashboardStats, setDashboardStats] = useState({
    farmers: 0,
    users: 0,
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

  useEffect(() => {
    const fetchDashboardStats = async () => {
      try {
        const farmersCount = await fetchFarmers(); // Get the farmer count
        
        const usersResponse = await axios.get('http://localhost:8081/users');
        console.log('Users Response:', usersResponse.data); // Log the response
        
        const ordersResponse = await axios.get('http://localhost:8081/orders');
        console.log('Orders Response:', ordersResponse.data); // Log the response
        
        const productsResponse = await axios.get('http://localhost:8081/products');
        console.log('Products Response:', productsResponse.data); // Log the response
  
        setDashboardStats({
          farmers: farmersCount,
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
        <section className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h4 className="text-xl font-semibold">Farmers</h4>
            <p className="text-3xl font-bold mt-2">{dashboardStats.farmers}</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h4 className="text-xl font-semibold">Users</h4>
            <p className="text-3xl font-bold mt-2">{dashboardStats.users}</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h4 className="text-xl font-semibold">Orders</h4>
            <p className="text-3xl font-bold mt-2">{dashboardStats.orders}</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h4 className="text-xl font-semibold">Products</h4>
            <p className="text-3xl font-bold mt-2">{dashboardStats.products}</p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AAdmin_Home;
