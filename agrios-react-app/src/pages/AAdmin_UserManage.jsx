import React, { useEffect, useState } from 'react';
import AAdmin_Navbar from '../components/AAdmin_Navbar';
import axios from 'axios';

const AAdmin_UserManage = () => {
  const [customers, setCustomers] = useState([]);

  // Fetch customers from the backend
  useEffect(() => {
    fetchCustomers();
  }, []);

  const fetchCustomers = async () => {
    try {
      const response = await axios.get('http://localhost:8081/users', {
        params: { accountType: 'Customer' },
      });
      setCustomers(response.data);
    } catch (error) {
      console.error("Error fetching customers:", error);
    }
  };

  // Delete customer
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8081/users/${id}`);
      setCustomers(customers.filter(customer => customer.id !== id));
    } catch (error) {
      console.error("Error deleting customer:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <AAdmin_Navbar />
      {/* Dashboard Header */}
      <header className="bg-green-500 text-white py-12">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl font-bold">User Dashboard</h1>
          <p className="mt-4">Overview of User statistics</p>
        </div>
      </header>
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">Admin Customer Management</h1>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-green-500 text-white text-left">
                <th className="py-3 px-5">Name</th>
                <th className="py-3 px-5">Email</th>
                <th className="py-3 px-5">Phone Number</th>
                
              </tr>
            </thead>
            <tbody>
              {customers.map((customer) => (
                <tr key={customer.id} className="border-b hover:bg-gray-100">
                  <td className="py-4 px-5">{customer.name}</td>
                  <td className="py-4 px-5">{customer.email}</td>
                  <td className="py-4 px-5">{customer.phoneNumber}</td>
                  
                </tr>
              ))}
            </tbody>
          </table>
          {customers.length === 0 && (
            <div className="text-center py-8 text-gray-500">No customers found.</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AAdmin_UserManage;
