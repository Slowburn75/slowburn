"use client";

import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

export default function Portfolio() {
  const projects = [
    {
      title: "CoinSafeHub",
      description: "A secure platform for managing and recovering digital assets.",
      image: "/projects/coinsafehub.png",
      demo: "https://coinsafehub.com",
      github: "https://github.com/yourusername/coinsafehub",
    },
    {
      title: "Burn’s Podcast Website",
      description: "Youth-focused podcast website built with Tailwind CSS.",
      image: "/tot.jpeg",
      demo: "https://example.com/podcast",
      github: "#",
    },
    {
      title: "Slowmeds Pharmacy",
      description: "E-commerce platform for online pharmacy purchases in Lokoja.",
      image: "/projects/slowmeds.png",
      demo: "https://example.com/slowmeds",
      github: "#",
    },
  ];

  return (
    <section
      id="portfolio"
      className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
    >
      {/* Section Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-white">Portfolio</h2>
        <p className="mt-4 text-gray-400">
          A selection of projects I’ve built and contributed to.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <Card
            key={i}
            className="bg-[#2a2a2a] border-none shadow-md hover:shadow-lg transition"
          >
            {/* Thumbnail */}
            <img
              src={project.image}
              alt={project.title}
              className="rounded-t-xl h-40 w-full object-cover"
            />

            <CardContent className="p-4">
              <h3 className="text-lg font-semibold text-white">
                {project.title}
              </h3>
              <p className="text-sm text-gray-400 mt-2">
                {project.description}
              </p>
            </CardContent>

            <CardFooter className="flex justify-between p-4">
              <Button
                asChild
                size="sm"
                className="bg-[#FFDB70] text-black hover:bg-yellow-500"
              >
                <a href={project.demo} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4 mr-1" />
                  Demo
                </a>
              </Button>
              <Button
                asChild
                size="sm"
                variant="outline"
                className="border-gray-600 text-gray-300 hover:bg-gray-700"
              >
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4 mr-1" />
                  Code
                </a>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
