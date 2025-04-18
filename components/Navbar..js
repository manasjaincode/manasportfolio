'use client';
import { useState } from 'react';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

export default function AboutPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#111] text-white px-6 py-12 overflow-hidden">
      {/* Navbar */}
      <nav className="flex justify-between items-center text-lg font-semibold mb-12 relative">
        <span className="text-[#00ff9f] text-3xl font-semibold">Code with Manas 🧑🏼‍💻 </span>

        <div className="hidden md:flex space-x-6">
          <a href="#" className="hover:text-[#00ff9f] transition">HOME</a>
          <a href="#" className="hover:text-[#00ff9f] transition">EXPERIENCE</a>
          <a href="#" className="hover:text-[#00ff9f] transition">ABOUT</a>
          <a href="#" className="hover:text-[#00ff9f] transition">PROJECTS</a>
          <a href="#" className="hover:text-[#00ff9f] transition">TECH ACHIEVEMENTS</a>
        </div>

        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={28} color="#00ff9f" /> : <Menu size={28} color="#00ff9f" />}
        </button>

        {menuOpen && (
          <div className="absolute top-full left-0 w-full bg-[#111] mt-4 flex flex-col items-center gap-4 py-4 z-50 md:hidden">
            <a href="#" className="hover:text-[#00ff9f] transition">HOME</a>
            <a href="#" className="hover:text-[#00ff9f] transition">EXPERIENCE</a>
            <a href="#" className="hover:text-[#00ff9f] transition">ABOUT</a>
            <a href="#" className="hover:text-[#00ff9f] transition">PROJECTS</a>
            <a href="#" className="hover:text-[#00ff9f] transition">TECH ACHIEVEMENTS</a>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-10 max-w-6xl mx-auto">
        {/* Image */}
        <div className="w-72 md:w-[22rem] flex justify-center items-center rounded-3xl overflow-hidden border-2 border-gray-950 shadow-lg">
          <Image
            src="/03.jpg"
            alt="Tech Developer Toy"
            width={352}
            height={352}
            className="object-contain w-full h-auto rounded-3xl"
          />
        </div>

        {/* Text Content with Line by Line Animation */}
        <div className="flex-1 flex items-center justify-center w-full px-4 text-center flex-col space-y-4">
          <motion.p
            className="text-[#00ff9f] italic text-lg md:text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            “Code articulates in logic and precision, while my voice echoes with passion and persuasion.”
          </motion.p>

          <motion.p
            className="text-white text-xl font-semibold"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            Manas Jain
          </motion.p>

          <motion.p
            className="text-gray-400 text-md md:text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
          >
            [Public Speaker, Coder]
          </motion.p>
        </div>
      </div>
    </div>
  );
}
