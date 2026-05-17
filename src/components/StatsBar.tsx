"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const stats = [
    { value: 5, suffix: "x", label: "Team Productivity Boost" },
    { value: 2, suffix: " Verticals", label: "SaaS + Brand Infrastructure" },
    { value: 100, suffix: "+", label: "Brands Powered" },
    { value: 360, suffix: "°", label: "End-to-End Coverage" },
];

function Counter({ target, suffix }: { target: number; suffix: string }) {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLDivElement>(null);
    const started = useRef(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !started.current) {
                    started.current = true;
                    let start = 0;
                    const duration = 1600;
                    const step = Math.ceil(duration / target);
                    const timer = setInterval(() => {
                        start += 1;
                        setCount(start);
                        if (start >= target) clearInterval(timer);
                    }, step);
                }
            },
            { threshold: 0.5 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [target]);

    return (
        <div ref={ref} className="font-outfit text-5xl md:text-6xl font-black text-foreground">
            {count}
            <span className="text-indigo-500">{suffix}</span>
        </div>
    );
}

export default function StatsBar() {
    return (
        <section className="w-full py-20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {stats.map((s, i) => (
                    <motion.div
                        key={s.label}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1, duration: 0.6 }}
                        className="flex flex-col items-center text-center gap-2"
                    >
                        <Counter target={s.value} suffix={s.suffix} />
                        <p className="text-stone-600 dark:text-stone-300 text-sm font-medium">{s.label}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
