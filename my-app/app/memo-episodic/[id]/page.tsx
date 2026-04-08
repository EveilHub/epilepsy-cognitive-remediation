import HistoireCourte from "@/app/ui/memo-episodicExo/HistoireCourte";
import LieuxEtObjets from "@/app/ui/memo-episodicExo/LieuxEtObjets";
import PairesMotImage from "@/app/ui/memo-episodicExo/PairesMotImage";
import { MemoEpisodic } from "@/lib/tasks-content";

export default async function MemoEpisodiqueExo({ params }: { params: Promise<{ id: string }> }) {
    
    const { id } = await params;
    
    const tasks = {
        "1": {
            title: MemoEpisodic.pairesMotsImg.title,
            description: MemoEpisodic.pairesMotsImg.description,
            component: <PairesMotImage />
        },
        "2": {
            title: MemoEpisodic.storyShort.title,
            description: MemoEpisodic.storyShort.description,
            component: <HistoireCourte />
        },
        "3": {
            title: MemoEpisodic.lieuxObjets.title,
            description: MemoEpisodic.lieuxObjets.description,
            component: <LieuxEtObjets />
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
};