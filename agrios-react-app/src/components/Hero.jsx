import React from 'react';
import heroImage from '../assets/images/hero-image.jpg'; // Replace with actual image

const Hero = () => {
  return (
    <div className="relative bg-cover bg-center h-screen" style={{ backgroundImage: `url(${heroImage})` }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
        <h1 className="text-5xl font-bold mb-4">Agriculture & Organic Market</h1>
        <button className="bg-green-500 px-6 py-3 text-xl rounded-lg">Shop Now</button>
      </div>
    </div>
  );
};

export default Hero;
