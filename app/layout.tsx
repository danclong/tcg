import type { Metadata } from "next";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { GlobalStateProvider } from "../contexts/globalStateContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Demo",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <GlobalStateProvider>
          <Header />
          {children}
          <footer>
            <p className="text-sm text-gray-500 text-center mt-10 mb-5">This website is not produced, endorsed, supported, or affiliated with Nintendo or The Pokémon Company.</p>
          </footer>
        </GlobalStateProvider>
      </body>
    </html>
  );
}

function Header() {
  return (
    <header className="mt-5 mb-5">
      <nav>
        <ul>
          <li>
            <Link className="btn bg-orange-600 p-2" href="/">Home</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
