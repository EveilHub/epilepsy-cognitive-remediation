import Link from "next/link";

export default function AttentionSelective() {
    return (
        <div className="text-slate-100 bg-zinc-800 p-4">
            <h1 className="text-2xl font-bold">Attention Sélective et Divisée</h1>

            <p className="my-10">Filtrer les distractions / gérer 2 tâches simultanément</p>

            <ul className="list-disc">
                <li className="m-4">
                    <Link href="/attention-selective/1">Stroop adapté: nommer la couleur d'un mot (mot = couleur)</Link>
                </li>
                <li className="m-4">
                    <Link href="/attention-selective/2">Double tâche légère: mémoriser une liste et classer des images</Link>
                </li>
            </ul>

        </div>
    )
}
