import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Layout from '../components/Layout';

const ProjectCard = ({ title, description, image, technologies, link, id }) => (
  <motion.a
    href={`#/projects#${id}`}
    whileHover={{ y: -10 }}
    className="group block relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-blue-500/50 transition-colors duration-300"
  >
    <div className="absolute inset-0 bg-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    <div className="relative h-56 overflow-hidden">
      <motion.img
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.5 }}
        src={image}
        alt={title}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-transparent to-transparent opacity-80" />
    </div>
    <div className="p-8 relative z-10">
      <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">{title}</h3>
      <p className="text-gray-400 mb-6 leading-relaxed line-clamp-3">{description}</p>
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech) => (
          <span
            key={tech}
            className="px-3 py-1 text-xs font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20 rounded-full"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  </motion.a>
);

const Home = () => {
  const [projectsRef, setProjectsRef] = useState(null);
  const { scrollYProgress } = useScroll({
    target: projectsRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);

  const featuredProjects = [
    {
      id: "gender-age-prediction",
      title: "Gender & Age Prediction from Handwriting",
      description: "Machine learning model for predicting gender and age from Bangla handwriting images. Achieved 78.34% (Gender) and 77.14% (Age) accuracy using custom architectures.",
      image: "./assets/projects/realistic_model_accuracy_tablet.png",
      technologies: ["Python", "TensorFlow", "Deep Learning", "Computer Vision", "OCR"],
      link: "https://github.com/MS-Kamran/Gender-and-Age-Prediction-from-Bangla-Handwriting-Image"
    },
    {
      id: "weather-monitoring",
      title: "Real-Time Weather Monitoring Tool",
      description: "Engineered a Python script to ingest live meteorological data from METAR API and visualized dynamic wind vectors and weather conditions.",
      image: "./assets/projects/weather_monitoring_dashboard.png",
      technologies: ["Python", "Data Analysis", "Tkinter", "API Integration"],
      link: "https://github.com/MS-Kamran/Meteorological-Aerodrome-Reports"
    },
    {
      id: "data-analysis-visualization",
      title: "Data Analysis & Visualization",
      description: "Comprehensive OCR data preprocessing and analysis project with visualization of insights and data patterns.",
      image: "./assets/projects/realistic_data_analysis.png",
      technologies: ["Python", "Pandas", "Matplotlib", "Seaborn", "OCR"],
      link: "https://github.com/MS-Kamran/OCR-Data-PreProcessinng"
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen w-full relative overflow-hidden">

        {/* Hero Section */}
        <div className="relative z-20 min-h-[90vh] flex flex-col justify-center items-center text-center px-4">
          {/* Background Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[100px] -z-10" />

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-7xl md:text-8xl font-bold mb-8 tracking-tight text-white"
          >
            ML & Data <span className="text-blue-500">Engineering</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-400 max-w-3xl mb-12 leading-relaxed"
          >
            Crafting intelligent systems with precise data engineering and state-of-the-art machine learning.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex gap-6"
          >
            <a
              href="#/projects"
              className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold transition-all hover:scale-105 shadow-lg shadow-blue-600/25"
            >
              View Projects
            </a>
            <a
              href="#/contact"
              className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-full font-semibold transition-all hover:scale-105 backdrop-blur-sm"
            >
              Contact Me
            </a>
          </motion.div>
        </div>

        {/* Featured Projects Section */}
        <motion.div
          ref={setProjectsRef}
          style={{ opacity, y }}
          className="relative z-20 py-32 px-6 bg-[#0f172a]/50 border-t border-white/5"
        >
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
              <div>
                <h2 className="text-4xl font-bold text-white mb-4">Featured <span className="text-blue-500">Projects</span></h2>
                <p className="text-gray-400 max-w-xl text-lg">A selection of my recent work in machine learning and data analysis.</p>
              </div>
              <a href="#/projects" className="flex items-center text-blue-400 hover:text-blue-300 transition-colors font-medium">
                View All Projects <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredProjects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <ProjectCard {...project} />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </Layout>
  );
};

export default Home;