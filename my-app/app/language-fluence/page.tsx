"use client";

import Link from "next/link";
import { LanguageFluence } from "@/lib/tasks-content";
import { useLanguage } from "@/context/LanguageContext";

export default function LanguageFluencePage() {

    const { chooseLang } = useLanguage();

    return (
        <div>
            <h1 className="text-2xl font-bold">{chooseLang === "FR" ? "Language et Fluence Verbale" : "Language and Verbal Fluency"}</h1>

            <div className="text-lg pl-4">
                <p className="my-8">Accès lexical, production de mots</p>

                <nav>
                    <ul className="list-disc">
                        <li className="hover:text-teal-600 dark:hover:text-cyan-500 m-4">
                            <Link href="/language-fluence/1">
                                {LanguageFluence.fluenceCategorielle.title} {LanguageFluence.fluenceCategorielle.description}
                            </Link>
                        </li>
                        <li className="hover:text-teal-600 dark:hover:text-cyan-500 m-4">
                            <Link href="/language-fluence/2">
                                {LanguageFluence.fluenceLittérale.title} {LanguageFluence.fluenceLittérale.description}
                            </Link>
                        </li>
                        <li className="hover:text-teal-600 dark:hover:text-cyan-500 m-4">
                            <Link href="/language-fluence/3">
                                {LanguageFluence.completionDePhrases.title} {LanguageFluence.completionDePhrases.description}
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>

        </div>
    );
};