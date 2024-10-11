import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

import FAQImage from '../assets/images/faqimg.jpg';
import HelpImage from '../assets/images/helpimg.jpg';
import Navbar from '../components/Navbar';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const navigate = useNavigate(); // Initialize navigate

  const faqs = [
    {
      question: "What is a Payment Gateway?",
      answer: "A payment gateway is a technology used by merchants to accept debit or credit card purchases from customers."
    },
    {
      question: "Do I need to pay to Instapay even when there is no transaction going on in my business?",
      answer: "No, you do not need to pay Instapay where there is no transaction happening. With one of the lowest transaction charges in the industry, pay only when you get paid!"
    },
    {
      question: "What platforms does ACME payment gateway support?",
      answer: "ACME payment gateway supports multiple platforms, including web, mobile apps, and point-of-sale systems."
    },
    {
      question: "Does ACME provide international payments support?",
      answer: "Yes, ACME provides international payments support for various currencies around the world."
    },
    {
      question: "Is there any setup fee or annual maintenance fee that I need to pay regularly?",
      answer: "No, there are no setup fees or annual maintenance fees required for our payment services."
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const handleHelpClick = () => {
    navigate('/help'); // Navigate to the help page
  };

  return (
    <div>
    <div className="container mx-auto px-4 py-10">
      {/* FAQ Banner */}
      <div className="relative w-full h-64 bg-cover bg-center" style={{ backgroundImage: `url(${FAQImage})` }}>
        <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
          <h1 className="text-white text-4xl font-bold">FAQ</h1>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mt-10">
        <h2 className="text-3xl font-bold text-center">Frequently Asked Questions</h2>

        <div className="mt-8 flex flex-col md:flex-row justify-center gap-8">
          {/* Questions List */}
          <div className="w-full md:w-1/3">
            {faqs.map((faq, index) => (
              <div
                key={index}
                onClick={() => toggleFAQ(index)}
                className={`cursor-pointer py-4 px-6 mb-2 border-b-2 ${activeIndex === index ? 'text-blue-600' : 'text-gray-800'} hover:text-blue-600 transition duration-300`}
              >
                <div className="flex justify-between items-center">
                  <span>{faq.question}</span>
                  <span>{activeIndex === index ? '-' : '>'}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Answer Section */}
          <div className="w-full md:w-2/3 bg-gray-100 p-6 rounded-lg shadow-lg">
            {activeIndex !== null && (
              <div className="text-gray-800">
                <h3 className="text-xl font-semibold">{faqs[activeIndex].question}</h3>
                <p className="mt-4">{faqs[activeIndex].answer}</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Help Center Button */}
      <div className="text-center mt-10">
        <button
          onClick={handleHelpClick}
          className="bg-yellow-400 hover:bg-yellow-500 text-white font-semibold py-3 px-6 rounded-lg transition duration-300"
        >
          HELP CENTER
        </button>
      </div>
    </div>
    </div>
  );
};

export default FAQ;
