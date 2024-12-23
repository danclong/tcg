import type { Metadata } from "next";
import "./globals.css";

import { GlobalStateProvider } from "../contexts/globalStateContext";
import Footer from "../components/Footer";

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
        className={`antialiased`}
      >
        <GlobalStateProvider>
          <Header />
          {children}
          <Footer />
        </GlobalStateProvider>
      </body>
    </html>
  );
}

function Header() {
  return null;
}
