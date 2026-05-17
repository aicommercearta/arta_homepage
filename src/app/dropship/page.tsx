"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Box, ShieldCheck, Zap, Lock, CheckCircle2, XCircle, Rocket, Layers, TrendingUp } from "lucide-react";
import Navbar from "@/components/Navbar";
import GlassCard from "@/components/GlassCard";
import Aurora from "@/components/Aurora";
import { FloatingOrbs, DeliveryIcon } from "@/components/AnimatedSVG";
import CTASection from "@/components/CTASection";
import FAQAccordion from "@/components/FAQAccordion";
import Footer from "@/components/Footer";
import { useTheme } from "@/components/ThemeProvider";
import { useState, useEffect } from "react";

const pillars = [
    {
        icon: ShieldCheck,
        title: "Curated Global Suppliers",
        desc: "We verify every supplier on the ground to guarantee high-quality products and reliable stock. No more marketplace junk and endless disputes.",
        accent: "indigo",
    },
    {
        icon: DeliveryIcon,
        title: "Accelerated Logistics",
        desc: "Products ship locally in 3-7 days using premium 3PL networks. Stop making your customers wait weeks for international shipping.",
        accent: "pink",
    },
    {
        icon: Box,
        title: "Scale Ecosystem",
        desc: "Tap into the ARTA network. Seamlessly integrate with Arta Brands and Arta AI when you are ready to transition from dropshipping to a private label powerhouse.",
        accent: "purple",
    },
    {
        icon: Zap,
        title: "Creator-First Commerce",
        desc: "Turn your engaged audience into a scalable business. Launch exclusive products your community already trusts, without the operational headaches.",
        accent: "cyan",
    },
];

const workflowSteps = [
    { step: "01", title: "Brand Identity", desc: "Collaborate with our strategists to define a compelling niche and target audience that cuts through the noise.", icon: Layers },
    { step: "02", title: "Product Scouting", desc: "Select high-converting, winning products from our curated network of global suppliers.", icon: Box },
    { step: "03", title: "Store Architecture", desc: "Go live with a premium, high-converting storefront designed for modern commerce.", icon: Rocket },
    { step: "04", title: "Growth Marketing", desc: "Drive explosive traffic utilizing proven frameworks across content, comprehensive ads, and creator networks.", icon: Zap },
    { step: "05", title: "Automated Fulfillment", desc: "We pick, pack, and flawlessly ship orders directly to your customers beneath your brand.", icon: ArrowRight },
    { step: "06", title: "Enterprise Scaling", desc: "Utilize ARTA to move to custom manufacturing and private labeling when you're ready to dominate.", icon: TrendingUp },
];

const faqs = [
    {
        question: "How is ARTA different from Aliexpress or local B2B portals?",
        answer: "We are not an open marketplace where anyone can sell anything. We are a closed-loop infrastructure. We curate our suppliers, handle the logistics, and guarantee product quality. You get 3-7 day shipping within India and legally binding exclusivity that prevents suppliers from bypassing you."
    },
    {
        question: "Do I need to buy inventory upfront?",
        answer: "No. That is the core advantage of Arta Dropship. You only pay for the product after your customer has purchased it from your store. We handle the fulfillment automatically."
    },
    {
        question: "What happens if a product gets high RTO (Return to Origin)?",
        answer: "The ARTA ecosystem utilizes advanced AI-driven verification and a 3-tier manual calling process. We actively reduce your RTO rates to around 15%—less than half the industry standard—saving your margins."
    },
    {
        question: "How does the 'Stealth Supply' infrastructure protect my winners?",
        answer: "Unlike open marketplaces where winners are quickly spotted and copied, Arta 'ghosts' your successful SKUs. We bind factories to exclusive, legally-enforced supply lines and remove your winners from public discovery, ensuring your scaling edge remains untraceable by competitors."
    },
    {
        question: "Can I upgrade to my own brand later?",
        answer: "Absolutely. When your dropshipped product proves successful, you can seamlessly migrate to 'Arta Brands' to source, manufacture, and package your own private label utilizing the exact same infrastructure."
    }
];

export default function DropshipPage() {
    const { resolvedTheme } = useTheme();
    const logoPalette = ["#8b9dff", "#e56de5", "#ff9d8a"]; // Brighter for dark mode
    const lightPalette = ["#6D86FD", "#CC4FC7", "#F98976"];
    const auroraColors = resolvedTheme === "dark" ? logoPalette : lightPalette;

    const [showStickyCTA, setShowStickyCTA] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowStickyCTA(window.scrollY > 600);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="relative bg-background text-foreground min-h-screen">
            <FloatingOrbs />
            <Navbar />

            {/* Sticky Mobile CTA Bar */}
            <motion.div
                initial={{ y: 100 }}
                animate={{ y: showStickyCTA ? 0 : 100 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-background/90 backdrop-blur-xl border-t border-stone-200 dark:border-white/10 px-4 py-3 flex items-center gap-3"
            >
                <a
                    href="https://beta.artaaicommerce.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-3.5 rounded-xl bg-foreground text-background font-black text-base text-center transition-all duration-300 relative group overflow-hidden"
                >
                    <span className="relative z-10">Start Dropshipping Free →</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-[#6D86FD]/20 to-[#CC4FC7]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </a>
            </motion.div>

            {/* Hero Section */}
            <section className="relative pt-40 pb-24 px-6 overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-40 mix-blend-screen dark:mix-blend-lighten pointer-events-none">
                    <Aurora colorStops={auroraColors} speed={0.4} />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
                </div>

                <div className="max-w-7xl mx-auto relative z-10 flex flex-col items-center text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="mb-8"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 backdrop-blur-md mb-8">
                            <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
                            <span className="text-sm font-semibold text-indigo-400 tracking-wide uppercase">India&apos;s Only Genuine Dropship Platform</span>
                        </div>
                        <h1 className="font-outfit text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[1.05] mb-6">
                            India&apos;s Only Genuine <br />
                            <span className="text-brand-gradient">Dropship Platform.</span>
                        </h1>
                        <p className="text-stone-600 dark:text-stone-200 text-xl md:text-2xl font-light max-w-4xl mx-auto leading-relaxed mb-4">
                            Stop participating in saturated markets. Build a real, scalable creator-led brand without holding inventory, backed by enterprise-grade logistics and absolute legal protection.
                        </p>

                        {/* Guarantee Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 backdrop-blur-md mb-10"
                        >
                            <ShieldCheck className="w-5 h-5 text-emerald-500" />
                            <span className="text-sm md:text-base font-bold text-emerald-600 dark:text-emerald-400">Guaranteed Delivery or 100% Refund</span>
                        </motion.div>

                        {/* Hero CTAs */}
                        <motion.div
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                            className="flex flex-col sm:flex-row items-center justify-center gap-4"
                        >
                            <a
                                href="https://beta.artaaicommerce.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-10 py-5 rounded-2xl bg-foreground text-background font-black text-lg
                                    transition-all duration-300 skeuo-shadow inline-block relative group overflow-hidden"
                            >
                                <span className="relative z-10 flex items-center gap-2">
                                    Start Dropshipping Free
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </span>
                                <div className="absolute inset-0 bg-gradient-to-r from-[#6D86FD]/20 to-[#CC4FC7]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </a>
                        </motion.div>

                        {/* Social Proof */}
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.8 }}
                            className="mt-6 text-sm text-stone-500 dark:text-stone-400 font-light"
                        >
                            Join 500+ creators already building on ARTA
                        </motion.p>
                    </motion.div>
                </div>
            </section>

            {/* Core Pillars */}
            <section className="py-24 px-6 relative z-10 bg-stone-50/50 dark:bg-transparent">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="font-outfit text-4xl md:text-5xl font-black tracking-tighter mb-4">
                            The ARTA <span className="text-brand-gradient">Infrastructure</span>
                        </h2>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8">
                        {pillars.map((p, i) => (
                            <GlassCard key={p.title} delay={i * 0.1} accent={p.accent as "indigo" | "pink" | "purple" | "cyan" | "emerald"} hover className="p-10 flex flex-col h-full group border-stone-300/50 dark:border-white/20 bg-white/80 dark:bg-black/20 backdrop-blur-sm">
                                <div className="mb-8 p-5 rounded-2xl bg-stone-100/80 dark:bg-white/10 border border-stone-200/50 dark:border-white/20 w-fit group-hover:bg-stone-200/80 dark:group-hover:bg-white/15 transition-colors shadow-sm">
                                    <p.icon className={`w-10 h-10`} style={{ color: `var(--${p.accent}-500, currentColor)` }} />
                                </div>
                                <h3 className="font-outfit text-3xl font-bold mb-4 tracking-tight text-stone-900 dark:text-white">{p.title}</h3>
                                <p className="text-stone-700 dark:text-stone-100 text-lg leading-relaxed font-light flex-1">{p.desc}</p>
                            </GlassCard>
                        ))}
                    </div>
                </div>
            </section>

            {/* Workflow Section */}
            <section className="py-32 px-6 bg-stone-100/80 dark:bg-black/20 border-y border-stone-200/50 dark:border-white/5 relative z-10">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-20">
                        <h2 className="font-outfit text-5xl md:text-6xl font-black tracking-tighter mb-6">
                            The <span className="text-brand-gradient">Launch Engine</span>
                        </h2>
                        <p className="text-stone-700 dark:text-stone-200 text-xl font-light max-w-3xl mx-auto">
                            A systematic, battle-tested blueprint to transition from a single idea to a predictably scaling commerce portfolio in weeks, not years.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {workflowSteps.map((step, i) => (
                            <GlassCard key={step.step} delay={i * 0.1} hover className="p-8 relative overflow-hidden group">
                                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity transform translate-x-1/4 -translate-y-1/4 text-stone-900 dark:text-white">
                                    <step.icon size={120} />
                                </div>
                                <div className="text-6xl font-black text-stone-300 dark:text-stone-700 mb-6 font-outfit tracking-tighter">
                                    {step.step}.
                                </div>
                                <h3 className="font-outfit text-2xl font-bold mb-3 tracking-tight z-10 relative text-stone-900 dark:text-white">{step.title}</h3>
                                <p className="text-stone-700 dark:text-stone-100 text-base leading-relaxed font-light z-10 relative">{step.desc}</p>
                            </GlassCard>
                        ))}
                    </div>
                </div>
            </section>

            {/* Exclusivity Section */}
            <section className="py-24 md:py-36 px-6 relative z-10 overflow-hidden bg-background border-t border-foreground/[0.04]">
                {/* Deep background glows */}
                <div className="absolute top-1/3 left-1/4 w-[700px] h-[700px] bg-indigo-500/[0.06] dark:bg-indigo-500/[0.10] rounded-full blur-[180px] pointer-events-none" />
                <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-500/[0.05] dark:bg-purple-500/[0.09] rounded-full blur-[140px] pointer-events-none" />

                <div className="max-w-7xl mx-auto relative z-10">

                    {/* Section eyebrow */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-3 mb-10"
                    >
                        <div className="w-6 h-px bg-indigo-500/40" />
                        <span className="text-[10px] font-black tracking-[0.45em] uppercase text-indigo-500 dark:text-indigo-400">
                            Legally Bound Exclusivity
                        </span>
                    </motion.div>

                    {/* Giant headline */}
                    <motion.h2
                        initial={{ opacity: 0, y: 28 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
                        className="font-outfit text-5xl md:text-7xl lg:text-[88px] font-black tracking-tighter leading-[1.02] text-stone-900 dark:text-white mb-6 max-w-5xl"
                    >
                        You found the winner.
                        <br />
                        <span className="text-brand-gradient">We make sure it stays yours.</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.12 }}
                        className="text-stone-500 dark:text-stone-400 text-lg md:text-xl font-light leading-relaxed max-w-2xl mb-20"
                    >
                        On every other platform, your winning product is one viral video away from 50 competitors selling the exact same thing. ARTA legally locks your supply line — no one else can touch it.
                    </motion.p>

                    {/* Big visual block: lock icon + 3 horizontal fact strips */}
                    <div className="grid lg:grid-cols-[1fr_2fr] gap-6">

                        {/* Left: 3:4 shield image */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.96 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                            className="relative rounded-3xl overflow-hidden"
                            style={{ aspectRatio: "3/4" }}
                        >
                            <Image
                                src="/hf_20260313_121942_4baec8e2-192f-4277-87ad-97873e0dd624.jpeg"
                                alt="ARTA Shield — Exclusively Protected Product"
                                fill
                                className="object-cover"
                                quality={92}
                            />
                        </motion.div>

                        {/* Right: 3 stacked rows */}
                        <div className="flex flex-col gap-4">
                            {[
                                {
                                    num: "01",
                                    tag: "No copycats",
                                    headline: "Only you sell this product.",
                                    body: "No other seller on ARTA — or anywhere in India — can access your supplier for the same product while you're scaling.",
                                    gradient: "from-indigo-500/10 to-transparent",
                                    border: "border-indigo-500/20",
                                    numColor: "text-indigo-500/40",
                                    tagColor: "text-indigo-500 dark:text-indigo-400",
                                },
                                {
                                    num: "02",
                                    tag: "Legal protection",
                                    headline: "The factory is contracted to you.",
                                    body: "We execute direct supplier agreements. They cannot supply your winning product to other brands, marketplaces, or your customers directly.",
                                    gradient: "from-purple-500/10 to-transparent",
                                    border: "border-purple-500/20",
                                    numColor: "text-purple-500/40",
                                    tagColor: "text-purple-500 dark:text-purple-400",
                                },
                                {
                                    num: "03",
                                    tag: "Spend without fear",
                                    headline: "Scale your ads hard. Keep your margin.",
                                    body: "Locked supply means locked advantage. Pour budget into winning creatives knowing zero competitors can undercut you on the same product.",
                                    gradient: "from-pink-500/10 to-transparent",
                                    border: "border-pink-500/20",
                                    numColor: "text-pink-500/40",
                                    tagColor: "text-pink-500 dark:text-pink-400",
                                },
                            ].map((item, i) => (
                                <motion.div
                                    key={item.num}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: i * 0.1 }}
                                    className={`flex-1 relative rounded-2xl border ${item.border} bg-background overflow-hidden group hover:border-opacity-40 transition-all duration-300 px-8 py-7`}
                                >
                                    {/* Subtle left-side gradient wash */}
                                    <div className={`absolute inset-0 bg-gradient-to-r ${item.gradient} opacity-40 group-hover:opacity-70 transition-opacity duration-300 pointer-events-none`} />

                                    <div className="relative z-10 flex items-start gap-6">
                                        <span className={`font-outfit text-5xl font-black leading-none tracking-tighter ${item.numColor} shrink-0 mt-1`}>{item.num}</span>
                                        <div>
                                            <span className={`text-[10px] font-black tracking-[0.35em] uppercase ${item.tagColor} mb-2 block`}>{item.tag}</span>
                                            <h3 className="font-outfit text-xl md:text-2xl font-black tracking-tight text-stone-900 dark:text-white leading-tight mb-2">
                                                {item.headline}
                                            </h3>
                                            <p className="text-stone-500 dark:text-stone-400 text-sm leading-relaxed font-light">
                                                {item.body}
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Mid-page CTA */}
            <section className="py-20 px-6 relative z-10 bg-background">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="rounded-3xl border border-indigo-500/20 bg-indigo-500/[0.04] dark:bg-indigo-500/[0.06] p-10 md:p-16 relative overflow-hidden"
                    >
                        <div className="absolute -top-20 -right-20 w-60 h-60 bg-indigo-500/10 rounded-full blur-[80px] pointer-events-none" />
                        <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-purple-500/10 rounded-full blur-[80px] pointer-events-none" />
                        <h3 className="font-outfit text-3xl md:text-5xl font-black tracking-tighter mb-4 relative z-10 text-stone-900 dark:text-white">
                            Ready to Start? <span className="text-brand-gradient">It&apos;s Free.</span>
                        </h3>
                        <p className="text-stone-600 dark:text-stone-300 text-lg font-light mb-8 max-w-2xl mx-auto relative z-10">
                            Zero inventory. Zero upfront cost. Guaranteed delivery or full refund. Launch your dropshipping brand on the only platform that actually works.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
                            <a
                                href="https://beta.artaaicommerce.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-10 py-4 rounded-2xl bg-foreground text-background font-black text-lg transition-all duration-300 skeuo-shadow relative group overflow-hidden"
                            >
                                <span className="relative z-10 flex items-center gap-2">
                                    Get Started — It&apos;s Free
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </span>
                                <div className="absolute inset-0 bg-gradient-to-r from-[#6D86FD]/20 to-[#CC4FC7]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* RTO Section */}
            <section className="py-32 px-6 relative z-10 overflow-hidden bg-stone-50/60 dark:bg-white/[0.015] border-y border-stone-200/50 dark:border-white/[0.04]">
                {/* Background glows */}
                <div className="absolute -top-40 left-1/4 w-[600px] h-[600px] bg-pink-500/[0.06] dark:bg-pink-500/[0.08] rounded-full blur-[140px] pointer-events-none" />
                <div className="absolute -bottom-20 right-1/4 w-[400px] h-[400px] bg-indigo-500/[0.05] dark:bg-indigo-500/[0.07] rounded-full blur-[120px] pointer-events-none" />

                <div className="max-w-7xl mx-auto relative z-10">

                    {/* Header row */}
                    <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10 mb-20">
                        <div>
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="flex items-center gap-3 mb-8"
                            >
                                <div className="w-8 h-px bg-pink-500/50" />
                                <span className="text-[11px] font-black tracking-[0.4em] uppercase text-pink-500 dark:text-pink-400">
                                    RTO Reduction
                                </span>
                            </motion.div>
                            <motion.h2
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                                className="font-outfit text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[1.0] text-stone-900 dark:text-white"
                            >
                                Shipping isn&apos;t <br />a sale.{" "}
                                <span className="text-brand-gradient">Delivery is.</span>
                            </motion.h2>
                        </div>
                        <motion.p
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.15 }}
                            className="text-stone-500 dark:text-stone-400 text-lg font-light leading-relaxed max-w-sm lg:text-right"
                        >
                            Every returned order is a lost margin, a lost customer, and a cash flow hit. We engineered the system to make RTO the exception, not the norm.
                        </motion.p>
                    </div>

                    {/* Main visual: big number + bar */}
                    <div className="grid lg:grid-cols-2 gap-6 mb-6">

                        {/* Left: the contrast statement */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7 }}
                            className="rounded-3xl bg-white dark:bg-white/[0.03] border border-stone-200 dark:border-white/[0.06] p-10 md:p-14 flex flex-col justify-between gap-12"
                        >
                            <div>
                                <p className="text-[11px] font-black tracking-[0.35em] uppercase text-stone-400 dark:text-stone-500 mb-4">Industry Average</p>
                                <div className="flex items-end gap-4 mb-6">
                                    <span className="font-outfit text-[9rem] md:text-[11rem] font-black leading-none text-stone-200 dark:text-stone-800 tracking-tighter">30</span>
                                    <span className="font-outfit text-5xl font-black text-stone-300 dark:text-stone-700 mb-6">%</span>
                                </div>
                                <p className="text-stone-500 dark:text-stone-500 text-base font-light">of all dropship orders in India are returned before delivery. That&apos;s 3 in every 10 sales evaporating before they hit your account.</p>
                            </div>
                            {/* Bar */}
                            <div>
                                <div className="flex justify-between text-xs font-bold uppercase tracking-widest text-stone-400 dark:text-stone-600 mb-2">
                                    <span>RTO Rate</span><span>30%</span>
                                </div>
                                <div className="w-full h-2 bg-stone-100 dark:bg-stone-900 rounded-full overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: "30%" }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
                                        className="h-full bg-stone-300 dark:bg-stone-700 rounded-full"
                                    />
                                </div>
                            </div>
                        </motion.div>

                        {/* Right: ARTA number — dominant, glowing */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: 0.1 }}
                            className="rounded-3xl relative overflow-hidden p-10 md:p-14 flex flex-col justify-between gap-12"
                            style={{ background: "linear-gradient(135deg, #6D86FD08, #CC4FC708, #F9897608)" }}
                        >
                            <div className="absolute inset-0 rounded-3xl border border-stone-200 dark:border-white/[0.08]" />
                            <div className="absolute -top-20 -right-20 w-80 h-80 bg-pink-500/10 dark:bg-pink-500/15 rounded-full blur-[80px] pointer-events-none" />

                            <div className="relative z-10">
                                <p className="text-[11px] font-black tracking-[0.35em] uppercase text-pink-500 dark:text-pink-400 mb-4">ARTA Platform</p>
                                <div className="flex items-end gap-4 mb-6">
                                    <span
                                        className="font-outfit text-[9rem] md:text-[11rem] font-black leading-none tracking-tighter"
                                        style={{
                                            backgroundImage: "linear-gradient(135deg, #6D86FD, #CC4FC7, #F98976)",
                                            WebkitBackgroundClip: "text",
                                            WebkitTextFillColor: "transparent",
                                            backgroundClip: "text",
                                        }}
                                    >15</span>
                                    <span
                                        className="font-outfit text-5xl font-black mb-6"
                                        style={{
                                            backgroundImage: "linear-gradient(135deg, #6D86FD, #CC4FC7)",
                                            WebkitBackgroundClip: "text",
                                            WebkitTextFillColor: "transparent",
                                            backgroundClip: "text",
                                        }}
                                    >%</span>
                                </div>
                                <p className="text-stone-600 dark:text-stone-300 text-base font-light">Half the industry rate — achieved through AI-driven address verification, 3-tier manual confirmation, and premium 3PL networks that prioritize last-mile success.</p>
                            </div>

                            {/* Bar */}
                            <div className="relative z-10">
                                <div className="flex justify-between text-xs font-bold uppercase tracking-widest text-stone-400 dark:text-stone-500 mb-2">
                                    <span>RTO Rate</span><span>15%</span>
                                </div>
                                <div className="w-full h-2 bg-stone-100 dark:bg-white/[0.05] rounded-full overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: "15%" }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 1.4, ease: "easeOut", delay: 0.5 }}
                                        className="h-full rounded-full"
                                        style={{ background: "linear-gradient(90deg, #6D86FD, #CC4FC7, #F98976)" }}
                                    />
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Bottom row: 3 mechanisms */}
                    <div className="grid md:grid-cols-3 gap-4">
                        {[
                            {
                                label: "AI Address Verification",
                                body: "Every order is cross-validated against delivery serviceability maps before dispatch. Bad addresses get caught before they become returns.",
                                color: "text-indigo-500 dark:text-indigo-400",
                                dot: "bg-indigo-500",
                            },
                            {
                                label: "3-Tier Confirmation",
                                body: "Automated IVR, WhatsApp confirmation, and manual calling work in sequence — so only genuine, confirmed orders ship.",
                                color: "text-pink-500 dark:text-pink-400",
                                dot: "bg-pink-500",
                            },
                            {
                                label: "Premium 3PL Network",
                                body: "We route shipments through carriers ranked by last-mile success rates in your specific delivery zones — not just whoever is cheapest.",
                                color: "text-emerald-500 dark:text-emerald-400",
                                dot: "bg-emerald-500",
                            },
                        ].map((item, i) => (
                            <motion.div
                                key={item.label}
                                initial={{ opacity: 0, y: 16 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className="rounded-2xl border border-stone-200 dark:border-white/[0.06] bg-white/60 dark:bg-white/[0.02] px-8 py-7 flex flex-col gap-4 hover:border-stone-300 dark:hover:border-white/[0.12] transition-colors duration-300"
                            >
                                <div className="flex items-center gap-2.5">
                                    <div className={`w-1.5 h-1.5 rounded-full ${item.dot}`} />
                                    <span className={`text-[11px] font-black tracking-[0.3em] uppercase ${item.color}`}>{item.label}</span>
                                </div>
                                <p className="text-stone-500 dark:text-stone-400 text-sm leading-relaxed font-light">{item.body}</p>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </section>

            {/* The Arta Difference — Stacked dramatic problem→fix cards */}
            <section className="py-24 md:py-36 px-6 relative z-10 overflow-hidden bg-background border-y border-stone-200/50 dark:border-white/5">
                <div className="absolute top-0 left-1/3 w-[800px] h-[800px] bg-indigo-500/[0.03] dark:bg-indigo-500/[0.06] rounded-full blur-[200px] pointer-events-none" />
                <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-pink-500/[0.03] dark:bg-pink-500/[0.05] rounded-full blur-[160px] pointer-events-none" />

                <div className="max-w-7xl mx-auto relative z-10">
                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-3 mb-8"
                    >
                        <div className="w-6 h-px bg-pink-500/40" />
                        <span className="text-[10px] font-black tracking-[0.45em] uppercase text-pink-500 dark:text-pink-400">
                            Why Sellers Switch
                        </span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="font-outfit text-5xl md:text-7xl lg:text-[88px] font-black tracking-tighter leading-[1.02] mb-6 text-stone-900 dark:text-white max-w-5xl"
                    >
                        Every problem you&apos;ve had.
                        <br />
                        <span className="text-brand-gradient">Already solved.</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-stone-500 dark:text-stone-400 text-lg md:text-xl font-light max-w-2xl mb-20"
                    >
                        We didn&apos;t build another marketplace. We engineered every fix for every way dropshipping fails in India.
                    </motion.p>

                    {/* Cards — each is a full-width dramatic block */}
                    <div className="space-y-6">
                        {[
                            {
                                oldStat: "30 days",
                                oldLabel: "Average delivery from China",
                                newStat: "3–7",
                                newUnit: "days",
                                headline: "Your customer gets it before they forget they ordered.",
                                desc: "Products ship from local Indian warehouses via premium 3PL. No customs. No delays. No cancellations.",
                                gradient: "from-indigo-500 to-purple-500",
                                glowColor: "bg-indigo-500",
                                borderColor: "border-indigo-500/20 hover:border-indigo-500/40",
                                bgGlow: "bg-indigo-500/[0.06] dark:bg-indigo-500/[0.10]",
                            },
                            {
                                oldStat: "30%+",
                                oldLabel: "Industry RTO rate",
                                newStat: "~15",
                                newUnit: "%",
                                headline: "Half the returns. Double the profit.",
                                desc: "AI address verification, 3-tier manual confirmation calls, and smart carrier routing — only confirmed, deliverable orders ship.",
                                gradient: "from-pink-500 to-rose-500",
                                glowColor: "bg-pink-500",
                                borderColor: "border-pink-500/20 hover:border-pink-500/40",
                                bgGlow: "bg-pink-500/[0.06] dark:bg-pink-500/[0.10]",
                            },
                            {
                                oldStat: "48 hrs",
                                oldLabel: "Before competitors copy your winner",
                                newStat: "∞",
                                newUnit: "locked",
                                headline: "Your winning product stays invisible.",
                                desc: "Legally bound factory exclusivity. We ghost your SKUs from public discovery. Competitors can't find it, source it, or undercut you.",
                                gradient: "from-purple-500 to-indigo-500",
                                glowColor: "bg-purple-500",
                                borderColor: "border-purple-500/20 hover:border-purple-500/40",
                                bgGlow: "bg-purple-500/[0.06] dark:bg-purple-500/[0.10]",
                            },
                        ].map((card, i) => (
                            <motion.div
                                key={card.oldStat}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                                className={`rounded-3xl border ${card.borderColor} bg-white dark:bg-white/[0.02] relative overflow-hidden transition-all duration-500 group`}
                            >
                                {/* Background glow on hover */}
                                <div className={`absolute -top-32 -right-32 w-[300px] h-[300px] ${card.bgGlow} rounded-full blur-[100px] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />

                                <div className="relative z-10 grid lg:grid-cols-[280px_1fr] items-stretch">
                                    {/* Left: the old broken stat — crossed out */}
                                    <div className="p-8 md:p-10 lg:border-r border-b lg:border-b-0 border-stone-200/50 dark:border-white/[0.04] flex flex-col justify-center items-center lg:items-start text-center lg:text-left bg-stone-50/50 dark:bg-white/[0.01]">
                                        <p className="text-[10px] font-black tracking-[0.35em] uppercase text-stone-400 dark:text-stone-600 mb-3">Industry Standard</p>
                                        <div className="relative inline-block">
                                            <span className="font-outfit text-5xl md:text-6xl font-black text-stone-300 dark:text-stone-700 tracking-tighter leading-none">
                                                {card.oldStat}
                                            </span>
                                            {/* Strikethrough line */}
                                            <motion.div
                                                initial={{ scaleX: 0 }}
                                                whileInView={{ scaleX: 1 }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 0.6, delay: 0.4 + i * 0.1 }}
                                                className="absolute top-1/2 left-0 right-0 h-[3px] bg-red-400/50 dark:bg-red-500/40 origin-left"
                                            />
                                        </div>
                                        <p className="text-xs text-stone-400 dark:text-stone-600 mt-3 font-light leading-snug">{card.oldLabel}</p>
                                    </div>

                                    {/* Right: ARTA's answer — bold and alive */}
                                    <div className="p-8 md:p-10 lg:p-12 flex flex-col justify-center">
                                        <div className="flex items-end gap-2 mb-4">
                                            <span
                                                className="font-outfit text-7xl md:text-8xl lg:text-[100px] font-black leading-none tracking-tighter"
                                                style={{
                                                    backgroundImage: card.gradient === "from-indigo-500 to-purple-500"
                                                        ? "linear-gradient(135deg, #6366f1, #a855f7)"
                                                        : card.gradient === "from-pink-500 to-rose-500"
                                                        ? "linear-gradient(135deg, #ec4899, #f43f5e)"
                                                        : "linear-gradient(135deg, #a855f7, #6366f1)",
                                                    WebkitBackgroundClip: "text",
                                                    WebkitTextFillColor: "transparent",
                                                    backgroundClip: "text",
                                                }}
                                            >
                                                {card.newStat}
                                            </span>
                                            <span
                                                className="font-outfit text-3xl md:text-4xl font-black mb-2 tracking-tight"
                                                style={{
                                                    backgroundImage: card.gradient === "from-indigo-500 to-purple-500"
                                                        ? "linear-gradient(135deg, #6366f1, #a855f7)"
                                                        : card.gradient === "from-pink-500 to-rose-500"
                                                        ? "linear-gradient(135deg, #ec4899, #f43f5e)"
                                                        : "linear-gradient(135deg, #a855f7, #6366f1)",
                                                    WebkitBackgroundClip: "text",
                                                    WebkitTextFillColor: "transparent",
                                                    backgroundClip: "text",
                                                }}
                                            >
                                                {card.newUnit}
                                            </span>
                                        </div>
                                        <h3 className="font-outfit text-2xl md:text-3xl font-black tracking-tight text-stone-900 dark:text-white leading-tight mb-3">
                                            {card.headline}
                                        </h3>
                                        <p className="text-stone-500 dark:text-stone-400 text-base leading-relaxed font-light max-w-xl">
                                            {card.desc}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Bottom row: 3 smaller bonus stats */}
                    <div className="grid md:grid-cols-3 gap-4 mt-6">
                        {[
                            {
                                stat: "100%",
                                label: "Supplier Vetting",
                                desc: "Every factory verified on-ground. Premium quality or full refund.",
                                color: "text-indigo-500 dark:text-indigo-400",
                                dot: "bg-indigo-500",
                            },
                            {
                                stat: "Branded",
                                label: "Custom Packaging",
                                desc: "Your logo, your inserts, your unboxing experience. Real brand, not a generic poly bag.",
                                color: "text-purple-500 dark:text-purple-400",
                                dot: "bg-purple-500",
                            },
                            {
                                stat: "→ Private Label",
                                label: "Scale Path",
                                desc: "Seamlessly upgrade winners to Arta Brands for custom manufacturing. No ceiling.",
                                color: "text-emerald-500 dark:text-emerald-400",
                                dot: "bg-emerald-500",
                            },
                        ].map((item, i) => (
                            <motion.div
                                key={item.label}
                                initial={{ opacity: 0, y: 16 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.08 }}
                                className="rounded-2xl border border-stone-200 dark:border-white/[0.06] bg-white/60 dark:bg-white/[0.02] p-8 hover:border-stone-300 dark:hover:border-white/[0.12] transition-colors duration-300 group"
                            >
                                <span className={`font-outfit text-3xl font-black tracking-tighter ${item.color} block mb-3`}>{item.stat}</span>
                                <div className="flex items-center gap-2 mb-3">
                                    <div className={`w-1.5 h-1.5 rounded-full ${item.dot}`} />
                                    <span className={`text-[10px] font-black tracking-[0.3em] uppercase ${item.color}`}>{item.label}</span>
                                </div>
                                <p className="text-stone-500 dark:text-stone-400 text-sm leading-relaxed font-light">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>

                    {/* CTA */}
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="mt-16 text-center"
                    >
                        <a
                            href="https://beta.artaaicommerce.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-12 py-5 rounded-2xl bg-foreground text-background font-black text-lg transition-all duration-300 skeuo-shadow inline-flex items-center gap-2 relative group overflow-hidden"
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                Switch to ARTA — It&apos;s Free
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </span>
                            <div className="absolute inset-0 bg-gradient-to-r from-[#6D86FD]/20 to-[#CC4FC7]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </a>
                    </motion.div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-32 px-6 relative z-10">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="font-outfit text-5xl md:text-6xl font-black tracking-tighter mb-6">
                            Frequently Asked <span className="text-brand-gradient">Questions</span>
                        </h2>
                        <p className="text-stone-700 dark:text-stone-200 text-xl font-light max-w-2xl mx-auto">
                            Everything you need to know about the Arta Dropship infrastructure.
                        </p>
                    </div>

                    <FAQAccordion items={faqs} accent="indigo" />
                </div>
            </section>

            <CTASection
                title="Start Dropshipping"
                highlightedText="Risk-Free."
                description="Guaranteed delivery or 100% refund. Zero inventory. Zero upfront cost. India's only genuine dropship platform — apply now and launch in days."
                buttonText="Start Free → Zero Risk"
                accent="indigo"
            />
            <Footer />
        </div>
    );
}
