import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const DataVisualization = ({ data }) => {
  const width = 400;
  const height = 200;
  const padding = 20;
  const xScale = (width - 2 * padding) / (data.length - 1);
  const yScale = (height - 2 * padding) / Math.max(...data);

  const points = data.map((value, index) => ({
    x: padding + index * xScale,
    y: height - padding - value * yScale,
  }));

  const path = points.reduce((acc, point, index) => {
    if (index === 0) return `M ${point.x} ${point.y}`;
    return `${acc} L ${point.x} ${point.y}`;
  }, '');

  return (
    <svg width={width} height={height} className="w-full h-full">
      <path
        d={path}
        fill="none"
        stroke="#4F46E5"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const BlogCard = ({ title, excerpt, date, category, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-transform duration-300"
    >
      <div className="p-6">
        <div className="flex items-center space-x-2 mb-2">
          <span className="px-2 py-1 text-xs bg-blue-600 text-white rounded-full">
            {category}
          </span>
          <span className="text-gray-400 text-sm">{date}</span>
        </div>
        <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
        <p className="text-gray-300">{excerpt}</p>
      </div>
    </motion.div>
  );
};

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [posts, setPosts] = useState([]);
  
  // Sample data for visualization
  const aiTrendsData = [0.2, 0.4, 0.6, 0.8, 0.7, 0.9, 1.0, 0.8, 0.9, 1.0];

  const categories = ['all', 'Machine Learning', 'Data Engineering', 'AI Trends', 'Cloud Computing'];

  useEffect(() => {
    // Fetch blog posts from the backend
    fetch('http://localhost:5001/api/blog')
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch((error) => console.error('Error fetching blog posts:', error));
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600"
        >
          AI Insights & Blog
        </motion.h1>

        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-gray-800 rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-white mb-4">AI Trends 2024</h2>
            <div className="h-[300px]">
              <DataVisualization data={aiTrendsData} />
            </div>
          </div>

          <div className="bg-gray-800 rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-white mb-4">Latest Insights</h2>
            <div className="space-y-4">
              {posts.slice(0, 3).map((post, index) => (
                <div key={index} className="border-b border-gray-700 pb-4">
                  <h3 className="text-lg font-medium text-white">{post.title}</h3>
                  <p className="text-gray-400 text-sm">{new Date(post.created_at).toLocaleDateString()}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {posts
            .filter((post) => selectedCategory === 'all' || post.category === selectedCategory)
            .map((post, index) => (
              <BlogCard
                key={post.id}
                title={post.title}
                excerpt={post.content.substring(0, 150) + '...'}
                date={new Date(post.created_at).toLocaleDateString()}
                category={post.category}
                index={index}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Blog; 