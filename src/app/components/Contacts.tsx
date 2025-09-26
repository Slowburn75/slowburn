"use client";

import { Button } from "@/components/ui/button";
import { Mail, Phone, Linkedin, Github } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
    >
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-white">Get In Touch</h2>
        <p className="mt-4 text-gray-400">
          I’m always open to new opportunities, collaborations, or just a friendly chat.
        </p>
      </div>

      {/* Contact Options */}
      <div className="grid gap-8 md:grid-cols-2">
        {/* Direct Contact Info */}
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <Mail className="w-6 h-6 text-yellow-400" />
            <a
              href="mailto:yourname@email.com"
              className="text-gray-300 hover:text-yellow-400"
            >
              yourname@email.com
            </a>
          </div>
          <div className="flex items-center gap-4">
            <Phone className="w-6 h-6 text-yellow-400" />
            <a
              href="tel:+1234567890"
              className="text-gray-300 hover:text-yellow-400"
            >
              +1 234 567 890
            </a>
          </div>
          <div className="flex items-center gap-4">
            <Linkedin className="w-6 h-6 text-yellow-400" />
            <a
              href="https://linkedin.com/in/yourprofile"
              target="_blank"
              className="text-gray-300 hover:text-yellow-400"
            >
              linkedin.com/in/yourprofile
            </a>
          </div>
          <div className="flex items-center gap-4">
            <Github className="w-6 h-6 text-yellow-400" />
            <a
              href="https://github.com/yourusername"
              target="_blank"
              className="text-gray-300 hover:text-yellow-400"
            >
              github.com/yourusername
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <form className="bg-[#2a2a2a] p-6 rounded-2xl shadow-md space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 rounded-lg bg-[#1f1f1f] text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 rounded-lg bg-[#1f1f1f] text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <textarea
            placeholder="Your Message"
            rows={4}
            className="w-full p-3 rounded-lg bg-[#1f1f1f] text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          ></textarea>
          <Button
            type="submit"
            className="w-full bg-yellow-400 text-black hover:bg-yellow-500"
          >
            Send Message
          </Button>
        </form>
      </div>
    </section>
  );
}
