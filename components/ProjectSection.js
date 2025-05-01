'use client';
import React from 'react';
import Image from 'next/image';

export default function Projects() {
  const projects = [
    {
      title: 'ShortCraze',
      image: '/shortcrazeui.jpg',
      description: (
        <>
          Scalable URL shortener with custom keywords, QR generation & global analytics. <br />
          <a href="https://shortcraze-3377.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-[#00ff9f] underline">
            Live Link
          </a>
        </>
      ),
    },
    {
      title: 'ClubDAO',
      image: '/clubdaoui.jpg',
      description: (
        <>
          DAO prototype for fair, code-based student club governance with blockchain-inspired voting. <br />
          <a href="https://club-dao-delta.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-[#00ff9f] underline">
            Live Link
          </a>
        </>
      ),
    },
    {
      title: 'Jal-Sanjeevni',
      image: '/jalsanjeevniui.jpg',
      description: (
        <>
          Tech-driven solution for Indore’s water management, recognized by Mayor Pushyamitra Bhargav. <br />
          <a href="https://github.com/manasjaincode/ThreatTrackers" target="_blank" rel="noopener noreferrer" className="text-[#00ff9f] underline">
            GitHub Link
          </a>
        </>
      ),
    },
    {
      title: 'MarketTrails',
      image: '/marketrailsui.jpg',
      description: (
        <>
          Designed a UI/UX prototype to bridge the Industry-Academia gap. <br />
          <a href="https://manasjaincode.wixstudio.com/markettrails" target="_blank" rel="noopener noreferrer" className="text-[#00ff9f] underline">
            UI/UX Link
          </a>
        </>
      ),
    },
  ];

  return (
    <div className="bg-black py-16 px-6 text-white">
      {/* Heading */}
      <div className="flex items-center justify-center gap-3 mb-10">
        <h2 className="text-[#00ff9f] text-[26px] md:text-[34px] font-bold uppercase">
          My Projects 👽
        </h2>
        {/* <Image
          src="/project-icon.png"
          alt="Project Icon"
          width={36}
          height={36}
          className="w-[26px] md:w-[34px] h-[26px] md:h-[34px]"
        /> */}
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-[#1a1a1a] p-5 rounded-2xl shadow-md hover:scale-105 transition-transform duration-300"
          >
            <Image
              src={project.image}
              alt={project.title}
              width={600}
              height={400}
              className="rounded-xl w-full h-56 object-cover"
            />
            <h3 className="text-[#00ff9f] mt-4 text-xl font-bold">
              {project.title}
            </h3>
            <p className="text-gray-300 mt-2 text-md leading-relaxed">
              {project.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
