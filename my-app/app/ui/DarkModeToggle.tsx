"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function DarkModeToggle() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);

    if (!mounted) return <span className="w-8 h-5 block" />;

    return (
        <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="text-slate-100 font-bold hover:text-white transition-colors bg-teal-400 dark:bg-slate-600 ring ring-teal-500 dark:ring-slate-700 shadow-[inset_0_4px_10px_rgba(0,0,0,0.25),0_2px_4px_rgba(0,0,0,0.06)] 
            dark:shadow-[inset_0_4px_10px_rgba(0,0,0,0.25),0_2px_4px_rgba(0,0,0,0.06)] p-3 rounded-full cursor-pointer"
            aria-label="Toggle dark mode"
        >
            {theme === "dark" ? "☀️" : "🌙"}
        </button>
    );
}