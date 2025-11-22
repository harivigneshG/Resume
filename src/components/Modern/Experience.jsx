import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Calendar, Server, Database, Code } from 'lucide-react';

const Experience = () => {
    const experiences = [
        {
            type: "work",
            role: "Python Developer",
            company: "Webtree Solutions WLL",
            period: "April 2025 - Present",
            description: "Spearheading the customization and development of complex ERP modules including HRMS, Accounting, Projects, Sales, and Purchase. Architecting robust APIs and creating bespoke modules to streamline enterprise workflows.",
            tags: ["Python", "ERP", "API Development", "HRMS", "Accounting"],
            icon: <Server className="w-6 h-6 text-white" />
        },
        {
            type: "work",
            role: "Freelance Developer",
            company: "Fiverr",
            period: "May 2024 - April 2025",
            description: "Delivered tailored ERP project customizations for diverse clients. Focused on Python-based backend solutions to enhance business process automation and system efficiency.",
            tags: ["Python", "Freelance", "ERP Customization"],
            icon: <Code className="w-6 h-6 text-white" />
        },
        {
            type: "work",
            role: "Junior Software Developer",
            company: "Amrita University - Kollam",
            period: "April 2022 - May 2024",
            description: "Developed critical academic management systems using Python frameworks and PHP. Engineered a comprehensive Education Module for school administration and fee management. Built a Research Paper Budget Approval system from scratch, managing the entire lifecycle from submission to final publication.",
            tags: ["Python", "PHP", "EdTech", "Research Systems"],
            icon: <Database className="w-6 h-6 text-white" />
        },
        {
            type: "work",
            role: "PHP Developer",
            company: "Capminds Technologies",
            period: "Mar 2021 - July 2021",
            description: "Contributed to backend development initiatives, optimizing database interactions using SQL and maintaining PHP-based legacy systems.",
            tags: ["PHP", "SQL", "Backend"],
            icon: <Briefcase className="w-6 h-6 text-white" />
        },
        {
            type: "education",
            role: "Bachelor of Engineering",
            company: "SSN College of Engineering",
            period: "2016 - 2020",
            description: "Graduated with a strong foundation in Computer Science principles, focusing on Data Structures and Algorithms.",
            tags: ["Computer Science", "Engineering"],
            icon: <GraduationCap className="w-6 h-6 text-white" />
        }
    ];

    return (
        <section id="experience" className="py-20 bg-slate-900 relative overflow-hidden">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Professional Journey</h2>
                    <div className="w-20 h-1 bg-accent mx-auto rounded-full"></div>
                    <p className="mt-4 text-gray-400">My path from engineering to enterprise solutions</p>
                </div>

                <div className="space-y-12">
                    {experiences.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="relative flex items-start group"
                        >
                            {/* Timeline Line */}
                            {idx !== experiences.length - 1 && (
                                <div className="absolute left-8 top-16 bottom-[-48px] w-0.5 bg-slate-700 group-hover:bg-accent/50 transition-colors"></div>
                            )}

                            <div className="flex-shrink-0 w-16 h-16 bg-slate-800 rounded-full border-2 border-slate-700 flex items-center justify-center z-10 group-hover:border-accent transition-colors shadow-lg shadow-slate-900/50">
                                {item.icon}
                            </div>

                            <div className="ml-8 flex-1 bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-accent/30 transition-all hover:shadow-xl hover:shadow-accent/5">
                                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                                    <h3 className="text-xl font-bold text-white group-hover:text-accent transition-colors">{item.role}</h3>
                                    <div className="flex items-center text-accent text-sm font-medium mt-1 md:mt-0 bg-accent/10 px-3 py-1 rounded-full">
                                        <Calendar className="w-4 h-4 mr-1" />
                                        {item.period}
                                    </div>
                                </div>
                                <h4 className="text-lg text-gray-300 mb-4 font-medium">{item.company}</h4>
                                <p className="text-gray-400 mb-4 leading-relaxed">{item.description}</p>

                                {item.tags && (
                                    <div className="flex flex-wrap gap-2 mt-3">
                                        {item.tags.map((tag, tIdx) => (
                                            <span key={tIdx} className="text-xs font-medium px-2.5 py-0.5 rounded bg-slate-700 text-gray-300 border border-slate-600">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
