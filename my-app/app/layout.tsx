import type { Metadata } from "next";
import ThemeProvider from "./ui/ThemeProvider";
import { LanguageProvider } from "@/context/LanguageContext";
import Switcher from "./ui/Switcher";
import Menu from "./ui/Menu";
import "./globals.css";

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
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-full flex flex-col">
        <ThemeProvider>
          <LanguageProvider>
            <Switcher />
            {/* <Translation /> */}
            <Menu />
            <main className="w-full min-h-[calc(100vh-155px)] text-teal-500 bg-white dark:text-cyan-400 dark:bg-slate-900 p-10">
              {children}
            </main>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
