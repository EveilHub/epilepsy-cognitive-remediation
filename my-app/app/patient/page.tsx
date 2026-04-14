"use client";

import { FormEvent, useState } from "react";

export default function PatientPage() {

    const [name, setName] = useState<string>("");
    const [firstName, setFirstName] = useState<string>("");

    const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        const target = e.target as HTMLFormElement;
        const formData = new FormData(target);
        
        const nameSubmit = formData.get("name") as string | null;
        const firstNameSubmit = formData.get("firstname") as string | null;

        console.log({nameSubmit, firstNameSubmit});
    };
    
    return (
        <div>
            <h1 className="text-2xl font-bold">Patient</h1>

            <div className="h-170 flex items-center justify-center">

                <form onSubmit={(e) => handleSubmit(e)} className="m-auto text-base bg-teal-50 dark:bg-cyan-50 shadow-lg shadow-teal-900 px-10 rounded-xl">
                    
                    <div className="text-center mt-6">
                        <h3 className="text-lg font-bold">Nouveau Patient</h3>
                    </div>

                    <div className="flex flex-col mt-4">
                        <label htmlFor="name">
                            Nom
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="bg-white border border-teal-400 dark:border-cyan-400 px-2 py-1 rounded" 
                        />
                    </div>

                    <div className="flex flex-col mt-4">
                        <label htmlFor="firstname">
                            Prénom
                        </label>
                        <input
                            type="text"
                            id="firstname"
                            name="firstname"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            className="bg-white border border-teal-400 dark:border-cyan-400 px-2 py-1 rounded" 
                        />
                    </div>

                    <div className="flex justify-center my-2">
                        <button type="submit" className="text-sm text-white bg-teal-400 shadow-md shadow-teal-900 hover:bg-teal-500 active:bg-teal-300 
                            dark:bg-cyan-500 dark:hover:bg-cyan-600 dark:active:bg-cyan-400
                            my-4 px-6 py-1 rounded"
                        >
                            Enregistrer
                        </button>
                    </div>

                </form>
            </div>

        </div>
    );
};