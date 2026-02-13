import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download, MousePointerClick } from "lucide-react";

const Hero = () => {
    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Dynamic Background */}
            <div className="absolute inset-0 w-full h-full bg-[#030014]">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-500/20 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-500/10 rounded-full blur-[120px]" />
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
            </div>

            <div className="container mx-auto px-4 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-indigo-300 text-sm mb-8"
                >
                    <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
                    Open to Work
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-5xl md:text-8xl font-bold tracking-tighter mb-6 font-['Space_Grotesk'] leading-tight"
                >
                    Hello, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">Nikita Bhalke</span>. <br />
                    Full Stack Developer.
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="max-w-xl mx-auto text-lg text-zinc-400 mb-10"
                >
                    Specializing in Java, Spring Boot, and Modern Web Technologies. Passionate about building efficient, data-driven applications.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <a
                        href="#projects"
                        className="group px-8 py-3.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full font-medium transition-all flex items-center gap-2 shadow-[0_0_20px_rgba(79,70,229,0.3)] hover:shadow-[0_0_30px_rgba(79,70,229,0.5)]"
                    >
                        View Projects
                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                    <a
                        href="./resume.pdf"
                        download="Nikita_Bhalke_Resume.pdf"
                        className="px-8 py-3.5 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-full font-medium transition-all flex items-center gap-2"
                    >
                        <Download size={18} />
                        Download CV
                    </a>
                </motion.div>
            </div>

            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
                <span className="text-xs uppercase tracking-widest text-zinc-500">Scroll</span>
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                >
                    <MousePointerClick size={20} className="text-indigo-400" />
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
