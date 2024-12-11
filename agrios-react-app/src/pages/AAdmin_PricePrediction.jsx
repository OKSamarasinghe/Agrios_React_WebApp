import React, { useState, useEffect } from 'react';
import BB_FNavbar from '../components/AAdmin_Navbar'; // Import the Navbar component
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

const AAdmin_PricePrediction = () => {
  const [selectedCategory, setSelectedCategory] = useState('Carrot');
  const [selectedTimePeriod, setSelectedTimePeriod] = useState('April 2023');
  const [showDropdown, setShowDropdown] = useState(false);

  const [lineData, setLineData] = useState(null);
  const [barData, setBarData] = useState(null);

  useEffect(() => {
    // Fetch line chart data
    fetch('http://localhost:8081/vegetables/price-trends')
      .then(response => response.json())
      .then(data => {
        const groupedData = data.reduce((acc, item) => {
          const vegetable = item.name;
          if (!acc[vegetable]) {
            acc[vegetable] = {
              label: vegetable,
              data: [],
              borderColor: getColorForVegetable(vegetable),
              backgroundColor: getColorForVegetable(vegetable, 0.2),
              fill: true,
            };
          }
          acc[vegetable].data.push(item.price);
          return acc;
        }, {});
  
        const labels = data.map(item => item.date);
  
        setLineData({
          labels: labels,
          datasets: Object.values(groupedData),
        });
      });
  
    // Fetch bar chart data
    fetch('http://localhost:8081/vegetables/price-comparison')
      .then(response => response.json())
      .then(data => {
        // Filter the data to include all vegetables but highlight 'Carrot'
        const filteredData = data.filter(item => item.vegetable === 'Carrot' || item.vegetable === 'Tomato' || item.vegetable === 'Potato');
        const labels = filteredData.map(item => item.month);
        
        const prices = {
          Carrot: [],
          Tomato: [],
          Potato: []
        };
  
        // Sort prices by vegetable and map them into respective arrays
        filteredData.forEach(item => {
          if (item.vegetable === 'Carrot') {
            prices.Carrot.push(item.price);
          } else if (item.vegetable === 'Tomato') {
            prices.Tomato.push(item.price);
          } else if (item.vegetable === 'Potato') {
            prices.Potato.push(item.price);
          }
        });
  
        // Calculate average price for comparison
        const avgPrice = (prices.Carrot.concat(prices.Tomato, prices.Potato).reduce((acc, price) => acc + price, 0)) /
                          (prices.Carrot.length + prices.Tomato.length + prices.Potato.length);
  
        // Get colors based on price comparison (below, above, or equal to average)
        const getColor = (price) => price < avgPrice ? 'rgba(75, 192, 192, 0.2)' : price > avgPrice ? 'rgba(255, 99, 132, 0.2)' : 'rgba(255, 159, 64, 0.2)';
        
        setBarData({
          labels: labels,
          datasets: [
            {
              label: 'Carrot Price',
              data: prices.Carrot,
              backgroundColor: prices.Carrot.map(price => getColor(price)),
              borderColor: 'rgba(255, 159, 64, 1)',
              borderWidth: 1,
            },
            {
              label: 'Tomato Price',
              data: prices.Tomato,
              backgroundColor: prices.Tomato.map(price => getColor(price)),
              borderColor: 'rgba(54, 162, 235, 1)',
              borderWidth: 1,
            },
            {
              label: 'Potato Price',
              data: prices.Potato,
              backgroundColor: prices.Potato.map(price => getColor(price)),
              borderColor: 'rgba(75, 192, 192, 1)',
              borderWidth: 1,
            },
          ],
        });
      });
  }, [selectedCategory]); // Re-fetch data when selectedCategory changes
  

  const getColorForVegetable = (vegetable, opacity = 1) => {
    const colors = {
      Carrot: 'rgba(255, 99, 132', // Red
      Tomato: 'rgba(54, 162, 235', // Blue
      Potato: 'rgba(75, 192, 192', // Green
    };
    return `${colors[vegetable] || 'rgba(255, 159, 64'} , ${opacity})`;
  };

  const getColorForPrice = (price, avgPrice) => {
    if (price < avgPrice) {
      return 'rgba(75, 192, 192, 0.2)'; // Light Green for below average
    } else if (price > avgPrice) {
      return 'rgba(255, 99, 132, 0.2)'; // Light Red for above average
    } else {
      return 'rgba(255, 159, 64, 0.2)'; // Light Orange for average
    }
  };

  const handleManageProductsClick = () => {
    setShowDropdown(prevState => !prevState);
  };

  const handleCloseDropdown = () => {
    setShowDropdown(false);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <BB_FNavbar />

      {/* Dashboard Header */}
      <header className="bg-green-500 text-white py-12">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl font-bold">Price Prediction Dashboard</h1>
          <p className="mt-4">Overview of Price Prediction statistics</p>
        </div>
      </header>

      {/* Dashboard Summary */}
      <div className="max-w-6xl mx-auto p-8">
        {/* Line Chart */}
        <div className="bg-white p-6 rounded shadow mb-8">
          <h4 className="text-xl font-semibold mb-4">Price Trends</h4>
          {lineData ? <Line data={lineData} /> : <p>Loading chart...</p>}
        </div>

        {/* Bar Chart */}
        <div className="bg-white p-6 rounded shadow">
          <h4 className="text-xl font-semibold mb-4">Price Comparison</h4>
          {barData ? <Bar data={barData} /> : <p>Loading chart...</p>}
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


export default AAdmin_PricePrediction;
