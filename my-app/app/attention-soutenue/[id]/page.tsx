export default async function AttentionSoutenueExo({ params }: { params: Promise<{ id: string }> }) {
    
    const { id } = await params;
    
    const tasks = {
        "1": {
            title: "CPT (continuous Performance Task)",
            description: "Appuyer quand une cible apparaît, ignorer les distractions"
        },
        "2": {
            title: "Barrage de Symboles",
            description: "Trouver un symbole cible parmi d'autres"
        },
        "3": {
            title: "Comptage de Cibles",
            description: "Compter combien de fois un élément apparaît"
        }
    } as const;
    
    const task = tasks[id as keyof typeof tasks];
    
    if (!task) {
        return <div>Tâche non trouvée</div>;
    };

    return (
        <div>
            <h1 className="text-2xl font-bold">{task.title}</h1>
            <p className="p-4">{task.description}</p>
        </div>
    );
}