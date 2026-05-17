"use client";

import Image from "next/image";
import { motion, useScroll, useTransform, useSpring, MotionValue } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { ArrowRight, Zap, Code2, Shield, Layers, TrendingUp, Package } from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import GlassCard from "@/components/GlassCard";
import Marquee from "@/components/Marquee";
import { FloatingOrbs, HeroGridSVG, SourcingIcon, PerformanceIcon, GrowthIcon, TechIcon, ExecutionIcon, InfraIcon, WorkflowIcon, AnalyticsIcon, ProtectionIcon, DeploymentIcon, FragmentedToolsIcon, BurningCashIcon, SlowExecutionIcon, WarningIcon } from "@/components/AnimatedSVG";
// Forced re-parse to clear Turbopack cache issues
import Aurora from "@/components/Aurora";
import { useTheme } from "@/components/ThemeProvider";
import CTASection from "@/components/CTASection";
import VerticalsStack from "@/components/VerticalsStack";
import Footer from "@/components/Footer";



/* ─── Helpers ────────────────────────────────────────────────── */
function useBlurTransform(value: MotionValue<number>, inputRange: number[], outputRange: number[]) {
  return useTransform(useTransform(value, inputRange, outputRange), (b: number) => `blur(${b}px)`);
}

// Hook to compute [sectionStart, sectionEnd] in page pixels after layout
function useSectionScrollRange(ref: React.RefObject<HTMLDivElement | null>): [number, number] {
  const [range, setRange] = useState<[number, number]>([0, 9999]);

  useEffect(() => {
    function measure() {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const top = rect.top + window.scrollY;
      const height = el.offsetHeight;
      setRange([top, top + height]);
    }

    // Measure after first paint and on resize
    const timeout = setTimeout(measure, 100);
    window.addEventListener("resize", measure);
    return () => {
      clearTimeout(timeout);
      window.removeEventListener("resize", measure);
    };
  }, [ref]);

  return range;
}

/* ─── Page ──────────────────────────────────────────────────── */
export default function Home() {
  const evolutionRef = useRef<HTMLDivElement>(null);
  const { resolvedTheme } = useTheme();

  // Use window-level scrollY — avoids sticky container tracking bugs
  const { scrollY } = useScroll();

  // Measure section's exact pixel range after mount
  const [sectionStart, sectionEnd] = useSectionScrollRange(evolutionRef);

  // Map raw pixels to [0, 1] with clamping
  const rawProgress = useTransform(scrollY, [sectionStart, sectionEnd], [0, 1], { clamp: true });
  const sp = useSpring(rawProgress, { stiffness: 45, damping: 22, restDelta: 0.001 });

  // ── SEQUENCE 1: Hero Scene (0 - 0.2) ────────────────────────
  const heroOpacity = useTransform(sp, [0, 0.16], [1, 0]);
  const heroScale = useTransform(sp, [0, 0.16], [1, 0.85]);
  const heroY = useTransform(sp, [0, 0.16], [0, -40]);

  // ── SEQUENCE 2: Dashboard — Phase A + B ────────────────
  // Card fully GONE by 0.80, before SaaS section starts rising
  const dashOpacity = useTransform(sp, [0.15, 0.25, 0.70, 0.80], [0, 1, 1, 0]);
  const dashY = useTransform(sp, [0.2, 0.4, 0.70, 0.82], [50, 0, 0, -40]);
  const dashScale = useTransform(sp, [0.2, 0.4], [0.96, 1]);

  // Image 1: starts peeking through from FIRST scroll frame — blurry + dim,
  // then sharpens and brightens as you scroll into the section.
  const img1Opacity = useTransform(sp, [0.0, 0.08, 0.28, 0.45, 0.55], [0, 0.3, 1, 1, 0]);
  // Entry blur: 24px → 0 as image comes into view
  const img1EntryBlur = useBlurTransform(sp, [0.0, 0.30], [24, 0]);
  // Phase B: Image 2 fades IN after Image 1 exits, holds, then fades out
  const img2Opacity = useTransform(sp, [0.5, 0.6, 0.72, 0.8], [0, 1, 1, 0]);

  // Overlay: NOT fully opaque (starts at 0.85 so image bleeds through slightly),
  // then clears as hero exits
  const initialOverlay = useTransform(sp, [0.0, 0.30], [0.85, 0]);

  // ── SEQUENCE 3: Card exit (clean fade + slide-up) ─────────────
  // Card fully exits at end of the 350vh sticky stage — no SaaS overlay needed
  const finalBlur = useBlurTransform(sp, [0.70, 0.90], [0, 12]);
  const finalOverlay = useTransform(sp, [0.72, 0.85], [0, 0.6]);

  // Background Dynamics
  const gridScale = useTransform(sp, [0, 1], [1, 1.25]);
  const gridOpacity = useTransform(sp, [0, 0.5, 1], [0.4, 0.5, 0.2]);

  // Aurora palette — Indigo, Magenta, Peach
  const logoPalette = ["#8b9dff", "#e56de5", "#ff9d8a"]; // Brighter for dark mode
  const lightPalette = ["#6D86FD", "#CC4FC7", "#F98976"];
  const auroraColors = resolvedTheme === "dark" ? logoPalette : lightPalette;

  return (
    <div className="relative bg-background text-foreground transition-colors duration-500">
      <FloatingOrbs />
      <Navbar />

      {/* 
        STICKY STAGE: 500vh travel distance.
        CRITICAL: No overflow:hidden on this outer wrapper or any ancestor —
        overflow:hidden breaks position:sticky in CSS.
        The sticky child must have an unclipped scroll parent.
      */}
      <section ref={evolutionRef} className="relative h-[350vh]">
        <div className="sticky top-0 h-screen w-full bg-background overflow-hidden">

          {/* BACKGROUND LAYER: Aurora + Grid, morphs as user scrolls */}
          <motion.div
            style={{ scale: gridScale, opacity: gridOpacity }}
            className="absolute inset-0 pointer-events-none"
          >
            <div className="absolute inset-0 z-0">
              <Aurora
                colorStops={auroraColors}
                blend={1}
                amplitude={1.2}
                speed={1}
                className={resolvedTheme === "dark" ? "opacity-90" : "opacity-90"}
              />
            </div>
            <div className="absolute inset-0 z-10 opacity-30">
              <HeroGridSVG />
            </div>
          </motion.div>

          {/* ── LAYER 2: Dashboard Card ── */}
          {/* Width matches the navbar: same max-w-7xl + px-6 md:px-10 outer padding.
              Top offset is 96px (navbar ~68px + 28px breathing room). No chrome bar. */}
          <motion.div
            className="absolute inset-x-0 z-20 px-6 md:px-10"
            style={{
              top: '96px',
              bottom: '28px',
              opacity: dashOpacity,
              y: dashY,
              scale: dashScale,
              filter: finalBlur,
            }}
          >
            <div className="max-w-7xl mx-auto h-full rounded-[1.5rem] md:rounded-[2rem] overflow-hidden relative shadow-2xl border border-white/10">

              {/* IMAGE 1: Platform Overview — peeks through blurry from first scroll frame */}
              <motion.div
                className="absolute inset-0 z-10"
                style={{ opacity: img1Opacity, filter: img1EntryBlur }}
              >
                {/* Desktop */}
                <Image
                  src={resolvedTheme === "dark" ? "/image1-dark-desk.jpeg" : "/image1-light-desk.jpeg"}
                  alt="ARTA Platform OS — Brand Overview"
                  fill
                  sizes="(max-width: 768px) 0vw, 90vw"
                  className="object-cover object-top hidden md:block"
                  priority
                  quality={90}
                />
                {/* Mobile */}
                <Image
                  src={resolvedTheme === "dark" ? "/image1-dark-mob.jpeg" : "/image1-light-mob.jpeg"}
                  alt="ARTA Platform OS — Brand Overview"
                  fill
                  sizes="(max-width: 768px) 100vw, 0vw"
                  className="object-cover object-top block md:hidden"
                  priority
                  quality={90}
                />
              </motion.div>

              {/* IMAGE 2: Analytics View — shows in scroll Phase B */}
              <motion.div
                className="absolute inset-0 z-10"
                style={{ opacity: img2Opacity }}
              >
                {/* Desktop */}
                <Image
                  src={resolvedTheme === "dark" ? "/image2-dark-desk.jpeg" : "/image2-light-desk.png"}
                  alt="ARTA Platform OS — Analytics"
                  fill
                  sizes="(max-width: 768px) 0vw, 90vw"
                  className="object-cover object-top hidden md:block"
                  quality={90}
                />
                {/* Mobile */}
                <Image
                  src={resolvedTheme === "dark" ? "/image2-dark-mob.jpeg" : "/image2-light-mob.jpeg"}
                  alt="ARTA Platform OS — Analytics"
                  fill
                  sizes="(max-width: 768px) 100vw, 0vw"
                  className="object-cover object-top block md:hidden"
                  quality={90}
                />
              </motion.div>

              {/* OVERLAY A: Full-cover while hero text is visible, fades away */}
              <motion.div
                className="absolute inset-0 z-20 pointer-events-none"
                style={{ opacity: initialOverlay, background: 'var(--background)' }}
              />

              {/* OVERLAY B: Dims card as SaaS section rises above it */}
              <motion.div
                className="absolute inset-0 z-30 pointer-events-none"
                style={{ opacity: finalOverlay, background: 'rgba(9,9,11,0.75)' }}
              />
            </div>
          </motion.div>

          {/* ── LAYER 1: Hero Text — z-30, fades out first ──────── */}
          <motion.div
            style={{ opacity: heroOpacity, scale: heroScale, y: heroY }}
            className="absolute inset-0 z-30 flex flex-col items-center justify-center pt-20 px-6"
          >


            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.15 }}
              className="font-outfit text-center text-4xl sm:text-7xl md:text-[88px]
                font-black tracking-tighter leading-[1.1] md:leading-[1.02] max-w-full px-2 sm:px-0 sm:max-w-5xl mb-6 text-foreground"
            >
              Infrastructure for{" "}
              <span className="relative inline-block">
                <span className="text-brand-gradient px-2">
                  Modern Brand
                </span>
                <svg className="absolute -bottom-1 left-0 w-full h-3 md:h-5 opacity-70" viewBox="0 0 300 12" fill="none" preserveAspectRatio="none">
                  <motion.path
                    d="M2 8 Q75 2 150 8 Q225 14 298 8"
                    stroke="url(#uGrad)" strokeWidth="4" strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1.5, delay: 0.8 }}
                  />
                  <defs>
                    <linearGradient id="uGrad" x1="0" y1="0" x2="300" y2="0" gradientUnits="userSpaceOnUse">
                      <stop stopColor="var(--brand-indigo)" />
                      <stop offset="0.5" stopColor="var(--brand-magenta)" />
                      <stop offset="1" stopColor="var(--brand-peach)" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>{" "}
              Builders
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-center text-stone-600 dark:text-stone-200 text-lg md:text-2xl max-w-2xl mb-12 font-light leading-relaxed"
            >
              Build smarter. Operate stronger. Scale faster.{" "}
              <br className="hidden md:block" />
              Powering the next generation of brand-builders.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-5"
            >
              <a
                href="https://beta.artaaicommerce.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center justify-center gap-3 px-10 py-5 rounded-2xl
                  bg-foreground text-background font-black text-lg
                  hover:scale-105 active:scale-95 transition-all duration-300 skeuo-shadow"
              >
                Start Building
                <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── THE PROBLEM ──────────────────────────────────────────── */}
      <section className="py-32 px-6 bg-background relative z-10 border-t border-foreground/5 overflow-hidden">
        {/* Ambient brand glows in background */}
        <div className="absolute top-20 left-10 w-[600px] h-[600px] bg-indigo-500/[0.12] dark:bg-indigo-500/[0.20] rounded-full blur-[140px] pointer-events-none z-0" />
        <div className="absolute bottom-20 right-10 w-[600px] h-[600px] bg-pink-500/[0.12] dark:bg-pink-500/[0.20] rounded-full blur-[140px] pointer-events-none z-0" />

        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <motion.p
              initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
              className="text-cyan-500 dark:text-cyan-400 text-[11px] font-black tracking-[0.4em] uppercase mb-5"
            >
              01 — The Problem
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.7 }}
              className="font-outfit text-5xl md:text-7xl font-black tracking-tighter mb-8 text-stone-900 dark:text-white"
            >
              Building Brands{" "}
              <span className="text-brand-gradient">Shouldn&apos;t Be This Hard</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
              className="text-stone-600 dark:text-stone-200 text-xl md:text-2xl font-light max-w-4xl mx-auto leading-relaxed"
            >
              The traditional brand-building playbook is broken. Creators and entrepreneurs are forced to juggle 10+ different tools, agencies, and platforms—bleeding time, money, and focus.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {[
              {
                Icon: FragmentedToolsIcon,
                title: "Fragmented Tools",
                desc: "Separate platforms for sourcing, fulfillment, website, ads, analytics—each with their own login, dashboard, and invoice.",
                problems: ["10+ different logins", "Disconnected data", "Integration nightmares"],
                color: "text-indigo-500 dark:text-indigo-400"
              },
              {
                Icon: BurningCashIcon,
                title: "Burning Cash",
                desc: "Paying premium prices to multiple agencies that don't communicate, leading to duplicated work and wasted ad spend.",
                problems: ["Agency markups", "Redundant costs", "No accountability"],
                color: "text-red-500 dark:text-red-400"
              },
              {
                Icon: SlowExecutionIcon,
                title: "Slow Execution",
                desc: "Weeks wasted coordinating between vendors. By the time you launch, the market has moved on and competitors have copied your idea.",
                problems: ["Endless delays", "Missed opportunities", "Decision paralysis"],
                color: "text-orange-500 dark:text-orange-400"
              }
            ].map((item, i) => (
              <GlassCard key={item.title} delay={i * 0.15} hover accent="indigo"
                className="p-8 group"
              >
                <div className={`mb-8 p-5 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 w-fit group-hover:scale-110 transition-all duration-500 ${item.color}`}>
                  <item.Icon className="w-12 h-12" />
                </div>
                <h3 className="font-outfit text-2xl font-bold mb-4 tracking-tight text-stone-900 dark:text-white">
                  {item.title}
                </h3>
                <p className="text-stone-600 dark:text-stone-100 text-base leading-relaxed font-light mb-6">
                  {item.desc}
                </p>
                <div className="space-y-2">
                  {item.problems.map((problem, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-stone-500 dark:text-stone-200">
                      <div className="w-1.5 h-1.5 rounded-full bg-red-500/50 dark:bg-red-400" />
                      <span className="font-medium">{problem}</span>
                    </div>
                  ))}
                </div>
              </GlassCard>
            ))}
          </div>

          {/* The Breaking Point */}
          <motion.div
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.8 }}
            className="relative"
          >
            <GlassCard accent="pink" className="p-12 md:p-16 text-center border-pink-500/20">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500/[0.03] via-purple-500/[0.03] to-indigo-500/[0.03] rounded-3xl pointer-events-none" />
              <div className="relative z-10">
                <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-pink-500/10 border border-pink-500/20 mb-8">
                  <div className="w-8 h-8 text-pink-600 dark:text-pink-400">
                    <WarningIcon className="w-full h-full" />
                  </div>
                  <span className="text-sm font-black uppercase tracking-[0.3em] text-pink-600 dark:text-pink-400">
                    The Result
                  </span>
                </div>
                <h3 className="font-outfit text-4xl md:text-6xl font-black tracking-tighter mb-6 text-stone-900 dark:text-white">
                  90% of Brands <span className="text-pink-500 dark:text-pink-400">Fail Before Scale</span>
                </h3>
                <p className="text-stone-600 dark:text-stone-200 text-lg md:text-xl font-light max-w-3xl mx-auto leading-relaxed">
                  Not because of bad products or poor marketing—but because the infrastructure needed to scale simply doesn&apos;t exist. Until now.
                </p>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </section>

      {/* ── THE SOLUTION ─────────────────────────────────────────── */}
      <section className="py-24 md:py-48 px-6 bg-background relative overflow-hidden border-t border-foreground/5">
        {/* Dynamic Background Accents */}
        <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-brand-indigo/5 blur-[150px] pointer-events-none" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-brand-magenta/5 blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="mb-24 md:mb-32">
            <motion.p
              initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
              className="text-brand-magenta text-[11px] font-black tracking-[0.5em] uppercase mb-8"
            >
              02 — The Solution
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="font-outfit text-6xl md:text-8xl lg:text-[9rem] font-black tracking-tighter leading-[0.82] mb-12 text-stone-900 dark:text-white"
            >
              One Platform. <br />
              <span className="text-brand-gradient">Complete Infra.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
              className="text-stone-600 dark:text-stone-300 text-xl md:text-3xl font-light max-w-3xl leading-relaxed"
            >
              ARTA is the world&apos;s first Brand OS. We&apos;ve replaced the fragmented toolstack with a single, high-performance infrastructure designed for the modern builder.
            </motion.p>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-start">
            {/* Left: The Content Blocks */}
            <div className="lg:col-span-7 space-y-6">
              <GlassCard accent="indigo" className="p-10 md:p-12" hover>
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div className="w-16 h-16 rounded-2xl bg-stone-950 dark:bg-white flex items-center justify-center shrink-0 shadow-2xl">
                    <TechIcon className="w-8 h-8 text-white dark:text-stone-950" />
                  </div>
                  <div>
                    <h3 className="font-outfit text-3xl font-black mb-4 tracking-tight text-stone-900 dark:text-white">Unified Command Center</h3>
                    <p className="text-stone-600 dark:text-stone-200 text-lg leading-relaxed font-light">
                      One login for your entire universe. Inventory sourcing, ad performance, and team workflows synced in real-time. No more data silos.
                    </p>
                  </div>
                </div>
              </GlassCard>

              <div className="grid md:grid-cols-2 gap-6">
                <GlassCard accent="magenta" className="p-8" hover>
                  <div className="mb-6 w-12 h-12 rounded-xl bg-brand-magenta/10 flex items-center justify-center">
                    <Zap className="w-6 h-6 text-brand-magenta" />
                  </div>
                  <h4 className="text-xl font-black mb-3 text-stone-900 dark:text-white">AI Engine</h4>
                  <p className="text-stone-500 dark:text-stone-300 text-sm leading-relaxed">
                    Proprietary models generating ad creatives and predicting stock needs before you even realize them.
                  </p>
                </GlassCard>
                <GlassCard accent="peach" className="p-8" hover>
                  <div className="mb-6 w-12 h-12 rounded-xl bg-brand-peach/10 flex items-center justify-center">
                    <Package className="w-6 h-6 text-brand-peach" />
                  </div>
                  <h4 className="text-xl font-black mb-3 text-stone-900 dark:text-white">Global Infra</h4>
                  <p className="text-stone-500 dark:text-stone-300 text-sm leading-relaxed">
                    From China factory audits to white-glove fulfillment. We own the operations, you own the growth.
                  </p>
                </GlassCard>
              </div>

              {/* High-Impact Stat Block */}
              <GlassCard accent="indigo" className="p-10 border-indigo-500/10 overflow-hidden relative">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                  <div className="text-center md:text-left">
                    <div className="text-5xl md:text-7xl font-black text-stone-900 dark:text-white mb-2">90%</div>
                    <div className="text-stone-400 font-bold uppercase tracking-widest text-xs">Reduction in complexity</div>
                  </div>
                  <div className="w-px h-12 bg-stone-200 dark:bg-white/10 hidden md:block" />
                  <div className="text-center md:text-left">
                    <div className="text-5xl md:text-7xl font-black text-stone-900 dark:text-white mb-2">4X</div>
                    <div className="text-stone-400 font-bold uppercase tracking-widest text-xs">Faster execution speed</div>
                  </div>
                </div>
              </GlassCard>
            </div>

            {/* Right: The Visual Hook - Sticky Container */}
            <div className="lg:col-span-5 h-[500px] lg:h-[720px] sticky top-32 lg:mt-0 mt-12 group">
               <div className="w-full h-full relative rounded-[3rem] overflow-hidden bg-stone-100 dark:bg-stone-900 shadow-2xl border border-black/5 dark:border-white/10">
                  {/* Visual Content: Ready for video.mp4 */}
                  <div className="absolute inset-0 bg-stone-950 overflow-hidden">
                     <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover"
                        src="/arta.mp4"
                     />
                  </div>

                  {/* Glass Top Frame */}
                  <div className="absolute inset-0 border-[1.5px] border-white/10 rounded-[3rem] pointer-events-none active-glow transition-all duration-700" />
                  
                  {/* Subtle Scanline Overlay */}
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.03),rgba(0,255,0,0.01),rgba(0,0,255,0.03))] bg-[length:100%_2px,3px_100%] pointer-events-none opacity-20" />
               </div>
            </div>
          </div>
        </div>
      </section>

      <VerticalsStack />

      {/* ── WHY ARTA ──────────────────────────────────────────────── */}
      <section id="why" className="py-24 md:py-32 px-6 bg-background relative z-10 border-t border-foreground/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.p
              initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
              className="text-cyan-500 text-[11px] font-black tracking-[0.4em] uppercase mb-5"
            >
              03 — Why ARTA
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.7 }}
              className="font-outfit text-5xl md:text-7xl font-black tracking-tighter"
            >
              Pure{" "}
              <span className="text-brand-gradient">
                Performance
              </span>
            </motion.h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { Icon: TechIcon, label: "Technology", desc: "Custom-built commerce OS integrated with proprietary AI models for optimization.", accent: "indigo", color: "text-indigo-400" },
              { Icon: ExecutionIcon, label: "Execution", desc: "We implement — not just advise. Practical, battle-tested brand systems.", accent: "cyan", color: "text-cyan-400" },
              { Icon: InfraIcon, label: "Infrastructure", desc: "We build scaling operating systems, not just simple marketing campaigns.", accent: "purple", color: "text-purple-400" },
            ].map(({ Icon, label, desc, accent, color }, i) => (
              <GlassCard key={label} delay={i * 0.15} hover accent={accent}
                className="p-10 text-center flex flex-col items-center group"
              >
                <div className={`mb-7 p-5 rounded-2xl border group-hover:scale-110 transition-all duration-500
                  bg-white/10 dark:bg-white/[0.06] border-white/20 dark:border-white/[0.08]
                  ${color} overflow-hidden`}>
                  <Icon className="w-12 h-12" />
                </div>
                <h3 className="font-outfit text-2xl font-bold mb-3 tracking-tight text-stone-900 dark:text-stone-100">{label}</h3>
                <p className="text-stone-600 dark:text-stone-100 text-sm leading-relaxed font-light">{desc}</p>
              </GlassCard>
            ))}
          </div>

        </div>
      </section>


      <Marquee />

      <CTASection />

      <Footer />
    </div>
  );
}
