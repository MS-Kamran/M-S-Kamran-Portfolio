import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import BackgroundAnimation from './BackgroundAnimation';

const Layout = ({ children }) => {
  const location = useLocation();

  const menuItems = [
    { path: '/', label: 'Home', icon: '🏠' },
    { path: '/about', label: 'About', icon: '👨‍💻' },
    { path: '/projects', label: 'Projects', icon: '🚀' },
    { path: '/skills', label: 'Skills', icon: '⚡' },
    { path: '/blog', label: 'Blog', icon: '📝' },
    { path: '/contact', label: 'Contact', icon: '📫' }
  ];

  const pageTransition = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 }
  };

  return (
    <div className="min-h-screen bg-[#050b18] relative">
      <BackgroundAnimation />

      {/* Page Content */}
      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          initial="initial"
          animate="animate"
          exit="exit"
          variants={pageTransition}
          transition={{ duration: 0.3 }}
          className="relative z-10"
        >
          {children}
        </motion.main>
      </AnimatePresence>

      {/* Progress Indicator */}
      <motion.div
        className="fixed bottom-6 left-6 z-50 flex items-center space-x-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        {menuItems.map((item) => (
          <motion.div
            key={item.path}
            className={`w-2 h-2 rounded-full ${
              location.pathname === item.path ? 'bg-blue-500' : 'bg-gray-600'
            }`}
            whileHover={{ scale: 1.5 }}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default Layout; 