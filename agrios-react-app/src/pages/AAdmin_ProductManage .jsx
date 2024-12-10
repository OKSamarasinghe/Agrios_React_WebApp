import React, { useEffect, useState } from 'react';
import AAdmin_Navbar from '../components/AAdmin_Navbar';
import axios from 'axios';

const AAdmin_ProductManage = () => {
  const [products, setProducts] = useState([]);

  // Fetch products from the backend
  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get('http://localhost:8081/products');
      console.log("Response data:", response.data);  // Log the data to ensure it's correct
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  // Delete product
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8081/products/${id}`);
      setProducts(products.filter(product => product.id !== id));
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <AAdmin_Navbar />
      {/* Dashboard Header */}
      <header className="bg-green-500 text-white py-12">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl font-bold">Product Dashboard</h1>
          <p className="mt-4">Overview of Product statistics</p>
        </div>
      </header>
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">Admin Product Management</h1>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-green-500 text-white text-left">
                <th className="py-3 px-5">Product Name</th>
                <th className="py-3 px-5">Description</th>
                <th className="py-3 px-5">Price</th>
                <th className="py-3 px-5">Stock</th>
                <th className="py-3 px-5">Action</th>
              </tr>
            </thead>
            <tbody>
  {products.map((product) => (
    <tr key={product.id} className="border-b hover:bg-gray-100">
      <td className="py-4 px-5">{product.pname}</td> {/* Updated to pname */}
      <td className="py-4 px-5">{product.pdescription}</td> {/* Updated to pdescription */}
      <td className="py-4 px-5">
        {product.pprice && !isNaN(product.pprice)
          ? `Rs ${product.pprice.toFixed(2)}`
          : 'N/A'}
      </td>
      <td className="py-4 px-5">{product.pquantity}</td>
      <td className="py-4 px-5">
        <button 
          onClick={() => handleDelete(product.id)}
          className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-200 mr-2"
        >
          Delete
        </button>
        
      </td>
    </tr>
  ))}
</tbody>
          </table>
          {products.length === 0 && (
            <div className="text-center py-8 text-gray-500">No products found.</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AAdmin_ProductManage;
