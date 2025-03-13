import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

const Message = ({ text, isAI }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`flex ${isAI ? 'justify-start' : 'justify-end'} mb-4`}
    >
      <div
        className={`max-w-[70%] rounded-lg p-4 ${
          isAI
            ? 'bg-gray-800 text-white'
            : 'bg-blue-600 text-white'
        }`}
      >
        <p className="text-sm">{text}</p>
        <span className="text-xs opacity-70 mt-1 block">
          {isAI ? 'AI Assistant' : 'You'}
        </span>
      </div>
    </motion.div>
  );
};

const Contact = () => {
  const [messages, setMessages] = useState([
    {
      text: "Hello! I'm your AI assistant. How can I help you today?",
      isAI: true,
    },
  ]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Add user message
    setMessages((prev) => [...prev, { text: input, isAI: false }]);
    setInput('');

    // Simulate AI response
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          text: "Thank you for your message! I'll make sure to get back to you soon. In the meantime, you can connect with me on LinkedIn or GitHub.",
          isAI: true,
        },
      ]);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gray-900 py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600"
        >
          Get in Touch
        </motion.h1>

        <div className="bg-gray-800 rounded-lg p-6 shadow-xl">
          <div className="h-[400px] overflow-y-auto mb-4">
            {messages.map((message, index) => (
              <Message key={index} text={message.text} isAI={message.isAI} />
            ))}
            <div ref={messagesEndRef} />
          </div>

          <form onSubmit={handleSubmit} className="flex space-x-4">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 bg-gray-700 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Send
            </button>
          </form>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          <motion.a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            className="bg-gray-800 p-4 rounded-lg text-center hover:bg-gray-700 transition-colors"
          >
            <span className="text-blue-400">LinkedIn</span>
          </motion.a>
          <motion.a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            className="bg-gray-800 p-4 rounded-lg text-center hover:bg-gray-700 transition-colors"
          >
            <span className="text-blue-400">GitHub</span>
          </motion.a>
          <motion.a
            href="mailto:contact@example.com"
            whileHover={{ scale: 1.05 }}
            className="bg-gray-800 p-4 rounded-lg text-center hover:bg-gray-700 transition-colors"
          >
            <span className="text-blue-400">Email</span>
          </motion.a>
        </div>
      </div>
    </div>
  );
};

export default Contact; 