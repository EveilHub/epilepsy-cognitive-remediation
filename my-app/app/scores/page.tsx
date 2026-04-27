"use client";

import { JSX } from "react";

type ScoresType = {
    id: string;
    exercice: number;
    domaine: string;
    score: number;
    niveauDifficulte: string;
    date: string,
    patientNom: string;
    patientPrenom: string;
    length?: number;
};

export default function ScoresPage(): JSX.Element {

    const patientName: string = "Douglas Meyer";
    
    const scores: ScoresType[] = [{
        id: "1",
        exercice: 10,
        domaine: "psycho",
        score: 20,
        niveauDifficulte: "Difficile",
        date: "24/02/2026",
        patientNom: "Meyer",
        patientPrenom: "Douglas",
    },
    {
        id: "2",
        exercice: 5,
        domaine: "vitesse",
        score: 10,
        niveauDifficulte: "Moyen",
        date: "24/02/2026",
        patientNom: "McFly",
        patientPrenom: "Jerry",
    }];

    const deleteScore = (): void => {
        const idScore: number = scores.findIndex((x) => x.id);
        console.log(idScore);
    };

    return (
        <div>
            <h1 className="text-2xl font-bold">Scores</h1>

            {/* <p>Patient: {patientName}</p> */}

            {scores.length === 0 ? (
                <div>
                    <p>There is nothing to display !</p>
                </div>
            ) : (
                <div className="overflow-hidden border border-slate-200 dark:border-slate-700 rounded-xl">
                    <table className="w-full text-sm">
                        <thead className="bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-semibold">
                            <tr>
                                <th className="text-left px-4 py-3">Patient</th>
                                <th className="text-left px-4 py-3">Exercice</th>
                                <th className="text-left px-4 py-3">Domaine</th>
                                <th className="text-left px-4 py-3">Score</th>
                                <th className="text-left px-4 py-3">Difficulté</th>
                                <th className="text-left px-4 py-3">Date</th>
                                <th className="px-4 py-3" />
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 dark:divide-slate-700">
                            {scores.map((row: ScoresType) => (
                                <tr
                                    key={row.id}
                                    className="bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
                                >
                                    <td className="px-4 py-3 font-medium text-slate-800 dark:text-white">
                                        {row.patientPrenom} {row.patientNom}
                                    </td>
                                    <td className="px-4 py-3 text-slate-700 dark:text-slate-300">
                                        {row.exercice}
                                    </td>
                                    <td className="px-4 py-3 text-slate-500 dark:text-slate-400">
                                        {row.domaine}
                                    </td>
                                    <td className="px-4 py-3 font-semibold text-slate-800 dark:text-white">
                                        {row.score}
                                    </td>
                                    <td className="px-4 py-3">
                                        <span>
                                            {row.niveauDifficulte}
                                        </span>
                                    </td>
                                    <td className="px-4 py-3 text-slate-500 dark:text-slate-400">
                                        {new Date(row.date).toLocaleDateString("fr-FR", {
                                            day: "2-digit",
                                            month: "2-digit",
                                            year: "numeric",
                                            hour: "2-digit",
                                            minute: "2-digit",
                                        })}
                                    </td>
                                    <td className="px-4 py-3 text-right">
                                        <form action={deleteScore}>
                                            <input type="hidden" name="id" value={row.id} />
                                            <button type="submit" className="text-xs text-red-500 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300">
                                                Supprimer
                                            </button>
                                        </form>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};