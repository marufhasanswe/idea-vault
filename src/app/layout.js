import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import NextThemeProvider from "@/providers/NextThemeProvider";
import Footer from "@/components/shared/Footer";
import { ToastContainer } from "react-toastify";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata = {
  title: "IdeaVault",
  description: "Browse startup ideas",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.className} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <NextThemeProvider>
          <Navbar></Navbar>
          <main className="">{children}</main>
          <Footer />
        </NextThemeProvider>
        <ToastContainer />
      </body>
    </html>
  );
}
