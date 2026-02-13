import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowUpRight, Code, Database, Server, Brain, Eye, ShoppingBag } from "lucide-react";

const Projects = () => {
    const projects = [
        {
            title: "Bird Classification using ML",
            description: "A real-time bird species classification system using Flask (Backend) and MySQL. Trained a Deep Learning model using Keras and Librosa for audio feature extraction to identify bird species.",
            tags: ["Python", "Flask", "Keras", "Deep Learning", "MySQL"],
            link: "https://github.com/Nikita-Bhalke/Deep-Learning-Approaches-to-Bird-Classification",
            type: "Machine Learning",
            icon: <Brain className="text-pink-400" size={32} />
        },
        {
            title: "Driver Drowsiness Detection",
            description: "Computer Vision project utilizing Python and OpenCV to monitor driver fatigue in real-time. Implements Eye Aspect Ratio (EAR) tracking with sound alerts to prevent accidents.",
            tags: ["Python", "OpenCV", "Computer Vision", "Real-time"],
            link: "https://github.com/Nikita-Bhalke/Driver-Drowsiness-Detection",
            type: "Computer Vision",
            icon: <Eye className="text-cyan-400" size={32} />
        },
        {
            title: "Food Delivery Website",
            description: "Responsive web platform for online food ordering. Features menu browsing, secure payments, and a MySQL backend for efficient order and customer management.",
            tags: ["HTML/CSS", "JavaScript", "MySQL", "Web Dev"],
            link: "https://github.com/Nikita-Bhalke/Nikita-s_Green_Kichen",
            type: "Web Development",
            icon: <ShoppingBag className="text-orange-400" size={32} />
        }
    ];

    return (
        <section id="projects" className="py-32 relative">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-20"
                >
                    <h2 className="text-4xl md:text-6xl font-bold font-['Space_Grotesk'] mb-4">Featured <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Projects.</span></h2>
                </motion.div>

                <div className="grid lg:grid-cols-2 lg:grid-rows-2 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={`
                group relative bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:border-indigo-500/30 transition-all duration-500 flex flex-col h-full
                ${index === 2 ? 'lg:col-span-2' : ''} 
              `}
                        >
                            <div className="h-40 bg-gradient-to-br from-indigo-900/20 to-purple-900/20 relative overflow-hidden group-hover:from-indigo-900/30 group-hover:to-purple-900/30 transition-colors">
                                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />

                                <div className="absolute top-8 left-8 p-3 bg-white/5 rounded-2xl border border-white/10">
                                    {project.icon}
                                </div>

                                <div className="absolute bottom-4 right-4 font-mono text-xs text-white/20 uppercase tracking-widest">
                                    {project.type}
                                </div>
                            </div>

                            <div className="p-8 flex flex-col flex-grow">
                                <h3 className="text-2xl font-bold mb-4 font-['Space_Grotesk'] group-hover:text-indigo-400 transition-colors">{project.title}</h3>
                                <p className="text-zinc-400 text-base mb-8 leading-relaxed flex-grow">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-8">
                                    {project.tags.map((tag) => (
                                        <span key={tag} className="px-3 py-1 bg-white/5 rounded-full text-xs font-medium text-zinc-300 border border-white/5">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="mt-auto">
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 font-medium transition-colors"
                                    >
                                        View Project <ArrowUpRight size={18} />
                                    </a>
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
