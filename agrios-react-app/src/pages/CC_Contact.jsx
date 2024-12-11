import React, { useState } from 'react';
import axios from 'axios';
import CC_Navbar from '../components/CC_Navbar';
import BannerImage from '../assets/images/BannerImg4.jpg';

const CC_Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      name: name,
      email: email,
      message: message,
    };

    try {
      // Send POST request to backend
      await axios.post('http://localhost:8081/api/messages', data);
      setIsSent(true);
      setName('');
      setEmail('');
      setMessage('');
    } catch (error) {
      console.error("There was an error sending the message!", error);
    }
  };

  return (
    <div>
      <CC_Navbar />
      <div className="w-full">
        {/* Banner Section */}
        <div
          className="relative w-full h-96 bg-cover bg-center mb-6"
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

        {/* Contact Form Section */}
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">Write a Message</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                value={message}
                onChange={(e) => setMessage(e.target.value)}
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
            {isSent && <p className="mt-4 text-green-500">Message sent successfully!</p>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default CC_Contact;
