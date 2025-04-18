'use client';
import { useState } from 'react';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

export default function AboutPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#111] text-white overflow-hidden">
      {/* Fixed Navbar */}
      <nav className="fixed top-0 left-0 w-full backdrop-blur-md bg-black/30 text-lg font-semibold z-50 px-6 py-4 shadow-md border-b border-white/10">
  <div className="flex justify-between items-center">
    <span className="text-gray-400 text-3xl font-semibold">Code with Manas 🧑🏼‍💻</span>

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
  </div>

  {menuOpen && (
    <div className="mt-4 flex flex-col items-center gap-4 py-4 md:hidden">
      <a href="#" className="hover:text-[#00ff9f] transition">HOME</a>
      <a href="#" className="hover:text-[#00ff9f] transition">EXPERIENCE</a>
      <a href="#" className="hover:text-[#00ff9f] transition">ABOUT</a>
      <a href="#" className="hover:text-[#00ff9f] transition">PROJECTS</a>
      <a href="#" className="hover:text-[#00ff9f] transition">TECH ACHIEVEMENTS</a>
    </div>
  )}
</nav>


      {/* Space below navbar */}
      <div className="h-24 md:h-28"></div>

      {/* Main Content with blur effect on scroll */}
      <div className="relative z-10 px-6 py-12 backdrop-blur-sm">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-10 max-w-6xl mx-auto">
          {/* Text Content */}
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
              [Public Speaker, Software Developer]
            </motion.p>
          </div>

          {/* Image */}
          <div className="w-72 md:w-[22rem] flex justify-center items-center rounded-3xl overflow-hidden border-2 border-gray-950 shadow-lg">
            <Image
              src="/ruppee.png"
              alt="Tech Developer Toy"
              width={352}
              height={352}
              className="object-contain w-full h-auto rounded-3xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
