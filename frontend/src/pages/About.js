import React from 'react';
import { motion } from 'framer-motion';
import Layout from '../components/Layout';

const Avatar = () => {
  return (
    <div className="relative">
      <div className="w-64 h-64 mx-auto overflow-hidden rounded-full border-4 border-blue-500">
        <img
          src="/assets/profile.jpg"
          alt="M S Kamran"
          className="w-full h-full object-cover"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' fill='%231a1a1a'/%3E%3Ctext x='50' y='50' font-family='Arial' font-size='14' fill='white' text-anchor='middle' dy='.3em'%3EAdd Photo%3C/text%3E%3C/svg%3E";
          }}
        />
      </div>
      <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
        <a
          href="/assets/cv.pdf"
          download
          className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
        >
          Download CV
        </a>
      </div>
    </div>
  );
};

const About = () => {
  return (
    <Layout>
      <div className="min-h-screen w-full relative">
        <div className="relative z-20 container mx-auto px-4 py-16">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-12"
            >
              <Avatar />
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-4xl font-bold text-blue-400 mt-8 mb-4"
              >
                M S KAMRAN
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-gray-400 text-lg"
              >
                Machine Learning Engineer & Data Scientist
              </motion.p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="space-y-6"
              >
                <div className="bg-[#0a1528] p-6 rounded-xl">
                  <h2 className="text-2xl font-semibold text-blue-400 mb-4">About Me</h2>
                  <p className="text-gray-300 text-lg mb-4">
                    Motivated computer science student with a strong foundation in data analysis, 
                    data engineering, and machine learning, complemented by expertise in data visualization.
                  </p>
                  <p className="text-gray-300 text-lg">
                    Skilled in transforming raw data into strategic insights using tools like Python, 
                    Pandas, and OpenCV, with a keen interest in transitioning into a data analysis role.
                  </p>
                </div>

                <div className="bg-[#0a1528] p-6 rounded-xl">
                  <h2 className="text-2xl font-semibold text-blue-400 mb-4">Contact</h2>
                  <div className="space-y-3 text-gray-300">
                    <p><span className="font-semibold">Phone:</span> +8801734784848</p>
                    <p><span className="font-semibold">Email:</span> mskamran996@gmail.com</p>
                    <div className="flex space-x-4">
                      <a
                        href="https://www.linkedin.com/in/m-s-kamran/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-blue-300"
                      >
                        LinkedIn
                      </a>
                      <a
                        href="https://github.com/MS-Kamran"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-blue-300"
                      >
                        GitHub
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="space-y-6"
              >
                <div className="bg-[#0a1528] p-6 rounded-xl">
                  <h2 className="text-2xl font-semibold text-blue-400 mb-4">Education</h2>
                  <ul className="space-y-4 text-gray-300">
                    <li>
                      <h3 className="font-semibold">Bachelor of Computer Science & Engineering</h3>
                      <p className="text-gray-400">BRAC University</p>
                    </li>
                    <li>
                      <h3 className="font-semibold">Higher Secondary Certificate</h3>
                      <p className="text-gray-400">Dhaka City College • 2017</p>
                      <p className="text-gray-300">Major: Science • GPA: 4.89</p>
                    </li>
                    <li>
                      <h3 className="font-semibold">Secondary School Certificate</h3>
                      <p className="text-gray-400">Faizur Rahman Ideal Institute • 2015</p>
                      <p className="text-gray-300">Major: Science • GPA: 5.00</p>
                    </li>
                  </ul>
                </div>

                <div className="bg-[#0a1528] p-6 rounded-xl">
                  <h2 className="text-2xl font-semibold text-blue-400 mb-4">Certifications</h2>
                  <ul className="space-y-4 text-gray-300">
                    <li className="flex justify-between items-start">
                      <div>
                        <h3 className="font-semibold">Data Science and Machine Learning with Python</h3>
                        <p className="text-gray-400">BITM • Nov 2023 – Jan 2024</p>
                        <p className="text-gray-300 mt-2">
                          66-hour hands-on training focused on data analysis, visualization and machine learning 
                          with Python (Pandas, Scikit-learn, Matplotlib), includes practical projects for 
                          real-world applications.
                        </p>
                      </div>
                      <a
                        href="/assets/Data science and machine learning with python, BITM, Course Completion Certificate.pdf"
                        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex-shrink-0 ml-4"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Certificate
                      </a>
                    </li>
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About; 