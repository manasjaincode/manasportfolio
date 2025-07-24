'use client';
import React from 'react';
import Image from 'next/image';
export default function ExperienceSection() {
  const experiences = [
    {
      role: "IT Trainee",
      company: "Arihant Capital Markets Ltd",
      description: "India's one of the largest stock broking firms.",
      duration: "Feb 2023 - May 2023",
      techIcons: [
        { name: "API Development", src: "/api.png" },
        { name: "Tailwind CSS", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
        { name: "React", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "Postman", src: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" },
        { name: "Cron Jobs", src: "/cron.png" },
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
        { name: "Node.js", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
        { name: "MongoDB", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
        { name: "GitHub", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
        { name: "Next.js", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
      ],
      logo: "/triggr.jpg",
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

      {/* Experience Cards - Two Columns */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 max-w-7xl mx-auto"> {/* Use grid for 2 columns, added gap */}
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="p-6 sm:p-8 text-white rounded-2xl border border-gray-700 bg-gray-900/20
                       flex flex-col items-center text-center {/* Center content within card */}
                       md:flex-row md:text-left md:items-start md:gap-6
                       relative" // Added relative for the divider line
          >
            {/* Conditional Divider Line */}
            {index === 0 && experiences.length > 1 && (
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-px bg-gray-600 h-4/5 hidden lg:block"></div>
            )}
            {/* Removed the `img` tag from here and replaced with `Image` from next/image for better performance and to address the warning. The `width` and `height` props are necessary for Next.js Image component. */}
            {/* Image Section - More Compact */}
            <div className="flex-shrink-0 w-32 h-32 md:w-24 md:h-24 lg:w-28 lg:h-28 mb-4 md:mb-0 md:mr-4"> {/* Compact image size */}
              <Image
                src={exp.logo}
                alt={exp.altText}
                width={300} // Smaller explicit width for compact display
                height={300} // Smaller explicit height for compact display
                className="w-full h-full object-cover rounded-lg shadow-md"
              />
            </div>

            {/* Text Content Section */}
            <div className="flex-grow">
              <div className="mb-3"> {/* Reduced margin bottom */}
                <h3 className="text-2xl md:text-2xl font-extrabold text-gray-300 mb-1">{exp.role}</h3> {/* Compact font size */}
                <p className="text-md md:text-lg text-gray-300 mb-0.5">{exp.company}</p> {/* Compact font size */}
                <p className="text-sm md:text-base text-gray-400 mb-2">{exp.description}</p> {/* Compact font size */}
                <p className="text-sm md:text-base text-gray-400 font-medium">{exp.duration}</p> {/* Compact font size */}
              </div>

              {/* Tech Icons - only render if there are any */}
              {exp.techIcons && exp.techIcons.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-3 justify-center md:justify-start"> {/* Reduced gap */}
                  {exp.techIcons.map((tech, idx) => (
                    <div
                      key={idx}
                      className="group relative flex flex-col items-center"
                    >
                      {/* Using Next.js Image component for tech icons too */}
                      <Image
                        src={tech.src}
                        alt={tech.name}
                        title={tech.name}
                        width={32} // Smaller tech icon size
                        height={32} // Smaller tech icon size
                        className="rounded-lg transition-transform duration-300 bg-white p-1 hover:scale-110"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}