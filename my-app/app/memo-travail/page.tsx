import Link from "next/link";

export default function MemoTravail() {
    return (
        <div className="text-slate-100 bg-zinc-800 p-4">
            <h1 className="text-2xl font-bold">Memoire au Travail</h1>

            <p className="my-10">Garder et manipuler des informations en temps réel</p>

            <ul className="list-disc">
                <li className="m-4">
                    <Link href="/memo-travail/1">Séquences de chiffres: mémoriser une suite, la répéter à l'envers</Link>
                </li>
                <li className="m-4">
                    <Link href="/memo-travail/2">N-back: Indiquer si le stimulus actuel correspond à celui d'il y a N étapes</Link>
                </li>
                <li className="m-4">
                    <Link href="/memo-travail/3">Grilles de points: mémoriser des positions, les reproduire</Link>
                </li>
            </ul>

        </div>
    )
}