'use client';
import { useState } from 'react';
import Image from 'next/image';
import { Menu, X } from 'lucide-react'; // Make sure to install lucide-react or use any other icon library

export default function AboutPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#111] text-white  px-6 py-12 overflow-hidden">
      {/* Navbar */}
      <nav className="flex justify-between items-center text-lg font-semibold mb-12 relative">
        <span className="text-[#00ff9f] text-3xl text-bold">Code with Manas 🧑🏼‍💻 </span>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <a href="#" className="hover:text-[#00ff9f] transition">HOME</a>
          <a href="#" className="hover:text-[#00ff9f] transition">EXPERIENCE</a>
          <a href="#" className="hover:text-[#00ff9f] transition">ABOUT</a>
          <a href="#" className="hover:text-[#00ff9f] transition">PROJECTS</a>
          <a href="#" className="hover:text-[#00ff9f] transition">TECH ACHIEVEMENTS</a>
        </div>

        {/* Hamburger Button - Mobile */}
        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
  <X size={28} color="#00ff9f" />
) : (
  <Menu size={28} color="#00ff9f" />
)}

        </button>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="absolute top-full left-0 w-full bg-[#111] mt-4 flex flex-col items-center gap-4 py-4 z-50 md:hidden">
            <a href="#" className="text-white hover:text-[#00ff9f] transition">HOME</a>
            <a href="#" className="text-white hover:text-[#00ff9f] transition">EXPERIENCE</a>
            <a href="#" className="text-white hover:text-[#00ff9f] transition">ABOUT</a>
            <a href="#" className="text-white hover:text-[#00ff9f] transition">PROJECTS</a>
            <a href="#" className="text-white hover:text-[#00ff9f] transition">TECH ACHIEVEMENTS</a>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row items-center justify-center lg:gap-0">
        {/* Image Section */}
        <div className="w-auto max-w-md flex justify-center">
          <Image
            src="/bestfit02.png"
            alt="Tech Developer Toy"
            width={580}
            height={580}
            className="rounded-lg"
          />
        </div>

        {/* Text Section */}
        <div className="flex-1 flex items-center justify-center w-full px-4 mt-8 lg:mt-0">
          <div className="max-w-xl w-full">
            <p className="text-[#00ff9f] text-xl md:text-2xl font-semibold mb-4 text-center md:text-left leading-snug">
              “Code articulates in logic and precision, while my voice echoes with passion and persuasion.”
            </p>
            <p className="text-xl font-semibold mb-2 text-center md:text-left">Manas Jain</p>
            <p className="text-[#a3a3a3] text-lg text-center md:text-left">
              [<span className="text-[#b3b3b3]">Software Developer</span>, <span className="text-[#b3b3b3]">Public Speaker</span>]
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
