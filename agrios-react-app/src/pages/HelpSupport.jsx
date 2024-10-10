import React from 'react';

import HelpImage from '../assets/images/helpimg2.jpg';
import HelpImage2 from '../assets/images/helpimg.jpg';
import Navbar from '../components/Navbar';


const HelpSupport = () => {
  return (
    <div>
      <Navbar/>
    <div className="container mx-auto px-4 py-10">
      {/* FAQ Banner */}
      <div className="relative w-full h-64 bg-cover bg-center" style={{ backgroundImage: `url(${HelpImage})` }}>
        <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
          <h1 className="text-white text-4xl font-bold">Help and Support</h1>
        </div>
      </div>

      {/* Help Center */}
      <div className="mt-10 text-center">
        <h2 className="text-2xl font-semibold">How we can help you!</h2>
        <div className="flex justify-center mt-5">
          <img src={HelpImage2} alt="Support" className="rounded-full w-24 h-24" />
        </div>
      </div>

      {/* Assistance Options */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {[
          { title: 'Track Order', icon: '🚚' },
          { title: 'Reset Password', icon: '🔑' },
          { title: 'Payment Option', icon: '💳' },
          { title: 'User & Account', icon: '👤' },
          { title: 'Wishlist & Compare', icon: '📜' },
          { title: 'Shipping & Billing', icon: '📦' },
          { title: 'Shopping Cart & Wallet', icon: '🛒' },
          { title: 'Sell on Clicon', icon: '💼' },
        ].map((item, index) => (
          <div key={index} className="bg-gray-100 p-4 rounded-lg shadow-md flex items-center justify-center hover:bg-gray-200 transition">
            <span className="text-4xl mr-3">{item.icon}</span>
            <span className="font-semibold">{item.title}</span>
          </div>
        ))}
      </div>

      {/* Popular Topics */}
      <div className="mt-16">
        <h3 className="text-xl font-semibold mb-6 text-center">Popular Topics</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-center">
          <div className="hover:text-blue-600 cursor-pointer">How do I return my item?</div>
          <div className="hover:text-blue-600 cursor-pointer">What is Clicons Returns Policy?</div>
          <div className="hover:text-blue-600 cursor-pointer">How long is the refund process?</div>
          <div className="hover:text-blue-600 cursor-pointer">What are the “Delivery Timelines”?</div>
          <div className="hover:text-blue-600 cursor-pointer">What is “Discover Your Daraz Campaign 2022”?</div>
          <div className="hover:text-blue-600 cursor-pointer">What is the Voucher & Gift Offer in this Campaign?</div>
          <div className="hover:text-blue-600 cursor-pointer">How to cancel Clicon Order</div>
          <div className="hover:text-blue-600 cursor-pointer">Ask the Digital and Device Community</div>
          <div className="hover:text-blue-600 cursor-pointer">How to change my shop name?</div>
        </div>
      </div>

      {/* Contact Us */}
      <div className="mt-16 text-center">
        <h3 className="text-xl font-semibold mb-4">Don’t find your answer. Contact with us</h3>
        <div className="flex flex-col md:flex-row justify-center gap-6">
          <div className="bg-blue-100 p-6 rounded-lg shadow-md text-left hover:bg-blue-200 transition">
            <h4 className="text-lg font-semibold">Call us now</h4>
            <p className="mt-2">We are available online from 9:00 AM to 5:00 PM (GMT)</p>
            <p className="mt-1 font-semibold">+94-202-555-0126</p>
            <button className="mt-3 bg-blue-500 text-white px-4 py-2 rounded-lg">Call Now</button>
          </div>
          <div className="bg-green-100 p-6 rounded-lg shadow-md text-left hover:bg-green-200 transition">
            <h4 className="text-lg font-semibold">Chat with us</h4>
            <p className="mt-2">We are available online from 9:00 AM to 5:00 PM (GMT)</p>
            <p className="mt-1 font-semibold">Support@agrios.com</p>
            <button className="mt-3 bg-green-500 text-white px-4 py-2 rounded-lg">Contact Us</button>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default HelpSupport;
