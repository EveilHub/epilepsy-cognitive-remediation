import GrillesDePoints from "@/app/ui/memo-travailExo/GrillesDePoints";
import Nback from "@/app/ui/memo-travailExo/Nback";
import SequencesChiffres from "@/app/ui/memo-travailExo/SequencesChiffres";

export default async function MemoTravailExo({ params }: { params: Promise<{ id: string }> }) {
    
    const { id } = await params;
    
    const tasks = {
        "1": {
            title: "Séquences de chiffres",
            description: "Mémoriser une suite, la répéter à l'envers",
            component: <SequencesChiffres />
        },
        "2": {
            title: "N-back",
            description: "Indiquer si le stimulus actuel correspond à celui d'il y a N étapes",
            component: <Nback />
        },
        "3": {
            title: "Grilles de points",
            description: "Mémoriser des positions, les reproduire",
            component: <GrillesDePoints />
        }
    } as const;
    
    const task = tasks[id as keyof typeof tasks];
    
    if (!task) {
        return <div>Tâche non trouvée</div>;
    };;

    return (
        <div>
            <h1 className="text-3xl font-bold">{task.title}</h1>
            <p className="px-4 pt-4 pb-6">{task.description}</p>
            <div className="h-170 border">{task.component}</div>
        </div>
    );
}