import MatchingRapide from "@/app/ui/vitesse-traitementExo/MatchingRapide";
import TempsReaction from "@/app/ui/vitesse-traitementExo/TempsReaction";
import TrailMakingA from "@/app/ui/vitesse-traitementExo/TrailMakingA";
import { VitesseTraiementContent } from "@/lib/tasks-content";

export default async function VitesseTraitementExo({ params }: { params: Promise<{ id: string }> }) {
    
    const { id } = await params;
    
    const tasks = {
        "1": {
            title: VitesseTraiementContent.tempsReact.title,
            description: VitesseTraiementContent.tempsReact.description,
            component: <TempsReaction />
        },
        "2": {
            title: VitesseTraiementContent.matchingFast.title,
            description: VitesseTraiementContent.matchingFast.description,
            component: <MatchingRapide />
        },
        "3": {
            title: VitesseTraiementContent.trailMakingA.title,
            description: VitesseTraiementContent.trailMakingA.description,
            component: <TrailMakingA />    
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