'use client';
import React from 'react';
import { Briefcase } from 'lucide-react';

export default function ExperienceSection() {
  const experiences = [
    {
      role: "IT Trainee",
      company: "Arihant Capital Markets Ltd",
      description: "India's one of the largest stock broking firms.",
      duration: "Feb 2023 - May 2023",
      techIcons: [
        { name: "API Development", src: "https://cdn-icons-png.flaticon.com/512/3503/3503893.png" }, // API Icon from Flaticon
        { name: "Tailwind CSS", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
        { name: "React", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "Postman", src: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" },
        { name: "WebSockets", src: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/WebSocket_Logo.svg/1200px-WebSocket_Logo.svg.png" },
        { name: "Cron Jobs", src: "https://www.svgrepo.com/show/353723/cron.svg" },
      ],
      logo: "/acml.jpg",
      altText: "My photo at Arihant Capital Markets Ltd."
    },
    {
      role: "Full Stack Development Intern",
      company: "Triggrs Web Solutions - Indore",
      description: "A software development firm empowering businesses with modern IT solutions.",
      duration: "Jun 2024 - Aug 2024",
      techIcons: [
        { name: "React", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "Node.js", "src": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
        { name: "MongoDB", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
        { name: "GitHub", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
        { name: "Next.js", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
      ],
      logo: "https://via.placeholder.com/600x400?text=Triggrs+Web+Solutions+Logo",
      altText: "Triggrs Web Solutions company logo."
    },
  ];

  return (
    <div className="bg-black py-16 px-4 sm:px-8 lg:px-12 text-white">
      {/* Section Heading */}
      <div className="flex items-center justify-center gap-3 mb-12">
        <h2 className="text-[#00ff9f] text-3xl md:text-4xl lg:text-5xl font-bold">
          Experience 🧩
        </h2>
      </div>

      {/* Experience Cards - Each covering full width */}
      <div className="flex flex-col gap-16">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="w-full p-6 sm:p-8 md:p-10 lg:p-12 text-white rounded-2xl"
          >
            <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
              {/* Image Section - Large and Responsive */}
              <div className="flex-shrink-0 w-full md:w-2/5 lg:w-1/3 xl:w-1/4">
                <img
                  src={exp.logo}
                  alt={exp.altText}
                  className="w-full h-auto object-cover rounded-lg shadow-2xl"
                />
              </div>

              {/* Text Content Section */}
              <div className="flex-grow text-center md:text-left">
                <div className="mb-4">
                  <h3 className="text-3xl md:text-4xl font-extrabold text-[#00ff9f] mb-2">{exp.role}</h3>
                  <p className="text-lg md:text-xl text-gray-300 mb-1">{exp.company}</p>
                  <p className="text-base md:text-lg text-gray-400 mb-3">{exp.description}</p>
                  <p className="text-base md:text-lg text-gray-400 font-medium">{exp.duration}</p>
                </div>

                {/* Tech Icons - only render if there are any */}
                {exp.techIcons && exp.techIcons.length > 0 && (
                  <div className="mt-6 flex flex-wrap gap-5 justify-center md:justify-start">
                    {exp.techIcons.map((tech, idx) => (
                      <div
                        key={idx}
                        className="group relative flex flex-col items-center"
                      >
                        <img
                          src={tech.src}
                          alt={tech.name}
                          title={tech.name} // This attribute is essential for the default browser tooltip
                          className="w-10 h-10 rounded-lg transition-transform duration-300 bg-white p-1 hover:scale-110"
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}