"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

type dataSubmitProps = {
    nameSubmit: string | null;
    firstNameSubmit: string | null;
    birthDaySubmit: string | null;
};

export default function PatientPage() {

    const router = useRouter();

    const [name, setName] = useState<string>("");
    const [firstName, setFirstName] = useState<string>("");
    const [birthDay, setBirthDay] = useState<string>("");

    const handleCancel = (): void => {
        router.push("/");
    };

    const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>): void => {
        e.preventDefault();
        const target = e.target as HTMLFormElement;
        const formData = new FormData(target);
        
        const nameSubmit = formData.get("name") as string | null;
        const firstNameSubmit = formData.get("firstname") as string | null;
        const birthDaySubmit = formData.get("birth_date") as string | null;

        const dataSubmit: dataSubmitProps = { nameSubmit, firstNameSubmit, birthDaySubmit };

        // api
        const SubmitPatient = async (dataSubmit: dataSubmitProps) => {
            const data = await fetch("/api/patient-submit", {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({dataSubmit})
            });
        };
        SubmitPatient(dataSubmit);
    };
    
    return (
        <div>
            <h1 className="text-2xl font-bold">Patient</h1>

            <div className="h-170 flex justify-center m-auto">

                <div className="w-auto h-85 flex flex-col items-center justify-center m-auto">

                    <div className="my-2 flex justify-center">
                        <button 
                            type="button" 
                            onClick={handleCancel}
                            className="text-sm text-white bg-teal-500 shadow-md shadow-[0_10px_35px_rgba(0,0,0,1)] transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95 active:font-sm hover:bg-teal-400 hover:shadow-none 
                                active:shadow-[inset_0_4px_10px_rgba(0,0,0,0.25),0_2px_4px_rgba(0,0,0,0.06)] active:bg-teal-300 dark:bg-cyan-600 dark:shadow-md shadow-[0_10px_35px_rgba(0,0,0,1)] dark:hover:bg-cyan-500 dark:hover:shadow-none dark:active:bg-cyan-400 
                                dark:active:shadow-[inset_0_4px_10px_rgba(0,0,0,0.25),0_2px_4px_rgba(0,0,0,0.06)] my-4 px-6 py-1 rounded transition-colors"
                        >
                            Annuler
                        </button>
                    </div>

                    <form onSubmit={(e) => handleSubmit(e)} className="w-full m-auto text-base px-10">
                        
                        <div className="text-center">
                            <h3 className="text-lg font-bold">Nouveau Patient</h3>
                        </div>

                        <div className="w-auto m-auto flex flex-row items-start justify-center">

                            <div className="mr-2">

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
                                        className="w-50 mt-1 bg-white border border-teal-400 dark:border-cyan-400 px-2 py-1 rounded" 
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
                                        className="w-50 mt-1 bg-white border border-teal-400 dark:border-cyan-400 px-2 py-1 rounded" 
                                    />
                                </div>

                            </div>

                            <div className="flex flex-col mt-4 ml-2">
                                <label htmlFor="birth_date">
                                    Date de naissance
                                </label>
                                <input
                                    type="date"
                                    id="birth_date"
                                    name="birth_date"
                                    value={birthDay}
                                    onChange={(e) => setBirthDay(e.target.value)}
                                    className="w-50 mt-1 bg-white border border-teal-400 dark:border-cyan-400 px-2 py-1 rounded" 
                                />
                            </div>

                        </div>

                        <div className="flex justify-center my-2">
                            <button type="submit" className="text-sm text-white bg-teal-500 shadow-md shadow-[0_10px_35px_rgba(0,0,0,1)] transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95 active:font-sm hover:bg-teal-400 hover:shadow-none 
                                active:shadow-[inset_0_4px_10px_rgba(0,0,0,0.25),0_2px_4px_rgba(0,0,0,0.06)] active:bg-teal-300 dark:bg-cyan-600 dark:shadow-md shadow-[0_10px_35px_rgba(0,0,0,1)] dark:hover:bg-cyan-500 dark:hover:shadow-none dark:active:bg-cyan-400 
                                dark:active:shadow-[inset_0_4px_10px_rgba(0,0,0,0.25),0_2px_4px_rgba(0,0,0,0.06)] my-4 px-6 py-1 rounded transition-colors"
                            >
                                Enregistrer
                            </button>
                        </div>

                    </form>
                </div>
            </div>

        </div>
    );
};