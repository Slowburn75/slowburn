import type { Metadata } from "next";
import "./globals.css";
import Sidebar from "./components/Sidebar";
import PortfolioTabs from "./components/Tabs";

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "Personal portfolio website",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-black m-19 text-gray-300 flex flex-col lg:flex-row">
        {/* Sidebar handles its own responsive behavior */}
        <Sidebar />

        {/* Main Content */}
        <main className="flex-1 bg-black max-w-full">
          <PortfolioTabs />
          {children}
        </main>
      </body>
    </html>
  );
}
