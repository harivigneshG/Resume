import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, Layout, Wrench } from 'lucide-react';

const Skills = () => {
    const skillCategories = [
        {
            title: "Backend & Python",
            icon: <Code2 className="w-6 h-6 text-python" />,
            skills: ["Python", "SQL", "PHP", "API Development", "Data Structures"]
        },
        {
            title: "Frontend Development",
            icon: <Layout className="w-6 h-6 text-accent" />,
            skills: ["React", "JavaScript (ES6+)", "HTML5", "CSS3", "Tailwind CSS"]
        },
        {
            title: "Tools & Design",
            icon: <Wrench className="w-6 h-6 text-purple-400" />,
            skills: ["Git", "Figma", "VS Code", "Postman"]
        }
    ];

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    };

    return (
        <section id="skills" className="py-20 bg-slate-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Technical Skills</h2>
                    <div className="w-20 h-1 bg-accent mx-auto rounded-full"></div>
                    <p className="mt-4 text-gray-400">My technical toolkit and areas of expertise</p>
                </div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-8"
                >
                    {skillCategories.map((category, idx) => (
                        <motion.div
                            key={idx}
                            variants={item}
                            className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-accent/50 transition-colors"
                        >
                            <div className="flex items-center mb-6">
                                <div className="p-3 bg-slate-900 rounded-lg border border-slate-700 mr-4">
                                    {category.icon}
                                </div>
                                <h3 className="text-xl font-bold text-white">{category.title}</h3>
                            </div>

                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill, sIdx) => (
                                    <span
                                        key={sIdx}
                                        className="px-3 py-1 bg-slate-700/50 text-gray-300 rounded-full text-sm border border-slate-600 hover:border-accent/50 hover:text-white transition-colors"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
