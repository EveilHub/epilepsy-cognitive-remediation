export default async function Selective({ params }: { params: Promise<{ id: string }> }) {
    
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
    }

    return (
        <div>
            <h1 className="text-cyan-500">{task.title}</h1>
            <p>{task.description}</p>
        </div>
    );
}