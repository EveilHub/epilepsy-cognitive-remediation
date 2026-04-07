"use client";

import { ChangeEvent, useState } from "react";

export default function Home() {

  const [crisesState, setCrisesState] = useState<string | undefined>(undefined);
  const [perteConnaissance, setPerteConnaissance] = useState<string | undefined>(undefined);
  const [maettt, setMaettt] = useState<string | undefined>(undefined);

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
    <div className="">

      <div className="mb-8">
        <h1 className="text-3xl font-bold">Remédiation cognitive pour l'épilepsie</h1>
      </div>


      <div className="pl-4">
        <p className="mb-4">Combien de crises avez-vous en moyenne par jour ?</p>

        <div className="w-250 flex flex-row items-center justify-around py-4 bg-green-50 border border-green-100 rounded-lg">
          <label htmlFor="crise0">
            <input 
              type="radio"
              id="crise0" 
              name="crise0"
              value="absence de crise"
              checked={crisesState === "absence de crise"}
              onChange={handleCrises}
              className="mr-2"
            />
            absence de crise
          </label>

          <label htmlFor="crise1">
            <input 
              type="radio"
              id="crise1" 
              name="crise1"
              value="1 crise"
              checked={crisesState === "1 crise"}
              onChange={handleCrises}
              className="mr-2"
            />
            1 crise
          </label>
          <label htmlFor="crise2">
            <input 
              type="radio"
              id="crise2" 
              name="crise2"
              value="2 crises"
              checked={crisesState === "2 crises"}
              onChange={handleCrises}
              className="mr-2"
            />
            2 crises
          </label>

          <label htmlFor="crise3">
            <input 
              type="radio"
              id="crise3" 
              name="crise3"
              value="3 crises"
              checked={crisesState === "3 crises"}
              onChange={handleCrises}
              className="mr-2"
            />
            3 crises
          </label>
          <label htmlFor="crise4">
            <input 
              type="radio"
              id="crise4" 
              name="crise4"
              value="4 crises"
              checked={crisesState === "4 crises"}
              onChange={handleCrises}
              className="mr-2"
            />
            4 crises
          </label>
          <label htmlFor="crise5">
            <input 
              type="radio"
              id="crise5" 
              name="crise5"
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

          <div className="w-150 flex flex-row items-center justify-around py-4 bg-green-50 border border-green-100 rounded-lg">
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

        <div className="">
          <p className="mt-8 mb-4">Prenez-vous un MAE (Médicament Anti Epileptique) ?</p>

          <div className="w-50 flex flex-row items-center justify-around py-4 bg-green-50 border border-green-100 rounded-lg">
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


      </div>

    </div>
  );
}
