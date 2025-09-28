"use client";

import { Home, User, Briefcase, FileText, Mail } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Home", icon: Home },
    { href: "/about", label: "About", icon: User },
    { href: "/portfolio", label: "Portfolio", icon: Briefcase },
    { href: "/resume", label: "Resume", icon: FileText },
    { href: "/contact", label: "Contact", icon: Mail },
  ];

  return (
    <nav className="fixed bottom-0 left-0 w-full bg-[#2a2a2a]/75 backdrop-blur-md border border-[#3a3a3a] rounded-t-2xl shadow-lg z-50">
      <ul className="flex justify-center items-center gap-6 py-2 sm:py-3">
        {links.map(({ href, label, icon: Icon }) => (
          <li key={href}>
            <Link
              href={href}
              className={`flex flex-col items-center text-xs transition-colors ${
                pathname === href
                  ? "text-[#FFDB70]"
                  : "text-gray-400 hover:text-gray-200"
              }`}
            >
              {/* Icon always visible */}
              <Icon className="h-5 w-5 sm:h-6 sm:w-6 mb-0 sm:mb-1" />
              {/* Label hidden on mobile */}
              <span className="hidden sm:block">{label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
