import Link from "next/link";

export default function LanguageFluence() {
    return (
        <div className="text-slate-100 bg-zinc-800 p-4">
            <h1 className="text-2xl font-bold">Language et Fluence Verbale</h1>

            <p className="my-10">Accès lexical, production de mots</p>

            <ul className="list-disc">
                <li className="m-4">
                    <Link href="">Fluence catégorielle: nommer le plus d'animaux possible en 1 minute</Link>
                </li>
                <li className="m-4">
                    <Link href="">Fluence littérale: nommer des mots commençant pas "P"</Link>
                </li>
                <li className="m-4">
                    <Link href="">Complétion de phrases: trouver le mot manquant</Link>
                </li>
            </ul>

        </div>
    )
}