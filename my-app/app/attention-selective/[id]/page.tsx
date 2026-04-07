export default async function AttentionSelectiveExo({ params }: { params: Promise<{ id: string }> }) {
    
    const { id } = await params;
    
    const tasks = {
        "1": {
            title: "Stroop adapté",
            description: "Nommer la couleur d'un mot (mot ≠ couleur)"
        },
        "2": {
            title: "Double tâche légère",
            description: "Mémoriser une liste et classer des images"
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
            <div></div>
        </div>
    );
}