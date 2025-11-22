import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Image as ImageIcon, Video } from 'lucide-react';

const Projects = () => {
    const projects = [
        {
            title: "Image Search Engine",
            description: "A powerful image search application that aggregates results for wallpapers and stock photos. Built with React and modern APIs.",
            tags: ["React", "API Integration", "CSS3"],
            link: "https://wallsearch.vercel.app/",
            icon: <ImageIcon className="w-12 h-12 text-accent mb-4" />,
            color: "from-blue-500 to-cyan-400"
        },
        {
            title: "Video Search Platform",
            description: "A distraction-free YouTube video search and playback application. Watch videos without recommendation algorithms getting in the way.",
            tags: ["React", "YouTube API", "Responsive Design"],
            link: "https://searchtube.vercel.app/",
            icon: <Video className="w-12 h-12 text-red-500 mb-4" />,
            color: "from-red-500 to-orange-500"
        }
    ];

    return (
        <section id="projects" className="py-20 bg-slate-800/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Featured Projects</h2>
                    <div className="w-20 h-1 bg-accent mx-auto rounded-full"></div>
                    <p className="mt-4 text-gray-400">Some of the things I've built</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.2 }}
                            className="group relative bg-slate-900 border border-slate-700 rounded-2xl overflow-hidden hover:border-accent/50 transition-all duration-300"
                        >
                            <div className={`absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-5 transition-opacity duration-500 ${project.color}`}></div>

                            <div className="p-8">
                                <div className="flex justify-between items-start">
                                    <div className="p-3 bg-slate-800 rounded-xl border border-slate-700 group-hover:scale-110 transition-transform duration-300">
                                        {project.icon}
                                    </div>
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-400 hover:text-white transition-colors"
                                    >
                                        <ExternalLink className="w-6 h-6" />
                                    </a>
                                </div>

                                <h3 className="text-2xl font-bold text-white mt-6 mb-3 group-hover:text-accent transition-colors">
                                    {project.title}
                                </h3>

                                <p className="text-gray-400 mb-6 line-clamp-3">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {project.tags.map((tag, tIdx) => (
                                        <span
                                            key={tIdx}
                                            className="px-3 py-1 bg-slate-800 text-xs font-medium text-gray-300 rounded-full border border-slate-700"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
