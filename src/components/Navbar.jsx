import { useState } from "react";

const navItems = [
    { label: "Home", href: "#home" },
    { label: "Services", href: "#services" },
    { label: "Pricing", href: "#pricing" },
    { label: "About us", href: "#about" },
    { label: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const active = "Home"; // untuk slicing: anggap page ini aktif di Home

    return (
        <header className="pt-6">
            <nav className="flex items-center justify-between">
                {/* Logo */}
                <a href="#home" className="flex items-baseline gap-0.5 select-none">
                    <span className="text-xl font-semibold text-blue-900">Tour</span>
                    <span className="text-xl font-semibold text-orange-500">avel</span>
                    <span className="text-xl font-semibold text-blue-900">.</span>
                </a>

                {/* Desktop menu */}
                <div className="hidden md:flex items-center gap-8">
                    {navItems.map((item) => {
                        const isActive = item.label === active;
                        return (
                            <a
                                key={item.label}
                                href={item.href}
                                className={[
                                    "text-sm font-medium transition",
                                    isActive
                                        ? "text-orange-500"
                                        : "text-slate-600 hover:text-slate-900",
                                ].join(" ")}
                            >
                                {item.label}
                            </a>
                        );
                    })}
                </div>

                {/* Right actions */}
                <div className="flex items-center gap-3">
                    <a
                        href="#member"
                        className="hidden sm:inline-flex items-center justify-center px-5 py-2 rounded-full bg-orange-400 text-white text-sm font-medium shadow-sm hover:bg-orange-500 transition"
                    >
                        Member Area
                    </a>

                    {/* Mobile button */}
                    <button
                        type="button"
                        className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/60 border border-white/70 shadow-sm hover:bg-white transition"
                        aria-label="Toggle menu"
                        aria-expanded={open}
                        onClick={() => setOpen((v) => !v)}
                    >
                        <span className="text-slate-700">{open ? "✕" : "☰"}</span>
                    </button>
                </div>
            </nav>

            {/* Mobile dropdown */}
            {open && (
                <div className="md:hidden mt-4 rounded-2xl bg-white/60 backdrop-blur border border-white/70 shadow-sm p-4">
                    <div className="flex flex-col gap-3">
                        {navItems.map((item) => {
                            const isActive = item.label === active;
                            return (
                                <a
                                    key={item.label}
                                    href={item.href}
                                    className={[
                                        "text-sm font-medium transition",
                                        isActive
                                            ? "text-orange-500"
                                            : "text-slate-700 hover:text-slate-900",
                                    ].join(" ")}
                                    onClick={() => setOpen(false)}
                                >
                                    {item.label}
                                </a>
                            );
                        })}

                        <a
                            href="#member"
                            className="mt-2 inline-flex items-center justify-center px-5 py-2 rounded-full bg-orange-400 text-white text-sm font-medium shadow-sm hover:bg-orange-500 transition"
                            onClick={() => setOpen(false)}
                        >
                            Member Area
                        </a>
                    </div>
                </div>
            )}
        </header>
    );
}
