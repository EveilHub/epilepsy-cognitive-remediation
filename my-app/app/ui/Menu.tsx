import Link from "next/link";
import { FaHome } from "react-icons/fa";

export default function Menu() {
    return (
        <nav className="text-base font-bold text-slate-100 bg-teal-500 dark:text-cyan-300 dark:bg-slate-700 py-6">
            <ul className="flex flex-row items-center justify-between mx-10">
                <li>
                    <Link href="/"><span><FaHome size={24}/></span></Link>
                </li>
                <li>
                    <Link href="/memo-travail" className="dark:hover:text-cyan-500 py-3">
                        Mémoire de Travail
                    </Link>
                </li>
                <li>
                    <Link href="/memo-episodic" className="dark:hover:text-cyan-500 py-3">
                        Mémoire Episodique
                    </Link>
                </li>
                <li>
                    <Link href="/attention-soutenue" className="dark:hover:text-cyan-500 py-3">
                        Attention Soutenue
                    </Link>
                </li>
                <li>
                    <Link href="/attention-selective" className="dark:hover:text-cyan-500 py-3">
                        Attention Sélective et divisée
                    </Link>
                </li>
                <li>
                    <Link href="/vitesse-traitement" className="dark:hover:text-cyan-500 py-3">
                        Vitesse de Traitement
                    </Link>
                </li>
                <li>
                    <Link href="/fonctions-executives" className="dark:hover:text-cyan-500 py-3">
                        Fonctions Ecécutives
                    </Link>
                </li>
                <li>
                    <Link href="/language-fluence" className="dark:hover:text-cyan-500 py-3">
                        Language et Fluence Verbale
                    </Link>
                </li>
            </ul>
        </nav>
    );
};