import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
    const experiences = [
        {
            role: "Python Developer",
            company: "Webtree Solutions WLL",
            period: "April 2025 - Present",
            description: "Leading the architectural design and development of enterprise-grade ERP modules. Specializing in high-performance API development and custom module creation for HRMS, Accounting, and Project Management systems.",
            tags: ["Python", "Enterprise ERP", "API Architecture"]
        },
        {
            role: "Freelance Developer",
            company: "Fiverr",
            period: "May 2024 - April 2025",
            description: "Provided expert-level ERP customization services for global clients. Delivered tailored Python backend solutions to automate complex business workflows and integrate disparate systems.",
            tags: ["Python", "ERP Customization", "Automation"]
        },
        {
            role: "Junior Software Developer",
            company: "Amrita University - Kollam",
            period: "April 2022 - May 2024",
            description: "Engineered a comprehensive Education ERP module from scratch, handling intricate school administration logic and fee management. Developed a Research Paper Budget Approval system, managing the full lifecycle from submission to grant allocation.",
            tags: ["Python", "PHP", "EdTech", "Full Lifecycle"]
        },
        {
            role: "PHP Developer",
            company: "Capminds Technologies",
            period: "Mar 2021 - July 2021",
            description: "Optimized backend performance and maintained legacy PHP systems. Streamlined database interactions using advanced SQL queries for healthcare management solutions.",
            tags: ["PHP", "SQL", "Backend Optimization"]
        },
        {
            role: "Bachelor of Engineering",
            company: "SSN College of Engineering",
            period: "2016 - 2020",
            description: "Specialized in Computer Science fundamentals with a focus on Data Structures, Algorithms, and System Design.",
            tags: ["Computer Science", "Algorithms"]
        }
    ];

    return (
        <section id="experience" className="py-20 transition-colors duration-300">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-3xl font-bold text-slate-900 dark:text-white mb-12"
                >
                    Experience
                </motion.h2>

                <div className="space-y-12 border-l-2 border-slate-200 dark:border-slate-800 ml-3">
                    {experiences.map((item, idx) => (
                        <div key={idx} className="relative pl-8 md:pl-12">
                            <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-white dark:bg-slate-900 border-2 border-accent"></div>

                            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-2">
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white">{item.role}</h3>
                                <span className="text-sm font-medium text-slate-500 dark:text-slate-400 mt-1 sm:mt-0">
                                    {item.period}
                                </span>
                            </div>

                            <h4 className="text-lg font-medium text-accent mb-3">{item.company}</h4>

                            <p className="text-slate-600 dark:text-slate-400 mb-4 leading-relaxed max-w-3xl">
                                {item.description}
                            </p>

                            <div className="flex flex-wrap gap-2">
                                {item.tags.map((tag, tIdx) => (
                                    <span key={tIdx} className="text-xs font-medium px-2.5 py-1 rounded bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
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

export default Experience;
