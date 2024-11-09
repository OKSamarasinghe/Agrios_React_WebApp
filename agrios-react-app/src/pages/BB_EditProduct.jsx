import React, { useState, useEffect } from 'react';
import BB_FNavbar from '../components/BB_FNavbar'; // Import Navbar
import BannerImage from '../assets/images/BannerImg1.jpg'; // Ensure this path is correct

const EditProduct = () => {
  const [product, setProduct] = useState({
    pname: '',
    pprice: '',
    pquantity: '',
    pdescription: '',
    pimage: '',
    pdate: '',
  });
  const [showDropdown, setShowDropdown] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false); // State for delete confirmation
  const [pname, setPname] = useState(''); // Product name for search
  const [error, setError] = useState(null);
  const [searchResult, setSearchResult] = useState(null);

  // Function to fetch product by name
  const fetchProductByName = async () => {
    try {
      const response = await fetch(`http://localhost:8081/products/name/${pname}`);
      if (response.ok) {
        const productData = await response.json();
        setProduct({
          pname: productData.pname,
          pprice: productData.pprice,
          pquantity: productData.pquantity,
          pdescription: productData.pdescription,
          pimage: productData.pimage,
          pdate: productData.pdate,
        });
        setError(null);
      } else {
        setSearchResult(null);
        setError("Product not found");
      }
    } catch (error) {
      console.error("Error fetching product:", error);
      setError("An error occurred while fetching the product.");
    }
  };

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  // Handle product update form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const updatedProduct = {
      pname: product.pname,
      pprice: product.pprice,
      pquantity: product.pquantity,
      pdescription: product.pdescription,
      pimage: product.pimage,
      pdate: product.pdate,
    };

    try {
      const response = await fetch(`http://localhost:8081/products/name/${product.pname}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedProduct),
      });

      if (response.ok) {
        const result = await response.json();
        console.log('Product updated successfully:', result);
        setShowModal(true); // Show success modal
        setShowDeleteModal(false); // Close delete confirmation modal if open
      } else {
        console.error('Error updating product');
      }
    } catch (error) {
      console.error('Error updating product:', error);
    }
  };

  // Handle product deletion
  const handleDelete = async () => {
    try {
      const response = await fetch(`http://localhost:8081/products/name/${pname}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        console.log('Product deleted successfully');
        setShowDeleteModal(false); // Close delete confirmation modal
        setShowModal(false); // Close success modal if it's open
        // Optionally, reset the product state or redirect the user
        setProduct({
          pname: '',
          pprice: '',
          pquantity: '',
          pdescription: '',
          pimage: '',
          pdate: '',
        });
      } else {
        console.error('Error deleting product');
      }
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  // Navbar management click handler
  const handleManageProductsClick = () => {
    setShowDropdown((prevState) => !prevState);
  };

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

  const SuccessModal = () => (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg text-center">
        <h3 className="text-xl font-bold text-green-600">Product Updated Successfully!</h3>
        <button
          className="mt-4 bg-green-600 text-white py-2 px-4 rounded-lg"
          onClick={() => setShowModal(false)}
        >
          Close
        </button>
      </div>
    </div>
  );

  // Delete Confirmation Modal
  const DeleteConfirmationModal = () => (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg text-center">
        <h3 className="text-xl font-bold text-red-600">Do you want to delete this product?</h3>
        <div className="mt-4">
          <button
            className="bg-red-600 text-white py-2 px-4 rounded-lg mr-4"
            onClick={handleDelete}
          >
            Yes
          </button>
          <button
            className="bg-gray-600 text-white py-2 px-4 rounded-lg"
            onClick={() => setShowDeleteModal(false)}
          >
            No
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div>
      <BB_FNavbar onManageProductsClick={handleManageProductsClick} showDropdown={showDropdown} />
      <BackgroundBanner /> {/* Add background banner */}

      {/* Product search */}
      <div className="text-center mt-8">
        <input
          type="text"
          value={pname}
          onChange={(e) => setPname(e.target.value)}
          placeholder="Enter product name"
          className="p-3 border rounded-lg"
        />
        <button
          onClick={fetchProductByName}
          className="bg-green-600 text-white p-3 ml-4 rounded-lg"
        >
          Search
        </button>
      </div>

      {/* Display error message */}
      {error && (
        <div className="text-red-600 text-center mt-4">
          <p>{error}</p>
        </div>
      )}

      <div className="text-center mt-8">
        <h2 className="text-4xl font-bold">Edit Product</h2>
      </div>

      <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-lg p-8 max-w-lg mx-auto mt-8">
        {/* Product image */}
        <div className="mb-6 text-center">
          <img src={product.pimage} alt="Image" className="square w-40 h-45 mx-auto" />
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

        {/* Date (System Date) */}
        <div className="mb-6">
          <label htmlFor="pdate" className="block text-gray-700 font-semibold">Date</label>
          <input
            type="text"
            id="pdate"
            name="pdate"
            value={product.pdate}
            className="mt-2 w-full p-3 border border-gray-300 rounded-lg"
            disabled
          />
        </div>

        {/* Product Description */}
        <div className="mb-6">
          <label htmlFor="pdescription" className="block text-gray-700 font-semibold">Product Description</label>
          <textarea
            id="pdescription"
            name="pdescription"
            value={product.pdescription}
            onChange={handleChange}
            className="mt-2 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
          />
        </div>

        {/* Submit and delete buttons */}
        <div className="flex justify-between">
          <button
            type="submit"
            className="bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-green-700"
          >
            Update Product
          </button>
          <button
            type="button"
            className="bg-red-600 text-white py-3 px-6 rounded-lg hover:bg-red-700"
            onClick={() => setShowDeleteModal(true)}
          >
            Delete Product
          </button>
        </div>
      </form>

      {/* Show success modal if product is updated */}
      {showModal && <SuccessModal />}

      {/* Show delete confirmation modal */}
      {showDeleteModal && <DeleteConfirmationModal />}
    </div>
  );
};

export default EditProduct;
