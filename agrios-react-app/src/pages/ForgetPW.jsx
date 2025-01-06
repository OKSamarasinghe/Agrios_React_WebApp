import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import AgriosLogo from '../assets/images/agriosLogo.png';
import Navbar from '../components/Navbar';



const ForgetPW = () => {
  const [formData, setFormData] = useState({
    email: '',
    username: '',
    accountType: '',
  });
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleRequest = (e) => {
    e.preventDefault();

    // EmailJS template parameters
    const templateParams = {
      to_email: formData.email,
      customer_name: formData.username,
      account_type: formData.accountType,
    };

    // EmailJS send logic
    emailjs
      .send('service_qswx5ss', 'template_14mxqcv', templateParams, 'hkJjQroBVGLt6BKg7')
      .then((response) => {
        console.log('Email sent successfully:', response);
        setMessage('Password reset email sent successfully.');
        setError(''); // Clear any previous errors
      })
      .catch((error) => {
        console.log('Failed to send email:', error);
        setError('Failed to send email. Please try again.');
        setMessage(''); // Clear any previous success message
      });
  };

  return (
    <div>
        <Navbar />
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-md p-8 space-y-8 bg-white shadow-lg rounded-lg">
        <div className="text-center">
            <img 
                src={AgriosLogo} 
                alt="Logo" 
                className="mx-auto h-12 w-auto"
            />
          <h2 className="mt-6 text-3xl font-bold text-green-800">
            Forgot Password
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Enter your details to reset your password.
          </p>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleRequest}>
          <div>
            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
              placeholder="Email"
            />
          </div>
          <div>
            <label htmlFor="username" className="sr-only">
              Username
            </label>
            <input
              id="username"
              name="username"
              type="text"
              value={formData.username}
              onChange={handleChange}
              required
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 sm:text-sm"
              placeholder="Username"
            />
          </div>
          <div>
            <label htmlFor="accountType" className="sr-only">
              Account Type
            </label>
            <select
              id="accountType"
              name="accountType"
              value={formData.accountType}
              onChange={handleChange}
              required
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 text-gray-900 sm:text-sm"
            >
              <option value="">Select Account Type</option>
              <option value="Farmer">Farmer</option>
              <option value="Customer">Customer</option>
            </select>
          </div>

          {error && <p className="text-red-500 text-sm">{error}</p>}
          {message && <p className="text-green-500 text-sm">{message}</p>}

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
              Request
            </button>
          </div>
        </form>
      </div>
    </div>
    </div>
  );
};

export default ForgetPW;
