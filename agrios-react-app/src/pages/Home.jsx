import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ProductCard from '../components/ProductCard';
import Footer from '../components/Footer';
import tomatoImage from '../assets/images/tomato.jpg'; // Replace with actual images

const Home = () => {
  return (
    <div>
      <Hero />
      <section className="py-16">
        <h2 className="text-3xl font-bold text-center mb-8">Latest Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 container mx-auto">
          <ProductCard image={tomatoImage} name="Tomato" price="1.99" />
          {/* Repeat for other products */}
        </div>
      </section>
    </div>
  );
};

export default Home;
