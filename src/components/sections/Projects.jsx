import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { motion } from 'framer-motion';

const Projects = () => {
    const projects = [
        {
            title: "Enterprise ERP Suite",
            category: "Enterprise Solutions",
            description: "Leading the development of a comprehensive ERP suite. Architecting custom modules for HRMS, Accounting, Sales, and Purchase. Implementing complex business logic and high-performance REST APIs to streamline organizational workflows.",
            tags: ["Python", "Django", "FastAPI", "PostgreSQL", "Redis"],
            link: "#"
        },
        {
            title: "Education Management System",
            category: "EdTech Platform",
            description: "Architected a full-scale Education ERP module handling school administration, student lifecycles, and complex fee management systems. Built a Research Paper Budget Approval system managing the complete grant workflow.",
            tags: ["Python", "Complex Workflows", "Role-Based Access"],
            link: "#"
        },
        {
            title: "Image Search Engine",
            category: "Web Application",
            description: "A high-performance image aggregation platform built with React. Features infinite scroll, masonry layouts, and optimized API integration for seamless user experience.",
            tags: ["React", "REST API", "Tailwind CSS"],
            link: "https://wallsearch.vercel.app/"
        },
        {
            title: "Video Search Platform",
            category: "Media Application",
            description: "A distraction-free video streaming interface leveraging the YouTube API. Focuses on clean UI/UX to provide a premium viewing experience without algorithmic clutter.",
            tags: ["React", "YouTube API", "UX Design"],
            link: "https://searchtube.vercel.app/"
        }
    ];

    return (
        <section id="projects" className="py-20 transition-colors duration-300">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-3xl font-bold text-slate-900 dark:text-white mb-12"
                >
                    Featured Projects
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
                    {projects.map((project, idx) => (
                        <div key={idx} className="group">
                            <div className="flex justify-between items-baseline mb-2">
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-accent transition-colors">
                                    {project.title}
                                </h3>
                                {project.link !== "#" && (
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-slate-400 hover:text-accent transition-colors"
                                    >
                                        <ExternalLink size={18} />
                                    </a>
                                )}
                            </div>

                            <p className="text-sm font-medium text-accent mb-3 uppercase tracking-wide">
                                {project.category}
                            </p>

                            <p className="text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2">
                                {project.tags.map((tag, tIdx) => (
                                    <span
                                        key={tIdx}
                                        className="text-xs font-medium px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
