import React from 'react';
import { motion } from 'framer-motion';
import Layout from '../components/Layout';

const ProjectCard = ({ title, description, image, technologies, link }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="bg-[#0a1528] rounded-xl overflow-hidden shadow-xl"
  >
    <div className="relative h-48 overflow-hidden">
      <motion.img
        initial={{ scale: 1.2 }}
        whileHover={{ scale: 1 }}
        src={image}
        alt={title}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a1528] to-transparent" />
    </div>
    <div className="p-6">
      <h3 className="text-xl font-semibold text-blue-400 mb-2">{title}</h3>
      <p className="text-gray-300 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {technologies.map((tech) => (
          <span
            key={tech}
            className="px-3 py-1 text-sm bg-blue-600/20 text-blue-400 rounded-full"
          >
            {tech}
          </span>
        ))}
      </div>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
      >
        View Project
      </a>
    </div>
  </motion.div>
);

const Projects = () => {
  const projects = [
    {
      title: "Data Analysis & Visualization",
      description: "Comprehensive OCR data preprocessing and analysis project with visualization of insights and data patterns.",
      image: "/assets/projects/Data analysis and Data visualization.png",
      technologies: ["Python", "Pandas", "Matplotlib", "Seaborn", "OCR"],
      link: "https://github.com/MS-Kamran/OCR-Data-PreProcessinng"
    },
    {
      title: "OCR Data Preprocessing",
      description: "Advanced image processing system for OCR data preprocessing, including enhancement and analysis techniques.",
      image: "/assets/projects/Image processing.png",
      technologies: ["Python", "OpenCV", "NumPy", "OCR", "Image Processing"],
      link: "https://github.com/MS-Kamran/OCR-Data-PreProcessinng"
    },
    {
      title: "Meteorological Aerodrome Reports",
      description: "Analysis and processing of meteorological aerodrome reports for weather data insights.",
      image: "/assets/projects/meteorological-aerodrome-reports.jpg",
      technologies: ["Python", "Data Analysis", "Weather Data", "Reporting"],
      link: "https://github.com/MS-Kamran/Meteorological-Aerodrome-Reports"
    },
    {
      title: "Gender & Age Prediction from Bangla Handwriting",
      description: "Machine learning model for predicting gender and age from Bangla handwriting images with detailed accuracy metrics.",
      image: "/assets/projects/Model Accuracy.png",
      technologies: ["Python", "TensorFlow", "Deep Learning", "Computer Vision", "OCR"],
      link: "https://github.com/MS-Kamran/Gender-and-Age-Prediction-from-Bangla-Handwriting-Image"
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen w-full relative">
        <div className="relative z-20 container mx-auto px-4 py-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold text-blue-400 mb-12"
          >
            Projects
          </motion.h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <ProjectCard {...project} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Projects; 