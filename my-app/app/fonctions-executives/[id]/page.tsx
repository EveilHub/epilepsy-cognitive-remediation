export default async function Executives({ params }: { params: Promise<{ id: string }> }) {
    
    const { id } = await params;

    return (
        <div>
            <h1 className="text-cyan-500">Jeux {id}</h1>

            {id === "1" && 
                <h2>ok 1</h2>
            }

            {id === "2" && 
                <h2>ok 2</h2>
            }
            
            {id === "3" && 
                <h2>ok 3</h2>
            }

        </div>
    )
}