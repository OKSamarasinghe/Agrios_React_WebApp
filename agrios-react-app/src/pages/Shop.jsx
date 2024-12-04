import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BannerImage from '../assets/images/BannerImg1.jpg';
import Navbar from '../components/CC_Navbar';

const Shop = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  // Function to handle navigation to product details
  const handleAddToCart = (productId) => {
    navigate(`/product/${productId}`); // Navigate to Product Detail page with product id
  };

  // Fetch products from the backend
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:8081/products'); // Adjust API endpoint accordingly
        const data = await response.json();
        setProducts(data); // Assuming the response is an array of products
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div className="w-full">
      <Navbar />

      {/* Shop Banner Section */}
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
          <h1 className="text-white text-4xl font-bold">Our Shop</h1>
        </div>
      </div>

      {/* Search and Filter Bar */}
      <div className="flex justify-center mb-4 px-5">
        <input
          type="text"
          className="border border-gray-300 rounded-l px-4 py-2"
          placeholder="Search..."
        />
        <button className="bg-yellow-500 text-white px-4 py-2 rounded-r">
          Search products
        </button>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mx-auto px-5" style={{ maxWidth: '950px' }}>
        {products.length > 0 ? (
          products.map((product) => (
            <div key={product.id} className="border rounded-lg p-3 shadow-md hover:shadow-lg">
              <img
                src={product.pimage || 'https://via.placeholder.com/250'}
                alt={product.pname}
                className="w-64 h-64 object-cover mb-3"
              />
              <h2 className="text-lg font-semibold">{product.pname}</h2>
              <p className="text-gray-700 mb-2">Rs {product.pprice}.00</p>
              <button
                onClick={() => handleAddToCart(product.id)}
                className="bg-green-500 text-white px-4 py-2 rounded"
              >
                Order Now
              </button>
            </div>
          ))
        ) : (
          <p>No products available.</p>
        )}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-8 mb-6">
        <button className="bg-gray-200 px-4 py-2 rounded mr-2">1</button>
        <button className="bg-gray-200 px-4 py-2 rounded">2</button>
      </div>
    </div>
  );
};

export default Shop;
