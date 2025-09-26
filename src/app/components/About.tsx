"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Code2, Palette, Globe, Download } from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
    >
      {/* Section Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-white">About Me</h2>
        <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
          I’m Mohammed Olamide, a passionate Web Developer who loves turning
          ideas into modern, interactive, and responsive web experiences. With
          a focus on performance and clean design, I bring both creativity and
          functionality into every project.
        </p>

        {/* Resume Button */}
        <div className="mt-6">
          <Button
            asChild
            className="bg-yellow-400 text-black hover:bg-yellow-500"
          >
            <a href="/resume.pdf" download>
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </a>
          </Button>
        </div>
      </div>

      {/* Highlight Cards */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <Card className="bg-[#2a2a2a] border-none shadow-md hover:shadow-lg transition">
          <CardContent className="flex flex-col items-center text-center p-6">
            <Code2 className="h-10 w-10 text-yellow-400 mb-4" />
            <h3 className="text-lg font-semibold text-white">Frontend Dev</h3>
            <p className="text-sm text-gray-400 mt-2">
              Building responsive, interactive, and user-friendly interfaces
              using React, Next.js, and Tailwind CSS.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-[#2a2a2a] border-none shadow-md hover:shadow-lg transition">
          <CardContent className="flex flex-col items-center text-center p-6">
            <Palette className="h-10 w-10 text-yellow-400 mb-4" />
            <h3 className="text-lg font-semibold text-white">UI/UX</h3>
            <p className="text-sm text-gray-400 mt-2">
              Crafting sleek designs and seamless user experiences with a focus
              on accessibility and aesthetics.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-[#2a2a2a] border-none shadow-md hover:shadow-lg transition">
          <CardContent className="flex flex-col items-center text-center p-6">
            <Globe className="h-10 w-10 text-yellow-400 mb-4" />
            <h3 className="text-lg font-semibold text-white">Web Solutions</h3>
            <p className="text-sm text-gray-400 mt-2">
              Delivering fast, scalable, and secure solutions for businesses,
              from landing pages to full-stack apps.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
