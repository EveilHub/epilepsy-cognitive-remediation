"use client";

import { useLanguage } from "@/context/LanguageContext";
import Link from "next/link";
import { FaHome } from "react-icons/fa";

export default function Menu() {

    const { chooseLang } = useLanguage();

    return (
        <nav className="text-base font-bold text-slate-100 bg-teal-500 dark:text-cyan-300 dark:bg-slate-700 py-6">
            <ul className="w-auto flex flex-row items-center justify-between mx-10">
                
                <li>
                    <Link href="/"><span><FaHome size={24}/></span></Link>
                </li>

                <li className="transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95">
                    <Link href="/memo-travail" className="dark:hover:text-cyan-400 dark:active:text-cyan-600 block">
                        {chooseLang === "FR" ? "Memoire au Travail" : "Working Memory"}
                    </Link>
                </li>
                <li className="transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95">
                    <Link href="/memo-episodic" className="dark:hover:text-cyan-400 dark:active:text-cyan-600 block">
                        {chooseLang === "FR" ? "Mémoire Episodique" : "Episodic Memory"}
                    </Link>
                </li>
                <li className="transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95">
                    <Link href="/attention-soutenue" className="dark:hover:text-cyan-400 dark:active:text-cyan-600 block">
                        {chooseLang === "FR" ? "Attention Soutenue" : "Sustained Attention"}
                    </Link>
                </li>
                <li className="transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95">
                    <Link href="/attention-selective" className="dark:hover:text-cyan-400 dark:active:text-cyan-600 block">
                        {chooseLang === "FR" ? "Attention Sélective et divisée" : "Selective and Divided Attention"}
                    </Link>
                </li>
                <li className="transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95">
                    <Link href="/vitesse-traitement" className="dark:hover:text-cyan-400 dark:active:text-cyan-600 block">
                        {chooseLang === "FR" ? "Vitesse de Traitement" : "Processing Speed"}
                    </Link>
                </li>
                <li className="transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95">
                    <Link href="/fonctions-executives" className="dark:hover:text-cyan-400 dark:active:text-cyan-600 block">
                        {chooseLang === "FR" ? "Fonctions Exécutives" : "Executive Functions"}
                    </Link>
                </li>
                <li className="transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95">
                    <Link href="/language-fluence" className="dark:hover:text-cyan-400 dark:active:text-cyan-600 block">
                        {chooseLang === "FR" ? "Language et Fluence Verbale" : "Language and Verbal Fluency"}
                    </Link>
                </li>
            </ul>
        </nav>
    );
};