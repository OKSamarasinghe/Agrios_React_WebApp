import React, { useState, useEffect } from 'react';
import BB_FNavbar from '../components/BB_FNavbar';
import BannerImage from '../assets/images/BannerImg3.jpg';
import axios from 'axios';

const FarmerDashboard = () => {
  const [userData, setUserData] = useState(null);
  const [popularProducts, setPopularProducts] = useState([]);
  const [productCount, setProductCount] = useState(0);
  const [showDropdown, setShowDropdown] = useState(false);
  const [recentOrders, setRecentOrders] = useState([]);  // State for orders

  const userEmail = localStorage.getItem('email');

  useEffect(() => {
    const fetchUserData = async () => {
      if (userEmail) {
        try {
          const response = await axios.get(`http://localhost:8081/users?email=${userEmail}`);
          setUserData(response.data);
        } catch (error) {
          console.error('Error fetching user data:', error);
        }
      } else {
        alert('User not logged in.');
      }
    };

    fetchUserData();
  }, [userEmail]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productsResponse = await axios.get('http://localhost:8081/products');
        console.log("Fetched Products: ", productsResponse.data);
        const shuffledProducts = shuffleArray(productsResponse.data);
        setPopularProducts(shuffledProducts.slice(0, 3)); // Take the first 3 shuffled products

        setProductCount(productsResponse.data.length);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const ordersResponse = await axios.get('http://localhost:8081/orders'); // Replace with actual orders API
        console.log("Fetched Orders: ", ordersResponse.data);
        setRecentOrders(ordersResponse.data.slice(0, 3)); // Take the last 3 orders
      } catch (error) {
        console.error('Error fetching orders:', error);
      }
    };

    fetchOrders();
  }, []);

  const shuffleArray = (array) => {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]]; // Swap elements
    }
    return shuffledArray;
  };

  const handleManageProductsClick = () => {
    setShowDropdown(prevState => !prevState);
  };

  const handleCloseDropdown = () => {
    setShowDropdown(false);
  };

  if (!userData || !popularProducts.length || productCount === 0) {
    return <div>Loading...</div>;
  }

  const farmerInfo = {
    name: userData.name,
    greeting: `Hello, ${userData.name}! Here’s your dashboard summary.`,
  };

  const summaryData = [
    { label: "Orders", value: 25 },
    { label: "Total Earnings", value: "Rs 2,345" },
    { label: "Product Listings", value: productCount },
  ];

  return (
    <div className="relative min-h-screen bg-gray-100">
      <BB_FNavbar onManageProductsClick={handleManageProductsClick} showDropdown={showDropdown} />

      <div
        className="relative w-full h-96 bg-cover bg-center mb-6"
        style={{
          backgroundImage: `url(${BannerImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h2 className="text-white text-4xl font-bold">Farmer Dashboard</h2>
        </div>
      </div>

      <main className="max-w-6xl mx-auto p-8">
        <div className="text-center">
          <h3 className="text-2xl mb-4">{farmerInfo.greeting}</h3>
          <p>Here’s an overview of your recent activity and popular products.</p>
        </div>

        <div className="grid grid-cols-3 gap-6 mt-8 text-center">
          {summaryData.map((item, index) => (
            <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold">{item.label}</h4>
              <p className="text-2xl font-bold mt-2">{item.value}</p>
            </div>
          ))}
        </div>

        <section className="mt-12">
          <h4 className="text-2xl font-semibold mb-4">Recent Orders</h4>
          <table className="w-full border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="py-2 px-4">Product Name</th>
                <th className="py-2 px-4">Total Price</th>
                <th className="py-2 px-4">Quantity</th>
                <th className="py-2 px-4">Date</th>
              </tr>
            </thead>
            <tbody>
              {recentOrders.map((order, index) => (
                <tr key={index} className="text-center border-b">
                  <td className="py-4 px-5">{order.productName}</td>
                  <td className="py-4 px-5">Rs {order.totalAmount.toFixed(2)}</td>
                  <td className="py-4 px-5">{order.quantity}</td>
                  <td className="py-4 px-5">
                    {new Date(order.orderDate).toLocaleDateString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        <section className="mt-12">
          <h4 className="text-2xl font-semibold mb-4">Popular Products</h4>
          <div className="grid grid-cols-3 gap-6">
            {popularProducts.length > 0 ? (
              popularProducts.map((product, index) => (
                <div key={index} className="text-center bg-white p-6 rounded-lg shadow-lg">
                  <img
                    src={product.pimage || 'https://images.pexels.com/photos/28216688/pexels-photo-28216688/free-photo-of-autumn-camping.png?auto=compress&cs=tinysrgb&w=600'}
                    alt={product.pname || 'Product Image'}
                    className="w-32 h-32 mx-auto mb-4"
                  />
                  <h5 className="font-bold text-lg">{product.pname || 'Product Name'}</h5>
                  <p className="text-green-600 font-semibold">{product.pprice ? `Rs ${product.pprice}.00` : 'Price Unavailable'}</p>
                </div>
              ))
            ) : (
              <p>No popular products available.</p>
            )}
          </div>
        </section>
      </main>
    </div>
  );
};

export default FarmerDashboard;
