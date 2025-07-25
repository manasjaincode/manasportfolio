'use client';
import { useState } from 'react';
import Image from 'next/image';
import { Menu, X, ArrowLeft, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const images = [
  '/manascartoon1.png',
  '/manascartoon2.png',
  '/manascartoon3.png',
  '/manascartoon4final.png',
];

export default function AboutPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

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

          {/* Image Carousel with Arrows and Text Below */}
          <div className="flex flex-col items-center gap-4 relative w-72 md:w-[22rem]">
            {/* Inner div containing the image and arrows */}
            <div className="w-full h-auto flex justify-center items-center rounded-3xl overflow-hidden relative">
              <Image
                src={images[currentImageIndex]}
                alt="Manas Cartoon"
                width={352}
                height={352}
                className="object-contain w-full h-auto rounded-3xl px-8"
              />
              {/* Left Arrow - Position relative to parent 'w-full' div */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-3 text-white cursor-pointer z-10 transition-colors duration-200 hover:text-[#00ff9f]"
                aria-label="Previous Image"
              >
                <ArrowLeft size={28} />
              </button>
              {/* Right Arrow - Position relative to parent 'w-full' div */}
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-3 text-white cursor-pointer z-10 transition-colors duration-200 hover:text-[#00ff9f]"
                aria-label="Next Image"
              >
                <ArrowRight size={28} />
              </button>
            </div>
            {/* Text below the image cycler - MODIFIED: Added tracking-wider */}
            <p className="text-white text-lg md:text-xl font-bold mt-2 tracking-wider">
              Coffee | Code | Sleep
            </p>
          </div>

          {/* Text Content */}
          <div className="flex-1 flex items-center justify-center w-full px-4 text-center flex-col space-y-4">
            {/* Main Heading: Manas Jain */}
            <motion.h1
              className="text-white text-4xl md:text-5xl font-extrabold font-futura"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Manas Jain
            </motion.h1>

            {/* Subtitle: Public Speaker, Full-Stack Product Engineer */}
            <motion.p
              className="text-gray-400 text-lg md:text-xl font-semibold font-futura"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Public Speaker , Full-Stack Product Engineer
            </motion.p>
          </div>

        </div>
      </div>
    </div>
  );
}