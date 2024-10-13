import React from 'react';
import Navbar from '../components/Navbar';
import BannerImage from '../assets/images/BannerImg4.jpg';
import BB_FNavbar from '../components/BB_FNavbar';

const BB_FContact = () => {
  return (
    <div>
      <BB_FNavbar />
      <div className="w-full"> {/* Set width to full */}
      {/* Banner Section */}
      <div
        className="relative w-full h-96 bg-cover bg-center mb-6" // Set margin bottom
        style={{
          backgroundImage: `url(${BannerImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>
        {/* Title centered */}
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-4xl font-bold">Contact</h1>
        </div>
      </div>

      {/* Contact Information Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-yellow-600 p-4 rounded-lg text-center">
          <h2 className="text-xl font-semibold text-white">About</h2>
          <p className="text-white">A user-friendly website that provides various services related to agricultural fields in Sri Lanka.</p>
        </div>
        <div className="bg-green-400 p-4 rounded-lg text-center">
          <h2 className="text-xl font-semibold text-white">Contact</h2>
          <p className="text-white">+94 (0) 23 500-0978</p>
          <p className="text-white">support@agrios.com</p>
          <p className="text-white">Mon - Fri | 7:00 am - 6:00 pm</p>
        </div>
        <div className="bg-blue-400 p-4 rounded-lg text-center">
          <h2 className="text-xl font-semibold text-white">Address</h2>
          <p className="text-white">Vidya road, Colombo 7</p>
          <p className="text-white">Sri Lanka</p>
        </div>
      </div>

      {/* Google Map Embed */}
      <div className="mb-6">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63234.00000000000002!2d79.96625025000002!3d6.952645899999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2595a995a3e61%3A0x9c33036c8aa5d71e!2sWoriyangoda%20Colombo%207%20Sri%20Lanka!5e0!3m2!1sen!2sus!4v1696860865634!5m2!1sen!2sus"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          title="Map"
        ></iframe>
      </div>

      {/* Contact Form Section */}
      <div className="bg-gray-100 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">Write a Message</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="border border-gray-300 rounded w-full px-3 py-2"
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="email">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="border border-gray-300 rounded w-full px-3 py-2"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="message">
              Write a Message
            </label>
            <textarea
              id="message"
              className="border border-gray-300 rounded w-full px-3 py-2"
              rows="4"
              placeholder="Type your message"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Send a Message
          </button>
        </form>
      </div>
    </div>
    </div>
  );
};

export default BB_FContact;
