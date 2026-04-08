import DoubleTask from "@/app/ui/attention-selectiveExo/DoubleTask";
import StroopAdapted from "@/app/ui/attention-selectiveExo/StroopAdapted";
import { AttentionSelectiveContent } from "@/lib/tasks-content";

export default async function AttentionSelectiveExo({ params }: { params: Promise<{ id: string }> }) {
    
    const { id } = await params;
    
    const tasks = {
        "1": {
            title: AttentionSelectiveContent.stroopAdapted.title,
            description: AttentionSelectiveContent.stroopAdapted.description,
            component: <StroopAdapted />
        },
        "2": {
            title: AttentionSelectiveContent.doubleTask.title,
            description: AttentionSelectiveContent.doubleTask.description,
            component: <DoubleTask />
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