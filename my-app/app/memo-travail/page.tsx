import Link from "next/link";

export default function MemoTravail() {
    return (
        <div className="">
            <h1 className="text-2xl font-bold">Memoire au Travail</h1>

            <div className="text-lg pl-4">
                <p className="my-8">Garder et manipuler des informations en temps réel</p>

                <nav>
                    <ul className="list-disc">
                        <li className="hover:text-emerald-600 m-4">
                            <Link href="/memo-travail/1">
                                <span className="font-bold">Séquences de chiffres:</span>
                                &nbsp;Mémoriser une suite, la répéter à l'envers
                            </Link>
                        </li>
                        <li className="hover:text-emerald-600 m-4">
                            <Link href="/memo-travail/2">
                                <span className="font-bold">N-back:</span>
                                &nbsp;Indiquer si le stimulus actuel correspond à celui d'il y a N étapes
                            </Link>
                        </li>
                        <li className="hover:text-emerald-600 m-4">
                            <Link href="/memo-travail/3">
                                <span className="font-bold">Grilles de points:</span>
                                &nbsp;Mémoriser des positions, les reproduire
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>

        </div>
    )
}