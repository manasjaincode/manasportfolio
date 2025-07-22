'use client';
import React, { useState } from 'react';
import { Briefcase, X } from 'lucide-react'; // X icon for closing the modal

// Simple Modal Component
const ImageModal = ({ src, onClose }) => {
  if (!src) return null; // Don't render if no image source is provided

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
      onClick={onClose} // Close modal when clicking outside the image
    >
      <div 
        className="relative bg-[#1a1a1a] p-4 rounded-lg shadow-xl max-w-3xl max-h-[90vh] overflow-hidden flex flex-col items-center justify-center"
        onClick={(e) => e.stopPropagation()} // Prevent modal from closing when clicking inside content
      >
        <button 
          onClick={onClose} 
          className="absolute top-3 right-3 text-white hover:text-[#00ff9f] p-2 rounded-full bg-gray-700 hover:bg-gray-600 transition-colors"
          aria-label="Close modal"
        >
          <X size={24} />
        </button>
        <img 
          src={src} 
          alt="Enlarged view" 
          className="max-w-full max-h-[80vh] object-contain rounded-md" 
        />
      </div>
    </div>
  );
};


export default function ExperienceSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageSrc, setCurrentImageSrc] = useState('');

  const openModal = (src) => {
    setCurrentImageSrc(src);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentImageSrc('');
  };

  const experiences = [
    {
      role: "IT Trainee",
      company: "Arihant Capital Markets Ltd",
      description: "India's one of the largest stock broking firms.",
      duration: "Feb 2023 - May 2023", 
      techIcons: [],
      logo: "/acml.jpg", // Make sure 'acml.jpg' is in your 'public' folder
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
      logo: "https://via.placeholder.com/150x150?text=FSD+Intern", 
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
      <div className="flex flex-col md:flex-row items-stretch justify-center gap-6">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="w-full md:w-5/12 bg-[#1a1a1a] border border-[#333] rounded-2xl p-6 mb-6 md:mb-0 hover:text-[#00ff9f] transition-all duration-300 shadow-lg transform hover:-translate-y-1 flex flex-col justify-between"
          >
            {/* Image above content */}
            <div className="mb-6 flex justify-center">
              <img 
                src={exp.logo} 
                alt={exp.role === "IT Trainee" ? "My photo at Arihant Capital" : "Company Logo"} 
                className="w-32 h-32 md:w-40 md:h-40 object-cover rounded-full border-2 border-[#00ff9f] shadow-lg cursor-pointer transition-transform duration-200 hover:scale-105" // Added cursor-pointer and hover effect
                onClick={() => openModal(exp.logo)} // Open modal on click
              />
            </div>
            
            <div> {/* Wrapper for text content */}
              <div className="flex items-center mb-2">
                <h3 className="text-xl font-semibold">{exp.role}</h3>
              </div>
              <p className="text-sm text-gray-400">{exp.company}</p>
              <p className="text-sm text-gray-400 mb-2">{exp.description}</p>
              <p className="text-sm text-gray-400">{exp.duration}</p>
            </div>

            {/* Tech Icons - only render if there are any */}
            {exp.techIcons && exp.techIcons.length > 0 && (
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
            )}
          </div>
        ))}
      </div>

      {/* Image Modal Component */}
      {isModalOpen && <ImageModal src={currentImageSrc} onClose={closeModal} />}
    </div>
  );
}