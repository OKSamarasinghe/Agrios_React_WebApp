import React, { useState } from 'react';
import BB_FNavbar from '../components/BB_FNavbar'; // Import the Navbar component
import { Line, Bar } from 'react-chartjs-2';
import BannerImage from '../assets/images/BannerImg13.jpg';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Dashboard = () => {
  const [selectedCategory, setSelectedCategory] = useState('Carrot');
  const [selectedTimePeriod, setSelectedTimePeriod] = useState('April 2023');
  const [showDropdown, setShowDropdown] = useState(false);

  // Sample data for the charts
  const lineData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    datasets: [
      {
        label: '2023',
        data: [65, 59, 80, 81, 56, 55, 40],
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        fill: true,
      },
      {
        label: '2024',
        data: [28, 48, 40, 19, 86, 27, 90],
        borderColor: 'rgba(255, 99, 132, 1)',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        fill: true,
      },
    ],
  };

  const barData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    datasets: [
      {
        label: 'Price',
        data: [12, 19, 3, 5, 2, 3, 7],
        backgroundColor: 'rgba(255, 159, 64, 0.2)',
        borderColor: 'rgba(255, 159, 64, 1)',
        borderWidth: 1,
      },
    ],
  };
  const handleManageProductsClick = () => {
    setShowDropdown(prevState => !prevState);
  };

  const handleCloseDropdown = () => {
    setShowDropdown(false);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <BB_FNavbar onManageProductsClick={handleManageProductsClick} showDropdown={showDropdown} />

      {/* Banner */}
      <div className="bg-cover bg-center h-96 flex items-center justify-center text-white text-4xl font-bold" style={{
          backgroundImage: `url(${BannerImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}>
        Future Market Prices
      </div>

      {/* Dashboard Summary */}
      <div className="max-w-6xl mx-auto p-8">
        <div className="grid grid-cols-4 gap-4 text-center mb-8">
          <div className="bg-white p-6 rounded shadow">
            <h4 className="text-xl font-semibold">Logged in as:</h4>
            <p className="text-2xl mt-2">John Doe</p>
          </div>
          <div className="bg-white p-6 rounded shadow">
            <h4 className="text-xl font-semibold">Select Product Category</h4>
            <select className="mt-2 p-2 border" value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
              <option>Carrot</option>
              <option>Tomato</option>
              <option>Potato</option>
            </select>
          </div>
          <div className="bg-white p-6 rounded shadow">
            <h4 className="text-xl font-semibold">Filter Period</h4>
            <select className="mt-2 p-2 border" value={selectedTimePeriod} onChange={(e) => setSelectedTimePeriod(e.target.value)}>
              <option>April 2023</option>
              <option>May 2023</option>
              <option>June 2023</option>
            </select>
          </div>
          <div className="bg-white p-6 rounded shadow">
            <h4 className="text-xl font-semibold">Next Best Season</h4>
            <p className="text-2xl mt-2">March</p>
          </div>
        </div>

        {/* Line Chart */}
        <div className="bg-white p-6 rounded shadow mb-8">
          <h4 className="text-xl font-semibold mb-4">Price Trends</h4>
          <Line data={lineData} />
        </div>

        {/* Bar Chart */}
        <div className="bg-white p-6 rounded shadow">
          <h4 className="text-xl font-semibold mb-4">Price Comparison</h4>
          <Bar data={barData} />
        </div>
      </div>
      {showDropdown && (
        <div className="dropdown" style={{ position: 'absolute', top: '50px', left: '50%' }}>
          <button onClick={handleCloseDropdown} className="text-red-500">X</button>
        </div>
      )}
      
    </div>
  );
};

export default Dashboard;
