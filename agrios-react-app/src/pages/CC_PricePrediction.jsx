import React, { useState, useEffect } from 'react';
import BB_FNavbar from '../components/CC_Navbar'; // Import the Navbar component
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

const CC_PricePrediction = () => {
  const [selectedCategory, setSelectedCategory] = useState('Carrot');
  const [showDropdown, setShowDropdown] = useState(false);

  const [lineData, setLineData] = useState(null);
  const [barData, setBarData] = useState(null);

  const [isAuthenticated, setIsAuthenticated] = useState(false);  // State to check if the user is authenticated
  const [pinCode, setPinCode] = useState("");  // State to store entered pin code
  const [showPinModal, setShowPinModal] = useState(true);  // State to control the visibility of the modal

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
        const filteredData = data.filter(item => item.vegetable === 'Carrot' || item.vegetable === 'Tomato' || item.vegetable === 'Potato');
        const labels = filteredData.map(item => item.month);
        
        const prices = {
          Carrot: [],
          Tomato: [],
          Potato: []
        };

        filteredData.forEach(item => {
          if (item.vegetable === 'Carrot') {
            prices.Carrot.push(item.price);
          } else if (item.vegetable === 'Tomato') {
            prices.Tomato.push(item.price);
          } else if (item.vegetable === 'Potato') {
            prices.Potato.push(item.price);
          }
        });

        const avgPrice = (prices.Carrot.concat(prices.Tomato, prices.Potato).reduce((acc, price) => acc + price, 0)) /
                          (prices.Carrot.length + prices.Tomato.length + prices.Potato.length);

        const getColor = (price) => price < avgPrice ? 'rgba(75, 192, 192, 0.2)' : price > avgPrice ? 'rgba(255, 99, 132, 0.2)' : 'rgba(255, 159, 64, 0.2)';

        // Predict next month's prices
        const predictNextMonthPrice = (pricesArray) => {
          if (pricesArray.length === 0) return 0;
          return (pricesArray.reduce((acc, price) => acc + price, 0) / pricesArray.length).toFixed(2);
        };

        const predictedPrices = {
          Carrot: predictNextMonthPrice(prices.Carrot),
          Tomato: predictNextMonthPrice(prices.Tomato),
          Potato: predictNextMonthPrice(prices.Potato),
        };

        const nextMonthLabel = "Next Month";

        setBarData({
          labels: [...labels, nextMonthLabel],
          datasets: [
            {
              label: 'Carrot Price',
              data: [...prices.Carrot, predictedPrices.Carrot],
              backgroundColor: [...prices.Carrot.map(price => getColor(price)), 'rgba(255, 206, 86, 0.2)'],
              borderColor: 'rgba(255, 159, 64, 1)',
              borderWidth: 1,
            },
            {
              label: 'Tomato Price',
              data: [...prices.Tomato, predictedPrices.Tomato],
              backgroundColor: [...prices.Tomato.map(price => getColor(price)), 'rgba(153, 102, 255, 0.2)'],
              borderColor: 'rgba(54, 162, 235, 1)',
              borderWidth: 1,
            },
            {
              label: 'Potato Price',
              data: [...prices.Potato, predictedPrices.Potato],
              backgroundColor: [...prices.Potato.map(price => getColor(price)), 'rgba(75, 192, 192, 0.2)'],
              borderColor: 'rgba(75, 192, 192, 1)',
              borderWidth: 1,
            },
          ],
        });
      });
  }, [selectedCategory]); 

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
      setIsAuthenticated(true);  // User is authenticated, allow access to page
      setShowPinModal(false);  // Close the modal
    } else {
      alert("Incorrect Pin Code. Please try again.");
    }
  };

  const handleManageProductsClick = () => {
    setShowDropdown(prevState => !prevState);
  };

  const handleCloseDropdown = () => {
    setShowDropdown(false);
  };

  if (!isAuthenticated) {
    return (
      <div className="flex justify-center items-center h-screen bg-green-500">
        {/* Modal for Pin Code Entry */}
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
      <BB_FNavbar onManageProductsClick={handleManageProductsClick} showDropdown={showDropdown} />

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

        {/* Next Month Predictions */}
        <div className="bg-white p-6 rounded shadow">
          <h4 className="text-xl font-semibold mb-4">Next Month Price Predictions</h4>
          {barData ? (
            <ul className="list-disc pl-5">
              {barData.datasets.map((dataset, index) => {
                const predictedPrice = dataset.data[dataset.data.length - 1]; // Last data point is the prediction
                return (
                  <li key={index} className="mb-2">
                    <span className="font-bold">{dataset.label.replace(' Price', '')}:</span> Rs. {predictedPrice}
                  </li>
                );
              })}
            </ul>
          ) : (
            <p>Loading predictions...</p>
          )}
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

export default CC_PricePrediction;

