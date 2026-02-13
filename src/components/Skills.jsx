import React from "react";
import { motion } from "framer-motion";

const Skills = () => {
    const skills = [
        { name: "Java", level: "Advanced", bg: "bg-orange-500/20", border: "border-orange-500/50", text: "text-orange-400" },
        { name: "Python", level: "Intermediate", bg: "bg-blue-400/20", border: "border-blue-400/50", text: "text-blue-300" },
        { name: "SQL (MySQL)", level: "Advanced", bg: "bg-cyan-500/20", border: "border-cyan-500/50", text: "text-cyan-400" },
        { name: "Spring Boot", level: "Intermediate", bg: "bg-green-500/20", border: "border-green-500/50", text: "text-green-400" },
        { name: "React.js", level: "Intermediate", bg: "bg-blue-600/20", border: "border-blue-600/50", text: "text-blue-500" },
        { name: "Hibernate", level: "Intermediate", bg: "bg-emerald-500/20", border: "border-emerald-500/50", text: "text-emerald-400" },
        { name: "JDBC", level: "Intermediate", bg: "bg-teal-500/20", border: "border-teal-500/50", text: "text-teal-400" },
        { name: "Data Structures", level: "Core", bg: "bg-purple-500/20", border: "border-purple-500/50", text: "text-purple-400" },
        { name: "OOPs", level: "Core", bg: "bg-pink-500/20", border: "border-pink-500/50", text: "text-pink-400" },
        { name: "HTML/CSS", level: "Advanced", bg: "bg-yellow-500/20", border: "border-yellow-500/50", text: "text-yellow-400" },
        { name: "Pandas/Matplotlib", level: "Analytics", bg: "bg-red-500/20", border: "border-red-500/50", text: "text-red-400" },


    ];

    return (
        <section id="skills" className="py-24 relative">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="max-w-6xl mx-auto"
                >
                    <h3 className="text-xl font-medium text-zinc-400 mb-8 text-center uppercase tracking-widest">Tech Stack</h3>

                    <div className="flex flex-wrap justify-center gap-4">
                        {skills.map((skill, index) => (
                            <motion.div
                                key={skill.name}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.3, delay: index * 0.05 }}
                                viewport={{ once: true }}
                                className={`
                    px-6 py-3 rounded-2xl border ${skill.border} ${skill.bg} 
                    backdrop-blur-sm cursor-default transition-all duration-300
                    hover:scale-105 hover:shadow-[0_0_20px_rgba(0,0,0,0.3)]
                  `}
                            >
                                <span className={`font-semibold ${skill.text}`}>{skill.name}</span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
