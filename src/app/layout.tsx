
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
      <body className="bg-black text-gray-300 flex">
        {/* Sidebar */}
        <aside className="w-[350px] hidden lg:block fixed left-0 top-0 h-screen bg-black p-6">
          <Sidebar />
        </aside>

        {/* Main Content */}
        <main className="lg:ml-[350px] bg-black pt-6 top-0 w-full">


          {/* Tabs handle all content */}
          <PortfolioTabs />

          {/* You can optionally keep children if you want dynamic content */}
          {children}
        </main>
      </body>
    </html>
  );
}
