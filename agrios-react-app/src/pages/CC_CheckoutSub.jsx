import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import emailjs from 'emailjs-com';
import BannerImage from '../assets/images/BannerImg6.jpg';

const CC_Checkout = () => {
  const [cardDetails, setCardDetails] = useState({
    cardNumber: '',
    cardHolder: '',
    expirationDate: '',
    cvv: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCardDetails({
      ...cardDetails,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log('Card details submitted:', cardDetails);
  };

  const navigate = useNavigate();

  const handleProceedToPay = () => {
    // Add any payment logic here if needed

    // Send email
    const templateParams = {
      to_email: 'sohanweerasinghe17@gmail.com',
      customer_name: cardDetails.cardHolder,
      code: 'PR7788', // Example code; replace with dynamic value if needed
    };

    emailjs.send('service_qswx5ss', 'template_p9lci8n', templateParams, 'hkJjQroBVGLt6BKg7')
      .then((response) => {
        console.log('Email sent successfully:', response);
        // After sending email, navigate to Order Confirmation page
        navigate('/sub-order');
      })
      .catch((error) => {
        console.log('Failed to send email:', error);
      });
  };

  return (
    <div className="checkout-page flex flex-col items-center p-0">
      {/* Banner Section */}
      <div 
        className="relative w-full h-96 mb-6" 
        style={{
          backgroundImage: `url(${BannerImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          margin: 0,
          padding: 0
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-4xl font-bold">Complete Registration Payment</h1>
        </div>
      </div>

      <form className="payment-form bg-white rounded-lg shadow-lg p-8 w-full max-w-md" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="cardNumber">
            Card Number
          </label>
          <input
            type="text"
            name="cardNumber"
            value={cardDetails.cardNumber}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="1234 5678 9012 3456"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="cardHolder">
            Card Holder Name
          </label>
          <input
            type="text"
            name="cardHolder"
            value={cardDetails.cardHolder}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="John Doe"
            required
          />
        </div>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="expirationDate">
              Expiration Date
            </label>
            <input
              type="text"
              name="expirationDate"
              value={cardDetails.expirationDate}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="MM/YY"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="cvv">
              CVV
            </label>
            <input
              type="text"
              name="cvv"
              value={cardDetails.cvv}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="123"
              required
            />
          </div>
        </div>
        <button
          onClick={handleProceedToPay}
          type="submit"
          className="btn bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 w-full"
        >
          Pay Now
        </button>
      </form>
    </div>
  );
};

export default CC_Checkout;
