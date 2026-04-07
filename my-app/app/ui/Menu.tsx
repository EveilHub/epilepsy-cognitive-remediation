import Link from "next/link";
import { FaHome } from "react-icons/fa";

export default function Menu() {
    return (
        <nav className="text-base font-bold text-slate-100 bg-emerald-500 dark:text-slate-100 dark:bg-slate-700 px-4 py-6">
            <ul className="flex flex-row items-center justify-around">
                <li>
                    <Link href="/"><span><FaHome size={24}/></span></Link>
                </li>
                <li>
                    <Link href="/memo-travail">Mémoire de Travail</Link>
                </li>
                <li>
                    <Link href="/memo-episodic">Mémoire Episodique</Link>
                </li>
                <li>
                    <Link href="/attention-soutenue">Attention Soutenue</Link>
                </li>
                <li>
                    <Link href="/attention-selective">Attention Sélective et divisée</Link>
                </li>
                <li>
                    <Link href="/vitesse-traitement">Vitesse de Traitement</Link>
                </li>
                <li>
                    <Link href="/fonctions-executives">Fonctions Ecécutives</Link>
                </li>
                <li>
                    <Link href="/language-fluence">Language et Fluence Verbale</Link>
                </li>
            </ul>
        </nav>
    );
};