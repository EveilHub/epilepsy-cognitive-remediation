import { AttentSouContent } from "@/lib/tasks-content";
import Link from "next/link";

export default function AttentionSoutenuePage() {
    return (
        <div>
            <h1 className="text-2xl font-bold">Attention Soutenue</h1>

            <p className="my-10">Maintenir sa concentration sur la durée</p>

            <nav>
                <ul className="list-disc">
                    <li className="hover:text-teal-600 dark:hover:text-cyan-500 m-4">
                        <Link href="/attention-soutenue/1">
                            {AttentSouContent.cpt.title} {AttentSouContent.cpt.description}
                        </Link>
                    </li>
                    <li className="hover:text-teal-600 dark:hover:text-cyan-500 m-4">
                        <Link href="/attention-soutenue/2">
                            {AttentSouContent.barrageSymboles.title} {AttentSouContent.barrageSymboles.description}
                        </Link>
                    </li>
                    <li className="hover:text-teal-600 dark:hover:text-cyan-500 m-4">
                        <Link href="/attention-soutenue/3">
                            {AttentSouContent.comptageCibles.title} {AttentSouContent.comptageCibles.description}
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};