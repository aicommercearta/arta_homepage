import Logo from "./Logo";

export default function Footer() {
    return (
        <footer className="py-24 px-6 border-t border-foreground/[0.05] bg-stone-950/20">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
                <div className="flex items-center gap-8">
                    <Logo />
                    <div className="h-10 w-px bg-foreground/10 hidden md:block" />
                    <div>
                        <div className="text-[12px] text-stone-600 dark:text-stone-400 font-bold tracking-[0.3em] uppercase">Architecture for Brands</div>
                    </div>
                </div>
                <div className="text-stone-600 dark:text-stone-400 text-sm text-center md:text-left font-medium opacity-60">© 2026 ARTA Brand Infrastructure. All rights evolved.</div>
                <div className="flex gap-10 text-[11px] text-stone-600 dark:text-stone-400 font-black uppercase tracking-[0.3em] opacity-80">
                    <a href="#" className="hover:text-indigo-500 dark:hover:text-indigo-400 transition-all border-b border-transparent hover:border-indigo-500/50 pb-1">Twitter / X</a>
                    <a href="#" className="hover:text-indigo-500 dark:hover:text-indigo-400 transition-all border-b border-transparent hover:border-indigo-500/50 pb-1">LinkedIn</a>
                </div>
            </div>
        </footer>
    );
}
