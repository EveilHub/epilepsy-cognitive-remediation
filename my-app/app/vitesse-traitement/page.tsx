import { VitesseTraiementContent } from "@/lib/tasks-content";
import Link from "next/link";

export default function VitesseTraitementPage() {
    return (
        <div>
            <h1 className="text-2xl font-bold">Vitesse Traitement</h1>

            <p className="my-10">Répondre rapidement et précisément</p>

            <ul className="list-disc">
                <li className="m-4">
                    <Link href="/vitesse-traitement/1">
                        {VitesseTraiementContent.tempsReact.title} {VitesseTraiementContent.tempsReact.description}
                    </Link>
                </li>
                <li className="m-4">
                    <Link href="/vitesse-traitement/2">
                        {VitesseTraiementContent.matchingFast.title} {VitesseTraiementContent.matchingFast.description}
                    </Link>
                </li>
                <li className="m-4">
                    <Link href="/vitesse-traitement/3">
                        {VitesseTraiementContent.trailMakingA.title} {VitesseTraiementContent.trailMakingA.description}
                    </Link>
                </li>
            </ul>

        </div>
    )
};