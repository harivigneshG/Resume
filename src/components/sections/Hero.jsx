import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail, Download, ArrowRight } from 'lucide-react';

const Hero = () => {
    const resumeUrl = "https://drive.google.com/file/d/17qcm13TjIfrfdlYaQJsxvBdT9IeUKnM8/view?usp=sharing";

    return (
        <section id="hero" className="min-h-screen flex items-center pt-16 pb-12">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">

                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="md:w-3/5"
                    >
                        <h1 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight">
                            Harivignesh G
                        </h1>
                        <h2 className="text-xl md:text-2xl text-accent font-medium mb-6">
                            Python Developer & ERP Specialist
                        </h2>

                        <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed max-w-2xl">
                            Specialized in architecting scalable <strong>Enterprise ERP Solutions</strong> and backend systems.
                            I transform complex business requirements into efficient, high-performance Python applications.
                        </p>

                        <div className="flex flex-wrap gap-4 mb-10">
                            <a
                                href="#projects"
                                className="px-6 py-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-medium rounded-lg hover:opacity-90 transition-opacity flex items-center"
                            >
                                View Projects <ArrowRight className="ml-2 w-4 h-4" />
                            </a>
                            <a
                                href={resumeUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-6 py-3 border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-medium rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors flex items-center"
                            >
                                Resume <Download className="ml-2 w-4 h-4" />
                            </a>
                        </div>

                        <div className="flex gap-6 items-center">
                            <SocialLink href="https://www.linkedin.com/in/harivigneshg/" Icon={Linkedin} />
                            <SocialLink href="https://github.com/harivigneshG" Icon={Github} />
                            <SocialLink href="mailto:harivigneshganesh@gmail.com" Icon={Mail} />
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="md:w-2/5 flex justify-center md:justify-end"
                    >
                        <div className="relative w-64 h-64 md:w-80 md:h-80">
                            <img
                                src="https://avatars.githubusercontent.com/u/60092946?v=4"
                                alt="Harivignesh"
                                className="w-full h-full object-cover rounded-full border-2 border-slate-100 dark:border-slate-800 shadow-lg"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

const SocialLink = ({ href, Icon }) => (
    <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors"
    >
        <Icon size={22} />
    </a>
);

export default Hero;
