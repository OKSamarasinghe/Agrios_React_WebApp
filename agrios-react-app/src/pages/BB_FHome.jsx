import React, { useState, useEffect } from 'react';
import BB_FNavbar from '../components/BB_FNavbar';
import BannerImage from '../assets/images/BannerImg3.jpg';
import axios from 'axios';

const FarmerDashboard = () => {
  const [userData, setUserData] = useState(null);
  const [popularProducts, setPopularProducts] = useState([]);
  const [productCount, setProductCount] = useState(0);
  const [showDropdown, setShowDropdown] = useState(false);
  const [recentOrders, setRecentOrders] = useState([]);

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
        const shuffledProducts = shuffleArray(productsResponse.data);
        setPopularProducts(shuffledProducts.slice(0, 3));

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
        const ordersResponse = await axios.get('http://localhost:8081/orders');
        setRecentOrders(ordersResponse.data.slice(0, 3));
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
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
  };

  const handleManageProductsClick = () => {
    setShowDropdown(prevState => !prevState);
  };

  if (!userData || !popularProducts.length || productCount === 0) {
    return <div>Loading...</div>;
  }

  const farmerInfo = {
    name: userData.name,
    greeting: `Hello, ${userData.name}! Here’s your dashboard summary.`,
  };

  const summaryData = [
    { label: "Orders", value: 25, color: 'bg-gradient-to-r from-green-400 to-blue-500' },
    { label: "Total Earnings", value: "Rs 2,345", color: 'bg-gradient-to-r from-yellow-400 to-orange-500' },
    { label: "Product Listings", value: productCount, color: 'bg-gradient-to-r from-purple-400 to-pink-500' },
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
          <h3 className="text-3xl font-bold mb-4 text-gray-800">{farmerInfo.greeting}</h3>
          <p className="text-gray-600">Here’s an overview of your recent activity and popular products.</p>
        </div>

        <div className="grid grid-cols-3 gap-6 mt-8">
          {summaryData.map((item, index) => (
            <div
              key={index}
              className={`${item.color} p-6 rounded-lg shadow-lg text-white transform hover:scale-105 transition-transform`}
            >
              <h4 className="text-xl font-semibold">{item.label}</h4>
              <p className="text-2xl font-bold mt-2">{item.value}</p>
            </div>
          ))}
        </div>

        <section className="mt-12">
          <h4 className="text-2xl font-bold mb-4 text-gray-800">Recent Orders</h4>
          <table className="w-full border border-gray-300 rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-gray-200">
                <th className="py-3 px-4 text-gray-700">Product Name</th>
                <th className="py-3 px-4 text-gray-700">Total Price</th>
                <th className="py-3 px-4 text-gray-700">Quantity</th>
                <th className="py-3 px-4 text-gray-700">Date</th>
              </tr>
            </thead>
            <tbody>
              {recentOrders.map((order, index) => (
                <tr key={index} className="text-center border-b hover:bg-gray-100">
                  <td className="py-4 px-5 text-gray-600">{order.productName}</td>
                  <td className="py-4 px-5 text-gray-600">Rs {order.totalAmount.toFixed(2)}</td>
                  <td className="py-4 px-5 text-gray-600">{order.quantity}</td>
                  <td className="py-4 px-5 text-gray-600">
                    {new Date(order.orderDate).toLocaleDateString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        <section className="mt-12">
          <h4 className="text-2xl font-bold mb-4 text-gray-800">Popular Products</h4>
          <div className="grid grid-cols-3 gap-6">
            {popularProducts.length > 0 ? (
              popularProducts.map((product, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform"
                >
                  <img
                    src={product.pimage || 'https://images.pexels.com/photos/28216688/pexels-photo-28216688/free-photo-of-autumn-camping.png?auto=compress&cs=tinysrgb&w=600'}
                    alt={product.pname || 'Product Image'}
                    className="w-32 h-32 mx-auto mb-4 rounded-full border-2 border-gray-200"
                  />
                  <h5 className="font-bold text-lg text-gray-800">{product.pname || 'Product Name'}</h5>
                  <p className="text-green-600 font-semibold mt-2">{product.pprice ? `Rs ${product.pprice}.00` : 'Price Unavailable'}</p>
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
