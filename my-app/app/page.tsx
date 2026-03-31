import Link from "next/link";
// import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-blue-400">

      <div>
        <h1>Remédiation Cognitive pour l'Epilepsie</h1>
      </div>

      <ul className="list-disc">
        <li>
          <Link href="/memo-travail">Mémoire de Travail</Link>
        </li>
        <li>
          <Link href="/memo-episodic">Mémoire Episodique</Link>
        </li>
        <li>
          <Link href="/attention-soutenue">Attention Soutenue</Link>
        </li>
        <li>
          <Link href="/attention-selective">Attention Sélective et Divisée</Link>
        </li>
        <li>
          <Link href="/vitesse-traitement">Vitesse de Traitement</Link>
        </li>
        <li>
          <Link href="/fonctions-executives">Fonctions Ecécutives</Link>
        </li>
        <li>
          <Link href="/language-fluence">Language et Fluence Verbale</Link>
        </li>
      </ul>

    </div>
  );
}
