import React, { useState, useEffect } from 'react';
import BB_FNavbar from '../components/BB_FNavbar'; // Import the Navbar component
import { Line, Bar } from 'react-chartjs-2';
import BannerImage from '../assets/images/BannerImg13.jpg';
import ChatbotAssistant from '../components/ChatbotAssistant';

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
  const [showDropdown, setShowDropdown] = useState(false);

  const [lineData, setLineData] = useState(null);
  const [barData, setBarData] = useState(null);
  const [predictionData, setPredictionData] = useState(null);

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [pinCode, setPinCode] = useState('');
  const [showPinModal, setShowPinModal] = useState(true);

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
        const filteredData = data.filter(item => ['Carrot', 'Tomato', 'Potato'].includes(item.vegetable));
        const labels = filteredData.map(item => item.month);

        const prices = {
          Carrot: [],
          Tomato: [],
          Potato: [],
        };

        filteredData.forEach(item => {
          prices[item.vegetable].push(item.price);
        });

        const nextMonthPrices = predictNextMonthPrices(prices);

        setBarData({
          labels: [...labels, 'Next Month'],
          datasets: Object.keys(prices).map(vegetable => ({
            label: `${vegetable} Price`,
            data: [...prices[vegetable], nextMonthPrices[vegetable]],
            backgroundColor: getColorForVegetable(vegetable, 0.2),
            borderColor: getColorForVegetable(vegetable),
            borderWidth: 1,
          })),
        });

        const regressionPredictions = calculateLinearRegression(prices);
        setPredictionData({
          labels: ['Carrot', 'Tomato', 'Potato'],
          datasets: [
            {
              label: 'Predicted Prices',
              data: regressionPredictions,
              backgroundColor: ['rgba(255, 99, 132, 0.6)', 'rgba(54, 162, 235, 0.6)', 'rgba(75, 192, 192, 0.6)'],
              borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(75, 192, 192, 1)'],
              borderWidth: 1,
            },
          ],
        });
      });
  }, [selectedCategory]);

  const predictNextMonthPrices = (prices) => {
    const result = {};
    Object.keys(prices).forEach(vegetable => {
      const data = prices[vegetable];
      result[vegetable] = (data.reduce((acc, val) => acc + val, 0) / data.length).toFixed(2);
    });
    return result;
  };

  const calculateLinearRegression = (prices) => {
    return Object.keys(prices).map(vegetable => {
      const data = prices[vegetable];
      const n = data.length;
      const x = Array.from({ length: n }, (_, i) => i + 1);
      const y = data;

      const sumX = x.reduce((acc, val) => acc + val, 0);
      const sumY = y.reduce((acc, val) => acc + val, 0);
      const sumXY = x.reduce((acc, val, i) => acc + val * y[i], 0);
      const sumX2 = x.reduce((acc, val) => acc + val * val, 0);

      const slope = (n * sumXY - sumX * sumY) / (n * sumX2 - sumX * sumX);
      const intercept = (sumY - slope * sumX) / n;

      const nextX = n + 1;
      return (slope * nextX + intercept).toFixed(2);
    });
  };

  const getColorForVegetable = (vegetable, opacity = 1) => {
    const colors = {
      Carrot: 'rgba(255, 99, 132',
      Tomato: 'rgba(54, 162, 235',
      Potato: 'rgba(75, 192, 192',
    };
    return `${colors[vegetable] || 'rgba(255, 159, 64'} , ${opacity})`;
  };

  const handlePinCodeSubmit = () => {
    if (pinCode === 'PR7788') {
      setIsAuthenticated(true);
      setShowPinModal(false);
    } else {
      alert('Incorrect Pin Code. Please try again.');
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="flex justify-center items-center h-screen bg-green-500">
        <div className="bg-white p-6 rounded shadow-lg">
          <h2 className="text-2xl mb-4">Enter Your Premium Pin Code</h2>
          <input
            type="text"
            value={pinCode}
            onChange={(e) => setPinCode(e.target.value)}
            className="p-2 border border-gray-300 rounded mb-4"
            placeholder="Enter Pin Code"
          />
          <button
            onClick={handlePinCodeSubmit}
            className="bg-green-700 text-white p-2 rounded"
          >
            Submit
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <BB_FNavbar />

      {/* Banner */}
      <div
        className="bg-cover bg-center h-96 flex items-center justify-center text-white text-4xl font-bold"
        style={{
          backgroundImage: `url(${BannerImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        Future Market Prices
      </div>

      {/* Dashboard Summary */}
      <div className="max-w-6xl mx-auto p-8">
        {/* Line Chart */}
        <div className="bg-white p-6 rounded shadow mb-8">
          <h4 className="text-xl font-semibold mb-4">Price Trends</h4>
          {lineData ? <Line data={lineData} /> : <p>Loading chart...</p>}
        </div>

        {/* Bar Chart */}
        <div className="bg-white p-6 rounded shadow mb-8">
          <h4 className="text-xl font-semibold mb-4">Price Comparison</h4>
          {barData ? <Bar data={barData} /> : <p>Loading chart...</p>}
        </div>

        {/* Predictions */}
        <div className="bg-white p-6 rounded shadow mb-8">
          <h4 className="text-xl font-semibold mb-4">Linear Regression Price Predictions</h4>
          {predictionData ? <Bar data={predictionData} /> : <p>Loading predictions...</p>}
        </div>
      </div>

      {/* Chatbot */}
      <ChatbotAssistant />
    </div>
  );
};

export default Dashboard;
