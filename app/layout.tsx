import type { Metadata } from "next";
import { Anton, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar/Navbar";

const anton = Anton({
    subsets: ["latin"],
    variable: "--font-anton",
    weight: "400",
});

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
});

export const metadata: Metadata = {
    title: "Artes Group",
    description: "Artes Group",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${inter.variable} ${anton.variable} bg-ag-black text-white`}
            >
                <img
                    src="/images/Noise.png"
                    alt="noise"
                    className="fixed top-0 left-0 w-screen h-screen object-cover opacity-70"
                />
                <Navbar />
                {children}
            </body>
        </html>
    );
}
