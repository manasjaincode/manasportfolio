"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";

const hackathons = [
  {
    title: "MoonHack'25",
    date: "March 2025",
    description:
      "Developed an Eco-system {Club-DAO} for College Clubs/Societies to run on Code, not Chaos. Made it to Final round out of 180+ Teams",
    images: ["/MH1.jpg", "/MH2.jpg", "/MH3.jpg"],
    github: "https://github.com/manasjaincode/Manas-ClubDAO",
    live: "https://club-dao-delta.vercel.app/",
  },
  {
    title: "Quasar 2.0",
    date: "January 2025",
    description:
      "Designed an Ecosystem to bridge the industry-academia skill gap, empowering students with job-ready skills.",
    images: ["/quasar.jpg", "/M2.jpg", "/M3.jpg"],
    uiux: "https://manasjaincode.wixstudio.com/markettrails",
  },
  {
    title: "Hack'Ndore",
    date: "July 2024",
    description:
      "Among top 10 Finalist teams, Built an innovative water management system solution for Indore, recognized by the Mayor of Indore.",
    images: ["/mayor idr.jpg", "/hc.jpg", "/M4.jpg"],
    github: "https://github.com/manasjaincode/ThreatTrackers",
  },
];

export default function HackathonSection() {
  const [imageIndexes, setImageIndexes] = useState(
    Array(hackathons.length).fill(0)
  );

  const handleNextImage = (hackathonIndex) => {
    setImageIndexes((prev) =>
      prev.map((imgIdx, idx) =>
        idx === hackathonIndex
          ? (imgIdx + 1) % hackathons[hackathonIndex].images.length
          : imgIdx
      )
    );
  };

  const handlePrevImage = (hackathonIndex) => {
    setImageIndexes((prev) =>
      prev.map((imgIdx, idx) =>
        idx === hackathonIndex
          ? (imgIdx - 1 + hackathons[hackathonIndex].images.length) %
            hackathons[hackathonIndex].images.length
          : imgIdx
      )
    );
  };

  return (
    <div className="bg-gray-950 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto px-4">
        {hackathons.map((hackathon, i) => (
          <div
            key={i}
            className="bg-gray-900 p-4 rounded-xl shadow-lg flex flex-col items-center w-full max-w-[320px] mx-auto"
          >
            {/* Image Slider */}
            <div className="relative w-full h-48 mb-3">
              <motion.div
                key={hackathon.images[imageIndexes[i]]}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="absolute w-full h-full"
              >
                <Image
                  src={hackathon.images[imageIndexes[i]]}
                  alt={hackathon.title}
                  fill
                  className="object-cover rounded-lg"
                />
              </motion.div>

              <button
                onClick={() => handlePrevImage(i)}
                className="absolute top-1/2 left-2 -translate-y-1/2 bg-gray-200 p-1 rounded-full"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                onClick={() => handleNextImage(i)}
                className="absolute top-1/2 right-2 -translate-y-1/2 bg-gray-200 p-1 rounded-full"
              >
                <ChevronRight size={16} />
              </button>
            </div>

            {/* Hackathon Info */}
            <motion.div
              key={hackathon.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h2 className="text-xl font-bold neon-text mb-1">
                {hackathon.title}
              </h2>
              <p className="text-xs text-gray-400 mb-1">{hackathon.date}</p>
              <p className="text-sm text-gray-300 mb-3">
                {hackathon.description}
              </p>

              <div className="flex justify-center gap-2 flex-wrap text-sm">
                {hackathon.github && (
                  <a
                    href={hackathon.github}
                    target="_blank"
                    className="flex items-center gap-1 px-2 py-1 bg-gray-800 rounded-md"
                  >
                    <ExternalLink size={14} /> GitHub
                  </a>
                )}
                {hackathon.uiux && (
                  <a
                    href={hackathon.uiux}
                    target="_blank"
                    className="flex items-center gap-1 px-2 py-1 bg-gray-800 rounded-md"
                  >
                    <ExternalLink size={14} /> UI/UX
                  </a>
                )}
                {hackathon.live && (
                  <a
                    href={hackathon.live}
                    target="_blank"
                    className="flex items-center gap-1 px-2 py-1 bg-gray-800 rounded-md"
                  >
                    <ExternalLink size={14} /> Live
                  </a>
                )}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}
