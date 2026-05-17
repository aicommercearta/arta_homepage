"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Moon, Sun, Monitor } from "lucide-react";
import Link from "next/link";
import { useTheme } from "./ThemeProvider";
import Logo from "./Logo";

const navLinks = [
    { label: "Dropship", href: "/dropship" },
    { label: "Brands 360", href: "/brands-360" },
    { label: "AI Tools", href: "/ai-tools" },
    { label: "Brands by Arta", href: "/brands-walkthrough" },
];

export default function Navbar() {
    const { scrollY } = useScroll();
    const { theme, setTheme, resolvedTheme } = useTheme();

    const bgOpacity = useTransform(scrollY, [0, 80], [0.4, 1]);
    const blur = useTransform(scrollY, [0, 80], [12, 24]);
    const shadow = useTransform(scrollY, [0, 80], ["0 4px 16px 0 rgba(0,0,0,0.05)", "0 8px 32px 0 rgba(0,0,0,0.2)"]);

    const toggleTheme = () => {
        if (theme === "dark") setTheme("light");
        else if (theme === "light") setTheme("system");
        else setTheme("dark");
    };

    return (
        <motion.nav
            className="fixed top-0 inset-x-0 z-50 px-6 md:px-10 pointer-events-none"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            <motion.div
                style={{
                    backgroundColor: useTransform(bgOpacity, (o) =>
                        resolvedTheme === 'dark'
                            ? `rgba(20, 20, 23, ${o * 0.7})`
                            : `rgba(255, 255, 255, ${o * 0.8})`
                    ),
                    backdropFilter: useTransform(blur, (b) => `blur(${b}px)`),
                    boxShadow: shadow,
                }}
                className={`my-4 mx-auto w-full max-w-[95vw] lg:max-w-7xl flex items-center justify-between
          rounded-2xl border px-6 py-2.5
          pointer-events-auto transition-colors duration-500
          ${resolvedTheme === 'dark'
                        ? 'border-white/20 bg-white/[0.03] shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] backdrop-blur-2xl'
                        : 'border-white/40 bg-white/40 shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] backdrop-blur-2xl'}`}
            >
                {/* Extra white overlay to make the logo pop */}
                <div className="absolute inset-0 bg-white/5 dark:bg-white/[0.02] rounded-2xl pointer-events-none" />
                <Link href="/" className="relative flex items-center gap-3 group z-10">
                    <Logo className="transition-transform duration-500 group-hover:scale-105 drop-shadow-[0_2px_10px_rgba(255,255,255,0.2)] dark:drop-shadow-[0_2px_15px_rgba(255,255,255,0.4)]" />
                </Link>

                {/* Links */}
                <div className="hidden md:flex items-center gap-1 group/nav">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="relative z-10 px-4 py-2 text-sm font-bold tracking-tight text-stone-600 dark:text-stone-200 hover:text-foreground transition-all duration-300 rounded-lg hover:bg-white/20 dark:hover:bg-white/[0.1]"
                        >
                            <span className="relative z-10">{link.label}</span>
                        </a>
                    ))}
                </div>

                {/* Actions */}
                <div className="relative z-10 flex items-center gap-4">
                    <button
                        onClick={toggleTheme}
                        className="p-2.5 rounded-xl border border-white/10 hover:bg-white/10 dark:hover:bg-white/[0.05] transition-all duration-300 text-stone-500 dark:text-stone-300 hover:text-foreground hover:scale-105 active:scale-95 shadow-sm"
                        aria-label="Toggle theme"
                    >
                        {theme === "dark" ? <Moon size={18} /> : theme === "light" ? <Sun size={18} /> : <Monitor size={18} />}
                    </button>

                    <a
                        href="https://beta.artaaicommerce.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hidden sm:flex items-center gap-2 px-6 py-2.5 rounded-xl
              bg-stone-950 dark:bg-white text-white dark:text-stone-950
              text-sm font-black tracking-tight
              hover:scale-[1.05] active:scale-[0.98] transition-all duration-500
              shadow-[0_8px_16px_-6px_rgba(0,0,0,0.5)] dark:shadow-[0_8px_16px_-6px_rgba(255,255,255,0.3)]
              relative overflow-hidden group/cta"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-[#6D86FD] via-[#CC4FC7] to-[#F98976] opacity-0 group-hover/cta:opacity-10 transition-opacity duration-500" />
                        <span className="relative z-10">Get Started</span>
                    </a>
                </div>
            </motion.div>
        </motion.nav>
    );
}
