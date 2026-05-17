"use client";

import { motion } from "framer-motion";
import { MessageCircle, Clock, HelpCircle, PackageSearch } from "lucide-react";
import Navbar from "@/components/Navbar";
import Aurora from "@/components/Aurora";
import { FloatingOrbs } from "@/components/AnimatedSVG";
import FAQAccordion from "@/components/FAQAccordion";
import Footer from "@/components/Footer";
import { useTheme } from "@/components/ThemeProvider";

const WHATSAPP_URL = "https://wa.me/919876543210";
const TRACK_ORDER_URL = "https://beta.artaaicommerce.com/track/";

const faqs = [
    {
        question: "How can I track my order?",
        answer: "Visit beta.artaaicommerce.com/track and enter your order ID to see real-time status. You will also receive a tracking link by SMS and email within 24-48 hours of placing your order. Need a hand? Message us on WhatsApp with your order ID."
    },
    {
        question: "How long will my order take to arrive?",
        answer: "Most orders are delivered within 3-7 business days within India. Remote pin codes may take up to 9 days. You will receive a confirmation SMS once your order is dispatched."
    },
    {
        question: "My order is delayed — what should I do?",
        answer: "Delays are rare but can happen due to courier issues or remote locations. If it has been more than 7 business days since dispatch and your order has not arrived, contact us on WhatsApp with your order ID and we will resolve it within 24 hours."
    },
    {
        question: "I received a wrong or damaged product — what now?",
        answer: "We are sorry about that. Please share a photo or short video of the product and the packaging on WhatsApp along with your order ID within 48 hours of delivery. We will arrange a free replacement or full refund — your choice."
    },
    {
        question: "How do I return or exchange a product?",
        answer: "You can request a return within 7 days of delivery for unused items in their original packaging. Message us on WhatsApp with your order ID and reason — our team will schedule a free pickup and process your refund or exchange."
    },
    {
        question: "When will I get my refund?",
        answer: "Once your return is picked up and inspected (usually within 2-3 days of pickup), the refund is initiated to your original payment method and reflects within 5-7 business days. For COD orders, we process refunds via UPI or bank transfer."
    },
    {
        question: "I want to cancel my order. Can I?",
        answer: "Yes — orders can be cancelled free of charge before they are dispatched. Once dispatched, you can refuse delivery and we will issue a full refund once the parcel returns to us."
    },
    {
        question: "Is Cash on Delivery (COD) available?",
        answer: "COD is available on most orders for serviceable pin codes. You will see the COD option at checkout if your address is eligible. A small COD handling fee may apply."
    },
    {
        question: "Is my payment information secure?",
        answer: "Absolutely. All payments are processed through PCI-DSS compliant payment gateways. We never store your card or UPI details on our servers."
    },
    {
        question: "I have not received an OTP / order confirmation. What do I do?",
        answer: "Please check your spam folder and ensure your phone has signal. If you still have not received it within 10 minutes, message us on WhatsApp and we will manually confirm and resend your order details."
    }
];

export default function SupportPage() {
    const { resolvedTheme } = useTheme();
    const logoPalette = ["#8b9dff", "#e56de5", "#ff9d8a"];
    const lightPalette = ["#6D86FD", "#CC4FC7", "#F98976"];
    const auroraColors = resolvedTheme === "dark" ? logoPalette : lightPalette;

    return (
        <div className="relative bg-background text-foreground min-h-screen">
            <FloatingOrbs />
            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-40 pb-20 px-6 overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-40 mix-blend-screen dark:mix-blend-lighten pointer-events-none">
                    <Aurora colorStops={auroraColors} speed={0.4} />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
                </div>

                <div className="max-w-5xl mx-auto relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 backdrop-blur-md mb-8">
                            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                            <span className="text-sm font-semibold text-emerald-600 dark:text-emerald-400 tracking-wide uppercase">We&apos;re Online — Avg. Reply 2 min</span>
                        </div>
                        <h1 className="font-outfit text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[1.05] mb-6">
                            Need Help with <br />
                            <span className="text-brand-gradient">Your Order?</span>
                        </h1>
                        <p className="text-stone-600 dark:text-stone-200 text-xl md:text-2xl font-light max-w-3xl mx-auto leading-relaxed mb-12">
                            Our support team is one tap away. Whether it&apos;s tracking, returns, or refunds — we&apos;ve got you.
                        </p>

                        {/* Hero CTAs — WhatsApp (primary) + Track Order (secondary) */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-5"
                        >
                            <motion.a
                                href={WHATSAPP_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.98 }}
                                className="group inline-flex items-center justify-center gap-4 px-10 md:px-16 py-6 md:py-8 rounded-3xl
                                    bg-[#25D366] hover:bg-[#1FB855] text-white font-black text-2xl md:text-3xl tracking-tight
                                    shadow-[0_20px_60px_-12px_rgba(37,211,102,0.6)] hover:shadow-[0_25px_70px_-12px_rgba(37,211,102,0.8)]
                                    transition-all duration-300 relative overflow-hidden"
                            >
                                <MessageCircle className="w-8 h-8 md:w-10 md:h-10 group-hover:rotate-12 transition-transform" strokeWidth={2.5} />
                                <span className="relative z-10">Chat with us on WhatsApp</span>
                                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                            </motion.a>

                            <motion.a
                                href={TRACK_ORDER_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.98 }}
                                className="group inline-flex items-center justify-center gap-3 px-8 md:px-10 py-6 md:py-8 rounded-3xl
                                    border border-stone-300 dark:border-white/15 bg-white/60 dark:bg-white/5 backdrop-blur-sm
                                    text-foreground font-black text-xl md:text-2xl tracking-tight
                                    hover:border-stone-400 dark:hover:border-white/25 hover:bg-white/80 dark:hover:bg-white/10
                                    transition-all duration-300"
                            >
                                <PackageSearch className="w-7 h-7 md:w-8 md:h-8 group-hover:-rotate-6 transition-transform" strokeWidth={2.5} />
                                <span>Track Your Order</span>
                            </motion.a>
                        </motion.div>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                            className="mt-6 text-sm text-stone-500 dark:text-stone-400 font-light flex items-center justify-center gap-2"
                        >
                            <Clock className="w-4 h-4" />
                            Available 9 AM – 9 PM, all 7 days
                        </motion.p>
                    </motion.div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20 md:py-28 px-6 relative z-10">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <motion.div
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 mb-6"
                        >
                            <HelpCircle className="w-4 h-4 text-indigo-500 dark:text-indigo-400" />
                            <span className="text-xs font-black tracking-[0.3em] uppercase text-indigo-600 dark:text-indigo-400">FAQ</span>
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7 }}
                            className="font-outfit text-5xl md:text-7xl font-black tracking-tighter mb-6"
                        >
                            Frequently Asked <br />
                            <span className="text-brand-gradient">Questions</span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="text-stone-600 dark:text-stone-300 text-xl font-light max-w-2xl mx-auto"
                        >
                            Most answers are below. Can&apos;t find what you&apos;re looking for? We&apos;re a WhatsApp message away.
                        </motion.p>
                    </div>

                    <FAQAccordion items={faqs} accent="indigo" />
                </div>
            </section>

            <Footer />

            {/* Floating WhatsApp Button — always visible */}
            <motion.a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 1, type: "spring", stiffness: 200, damping: 18 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Chat with us on WhatsApp"
                className="fixed bottom-6 right-6 z-50 w-16 h-16 md:w-[68px] md:h-[68px] rounded-full bg-[#25D366] hover:bg-[#1FB855]
                    flex items-center justify-center shadow-[0_10px_40px_-5px_rgba(37,211,102,0.7)]
                    transition-colors duration-300"
            >
                <MessageCircle className="w-7 h-7 md:w-8 md:h-8 text-white" strokeWidth={2.5} />
                <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
            </motion.a>
        </div>
    );
}
