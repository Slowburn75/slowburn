"use client";

import { Briefcase, GraduationCap } from "lucide-react";

export default function Resume() {
  const experiences = [
    {
      role: "Frontend Developer",
      company: "Tech Solutions Inc.",
      period: "2022 - Present",
      description:
        "Built responsive web apps with React, Next.js, and Tailwind. Collaborated with designers to deliver modern UI/UX.",
    },
    {
      role: "Intern Developer",
      company: "Delta Afrik",
      period: "2021",
      description:
        "Assisted IT department with system maintenance and basic frontend tasks using JavaScript.",
    },
  ];

  const education = [
    {
      degree: "BSc Computer Science",
      school: "University of Lagos",
      period: "2017 - 2021",
      description:
        "Focused on software engineering, data structures, algorithms, and web development.",
    },
    {
      degree: "High School",
      school: "Federal Government College",
      period: "2011 - 2017",
      description:
        "Science track with focus on mathematics, physics, and computer studies.",
    },
  ];

  return (
    <section
      id="resume"
      className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
    >
      {/* Section Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-white">Resume</h2>
        <p className="mt-4 text-gray-400">
          My work experience and educational background.
        </p>
      </div>

      {/* Grid */}
      <div className="grid gap-10 lg:grid-cols-2">
        {/* Experience */}
        <div>
          <h3 className="flex items-center text-xl font-semibold text-[#FFDB70] mb-6">
            <Briefcase className="h-6 w-6 mr-2" /> Experience
          </h3>
          <div className="space-y-6">
            {experiences.map((exp, i) => (
              <div
                key={i}
                className="relative pl-6 border-l-2 border-[#FFDB70]"
              >
                <div className="absolute -left-[9px] top-1 h-4 w-4 rounded-full bg-[#FFDB70]"></div>
                <h4 className="text-lg font-semibold text-white">
                  {exp.role}
                </h4>
                <p className="text-sm text-gray-400">{exp.company}</p>
                <span className="text-xs text-gray-500">{exp.period}</span>
                <p className="mt-2 text-sm text-gray-300">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div>
          <h3 className="flex items-center text-xl font-semibold text-[#FFDB70] mb-6">
            <GraduationCap className="h-6 w-6 mr-2" /> Education
          </h3>
          <div className="space-y-6">
            {education.map((edu, i) => (
              <div
                key={i}
                className="relative pl-6 border-l-2 border-[#FFDB70]"
              >
                <div className="absolute -left-[9px] top-1 h-4 w-4 rounded-full bg-[#FFDB70]"></div>
                <h4 className="text-lg font-semibold text-white">
                  {edu.degree}
                </h4>
                <p className="text-sm text-gray-400">{edu.school}</p>
                <span className="text-xs text-gray-500">{edu.period}</span>
                <p className="mt-2 text-sm text-gray-300">{edu.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
