import GrillesDePoints from "@/app/ui/memo-travailExo/GrillesDePoints";
import Nback from "@/app/ui/memo-travailExo/Nback";
import SequencesChiffres from "@/app/ui/memo-travailExo/SequencesChiffres";
import { MemoTravailContent } from "@/lib/tasks-content";

export default async function MemoTravailExo({ params }: { params: Promise<{ id: string }> }) {
    
    const { id } = await params;

    const tasks = {
        "1": {
            title: MemoTravailContent.sequChiff.title,
            description: MemoTravailContent.sequChiff.description,
            component: <SequencesChiffres />
        },
        "2": {
            title: MemoTravailContent.nback.title,
            description: MemoTravailContent.nback.description,
            component: <Nback />
        },
        "3": {
            title: MemoTravailContent.grillePoint.title,
            description: MemoTravailContent.grillePoint.description,
            component: <GrillesDePoints />
        }
    } as const;
    
    const task = tasks[id as keyof typeof tasks];
    
    if (!task) {
        return <div>Tâche non trouvée</div>;
    };;

    return (
        <div>
            <h1 className="text-2xl font-bold">{task.title}</h1>
            <p className="px-4 pt-4 pb-6">{task.description}</p>
            <div className="h-170 border">{task.component}</div>
        </div>
    );
}