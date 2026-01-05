import React from 'react';
import { motion } from 'framer-motion';
import Layout from '../components/Layout';

const Avatar = () => {
  return (
    <div className="relative">
      <div className="w-64 h-64 mx-auto overflow-hidden rounded-full border-4 border-blue-500">
        <img
          src="./assets/profile.jpg"
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
          href="./assets/M S Kamran Resume.pdf"
          download
          className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors whitespace-nowrap shadow-lg"
        >
          Download CV
        </a>
      </div>
    </div>
  );
};

const Section = ({ title, children, className = "" }) => (
  <div className={`mb-12 ${className}`}>
    <h2 className="text-2xl font-bold text-gray-100 mb-8 border-l-4 border-blue-500 pl-4">{title}</h2>
    <div className="bg-white/5 p-8 rounded-2xl border border-white/10 backdrop-blur-sm hover:border-blue-500/30 transition-colors">
      {children}
    </div>
  </div>
);

const About = () => {
  return (
    <Layout>
      <div className="min-h-screen w-full relative">
        <div className="relative z-20 container mx-auto px-4 py-16">
          <div className="max-w-6xl mx-auto">
            {/* Header Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-16"
            >
              <Avatar />
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-4xl font-bold text-blue-400 mt-10 mb-4"
              >
                M S KAMRAN
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-gray-400 text-lg max-w-2xl mx-auto"
              >
                Data Engineering and AI-focused Software Engineer with experience in machine learning, data preprocessing, pipeline automation, and server security.
              </motion.p>
            </motion.div>

            <div className="space-y-8">
              {/* Summary */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <Section title="Summary">
                  <p className="text-gray-300 leading-relaxed text-lg">
                    Proven ability to bridge the gap between raw data and intelligent application, having engineered ETL pipelines that reduce manual workloads by 80% and developed deep learning models on large-scale datasets. Skilled in Python, SQL, Cloud deployment, and robust system recovery in production environments.
                  </p>
                </Section>
              </motion.div>

              {/* Work Experience */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <Section title="Work Experience">
                  <div className="space-y-6">
                    <div className="relative pl-8 border-l-2 border-blue-500/30 pb-2">
                      <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-500"></div>
                      <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-gray-100">Software Engineer (AI, Data Systems & Security)</h3>
                          <p className="text-blue-400 font-medium">Roaming Tours & Travels</p>
                        </div>
                        <span className="text-gray-400 bg-[#020617] px-3 py-1 rounded-full border border-blue-500/20 mt-2 md:mt-0 w-fit">
                          June 2025 – Present
                        </span>
                      </div>

                      <ul className="space-y-3 text-gray-300 list-disc pl-4">
                        <li><span className="font-semibold text-blue-300">Backend API Integration:</span> Developed core logic for air ticket search and booking by integrating complex GDS APIs, ensuring real-time data consistency between the OTA platform and airline databases.</li>
                        <li><span className="font-semibold text-blue-300">Process Automation:</span> Built an Automated Itinerary Generator using JavaScript to reduce manual creation time by 80%, and designed a dynamic Google Sheets dashboard to ingest/clean unstructured sales data, saving 5+ hours of manual work weekly.</li>
                        <li><span className="font-semibold text-blue-300">Cybersecurity & System Recovery:</span> Orchestrated disaster recovery after a critical SQL Injection attack, restoring the full production system with minimal downtime. Reduced attack surface by 90%+ by implementing Cloudflare, enforcing strict UFW firewall rules, and conducting routine Nmap audits.</li>
                        <li><span className="font-semibold text-blue-300">Project Management:</span> Managed workflow structuring and task prioritization, overseeing the technical lifecycle from feature planning to progress reporting.</li>
                        <li><span className="font-semibold text-blue-300">Advanced Prototyping:</span> Prototyped an OCR document scanner to extract structured data from visa documents and designed the logic for a GenAI-powered chatbot to automate itinerary creation.</li>
                      </ul>
                    </div>
                  </div>
                </Section>
              </motion.div>

              {/* Education & Certifications */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-8"
              >
                <Section title="Education">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-bold text-gray-100">B.Sc. in Computer Science & Engineering</h3>
                      <p className="text-blue-400">BRAC University</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-100">HSC (Science)</h3>
                      <p className="text-blue-400">Dhaka City College</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-100">SSC (Science)</h3>
                      <p className="text-blue-400">Faizur Rahman Ideal Institute</p>
                    </div>
                  </div>
                </Section>

                <Section title="Certifications">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-bold text-gray-100">Data Science and Machine Learning with Python</h3>
                      <p className="text-blue-400">BITM • Nov 2023 – Jan 2024</p>
                      <p className="text-gray-400 text-sm mt-1">66-hour intensive training on data analysis and predictive modeling using Pandas, Scikit-learn, and Matplotlib.</p>
                      <a href="./assets/Data science and machine learning with python, BITM, Course Completion Certificate.pdf" target="_blank" rel="noopener noreferrer" className="inline-block mt-3 text-sm text-blue-400 hover:text-blue-300 underline">View Certificate</a>
                    </div>
                  </div>
                </Section>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
