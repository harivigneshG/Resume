import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Instagram, Download, Terminal } from 'lucide-react';

const Hero = () => {
    const resumeUrl = "https://drive.google.com/file/d/17qcm13TjIfrfdlYaQJsxvBdT9IeUKnM8/view?usp=sharing"; // Kept from old code

    return (
        <section id="home" className="min-h-screen flex items-center justify-center pt-16 bg-gradient-to-b from-slate-900 to-slate-800 overflow-hidden relative">
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -right-40 w-96 h-96 bg-python/20 rounded-full blur-3xl"></div>
                <div className="absolute top-40 -left-20 w-72 h-72 bg-accent/10 rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 text-center md:text-left">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="inline-flex items-center px-3 py-1 rounded-full border border-accent/30 bg-accent/10 text-accent text-sm font-medium mb-4">
                            <Terminal className="w-4 h-4 mr-2" />
                            Python & Backend Developer
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-python">Harivignesh</span>
                        </h1>
                        <p className="text-xl text-gray-400 mb-8 max-w-lg mx-auto md:mx-0">
                            Building scalable backend systems and elegant web experiences.
                            Passionate about Python, Data Structures, and Modern Web Technologies.
                        </p>

                        <div className="flex flex-wrap gap-4 justify-center md:justify-start mb-8">
                            <a
                                href={resumeUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-6 py-3 bg-accent hover:bg-accent/90 text-slate-900 font-bold rounded-lg transition-all flex items-center"
                            >
                                <Download className="w-5 h-5 mr-2" />
                                Download Resume
                            </a>
                            <a
                                href="#contact"
                                className="px-6 py-3 border border-slate-600 hover:border-white text-white rounded-lg transition-all"
                            >
                                Contact Me
                            </a>
                        </div>

                        <div className="flex gap-6 justify-center md:justify-start">
                            <SocialLink href="https://www.linkedin.com/in/harivigneshg/" icon={<Linkedin />} />
                            <SocialLink href="https://twitter.com/harivigneshG" icon={<Twitter />} />
                            <SocialLink href="https://www.instagram.com/harrivignesh/?hl=en" icon={<Instagram />} />
                            {/* Added Github placeholder if available later */}
                        </div>
                    </motion.div>
                </div>

                <div className="md:w-1/2 mt-12 md:mt-0 flex justify-center relative">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="relative"
                    >
                        {/* Placeholder for user image - User asked to take from social media but we can't scrape. 
                Using a stylish avatar placeholder or gradient for now. */}
                        <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-tr from-slate-700 to-slate-600 p-1 relative z-10 overflow-hidden border-4 border-slate-800 shadow-2xl">
                            <div className="w-full h-full bg-slate-800 flex items-center justify-center text-gray-500">
                                {/* You can replace this img tag with your actual photo */}
                                <img
                                    src="https://avatars.githubusercontent.com/u/60092946?v=4"
                                    alt="Harivignesh"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>

                        {/* Decorative circles */}
                        <div className="absolute top-0 right-0 w-20 h-20 bg-python rounded-full blur-xl opacity-50 animate-pulse"></div>
                        <div className="absolute bottom-0 left-0 w-20 h-20 bg-accent rounded-full blur-xl opacity-50 animate-pulse" style={{ animationDelay: '1s' }}></div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

const SocialLink = ({ href, icon }) => (
    <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-accent transition-colors transform hover:scale-110"
    >
        {React.cloneElement(icon, { size: 24 })}
    </a>
);

export default Hero;
