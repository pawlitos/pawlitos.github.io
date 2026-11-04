import type { Metadata } from "next";
import { DM_Mono, Noto_Sans } from "next/font/google";
import "./globals.css";

const notoSans = Noto_Sans({
  variable: "--font-noto-sans",
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
    <html lang="pl" className={`${notoSans.variable} ${dmMono.variable}`}>
      <body className="bg-background text-ink leading-relaxed antialiased pt-[env(safe-area-inset-top,0px)]">
        {children}
      </body>
    </html>
  );
}
