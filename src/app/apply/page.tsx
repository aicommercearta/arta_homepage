"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Aurora from "@/components/Aurora";
import { useState } from "react";
import { User, Phone, Mail, ArrowRight, Loader2, CheckCircle2 } from "lucide-react";

export default function ApplyPage() {
    // --- CONFIGURATION ---
    // 1. Follow the Google Apps Script guide I just gave you
    // 2. Paste your "Web App URL" below
    const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwjVIAntU67TVGrbSpG5IfnYi19ILBPOHwA6tgDbl4x4msFJahen3WyiCHJWhFHyWDD/exec"; 
    // -----------------------

    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: ''
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('submitting');
        
        try {
            const response = await fetch(GOOGLE_SCRIPT_URL, {
                method: 'POST',
                mode: 'no-cors', // Essential for Google Apps Script
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            // Since we're using 'no-cors', we won't get a standard response body,
            // so we assume success if the fetch didn't throw an error.
            setStatus('success');
            console.log('Form submitted successfully!');
            
        } catch (error) {
            console.error('Submission error:', error);
            setStatus('error');
            // Auto-revert to idle after a few seconds on error
            setTimeout(() => setStatus('idle'), 3000);
        }
    };

    return (
        <main className="min-h-screen bg-background text-foreground overflow-hidden selection:bg-brand-indigo/30 relative flex flex-col">
            <Navbar />
            
            <div className="flex-1 flex flex-col items-center justify-center relative pt-24 pb-12 px-4 z-10">
                <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                    <div className="absolute inset-0 opacity-20 dark:opacity-40">
                        <Aurora colorStops={['#6D86FD', '#CC4FC7', '#F98976']} blend={0.6} amplitude={1.2} />
                    </div>
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30" />
                </div>

                <div className="w-full max-w-[95vw] lg:max-w-7xl mx-auto relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20 px-4 md:px-8">
                    {/* Left Side: Invitation Text */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="w-full lg:w-1/2 text-center lg:text-left"
                    >

                        <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-[8rem] font-black tracking-tighter mb-6 text-stone-900 dark:text-white leading-[0.85] lg:-ml-1">
                            Join the <br className="hidden lg:block" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-indigo via-brand-magenta to-brand-peach">Waitlist</span>
                        </h1>
                        <p className="text-lg md:text-xl text-stone-600 dark:text-stone-300 max-w-xl lg:mx-0 mx-auto leading-relaxed">
                            Arta is currently accessible by invitation only. Apply below to secure your spot, and our curation team will be in touch to discuss your infrastructure needs.
                        </p>
                        

                    </motion.div>

                    {/* Right Side: The Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        className="w-full lg:w-1/2 max-w-2xl relative rounded-[2rem] md:rounded-[2.5rem] overflow-hidden bg-white/80 dark:bg-stone-950/80 backdrop-blur-2xl shadow-2xl border border-black/5 dark:border-white/10 p-8 md:p-10 lg:p-12"
                    >
                        {status === 'success' ? (
                            <motion.div 
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="flex flex-col items-center justify-center text-center py-12"
                            >
                                <div className="w-20 h-20 rounded-full bg-green-500/10 dark:bg-green-500/20 flex items-center justify-center mb-6">
                                    <CheckCircle2 className="w-10 h-10 text-green-600 dark:text-green-500" />
                                </div>
                                <h3 className="text-3xl font-black mb-4">You're on the list.</h3>
                                <p className="text-stone-600 dark:text-stone-400 text-lg">
                                    We've received your application. Keep an eye on your inbox, our curation team will review it shortly.
                                </p>
                            </motion.div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-5">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="block text-sm font-bold text-stone-700 dark:text-stone-300">
                                        Full Name
                                    </label>
                                    <div className="relative group">
                                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none group-focus-within:text-brand-indigo transition-colors">
                                            <User className="h-5 w-5 text-stone-400 group-focus-within:text-brand-indigo" />
                                        </div>
                                        <input
                                            type="text"
                                            id="name"
                                            required
                                            value={formData.name}
                                            onChange={(e) => setFormData({...formData, name: e.target.value})}
                                            className="block w-full pl-11 pr-4 py-4 bg-white dark:bg-white/5 border border-stone-200 dark:border-white/10 rounded-2xl text-stone-900 dark:text-white placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-brand-indigo focus:border-transparent transition-all"
                                            placeholder="Enter your full name"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="phone" className="block text-sm font-bold text-stone-700 dark:text-stone-300">
                                        Mobile Number
                                    </label>
                                    <div className="relative group">
                                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none group-focus-within:text-brand-indigo transition-colors">
                                            <Phone className="h-5 w-5 text-stone-400 group-focus-within:text-brand-indigo" />
                                        </div>
                                        <input
                                            type="tel"
                                            id="phone"
                                            required
                                            value={formData.phone}
                                            onChange={(e) => setFormData({...formData, phone: e.target.value})}
                                            className="block w-full pl-11 pr-4 py-4 bg-white dark:bg-white/5 border border-stone-200 dark:border-white/10 rounded-2xl text-stone-900 dark:text-white placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-brand-indigo focus:border-transparent transition-all"
                                            placeholder="Enter your phone number"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="email" className="block text-sm font-bold text-stone-700 dark:text-stone-300">
                                        Email Address
                                    </label>
                                    <div className="relative group">
                                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none group-focus-within:text-brand-magenta transition-colors">
                                            <Mail className="h-5 w-5 text-stone-400 group-focus-within:text-brand-magenta" />
                                        </div>
                                        <input
                                            type="email"
                                            id="email"
                                            required
                                            value={formData.email}
                                            onChange={(e) => setFormData({...formData, email: e.target.value})}
                                            className="block w-full pl-11 pr-4 py-4 bg-white dark:bg-white/5 border border-stone-200 dark:border-white/10 rounded-2xl text-stone-900 dark:text-white placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-brand-magenta focus:border-transparent transition-all"
                                            placeholder="you@company.com"
                                        />
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    disabled={status === 'submitting'}
                                    className="w-full flex items-center justify-center gap-2 py-4 md:py-5 px-6 rounded-2xl bg-stone-950 dark:bg-white text-white dark:text-stone-950 font-black text-lg transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70 disabled:hover:scale-100 disabled:cursor-not-allowed mt-4 shadow-[0_8px_30px_rgb(0,0,0,0.12)] dark:shadow-[0_8px_30px_rgba(255,255,255,0.15)] relative overflow-hidden group/btn"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-r from-[#6D86FD] via-[#CC4FC7] to-[#F98976] opacity-0 group-hover/btn:opacity-20 dark:group-hover/btn:opacity-10 transition-opacity duration-500" />
                                    
                                    {status === 'submitting' ? (
                                        <>
                                            <Loader2 className="w-6 h-6 animate-spin" />
                                            <span className="relative z-10">Submitting...</span>
                                        </>
                                    ) : (
                                        <>
                                            <span className="relative z-10">Submit Application</span>
                                            <ArrowRight className="w-5 h-5 relative z-10 group-hover/btn:translate-x-1 transition-transform" />
                                        </>
                                    )}
                                </button>
                                
                                <p className="text-center text-xs text-stone-400 dark:text-stone-500 mt-4">
                                    By submitting, you agree to our terms of processing.
                                </p>
                            </form>
                        )}
                    </motion.div>
                </div>
            </div>
        </main>
    );
}
