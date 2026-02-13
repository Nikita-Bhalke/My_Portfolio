import React from "react";
import { motion } from "framer-motion";
import { Award, Code2, Globe, GraduationCap, Laptop, User, BookOpen } from "lucide-react";
import { cn } from "../lib/utils";

const About = () => {
    return (
        <section id="about" className="py-24 relative z-10">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="max-w-5xl mx-auto"
                >
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 font-['Space_Grotesk']">
                            About <span className="text-indigo-500">Me</span>
                        </h2>
                        <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
                            Detail-oriented developer with expertise in backend systems and data analysis. I build scalable applications and extract meaningful insights from data.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {/* Main Bio Card */}
                        <div className="md:col-span-2 glass-card p-8 rounded-3xl relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-600/10 rounded-full blur-3xl -mr-16 -mt-16 transition-all group-hover:bg-indigo-600/20" />

                            <div className="relative z-10">
                                <div className="w-12 h-12 bg-indigo-500/20 rounded-2xl flex items-center justify-center mb-6 text-indigo-400">
                                    <User size={24} />
                                </div>
                                <h3 className="text-2xl font-bold mb-4">Background</h3>
                                <p className="text-zinc-400 leading-relaxed mb-6">
                                    I am a Computer Science Engineering graduate from <span className="text-white font-medium">Visvesvaraya Technological University</span>. My journey involves hands-on experience in Full Stack Development and Data Analytics.
                                    Experienced intern at <span className="text-white font-medium">Five Seven IT Solutions</span>, where I optimized data workflows and built predictive models.
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {["Java Developer", "Data Analyst", "Researcher"].map((tag) => (
                                        <span key={tag} className="px-3 py-1 bg-white/5 rounded-full text-xs font-medium text-indigo-300 border border-white/5">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Stats/Edu Card */}
                        <div className="glass-card p-8 rounded-3xl flex flex-col justify-center items-center text-center relative overflow-hidden group">
                            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <GraduationCap size={40} className="text-indigo-400 mb-4" />
                            <h3 className="text-2xl font-bold text-white mb-2">B.E. CSE</h3>
                            <p className="text-sm text-zinc-500 uppercase tracking-widest font-medium">VTU Belagavi</p>
                        </div>

                        {/* Publication Card */}
                        <div className="md:col-span-3 glass-card p-8 rounded-3xl relative overflow-hidden group flex flex-col md:flex-row items-center gap-6">
                            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10" />
                            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0">
                                <BookOpen className="text-white" size={32} />
                            </div>
                            <div className="relative z-10 flex-grow text-center md:text-left">
                                <h3 className="text-xl font-bold mb-1">Published Research</h3>
                                <p className="text-white font-medium mb-1">"Deep Learning Approaches to Bird Classification"</p>
                                <p className="text-zinc-400 text-sm">Published in IJARESM (Vol. 13, Issue 1, Jan 2025)</p>
                            </div>
                            <div className="flex-shrink-0">
                                <span className="px-4 py-2 bg-white/10 rounded-full text-sm font-medium text-white border border-white/10">Research Paper</span>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
