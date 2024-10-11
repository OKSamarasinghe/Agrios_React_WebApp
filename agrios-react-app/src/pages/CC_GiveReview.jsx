import React, { useState } from 'react';
import BannerImage from '../assets/images/BannerImg7.jpg'; // Import your banner image

const GiveReview = () => {
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState('');
  const [title, setTitle] = useState('');

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    // Submit review logic
    console.log({ rating, title, review });
    // Reset form
    setRating(0);
    setTitle('');
    setReview('');
  };

  return (
    <div>
        <navbar/>
    <div className="give-review-container">
      {/* Banner Section */}
      <div
        className="relative w-full h-64 bg-cover bg-center mb-6"
        style={{ backgroundImage: `url(${BannerImage})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-4xl font-bold">Give Your Review</h1>
        </div>
      </div>

      <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">Share Your Experience</h2>
        <form onSubmit={handleReviewSubmit}>
          <div className="mb-4">
            <label className="block mb-2">Rating:</label>
            <input
              type="number"
              value={rating}
              onChange={(e) => setRating(Number(e.target.value))}
              min="1"
              max="5"
              className="border rounded p-2 w-full"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Title:</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="border rounded p-2 w-full"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Review:</label>
            <textarea
              value={review}
              onChange={(e) => setReview(e.target.value)}
              className="border rounded p-2 w-full"
              rows="5"
            />
          </div>
          <div className="mt-4">
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-200">
              Submit Review
            </button>
          </div>
        </form>
      </div>
      </div>
    </div>
  );
};

export default GiveReview;
