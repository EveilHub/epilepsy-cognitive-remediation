import CompletionPhrase from "@/app/ui/language-fluenceExo/CompletionPhrase";
import FluenceCategorielle from "@/app/ui/language-fluenceExo/FluenceCategorielle";
import FluenceLitterale from "@/app/ui/language-fluenceExo/FluenceLitterale";
import { LanguageFluence } from "@/lib/tasks-content";

export default async function LanguageFluenceExo({ params }: { params: Promise<{ id: string }> }) {
    
    const { id } = await params;
    
    const tasks = {
        "1": {
            title: LanguageFluence.fluenceCategorielle.title,
            description: LanguageFluence.fluenceCategorielle.description,
            component: <FluenceCategorielle />
        },
        "2": {
            title: LanguageFluence.fluenceLittérale.title,
            description: LanguageFluence.fluenceLittérale.description,
            component: <FluenceLitterale />
        },
        "3": {
            title: LanguageFluence.completionDePhrases.title,
            description: LanguageFluence.completionDePhrases.description,
            component: <CompletionPhrase />
        }
    } as const;
    
    const task = tasks[id as keyof typeof tasks];
    
    if (!task) {
        return <div>Tâche non trouvée</div>;
    };

    return (
        <div>
            <h1 className="text-2xl font-bold">{task.title}</h1>
            <p className="px-4 pt-4 pb-6">{task.description}</p>
            <div className="h-170 border">{task.component}</div>
        </div>
    );
};