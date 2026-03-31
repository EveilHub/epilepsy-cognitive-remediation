import Link from "next/link";

export default function MemoEpisodique() {
    return (
        <div className="text-slate-100 bg-zinc-800 p-4">
            <h1 className="text-2xl font-bold">Memoire Episodique</h1>

            <p className="my-10">Se souvenir d'événements, d'histoires, de contextes</p>

            <ul className="list-disc">
                <li className="m-4">
                    <Link href="/memo-episodic/1">Paires mot-image: associer un mot à une image, retrouver la pair</Link>
                </li>
                <li className="m-4">
                    <Link href="/memo-episodic/2">Histoire courte: lire un texte, répondre à des questions différées</Link>
                </li>
                <li className="m-4">
                    <Link href="/memo-episodic/3">Lieux et objets: mémoriser où sont placer les objets dans une pièce</Link>
                </li>
            </ul>

        </div>
    )
}