import Link from "next/link";
import { MemoTravailContent } from "@/lib/tasks-content";

export default function MemoTravailPage() {
    return (
        <div>
            <h1 className="text-2xl font-bold">Memoire au Travail</h1>

            <div className="text-lg pl-4">
                <p className="my-8">Garder et manipuler des informations en temps réel</p>

                <nav>
                    <ul className="list-disc">
                        <li className="hover:text-emerald-600 m-4">
                            <Link href="/memo-travail/1">
                                <span className="font-bold">{MemoTravailContent.sequChiff.title}</span>
                                &nbsp;{MemoTravailContent.sequChiff.description}
                            </Link>
                        </li>
                        <li className="hover:text-emerald-600 m-4">
                            <Link href="/memo-travail/2">
                                <span className="font-bold">{MemoTravailContent.nback.title}</span>
                                &nbsp;{MemoTravailContent.nback.description}
                            </Link>
                        </li>
                        <li className="hover:text-emerald-600 m-4">
                            <Link href="/memo-travail/3">
                                <span className="font-bold">{MemoTravailContent.grillePoint.title}</span>
                                &nbsp;{MemoTravailContent.grillePoint.description}
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>

        </div>
    );
};