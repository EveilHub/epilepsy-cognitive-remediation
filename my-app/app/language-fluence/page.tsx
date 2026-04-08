import Link from "next/link";
import { LanguageFluence } from "@/lib/tasks-content";

export default function LanguageFluencePage() {
    return (
        <div>
            <h1 className="text-2xl font-bold">Language et Fluence Verbale</h1>

            <div className="text-lg pl-4">
                <p className="my-8">Accès lexical, production de mots</p>

                <nav>
                    <ul className="list-disc">
                        <li className="hover:text-emerald-600 dark:hover:text-teal-500 m-4">
                            <Link href="/language-fluence/1">
                                {LanguageFluence.fluenceCategorielle.title} {LanguageFluence.fluenceCategorielle.description}
                            </Link>
                        </li>
                        <li className="hover:text-emerald-600 dark:hover:text-teal-500 m-4">
                            <Link href="/language-fluence/2">
                                {LanguageFluence.fluenceLittérale.title} {LanguageFluence.fluenceLittérale.description}
                            </Link>
                        </li>
                        <li className="hover:text-emerald-600 dark:hover:text-teal-500 m-4">
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