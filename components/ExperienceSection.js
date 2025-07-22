'use client';
import React, { useRef, useEffect, useState } from 'react';
import { Briefcase } from 'lucide-react';

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
        { name: "WebSockets", src: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/WebSocket_Logo.svg/1200px-WebSocket_Logo.svg.png" },
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
      logo: "https://via.placeholder.com/600x400?text=Triggrs+Web+Solutions+Logo",
      altText: "Triggrs Web Solutions company logo."
    },
  ];

  // This ref will be used to track the intersection of each card for darkening
  const cardRefs = useRef([]);

  // State to manage the opacity of cards for the darkening effect
  // Maps index to opacity (0 to 1)
  const [cardOpacities, setCardOpacities] = useState({});

  useEffect(() => {
    const observerOptions = {
      root: null, // relative to the viewport
      rootMargin: '0px',
      // Play with threshold to control when darkening starts/ends
      // A single threshold (e.g., 0.5) will make it snap.
      // Multiple thresholds (e.g., [0, 0.25, 0.5, 0.75, 1]) would allow more granular control
      // For a smooth darken, you often need to calculate based on `intersectionRatio`
      // Let's use a simpler approach here that sets it darker once past a certain point
      threshold: Array.from({ length: 101 }, (v, i) => i / 100), // Check at 1% increments
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const index = parseInt(entry.target.dataset.index);
        let newOpacity = 1; // Default to full opacity

        if (entry.isIntersecting) {
          // If the card is in view, its opacity depends on how much it's intersecting
          // As it scrolls out (intersectionRatio goes down), it darkens
          // As it scrolls in (intersectionRatio goes up), it brightens
          newOpacity = Math.max(0.3, entry.intersectionRatio); // Darken to 30%
        } else if (entry.boundingClientRect.top < 0) {
          // If the card is completely out of view (above the viewport), it's dark
          newOpacity = 0.3;
        } else {
          // If the card is completely below the viewport, it's full opacity (waiting to come into view)
          newOpacity = 1;
        }
        setCardOpacities(prev => ({ ...prev, [index]: newOpacity }));
      });
    }, observerOptions);

    cardRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => {
      cardRefs.current.forEach(ref => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <div className="bg-black py-16 px-4 sm:px-8 lg:px-12 text-white overflow-hidden"> {/* Added overflow-hidden to prevent horizontal scroll issues */}
      {/* Section Heading */}
      <div className="flex items-center justify-center gap-3 mb-12 sticky top-0 z-30 bg-black py-4">
        <h2 className="text-[#00ff9f] text-3xl md:text-4xl lg:text-5xl font-bold">
          Experience 🧩
        </h2>
      </div>

      {/* Main container for sticky cards */}
      <div className="relative h-[200vh]"> {/* Increased height to allow enough scroll space for overlapping */}
        {experiences.map((exp, index) => {
          // Calculate z-index to ensure later cards appear on top
          const zIndex = 20 - index; 
          const currentOpacity = typeof cardOpacities[index] === 'number' ? cardOpacities[index] : 1;

          return (
            <div
              key={index}
              ref={el => cardRefs.current[index] = el}
              data-index={index}
              className="
                sticky top-20 md:top-24 w-full h-full flex items-center justify-center
                transition-opacity duration-500 ease-in-out
              "
              style={{
                zIndex: zIndex,
                opacity: currentOpacity,
                // Apply a slight transform to make it look like it's sliding over
                // This is optional, but adds to the effect
                transform: `scale(${1 - index * 0.02})` // Makes later cards slightly smaller behind
              }}
            >
              <div
                className="
                  w-full max-w-7xl mx-auto p-6 sm:p-8 md:p-10 lg:p-12 text-white rounded-2xl
                  bg-[#1a1a1a] bg-opacity-80 border border-[#333] shadow-lg
                "
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

                    {/* Tech Icons */}
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
                              title={tech.name}
                              className="w-10 h-10 rounded-lg transition-transform duration-300 bg-white p-1 hover:scale-110"
                            />
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}