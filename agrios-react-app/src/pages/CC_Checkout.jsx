import React from 'react';
import BannerImage from '../assets/images/News_banner.jpg'; // Use the same banner image
import { useLocation } from 'react-router-dom'; // To pass data between pages
import Navbar from '../components/Navbar';

const Checkout = () => {
  const location = useLocation();
  const { cartItems, totalPrice } = location.state; // Get the cart data passed from Cart page

  // Assuming a 10% discount on the total price
  const discount = totalPrice * 0.1;
  const deliveryCharge = 50; // Fixed delivery charge
  const finalTotal = totalPrice - discount + deliveryCharge;

  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <div>
    <Navbar/>
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

        {/* Items List */}
        <div className="mb-4">
          {cartItems.map((item) => (
            <div key={item.id} className="flex items-center mb-3">
              <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded mr-3" />
              <div>
                <h3 className="font-semibold">{item.name}</h3>
                <p>Qty: {item.quantity}</p>
                <p>Price: ₹{item.price}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Number of Items */}
        <div className="flex justify-between mb-2">
          <span className="text-gray-600">Number of Items:</span>
          <span>{totalItems}</span>
        </div>

        {/* Total Price */}
        <div className="flex justify-between mb-2">
          <span className="text-gray-600">Total Price:</span>
          <span>₹{totalPrice.toFixed(2)}</span>
        </div>

        {/* Discount */}
        <div className="flex justify-between mb-2">
          <span className="text-gray-600">Discount (10%):</span>
          <span>-₹{discount.toFixed(2)}</span>
        </div>

        {/* Delivery Charge */}
        <div className="flex justify-between mb-2">
          <span className="text-gray-600">Delivery Charge:</span>
          <span>₹{deliveryCharge.toFixed(2)}</span>
        </div>

        {/* Final Total */}
        <div className="flex justify-between text-lg font-semibold mt-4">
          <span>Total Amount:</span>
          <span>₹{finalTotal.toFixed(2)}</span>
        </div>

        {/* Proceed to Pay Button */}
        <div className="mt-6 text-center">
          <button className="bg-blue-500 text-white px-6 py-2 rounded">Proceed to Pay</button>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Checkout;
