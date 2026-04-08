import { FonctionExecutives } from "@/lib/tasks-content";
import Link from "next/link";

export default function FonctionsExecutivesPage() {
    return (
        <div>
            <h1 className="text-2xl font-bold">Fonctions Executives</h1>

            <p className="my-10">Planifier, s'adapter, inhiber les mauvaises réponses</p>

            <ul className="list-disc">
                <li className="m-4">
                    <Link href="/fonctions-executives/1">{FonctionExecutives.trailMakingB.title} {FonctionExecutives.trailMakingB.description}</Link>
                </li>
                <li className="m-4">
                    <Link href="/fonctions-executives/2">{FonctionExecutives.tourHanoi.title} {FonctionExecutives.tourHanoi.description}</Link>
                </li>
                <li className="m-4">
                    <Link href="/fonctions-executives/3">{FonctionExecutives.triDeCartes.title} {FonctionExecutives.triDeCartes.description}</Link>
                </li>
            </ul>

        </div>
    )
};