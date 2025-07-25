// src/components/FloatingSectionMenu.js

'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Home, Briefcase, Info, Folder, Award, Plus, Lightbulb } from 'lucide-react'; // Added Lightbulb icon for innovations

const sections = [
  { name: 'HOME', id: 'home-section', icon: Home },
  { name: 'ABOUT', id: 'about-section', icon: Info },
  { name: 'EXPERIENCE', id: 'experience-section', icon: Briefcase },
  { name: 'PROJECTS', id: 'projects-section', icon: Folder },
  { name: 'HACKATHONS', id: 'hackathons-section', icon: Award },
  { name: 'PUBLIC SPEAKING', id: 'public-speaking-section', icon: Award },
  // NEW: Add Professional Innovations section
  { name: 'INNOVATIONS', id: 'professional-innovations-section', icon: Lightbulb }, // Using Lightbulb icon
  { name: 'CERTIFICATES', id: 'certificates-section', icon: Award },
];

// ... (rest of the FloatingSectionMenu component code remains the same)
// Framer Motion variants for animation
const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function FloatingSectionMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsOpen(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {isOpen && (
        <motion.div
          className="bg-black/70 backdrop-blur-md p-3 rounded-xl shadow-lg flex flex-col gap-2 border border-white/10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          {sections.map((section) => (
            <motion.button
              key={section.id}
              className="flex items-center gap-2 px-4 py-2 text-white text-md font-semibold rounded-lg hover:bg-[#00ff9f] hover:text-black transition-colors duration-200 w-full justify-end"
              onClick={() => scrollToSection(section.id)}
              variants={itemVariants}
            >
              {section.icon && <section.icon size={20} />}
              {section.name}
            </motion.button>
          ))}
        </motion.div>
      )}

      <motion.button
        className="w-14 h-14 rounded-full bg-[#00ff9f] text-black flex items-center justify-center shadow-lg hover:scale-105 transition-transform duration-200 focus:outline-none focus:ring-2 focus:ring-[#00ff9f] focus:ring-offset-2 focus:ring-offset-[#111]"
        onClick={() => setIsOpen(!isOpen)}
        whileTap={{ scale: 0.95 }}
        animate={{ rotate: isOpen ? 45 : 0 }}
      >
        <Plus size={32} />
      </motion.button>
    </div>
  );
}