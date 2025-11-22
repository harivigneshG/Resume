import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
    const skillCategories = [
        {
            title: "Backend & Architecture",
            skills: ["Python", "Django", "FastAPI", "REST APIs", "Microservices", "Celery", "System Design"]
        },
        {
            title: "Data & Storage",
            skills: ["PostgreSQL", "MySQL", "Redis", "SQLAlchemy", "Data Modeling"]
        },
        {
            title: "Frontend",
            skills: ["React", "JavaScript", "Tailwind CSS", "HTML5/CSS3"]
        },
        {
            title: "DevOps & Tools",
            skills: ["Git", "Docker", "Linux", "AWS", "CI/CD", "Postman"]
        }
    ];

    return (
        <section id="skills" className="py-20 transition-colors duration-300">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-3xl font-bold text-slate-900 dark:text-white mb-12"
                >
                    Technical Skills
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {skillCategories.map((category, idx) => (
                        <div key={idx}>
                            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4 pb-2 border-b border-slate-200 dark:border-slate-800">
                                {category.title}
                            </h3>

                            <ul className="space-y-2">
                                {category.skills.map((skill, sIdx) => (
                                    <li key={sIdx} className="text-slate-600 dark:text-slate-400 text-sm">
                                        {skill}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
