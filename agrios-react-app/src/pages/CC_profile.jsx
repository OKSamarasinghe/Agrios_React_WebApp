import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar'; // Adjust the import if needed
import ProfilePicPlaceholder from '../assets/images/profile-pic-placeholder.png'; // Placeholder image
import { useNavigate } from 'react-router-dom';
import CC_Navbar from '../components/CC_Navbar'; // Adjust the import if needed

const CC_Profile = () => {
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    accountType: '',
    phoneNumber: '',
  });

  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState(userData);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const userEmail = localStorage.getItem('email'); // Assuming user email is stored in localStorage after login

  // Fetch user data from backend on component mount
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        if (userEmail) {
          const response = await axios.get(`http://localhost:8080/agriosuser/users?email=${userEmail}`);
          setUserData(response.data);
          setFormData(response.data); // Initialize form data with user data
          setLoading(false);
        } else {
          alert('User not logged in.');
          navigate('/login');
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
        setLoading(false);
      }
    };
    fetchUserData();
  }, [userEmail, navigate]);

  // Handle input changes for form fields
  const handleChange = (e) => {
    const { name, value } = e.target;

    // Validate name input to allow only letters
    if (name === 'name' && !/^[a-zA-Z\s]*$/.test(value)) {
      return; // Ignore input if it contains non-letter characters
    }

    // Validate phone number input to limit to 10 digits
    if (name === 'phoneNumber' && (value.length > 10 || isNaN(value))) {
      return; // Ignore input if it exceeds 10 digits or is not a number
    }

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission for saving changes
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`http://localhost:8080/agriosuser/users/${userData.id}`, formData);
      setUserData(response.data);
      setEditMode(false); // Exit edit mode after successful update
      alert('Profile updated successfully!');
    } catch (error) {
      console.error('Error updating profile:', error);
      alert('Failed to update profile. Please try again.');
    }
  };

  // Handle logout
  const handleLogout = () => {
    localStorage.removeItem('email'); // Remove user data from localStorage
    navigate('/login'); // Redirect to login page after logout
  };

  // Display loading indicator while data is being fetched
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <CC_Navbar />
      <div className="flex justify-center items-center min-h-screen bg-gray-100 py-12">
        <div className="bg-white shadow-lg rounded-lg p-8 max-w-lg w-full">
          <div className="flex justify-center mb-6">
            <img
              src={userData.profilePicture || ProfilePicPlaceholder}
              alt="Profile"
              className="h-24 w-24 rounded-full border border-gray-300"
            />
          </div>
          <h2 className="text-3xl font-bold text-center mb-4 text-green-800">Profile</h2>
          {editMode ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-gray-700 font-medium mb-1">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  readOnly // Disable editing for email
                  className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-1">Phone Number</label>
                <input
                  type="text"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-1">Account Type</label>
                <input
                  type="text"
                  name="accountType"
                  value={formData.accountType}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                  readOnly // Disable editing for account type
                />
              </div>
              <div className="flex justify-between">
                <button
                  type="submit"
                  className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition duration-300"
                >
                  Save Changes
                </button>
                <button
                  type="button"
                  onClick={() => setEditMode(false)}
                  className="bg-gray-300 text-gray-800 py-2 px-4 rounded-md hover:bg-gray-400 transition duration-300"
                >
                  Cancel
                </button>
              </div>
            </form>
          ) : (
            <div>
              <div className="mb-4">
                <p className="text-gray-700 font-medium">Name:</p>
                <p className="text-gray-600">{userData.name}</p>
              </div>
              <div className="mb-4">
                <p className="text-gray-700 font-medium">Email:</p>
                <p className="text-gray-600">{userData.email}</p>
              </div>
              <div className="mb-4">
                <p className="text-gray-700 font-medium">Phone Number:</p>
                <p className="text-gray-600">{userData.phoneNumber}</p>
              </div>
              <div className="mb-4">
                <p className="text-gray-700 font-medium">Account Type:</p>
                <p className="text-gray-600">{userData.accountType}</p>
              </div>
              <div className="flex justify-between">
                <button
                  onClick={() => setEditMode(true)}
                  className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition duration-300"
                >
                  Edit Profile
                </button>
                <button
                  onClick={handleLogout}
                  className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 transition duration-300"
                >
                  Logout
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CC_Profile;
