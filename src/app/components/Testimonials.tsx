"use client";

import { Card, CardContent } from "@/components/ui/card";
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

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
    >
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-white">What People Say</h2>
        <p className="mt-4 text-gray-400">
          Feedback from clients and colleagues I’ve had the pleasure to work with.
        </p>
      </div>

      {/* Testimonials Grid */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((t, index) => (
          <Card
            key={index}
            className="bg-[#2a2a2a] border border-gray-700 shadow-md rounded-2xl"
          >
            <CardContent className="p-6 flex flex-col gap-4">
              <Quote className="w-8 h-8 text-[#FFDB70]" />
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
  );
}
