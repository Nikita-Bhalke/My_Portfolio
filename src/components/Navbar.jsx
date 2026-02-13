import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Linkedin, Mail, Menu, X } from "lucide-react";
import { cn } from "../lib/utils";

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "About", href: "#about" },
        { name: "Skills", href: "#skills" },
        { name: "Projects", href: "#projects" },
        { name: "Contact", href: "#contact" },
    ];

    return (
        <nav
            className={cn(
                "fixed top-0 inset-x-0 z-50 h-20 transition-all duration-300",
                scrolled ? "bg-black/50 backdrop-blur-md border-b border-white/5" : "bg-transparent"
            )}
        >
            <div className="container mx-auto px-4 h-full flex items-center justify-between">
                <a href="#" className="font-['Space_Grotesk'] text-2xl font-bold tracking-tighter hover:text-indigo-400 transition-colors">
                    Nikita<span className="text-indigo-500">.</span>
                </a>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8 bg-white/5 px-6 py-2 rounded-full border border-white/5 backdrop-blur-sm">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-zinc-400 hover:text-white transition-colors relative group"
                        >
                            {link.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-500 transition-all group-hover:w-full" />
                        </a>
                    ))}
                </div>

                <div className="hidden md:flex items-center gap-4">
                    <a
                        href="mailto:nikitabhalke7777@gmail.com"
                        className="p-2 text-zinc-400 hover:text-white hover:bg-white/10 rounded-full transition-all"
                    >
                        <Mail size={20} />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/nikita-bhalke"
                        target="_blank"
                        rel="noreferrer"
                        className="p-2 text-zinc-400 hover:text-white hover:bg-white/10 rounded-full transition-all"
                    >
                        <Linkedin size={20} />
                    </a>
                    <a
                        href="#contact"
                        className="px-5 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium rounded-full transition-colors"
                    >
                        Let's Talk
                    </a>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-white"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-20 left-0 w-full bg-[#030014] border-b border-white/10 p-4 flex flex-col gap-4 md:hidden backdrop-blur-xl"
                    >
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-lg font-medium text-zinc-300 hover:text-white"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                {link.name}
                            </a>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
