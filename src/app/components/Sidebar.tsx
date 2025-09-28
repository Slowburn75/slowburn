"use client";

import { useState } from "react";
import {
    Mail,
    Phone,
    Calendar,
    MapPin,
    ChevronDown,
    Facebook,
    Twitter,
    Instagram,
    Plus,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Sidebar() {
    const [showMore, setShowMore] = useState(false);

    return (
        <aside className="w-full md:mb-6 mb-6 md:max-w-4xl lg:w-[300px] mr-9 border border-gray-700 bg-[#212121] text-gray-300 p-4 lg:p-6 rounded-2xl shadow-md overflow-y-auto max-h-screen">
            {/* Top Section */}
            <div className="flex items-center md:items-start md:flex-row lg:flex-col md:text-left lg:text-center gap-4">
                {/* Avatar */}
                <Avatar className=" h-20 w-20 md:h-24 md:w-24 lg:h-44 lg:w-44">
                    <AvatarImage src="/picture.png" alt="Profile picture" />
                    <AvatarFallback>ME</AvatarFallback>
                </Avatar>

                {/* Name + Role */}
                <div className="flex-1">
                    <h1 className="text-lg md:text-xl font-semibold text-white">
                        Mohammed Isaac Olamide
                    </h1>
                    <p className="text-sm text-gray-400">Web Developer</p>
                </div>

                {/* Toggle Button (mobile + tablet, hidden on lg) */}
                <button
                    onClick={() => setShowMore(!showMore)}
                    aria-expanded={showMore}
                    className="lg:hidden flex items-center gap-2 text-sm text-gray-400 hover:text-[#FFDB70]"
                >
                    <span>{showMore ? "Hide Contacts" : "Show Contacts"}</span>
                    {showMore ? (
                        <ChevronDown className="h-4 w-4 rotate-180 transition-transform" />
                    ) : (
                        <Plus className="h-4 w-4" />
                    )}
                </button>
            </div>

            {/* Expandable Section (mobile + tablet collapsible, always open on lg) */}
            <div
                className={`overflow-hidden transition-all duration-300 ${showMore ? "max-h-[600px] mt-4" : "max-h-0 lg:max-h-none lg:mt-6"
                    }`}
            >
                <div className="border-t border-gray-700 my-4 lg:my-6"></div>

<ul className="text-sm
               flex flex-col gap-4       /* default stacked on mobile */
               md:grid md:grid-cols-2 md:gap-6  /* 2 columns on tablet */
               lg:grid-cols-1 lg:gap-4">
  <li className="flex items-start gap-3">
    <Mail className="h-4 w-4 text-[#FFDB70]" />
    <div>
      <p className="font-medium text-gray-400">EMAIL</p>
      <a href="mailto:mohammedolamide1@gmail.com" className="hover:underline">
        mohammedolamide1@gmail.com
      </a>
    </div>
  </li>
  <li className="flex items-start gap-3">
    <Phone className="h-4 w-4 text-[#FFDB70]" />
    <div>
      <p className="font-medium text-gray-400">PHONE</p>
      <a href="tel:+2348105524379" className="hover:underline">
        +(234) 810-552-4379
      </a>
    </div>
  </li>
  <li className="flex items-start gap-3">
    <Calendar className="h-4 w-4 text-[#FFDB70]" />
    <div>
      <p className="font-medium text-gray-400">BIRTHDAY</p>
      <time dateTime="1999-03-27">March 27</time>
    </div>
  </li>
  <li className="flex items-start gap-3">
    <MapPin className="h-4 w-4 text-[#FFDB70]" />
    <div>
      <p className="font-medium text-gray-400">LOCATION</p>
      <address>Beside my woman</address>
    </div>
  </li>
</ul>


                <div className="border-t border-gray-700 my-4 lg:my-6"></div>

                {/* Socials */}
                <div className="flex gap-4 justify-center">
                    <a href="#" className="hover:text-[#FFDB70]">
                        <Facebook className="h-5 w-5" />
                    </a>
                    <a href="#" className="hover:text-[#FFDB70]">
                        <Twitter className="h-5 w-5" />
                    </a>
                    <a href="#" className="hover:text-[#FFDB70]">
                        <Instagram className="h-5 w-5" />
                    </a>
                </div>
            </div>
        </aside>
    );
}
