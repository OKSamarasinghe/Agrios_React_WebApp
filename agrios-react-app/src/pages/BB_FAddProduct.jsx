import React, { useState } from 'react';
import BB_FNavbar from '../components/BB_FNavbar'; // Import Navbar
import BannerImage from '../assets/images/BannerImg1.jpg'; // Ensure this path is correct

const AddProduct = () => {
  // State for form data
  const [product, setProduct] = useState({
    pname: '',
    pprice: '',
    pquantity: '',
    pdescription: '',
    pcategory: '',
    pimage: '',
    pdate: '',
  });
  const [error, setError] = useState(null); // Error state for handling errors
  const [success, setSuccess] = useState(null); // Success state for handling success messages
  const [showModal, setShowModal] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Automatically add the system date (current date) when submitting the product
    const newProduct = {
      ...product,
      pdate: new Date().toISOString().split('T')[0],  // Format: '2024-11-07'
    };

    // Log the product data before sending it
    console.log("Submitting product data:", newProduct);

    try {
      const response = await fetch('http://localhost:8081/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newProduct),
      });

      if (response.ok) {
        const result = await response.json();
        console.log('Product added successfully:', result);
        setSuccess('Product added successfully!');
        setError(null); // Clear previous errors
        setShowModal(true); // Show success modal
        setProduct({
          pname: '',
          pprice: '',
          pquantity: '',
          pdescription: '',
          pimage: '',
          pdate: '',  // Reset the date as well
        });
      } else {
        console.error('Error adding product');
        setSuccess(null); // Clear success message
        setError('Failed to add product. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting product:', error);
      setSuccess(null); // Clear success message
      setError('An error occurred while adding the product.');
    }
  };

  // Background Banner section
  const BackgroundBanner = () => (
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
        <h2 className="text-white text-4xl font-bold">Farmer Dashboard</h2>
      </div>
    </div>
  );

  // Modal for success message
  const SuccessModal = () => (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg text-center">
        <h3 className="text-xl font-bold text-green-600">Product Added Successfully!</h3>
        <button
          className="mt-4 bg-green-600 text-white py-2 px-4 rounded-lg"
          onClick={() => setShowModal(false)}
        >
          Close
        </button>
      </div>
    </div>
  );
  const handleManageProductsClick = () => {
    setShowDropdown((prevState) => !prevState);
  };

  return (
    <div>
      <BB_FNavbar onManageProductsClick={handleManageProductsClick} showDropdown={showDropdown} />
      
      <BackgroundBanner /> {/* Add background banner */}
      
      <div className="text-center mt-8">
        <h2 className="text-4xl font-bold">Add Product</h2>
      </div>

      {/* Display error message in a styled box */}
      {error && (
        <div className="max-w-lg mx-auto mt-6 bg-red-100 text-red-800 border-l-4 border-red-600 p-4 mb-6 rounded-md shadow-lg">
          <strong>Error:</strong> {error}
        </div>
      )}

      {/* Display success message in a styled box */}
      {success && (
        <div className="max-w-lg mx-auto mt-6 bg-green-100 text-green-800 border-l-4 border-green-600 p-4 mb-6 rounded-md shadow-lg">
          <strong>Success:</strong> {success}
        </div>
      )}

      <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-lg p-8 max-w-lg mx-auto mt-8">
        {/* Product image */}
        <div className="mb-6">
          <label htmlFor="pimage" className="block text-gray-700 font-semibold">Product Image URL</label>
          <input
            type="text"
            id="pimage"
            name="pimage"
            placeholder="Enter product image URL"
            value={product.pimage}
            onChange={handleChange}
            className="mt-2 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
          />
        </div>

        {/* Product Name */}
        <div className="mb-6">
          <label htmlFor="pname" className="block text-gray-700 font-semibold">Product Name</label>
          <input
            type="text"
            id="pname"
            name="pname"
            placeholder="Enter product name"
            value={product.pname}
            onChange={handleChange}
            className="mt-2 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
          />
        </div>

        {/* Product Price */}
        <div className="mb-6">
          <label htmlFor="pprice" className="block text-gray-700 font-semibold">Product Price</label>
          <input
            type="text"
            id="pprice"
            name="pprice"
            placeholder="Enter product price"
            value={product.pprice}
            onChange={handleChange}
            className="mt-2 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
          />
        </div>

        {/* Product Quantity */}
        <div className="mb-6">
          <label htmlFor="pquantity" className="block text-gray-700 font-semibold">Product Quantity</label>
          <input
            type="text"
            id="pquantity"
            name="pquantity"
            placeholder="Enter product quantity"
            value={product.pquantity}
            onChange={handleChange}
            className="mt-2 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
          />
        </div>

        {/* Date (System Date) - Automatically filled and disabled */}
        <div className="mb-6">
          <label htmlFor="pdate" className="block text-gray-700 font-semibold">Date</label>
          <input
            type="text"
            id="pdate"
            name="pdate"
            value={new Date().toISOString().split('T')[0]} // Automatically filled with current date
            readOnly
            className="mt-2 w-full p-3 border border-gray-300 rounded-lg focus:outline-none bg-gray-200"
          />
        </div>

        {/* Product Description */}
        <div className="mb-6">
          <label htmlFor="pdescription" className="block text-gray-700 font-semibold">Product Description</label>
          <textarea
            id="pdescription"
            name="pdescription"
            placeholder="Enter product description"
            value={product.pdescription}
            onChange={handleChange}
            className="mt-2 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
            rows="4"
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="mt-4 bg-green-600 text-white w-full py-3 rounded-lg font-semibold focus:outline-none focus:ring-2 focus:ring-green-600"
        >
          Add Product
        </button>
      </form>

      {/* Show success modal */}
      {showModal && <SuccessModal />}
    </div>
  );
};

export default AddProduct;
