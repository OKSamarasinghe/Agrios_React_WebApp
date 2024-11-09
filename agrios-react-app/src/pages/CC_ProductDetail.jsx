import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import BannerImage from '../assets/images/BannerImg2.jpg';
import AccountImg from '../assets/images/AccountImg.jpg';

const ProductDetail = () => {
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [review, setReview] = useState('');
  const [reviews, setReviews] = useState([]);
  const navigate = useNavigate();
  const { id } = useParams(); // Get the product ID from the URL

  // Fetch the product details when the component mounts
  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await fetch(`http://localhost:8081/products/${id}`); // Fetch product data based on the ID
        const data = await response.json();
        console.log('Fetched Product:', data); // Log the fetched product data
        setProduct(data); // Set the product data to state
      } catch (error) {
        console.error('Error fetching product details:', error);
      }
    };

    fetchProductDetails();
  }, [id]); // Re-fetch when the product ID changes

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
    // Ensure that the entered quantity does not exceed the available stock
    if (quantity > product.pquantity) {
      alert(`Cannot add more than ${product.pquantity} items to the cart`);
      return;
    }

    navigate('/cart');
  };

  const handleAddToWishlist = () => {
    navigate('/wishlist');
  };

  if (!product) {
    return <div>Loading...</div>; // Show loading message while data is being fetched
  }

  return (
    <div>
      <Navbar />
      <div className="w-full">
        {/* Banner Section */}
        <div
          className="relative w-full h-96 bg-cover bg-center mb-6"
          style={{
            backgroundImage: `url(${BannerImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-white text-4xl font-bold">Product Detail</h1>
          </div>
        </div>

        {/* Product Header */}
        <h1 className="text-3xl font-bold text-center mt-0 mb-6">Product Detail</h1>

        {/* Product Information Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Product Image */}
          <div className="relative" style={{ marginLeft: '200px' }}>
            <img
              src={product.pimage || 'https://via.placeholder.com/250'} // Dynamically display product image from backend
              alt={product.pname}
              className="w-full rounded-lg shadow-md"
              style={{ width: '500px', height: '450px' }}
            />
          </div>

          {/* Product Details */}
          <div>
            <h2 className="text-2xl font-bold mb-2">{product.pname}</h2>
            <p className="text-xl font-semibold text-green-600 mb-2">Rs {product.pprice}.00</p>
            <p className="text-gray-500">{reviews.length} customer review{reviews.length > 1 && 's'}</p>
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
                  onChange={(e) => setQuantity(Math.min(Number(e.target.value), product.pquantity))}
                  className="border border-gray-300 w-16 text-center"
                />
                <button
                  onClick={() => setQuantity(Math.min(quantity + 1, product.pquantity))}
                  className="px-3 py-1 border border-gray-300"
                >
                  +
                </button>
              </div>
              <button
                onClick={handleAddToCart}
                className="mt-4 px-4 py-2 bg-yellow-500 text-white rounded"
              >
                Add to cart
              </button>
              <button
                onClick={handleAddToWishlist}
                className="ml-4 mt-4 px-4 py-2 bg-blue-500 text-white rounded"
              >
                Add to Wishlist
              </button>
            </div>
          </div>
        </div>

        {/* Description Section */}
        <div className="mb-8 ml-10 mr-10">
          <h3 className="text-xl font-semibold mb-4">Description</h3>
          <p>{product.pdescription}</p>
        </div>

        {/* Review Section */}
        <div className="mb-8 ml-10 mr-10">
          <h3 className="text-xl font-semibold mb-4">
            {reviews.length} review{reviews.length > 1 && 's'} for {product.pname}
          </h3>
          <div>
            {reviews.length > 0 ? (
              reviews.map((rev, index) => (
                <div key={index} className="flex mb-6">
                  <img
                    src={rev.avatar}
                    alt="Review Avatar"
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <p className="text-lg font-semibold">{rev.name}</p>
                    <p className="text-gray-600">{rev.date}</p>
                    <p className="mt-2">{rev.comment}</p>
                  </div>
                </div>
              ))
            ) : (
              <p>No reviews yet</p>
            )}
          </div>

          <div className="mt-6">
            <h4 className="text-lg font-semibold">Add a Review</h4>
            <form onSubmit={handleAddReview} className="mt-4">
              <textarea
                value={review}
                onChange={(e) => setReview(e.target.value)}
                placeholder="Write your review..."
                className="w-full border p-2"
                rows="4"
              />
              <button
                type="submit"
                className="mt-4 px-6 py-2 bg-green-500 text-white rounded"
              >
                Submit Review
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
