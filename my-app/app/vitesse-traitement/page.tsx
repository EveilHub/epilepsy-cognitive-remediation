"use client";

import { useLanguage } from "@/context/LanguageContext";
import { VitesseTraiementContent } from "@/lib/tasks-content";
import Link from "next/link";

export default function VitesseTraitementPage() {

    const { chooseLang } = useLanguage();

    return (
        <div>
            <h1 className="text-2xl font-bold">{chooseLang === "FR" ? "Vitesse de Traitement" : "Processing Speed"}</h1>

            <p className="my-10">Répondre rapidement et précisément</p>

            <nav>
                <ul className="list-disc">
                    <li className="hover:text-teal-600 dark:hover:text-cyan-500 m-4">
                        <Link href="/vitesse-traitement/1">
                            {VitesseTraiementContent.tempsReact.title} {VitesseTraiementContent.tempsReact.description}
                        </Link>
                    </li>
                    <li className="hover:text-teal-600 dark:hover:text-cyan-500 m-4">
                        <Link href="/vitesse-traitement/2">
                            {VitesseTraiementContent.matchingFast.title} {VitesseTraiementContent.matchingFast.description}
                        </Link>
                    </li>
                    <li className="hover:text-teal-600 dark:hover:text-cyan-500 m-4">
                        <Link href="/vitesse-traitement/3">
                            {VitesseTraiementContent.trailMakingA.title} {VitesseTraiementContent.trailMakingA.description}
                        </Link>
                    </li>
                </ul>
            </nav>

        </div>
    )
};