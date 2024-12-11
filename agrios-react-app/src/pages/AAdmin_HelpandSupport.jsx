import React, { useEffect, useState } from 'react';
import AAdmin_Navbar from '../components/AAdmin_Navbar';
import axios from 'axios';

const AAdmin_HelpandSupport = () => {
  const [messages, setMessages] = useState([]);

  // Fetch messages from the backend
  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    try {
      const response = await axios.get('http://localhost:8081/api/messages');
      setMessages(response.data);
    } catch (error) {
      console.error("Error fetching messages:", error);
    }
  };

  // Delete message
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8081/api/messages/${id}`);
      setMessages(messages.filter(message => message.id !== id));
    } catch (error) {
      console.error("Error deleting message:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <AAdmin_Navbar />
      {/* Dashboard Header */}
      <header className="bg-green-500 text-white py-12">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl font-bold">User Messages - Help & Support</h1>
          <p className="mt-4">Manage user messages and support queries</p>
        </div>
      </header>
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">Manage User Messages</h1>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-green-500 text-white text-left">
                <th className="py-3 px-5">Name</th>
                <th className="py-3 px-5">Email</th>
                <th className="py-3 px-5">Message</th>
                
              </tr>
            </thead>
            <tbody>
              {messages.map((message) => (
                <tr key={message.id} className="border-b hover:bg-gray-100">
                  <td className="py-4 px-5">{message.name}</td>
                  <td className="py-4 px-5">{message.email}</td>
                  <td className="py-4 px-5">{message.message}</td>
                 
                </tr>
              ))}
            </tbody>
          </table>
          {messages.length === 0 && (
            <div className="text-center py-8 text-gray-500">No messages found.</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AAdmin_HelpandSupport;
