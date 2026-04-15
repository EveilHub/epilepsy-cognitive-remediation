import Link from "next/link";
import { FaHome } from "react-icons/fa";

export default function Menu() {
    return (
        <nav className="text-base font-bold text-slate-100 bg-teal-500 dark:text-cyan-300 dark:bg-slate-700 py-6">
            <ul className="w-auto flex flex-row items-center justify-between mx-10">
                <li>
                    <Link href="/"><span><FaHome size={24}/></span></Link>
                </li>
                <li className="transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95">
                    <Link href="/memo-travail" className="dark:hover:text-cyan-400 dark:active:text-cyan-600 block">
                        Mémoire de Travail
                    </Link>
                </li>
                <li className="transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95">
                    <Link href="/memo-episodic" className="dark:hover:text-cyan-400 dark:active:text-cyan-600 block">
                        Mémoire Episodique
                    </Link>
                </li>
                <li className="transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95">
                    <Link href="/attention-soutenue" className="dark:hover:text-cyan-400 dark:active:text-cyan-600 block">
                        Attention Soutenue
                    </Link>
                </li>
                <li className="transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95">
                    <Link href="/attention-selective" className="dark:hover:text-cyan-400 dark:active:text-cyan-600 block">
                        Attention Sélective et divisée
                    </Link>
                </li>
                <li className="transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95">
                    <Link href="/vitesse-traitement" className="dark:hover:text-cyan-400 dark:active:text-cyan-600 block">
                        Vitesse de Traitement
                    </Link>
                </li>
                <li className="transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95">
                    <Link href="/fonctions-executives" className="dark:hover:text-cyan-400 dark:active:text-cyan-600 block">
                        Fonctions Ecécutives
                    </Link>
                </li>
                <li className="transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95">
                    <Link href="/language-fluence" className="dark:hover:text-cyan-400 dark:active:text-cyan-600 block">
                        Language et Fluence Verbale
                    </Link>
                </li>
            </ul>
        </nav>
    );
};