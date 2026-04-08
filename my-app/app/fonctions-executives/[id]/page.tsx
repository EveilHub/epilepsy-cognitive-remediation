import TourHanoiSimple from "@/app/ui/fonctions-executivesExo/TourHanoiSimple";
import TrailMakingB from "@/app/ui/fonctions-executivesExo/TrailMakingB";
import TriDeCartes from "@/app/ui/fonctions-executivesExo/TriDeCartes";
import { FonctionExecutives } from "@/lib/tasks-content";

export default async function FonctionsExecutivesExo({ params }: { params: Promise<{ id: string }> }) {
    
    const { id } = await params;
    
    const tasks = {
        "1": {
            title: FonctionExecutives.trailMakingB.title,
            description: FonctionExecutives.trailMakingB.description,
            component: <TrailMakingB />
        },
        "2": {
            title: FonctionExecutives.tourHanoi.title,
            description: FonctionExecutives.tourHanoi.description,
            component: <TourHanoiSimple />
        },
        "3": {
            title: FonctionExecutives.triDeCartes.title,
            description: FonctionExecutives.triDeCartes.description,
            component: <TriDeCartes />
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