import Link from "next/link";
import DarkModeToggle from "./DarkModeToggle";
import Image from 'next/image';

export default function Switcher() {
    return (
        <nav className="flex flex-row items-end justify-between text-base text-slate-100 bg-teal-500 dark:text-cyan-300 dark:bg-slate-700 py-3">
            <ul className="w-full flex flex-row items-center justify-between mx-10">
                <div className="relative flex items-center justify-start w-[70%] h-[40px] rounded-full">
                    <Image
                        src="/images/psy-logo.jpg"
                        width={500}
                        height={500}
                        alt="Logo of Site"
                        className="absolute w-[40px] h-auto rounded-full"
                    />
                </div>
                <div className="w-[30%] flex items-center justify-between">
                    <li>
                        <Link href="/patient" className="dark:hover:text-cyan-500">
                            Patient
                        </Link>
                    </li>
                    <li>
                        <Link href="/scores" className="dark:hover:text-cyan-500">
                            Scores
                        </Link>
                    </li>
                    <li>
                        <Link href="/login" className="dark:hover:text-cyan-500">
                            Login
                        </Link>
                    </li>
                    <li>En/Fr</li>
                    <DarkModeToggle />
                </div>
            </ul>
        </nav>
    );
};