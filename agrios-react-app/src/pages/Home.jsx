// src/pages/Home.jsx

import React from 'react';

// Importing local images
import heroImage from '../assets/images/heroimg.jpg';
import onionsImage from '../assets/images/onion.jpg';
import carrotImage from '../assets/images/carrot.jpg';
import tomatoImage from '../assets/images/tomato.jpg';
import potatoImage from '../assets/images/potato.jpg';
import bellPepperImage from '../assets/images/bellPepper.jpg';
import greenChillieImage from '../assets/images/greenChillie.jpg';
import article1Image from '../assets/images/article1.jpg';
import article2Image from '../assets/images/article2.jpg';
import article4Image from '../assets/images/article4.jpg';
import returnIcon from '../assets/images/returnIcon.png';
import shippingIcon from '../assets/images/shippingIcon.png'
import storeIcon from '../assets/images/storeIcon.png'
import premiumIcon from '../assets/images/premiumImg.png'
import organicFrmImgIcon from '../assets/images/organicFrmImg.jpg'
import secondHeroImage from '../assets/images/secondHero2.jpg'

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen bg-cover bg-center" style={{ backgroundImage: `url(${heroImage})` }}>
        <div className="absolute inset-0 bg-black bg-opacity-0"></div>
        <div className="container mx-auto h-full flex flex-col justify-center items-center text-white text-center">
          <h1 className="text-4xl md:text-6xl font-bold">Agriculture & Organic Market</h1>
          <p className="mt-4 text-lg md:text-2xl ">Be healthy and eat fresh organic vegetables</p>
          <button className="mt-8 bg-green-500 text-white px-4 py-2 rounded">Shop Now</button>
        </div>
      </section>

        {/* Information Section */}
<section className="py-8 bg-gray-50">
  <div className="container mx-auto flex justify-around text-center text-gray-700">
    <div className="flex items-center space-x-2">
      <img src={returnIcon} alt="Return Policy" className="h-6 w-6" />
      <div>
        <strong>Return Policy</strong><br />
        Money back guarantee
      </div>
    </div>
    <div className="flex items-center space-x-2">
      <img src={shippingIcon} alt="Free Shipping" className="h-6 w-6" />
      <div>
        <strong>Free Shipping</strong><br />
        On All Orders Over Rs 1000.00
      </div>
    </div>
    <div className="flex items-center space-x-2">
      <img src={storeIcon} alt="Store Locator" className="h-6 w-6" />
      <div>
        <strong>Store Locator</strong><br />
        Find your nearest store
      </div>
    </div>
  </div>
</section>


      {/* Product Section */}
      <section className="py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Latest Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="border rounded-lg p-4">
              <img src={onionsImage} alt="Onions" className="h-40 w-full object-cover mb-4" />
              <h3 className="text-xl font-bold">Onions</h3>
              <p className="text-green-500">RS 500.00</p>
            </div>
            <div className="border rounded-lg p-4">
              <img src={carrotImage} alt="Carrot" className="h-40 w-full object-cover mb-4" />
              <h3 className="text-xl font-bold">Carrot</h3>
              <p className="text-green-500">RS 400.00</p>
            </div>
            <div className="border rounded-lg p-4">
              <img src={tomatoImage} alt="Tomato" className="h-40 w-full object-cover mb-4" />
              <h3 className="text-xl font-bold">Tomato</h3>
              <p className="text-green-500">RS 350.00</p>
            </div>
            <div className="border rounded-lg p-4">
              <img src={potatoImage} alt="Potato" className="h-40 w-full object-cover mb-4" />
              <h3 className="text-xl font-bold">Potato</h3>
              <p className="text-green-500">RS 450.00</p>
            </div>
            <div className="border rounded-lg p-4">
              <img src={bellPepperImage} alt="bellPepper" className="h-40 w-full object-cover mb-4" />
              <h3 className="text-xl font-bold">Bell Pepper</h3>
              <p className="text-green-500">RS 550.00</p>
            </div>
            <div className="border rounded-lg p-4">
              <img src={greenChillieImage} alt="greenChillie" className="h-40 w-full object-cover mb-4" />
              <h3 className="text-xl font-bold">Green Chillie</h3>
              <p className="text-green-500">RS 300.00</p>
            </div>
          </div>
        </div>
      </section>

            {/* First Section: Website Promo Section */}
<section className="relative h-96 bg-cover bg-center" style={{ backgroundImage: `url(${secondHeroImage})` }}>
  <div className="absolute inset-0 bg-black bg-opacity-0"></div>
  <div className="container mx-auto h-full flex flex-col justify-center items-center text-white text-center relative">
    <h2 className="text-4xl md:text-6xl font-bold mb-2">Welcome to the World of Organic Farming</h2>
    <p className="mt-2 text-lg md:text-3xl">Your one-stop shop for fresh, organic, and healthy vegetables!</p>
  </div>
</section>



{/* Second Section: Today's Hot Deal */}
<section className="py-16 bg-gray-100">
  <div className="container mx-auto text-center">
    <h2 className="text-3xl font-bold mb-8">Today's Hot Deal</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="border rounded-lg p-4">
        <img src={bellPepperImage} alt="Hot Deal Veggie" className="h-40 w-full object-cover mb-4" />
        <h3 className="text-xl font-bold">Bell Pepper</h3>
        <p className="text-green-500">RS 200.00</p>
      </div>
      <div className="border rounded-lg p-4">
        <img src={greenChillieImage} alt="Hot Deal Veggie" className="h-40 w-full object-cover mb-4" />
        <h3 className="text-xl font-bold">Green Chillie</h3>
        <p className="text-green-500">RS 180.00</p>
      </div>
      <div className="border rounded-lg p-4">
        <img src={tomatoImage} alt="Hot Deal Veggie" className="h-40 w-full object-cover mb-4" />
        <h3 className="text-xl font-bold">Tomato</h3>
        <p className="text-green-500">RS 250.00</p>
      </div>
    </div>
  </div>
</section>

{/* Third Section: Organic Food Section */}
<section className="py-16 bg-white">
  <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
    {/* Left Image */}
    <div className="order-1 md:order-1">
      <img src={organicFrmImgIcon} alt="Organic Farm Image" className="w-full h-auto object-cover" />
    </div>

    {/* Middle Content */}
    <div className="order-2 md:order-2 text-center md:text-left">
      <h2 className="text-3xl font-bold text-green-700">Only Organic Food</h2>
      <p className="mt-4 text-lg">We ensure that every product you purchase is fully organic, grown without the use of synthetic chemicals.</p>
      <ul className="list-disc list-inside mt-4 text-left">
        <li className="mt-2"><strong>Professional Farmers:</strong> certified growers.</li>
        <li className="mt-2"><strong>Solution Farming:</strong> Sustainable practices.</li>
      </ul>
      <button className="mt-8 bg-green-500 text-white px-4 py-2 rounded">Start Shopping Now</button>
    </div>

    {/* Right Image */}
    <div className="order-3 md:order-3">
      <img src={premiumIcon} alt="Organic Vegetables Image" className="w-full h-auto object-cover" />
    </div>
  </div>
</section>


      {/* Premium Section */}
<section className="py-16 bg-green-500"> {/* Changed background to green */}
  <div className="container mx-auto text-center">
    <h2 className="text-3xl font-bold mb-8 text-white">Be a Premium Member</h2> {/* Text color changed to white for contrast */}
    <button className="bg-yellow-500 hover:bg-green-800 text-white px-4 py-2 rounded">Get Now</button> {/* Button color updated to dark green with hover effect */}
  </div>
</section>


      {/* News Section */}
      <section className="py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">News & Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <img src={article1Image} alt="Article 1" className="h-40 w-full object-cover mb-4" />
              <h3 className="text-xl font-bold">Organic Farming Tips</h3>
            </div>
            <div>
              <img src={article2Image} alt="Article 2" className="h-40 w-full object-cover mb-4" />
              <h3 className="text-xl font-bold">Healthy Lifestyle</h3>
            </div>
            <div>
              <img src={article4Image} alt="Article 4" className="h-40 w-full object-cover mb-4" />
              <h3 className="text-xl font-bold">Fresh Produce</h3>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
