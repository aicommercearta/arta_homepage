"use client";

import { motion, useScroll, useTransform, useSpring, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import {
    Users, BarChart3, Database, ShieldCheck, ArrowUpRight,
    TrendingUp, HandCoins, Activity, Palette, ShoppingCart,
    Megaphone, Store, LineChart, Box, CheckCircle2, XCircle,
    Cpu, Globe, Layers, Zap, Clock
} from "lucide-react";
import Navbar from "@/components/Navbar";
import GlassCard from "@/components/GlassCard";
import Aurora from "@/components/Aurora";
import { FloatingOrbs } from "@/components/AnimatedSVG";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import Link from "next/link";

/* ─── Data ────────────────────────────────────────────────── */

const architectureLayers = [
    {
        id: "creator",
        title: "Creator Layer",
        role: "Vision & Community",
        desc: "Creators bring the storytelling and audience. Arta handles the heavy lifting.",
        icon: Users,
        accent: "indigo",
    },
    {
        id: "supply",
        title: "Supply Layer",
        role: "Sourcing & Production",
        desc: "Direct connection to manufacturers with guaranteed quality and scale.",
        icon: Box,
        accent: "purple",
    },
    {
        id: "tech",
        title: "Technology Layer",
        role: "Digital Backbone",
        desc: "Unified website, commerce systems, and AI-driven automation tools.",
        icon: Cpu,
        accent: "cyan",
    },
    {
        id: "distribution",
        title: "Distribution Layer",
        role: "Omnichannel Reach",
        desc: "Simultaneous presence on D2C, Amazon, Quick Commerce, and Retail.",
        icon: Globe,
        accent: "emerald",
    },
    {
        id: "growth",
        title: "Growth Layer",
        role: "Scaling & Retention",
        desc: "Data analytics and performance marketing to scale the brand infinitely.",
        icon: TrendingUp,
        accent: "pink",
    }
];

const travelStages = [
    {
        title: "Brand Creation",
        color: "indigo",
        items: [
            "Brand identity & positioning",
            "Logo and visual system",
            "Packaging design",
            "Brand storytelling",
            "Product category strategy"
        ]
    },
    {
        title: "Product Development",
        color: "purple",
        items: [
            "Product research & validation",
            "Supplier sourcing",
            "Sample development",
            "Quality control",
            "Pricing & margin strategy"
        ]
    },
    {
        title: "Commerce Infrastructure",
        color: "cyan",
        items: [
            "D2C website development",
            "Shopify store setup",
            "Payment gateway integration",
            "Inventory management",
            "Order fulfillment systems"
        ]
    },
    {
        title: "Marketing Engine",
        color: "pink",
        items: [
            "Influencer collaborations",
            "Content creation & UGC",
            "Social media growth",
            "Meta & Google advertising",
            "Performance marketing analytics"
        ]
    },
    {
        title: "Sales Channels",
        color: "emerald",
        items: [
            "Direct-to-consumer websites",
            "Marketplaces (Amazon, Flipkart)",
            "Quick commerce platforms",
            "Retail distribution",
            "International expansion"
        ]
    },
    {
        title: "Growth & Scaling",
        color: "amber",
        items: [
            "Data analytics & insights",
            "CRM & retention marketing",
            "Expansion strategy",
            "Operations optimization",
            "Brand partnerships"
        ]
    }
];

/* ─── Components ─────────────────────────────────────────── */

function ArchitectureStack() {
    const [active, setActive] = useState(0);

    return (
        <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="relative h-[500px] flex flex-col justify-center gap-4">
                {architectureLayers.map((layer, i) => (
                    <motion.div
                        key={layer.id}
                        onHoverStart={() => setActive(i)}
                        initial={{ x: -20, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ delay: i * 0.1 }}
                        viewport={{ once: true }}
                        className={`cursor-pointer flex items-center gap-6 p-6 rounded-2xl border transition-all duration-500 ${active === i
                            ? `bg-${layer.accent}-500/10 border-${layer.accent}-500/30 scale-105 shadow-xl`
                            : "bg-white/5 border-white/5 opacity-40 grayscale hover:grayscale-0"
                            }`}
                    >
                        <div className={`p-4 rounded-xl bg-${layer.accent}-500/20 text-${layer.accent}-500`}>
                            <layer.icon size={24} />
                        </div>
                        <div>
                            <h4 className="font-outfit font-black text-xl leading-none text-stone-900 dark:text-stone-100">{layer.title}</h4>
                            <p className="text-xs font-bold uppercase tracking-widest opacity-60 mt-2 text-stone-700 dark:text-stone-300">{layer.role}</p>
                        </div>
                    </motion.div>
                ))}
            </div>

            <div className="relative">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={active}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="space-y-8"
                    >
                        <div className={`w-20 h-20 rounded-3xl bg-${architectureLayers[active].accent}-500/10 flex items-center justify-center`}>
                            {(() => {
                                const ActiveIcon = architectureLayers[active].icon;
                                return <ActiveIcon size={40} className={`text-${architectureLayers[active].accent}-500`} />;
                            })()}
                        </div>
                        <h3 className="font-outfit text-5xl font-black tracking-tighter leading-none text-stone-900 dark:text-stone-100">
                            The <span className={`text-${architectureLayers[active].accent}-500 dark:text-${architectureLayers[active].accent}-400`}>{architectureLayers[active].title}</span>
                        </h3>
                        <p className="text-stone-600 dark:text-stone-300 text-xl font-light leading-relaxed max-w-md">
                            {architectureLayers[active].desc}
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <div className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-widest text-stone-500 dark:text-stone-300">
                                Infrastructure
                            </div>
                            <div className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-widest text-stone-500 dark:text-stone-300">
                                Scale
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>

                {/* Decorative elements */}
                <div className={`absolute -top-20 -right-20 w-64 h-64 bg-${architectureLayers[active].accent}-500/5 blur-[100px] rounded-full transition-colors duration-1000`} />
            </div>
        </div>
    );
}

export default function Brands360Page() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({ target: containerRef });
    const auroraColors = ["#6D86FD", "#CC4FC7", "#F98976"];

    return (
        <div ref={containerRef} className="relative bg-background text-foreground min-h-screen overflow-x-hidden selection:bg-emerald-500/30">
            <FloatingOrbs />
            <Navbar />

            {/* Cinematic Hero */}
            <section className="relative min-h-screen flex items-center justify-center px-6 pt-20">
                <div className="absolute inset-0 z-0 overflow-hidden">
                    {/* Placeholder for high-end video requested in next step */}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/40 to-background z-10" />
                    <Aurora colorStops={auroraColors} speed={0.4} />
                    <div className="absolute inset-0 bg-stone-900/50 backdrop-blur-[2px]" />
                </div>

                <div className="max-w-7xl mx-auto relative z-20 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl mb-12"
                    >
                        <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-stone-400">One Vision. One Ecosystem.</span>
                    </motion.div>

                    <h1 className="font-outfit text-7xl md:text-[10rem] font-black tracking-tighter leading-[0.8] mb-12">
                        Build. Launch.<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6D86FD] via-[#CC4FC7] to-[#F98976]">Scale.</span>
                    </h1>

                    <p className="text-stone-600 dark:text-stone-300 text-xl md:text-2xl font-light max-w-4xl mx-auto leading-relaxed mb-16 px-4">
                        Arta Brands 360 is a full-stack brand-building infrastructure that replaces 10+ service providers with one integrated system.
                    </p>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                        <a href="https://beta.artaaicommerce.com/" target="_blank" rel="noopener noreferrer" className="px-12 py-5 rounded-2xl bg-white text-black font-black hover:scale-105 transition-all text-lg shadow-2xl shadow-white/20">
                            Explore The Ecosystem
                        </a>
                        <Link href="#timeline" className="px-12 py-5 rounded-2xl border border-white/10 hover:bg-white/5 transition-all font-black text-lg">
                            The 210-Day Journey
                        </Link>
                    </div>
                </div>
            </section>

            {/* Ecosystem Architecture */}
            <section id="infra" className="py-32 px-6 relative bg-background border-t border-white/5">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-24">
                        <span className="text-emerald-500 font-black tracking-[0.4em] uppercase text-[11px] mb-4 block">Ecosystem Architecture</span>
                        <h2 className="font-outfit text-5xl md:text-8xl font-black tracking-tighter leading-[0.9] text-stone-900 dark:text-stone-100">
                            The Layers <br />of <span className="opacity-40">Success</span>
                        </h2>
                    </div>
                    <ArchitectureStack />
                </div>
            </section>

            {/* The Journey (Lifecycle) */}
            <section id="timeline" className="py-32 px-6 bg-stone-500/[0.02]">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-32">
                        <h2 className="font-outfit text-5xl md:text-8xl font-black tracking-tighter leading-none mb-8">
                            From Idea to <br /><span className="text-brand-gradient italic font-medium">Global Commerce</span>
                        </h2>
                        <p className="text-stone-600 dark:text-stone-300 text-xl font-light">Every stage of brand building, handled by one system.</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-y-20 gap-x-12 relative">
                        {/* Background Line */}
                        <div className="absolute top-1/2 left-0 w-full h-px bg-white/5 hidden lg:block -z-10" />

                        {travelStages.map((stage, i) => (
                            <motion.div
                                key={stage.title}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                viewport={{ once: true }}
                                className="relative"
                            >
                                <div className={`w-12 h-12 rounded-2xl bg-${stage.color}-500 flex items-center justify-center mb-8 shadow-2xl shadow-${stage.color}-500/30`}>
                                    <span className="font-black text-black">{i + 1}</span>
                                </div>
                                <h3 className="font-outfit text-3xl font-black tracking-tight mb-6 text-stone-900 dark:text-stone-100">{stage.title}</h3>
                                <ul className="space-y-4">
                                    {stage.items.map(item => (
                                        <li key={item} className="flex items-start gap-3 group">
                                            <CheckCircle2 size={18} className={`mt-0.5 text-${stage.color}-500/50 group-hover:text-${stage.color}-500 dark:group-hover:text-${stage.color}-400 transition-colors`} />
                                            <span className="text-stone-600 dark:text-stone-400 group-hover:text-stone-800 dark:group-hover:text-stone-200 transition-colors font-light leading-snug">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Launch Countdown Visual */}
            <section className="py-32 px-6 bg-stone-100/50 dark:bg-stone-950/20 relative overflow-hidden border-y border-stone-200 dark:border-white/5">
                {/* Ambient brand glows */}
                <div className="absolute top-40 left-20 w-[600px] h-[600px] bg-magenta-500/[0.12] dark:bg-magenta-500/[0.18] rounded-full blur-[140px] pointer-events-none z-0" />
                <div className="absolute bottom-40 right-20 w-[600px] h-[600px] bg-indigo-500/[0.12] dark:bg-indigo-500/[0.18] rounded-full blur-[140px] pointer-events-none z-0" />

                <div className="max-w-6xl mx-auto text-center relative z-10">
                    <GlassCard accent="magenta" className="p-12 md:p-16 border-magenta-500/20">
                        {/* Decorative icons */}
                        <div className="absolute -top-8 -left-8 w-24 h-24 opacity-10">
                            <Layers className="w-full h-full text-indigo-500 rotate-12" />
                        </div>
                        <div className="absolute -bottom-8 -right-8 w-24 h-24 opacity-10">
                            <Zap className="w-full h-full text-magenta-500 -rotate-12" />
                        </div>

                        {/* Icon badge */}
                        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-magenta-500/10 border border-magenta-500/20 mx-auto mb-8">
                            <Clock className="w-10 h-10 text-magenta-500 dark:text-magenta-400 animate-spin-slow" />
                        </div>

                        {/* Main heading */}
                        <h2 className="font-outfit text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.95] mb-8 text-stone-900 dark:text-white">
                            Launch Your Brand in <br />
                            <span className="text-brand-gradient relative inline-block mt-2">
                                30 Days
                                <svg className="absolute -bottom-2 md:-bottom-3 left-0 w-full h-3 md:h-4" viewBox="0 0 300 12" fill="none" preserveAspectRatio="none">
                                    <path d="M2 8 Q75 2 150 8 Q225 14 298 8" stroke="url(#timelineGrad)" strokeWidth="3" strokeLinecap="round" />
                                    <defs>
                                        <linearGradient id="timelineGrad" x1="0" y1="0" x2="300" y2="0" gradientUnits="userSpaceOnUse">
                                            <stop stopColor="var(--brand-indigo)" />
                                            <stop offset="0.5" stopColor="var(--brand-magenta)" />
                                            <stop offset="1" stopColor="var(--brand-peach)" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </span>
                        </h2>

                        {/* Description */}
                        <p className="text-stone-600 dark:text-stone-100 text-lg md:text-xl font-light mb-12 max-w-2xl mx-auto leading-relaxed">
                            Our integrated ecosystem accelerates product development and infrastructure setup, getting you to market faster than traditional agencies.
                        </p>

                        {/* Timeline cards */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                            {[
                                { label: "Concept", val: "Day 1", color: "indigo" },
                                { label: "Sampling", val: "Day 10", color: "purple" },
                                { label: "Infrastructure", val: "Day 20", color: "pink" },
                                { label: "Live Sales", val: "Day 30", color: "emerald" }
                            ].map((stat, i) => (
                                <motion.div
                                    key={stat.label}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: i * 0.1 }}
                                    className={`p-6 md:p-8 rounded-2xl border bg-white/80 dark:bg-white/[0.05] backdrop-blur-sm hover:scale-105 transition-all duration-300 group
                                        ${stat.color === 'indigo' ? 'border-indigo-500/30 hover:border-indigo-500/50' : ''}
                                        ${stat.color === 'purple' ? 'border-purple-500/30 hover:border-purple-500/50' : ''}
                                        ${stat.color === 'pink' ? 'border-pink-500/30 hover:border-pink-500/50' : ''}
                                        ${stat.color === 'emerald' ? 'border-emerald-500/30 hover:border-emerald-500/50' : ''}
                                    `}
                                >
                                    <div className="text-xs font-bold text-stone-600 dark:text-stone-300 uppercase tracking-widest mb-3">{stat.label}</div>
                                    <div className={`text-2xl md:text-3xl font-black
                                        ${stat.color === 'indigo' ? 'text-indigo-600 dark:text-indigo-400' : ''}
                                        ${stat.color === 'purple' ? 'text-purple-600 dark:text-purple-400' : ''}
                                        ${stat.color === 'pink' ? 'text-pink-600 dark:text-pink-400' : ''}
                                        ${stat.color === 'emerald' ? 'text-emerald-600 dark:text-emerald-400' : ''}
                                    `}>{stat.val}</div>
                                </motion.div>
                            ))}
                        </div>
                    </GlassCard>
                </div>
            </section>

            {/* Comparison Section (Condensed) */}
            <section className="py-32 px-6">
                <div className="max-w-7xl mx-auto grid lg:grid-cols-5 gap-12 items-center">
                    <div className="lg:col-span-2">
                        <h2 className="font-outfit text-4xl md:text-6xl font-black tracking-tighter mb-6 leading-[0.9]">
                            The Arta <br /><span className="text-brand-gradient italic">Advantage</span>
                        </h2>
                        <p className="text-stone-600 dark:text-stone-300 text-lg font-light mb-8">
                            Traditional brand building requires 10+ different service providers. Arta replaces this with one integrated ecosystem.
                        </p>
                        <div className="space-y-4">
                            {[
                                { t: "Faster launches", s: "Market-ready in record time." },
                                { t: "Unified Data", s: "One dashboard for all metrics." },
                                { t: "Zero Complexity", s: "One point of contact." }
                            ].map(item => (
                                <div key={item.t} className="flex gap-4">
                                    <div className="w-1.5 h-1.5 rounded-full bg-brand-magenta mt-2.5" />
                                    <div>
                                        <h5 className="font-bold text-lg text-stone-900 dark:text-stone-100">{item.t}</h5>
                                        <p className="text-stone-600 dark:text-stone-300 text-sm font-light">{item.s}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="lg:col-span-3 grid grid-cols-2 gap-4">
                        <div className="space-y-4">
                            <div className="p-8 rounded-3xl border border-red-500/10 bg-red-500/[0.01] opacity-60">
                                <XCircle className="text-red-500 dark:text-red-400 mb-4" />
                                <h4 className="font-black text-xl mb-2 text-stone-900 dark:text-stone-100">Agency A</h4>
                                <p className="text-xs text-stone-600 dark:text-stone-400">Design & Packaging</p>
                            </div>
                            <div className="p-8 rounded-3xl border border-red-500/10 bg-red-500/[0.01] opacity-60">
                                <XCircle className="text-red-500 dark:text-red-400 mb-4" />
                                <h4 className="font-black text-xl mb-2 text-stone-900 dark:text-stone-100">Agency B</h4>
                                <p className="text-xs text-stone-600 dark:text-stone-400">Performance Ads</p>
                            </div>
                        </div>
                        <div className="space-y-4 pt-12">
                            <GlassCard accent="magenta" className="p-8 h-full flex flex-col justify-center items-center text-center">
                                <div className="w-16 h-16 rounded-full bg-brand-magenta/20 flex items-center justify-center mb-6">
                                    <CheckCircle2 size={32} className="text-brand-magenta" />
                                </div>
                                <h4 className="font-black text-3xl mb-2 italic text-brand-gradient">ARTA</h4>
                                <p className="text-stone-600 dark:text-stone-300 font-light leading-relaxed">The Integrated <br /> Ecosystem</p>
                            </GlassCard>
                        </div>
                    </div>
                </div>
            </section>

            {/* One-Liner (Cinematic) */}
            <section className="py-64 px-6 relative overflow-hidden bg-stone-900">
                <div className="absolute inset-0 bg-emerald-500/[0.02] border-y border-white/5" />
                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <motion.h3
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="font-outfit text-5xl md:text-8xl font-black italic tracking-tighter leading-[0.85] text-white"
                    >
                        <span className="text-brand-gradient">"Build, Launch, Operate, and Scale brands end-to-end."</span>
                    </motion.h3>
                </div>
            </section>

            {/* Footer CTA */}
            <CTASection
                title="Your Brand. Our Infrastructure."
                highlightedText="Start Building."
                description="Launch your legacy with the ecosystem it deserves. Join the Brands 360 network today."
                buttonText="Book a Strategy Call →"
                accent="magenta"
            />
            <Footer />
        </div>
    );
}
