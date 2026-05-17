"use client";
import { motion } from "framer-motion";

export function HeroGridSVG() {
    return (
        <svg
            className="absolute inset-0 w-full h-full pointer-events-none opacity-30"
            xmlns="http://www.w3.org/2000/svg"
        >
            <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(99,102,241,0.2)" strokeWidth="0.5" />
                </pattern>
                <radialGradient id="fade" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="white" stopOpacity="1" />
                    <stop offset="100%" stopColor="white" stopOpacity="0" />
                </radialGradient>
                <mask id="fadeOut">
                    <rect width="100%" height="100%" fill="url(#fade)" />
                </mask>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" mask="url(#fadeOut)" />
        </svg>
    );
}

export function FloatingOrbs() {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
            {/* Primary indigo orb */}
            <div
                className="absolute rounded-full blur-[120px] opacity-25 animate-float-slow"
                style={{
                    width: 600,
                    height: 600,
                    top: "-10%",
                    left: "30%",
                    background: "radial-gradient(circle, #6D86FD 0%, transparent 70%)",
                }}
            />
            {/* Fuchsia orb */}
            <div
                className="absolute rounded-full blur-[100px] opacity-20"
                style={{
                    width: 450,
                    height: 450,
                    top: "30%",
                    right: "-5%",
                    background: "radial-gradient(circle, #CC4FC7 0%, transparent 70%)",
                    animation: "float-slow 11s ease-in-out infinite reverse",
                }}
            />
            {/* Cyan accent */}
            <div
                className="absolute rounded-full blur-[80px] opacity-15"
                style={{
                    width: 320,
                    height: 320,
                    bottom: "10%",
                    left: "10%",
                    background: "radial-gradient(circle, #F98976 0%, transparent 70%)",
                    animation: "float-slow 13s ease-in-out infinite 2s",
                }}
            />
        </div>
    );
}

export function AnimatedLogoMark({ size = 48 }: { size?: number }) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="drop-shadow-lg"
        >
            <defs>
                <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#6D86FD" />
                    <stop offset="50%" stopColor="#CC4FC7" />
                    <stop offset="100%" stopColor="#F98976" />
                </linearGradient>
            </defs>
            {/* "A" letterform as two strokes */}
            <path
                d="M8 40 L24 8 L40 40"
                stroke="url(#logoGrad)"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="svg-draw"
            />
            <path
                d="M14 28 L34 28"
                stroke="url(#logoGrad)"
                strokeWidth="4"
                strokeLinecap="round"
                className="svg-draw"
                style={{ animationDelay: "0.4s" }}
            />
        </svg>
    );
}

export function DiagonalAccentSVG() {
    return (
        <svg
            viewBox="0 0 1440 120"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full block"
            preserveAspectRatio="none"
        >
            <path
                d="M0,60 C360,120 1080,0 1440,60 L1440,120 L0,120 Z"
                fill="rgba(99,102,241,0.04)"
            />
        </svg>
    );
}

export function CircuitLineSVG() {
    return (
        <svg
            viewBox="0 0 600 200"
            className="w-full opacity-20 pointer-events-none"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M0 100 H120 V40 H250 V160 H380 V100 H600"
                stroke="url(#circuitGrad)"
                strokeWidth="1.5"
                strokeDasharray="8 4"
                className="svg-draw"
            />
            <circle cx="120" cy="100" r="4" fill="#6D86FD" />
            <circle cx="250" cy="40" r="4" fill="#CC4FC7" />
            <circle cx="380" cy="160" r="4" fill="#F98976" />
            <defs>
                <linearGradient id="circuitGrad" x1="0" y1="0" x2="600" y2="0" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#6D86FD" />
                    <stop offset="0.5" stopColor="#CC4FC7" />
                    <stop offset="1" stopColor="#F98976" />
                </linearGradient>
            </defs>
        </svg>
    );
}



export function SourcingIcon({ className = "" }: { className?: string }) {
    return (
        <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="1.5">
            <motion.path
                d="M21 7.5V16.5L12 21L3 16.5V7.5L12 3L21 7.5Z"
                initial={{ pathLength: 0, opacity: 0.2 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.path
                d="M12 21V12"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, delay: 0.5, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.path
                d="M3 7.5L12 12L21 7.5"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, delay: 0.8, repeat: Infinity, ease: "easeInOut" }}
            />
            {[3, 12, 21].map((cx, i) => (
                <motion.circle
                    key={i}
                    cx={cx} cy={cx === 12 ? 3 : 7.5} r="0.8"
                    fill="currentColor"
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ duration: 2, delay: i * 0.4, repeat: Infinity }}
                />
            ))}
            <motion.circle
                cx="12" cy="12" r="2.5"
                animate={{
                    scale: [0.8, 1.2, 0.8],
                    opacity: [0.2, 0.5, 0.2]
                }}
                transition={{ duration: 3, repeat: Infinity }}
                fill="currentColor"
                stroke="none"
            />
        </svg>
    );
}

export function PerformanceIcon({ className = "" }: { className?: string }) {
    return (
        <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="2">
            <motion.path
                d="M13 2L3 14H12L11 22L21 10H12L13 2Z"
                initial={{ pathLength: 0, fill: "rgba(204, 79, 199, 0)" }}
                animate={{
                    pathLength: [0, 1, 1],
                    fill: ["rgba(204, 79, 199, 0)", "rgba(204, 79, 199, 0.2)", "rgba(204, 79, 199, 0)"]
                }}
                transition={{
                    duration: 3,
                    repeat: Infinity,
                    times: [0, 0.6, 1],
                    ease: "easeInOut"
                }}
            />
            <motion.path
                d="M13 2L11 8"
                strokeWidth="1"
                animate={{ pathLength: [0, 1, 0], opacity: [0, 1, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
            />
            <motion.path
                d="M12 22L14 16"
                strokeWidth="1"
                animate={{ pathLength: [0, 1, 0], opacity: [0, 1, 0] }}
                transition={{ duration: 1.5, delay: 0.7, repeat: Infinity }}
            />
            <motion.circle
                cx="12" cy="12" r="1.5"
                animate={{ opacity: [0, 1, 0], scale: [1, 2.5, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
                fill="currentColor"
                stroke="none"
            />
        </svg>
    );
}

export function GrowthIcon({ className = "" }: { className?: string }) {
    return (
        <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="2">
            <motion.path
                d="M23 6L13.5 15.5L8.5 10.5L1 18"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            />
            <motion.path
                d="M17 6H23V12"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                animate={{
                    y: [0, -2, 0],
                    x: [0, 2, 0]
                }}
                transition={{ duration: 2, repeat: Infinity }}
            />
            <motion.circle cx="8.5" cy="10.5" r="1.5" fill="currentColor" animate={{ scale: [1, 1.5, 1] }} transition={{ duration: 2, repeat: Infinity }} />
            <motion.circle cx="13.5" cy="15.5" r="1.5" fill="currentColor" animate={{ scale: [1, 1.5, 1] }} transition={{ duration: 2, repeat: Infinity, delay: 0.5 }} />
        </svg>
    );
}

export function TechIcon({ className = "" }: { className?: string }) {
    return (
        <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="2">
            <motion.path
                d="M16 18L22 12L16 6"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
            />
            <motion.path
                d="M8 6L2 12L8 18"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
            />
            <motion.path
                d="M12 4V20"
                strokeWidth="1"
                strokeDasharray="4 4"
                animate={{ strokeDashoffset: [0, -8] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            />
        </svg>
    );
}

export function ExecutionIcon({ className = "" }: { className?: string }) {
    return (
        <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="1.5">
            <motion.path
                d="M12 22C12 22 20 18 20 12V5L12 2L4 5V12C4 18 12 22 12 22Z"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.path
                d="M9 12L11 14L15 10"
                initial={{ opacity: 0, pathLength: 0 }}
                animate={{ opacity: 1, pathLength: 1 }}
                transition={{ duration: 1, delay: 1, repeat: Infinity, repeatDelay: 2 }}
            />
            <motion.rect
                x="4" y="8" width="16" height="2"
                fill="currentColor"
                opacity="0.1"
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
        </svg>
    );
}

export function InfraIcon({ className = "" }: { className?: string }) {
    return (
        <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="1.5">
            <motion.path
                d="M12 2L2 7L12 12L22 7L12 2Z"
                animate={{ y: [0, -2, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.path
                d="M2 12L12 17L22 12"
                animate={{ y: [0, -1, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
            />
            <motion.path
                d="M2 17L12 22L22 17"
                animate={{ y: [0, 1, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
            />
            <motion.path
                d="M12 12V17"
                strokeDasharray="2 2"
                animate={{ opacity: [0.2, 1, 0.2] }}
                transition={{ duration: 2, repeat: Infinity }}
            />
        </svg>
    );
}

export function WorkflowIcon({ className = "" }: { className?: string }) {
    return (
        <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="2">
            <motion.path
                d="M12 2L2 7L12 12L22 7L12 2Z"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, repeat: Infinity }}
            />
            <motion.path
                d="M2 17L12 22L22 17"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            />
            <motion.path
                d="M12 12L12 17"
                strokeDasharray="2 2"
                animate={{ strokeDashoffset: [0, -4] }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            />
        </svg>
    );
}

export function AnalyticsIcon({ className = "" }: { className?: string }) {
    return (
        <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="2">
            <motion.path d="M18 20V10" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.5, repeat: Infinity }} />
            <motion.path d="M12 20V4" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.5, repeat: Infinity, delay: 0.3 }} />
            <motion.path d="M6 20V14" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.5, repeat: Infinity, delay: 0.6 }} />
            <motion.circle cx="12" cy="4" r="1" fill="currentColor" animate={{ scale: [1, 2, 1] }} transition={{ duration: 1, repeat: Infinity }} />
        </svg>
    );
}

export function ProtectionIcon({ className = "" }: { className?: string }) {
    return (
        <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="2">
            <motion.path
                d="M12 22C12 22 20 18 20 12V5L12 2L4 5V12C4 18 12 22 12 22Z"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 3, repeat: Infinity }}
            />
            <motion.path
                d="M12 8V12L14 14"
                strokeWidth="1.5"
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                style={{ originX: "12px", originY: "12px" }}
            />
        </svg>
    );
}

export function FragmentedToolsIcon({ className = "" }: { className?: string }) {
    return (
        <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="1.5">
            <motion.circle
                cx="6" cy="6" r="3"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, repeat: Infinity }}
            />
            <motion.circle
                cx="18" cy="6" r="3"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, delay: 0.2, repeat: Infinity }}
            />
            <motion.circle
                cx="6" cy="18" r="3"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, delay: 0.4, repeat: Infinity }}
            />
            <motion.circle
                cx="18" cy="18" r="3"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, delay: 0.6, repeat: Infinity }}
            />
            <motion.path
                d="M9 6H15"
                strokeDasharray="2 2"
                animate={{ strokeDashoffset: [0, -4] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            />
            <motion.path
                d="M6 9V15"
                strokeDasharray="2 2"
                animate={{ strokeDashoffset: [0, -4] }}
                transition={{ duration: 1.5, delay: 0.3, repeat: Infinity, ease: "linear" }}
            />
            <motion.path
                d="M18 9V15"
                strokeDasharray="2 2"
                animate={{ strokeDashoffset: [0, -4] }}
                transition={{ duration: 1.5, delay: 0.6, repeat: Infinity, ease: "linear" }}
            />
            <motion.path
                d="M9 18H15"
                strokeDasharray="2 2"
                animate={{ strokeDashoffset: [0, -4] }}
                transition={{ duration: 1.5, delay: 0.9, repeat: Infinity, ease: "linear" }}
            />
        </svg>
    );
}

export function BurningCashIcon({ className = "" }: { className?: string }) {
    return (
        <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="1.5">
            <motion.rect
                x="4" y="10" width="16" height="10" rx="1"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, repeat: Infinity }}
            />
            <motion.path
                d="M8 10V7C8 5.89543 8.89543 5 10 5H14C15.1046 5 16 5.89543 16 7V10"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, delay: 0.3, repeat: Infinity }}
            />
            <motion.path
                d="M12 14V16"
                strokeWidth="2"
                strokeLinecap="round"
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
            />
            {/* Flames */}
            <motion.path
                d="M6 6C6 6 5 4 5 3C5 2 6 1 7 2C8 3 7 4 7 4"
                fill="currentColor"
                stroke="none"
                opacity="0.3"
                animate={{
                    y: [0, -2, 0],
                    opacity: [0.2, 0.4, 0.2]
                }}
                transition={{ duration: 1, repeat: Infinity }}
            />
            <motion.path
                d="M18 6C18 6 19 4 19 3C19 2 18 1 17 2C16 3 17 4 17 4"
                fill="currentColor"
                stroke="none"
                opacity="0.3"
                animate={{
                    y: [0, -2, 0],
                    opacity: [0.2, 0.4, 0.2]
                }}
                transition={{ duration: 1, delay: 0.5, repeat: Infinity }}
            />
        </svg>
    );
}

export function SlowExecutionIcon({ className = "" }: { className?: string }) {
    return (
        <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="1.5">
            <motion.circle
                cx="12" cy="12" r="9"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 3, repeat: Infinity }}
            />
            <motion.path
                d="M12 7V12L15 15"
                strokeWidth="2"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, delay: 0.5, repeat: Infinity }}
            />
            <motion.path
                d="M12 4V2"
                strokeLinecap="round"
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 2, repeat: Infinity }}
            />
            <motion.path
                d="M12 22V20"
                strokeLinecap="round"
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 2, delay: 1, repeat: Infinity }}
            />
            <motion.path
                d="M4 12H2"
                strokeLinecap="round"
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 2, delay: 0.5, repeat: Infinity }}
            />
            <motion.path
                d="M22 12H20"
                strokeLinecap="round"
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 2, delay: 1.5, repeat: Infinity }}
            />
        </svg>
    );
}

export function WarningIcon({ className = "" }: { className?: string }) {
    return (
        <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="2">
            <motion.path
                d="M10.29 3.86L1.82 18C1.64 18.33 1.55 18.71 1.55 19.09C1.55 20.15 2.41 21 3.47 21H20.53C21.59 21 22.45 20.15 22.45 19.09C22.45 18.71 22.36 18.33 22.18 18L13.71 3.86C13.34 3.21 12.68 2.84 12 2.84C11.32 2.84 10.66 3.21 10.29 3.86Z"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, repeat: Infinity }}
            />
            <motion.path
                d="M12 9V13"
                strokeWidth="2.5"
                strokeLinecap="round"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.5, repeat: Infinity }}
            />
            <motion.circle
                cx="12" cy="17" r="1"
                fill="currentColor"
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
            />
        </svg>
    );
}

export function DeploymentIcon({ className = "" }: { className?: string }) {
    return (
        <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="2">
            <motion.path
                d="M13 2L3 14H12L11 22L21 10H12L13 2Z"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
            />
        </svg>
    );
}
export function DeliveryIcon({ className = "" }: { className?: string }) {
    return (
        <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="2">
            <motion.path
                d="M5 10L19 10L21 14V19H3V14L5 10Z"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, repeat: Infinity }}
            />
            <motion.path
                d="M1 14H23"
                strokeWidth="1"
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
            />
            <motion.circle cx="7" cy="19" r="2" fill="currentColor" />
            <motion.circle cx="17" cy="19" r="2" fill="currentColor" />
        </svg>
    );
}

export function StatsIcon({ className = "" }: { className?: string }) {
    return (
        <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="2">
            <motion.path
                d="M3 3V21H21"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
            />
            <motion.path
                d="M18 17V9"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1, delay: 0.5, repeat: Infinity, repeatType: "reverse" }}
            />
            <motion.path
                d="M13 17V5"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1, delay: 0.3, repeat: Infinity, repeatType: "reverse" }}
            />
            <motion.path
                d="M8 17V12"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1, delay: 0.7, repeat: Infinity, repeatType: "reverse" }}
            />
        </svg>
    );
}
