import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import BannerImage from '../assets/images/News_banner.jpg'; // Import your banner image
import tomatoImg from '../assets/images/tomato.jpg';
import AccountImg from '../assets/images/AccountImg.jpg';

const ProductDetail = () => {
  const [quantity, setQuantity] = useState(1);
  const [review, setReview] = useState('');
  const navigate = useNavigate();
  const [reviews, setReviews] = useState([
    {
      name: 'Kevin Silva',
      date: 'July 23, 2023',
      comment:
        'I ordered tomatoes from Agrios, and I was visually impressed with the quality! The tomatoes were fresh, perfectly ripe, and full of flavor—just like they are straight from the garden. They arrived neatly packed in excellent condition.',
      avatar: {AccountImg},
    },
  ]);

  // Handles adding a new review
  const handleAddReview = (e) => {
    e.preventDefault();
    const newReview = {
      name: 'Anonymous',
      date: new Date().toLocaleDateString(),
      comment: review,
      avatar: 'https://via.placeholder.com/100',
    };
    setReviews([...reviews, newReview]);
    setReview('');
  };
  const handleAddToCart = () => {
    // Here, you could also manage cart items in a context or global state
    navigate('/cart'); // Navigate to the Cart page
  };

  return (
    <div className="w-full"> {/* Set width to full */}
      {/* Banner Section */}
      <div
        className="relative w-full h-96 bg-cover bg-center mb-6" // Set margin bottom
        style={{
          backgroundImage: `url(${BannerImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>
        {/* Title centered */}
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-4xl font-bold">Product Detail</h1>
        </div>
      </div>

      {/* Product Header */}
      <h1 className="text-3xl font-bold text-center mt-0 mb-6">Our Shop</h1>

      {/* Product Information Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        {/* Product Image */}
        <div className="relative" style={{ marginLeft: '200px' }}>
          <img
            src={tomatoImg}
            alt="Tomato"
            className="w-full rounded-lg shadow-md"
            style={{ width: '500px', height: '450px' }} // Adjusted size
          />
        </div>
        {/* Product Details */}
        <div>
          <h2 className="text-2xl font-bold mb-2">Tomato</h2>
          <p className="text-xl font-semibold text-green-600 mb-2">₹50.00</p>
          <p className="text-gray-500">1 customer review</p>
          <div className="my-4">
            <label className="block text-lg font-medium">Choose Quantity</label>
            <div className="flex items-center mt-2">
            <button
                onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}
                className="px-3 py-1 border border-gray-300"
              >
                -
              </button>
              <input
                type="number"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                className="border border-gray-300 w-16 text-center"
              />
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="px-3 py-1 border border-gray-300"
              >
                +
              </button>
            </div>
            <button 
              onClick={handleAddToCart} // Update this button to navigate to cart
              className="mt-4 px-4 py-2 bg-yellow-500 text-white rounded"
            >
              Add to cart
            </button>
            <button className="ml-4 mt-4 px-4 py-2 bg-blue-500 text-white rounded">
              Add to Wishlist
            </button>
          </div>
        </div>
      </div>

      {/* Description Section */}
      <div className="mb-8" >
        <h3 className="text-xl font-semibold mb-4">Description</h3>
        <p>
        Tomatoes are a versatile, juicy fruit that comes in a variety of sizes, shapes, and colors. They range from bright red to yellow, orange, and even purple. Rich in flavor and nutrients, tomatoes are widely used in cuisines around the world, making them a staple in both home and professional kitchens.

        <h3 className="text-xl font-semibold mb-4">Nutritional Benefits:</h3> 
        <p>Tomatoes are packed with essential vitamins and minerals, including vitamin A, vitamin C, potassium, and folate. They are also an excellent source of antioxidants, particularly lycopene, which has been linked to numerous health benefits. Regular consumption of tomatoes is associated with a reduced risk of chronic diseases such as heart disease, certain cancers, and diabetes.
        </p>
        Culinary Uses: The versatility of tomatoes makes them suitable for a wide range of culinary applications. They can be eaten raw in salads, sandwiches, and salsas, or cooked into sauces, soups, and stews. Their natural sweetness balances well with savory dishes, while their acidity enhances the flavors of many recipes. Tomatoes can also be roasted, grilled, or dried to intensify their flavors and add a unique twist to various dishes.

        Varieties: There are numerous varieties of tomatoes, each with its own distinct flavor and texture. </p>
        <h3 className="text-xl font-semibold mb-4">Storage and Ripening: </h3> 
        <p>To maximize flavor and shelf life, store tomatoes at room temperature away from direct sunlight. If you have under-ripe tomatoes, you can place them in a brown paper bag to speed up the ripening process. Once ripe, they can be stored in the refrigerator for a short time, but for the best flavor, enjoy them fresh.
        </p>
        </div>

      {/* Review Section */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4">
          {reviews.length} review{reviews.length > 1 && 's'} for Tomato
        </h3>
        {reviews.map((r, index) => (
          <div key={index} className="mb-4 border-b pb-4">
            <div className="flex items-center">
              <img
                src={AccountImg}
                alt={r.name}
                className="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <p className="font-bold">{r.name}</p>
                <p className="text-sm text-gray-500">{r.date}</p>
              </div>
            </div>
            <p className="mt-2">{r.comment}</p>
          </div>
        ))}
      </div>

      {/* Add a Review Section */}
      <div className="bg-gray-100 p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-4">Add a Review</h3>
        <form onSubmit={handleAddReview}>
          <textarea
            value={review}
            onChange={(e) => setReview(e.target.value)}
            className="w-full p-2 mb-4 border border-gray-300 rounded"
            placeholder="Write your review..."
            rows="4"
          ></textarea>
          <button
            type="submit"
            className="bg-green-600 text-white px-4 py-2 rounded"
          >
            Submit Review
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProductDetail;
