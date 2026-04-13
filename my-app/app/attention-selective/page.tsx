import { AttentionSelectiveContent } from "@/lib/tasks-content";
import Link from "next/link";

export default function AttentionSelectivePage() {
    return (
        <div>
            <h1 className="text-2xl font-bold">Attention Sélective et Divisée</h1>

            <p className="my-10">Filtrer les distractions / gérer 2 tâches simultanément</p>

            <nav>
                <ul className="list-disc">
                    <li className="hover:text-teal-600 dark:hover:text-cyan-500 m-4">
                        <Link href="/attention-selective/1">
                            {AttentionSelectiveContent.stroopAdapted.title} {AttentionSelectiveContent.stroopAdapted.description}
                        </Link>
                    </li>
                    <li className="hover:text-teal-600 dark:hover:text-cyan-500 m-4">
                        <Link href="/attention-selective/2">
                            {AttentionSelectiveContent.doubleTask.title} {AttentionSelectiveContent.doubleTask.description}
                        </Link>
                    </li>
                </ul>
            </nav>

        </div>
    );
};