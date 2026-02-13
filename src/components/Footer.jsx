import React from "react";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

const Footer = () => {
    return (
        <footer id="contact" className="py-20 border-t border-white/5 bg-black/50 backdrop-blur-lg">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-4xl md:text-6xl font-bold font-['Space_Grotesk'] mb-8">
                    Let's build <br /> <span className="text-indigo-500">something great.</span>
                </h2>
                <a
                    href="mailto:nikitabhalke7777@gmail.com"
                    className="inline-block text-xl md:text-2xl text-zinc-400 hover:text-white mb-16 transition-colors border-b border-zinc-700 hover:border-white pb-1"
                >
                    nikitabhalke7777@gmail.com
                </a>

                <div className="flex justify-center gap-8 mb-12">
                    <a href="https://www.linkedin.com/in/nikita-bhalke" target="_blank" rel="noreferrer" className="p-4 bg-white/5 rounded-full hover:bg-white/10 hover:text-indigo-400 transition-all">
                        <Linkedin size={24} />
                    </a>
                    <a href="mailto:nikitabhalke7777@gmail.com" className="p-4 bg-white/5 rounded-full hover:bg-white/10 hover:text-indigo-400 transition-all">
                        <Mail size={24} />
                    </a>
                    <a href="https://github.com/Nikita-Bhalke" target="_blank" rel="noreferrer" className="p-4 bg-white/5 rounded-full hover:bg-white/10 hover:text-indigo-400 transition-all">
                        <Github size={24} />
                    </a>
                </div>

                <p className="text-zinc-600 text-sm">
                    © 2025 Nikita Bhalke. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
