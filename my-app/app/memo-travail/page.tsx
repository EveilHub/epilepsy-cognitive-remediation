"use client";

import Link from "next/link";
import { MemoTravailContent } from "@/lib/tasks-content";
import { useLanguage } from "@/context/LanguageContext";

export default function MemoTravailPage() {

    const { chooseLang } = useLanguage();

    return (
        <div>
            <h1 className="text-2xl font-bold">{chooseLang === "FR" ? "Memoire au Travail" : "Working Memory"}</h1>

            <div className="text-lg pl-4">
                <p className="my-8">Garder et manipuler des informations en temps réel</p>

                <nav>
                    <ul className="list-disc">
                        <li className="hover:text-teal-600 dark:hover:text-cyan-500 m-4">
                            <Link href="/memo-travail/1">
                                {MemoTravailContent.sequChiff.title} {MemoTravailContent.sequChiff.description}
                            </Link>
                        </li>
                        <li className="hover:text-teal-600 dark:hover:text-cyan-500 m-4">
                            <Link href="/memo-travail/2">
                                {MemoTravailContent.nback.title} {MemoTravailContent.nback.description}
                            </Link>
                        </li>
                        <li className="hover:text-teal-600 dark:hover:text-cyan-500 m-4">
                            <Link href="/memo-travail/3">
                                {MemoTravailContent.grillePoint.title} {MemoTravailContent.grillePoint.description}
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>

        </div>
    );
};