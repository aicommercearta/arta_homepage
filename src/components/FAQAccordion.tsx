"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import GlassCard from "./GlassCard";

interface FAQItem {
    question: string;
    answer: string;
}

interface FAQAccordionProps {
    items: FAQItem[];
    accent?: "indigo" | "pink" | "purple" | "cyan" | "emerald";
}

export default function FAQAccordion({ items, accent = "indigo" }: FAQAccordionProps) {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const toggleAccordion = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="w-full max-w-4xl mx-auto flex flex-col gap-4">
            {items.map((item, index) => {
                const isActive = activeIndex === index;
                return (
                    <GlassCard
                        key={index}
                        accent={accent}
                        className={`transition-all duration-300 ${isActive ? 'bg-white/10 dark:bg-white/5 border-indigo-500/30' : 'bg-transparent hover:bg-white/5 border-transparent hover:border-white/10'}`}
                    >
                        <button
                            className="w-full flex items-center justify-between p-6 text-left"
                            onClick={() => toggleAccordion(index)}
                        >
                            <span className="font-outfit text-xl font-bold tracking-tight pr-8 text-stone-900 dark:text-stone-100">
                                {item.question}
                            </span>
                            <div className={`p-2 rounded-full shrink-0 transition-colors ${isActive ? 'bg-indigo-500/20 text-indigo-500 dark:text-indigo-400' : 'bg-stone-500/10 text-stone-600 dark:text-stone-300'}`}>
                                {isActive ? <Minus size={18} /> : <Plus size={18} />}
                            </div>
                        </button>
                        <AnimatePresence initial={false}>
                            {isActive && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                    className="overflow-hidden"
                                >
                                    <div className="p-6 pt-0 text-stone-600 dark:text-stone-300 font-light leading-relaxed">
                                        {item.answer}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </GlassCard>
                );
            })}
        </div>
    );
}
