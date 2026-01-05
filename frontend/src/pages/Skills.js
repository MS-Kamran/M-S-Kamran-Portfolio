import React from 'react';
import { motion } from 'framer-motion';
import Layout from '../components/Layout';

const SkillCategory = ({ title, skills }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-blue-500/30 transition-all duration-300 group"
    >
        <h3 className="text-xl font-bold text-gray-100 mb-6 flex items-center">
            <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 group-hover:shadow-[0_0_10px_rgba(59,130,246,0.5)] transition-shadow"></span>
            {title}
        </h3>
        <div className="flex flex-wrap gap-3">
            {skills.map((skill, index) => (
                <motion.span
                    key={skill}
                    whileHover={{ scale: 1.05 }}
                    className="px-4 py-2 bg-[#0f172a] text-gray-300 rounded-lg text-sm border border-white/5 hover:border-blue-500/50 hover:text-blue-400 transition-all cursor-default shadow-sm"
                >
                    {skill}
                </motion.span>
            ))}
        </div>
    </motion.div>
);

const Skills = () => {
    const technicalSkills = {
        "Languages": ["Python", "SQL", "R", "JavaScript", "Java", "HTML/CSS"],
        "Data Engineering": ["ETL/ELT Pipelines", "Data Cleaning & Preprocessing (Pandas)", "Data Modeling", "Apache Airflow"],
        "Machine Learning": ["TensorFlow/Keras", "Scikit-learn", "OpenCV", "NumPy", "Predictive Modeling", "Generative AI (Prompt Engineering)"],
        "Infrastructure & APIs": ["Flask", "React.js", "Linux Server Deployment", "Docker", "GDS API Integration", "REST APIs", "Git/GitHub"],
        "Tools & Visualization": ["Power BI", "Excel", "Tableau", "Cloudflare", "phpMyAdmin", "Jupyter"]
    };

    return (
        <Layout>
            <div className="min-h-screen w-full relative pt-10">
                <div className="relative z-20 container mx-auto px-4 py-16">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center mb-16"
                    >
                        <h1 className="text-5xl font-bold text-blue-400 mb-6">
                            Technical Skills
                        </h1>
                        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                            A comprehensive toolkit of technologies I leverage to build robust data systems and intelligent applications.
                        </p>
                    </motion.div>

                    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                        {Object.entries(technicalSkills).map(([category, skills]) => (
                            <SkillCategory key={category} title={category} skills={skills} />
                        ))}
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Skills;
