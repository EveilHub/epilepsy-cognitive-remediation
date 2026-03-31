import Link from "next/link";

export default function AttentionSoutenue() {
    return (
        <div className="text-slate-100 bg-zinc-800 p-4">
            <h1 className="text-2xl font-bold">Attention Soutenue</h1>

            <p className="my-10">Maintenir sa concentration sur la durée</p>

            <ul className="list-disc">
                <li className="m-4">
                    <Link href="">CPT (continuous Performance Task): appuyer quand une cible apparaît, ignorer les distractions</Link>
                </li>
                <li className="m-4">
                    <Link href="">Barrage de Symboles: Trouver un symbole cible parmi d'autres</Link>
                </li>
                <li className="m-4">
                    <Link href="">Comptage de Cibles: Compter combien de fois un élément apparaît</Link>
                </li>
            </ul>
        </div>
    )
}