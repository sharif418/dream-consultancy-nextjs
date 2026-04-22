import type { Metadata } from "next";
import { Mulish, Lora } from "next/font/google";
import "./globals.css";
import ClientLayout from "@/components/ClientLayout";

const mulish = Mulish({
  variable: "--font-mulish",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Dream Consultancy Limited - We Do for People and Society",
  description:
    "DREAM Consultancy Limited is dedicated to innovative research and sustainable solutions to meet the needs of people and society.",
  keywords: [
    "Dream Consultancy",
    "Research",
    "Sustainable Development",
    "Climate Change",
    "Bangladesh",
  ],
  openGraph: {
    title: "Dream Consultancy Limited",
    description: "We Do for People and Society",
    url: "https://dreamconsultancy.org",
    siteName: "Dream Consultancy Limited",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${mulish.variable} ${lora.variable}`}>
      <body className="min-h-screen flex flex-col font-sans">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
