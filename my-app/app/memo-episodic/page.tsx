"use client";

import { useLanguage } from "@/context/LanguageContext";
import { MemoEpisodic } from "@/lib/tasks-content";
import Link from "next/link";

export default function MemoEpisodiquePage() {

    const { chooseLang } = useLanguage();

    return (
        <div>
            <h1 className="text-2xl font-bold">{chooseLang === "FR" ? "Mémoire Episodique" : "Episodic Memory"}</h1>

            <div className="text-lg pl-4">
                <p className="my-8">Se souvenir d&apos;événements, d&apos;histoires, de contextes</p>

                <nav>
                    <ul className="list-disc">
                        <li className="hover:text-teal-600 dark:hover:text-cyan-500 m-4">
                            <Link href="/memo-episodic/1">
                                <span className="font-bold">{MemoEpisodic.pairesMotsImg.title}</span>
                                &nbsp;{MemoEpisodic.pairesMotsImg.description}
                            </Link>
                        </li>
                        <li className="hover:text-teal-600 dark:hover:text-cyan-500 m-4">
                            <Link href="/memo-episodic/2">
                                <span className="font-bold">{MemoEpisodic.storyShort.title}</span>
                                &nbsp;{MemoEpisodic.storyShort.description}
                            </Link>
                        </li>
                        <li className="hover:text-teal-600 dark:hover:text-cyan-500 m-4">
                            <Link href="/memo-episodic/3">
                                <span className="font-bold">{MemoEpisodic.lieuxObjets.title}</span>
                                &nbsp;{MemoEpisodic.lieuxObjets.description}
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>

        </div>
    );
};