import Link from "next/link";

export default function VitesseTraitement() {
    return (
        <div className="text-slate-100 bg-zinc-800 p-4">
            <h1 className="text-2xl font-bold">Vitesse Traitement</h1>

            <p className="my-10">Répondre rapidement et précisément</p>

            <ul className="list-disc">
                <li className="m-4">
                    <Link href="/vitesse-traitement/1">Temps de réaction simple: appuyer dès qu'un symbole apparaît</Link>
                </li>
                <li className="m-4">
                    <Link href="/vitesse-traitement/2">Matching rapide: Indiquer si 2 images sont identiques</Link>
                </li>
                <li className="m-4">
                    <Link href="/vitesse-traitement/3">Trail Making A: relier des chiffres dans l'ordre le plus vite possible</Link>
                </li>
            </ul>

        </div>
    )
}