"use client";

import { motion } from "framer-motion";
import { Zap, Layout, Play, FileText, Sparkles, Cpu, Target, Repeat } from "lucide-react";
import Navbar from "@/components/Navbar";
import GlassCard from "@/components/GlassCard";
import Aurora from "@/components/Aurora";
import { FloatingOrbs, TechIcon, WorkflowIcon, DeploymentIcon, ExecutionIcon } from "@/components/AnimatedSVG";
import { useTheme } from "@/components/ThemeProvider";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const tools = [
    {
        icon: FileText,
        title: "Meta Ad Scripts",
        desc: "Conversion-optimized scripts for Meta Ads that follow policy-safe guidelines.",
        accent: "indigo",
    },
    {
        icon: Play,
        title: "Reels & UGC Scripts",
        desc: "Hooks, angles, and CTAs for high-engagement Reels and UGC frameworks.",
        accent: "pink",
    },
    {
        icon: Layout,
        title: "Product Descriptions",
        desc: "Persuasive and SEO-optimized PDP content generated instantly.",
        accent: "purple",
    },
    {
        icon: Target,
        title: "ROAS Optimized",
        desc: "Built with performance in mind. Data-driven creative execution at scale.",
        accent: "cyan",
    },
];

export default function AIToolsPage() {
    const { resolvedTheme } = useTheme();
    const auroraColors = ["#6D86FD", "#CC4FC7", "#F98976"];

    return (
        <div className="relative bg-background text-foreground min-h-screen">
            <FloatingOrbs />
            <Navbar />

            <section className="relative pt-32 pb-20 px-6 overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-25">
                    <Aurora colorStops={auroraColors} speed={0.6} />
                </div>

                <div className="max-w-7xl mx-auto relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="mb-8 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-indigo-500/20 bg-indigo-500/5 text-indigo-400 text-[10px] font-bold tracking-[0.2em] uppercase backdrop-blur-xl"
                    >
                        One Centralized AI System
                    </motion.div>

                    <h1 className="font-outfit text-6xl md:text-8xl font-black tracking-tighter leading-none mb-8">
                        Arta <span className="text-brand-gradient">AI Tools</span>
                    </h1>
                    <p className="text-stone-600 dark:text-stone-300 text-xl font-light max-w-2xl mx-auto leading-relaxed mb-16">
                        Upload product once → Generate creatives anytime. Stop the daily creative bottleneck with the industry's most powerful AI engine.
                    </p>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {tools.map((t, i) => (
                            <GlassCard key={t.title} delay={i * 0.1} accent={t.accent} hover className="p-8 text-left border border-white/5">
                                <div className="mb-6 p-4 rounded-xl bg-white/5 border border-white/10 w-fit">
                                    <t.icon className="w-8 h-8 text-indigo-500 dark:text-indigo-400" />
                                </div>
                                <h3 className="font-outfit text-xl font-bold mb-3 tracking-tight text-stone-900 dark:text-stone-100">{t.title}</h3>
                                <p className="text-stone-600 dark:text-stone-300 text-sm leading-relaxed font-light">{t.desc}</p>
                            </GlassCard>
                        ))}
                    </div>
                </div>
            </section>

            {/* The Problem & Solution */}
            <section className="py-24 px-6 bg-stone-500/[0.02]">
                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
                    <div className="relative">
                        <div className="absolute inset-x-0 top-0 h-full bg-gradient-to-b from-indigo-500/5 to-transparent rounded-[3rem] -z-10 blur-2xl" />
                        <div className="p-10 rounded-[3rem] border border-white/5 bg-background/50 backdrop-blur-3xl">
                            <h3 className="font-outfit text-2xl font-bold mb-8 text-stone-700 dark:text-stone-200">The Daily Creative Bottleneck</h3>
                            <div className="space-y-6">
                                {[
                                    "Fresh creatives needed daily",
                                    "Ad fatigue is constant",
                                    "Scripts, ads, PDPs & UGC take time & money"
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-4 text-stone-600 dark:text-stone-400 font-light">
                                        <div className="w-2 h-2 rounded-full bg-red-500/50" />
                                        {item}
                                    </div>
                                ))}
                            </div>
                            <div className="h-px w-full bg-white/5 my-10" />
                            <h3 className="font-outfit text-2xl font-bold mb-8 text-emerald-500 dark:text-emerald-400">Arta AI Solution</h3>
                            <div className="space-y-6">
                                {[
                                    "Upload product once → Generate anywhere",
                                    "Meta-compliant & Policy-safe",
                                    "Continuous ROAS optimization"
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-4 text-emerald-600 dark:text-emerald-400 font-medium">
                                        <Zap size={16} fill="currentColor" />
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="max-w-xl">
                        <h2 className="font-outfit text-4xl md:text-6xl font-black mb-8 tracking-tighter leading-[0.95]">
                            Stop Tools. <br />
                            <span className="text-brand-gradient">Start Execution.</span>
                        </h2>
                        <p className="text-stone-600 dark:text-stone-300 text-lg font-light leading-relaxed mb-10">
                            "ARTA doesn't give you tools. It gives you daily execution power."
                        </p>
                        <div className="flex flex-wrap gap-4">
                            {["Dropshippers", "D2C Brands", "Creators"].map(tag => (
                                <span key={tag} className="px-6 py-2 rounded-full border border-white/10 bg-white/5 text-stone-600 dark:text-stone-300 font-bold text-xs uppercase tracking-widest">{tag}</span>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Feature Grid */}
            <section className="py-24 px-6 overflow-hidden">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                        {[
                            { Icon: TechIcon, label: "Meta-compliant", sub: "Policy-safe by default" },
                            { Icon: WorkflowIcon, label: "Conversion-optimized", sub: "Built for ROAS" },
                            { Icon: DeploymentIcon, label: "Platform-Ready", sub: "Shopify, Meta & Google" },
                        ].map((f, i) => (
                            <div key={i} className="flex flex-col items-center text-center p-8 rounded-3xl border border-white/5 bg-white/[0.01]">
                                <f.Icon className="w-20 h-20 text-indigo-500 dark:text-indigo-400 mb-6 opacity-80" />
                                <h4 className="font-outfit text-xl font-bold mb-2 tracking-tight text-stone-900 dark:text-stone-100">{f.label}</h4>
                                <p className="text-stone-600 dark:text-stone-300 text-sm font-light">{f.sub}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <CTASection
                title="Build Better Ads"
                highlightedText="faster."
                description="Join the brands executing 5x faster with Arta AI infrastructure. Centralized creatives at scale."
                buttonText="Join the Network →"
                accent="pink"
            />
            <Footer />
        </div>
    );
}
