import Link from "next/link";

export default function Switcher() {
    return (
        <nav className="flex flex-row items-center justify-between text-base font-bold text-slate-100 bg-emerald-500 dark:text-teal-300 dark:bg-slate-700 px-4 py-6">
            <ul className="w-[80%] flex items-center justify-around border">
                <li>
                    <Link href="/patient">
                        Patient
                    </Link>
                </li>
                <li>
                    <Link href="/scores">
                        Scores
                    </Link>
                </li>
            </ul>
            <ul className="w-[20%] flex flex-row items-center justify-around border">
                <li>
                    <Link href="/login">
                        Login
                    </Link>
                </li>
                <li>En/Fr</li>
                <li>Darkmode</li>
            </ul>
        </nav>
    );
};