import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import ThemeProvider from "./ui/ThemeProvider";
import Switcher from "./ui/Switcher";
import Menu from "./ui/Menu";
import "./globals.css";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "Epi-Neuro-Psy Cognitive",
  description: "WebAPP remediation cognitive for epilepsy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" style={{colorScheme:"dark"}}>
      <body className="min-h-full flex flex-col">
        <ThemeProvider>
          <Switcher />
          <Menu />
          <main className="w-full min-h-screen text-teal-500 bg-white dark:text-cyan-400 dark:bg-slate-900 p-10">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
