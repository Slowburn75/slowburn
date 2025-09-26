"use client";

import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Jane Smith",
    role: "Product Manager at TechCorp",
    note: "Working with you was an absolute pleasure. Your attention to detail and dedication to delivering high-quality work exceeded expectations.",
  },
  {
    name: "Michael Johnson",
    role: "CEO at StartupX",
    note: "You brought our vision to life perfectly. Communication was smooth, and the results were delivered ahead of schedule.",
  },
  {
    name: "Sophia Lee",
    role: "Designer at CreativeStudio",
    note: "A true professional! You have an incredible ability to translate ideas into functional and beautiful solutions.",
  },
];
const experiences = [
    {
      role: "Frontend Developer",
      company: "Tech Solutions Inc.",
      period: "2022 - Present",
      description:
        "Built responsive web apps with React, TypeScript, Next.js, and Tailwind. Collaborated with designers to deliver modern UI/UX.",
    },
    {
      role: "Network Engr Intern",
      company: "Delta Afrik",
      period: "2021",
      description:
        "Assisted IT department with system maintenance and basic networking tasks to ensure seamless operation amongst staff memebers.",
    },
  ];

  const education = [
    {
      degree: "BSc Computer Science",
      school: "Federal University, Lokoja.",
      period: "2019 - 2024",
      description:
        "Focused on software engineering, data structures, algorithms, and web development.",
    },
    {
      degree: "ND Computer Science",
      school: "Gateway ICT Polytechnic",
      period: "2016 - 2018",
      description:
        "Studied the basics of Computer programming, Web Development and Data structures.",
    },
  ];
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
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Card, CardContent, CardFooter} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Code2, Code, Palette, Globe, Download } from "lucide-react";
import { Briefcase, GraduationCap } from "lucide-react";
import { ExternalLink, Mail, X, Phone, Linkedin, Github } from "lucide-react";




export default function PortfolioTabs() {
  return (
    <Tabs defaultValue="about" className="w-full border border-gray-700 rounded-2xl shadow-md bg-[#212121]">
  
  {/* About Tab Content */}
  <TabsContent value="about">
    <section
      id="about"
      className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
    >
      {/* Heading and Tabs inline */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-12">
        <h1 className="text-3xl font-bold text-white mb-4 sm:mb-0">About Me</h1>

        {/* Tabs List next to heading */}
        <TabsList className="flex space-x-12 bg-[#212121]">
          <TabsTrigger value="about" className="px-3 py-1 hover:text-white data-[state=active]:bg-[#212121]  data-[state=active]:text-yellow-400">About</TabsTrigger>
          <TabsTrigger value="resume" className="px-3 py-1 text-white">Resume</TabsTrigger>
          <TabsTrigger value="portfolio" className="px-3 py-1 text-white">Portfolio</TabsTrigger>
          <TabsTrigger value="contact" className="px-3 py-1 text-white">Contact</TabsTrigger>
        </TabsList>
      </div>

      {/* About content */}
      <div className="text-white mb-12">
        <p className="mt-4 text-gray-400 max-w-2xl">
          I’m Mohammed Olamide, a passionate Web Developer who loves turning
          ideas into modern, interactive, and responsive web experiences...
        </p>
      </div>

      <h2 className="text-3xl font-bold text-white mb-6">What I Do</h2>
      {/* Highlight Cards */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
              {/* Highlight Cards */}
        <Card className="flex bg-[#2a2a2a] border border-gray-700 border-none shadow-md hover:shadow-lg transition">
          <CardContent className="p-6">
            <Code2 className="h-10 w-10 text-yellow-400 mb-4" />
            <h3 className="text-lg font-semibold text-white">Frontend Dev</h3>
            <p className="text-sm text-gray-400 mt-2">
              Building responsive, interactive, and user-friendly interfaces
              using React, Next.js, and Tailwind CSS.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-[#2a2a2a] border border-gray-700 border-none shadow-md hover:shadow-lg transition">
          <CardContent className="flex flex-col  p-6">
            <Palette className="h-10 w-10 text-yellow-400 mb-4" />
            <h3 className="text-lg font-semibold text-white">UI/UX</h3>
            <p className="text-sm text-gray-400 mt-2">
              Crafting sleek designs and seamless user experiences with a focus
              on accessibility and aesthetics.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-[#2a2a2a] border border-gray-700 border-none shadow-md hover:shadow-lg transition">
          <CardContent className="flex flex-col p-6">
            <Globe className="h-10 w-10 text-yellow-400 mb-4" />
            <h3 className="text-lg font-semibold text-white">Web Solutions</h3>
            <p className="text-sm text-gray-400 mt-2">
              Delivering fast, scalable, and secure solutions for businesses,
              from landing pages to full-stack apps.
            </p>
          </CardContent>
        </Card>
                <Card className="bg-[#2a2a2a] border border-gray-700 border-none shadow-md hover:shadow-lg transition">
          <CardContent className="flex flex-col p-6">
            <Code className="h-10 w-10 text-yellow-400 mb-4" />
            <h3 className="text-lg font-semibold text-white">Mobile Apps</h3>
            <p className="text-sm text-gray-400 mt-2">
              Professional development of applications for ios and Android 
            </p>
          </CardContent>
        </Card>
      </div>
      {/* Heading */}

        <h2 className="text-3xl font-bold text-white mt-11 mb-6">Testimonial</h2>
        {/* Testimonials Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t, index) => (
            <Card
                key={index}
                className="bg-[#2a2a2a] border border-gray-700 shadow-md rounded-2xl"
            >
                <CardContent className="p-6 flex flex-col gap-4">
                <Quote className="w-8 h-8 text-yellow-400" />
                <p className="text-gray-300 italic">“{t.note}”</p>
                <div className="mt-4">
                    <p className="font-semibold text-white">{t.name}</p>
                    <p className="text-sm text-gray-400">{t.role}</p>
                </div>
                </CardContent>
            </Card>
            ))}
        </div>
    </section>
  </TabsContent>

  {/* Other Tabs (Resume, Portfolio, Contact) */}
  <TabsContent value="resume">
    <section
      id="resume"
      className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
    >
      {/* Heading and Tabs inline */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-12">
        <h1 className="text-3xl font-bold text-white mb-4 sm:mb-0">Resume</h1>

        {/* Tabs List next to heading */}
        <TabsList className="flex space-x-12 bg-[#212121]">
          <TabsTrigger value="about" className="px-3 py-1 text-white">About</TabsTrigger>
          <TabsTrigger value="resume" className="px-3 py-1  hover:text-white data-[state=active]:bg-[#212121]  data-[state=active]:text-yellow-400">Resume</TabsTrigger>
          <TabsTrigger value="portfolio" className="px-3 py-1 text-white">Portfolio</TabsTrigger>
          <TabsTrigger value="contact" className="px-3 py-1 text-white">Contact</TabsTrigger>
        </TabsList>
      </div>

      {/* Grid */}
      <div className="grid gap-10 lg:grid-cols-2">
        {/* Experience */}
        <div>
          <h3 className="flex items-center text-xl font-semibold text-yellow-400 mb-6">
            <Briefcase className="h-6 w-6 mr-2" /> Experience
          </h3>
          <div className="space-y-6">
            {experiences.map((exp, i) => (
              <div
                key={i}
                className="relative pl-6 border-l-2 border-yellow-400"
              >
                <div className="absolute -left-[9px] top-1 h-4 w-4 rounded-full bg-yellow-400"></div>
                <h4 className="text-lg font-semibold text-white">
                  {exp.role}
                </h4>
                <p className="text-sm text-gray-400">{exp.company}</p>
                <span className="text-xs text-yellow-400">{exp.period}</span>
                <p className="mt-2 text-sm text-gray-300">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div>
          <h3 className="flex items-center text-xl font-semibold text-yellow-400 mb-6">
            <GraduationCap className="h-6 w-6 mr-2" /> Education
          </h3>
          <div className="space-y-6">
            {education.map((edu, i) => (
              <div
                key={i}
                className="relative pl-6 border-l-2 border-yellow-400"
              >
                <div className="absolute -left-[9px] top-1 h-4 w-4 rounded-full bg-yellow-400"></div>
                <h4 className="text-lg font-semibold text-white">
                  {edu.degree}
                </h4>
                <p className="text-sm text-gray-400">{edu.school}</p>
                <span className="text-xs text-yellow-400">{edu.period}</span>
                <p className="mt-2 text-sm text-gray-300">{edu.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
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
    </section>
  </TabsContent>

  <TabsContent value="portfolio">
    <section
      id="portfolio"
      className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
    >
      {/* Heading and Tabs inline */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-12">
        <h1 className="text-3xl font-bold text-white mb-4 sm:mb-0">Portfolio</h1>

        {/* Tabs List next to heading */}
        <TabsList className="flex space-x-12 bg-[#212121]">
          <TabsTrigger value="about" className="px-3 py-1 text-white">About</TabsTrigger>
          <TabsTrigger value="resume" className="px-3 py-1 text-white">Resume</TabsTrigger>
          <TabsTrigger value="portfolio" className="px-3 py-1  hover:text-white data-[state=active]:bg-[#212121]  data-[state=active]:text-yellow-400">Portfolio</TabsTrigger>
          <TabsTrigger value="contact" className="px-3 py-1 text-white">Contact</TabsTrigger>
        </TabsList>
      </div>
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
                className="bg-yellow-400 text-black hover:bg-yellow-500"
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
  </TabsContent>

  <TabsContent value="contact">
        <section
      id="contact"
      className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
    >
      {/* Heading and Tabs inline */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-12">
        <h1 className="text-3xl font-bold text-white mb-4 sm:mb-0">Contact</h1>

        {/* Tabs List next to heading */}
        <TabsList className="flex space-x-12 bg-[#212121]">
          <TabsTrigger value="about" className="px-3 py-1 text-white">About</TabsTrigger>
          <TabsTrigger value="resume" className="px-3 py-1 text-white">Resume</TabsTrigger>
          <TabsTrigger value="portfolio" className="px-3 py-1 text-white">Portfolio</TabsTrigger>
          <TabsTrigger value="contact" className="px-3 py-1  hover:text-white data-[state=active]:bg-[#212121]  data-[state=active]:text-yellow-400">Contact</TabsTrigger>
        </TabsList>
      </div>

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
          <div className="flex items-center gap-4">
            <X className="w-6 h-6 text-yellow-400" />
            <a
              href="https://github.com/yourusername"
              target="_blank"
              className="text-gray-300 hover:text-yellow-400"
            >
              No even find me come
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
  </TabsContent>

</Tabs>
  )
}
