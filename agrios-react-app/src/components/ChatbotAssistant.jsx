import React, { useState } from 'react';
import { AiOutlineSend, AiOutlineClose, AiOutlineMessage } from 'react-icons/ai';

const ChatbotAssistant = () => {
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Hello! I am your Price Prediction Assistant. Here are some topics I can help with:\n1. Price Trends\n2. Price Comparison\n3. Future Prices\n4. Pin Code Authentication\n5. Next Month Price Prediction\n6. Benefits of Price Predictions\nHow can I assist you today?' },
  ]);
  const [input, setInput] = useState('');
  const [isMinimized, setIsMinimized] = useState(false);

  const handleSend = () => {
    if (input.trim() === '') return;

    const userMessage = { sender: 'user', text: input };
    const botResponse = getBotResponse(input);

    setMessages((prevMessages) => [...prevMessages, userMessage, botResponse]);
    setInput('');
  };

  const getBotResponse = (input) => {
    input = input.toLowerCase();

    if (input.includes('price trends') || input.includes('trend')) {
      return {
        sender: 'bot',
        text: 'You can find the price trends in the "Price Trends" section of the page. It shows historical price data for various vegetables in a line chart.'
      };
    }

    if (input.includes('price comparison') || input.includes('comparison')) {
      return {
        sender: 'bot',
        text: 'The "Price Comparison" section provides a bar chart comparing the prices of Carrot, Tomato, and Potato, including predictions for the next month.'
      };
    }

    if (input.includes('future prices') || input.includes('prediction')) {
      return {
        sender: 'bot',
        text: 'The "Linear Regression Price Predictions" section shows predicted prices for Carrot, Tomato, and Potato based on linear regression analysis.'
      };
    }

    if (input.includes('pin code') || input.includes('authentication')) {
      return {
        sender: 'bot',
        text: 'To access the page, you need to enter the correct premium pin code. For this demo, the pin code is PR7788.'
      };
    }

    if (input.includes('next month price') || input.includes('next month')) {
      return {
        sender: 'bot',
        text: 'Next month prices are predicted using historical trends and linear regression. Check the "Price Comparison" section for a detailed bar chart.'
      };
    }

    if (input.includes('benefits of price prediction') || input.includes('benefits')) {
      return {
        sender: 'bot',
        text: 'Price predictions help farmers and businesses plan better, reduce losses, and make informed decisions for the future.'
      };
    }

    return {
      sender: 'bot',
      text: 'I am not sure how to help with that. You can ask about price trends, price comparison, future prices, next month price predictions, or benefits of price predictions.'
    };
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <div className="fixed bottom-4 right-4">
      {isMinimized ? (
        <button
          onClick={() => setIsMinimized(false)}
          className="bg-green-600 text-white p-3 rounded-full shadow-lg hover:bg-green-700"
        >
          <AiOutlineMessage size={24} />
        </button>
      ) : (
        <div className="bg-white shadow-lg rounded-lg w-96 max-h-96 overflow-hidden flex flex-col">
          <div className="bg-green-800 text-white p-4 flex justify-between items-center">
            <span className="font-semibold">Price Prediction Assistant</span>
            <button onClick={() => setIsMinimized(true)} className="text-white">
              <AiOutlineClose size={20} />
            </button>
          </div>
          <div className="flex-1 p-4 overflow-y-auto">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`mb-4 flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`p-3 rounded-lg max-w-xs ${
                    msg.sender === 'user' ? 'bg-green-600 text-white' : 'bg-gray-200 text-black'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>
          <div className="p-4 border-t border-gray-300 flex items-center">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              className="flex-1 p-2 border border-gray-300 rounded-l-lg focus:outline-none"
              placeholder="Type your message..."
            />
            <button
              onClick={handleSend}
              className="bg-green-600 text-white p-2 rounded-r-lg hover:bg-green-700"
            >
              <AiOutlineSend size={20} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatbotAssistant;
