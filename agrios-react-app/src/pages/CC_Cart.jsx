import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BannerImage from '../assets/images/News_banner.jpg'; // Ensure this is the same banner image used in other pages
import tomatoImg from '../assets/images/tomato.jpg'; // Import the tomato image
import brinjalImg from '../assets/images/brinjal.jpg'; // Import the brinjal image
import Navbar from '../components/Navbar';

const Cart = () => {
  const navigate = useNavigate(); // Initialize navigate

  // Initial cart items are defined in the state
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Tomato',
      price: 50,
      quantity: 2,
      image: tomatoImg, // Use imported image
    },
    {
      id: 2,
      name: 'Brinjal',
      price: 120,
      quantity: 1,
      image: brinjalImg, // Use imported image
    },
  ]);

  const updateQuantity = (id, quantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div>
      <Navbar/>
    <div className="py-0 px-0"> {/* Remove padding top */}
      {/* Banner Section */}
      <div
        className="relative w-full h-96 bg-cover bg-center mb-6"
        style={{
          backgroundImage: `url(${BannerImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          marginTop: 0,  // Ensure no margin at the top
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-4xl font-bold">Shopping Cart</h1>
        </div>
      </div>

      {/* Cart Items */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto px-5" style={{ maxWidth: '950px' }}>
        {cartItems.map((item) => (
          <div key={item.id} className="border rounded-lg p-4 shadow-md">
            <img src={item.image} alt={item.name} className="w-full h-32 object-cover mb-4" />
            <h2 className="text-lg font-semibold">{item.name}</h2>
            <p className="text-gray-700">Price: ₹{item.price}</p>
            <div className="flex items-center mt-2">
              <button
                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                className="px-2 py-1 bg-gray-300 rounded"
              >
                -
              </button>
              <input
                type="number"
                value={item.quantity}
                onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                className="border border-gray-300 w-16 text-center mx-2"
              />
              <button
                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                className="px-2 py-1 bg-gray-300 rounded"
              >
                +
              </button>
            </div>
            <button
              onClick={() => removeItem(item.id)}
              className="mt-4 w-full bg-red-500 text-white px-4 py-2 rounded"
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      {/* Total Price */}
      <div className="mt-6 text-right mx-5" style={{ maxWidth: '950px' }}>
        <h2 className="text-xl font-semibold">Total Price: ₹{totalPrice}</h2>
      </div>

      {/* Checkout Button */}
      <div className="mt-6 text-center mb-6">
        <button
          className="bg-blue-500 text-white px-6 py-2 rounded"
          onClick={() => navigate('/checkout', { state: { cartItems, totalPrice } })} // Pass cart data
        >
          Proceed to Checkout
        </button>
      </div>
      </div>
    </div>
  );
};

export default Cart;
