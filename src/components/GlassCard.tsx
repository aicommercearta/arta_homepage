"use client";

import { motion } from "framer-motion";
import { useTheme } from "./ThemeProvider";

interface GlassCardProps {
    children: React.ReactNode;
    className?: string;
    delay?: number;
    hover?: boolean;
    /** accent colour name, e.g. "emerald" "pink" "indigo" "cyan" "purple" "amber" */
    accent?: string;
}

export default function GlassCard({
    children,
    className = "",
    delay = 0,
    hover = false,
    accent = "",
}: GlassCardProps) {
    const { resolvedTheme } = useTheme();
    const isDark = resolvedTheme === "dark";

    return (
        <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay, ease: [0.25, 0.4, 0.25, 1] }}
            whileHover={hover ? {
                y: -5,
                scale: 1.01,
                boxShadow: isDark
                    ? "0 20px 40px -12px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.06)"
                    : "0 20px 40px -12px rgba(0,0,0,0.1), 0 0 0 1px rgba(0,0,0,0.03)"
            } : undefined}
            style={{
                background: isDark
                    ? "linear-gradient(135deg, rgba(30, 30, 30, 0.90) 0%, rgba(20, 20, 20, 0.95) 100%)"
                    : undefined
            }}
            className={`relative overflow-hidden rounded-3xl
        border transition-all duration-300
        ${isDark
                    ? "border-white/10"
                    : "border-black/[0.06] bg-white/70"}
        backdrop-blur-xl
        ${className}`}
        >
            {/* Top-edge sheen line */}
            <div className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent z-10 ${isDark ? "via-white/20" : "via-white/80"} to-transparent`} />

            {/* Accent radial glow — multiple glows for better effect */}
            {accent && (
                <>
                    {/* Top-left glow */}
                    <div
                        className="absolute -top-12 -left-12 w-64 h-64 rounded-full blur-[100px] pointer-events-none z-0"
                        style={{
                            background: `radial-gradient(circle, ${accentColor(accent, isDark ? 0.30 : 0.20)}, transparent 70%)`,
                        }}
                    />
                    {/* Bottom-right glow */}
                    <div
                        className="absolute -bottom-12 -right-12 w-64 h-64 rounded-full blur-[100px] pointer-events-none z-0"
                        style={{
                            background: `radial-gradient(circle, ${accentColor(accent, isDark ? 0.20 : 0.12)}, transparent 70%)`,
                        }}
                    />
                </>
            )}

            <div className="relative z-10">
                {children}
            </div>
        </motion.div>
    );
}

/** Returns a CSS radial-gradient colour for the given accent name */
function accentColor(name: string, opacity: number) {
    const map: Record<string, string> = {
        indigo: `rgba(109,134,253,${opacity})`,
        magenta: `rgba(204,79,199,${opacity})`,
        peach: `rgba(249,137,118,${opacity})`,
        emerald: `rgba(52,211,153,${opacity})`,
        pink: `rgba(236,72,153,${opacity})`,
        amber: `rgba(251,191,36,${opacity})`,
        cyan: `rgba(6,182,212,${opacity})`,
        purple: `rgba(168,85,247,${opacity})`,
    };
    return map[name] ?? `rgba(109,134,253,${opacity})`;
}
