import React from "react";

import ServiceImg from '../assets/images/serviceimg.jpg';
import AgricultureProductImage from '../assets/images/AgricultureProduct.jpg';
import OrganicProductImage from '../assets/images/organicProduct.jpg';
import FreshVegetablesImage from '../assets/images/freshVegetables.jpg';
import PricePredictionsImage from '../assets/images/pricePrediction.jpg';
import DeliveryGuyImage from '../assets/images/deliveryGuy.jpg';
import HarvestImage from '../assets/images/harvestimg2.jpg';
import MaintainImage from '../assets/images/maintainimg.jpg';
import FencingImage from '../assets/images/fencingimg.jpg';
import Navbar from "../components/Navbar";

const Services = () => {
  return (
    <div className="bg-white">
      <Navbar />
      {/* Banner Section */}
      <div className="relative bg-cover bg-center h-96" style={{ backgroundImage: `url(${ServiceImg})` }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-5xl font-bold">Services</h1>
        </div>
      </div>

      {/* Services Cards */}
      <section className="py-12">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Service Card 1 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src={AgricultureProductImage} alt="Agriculture Products" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-lg font-bold mb-2">Agriculture Products</h3>
                <p className="text-gray-600">Explore our wide range of fresh agriculture products.</p>
                <button className="mt-4 bg-green-600 text-white px-4 py-2 rounded-md">Read More</button>
              </div>
            </div>

            {/* Service Card 2 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src={OrganicProductImage} alt="Organic Products" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-lg font-bold mb-2">Organic Products</h3>
                <p className="text-gray-600">Premium quality organic products for your healthy lifestyle.</p>
                <button className="mt-4 bg-green-600 text-white px-4 py-2 rounded-md">Read More</button>
              </div>
            </div>

            {/* Service Card 3 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src={FreshVegetablesImage} alt="Fresh Vegetables" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-lg font-bold mb-2">Fresh Vegetables</h3>
                <p className="text-gray-600">Get fresh and locally sourced vegetables directly from farms.</p>
                <button className="mt-4 bg-green-600 text-white px-4 py-2 rounded-md">Read More</button>
              </div>
            </div>

            {/* Service Card 4 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src={PricePredictionsImage} alt="Price Predictions" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-lg font-bold mb-2">Price Predictions</h3>
                <p className="text-gray-600">Accurate price predictions for better decision-making.</p>
                <button className="mt-4 bg-green-600 text-white px-4 py-2 rounded-md">Read More</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlight Section */}
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Agriculture Matters to the Future of Development</h2>
          <p className="text-gray-700 mb-8">We ensure quality standards, organic farming, and sustainable agriculture.</p>
          <div className="flex justify-center">
            <button className="bg-green-600 text-white px-6 py-3 rounded-md">Watch our video</button>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-12">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 items-center">
          <div>
            <img src={DeliveryGuyImage} alt="DeliveryGuy" className="w-full h-80 object-cover rounded-lg" />
          </div>
          <div>
            <h3 className="text-3xl font-bold mb-4">Healthy Food for Good Growth</h3>
            <p className="text-gray-600 mb-6">Direct from farm, supporting local farmers, eco-friendly, and affordable pricing.</p>
            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <img src={HarvestImage} alt="Harvesting" className="w-12 h-12 mb-2" />
                <span>Harvesting</span>
              </div>
              <div className="flex flex-col items-center">
                <img src={MaintainImage} alt="Maintenance" className="w-12 h-12 mb-2" />
                <span>Maintenance</span>
              </div>
              <div className="flex flex-col items-center">
                <img src={FencingImage} alt="Fencing" className="w-12 h-12 mb-2" />
                <span>Fencing</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-green-600 py-12 text-white text-center">
        <h3 className="text-2xl font-bold">We're popular in agriculture market globally</h3>
        <button className="mt-4 bg-white text-green-600 px-6 py-3 rounded-md">Discover More</button>
      </section>
    </div>
  );
};

export default Services;
