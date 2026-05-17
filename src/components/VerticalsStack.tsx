"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import GlassCard from "./GlassCard";
import { TechIcon, SourcingIcon, PerformanceIcon, DeliveryIcon } from "./AnimatedSVG";

interface VerticalItem {
    id: string;
    title: string;
    subtitle: string;
    desc: string;
    icon: any;
    accent: string;
    href: string;
    items: string[];
    video: string;
}

const verticals: VerticalItem[] = [
    {
        id: "dropship",
        title: "Arta Dropship",
        subtitle: "Sourced Globally, Handled Locally.",
        desc: "Break the ad fatigue. Direct China sourcing with legally bound exclusivity ensures your winning products stay yours.",
        icon: SourcingIcon,
        accent: "purple",
        href: "https://beta.artaaicommerce.com/",
        items: ["China Exclusive Inventory", "Legally Bound Exclusivity", "Active RTO Reduction"],
        video: "/dropship.mp4"
    },
    {
        id: "brands",
        title: "Arta Brands 360",
        subtitle: "Full-Stack Brand Infrastructure.",
        desc: "A complete ecosystem that builds, launches, operates, and scales brands end-to-end. One system, every stage.",
        icon: PerformanceIcon,
        accent: "magenta",
        href: "https://beta.artaaicommerce.com/",
        items: ["Identity & Creation", "Product Development", "Scale & Execution"],
        video: "/brands.mp4"
    },
    {
        id: "aitools",
        title: "Arta AI Tools",
        subtitle: "Scale Creative Output.",
        desc: "Upload product once, generate creatives anytime. Conversion-optimized scripts and hooks built for high ROAS.",
        icon: DeliveryIcon,
        accent: "peach",
        href: "https://beta.artaaicommerce.com/",
        items: ["Meta Ad Scripts", "Reels & UGC Hooks", "Policy-Safe AI Engine"],
        video: "/ai-tools.mp4"
    }
];

export default function VerticalsStack() {
    const { resolvedTheme } = useTheme();
    const isDark = resolvedTheme === "dark";
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <section ref={containerRef} className="relative h-[300vh] bg-background">
            <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden px-6 lg:px-10">
                <div className="max-w-7xl mx-auto w-full relative h-[75vh] mt-8">
                    {verticals.map((v, i) => {
                        // Card entry control
                        // For 3 cards, each occupies 33% of the scroll
                        const step = 1 / verticals.length;
                        const entryStart = i * step;
                        const entryEnd = (i + 0.5) * step;

                        const moveY = useTransform(smoothProgress,
                            [i === 0 ? 0 : entryStart - 0.15, entryStart],
                            [i === 0 ? 0 : 1000, 0]
                        );

                        // Exit effects for non-final cards
                        const isLast = i === verticals.length - 1;
                        const scale = useTransform(smoothProgress,
                            [(i + 0.8) * step, (i + 1) * step],
                            [1, 0.92]
                        );
                        const opacity = useTransform(smoothProgress,
                            [(i + 0.8) * step, (i + 1) * step],
                            [1, 0]
                        );
                        const filter = useTransform(smoothProgress,
                            [(i + 0.8) * step, (i + 1) * step],
                            ["blur(0px)", "blur(20px)"]
                        );


                        return (
                            <motion.div
                                key={v.id}
                                onMouseMove={(e) => {
                                    const rect = e.currentTarget.getBoundingClientRect();
                                    const x = e.clientX - rect.left;
                                    const y = e.clientY - rect.top;
                                    e.currentTarget.style.setProperty('--mouse-x', `${x}px`);
                                    e.currentTarget.style.setProperty('--mouse-y', `${y}px`);
                                }}
                                style={{
                                    y: moveY,
                                    scale: isLast ? 1 : scale,
                                    opacity: isLast ? 1 : opacity,
                                    filter: isLast ? "none" : filter,
                                    "--mouse-x": "50%",
                                    "--mouse-y": "0%"
                                } as any}
                                className="absolute inset-0 w-full h-full flex items-center justify-center group/card"
                            >
                                <GlassCard className="w-full h-full relative overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] dark:shadow-[0_80px_160px_-40px_rgba(0,0,0,1),0_0_100px_-20px_rgba(255,255,255,0.08)] border-t-white/60 dark:border-t-white/50 border-white/20 dark:bg-white/[0.15]">
                                    {/* Grid Background Pattern */}
                                    <div
                                        className="absolute inset-0 pointer-events-none opacity-[0.25] dark:opacity-[0.15] mix-blend-multiply dark:mix-blend-normal transition-all duration-300"
                                        style={{
                                            backgroundImage: `
                                                linear-gradient(to right, ${isDark ? 'rgba(255,255,255,0.4)' : 'rgba(0,0,0,0.2)'} 1px, transparent 1px),
                                                linear-gradient(to bottom, ${isDark ? 'rgba(255,255,255,0.4)' : 'rgba(0,0,0,0.2)'} 1px, transparent 1px)
                                            `,
                                            backgroundSize: '40px 40px',
                                            maskImage: 'radial-gradient(circle 800px at var(--mouse-x) var(--mouse-y), black 0%, transparent 80%)',
                                            WebkitMaskImage: 'radial-gradient(circle 800px at var(--mouse-x) var(--mouse-y), black 0%, transparent 80%)'
                                        }}
                                    />

                                    {/* Brand-consistent Radial Gradient Accent - Mouse Tracking Glow */}
                                    <div
                                        className="absolute inset-0 pointer-events-none opacity-[0.5] dark:opacity-[0.25] mix-blend-multiply dark:mix-blend-screen transition-all duration-300 ease-out"
                                        style={{
                                            background: `radial-gradient(circle 800px at var(--mouse-x) var(--mouse-y), var(--brand-${v.id === 'dropship' ? 'indigo' : v.id === 'brands' ? 'magenta' : 'peach'}), transparent 80%)`
                                        }}
                                    />

                                    <div className="relative z-10 w-full h-full flex flex-col md:flex-row items-stretch overflow-hidden">
                                        {/* Left Side: Content Box - 60% */}
                                        <div className="w-full md:w-3/5 p-8 md:p-12 lg:p-16 flex flex-col justify-center items-start overflow-y-auto">
                                            <div className="space-y-8 mb-10">
                                                <h3 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-stone-900 dark:text-white tracking-tighter leading-[0.85]">
                                                    {v.title.split(' ')[1]}
                                                    <span className="block text-3xl md:text-4xl lg:text-5xl mt-4 font-black tracking-normal text-brand-gradient">
                                                        by Arta
                                                    </span>
                                                </h3>
                                                <p className="text-xl md:text-2xl text-stone-700 dark:text-stone-100 font-light max-w-2xl leading-relaxed">
                                                    {v.desc}
                                                </p>
                                            </div>

                                            <a
                                                href={v.href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="group inline-flex items-center rounded-3xl bg-stone-950 dark:bg-white text-white dark:text-stone-950 font-black text-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 mt-6 shadow-2xl overflow-hidden border border-white/10 dark:border-white/40 shrink-0"
                                            >
                                                {/* Left Arrow Circle */}
                                                <div className="flex items-center justify-center px-4 py-4 md:px-5 group-hover:-rotate-45 transition-all duration-300 shrink-0">
                                                    <ArrowRight className="w-5 h-5 md:w-6 md:h-6" strokeWidth={2.5} />
                                                </div>

                                                {/* Split Line */}
                                                <div className="w-[1px] h-8 bg-white/20 dark:bg-black/10 shrink-0" />

                                                <span className="px-6 py-4 md:px-8 tracking-tight">Apply for {v.title.split(' ')[1]}</span>
                                            </a>
                                        </div>

                                        {/* Right Side: Simple Tall Video Container - 40% */}
                                        <div className="w-full h-full md:w-2/5 p-6 md:p-8 lg:p-10 shrink-0 flex items-center justify-center">
                                            {/* Outer Glassmorphism Frame */}
                                            <div className="w-full h-full relative p-2 md:p-3 rounded-[2.5rem] md:rounded-[3rem] bg-stone-100/10 dark:bg-white/5 backdrop-blur-2xl border border-white/30 dark:border-white/20 shadow-2xl">
                                                {/* Inner Video Container */}
                                                <div className="w-full h-full relative rounded-[2rem] md:rounded-[2.5rem] overflow-hidden border border-black/5 dark:border-white/10">
                                                    <video
                                                        autoPlay
                                                    muted
                                                    loop
                                                    playsInline
                                                    className="w-full h-full object-cover transition-transform duration-[6000ms] ease-out-expo hover:scale-105"
                                                >
                                                        <source src={v.video} type="video/mp4" />
                                                    </video>
                                                    
                                                    {/* Subtle Light Refraction Overlay */}
                                                    <div className="absolute inset-0 bg-gradient-to-tr from-black/20 via-transparent to-white/10 mix-blend-overlay pointer-events-none" />
                                                </div>
                                                
                                                {/* Ambient Brand Aura behind video */}
                                                <div className={`absolute -inset-x-20 -bottom-20 h-1/2 bg-${v.accent}-500/20 blur-[100px] pointer-events-none -z-10`} />
                                            </div>
                                        </div>
                                    </div>
                                </GlassCard>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
