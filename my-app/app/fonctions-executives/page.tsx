"use client";

import { useLanguage } from "@/context/LanguageContext";
import { FonctionExecutives } from "@/lib/tasks-content";
import Link from "next/link";

export default function FonctionsExecutivesPage() {

    const { chooseLang } = useLanguage();

    return (
        <div>
            <h1 className="text-2xl font-bold">{chooseLang === "FR" ? "Fonctions Exécutives" : "Executive Functions"}</h1>

            <p className="my-10">Planifier, s&apos;adapter, inhiber les mauvaises réponses</p>

            <nav>
                <ul className="list-disc">
                    <li className="hover:text-teal-600 dark:hover:text-cyan-500 m-4">
                        <Link href="/fonctions-executives/1">
                            {FonctionExecutives.trailMakingB.title} {FonctionExecutives.trailMakingB.description}
                        </Link>
                    </li>
                    <li className="hover:text-teal-600 dark:hover:text-cyan-500 m-4">
                        <Link href="/fonctions-executives/2">
                            {FonctionExecutives.tourHanoi.title} {FonctionExecutives.tourHanoi.description}
                        </Link>
                    </li>
                    <li className="hover:text-teal-600 dark:hover:text-cyan-500 m-4">
                        <Link href="/fonctions-executives/3">
                            {FonctionExecutives.triDeCartes.title} {FonctionExecutives.triDeCartes.description}
                        </Link>
                    </li>
                </ul>
            </nav>

        </div>
    )
};