import Link from "next/link";

export default function MemoEpisodique() {
    return (
        <div className="">
            <h1 className="text-2xl font-bold">Memoire Episodique</h1>

            <div className="text-lg pl-4">
                <p className="my-8">Se souvenir d'événements, d'histoires, de contextes</p>

                <nav>
                    <ul className="list-disc">
                        <li className="hover:text-emerald-600 m-4">
                            <Link href="/memo-episodic/1">
                                <span className="font-bold">Paires mot-image:</span>
                                &nbsp;Associer un mot à une image, retrouver la pair
                            </Link>
                        </li>
                        <li className="hover:text-emerald-600 m-4">
                            <Link href="/memo-episodic/2">
                                <span className="font-bold">Histoire courte:</span>
                                &nbsp;Lire un texte, répondre à des questions différées
                            </Link>
                        </li>
                        <li className="hover:text-emerald-600 m-4">
                            <Link href="/memo-episodic/3">
                                <span className="font-bold">Lieux et objets:</span>
                                &nbsp;Mémoriser où sont placer les objets dans une pièce
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>

        </div>
    )
}