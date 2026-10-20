import type { Metadata } from "next";
import { DM_Mono, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
});

const dmMono = DM_Mono({
  variable: "--font-dm-mono",
  weight: "400",
  subsets: ["latin", "latin-ext"],
});

export const metadata: Metadata = {
  title: "Paweł Staś — Frontend Developer",
  description:
    "Frontend developer skupiony na React, TypeScript i jakości doświadczeń użytkownika. Buduję szybkie, dostępne aplikacje internetowe.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pl" className={`${inter.variable} ${dmMono.variable}`}>
      <body className="bg-white font-sans text-ink leading-relaxed antialiased pt-[env(safe-area-inset-top,0px)]">
        {children}
      </body>
    </html>
  );
}
