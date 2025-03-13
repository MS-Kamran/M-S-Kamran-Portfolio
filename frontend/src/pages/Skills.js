import React from 'react';
import { motion } from 'framer-motion';
import Layout from '../components/Layout';

const SkillCard = ({ title, skills }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="bg-[#0a1528] p-6 rounded-xl"
  >
    <h2 className="text-2xl font-semibold text-blue-400 mb-4">{title}</h2>
    <div className="flex flex-wrap gap-3">
      {skills.map((skill) => (
        <motion.span
          key={skill}
          whileHover={{ scale: 1.1 }}
          className="px-4 py-2 bg-blue-600/20 text-blue-400 rounded-full text-sm font-medium"
        >
          {skill}
        </motion.span>
      ))}
    </div>
  </motion.div>
);

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Python", "R", "C", "Java", "JavaScript"]
    },
    {
      title: "Libraries & Frameworks",
      skills: ["Pandas", "Scikit-learn", "NumPy", "TensorFlow/Keras", "Pillow", "OpenCV"]
    },
    {
      title: "Tools & Technologies",
      skills: ["Excel (Advanced)", "Power BI (Learning)", "Tableau (Learning)", "AI Tools", "Kaggle", "ChatGPT"]
    },
    {
      title: "Relevant Experience",
      skills: [
        "Data Preprocessing",
        "Data Cleaning",
        "Data Visualization",
        "Deep Learning Model Development",
        "Image Processing",
        "Automated File Management",
        "CSV Data Analysis"
      ]
    },
    {
      title: "Additional Skills",
      skills: [
        "Project Management",
        "Prompt Engineering",
        "Digital Marketing",
        "Data Analysis",
        "Presentation Skills"
      ]
    },
    {
      title: "Languages",
      skills: ["Bangla", "English"]
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
            Skills & Expertise
          </motion.h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <SkillCard {...category} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Skills; 