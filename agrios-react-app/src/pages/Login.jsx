import React, { useState } from 'react';
import AgriosLogo from '../assets/images/agriosLogo.png';
import GoogleIcon from '../assets/images/GoogleIcon.png';

const Login = () => {
  const [accountType, setAccountType] = useState("Customer");

  const handleAccountTypeChange = (e) => {
    setAccountType(e.target.value);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-md p-8 space-y-8 bg-white shadow-lg rounded-lg">
        <div className="text-center">
          <img 
            src={AgriosLogo} 
            alt="Logo" 
            className="mx-auto h-12 w-auto"
          />
          <h2 className="mt-6 text-3xl font-bold text-green-800 ">Log in to your account</h2>
          <p className="mt-2 text-sm text-gray-600">
            Welcome back! Please enter your details.
          </p>
        </div>
        
        <form className="mt-8 space-y-6">
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email-address" className="sr-only">Email address</label>
              <input 
                id="email-address" 
                name="email" 
                type="email" 
                autoComplete="email" 
                required 
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm" 
                placeholder="Enter your email" 
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">Password</label>
              <input 
                id="password" 
                name="password" 
                type="password" 
                autoComplete="current-password" 
                required 
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm" 
                placeholder="Enter password" 
              />
            </div>
          </div>

          <div className="mt-4">
            <label htmlFor="account-type" className="block text-sm font-medium text-gray-700">Account Type</label>
            <select
              id="account-type"
              value={accountType}
              onChange={handleAccountTypeChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
            >
              <option>Customer</option>
              <option>Farmer</option>
            </select>
          </div>

          <div className="flex items-center justify-between mt-4">
            <div className="text-sm">
              <a href="#" className="font-medium text-green-600 hover:text-green-500">Forgot password?</a>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
              Sign in
            </button>
          </div>

          <div className="mt-6 flex items-center justify-center">
            <button
              type="button"
              className="group flex justify-center py-2 px-4 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
              <img
                src={GoogleIcon}
                alt="Google icon"
                className="w-5 h-5 mr-2"
              />
              Sign in with Google
            </button>
          </div>

          <div className="text-sm text-center mt-4">
            <p>
              Don't have an account?{" "}
              <a href="/register" className="font-medium text-green-600 hover:text-green-500">Sign up</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
