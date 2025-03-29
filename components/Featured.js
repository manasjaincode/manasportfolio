"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";

const hackathons = [
  {
    title: "Hack'Ndore",
    date: "July 2024",
    description:
      "Among top 10 Finalist teams, Built an innovative water management system solution for Indore, recognized by the Mayor of Indore.",
    images: ["/mayor idr.jpg", "/hc.jpg", "/hackndore3.jpg"],
    github: "https://github.com/your-repo/hackndore",
    live: "https://your-live-demo-link.com/hackndore",
  },
  {
    title: "Quasar 2.0",
    date: "January 2025",
    description:
      "Designed an Ecosystem to bridge the industry-academia skill gap, empowering students with job-ready skills.",
    images: ["/genai1.jpg", "/genai2.jpg", "/genai3.jpg"],
    uiux: "https://your-uiux-link.com/quasar",
  },
  {
    title: "Meta Buildathon",
    date: "October 2024",
    description:
      "Developed a full-stack AI-driven social platform within 48 hours, winning Best UI/UX Award.",
    images: ["/metabuild1.jpg", "/metabuild2.jpg", "/metabuild3.jpg"],
    github: "https://github.com/your-repo/meta-buildathon",
    live: "https://your-live-demo-link.com/meta-buildathon",
  },
];

export default function HackathonSection() {
  const [index, setIndex] = useState(0);
  const [imageIndex, setImageIndex] = useState(0);

  const handleNextImage = () => {
    setImageIndex((prev) => (prev + 1) % hackathons[index].images.length);
  };

  const handlePrevImage = () => {
    setImageIndex((prev) =>
      prev === 0 ? hackathons[index].images.length - 1 : prev - 1
    );
  };

  return (
    <div className="relative bg-black text-white py-16 px-6 flex flex-col items-center min-h-screen">
      {/* Heading */}
      <h1 className="text-4xl sm:text-5xl font-extrabold text-center mb-12 neon-text">
        <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
          Hackathons
        </span>
      </h1>

      {hackathons.map((hackathon, i) => (
        <div
          key={i}
          className="w-full max-w-6xl flex flex-col lg:flex-row items-center gap-8 mb-16"
        >
          {/* Left: Image Slider */}
          <div className="relative w-full lg:w-1/2 h-[300px] sm:h-[350px] md:h-[400px]">
            <motion.div
              key={hackathon.images[imageIndex]}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5 }}
              className="absolute w-full h-full"
            >
              <Image
                src={hackathon.images[imageIndex]}
                alt={hackathon.title}
                fill
                className="object-cover rounded-xl shadow-lg"
                priority
              />
            </motion.div>
            {/* Arrows */}
            <button
              onClick={handlePrevImage}
              className="absolute top-1/2 left-2 -translate-y-1/2 bg-gray-800 p-2 rounded-full shadow-md"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={handleNextImage}
              className="absolute top-1/2 right-2 -translate-y-1/2 bg-gray-800 p-2 rounded-full shadow-md"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Right: Hackathon Details */}
          <motion.div
            key={hackathon.title}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.7 }}
            className="w-full lg:w-1/2 text-center lg:text-left"
          >
            <h2 className="text-3xl sm:text-4xl font-extrabold neon-text mb-2">
              {hackathon.title}
            </h2>
            <p className="text-md sm:text-lg text-gray-300 mb-4">
              {hackathon.date}
            </p>
            <p className="text-lg sm:text-xl font-light leading-relaxed text-gray-200 mb-4">
              {hackathon.description}
            </p>
            {/* Links */}
            <div className="flex gap-4 mt-4">
              <a
                href={hackathon.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-gray-800 rounded-lg shadow-md hover:bg-gray-700 transition"
              >
                <ExternalLink size={20} /> GitHub
              </a>
              <a
                href={hackathon.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-blue-600 rounded-lg shadow-md hover:bg-blue-500 transition"
              >
                <ExternalLink size={20} /> View Live
              </a>
            </div>
          </motion.div>
        </div>
      ))}
    </div>
  );
}
