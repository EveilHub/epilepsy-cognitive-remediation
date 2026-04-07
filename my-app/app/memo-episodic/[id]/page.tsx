export default async function MemoEpisodiqueExo({ params }: { params: Promise<{ id: string }> }) {
    
    const { id } = await params;
    
    const tasks = {
        "1": {
            title: "",
            description: ""
        },
        "2": {
            title: "",
            description: ""
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
            <div className="h-170 border"></div>
        </div>
    );
}