import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../components/Navbar';
import BannerImage from '../assets/images/BannerImg5.jpg';

const Checkout = () => {
  const location = useLocation();
  const { product, quantity } = location.state || {};  // Get the product and quantity passed from the Product Detail page
  const [productData, setProductData] = useState(product || null);  // Initialize state with product data
  const [loading, setLoading] = useState(false); // Set loading state
  const [address, setAddress] = useState(''); // Track the user address
  const [showAddressModal, setShowAddressModal] = useState(false); // Track if the address modal should be shown
  const navigate = useNavigate();

  // Fetch additional product data if needed
  const fetchProductData = (id) => {
    setLoading(true);  // Start loading
    axios.get(`/api/products/${id}`)
      .then(response => {
        setProductData(response.data);
        setLoading(false);  // Stop loading
      })
      .catch(error => {
        console.error("Error fetching product data:", error);
        setLoading(false);  // Stop loading in case of error
      });
  };

  // Fetch product data if not passed through location state
  useEffect(() => {
    if (!productData && product && product.id) {
      fetchProductData(product.id);
    }
  }, [product, productData]);

  if (loading) return <p>Loading...</p>;
  if (!productData) return <p>Error loading product data.</p>;

  // Ensure product price and quantity are numbers
  const price = parseFloat(productData.pprice) || 0;
  const qty = parseInt(quantity, 10) || 1;

  // Calculate prices
  const discount = price * 0.1; // Assuming a 10% discount on the product price
  const deliveryCharge = 50; // Fixed delivery charge
  const finalTotal = (price * qty) - discount + deliveryCharge;

  const totalItems = qty;

  // Handle the "Proceed to Pay" button click
  const handleProceedToPay = () => {
    if (!address.trim()) {
      setShowAddressModal(true); // Show the modal if address is missing
    } else {
      navigate('/order-confirmation'); // Proceed to the next page if address is entered
    }
  };

  // Handle address input
  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const handleContinue = () => {
    if (address.trim()) {
      navigate('/order-confirmation'); // Proceed after entering the address
    } else {
      alert('Please enter your address to proceed.');
    }
  };

  return (
    <div>
      <Navbar />
      <div className="py-0 px-0">
        {/* Banner Section */}
        <div
          className="relative w-full h-96 bg-cover bg-center mb-6"
          style={{
            backgroundImage: `url(${BannerImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            marginTop: 0,
          }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-white text-4xl font-bold">Checkout</h1>
          </div>
        </div>

        {/* Checkout Summary */}
        <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold mb-4">Order Summary</h2>

          {/* Product Details */}
          <div className="flex items-center mb-4">
            <img src={productData.pimage} alt={productData.pname} className="w-16 h-16 object-cover rounded mr-3" />
            <div>
              <h3 className="font-semibold">{productData.pname}</h3>
              <p>Qty: {totalItems}</p>
              <p>Price: Rs {price}.00</p>
            </div>
          </div>

          {/* Number of Items */}
          <div className="flex justify-between mb-2">
            <span className="text-gray-600">Number of Items:</span>
            <span>{totalItems}</span>
          </div>

          {/* Total Price */}
          <div className="flex justify-between mb-2">
            <span className="text-gray-600">Total Price:</span>
            <span>Rs {(price * totalItems).toFixed(2)}</span>
          </div>

          {/* Discount */}
          <div className="flex justify-between mb-2">
            <span className="text-gray-600">Discount (10%):</span>
            <span>-Rs {discount.toFixed(2)}</span>
          </div>

          {/* Delivery Charge */}
          <div className="flex justify-between mb-2">
            <span className="text-gray-600">Delivery Charge:</span>
            <span>Rs {deliveryCharge.toFixed(2)}</span>
          </div>

          {/* Final Total */}
          <div className="flex justify-between text-lg font-semibold mt-4">
            <span>Total Amount:</span>
            <span>Rs {finalTotal.toFixed(2)}</span>
          </div>

          {/* Proceed to Pay Button */}
          <div className="mt-6 text-center">
            <button
              onClick={handleProceedToPay}
              className="bg-blue-500 text-white px-6 py-2 rounded"
            >
              Proceed to Pay
            </button>
          </div>
        </div>
      </div>

      {/* Address Modal */}
      {showAddressModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg max-w-sm w-full">
            <h3 className="text-lg font-semibold mb-4">Enter Your Address</h3>
            <input
              type="text"
              value={address}
              onChange={handleAddressChange}
              placeholder="Enter your address here"
              className="w-full p-2 border border-gray-300 rounded mb-4"
            />
            <div className="flex justify-between">
              <button
                onClick={() => setShowAddressModal(false)}
                className="bg-gray-500 text-white px-4 py-2 rounded"
              >
                Cancel
              </button>
              <button
                onClick={handleContinue}
                className="bg-blue-500 text-white px-4 py-2 rounded"
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Checkout;
