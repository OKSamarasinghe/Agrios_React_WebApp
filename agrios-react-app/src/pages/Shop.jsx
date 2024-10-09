import React from 'react';
import BannerImage from '../assets/images/News_banner.jpg';
import tomatoImg from '../assets/images/tomato.jpg';
import BrinjalImg from '../assets/images/brinjal.jpg';
import CarrotImg from '../assets/images/carrot.jpg';
import GarlicImg from '../assets/images/garlic.jpg';
import CucumberImg from '../assets/images/cucumber.jpg';
import LettuceImg from '../assets/images/lettuce.jpg';
import OnionImg from '../assets/images/onions.jpg';
import PotatoeImg from '../assets/images/potatoes.jpg';
import BitterGurdImg from '../assets/images/BitterGurd.jpg';

const Shop = () => {
  return (
    <div className="w-full">
      {/* Shop Banner Section */}
      <div
        className="relative w-full h-64 bg-cover bg-center mb-6"
        style={{
          backgroundImage: `url(${BannerImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}s
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>

         {/* Title centered */}
         <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-4xl font-bold">Our Shop</h1>
        </div>
      </div>

      {/* Search and Filter Bar */}
      <div className="flex justify-center mb-4 px-5">
        <input
          type="text"
          className="border border-gray-300 rounded-l px-4 py-2"
          placeholder="Search..."
        />
        <button className="bg-yellow-500 text-white px-4 py-2 rounded-r">
          Search products
        </button>
      </div>

      {/* Product Grid with 950px max-width */}
      <div
        className="grid grid-cols-2 sm:grid-cols-3 gap-4 mx-auto px-5"
        style={{ maxWidth: '950px' }}
      >
        {/* Tomato */}
        <div className="border rounded-lg p-3 shadow-md hover:shadow-lg">
          <img
            src={tomatoImg}
            alt="Tomato"
            className="w-64 h-64 object-cover mb-3" // Updated size to 250px
          />
          <h2 className="text-lg font-semibold">Tomato</h2>
          <p className="text-gray-700 mb-2">₹80.00</p>
          <button className="bg-green-500 text-white px-4 py-2 rounded">
            Add to cart
          </button>
        </div>

        {/* Brinjal */}
        <div className="border rounded-lg p-3 shadow-md hover:shadow-lg">
          <img
            src={BrinjalImg}
            alt="Brinjal"
            className="w-64 h-64 object-cover mb-3" // Updated size to 250px
          />
          <h2 className="text-lg font-semibold">Brinjal</h2>
          <p className="text-gray-700 mb-2">₹120.00</p>
          <button className="bg-green-500 text-white px-4 py-2 rounded">
            Add to cart
          </button>
        </div>

        {/* Carrot */}
        <div className="border rounded-lg p-3 shadow-md hover:shadow-lg">
          <img
            src={CarrotImg}
            alt="Carrot"
            className="w-64 h-64 object-cover mb-3" // Updated size to 250px
          />
          <h2 className="text-lg font-semibold">Carrot</h2>
          <p className="text-gray-700 mb-2">₹90.00</p>
          <button className="bg-green-500 text-white px-4 py-2 rounded">
            Add to cart
          </button>
        </div>

        {/* Garlic */}
        <div className="border rounded-lg p-3 shadow-md hover:shadow-lg">
          <img
            src={GarlicImg}
            alt="Garlic"
            className="w-64 h-64 object-cover mb-3" // Updated size to 250px
          />
          <h2 className="text-lg font-semibold">Garlic</h2>
          <p className="text-gray-700 mb-2">₹120.00</p>
          <button className="bg-green-500 text-white px-4 py-2 rounded">
            Add to cart
          </button>
        </div>

        {/* Cucumber */}
        <div className="border rounded-lg p-3 shadow-md hover:shadow-lg">
          <img
            src={CucumberImg}
            alt="Cucumber"
            className="w-64 h-64 object-cover mb-3" // Updated size to 250px
          />
          <h2 className="text-lg font-semibold">Cucumber</h2>
          <p className="text-gray-700 mb-2">₹100.00</p>
          <button className="bg-green-500 text-white px-4 py-2 rounded">
            Add to cart
          </button>
        </div>

        {/* Lettuce */}
        <div className="border rounded-lg p-3 shadow-md hover:shadow-lg">
          <img
            src={LettuceImg}
            alt="Lettuce"
            className="w-64 h-64 object-cover mb-3" // Updated size to 250px
          />
          <h2 className="text-lg font-semibold">Lettuce</h2>
          <p className="text-gray-700 mb-2">₹150.00</p>
          <button className="bg-green-500 text-white px-4 py-2 rounded">
            Add to cart
          </button>
        </div>

        {/* Onions */}
        <div className="border rounded-lg p-3 shadow-md hover:shadow-lg">
          <img
            src={OnionImg}
            alt="Onions"
            className="w-64 h-64 object-cover mb-3" // Updated size to 250px
          />
          <h2 className="text-lg font-semibold">Onions</h2>
          <p className="text-gray-700 mb-2">₹210.00</p>
          <button className="bg-green-500 text-white px-4 py-2 rounded">
            Add to cart
          </button>
        </div>

        {/* Potatoes */}
        <div className="border rounded-lg p-3 shadow-md hover:shadow-lg">
          <img
            src={PotatoeImg}
            alt="Potatoes"
            className="w-64 h-64 object-cover mb-3" // Updated size to 250px
          />
          <h2 className="text-lg font-semibold">Potatoes</h2>
          <p className="text-gray-700 mb-2">₹250.00</p>
          <button className="bg-green-500 text-white px-4 py-2 rounded">
            Add to cart
          </button>
        </div>

        {/* Bitter Gourd */}
        <div className="border rounded-lg p-3 shadow-md hover:shadow-lg">
          <img
            src={BitterGurdImg}
            alt="Bitter Gourd"
            className="w-64 h-64 object-cover mb-3" // Updated size to 250px
          />
          <h2 className="text-lg font-semibold">Bitter Gourd</h2>
          <p className="text-gray-700 mb-2">₹100.00</p>
          <button className="bg-green-500 text-white px-4 py-2 rounded">
            Add to cart
          </button>
        </div>
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-8">
        <button className="bg-gray-200 px-4 py-2 rounded mr-2">1</button>
        <button className="bg-gray-200 px-4 py-2 rounded">2</button>
      </div>
    </div>
  );
};

export default Shop;
