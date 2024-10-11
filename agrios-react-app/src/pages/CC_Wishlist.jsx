import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import tomatoImg from '../assets/images/tomato.jpg'; // Import the tomato image
import brinjalImg from '../assets/images/brinjal.jpg';
import BannerImage from '../assets/images/BannerImg2.jpg'; // Import your banner image

const ProductWishlist = () => {
  const navigate = useNavigate();

  // Sample data for wishlist items (Replace this with actual state management)
  const wishlistItems = [
    {
      id: 1,
      name: 'Tomato',
      image: tomatoImg,
      price: 100,
    },
    {
      id: 2,
      name: 'Brinjal',
      image: brinjalImg,
      price: 200,
    },
    // Add more items as needed
  ];

  const handleAddToCart = (item) => {
    // Logic to add the item to the cart
    console.log(`${item.name} added to cart!`);
    // Navigate to the cart page if needed
    navigate('/cart');
  };

  return (
    <div>
      <Navbar />
      
      {/* Banner Section */}
      <div
        className="relative w-full h-96 bg-cover bg-center mb-6"
        style={{
          backgroundImage: `url(${BannerImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          marginTop: 0,  // Ensure no margin at the top
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-4xl font-bold">Your Wishlist</h1>
        </div>
      </div>

      <div className="container mx-auto p-4">
        
        <div className="grid grid-cols-1 gap-4">
          {wishlistItems.map((item) => (
            <div key={item.id} className="border rounded-lg p-4 flex items-center">
              <img src={item.image} alt={item.name} className="w-32 h-32 object-cover mr-4" />
              <div className="flex-grow">
                <h2 className="font-semibold">{item.name}</h2>
                <p className="text-gray-600">Price: Rs {item.price}</p>
                <button
                  onClick={() => handleAddToCart(item)}
                  className="mt-2 bg-blue-500 text-white px-4 py-2 rounded"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductWishlist;
