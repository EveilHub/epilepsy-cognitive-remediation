import HistoireCourte from "@/app/ui/memo-episodicExo/HistoireCourte";
import LieuxEtObjets from "@/app/ui/memo-episodicExo/LieuxEtObjets";
import PairesMotImage from "@/app/ui/memo-episodicExo/PairesMotImage";

export default async function MemoEpisodiqueExo({ params }: { params: Promise<{ id: string }> }) {
    
    const { id } = await params;
    
    const tasks = {
        "1": {
            title: "Paires mot-image",
            description: "Associer un mot à une image, retrouver la pair",
            component: <PairesMotImage />
        },
        "2": {
            title: "Histoire courte",
            description: "Lire un texte, répondre à des questions différées",
            component: <HistoireCourte />
        },
        "3": {
            title: "Lieux et objets",
            description: "Mémoriser où sont placer les objets dans une pièce",
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
}