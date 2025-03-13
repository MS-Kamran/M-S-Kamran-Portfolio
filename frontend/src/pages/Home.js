import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Layout from '../components/Layout';

const ProjectCard = ({ title, description, image, technologies, link, id }) => (
  <motion.a
    href={`/projects#${id}`}
    whileHover={{ scale: 1.05 }}
    className="block bg-[#0a1528] rounded-xl overflow-hidden shadow-xl cursor-pointer"
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
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech) => (
          <span
            key={tech}
            className="px-3 py-1 text-sm bg-blue-600/20 text-blue-400 rounded-full"
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

  const rotateX = useTransform(scrollYProgress, [0, 1], [20, 0]);
  const rotateY = useTransform(scrollYProgress, [0, 1], [-10, 10]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 1], [0.6, 1, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [100, 0]);

  const featuredProjects = [
    {
      id: "gender-age-prediction",
      title: "Gender & Age Prediction from Bangla Handwriting",
      description: "Machine learning model for predicting gender and age from Bangla handwriting images with detailed accuracy metrics.",
      image: "/assets/projects/Model Accuracy.png",
      technologies: ["Python", "TensorFlow", "Deep Learning", "Computer Vision", "OCR"],
      link: "https://github.com/MS-Kamran/Gender-and-Age-Prediction-from-Bangla-Handwriting-Image"
    },
    {
      id: "data-analysis-visualization",
      title: "Data Analysis & Visualization",
      description: "Comprehensive OCR data preprocessing and analysis project with visualization of insights and data patterns.",
      image: "/assets/projects/Data analysis and Data visualization.png",
      technologies: ["Python", "Pandas", "Matplotlib", "Seaborn", "OCR"],
      link: "https://github.com/MS-Kamran/OCR-Data-PreProcessinng"
    },
    {
      id: "meteorological-reports",
      title: "Meteorological Aerodrome Reports",
      description: "Analysis and processing of meteorological aerodrome reports for weather data insights.",
      image: "/assets/projects/meteorological-aerodrome-reports.jpg",
      technologies: ["Python", "Data Analysis", "Weather Data", "Reporting"],
      link: "https://github.com/MS-Kamran/Meteorological-Aerodrome-Reports"
    }
  ];

  return (
    <Layout>
      <div className="min-h-[150vh] w-full relative overflow-hidden">
        <div className="relative z-20 min-h-screen flex flex-col justify-center items-center text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl font-bold mb-8 pb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-blue-600"
          >
            ML & Data Engineering
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="space-y-8"
          >
            <motion.p
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-gray-300 max-w-2xl"
            >
              Transforming data into actionable insights through innovative machine learning solutions
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex space-x-4 justify-center"
            >
              <a
                href="/projects"
                className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-full text-white font-semibold transition-colors"
              >
                View Projects
              </a>
              <a
                href="/about"
                className="px-8 py-3 border-2 border-blue-400 hover:border-blue-500 rounded-full text-blue-400 hover:text-blue-300 font-semibold transition-colors"
              >
                About Me
              </a>
            </motion.div>
          </motion.div>
        </div>

        <motion.div 
          ref={setProjectsRef}
          className="relative z-20 py-20 px-4 perspective-1000"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{
            opacity,
            y,
            scale,
            rotateX,
            rotateY,
            transformStyle: "preserve-3d"
          }}
        >
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl font-bold text-center text-blue-400 mb-12"
          >
            Featured Projects
          </motion.h2>
          
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50, rotateX: 20 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.7,
                  delay: index * 0.2,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 5,
                  transition: { duration: 0.3 }
                }}
              >
                <ProjectCard {...project} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </Layout>
  );
};

export default Home; 