import "../globals.css";
import type { Metadata } from "next";
import { Manrope, Orbitron } from "next/font/google";
import type { ReactNode } from "react";
import { AppThemeProvider } from "@/components/theme-provider";
import { TranslationProvider } from "@/lib/translation-context";
import bg from "@/locales/bg.json";
import en from "@/locales/en.json";

const manrope = Manrope({ subsets: ["latin", "cyrillic"], variable: "--font-manrope" });
const orbitron = Orbitron({ subsets: ["latin"], variable: "--font-orbitron" });

export const metadata: Metadata = {
  title: "Mobilna Diagnostika",
  description: "Автодиагностика на място"
};

export default function LocaleLayout({
  children,
  params
}: {
  children: ReactNode;
  params: { locale: "bg" | "en" };
}) {
  const { locale } = params;
  const dictionary = locale === "bg" ? bg : en;

  return (
    <html lang={locale} className={`${manrope.variable} ${orbitron.variable}`} suppressHydrationWarning>
      <body className="min-h-screen bg-slate-950 font-sans text-white">
        <AppThemeProvider>
          <TranslationProvider value={{ locale, dictionary }}>
            {children}
          </TranslationProvider>
        </AppThemeProvider>
      </body>
    </html>
  );
}
