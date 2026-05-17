"use client";

import { motion } from "framer-motion";
import { Sparkles, Zap, TrendingUp, Package, Users, ShoppingCart, Brain, Boxes } from "lucide-react";

const items = [
    { text: "AI-Powered Operations", icon: Brain, color: "indigo" },
    { text: "Brand Infrastructure", icon: Boxes, color: "purple" },
    { text: "D2C Commerce", icon: ShoppingCart, color: "pink" },
    { text: "Performance Marketing", icon: TrendingUp, color: "cyan" },
    { text: "Workflow Automation", icon: Zap, color: "emerald" },
    { text: "Inventory Intelligence", icon: Package, color: "orange" },
    { text: "Creator Ecosystems", icon: Users, color: "magenta" },
    { text: "Full-Stack Commerce", icon: Sparkles, color: "indigo" },
];

const colorMap: Record<string, string> = {
    indigo: "bg-indigo-500/10 dark:bg-indigo-500/20 text-indigo-600 dark:text-indigo-400 border-indigo-500/20",
    purple: "bg-purple-500/10 dark:bg-purple-500/20 text-purple-600 dark:text-purple-400 border-purple-500/20",
    pink: "bg-pink-500/10 dark:bg-pink-500/20 text-pink-600 dark:text-pink-400 border-pink-500/20",
    cyan: "bg-cyan-500/10 dark:bg-cyan-500/20 text-cyan-600 dark:text-cyan-400 border-cyan-500/20",
    emerald: "bg-emerald-500/10 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",
    orange: "bg-orange-500/10 dark:bg-orange-500/20 text-orange-600 dark:text-orange-400 border-orange-500/20",
    magenta: "bg-fuchsia-500/10 dark:bg-fuchsia-500/20 text-fuchsia-600 dark:text-fuchsia-400 border-fuchsia-500/20",
};

export default function Marquee() {
    const doubled = [...items, ...items];

    return (
        <div className="relative w-full overflow-hidden py-12 border-y border-stone-200 dark:border-white/10 bg-stone-50 dark:bg-stone-950/50">
            {/* Ambient glow effects */}
            <div className="absolute top-0 left-1/4 w-[400px] h-full bg-indigo-500/[0.05] dark:bg-indigo-500/[0.08] blur-[100px] pointer-events-none" />
            <div className="absolute top-0 right-1/4 w-[400px] h-full bg-pink-500/[0.05] dark:bg-pink-500/[0.08] blur-[100px] pointer-events-none" />

            {/* Fade edges */}
            <div className="absolute left-0 top-0 bottom-0 w-32 md:w-48 z-10 bg-gradient-to-r from-stone-50 dark:from-stone-950/50 to-transparent pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-32 md:w-48 z-10 bg-gradient-to-l from-stone-50 dark:from-stone-950/50 to-transparent pointer-events-none" />

            <motion.div
                className="flex gap-6 md:gap-8 whitespace-nowrap"
                animate={{ x: ["0%", "-50%"] }}
                transition={{ duration: 40, ease: "linear", repeat: Infinity }}
            >
                {doubled.map((item, i) => (
                    <motion.div
                        key={i}
                        className={`inline-flex items-center gap-3 px-6 py-3 rounded-full border backdrop-blur-sm shrink-0 font-bold text-sm md:text-base tracking-tight
                            ${colorMap[item.color]}
                        `}
                        whileHover={{ scale: 1.05, y: -2 }}
                        transition={{ duration: 0.2 }}
                    >
                        <item.icon className="w-5 h-5" />
                        <span>{item.text}</span>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
}
