"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import GlassCard from "./GlassCard";

interface CTASectionProps {
    title?: string;
    highlightedText?: string;
    description?: string;
    buttonText?: string;
    href?: string;
    accent?: string;
}

export default function CTASection({
    title = "Build your Brand",
    highlightedText = "today.",
    description = "You need infrastructure, not just advice. You need execution, not just strategy. You need ARTA.",
    buttonText = "Start Building →",
    href = "https://beta.artaaicommerce.com/",
    accent = "indigo"
}: CTASectionProps) {
    return (
        <section className="relative py-16 md:py-24 px-6 md:px-10 overflow-hidden bg-background">
            <div className="max-w-7xl mx-auto">
                <GlassCard accent={accent} className="py-16 px-12 md:py-24 md:px-24 text-center relative z-10" hover>
                    <div className="absolute -top-40 -left-40 w-[300px] h-[300px] bg-[#6D86FD]/20 rounded-full blur-[120px] pointer-events-none" />
                    <div className="absolute -bottom-40 -right-40 w-[300px] h-[300px] bg-[#CC4FC7]/20 rounded-full blur-[120px] pointer-events-none" />

                    <h2 className="font-outfit text-5xl md:text-7xl font-black mb-6 tracking-tighter leading-[0.95] text-foreground">
                        {title}{" "}
                        <span
                            className="italic"
                            style={{
                                backgroundImage: "linear-gradient(90deg, #6D86FD, #CC4FC7, #F98976)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                backgroundClip: "text",
                            }}
                        >
                            {highlightedText}
                        </span>
                    </h2>

                    <p className="text-stone-600 dark:text-stone-300 text-lg md:text-xl font-light mb-10 max-w-2xl mx-auto leading-relaxed">
                        {description}
                    </p>

                    <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-12 py-5 rounded-2xl bg-foreground text-background font-black text-lg
              transition-all duration-300 skeuo-shadow inline-block relative group overflow-hidden"
                    >
                        <span className="relative z-10">{buttonText}</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-[#6D86FD]/20 to-[#CC4FC7]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </a>
                </GlassCard>

                {/* Ambient Glow */}
                <div className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] bg-[#6D86FD]/[0.03] rounded-full blur-[180px] pointer-events-none -z-10" />
            </div>
        </section>
    );
}
