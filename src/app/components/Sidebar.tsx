"use client";

import { useState } from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import {
  Mail, Phone, Calendar, MapPin,
  Facebook, Twitter, Instagram, ChevronDown
} from "lucide-react";

export default function Sidebar() {
  const [showMore, setShowMore] = useState(false);

  return (
    <aside className="w-full  md:max-w-4xl lg:w-[300px] border border-gray-700  bg-[#212121] text-gray-300 p-4 lg:p-6 rounded-2xl shadow-md">
      {/* Top Section */}
      <div className="flex items-center md:flex-col md:text-center gap-4">
        {/* Avatar */}
        <Avatar className="h-28 w-28 md:h-44 md:w-44">
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

        {/* Toggle Button (mobile only) */}
        <button
          onClick={() => setShowMore(!showMore)}
          className="md:hidden flex items-center gap-2 text-sm text-gray-400 hover:text-yellow-400"
        >
          <span>{showMore ? "Hide Contacts" : "Show Contacts"}</span>
          <ChevronDown
            className={`h-4 w-4 transition-transform ${showMore ? "rotate-180" : ""}`}
          />
        </button>
      </div>

      {/* Expandable Section */}
      <div
        className={`overflow-hidden transition-all duration-300 ${
          showMore ? "max-h-[500px] mt-4" : "max-h-0 md:max-h-none"
        }`}
      >
        <div className="border-t border-gray-700 my-4 md:my-6"></div>

        {/* Contacts */}
        <ul className="space-y-4 text-sm">
          <li className="flex items-start gap-3">
            <Mail className="h-4 w-4 text-yellow-400" />
            <div>
              <p className="font-medium text-gray-400">EMAIL</p>
              <a href="mailto: mohammedolamide1@gmail.com" className="hover:underline">
                mohammedolamide1@gmail.com
              </a>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <Phone className="h-4 w-4 text-yellow-400" />
            <div>
              <p className="font-medium text-gray-400">PHONE</p>
              <a href="tel:+2348105524379" className="hover:underline">
                +(234) 810-552-4379
              </a>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <Calendar className="h-4 w-4 text-yellow-400" />
            <div>
              <p className="font-medium text-gray-400">BIRTHDAY</p>
              <time dateTime="1999-03-27">March 27</time>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <MapPin className="h-4 w-4 text-yellow-400" />
            <div>
              <p className="font-medium text-gray-400">LOCATION</p>
              <address>Beside my woman</address>
            </div>
          </li>
        </ul>

        <div className="border-t border-gray-700 my-4 md:my-6"></div>

        {/* Socials */}
        <div className="flex gap-4 justify-center">
          <a href="#" className="hover:text-yellow-400">
            <Facebook className="h-5 w-5" />
          </a>
          <a href="#" className="hover:text-yellow-400">
            <Twitter className="h-5 w-5" />
          </a>
          <a href="#" className="hover:text-yellow-400">
            <Instagram className="h-5 w-5" />
          </a>
        </div>
      </div>
    </aside>
  );
}

