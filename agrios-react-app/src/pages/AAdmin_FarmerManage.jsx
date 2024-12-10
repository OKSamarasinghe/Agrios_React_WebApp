import React, { useEffect, useState } from 'react';
import AAdmin_Navbar from '../components/AAdmin_Navbar';
import axios from 'axios';

const AAdmin_FarmerManage = () => {
  const [farmers, setFarmers] = useState([]);

  // Fetch farmers from the backend
  useEffect(() => {
    fetchFarmers();
  }, []);

  const fetchFarmers = async () => {
    try {
      const response = await axios.get('http://localhost:8081/users', {
        params: { accountType: 'Farmer' },
      });
      setFarmers(response.data);
    } catch (error) {
      console.error("Error fetching farmers:", error);
    }
  };

  // Delete farmer
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8081/users/${id}`);
      setFarmers(farmers.filter(farmer => farmer.id !== id));
    } catch (error) {
      console.error("Error deleting farmer:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <AAdmin_Navbar />
      {/* Dashboard Header */}
      <header className="bg-green-500 text-white py-12">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl font-bold">Farmer Dashboard</h1>
          <p className="mt-4">Overview of Farmer statistics</p>
        </div>
      </header>
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">Admin Farmer Management</h1>
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
              {farmers.map((farmer) => (
                <tr key={farmer.id} className="border-b hover:bg-gray-100">
                  <td className="py-4 px-5">{farmer.name}</td>
                  <td className="py-4 px-5">{farmer.email}</td>
                  <td className="py-4 px-5">{farmer.phoneNumber}</td>
                  
                </tr>
              ))}
            </tbody>
          </table>
          {farmers.length === 0 && (
            <div className="text-center py-8 text-gray-500">No farmers found.</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AAdmin_FarmerManage;
