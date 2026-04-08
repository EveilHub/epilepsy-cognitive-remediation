import { AttentSouContent } from "@/lib/tasks-content";

export default async function AttentionSoutenueExo({ params }: { params: Promise<{ id: string }> }) {
    
    const { id } = await params;
    
    const tasks = {
        "1": {
            title: AttentSouContent.cpt.title,
            description: AttentSouContent.cpt.description,
            component: <Truc/>
        },
        "2": {
            title: AttentSouContent.barrageSymboles.title,
            description: AttentSouContent.barrageSymboles.description,
            component: <Truc/>
        },
        "3": {
            title: AttentSouContent.comptageCibles.title,
            description: AttentSouContent.comptageCibles.description,
            component: <Truc/>
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