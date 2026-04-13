"use client";

import { ChangeEvent, useState } from "react";
import LabelInputOuiNon from "./ui/questionnaire/LabelInputOuiNon";
import InputComp from "./ui/questionnaire/InputComp";
import { useLanguage } from "@/context/LanguageContext";

export default function Home() {

  const [crisesState, setCrisesState] = useState<string | undefined>(undefined);
  const [tempsCrise, setTempsCrise] = useState<string>("");
  const [perteConnaissance, setPerteConnaissance] = useState<string | undefined>(undefined);
  const [maettt, setMaettt] = useState<string | undefined>(undefined);
  const [nameMae, setNameMae] = useState<string>("");
  const [accepteTest, setAccepteTest] = useState<string | undefined>(undefined);
  const [diffCognitives, setDiffCognitives] = useState<string>("");
  const [diffCogniOuiNon, setDiffCogniOuiNon] = useState<string | undefined>(undefined);
  const [diagnostic, setDiagnostic] = useState<string>("");
  const [dernierePrise, setDernierePrise] = useState<string>("");
  const [sideEffects, setSideEffects] = useState<string>("");
  const [crisePdtRemCo, setCrisePdtRemCo] = useState<string>("");
  const [besoinsOuiNon, setBesoinsOuiNon] = useState<string | undefined>(undefined);
  const [besoinsParticuliers, setBesoinsParticuliers] = useState<string>("");
  const [tttUrgence, setTttUrgence] = useState<string | undefined>(undefined);
  const [reposOuiNon, setReposOuiNon] = useState<string | undefined>(undefined);

  const handleCrises = (e: ChangeEvent<HTMLInputElement>): void => {
    setCrisesState(e.target.value);
  };

  const handlePerteCo = (e: ChangeEvent<HTMLInputElement>): void => {
    setPerteConnaissance(e.target.value);
  };

  const handleMae = (e: ChangeEvent<HTMLInputElement>): void => {
    setMaettt(e.target.value);
  };

  const handleAccepteTest = (e: ChangeEvent<HTMLInputElement>): void => {
    setAccepteTest(e.target.value);
  };

  const handleCognitiveResponse = (e: ChangeEvent<HTMLInputElement>): void => {
    setDiffCogniOuiNon(e.target.value);
  };

  const handleBesoinsParticuliers = (e: ChangeEvent<HTMLInputElement>): void => {
    setBesoinsOuiNon(e.target.value);
  };

  const handleTttUrgence = (e: ChangeEvent<HTMLInputElement>): void => {
    setTttUrgence(e.target.value);
  };

  const handleRepos = (e: ChangeEvent<HTMLInputElement>): void => {
    setReposOuiNon(e.target.value);
  };

  console.log(crisesState);
  console.log(tempsCrise);
  console.log(perteConnaissance);
  console.log(maettt);
  console.log(nameMae);
  console.log(accepteTest);
  console.log(diffCognitives);
  console.log(diffCogniOuiNon);
  console.log(diagnostic);
  console.log(dernierePrise);
  console.log(sideEffects);
  console.log(crisePdtRemCo);
  console.log(besoinsOuiNon);
  console.log(besoinsParticuliers);
  console.log(tttUrgence);
  console.log(reposOuiNon);

  const { chooseLang } = useLanguage();

  return (
    <div>

      <div className="mb-8">
        <h1 className="text-2xl font-bold">
          {chooseLang === "FR" ? `Remédiation cognitive pour l'épilepsie` : `Cognitive rehabilitation for epilepsy`}
        </h1>
      </div>

      <div className="p-10 border border-teal-100 dark:border-cyan-600 rounded-lg">

        <LabelInputOuiNon 
          paragraphTxt={chooseLang === "FR" ? "Acceptez-vous de réaliser le test et comprenez-vous son but ?" :  "Do you agree to take the test, and do you understand its purpose?"}
          width="w-50"

          htmlForLabelOne="accepterTest"
          idOne="accepterTest"
          nameOne="accepterTest"
          valueOne={`test accepté`}
          checkedOne={accepteTest === `test accepté`}
          onChangeOne={handleAccepteTest}
          textOne={chooseLang === "FR" ? "Oui" : "Yes"}

          htmlForLabelTwo="refuserTest"
          idTwo="refuserTest"
          nameTwo="refuserTest"
          valueTwo={`test refusé`}
          checkedTwo={accepteTest === `test refusé`}
          onChangeTwo={handleAccepteTest}
          textTwo={chooseLang === "FR" ? "Non" : "No"}
        />

        <LabelInputOuiNon 
          paragraphTxt={chooseLang === "FR" ? "Avez-vous de difficultés cognitives perçues ?" : "Do you have any perceived cognitive difficulties?"}
          width="w-50"

          htmlForLabelOne="diffcognitiveOui"
          idOne="diffcognitiveOui"
          nameOne="diffcognitiveOui"
          valueOne={`difficultés cognitves`}
          checkedOne={diffCogniOuiNon === `difficultés cognitves`}
          onChangeOne={handleCognitiveResponse}
          textOne={chooseLang === "FR" ? "Oui" : "Yes"}

          htmlForLabelTwo="diffcognitiveNon"
          idTwo="diffcognitiveNon"
          nameTwo="diffcognitiveNon"
          valueTwo={`absence de difficultés cognitives`}
          checkedTwo={diffCogniOuiNon === `absence de difficultés cognitives`}
          onChangeTwo={handleCognitiveResponse}
          textTwo={chooseLang === "FR" ? "Non" : "No"}
        />

        {diffCogniOuiNon === "difficultés cognitves" && (
          <InputComp 
            paragraph="Si oui, lesquelles ?"
            idP="diffCognitives"
            nameP="diffCognitives"
            valueP={diffCognitives} 
            onChangeP={(e) => setDiffCognitives(e.target.value)}
            widthP="w-200"
          />
        )}

        <LabelInputOuiNon 
          paragraphTxt={chooseLang === "FR" ? "Avez-vous des besoins particuliers ?" : "Do you have any special needs?"}
          width="w-50"

          htmlForLabelOne="besoinsParticulierOui"
          idOne="besoinsParticulierOui"
          nameOne="besoinsParticulierOui"
          valueOne={`besoins particuliers`}
          checkedOne={besoinsOuiNon === `besoins particuliers`}
          onChangeOne={handleBesoinsParticuliers}
          textOne={chooseLang === "FR" ? "Oui" : "Yes"}

          htmlForLabelTwo="besoinsParticulierNon"
          idTwo="besoinsParticulierNon"
          nameTwo="besoinsParticulierNon"
          valueTwo={`absence de besoins particuliers`}
          checkedTwo={besoinsOuiNon === `absence de besoins particuliers`}
          onChangeTwo={handleBesoinsParticuliers}
          textTwo={chooseLang === "FR" ? "Non" : "No"}
        />

        {besoinsOuiNon === "besoins particuliers" && (
          <InputComp 
            paragraph="Si oui, lesquelles ?"
            idP="besoinsParticuliers"
            nameP="besoinsParticuliers"
            valueP={besoinsParticuliers} 
            onChangeP={(e) => setBesoinsParticuliers(e.target.value)}
            widthP="w-200"
          />
        )}

        <LabelInputOuiNon 
          paragraphTxt={chooseLang === "FR" ? "Êtes-vous suffisamment reposé pour faire le test maintenant ?" : "Are you well-rested enough to take the test now?"}
          width="w-50"

          htmlForLabelOne="reposOui"
          idOne="reposOui"
          nameOne="reposOui"
          valueOne={`oui reposé`}
          checkedOne={reposOuiNon === `oui reposé`}
          onChangeOne={handleRepos}
          textOne={chooseLang === "FR" ? "Oui" : "Yes"}

          htmlForLabelTwo="reposNon"
          idTwo="reposNon"
          nameTwo="reposNon"
          valueTwo={`non pas reposé`}
          checkedTwo={reposOuiNon === `non pas reposé`}
          onChangeTwo={handleRepos}
          textTwo={chooseLang === "FR" ? "Non" : "No"}
        />

        <InputComp 
          paragraph={chooseLang === "FR" 
            ? "Quel type d’épilepsie vous a-t-on diagnostiqué ? (localisée/focale, généralisée, non classée) ?" 
            : "What type of epilepsy have you been diagnosed with? (localized/focal, generalized, unclassified)"}
          idP="diagnostic"
          nameP="diagnostic"
          valueP={diagnostic} 
          onChangeP={(e) => setDiagnostic(e.target.value)}
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

        <LabelInputOuiNon 
          paragraphTxt={chooseLang === "FR" 
            ? "Avez-vous des crises avec ou sans pertes de connaissances ?" 
            : "Do you have seizures with or without loss of consciousness?"}
          width="w-150"

          htmlForLabelOne="avecPerteCo"
          idOne="avecPerteCo"
          nameOne="avecPerteCo"
          valueOne={`avec perte de connaissance`}
          checkedOne={perteConnaissance === `avec perte de connaissance`}
          onChangeOne={handlePerteCo}
          textOne={chooseLang === "FR" 
            ? "Avec perte de connaissance"
            : "With loss of consciousness"}

          htmlForLabelTwo="sansPerteCo"
          idTwo="sansPerteCo"
          nameTwo="sansPerteCo"
          valueTwo={`sans perte de connaissance`}
          checkedTwo={perteConnaissance === `sans perte de connaissance`}
          onChangeTwo={handlePerteCo}
          textTwo={chooseLang === "FR" 
            ? "Sans perte de connaissance"
            : "Without losing consciousness"}
        />
        

        <InputComp 
          paragraph={chooseLang === "FR" ?
            "Combien de temps les crises durent-elles (en minutes) ?"
            : "How long do the episodes last (in minutes)?"}
          idP="tempsDeCrise"
          nameP="tempsDeCrise"
          valueP={tempsCrise}
          onChangeP={(e) => setTempsCrise(e.target.value)}
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
          nameOne="ouiMae"
          valueOne={`ttt MAE oui`}
          checkedOne={maettt === `ttt MAE oui`}
          onChangeOne={handleMae}
          textOne={chooseLang === "FR" ? "Oui" : "Yes"}

          htmlForLabelTwo="nonMae"
          idTwo="nonMae"
          nameTwo="nonMae"
          valueTwo={`ttt MAE non`}
          checkedTwo={maettt === `ttt MAE non`}
          onChangeTwo={handleMae}
          textTwo={chooseLang === "FR" ? "Non" : "No"}
        />

        {maettt === "ttt MAE oui" && (
          <>
            <InputComp 
              paragraph={chooseLang === "FR" 
                ? "Comment s'appelle le traitement (MAE) que vous prenez ?"
                : "What is the name of the medication (MAE) you're taking?"}
              idP="maeName"
              nameP="maeName"
              valueP={nameMae} 
              onChangeP={(e) => setNameMae(e.target.value)}
              widthP="w-150"
            />

            <InputComp 
              paragraph={chooseLang === "FR" 
                ? "A quand date la dernière prise de traitement MAE ?"
                : "When was the last time you took your MAE medication?"}
              idP="dernierePrise"
              nameP="dernierePrise"
              valueP={dernierePrise} 
              onChangeP={(e) => setDernierePrise(e.target.value)}
              widthP="w-50"
            />

            <InputComp 
              paragraph={chooseLang === "FR" 
                ? "Quels sont les effets secondaires de vos traitements MAE ?"
                : "What are the side effects of your MAE treatments?"}
              idP="sideEffects"
              nameP="sideEffects"
              valueP={sideEffects} 
              onChangeP={(e) => setSideEffects(e.target.value)}
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
          valueP={crisePdtRemCo} 
          onChangeP={(e) => setCrisePdtRemCo(e.target.value)}
          widthP="w-300"
        />

        <LabelInputOuiNon 
          paragraphTxt={chooseLang === "FR" 
            ? "Avez-vous un traitement d’urgence (midazolam intranasal, etc.) ?"
            : "Do you have any emergency treatment options (such as intranasal midazolam, etc.)?"}
          width="w-50"

          htmlForLabelOne="tttUrgenceOui"
          idOne="tttUrgenceOui"
          nameOne="tttUrgenceOui"
          valueOne={`ttt d'urgence oui`}
          checkedOne={tttUrgence === `ttt d'urgence oui`}
          onChangeOne={handleTttUrgence}
          textOne={chooseLang === "FR" ? "Oui" : "Yes"}

          htmlForLabelTwo="tttUrgenceNon"
          idTwo="tttUrgenceNon"
          nameTwo="tttUrgenceNon"
          valueTwo={`ttt d'urgence non`}
          checkedTwo={tttUrgence === `ttt d'urgence non`}
          onChangeTwo={handleTttUrgence}
          textTwo={chooseLang === "FR" ? "Non" : "No"}
        />

      </div>

      <div className="flex justify-center">
        <button type="submit" className="text-white bg-teal-400 hover:bg-teal-500 active:bg-teal-300 dark:bg-cyan-500 dark:hover:bg-cyan-600 dark:active:bg-cyan-400 mt-4 px-4 py-2 rounded-lg">
          {chooseLang === "FR" ? "Enregistrer" : "Subscribe"}
        </button>
      </div>

    </div>
  );
};