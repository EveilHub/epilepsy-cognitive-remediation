import Link from "next/link";

export default function LanguageFluence() {
    return (
        <div className="">
            <h1 className="text-2xl font-bold">Language et Fluence Verbale</h1>

            <div className="text-lg pl-4">
                <p className="my-8">Accès lexical, production de mots</p>

                <nav>
                    <ul className="list-disc">
                        <li className="hover:text-emerald-600 m-4">
                            <Link href="/language-fluence/1">
                                <span className="font-bold">Fluence catégorielle:</span>
                                &nbsp;Nommer le plus d'animaux possible en 1 minute
                            </Link>
                        </li>
                        <li className="hover:text-emerald-600 m-4">
                            <Link href="/language-fluence/2">
                                <span className="font-bold">Fluence littérale:</span>
                                &nbsp;Nommer des mots commençant pas "P"
                            </Link>
                        </li>
                        <li className="hover:text-emerald-600 m-4">
                            <Link href="/language-fluence/3">
                                <span className="font-bold">Complétion de phrases:</span>
                                &nbsp;Trouver le mot manquant
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>

        </div>
    )
}