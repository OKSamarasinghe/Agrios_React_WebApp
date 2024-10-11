import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Import Axios for making HTTP requests
import AgriosLogo from '../assets/images/agriosLogo.png';
import Navbar from '../components/Navbar';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const Registration = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    accountType: '',
    phoneNumber: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);

  const navigate = useNavigate(); // Initialize navigate

  // Validation for each field
  const validateForm = () => {
    const newErrors = {};

    // Name validation: only letters allowed
    if (!/^[A-Za-z]+$/.test(formData.name)) {
      newErrors.name = 'Name can only contain letters';
    }

    // Email validation
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }

    // Phone number validation: must be exactly 10 digits
    if (!/^\d{10}$/.test(formData.phoneNumber)) {
      newErrors.phoneNumber = 'Phone number must be 10 digits';
    }

    // Password and confirm password validation
    if (formData.password !== formData.confirmPassword) {
      newErrors.password = 'Passwords do not match';
    }

    setErrors(newErrors);

    // Form is valid if no errors and all fields are filled
    const isValid =
      Object.keys(newErrors).length === 0 &&
      formData.name &&
      formData.email &&
      formData.accountType &&
      formData.phoneNumber &&
      formData.password &&
      formData.confirmPassword;

    setIsFormValid(isValid);
  };

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Re-validate when form data changes
  useEffect(() => {
    validateForm();
  }, [formData]);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form before submission
    if (!isFormValid) {
      alert('Please fill out the form correctly.');
      return;
    }

    // Send form data to backend
    try {
      const response = await axios.post('http://localhost:8080/agriosuser/users', {
        name: formData.name,
        email: formData.email,
        accountType: formData.accountType,
        phoneNumber: formData.phoneNumber,
        password: formData.password,
      });

      // Handle success: redirect to login page
      console.log('Registration successful:', response.data);
      alert('Registration successful!');
      navigate('/login'); // Redirect to login page after success
    } catch (error) {
      // Handle error (show error message)
      console.error('There was an error during registration:', error);
      alert('Registration failed. Please try again.');
    }
  };

  return (
    <div>
      <Navbar />
      <div className="flex justify-center items-center min-h-screen bg-gray-100 py-12">
        <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
          <div className="flex justify-center mb-6">
            <img src={AgriosLogo} alt="Logo" className="h-10" />
          </div>
          <h2 className="text-3xl font-bold text-center mb-4 text-green-800">
            Sign up to your account
          </h2>
          <p className="text-gray-500 text-center mb-6">Welcome! Please enter your details.</p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-700 font-medium mb-1">Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter your Name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-500`}
                required
              />
              {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-500`}
                required
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1">Account Type</label>
              <select
                name="accountType"
                value={formData.accountType}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              >
                <option value="" disabled>Select Account Type</option>
                <option value="Customer">Customer</option>
                <option value="Farmer">Farmer</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1">Phone Number</label>
              <input
                type="text"
                name="phoneNumber"
                placeholder="Enter your phone number"
                value={formData.phoneNumber}
                onChange={handleChange}
                className={`w-full border ${errors.phoneNumber ? 'border-red-500' : 'border-gray-300'} rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-500`}
                required
              />
              {errors.phoneNumber && <p className="text-red-500 text-sm">{errors.phoneNumber}</p>}
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1">Password</label>
              <input
                type="password"
                name="password"
                placeholder="Enter password"
                value={formData.password}
                onChange={handleChange}
                className={`w-full border ${errors.password ? 'border-red-500' : 'border-gray-300'} rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-500`}
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1">Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                placeholder="Enter Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
              {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-green-500 text-white w-full py-2 rounded-md hover:bg-green-600 transition duration-300"
                disabled={!isFormValid} // Disable the button if form is not valid
              >
                Sign Up
              </button>
            </div>
          </form>
          <div className="text-center mt-4">
            <p className="text-sm text-gray-500">
              Have an account?{' '}
              <a href="/login" className="text-green-500 hover:underline font-medium">
                Log In
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
