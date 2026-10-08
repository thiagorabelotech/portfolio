import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Thiago Rabelo | Full Stack Developer",
  description:
    "Portfolio and technical showcase of Thiago Rabelo - Full Stack Developer, Unity, and 3D Modeling.",
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    shortcut: "/favicon.ico",
    apple: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} font-sans dark antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#09090b] text-[#ededed]">
        {children}
      </body>
    </html>
  );
}
