import Link from "next/link";

export default function Menu() {
    return (
        <nav className="bg-green-500 px-4 py-6">
            <ul className="flex flex-row items-center justify-between text-base font-bold">
                <li>
                    <Link href="/">Home</Link>
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