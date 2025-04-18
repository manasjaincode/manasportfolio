'use client';
import React from 'react';
import { Briefcase } from 'lucide-react';

export default function ExperienceSection() {
  const experiences = [
    {
      role: "Full Stack Development Intern",
      company: "Triggrs Web Solutions - Indore",
      duration: "Jun 2024 - Aug 2024",
      techIcons: [
        {
          name: "React",
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        },
       
        ,
        {
          name: "Node.js",
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
        },
        {
          name: "MongoDB",
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
        },
        {
          name: "GitHub",
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
        },
        {
          name: "Next.js",
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
        },
      ],
      logo: "https://openui.fly.dev/openui/24x24.svg?text=⚙️",
    },
  ];

  return (
    <div className="bg-black py-16 px-6 text-white">
      {/* Section Heading */}
      <div className="flex items-center justify-center gap-3 mb-10">
        <h2 className="text-[#00ff9f] text-[26px] md:text-[34px] font-bold">
          Experience 🧩
        </h2>
      </div>

      {/* Responsive Card Section */}
      <div className="flex flex-col items-center">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="w-full max-w-6xl bg-[#1a1a1a] border border-[#333] rounded-2xl p-6 mb-6 hover:text-[#00ff9f] transition-all duration-300 shadow-lg transform hover:-translate-y-1"
          >
            <div className="flex items-center mb-4">
              <img src={exp.logo} alt="Company Logo" className="w-6 h-6 mr-3" />
              <h3 className="text-xl font-semibold">{exp.role}</h3>
            </div>
            <p className="text-sm text-gray-400">{exp.company}</p>
            <p className="text-sm text-gray-400">{exp.duration}</p>

            {/* Tech Icons */}
            <div className="mt-4 flex flex-wrap gap-4">
              {exp.techIcons.map((tech, idx) => (
                <img
                  key={idx}
                  src={tech.src}
                  alt={tech.name}
                  title={tech.name}
                  className="w-8 h-8 rounded-lg hover:scale-110 transition-transform duration-300 bg-white p-1"
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
