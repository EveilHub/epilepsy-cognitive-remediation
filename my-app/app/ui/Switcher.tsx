"use client";

import Link from "next/link";
import DarkModeToggle from "./DarkModeToggle";
import Image from 'next/image';
import Translation from "./Translation";

export default function Switcher() {
    return (
        <nav className="flex flex-row items-end justify-between text-base text-slate-100 bg-teal-500 dark:text-cyan-300 dark:bg-slate-700 py-3">
            <ul className="w-full flex flex-row items-center justify-between mx-10">
                <div className="relative flex items-center justify-start w-[70%] h-[40px] rounded-full">
                    <Image
                        src="/images/psy-logo.jpg"
                        width={500}
                        height={500}
                        alt="Logo of Site"
                        className="absolute w-[40px] h-auto rounded-full"
                    />
                </div>
                <div className="w-[30%] flex items-center justify-between">
                    <li className="transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95">
                        <Link href="/patient" className="dark:hover:text-cyan-400 dark:active:text-cyan-600 block">
                            Patient
                        </Link>
                    </li>
                    <li className="transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95">
                        <Link href="/scores" className="dark:hover:text-cyan-400 dark:active:text-cyan-600 block">
                            Scores
                        </Link>
                    </li>
                    <li className="transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95">
                        <Link href="/login" className="dark:hover:text-cyan-400 dark:active:text-cyan-600 block">
                            Login
                        </Link>
                    </li>
                 
                    <Translation />
                
                    
                    <DarkModeToggle />
                </div>
            </ul>
        </nav>
    );
};