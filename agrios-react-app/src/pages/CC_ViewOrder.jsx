import React from 'react';
import BannerImage from '../assets/images/BannerImg2.jpg'; // Import your banner image

const OrderDetail = () => {
  const order = {
    id: '001',
    products: [
      { name: 'Tomato', quantity: 2, price: 50 },
      { name: 'Brinjal', quantity: 1, price: 30 },
    ],
    total: 130,
    orderDate: '2024-10-11',
    status: 'Paid',
    billingAddress: 'Duke Street, Gampaha, Sri Lanka',
    shippingAddress: '456 Avenue, Colombo 05, Sri Lanka',
    notes: 'Please deliver before 5 PM.',
  };

  return (
    <div className="order-detail-container">
      {/* Banner Section */}
      <div
        className="relative w-full h-96 bg-cover bg-center mb-6"
        style={{ backgroundImage: `url(${BannerImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-4xl font-bold">Order Detail</h1>
        </div>
      </div>

      {/* Order Summary Section */}
      <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Order #{order.id}</h2>
        <p className="text-gray-600">Status: <span className="font-bold">{order.status}</span></p>
        <p className="text-gray-600">Order Date: <span className="font-bold">{order.orderDate}</span></p>
        <div className="mt-4">
          <h3 className="text-xl font-semibold">Products:</h3>
          <ul className="list-disc pl-5">
            {order.products.map((product, index) => (
              <li key={index} className="py-1">
                {product.name} - {product.quantity} x Rs {product.price}.00
              </li>
            ))}
          </ul>
          <p className="mt-2 font-bold">Total: Rs {order.total}.00</p>
        </div>
      </div>

      {/* Address Section */}
      <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-6">
        <h3 className="text-xl font-semibold">Billing Address</h3>
        <p>{order.billingAddress}</p>
        <h3 className="text-xl font-semibold mt-4">Shipping Address</h3>
        <p>{order.shippingAddress}</p>
      </div>

      {/* Notes Section */}
      <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-6">
        <h3 className="text-xl font-semibold">Order Notes</h3>
        <p>{order.notes}</p>
      </div>
    </div>
  );
};

export default OrderDetail;
