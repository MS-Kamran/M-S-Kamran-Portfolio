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
      title: "Gender & Age Prediction from Bangla Handwriting",
      description: "Machine learning model for predicting gender and age from Bangla handwriting images. Achieved 78.34% (Gender) and 77.14% (Age) accuracy using custom architectures.",
      image: "./assets/projects/realistic_model_accuracy_tablet.png",
      technologies: ["Python", "TensorFlow", "Deep Learning", "Computer Vision", "OCR"],
      link: "https://github.com/MS-Kamran/Gender-and-Age-Prediction-from-Bangla-Handwriting-Image"
    },
    {
      title: "Real-Time Weather Monitoring Tool",
      description: "Engineered a Python script to ingest live meteorological data from METAR API and visualized dynamic wind vectors and weather conditions.",
      image: "./assets/projects/weather_monitoring_dashboard.png",
      technologies: ["Python", "Data Analysis", "Tkinter", "API Integration"],
      link: "https://github.com/MS-Kamran/Meteorological-Aerodrome-Reports"
    },
    {
      title: "Data Analysis & Visualization",
      description: "Comprehensive OCR data preprocessing and analysis project with visualization of insights and data patterns.",
      image: "./assets/projects/realistic_data_analysis.png",
      technologies: ["Python", "Pandas", "Matplotlib", "Seaborn", "OCR"],
      link: "https://github.com/MS-Kamran/OCR-Data-PreProcessinng"
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
            className="text-4xl font-bold text-blue-400 mb-12 text-center"
          >
            Projects
          </motion.h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
