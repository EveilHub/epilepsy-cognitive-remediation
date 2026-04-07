"use client";

import { ChangeEvent, useState } from "react";

export default function Home() {

  const [crisesState, setCrisesState] = useState<string | undefined>(undefined);
  const [tempsCrise, setTempsCrise] = useState<string>("");
  const [perteConnaissance, setPerteConnaissance] = useState<string | undefined>(undefined);
  const [maettt, setMaettt] = useState<string | undefined>(undefined);
  const [nameMae, setNameMae] = useState<string>("");

  const handleCrises = (e: ChangeEvent<HTMLInputElement>): void => {
    setCrisesState(e.target.value);
  };

  const handlePerteCo = (e: ChangeEvent<HTMLInputElement>): void => {
    setPerteConnaissance(e.target.value);
  };

  const handleMae = (e: ChangeEvent<HTMLInputElement>): void => {
    setMaettt(e.target.value);
  };

  console.log(crisesState);
  console.log(perteConnaissance);
  console.log(maettt);

  return (
    <div>

      <div className="mb-8">
        <h1 className="text-2xl font-bold">Remédiation cognitive pour l'épilepsie</h1>
      </div>


      <div className="p-4 border border-emerald-100 rounded-lg">
        <p className="mb-4">Combien de crises avez-vous en moyenne par mois ?</p>

        <div className="w-150 flex flex-row items-center justify-around py-4 bg-emerald-50 border border-emerald-100 rounded-lg">
          <label htmlFor="crise0">
            <input 
              type="radio"
              id="crise0" 
              name="crise0"
              value={`aucune crise`}
              checked={crisesState === `aucune crise`}
              onChange={handleCrises}
              className="mr-2"
            />
            aucune
          </label>

          <label htmlFor="crise1">
            <input 
              type="radio"
              id="crise1" 
              name="crise1"
              value="1-2 crise"
              checked={crisesState === "1-2 crise"}
              onChange={handleCrises}
              className="mr-2"
            />
            1-2
          </label>
          <label htmlFor="crise2">
            <input 
              type="radio"
              id="crise2" 
              name="crise2"
              value="2-3 crises"
              checked={crisesState === "2-3 crises"}
              onChange={handleCrises}
              className="mr-2"
            />
            2-3
          </label>

          <label htmlFor="crise3">
            <input 
              type="radio"
              id="crise3" 
              name="crise3"
              value="3-4 crises"
              checked={crisesState === "3-4 crises"}
              onChange={handleCrises}
              className="mr-2"
            />
            3-4
          </label>
          <label htmlFor="crise4">
            <input 
              type="radio"
              id="crise4" 
              name="crise4"
              value="+ de 4 crises"
              checked={crisesState === "+ de 4 crises"}
              onChange={handleCrises}
              className="mr-2"
            />
            + de 4 crises
          </label>
        </div>

        <div>
          <p className="mt-8 mb-4">Avez-vous des crises avec ou sans pertes de connaissances ?</p>

          <div className="w-150 flex flex-row items-center justify-around py-4 bg-emerald-50 border border-emerald-100 rounded-lg">
            <label htmlFor="avecPerteCo">
              <input 
                type="radio"
                id="avecPerteCo"
                name="avecPerteCo"
                value={`avec perte de connaissance`}
                checked={perteConnaissance === `avec perte de connaissance`}
                onChange={handlePerteCo}
                className="mr-2"
              />
              Avec perte de connaissance
            </label>
            <label htmlFor="sansPerteCo">
              <input 
                type="radio"
                id="sansPerteCo"
                name="sansPerteCo"
                value={`sans perte de connaissance`}
                checked={perteConnaissance === `sans perte de connaissance`}
                onChange={handlePerteCo}
                className="mr-2"
              />
              Sans perte de connaissance
            </label>
          </div>

        </div>


        <div>
          <p className="mt-8 mb-4">Combien de temps les crises durent-elles ?</p>

          <div className="flex flex-row items-center justify-start">
            <input 
              type="text" 
              id="tempsDeCrise" 
              name="tempsDeCrise" 
              value={tempsCrise} 
              onChange={(e) => setTempsCrise(e.target.value)} 
              className="bg-emerald-50 border border-emerald-100 rounded px-2 py-1" />
            <p className="ml-2">minutes</p>
          </div>
        </div>




        <div>
          <p className="mt-8 mb-4">Prenez-vous un MAE (Médicament Anti Epileptique) ?</p>

          <div className="w-50 flex flex-row items-center justify-around py-4 bg-emerald-50 border border-emerald-100 rounded-lg">
            <label htmlFor="oui">
              <input 
                type="radio"
                id="oui"
                name="oui"
                value={`ttt MAE oui`}
                checked={maettt === `ttt MAE oui`}
                onChange={handleMae}
                className="mr-2"
              />
              Oui
            </label>
            <label htmlFor="non">
              <input 
                type="radio"
                id="non"
                name="non"
                value={`ttt MAE non`}
                checked={maettt === `ttt MAE non`}
                onChange={handleMae}
                className="mr-2"
              />
              Non
            </label>
          </div>

        </div>



        <div>
          <p className="mt-8 mb-4">Comment s'appelle le traitement (MAE) que vous prenez ?</p>
          <input 
            type="text" 
            id="tempsDeCrise" 
            name="tempsDeCrise" 
            value={nameMae} 
            onChange={(e) => setNameMae(e.target.value)} 
            className="bg-emerald-50 border border-emerald-100 rounded px-2 py-1" 
          />
        </div>



      </div>

      <div className="flex justify-center">
        <button type="submit" className="text-slate-100 bg-emerald-500 hover:bg-emerald-600 active:bg-emerald-400 dark:bg-purple-500 dark:hover:bg-purple-600 dark:active:bg-purple-400 mt-4 px-4 py-2 rounded-lg">
          Commencer l'entraînement
        </button>
      </div>

    </div>
  );
};