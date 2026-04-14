"use client";

import { ChangeEvent, FormEvent, useState } from "react";
import LabelInputOuiNon from "./ui/questionnaire/LabelInputOuiNon";
import InputComp from "./ui/questionnaire/InputComp";
import { useLanguage } from "@/context/LanguageContext";

type DataType = {
  crisesState: string;
  tempsCrise: string;
  perteConnaissance: string;
  maettt: string;
  nameMae: string;
  accepteTest: string;
  diffCognitives: string;
  diffCogniOuiNon: string;
  diagnostic: string;
  dernierePrise: string;
  sideEffects: string;
  crisePdtRemCo: string;
  besoinsOuiNon: string;
  besoinsParticuliers: string;
  tttUrgence: string;
  reposOuiNon: string;
  tttUrgenceName: string;
};

export default function Home() {

  const { chooseLang } = useLanguage();

  const [data, setData] = useState<DataType>({
    crisesState: "",
    tempsCrise: "",
    perteConnaissance: "",
    maettt: "",
    nameMae: "",
    accepteTest: "",
    diffCognitives: "",
    diffCogniOuiNon: "",
    diagnostic: "",
    dernierePrise: "",
    sideEffects: "",
    crisePdtRemCo: "",
    besoinsOuiNon: "",
    besoinsParticuliers: "",
    tttUrgence: "",
    reposOuiNon: "",
    tttUrgenceName: ""
  });

  const handleAllData = (e: ChangeEvent<HTMLInputElement>): void => {
    setData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmitHome = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const formData: DataType = data;

    // await fetch('/api/patient', { 
    //     method: 'POST', 
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify(allFormData) 
    // });

    console.log(formData)
  };

  return (
    <form onSubmit={(e) => handleSubmitHome(e)}>

      <div className="mb-8">
        <h1 className="text-2xl font-bold">
          {chooseLang === "FR" ? `Remédiation cognitive pour l'épilepsie` : `Cognitive rehabilitation for epilepsy`}
        </h1>
      </div>

      <div className="p-10 border border-teal-100 dark:border-cyan-600 rounded-lg">

        <LabelInputOuiNon 
          paragraphTxt={chooseLang === "FR" ? "Acceptez-vous de réaliser le test et comprenez-vous son but ?" :  "Do you agree to take the test, and do you understand its purpose?"}
          width="w-50"

          name="accepteTest"

          htmlForLabelOne="accepterTest"
          idOne="accepterTest"
          valueOne={`test accepté`}
          checkedOne={data.accepteTest === `test accepté`}
          onChangeOne={handleAllData}
          textOne={chooseLang === "FR" ? "Oui" : "Yes"}
          htmlForLabelTwo="refuserTest"
          idTwo="refuserTest"
          valueTwo={`test refusé`}
          checkedTwo={data.accepteTest === `test refusé`}
          textTwo={chooseLang === "FR" ? "Non" : "No"}
        />

        <LabelInputOuiNon 
          paragraphTxt={chooseLang === "FR" ? "Avez-vous de difficultés cognitives perçues ?" : "Do you have any perceived cognitive difficulties?"}
          width="w-50"

          htmlForLabelOne="diffcognitiveOui"
          idOne="diffcognitiveOui"
          name="diffCogniOuiNon"
          valueOne={`difficultés cognitves`}
          checkedOne={data.diffCogniOuiNon === `difficultés cognitves`}
          onChangeOne={handleAllData}
          textOne={chooseLang === "FR" ? "Oui" : "Yes"}

          htmlForLabelTwo="diffcognitiveNon"
          idTwo="diffcognitiveNon"
          valueTwo={`absence de difficultés cognitives`}
          checkedTwo={data.diffCogniOuiNon === `absence de difficultés cognitives`}
          textTwo={chooseLang === "FR" ? "Non" : "No"}
        />

        {data.diffCogniOuiNon === "difficultés cognitves" && (
          <InputComp 
            paragraph="Si oui, lesquelles ?"
            idP="diffCognitives"
            nameP="diffCognitives"
            valueP={data.diffCognitives} 
            onChangeP={handleAllData}
            widthP="w-200"
          />
        )}

        <LabelInputOuiNon 
          paragraphTxt={chooseLang === "FR" ? "Avez-vous des besoins particuliers ?" : "Do you have any special needs?"}
          width="w-50"

          htmlForLabelOne="besoinsParticulierOui"
          idOne="besoinsParticulierOui"
          name="besoinsOuiNon"
          valueOne={`besoins particuliers`}
          checkedOne={data.besoinsOuiNon === `besoins particuliers`}
          onChangeOne={handleAllData}
          textOne={chooseLang === "FR" ? "Oui" : "Yes"}

          htmlForLabelTwo="besoinsParticulierNon"
          idTwo="besoinsParticulierNon"
          valueTwo={`absence de besoins particuliers`}
          checkedTwo={data.besoinsOuiNon === `absence de besoins particuliers`}
          textTwo={chooseLang === "FR" ? "Non" : "No"}
        />

        {data.besoinsOuiNon === "besoins particuliers" && (
          <InputComp 
            paragraph="Si oui, lesquelles ?"
            idP="besoinsParticuliers"
            nameP="besoinsParticuliers"
            valueP={data.besoinsParticuliers} 
            onChangeP={handleAllData}
            widthP="w-200"
          />
        )}

        <LabelInputOuiNon 
          paragraphTxt={chooseLang === "FR" ? "Êtes-vous suffisamment reposé pour faire le test maintenant ?" : "Are you well-rested enough to take the test now?"}
          width="w-50"

          htmlForLabelOne="reposOui"
          idOne="reposOui"
          name="reposOuiNon"
          valueOne={`oui reposé`}
          checkedOne={data.reposOuiNon === `oui reposé`}
          onChangeOne={handleAllData}
          textOne={chooseLang === "FR" ? "Oui" : "Yes"}

          htmlForLabelTwo="reposNon"
          idTwo="reposNon"
          valueTwo={`non pas reposé`}
          checkedTwo={data.reposOuiNon === `non pas reposé`}
          textTwo={chooseLang === "FR" ? "Non" : "No"}
        />

        <InputComp 
          paragraph={chooseLang === "FR" 
            ? "Quel type d’épilepsie vous a-t-on diagnostiqué ? (localisée/focale, généralisée, non classée) ?" 
            : "What type of epilepsy have you been diagnosed with? (localized/focal, generalized, unclassified)"}
          idP="diagnostic"
          nameP="diagnostic"
          valueP={data.diagnostic} 
          onChangeP={handleAllData}
          widthP="w-200"
        />

        <p className="mt-8 mb-4">{chooseLang === "FR" 
          ? "Combien de crises avez-vous en moyenne par mois ?" 
          : "How many seizures do you have on average per month?"}</p>

        <div className="w-150 flex flex-row items-center justify-around py-2 bg-teal-50 border border-teal-100 rounded-lg">
          <label htmlFor="crise0">
            <input 
              type="radio"
              id="crise0" 
              name="crisesState"
              value={`aucune crise`}
              checked={data.crisesState === `aucune crise`}
              onChange={handleAllData}
              className="mr-2"
            />
            aucune
          </label>

          <label htmlFor="crise1">
            <input 
              type="radio"
              id="crise1" 
              name="crisesState"
              value="1-2 crise"
              checked={data.crisesState === "1-2 crise"}
              onChange={handleAllData}
              className="mr-2"
            />
            1-2
          </label>
          <label htmlFor="crise2">
            <input 
              type="radio"
              id="crise2" 
              name="crisesState"
              value="2-3 crises"
              checked={data.crisesState === "2-3 crises"}
              onChange={handleAllData}
              className="mr-2"
            />
            2-3
          </label>

          <label htmlFor="crise3">
            <input 
              type="radio"
              id="crise3" 
              name="crisesState"
              value="3-4 crises"
              checked={data.crisesState === "3-4 crises"}
              onChange={handleAllData}
              className="mr-2"
            />
            3-4
          </label>
          <label htmlFor="crise4">
            <input 
              type="radio"
              id="crise4" 
              name="crisesState"
              value="+ de 4 crises"
              checked={data.crisesState === "+ de 4 crises"}
              onChange={handleAllData}
              className="mr-2"
            />
            + de 4 crises
          </label>
        </div>

        <LabelInputOuiNon 
          paragraphTxt={chooseLang === "FR" 
            ? "Avez-vous des crises avec ou sans pertes de connaissances ?" 
            : "Do you have seizures with or without loss of consciousness?"}
          width="w-150"

          htmlForLabelOne="avecPerteCo"
          idOne="avecPerteCo"
          name="perteConnaissance"
          valueOne={`avec perte de connaissance`}
          checkedOne={data.perteConnaissance === `avec perte de connaissance`}
          onChangeOne={handleAllData}
          textOne={chooseLang === "FR" 
            ? "Avec perte de connaissance"
            : "With loss of consciousness"}

          htmlForLabelTwo="sansPerteCo"
          idTwo="sansPerteCo"
          valueTwo={`sans perte de connaissance`}
          checkedTwo={data.perteConnaissance === `sans perte de connaissance`}
          textTwo={chooseLang === "FR" 
            ? "Sans perte de connaissance"
            : "Without losing consciousness"}
        />
        
        <InputComp 
          paragraph={chooseLang === "FR" ?
            "Combien de temps les crises durent-elles (en minutes) ?"
            : "How long do the episodes last (in minutes)?"}
          idP="tempsDeCrise"
          nameP="tempsCrise"
          valueP={data.tempsCrise}
          onChangeP={handleAllData}
          widthP="w-10"
          minutes="minutes"
        />

        <LabelInputOuiNon 
          paragraphTxt={chooseLang === "FR" 
            ? "Prenez-vous un MAE (Médicament Anti Epileptique) ?" 
            : "Are you taking an AED (antiepileptic drug)?"}
          width="w-50"

          htmlForLabelOne="ouiMae"
          idOne="ouiMae"
          name="maettt"
          valueOne={`ttt MAE oui`}
          checkedOne={data.maettt === `ttt MAE oui`}
          onChangeOne={handleAllData}
          textOne={chooseLang === "FR" ? "Oui" : "Yes"}

          htmlForLabelTwo="nonMae"
          idTwo="nonMae"
          valueTwo={`ttt MAE non`}
          checkedTwo={data.maettt === `ttt MAE non`}
          textTwo={chooseLang === "FR" ? "Non" : "No"}
        />

        {data.maettt === "ttt MAE oui" && (
          <>
            <InputComp 
              paragraph={chooseLang === "FR" 
                ? "Comment s'appelle le traitement (MAE) que vous prenez ?"
                : "What is the name of the medication (MAE) you're taking?"}
              idP="maeName"
              nameP="nameMae"
              valueP={data.nameMae} 
              onChangeP={handleAllData}
              widthP="w-150"
            />

            <InputComp 
              paragraph={chooseLang === "FR" 
                ? "A quand date la dernière prise de traitement MAE ?"
                : "When was the last time you took your MAE medication?"}
              idP="dernierePrise"
              nameP="dernierePrise"
              valueP={data.dernierePrise} 
              onChangeP={handleAllData}
              widthP="w-50"
            />

            <InputComp 
              paragraph={chooseLang === "FR" 
                ? "Quels sont les effets secondaires de vos traitements MAE ?"
                : "What are the side effects of your MAE treatments?"}
              idP="sideEffects"
              nameP="sideEffects"
              valueP={data.sideEffects} 
              onChangeP={handleAllData}
              widthP="w-300"
            />
          </>
        )}

        <InputComp 
          paragraph={chooseLang === "FR" 
            ? "Si vous avez une crise durant la remédiation cognitive, que devons-nous faire ?"
            : "If you have a seizure during cognitive remediation, what should we do?"}
          idP="crisePdtRemCo"
          nameP="crisePdtRemCo"
          valueP={data.crisePdtRemCo} 
          onChangeP={handleAllData}
          widthP="w-300"
        />

        <LabelInputOuiNon 
          paragraphTxt={chooseLang === "FR" 
            ? "Avez-vous un traitement d’urgence (midazolam intranasal, etc.) ?"
            : "Do you have any emergency treatment options (such as intranasal midazolam, etc.)?"}
          width="w-50"

          htmlForLabelOne="tttUrgenceOui"
          idOne="tttUrgenceOui"
          name="tttUrgence"
          valueOne={`ttt d'urgence oui`}
          checkedOne={data.tttUrgence === `ttt d'urgence oui`}
          onChangeOne={handleAllData}
          textOne={chooseLang === "FR" ? "Oui" : "Yes"}

          htmlForLabelTwo="tttUrgenceNon"
          idTwo="tttUrgenceNon"
          valueTwo={`ttt d'urgence non`}
          checkedTwo={data.tttUrgence === `ttt d'urgence non`}
          textTwo={chooseLang === "FR" ? "Non" : "No"}
        />

        {data.tttUrgence === "ttt d'urgence oui" && (
          <InputComp 
            paragraph={chooseLang === "FR" 
              ? "Quel ttt d'urgence avez-vous ?"
              : "What kind of emergency do you have?"}
            idP="tttUrgenceName"
            nameP="tttUrgenceName"
            valueP={data.tttUrgenceName} 
            onChangeP={handleAllData}
            widthP="w-300"
          />
        )}

      </div>

      <div className="flex justify-center">
        <button type="submit" className="text-white bg-teal-400 hover:bg-teal-500 active:bg-teal-300 dark:bg-cyan-500 dark:hover:bg-cyan-600 dark:active:bg-cyan-400 mt-4 px-4 py-2 rounded-lg">
          {chooseLang === "FR" ? "Enregistrer" : "Subscribe"}
        </button>
      </div>

    </form>
  );
};