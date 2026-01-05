import React from 'react';
import { motion } from 'framer-motion';
import Layout from '../components/Layout';

const ContactItem = ({ icon, label, value, href }) => (
    <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ y: -5 }}
        className="flex items-center space-x-6 bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-blue-500/50 transition-all group"
    >
        <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-[#0f172a] text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-lg border border-white/5">
            {icon}
        </div>
        <div>
            <p className="text-sm text-gray-500 mb-1 uppercase tracking-wider font-medium">{label}</p>
            <p className="text-xl font-semibold text-gray-100 group-hover:text-blue-400 transition-colors">{value}</p>
        </div>
    </motion.a>
);

const Contact = () => {
    return (
        <Layout>
            <div className="min-h-screen w-full relative flex items-center justify-center pt-20">
                <div className="relative z-20 container mx-auto px-4 py-16">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="max-w-4xl mx-auto"
                    >
                        <div className="text-center mb-16">
                            <h1 className="text-5xl font-bold text-blue-500 mb-6">
                                Get In Touch
                            </h1>
                            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                                Interested in collaborating or have a question? Feel free to reach out through any of the channels below.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <ContactItem
                                icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>}
                                label="Phone"
                                value="+8801734784848"
                                href="tel:+8801734784848"
                            />
                            <ContactItem
                                icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>}
                                label="Email"
                                value="mskamran996@gmail.com"
                                href="mailto:mskamran996@gmail.com"
                            />
                            <ContactItem
                                icon={<svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>}
                                label="LinkedIn"
                                value="M S Kamran"
                                href="https://linkedin.com/in/m-s-kamran"
                            />
                            <ContactItem
                                icon={<svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>}
                                label="GitHub"
                                value="MS-Kamran"
                                href="https://github.com/MS-Kamran"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </Layout>
    );
};

export default Contact;
