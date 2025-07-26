'use client';
import { useState } from 'react';
import Image from 'next/image';
import { Menu, X } from 'lucide-react'; // ArrowLeft, ArrowRight will be handled by Swiper's navigation
import { motion } from 'framer-motion';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow'; // Import Coverflow effect CSS
import 'swiper/css/pagination'; // For pagination dots if you want them
import 'swiper/css/navigation'; // For navigation arrows if you want them

// Import required modules
import { EffectCoverflow, Pagination, Navigation, Autoplay } from 'swiper/modules'; // Added Autoplay module


const images = [
  '/manascartoon1.png',
  '/manascartoon2.png',
  '/manascartoon3.png',
  '/manascartoon4final.png',
];

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
            <a href="#"  className="hover:text-[#00ff9f] transition">EXPERIENCE</a> {/* Corrected class here if it was malformed */}
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

          {/* Image Carousel with Swiper EffectCoverflow */}
          {/* Swiper container takes full width of its parent 'w-72 md:w-[22rem]' */}
          <div className="w-72 md:w-[22rem] flex flex-col items-center gap-4 relative">
            <Swiper
              effect={'coverflow'}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={'auto'} // Use 'auto' for responsive slides based on their content/size
              coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
              }}
              loop={true} // Enable looping
              autoplay={{ // Autoplay settings
                delay: 3000,
                disableOnInteraction: false, // Keep autoplaying even after user interaction
              }}
              pagination={{ clickable: true }} // Enable clickable pagination dots
              navigation={true} // Enable navigation arrows (default Swiper arrows will appear)
              modules={[EffectCoverflow, Pagination, Navigation, Autoplay]} // Include all necessary modules
              className="mySwiper w-full h-[350px] md:h-[450px]" // Swiper takes full width, set specific height
            >
              {images.map((src, index) => (
                <SwiperSlide
                  key={index}
                  className="flex justify-center items-center overflow-hidden rounded-3xl" // Ensure content is centered and overflow is hidden
                >
                  <Image
                    src={src}
                    alt={`Manas Cartoon ${index + 1}`}
                    // Use fill and a relative parent with defined dimensions for responsiveness within the slide
                    fill
                    className="object-contain rounded-3xl p-4" // Use p-4 for padding around the image, adjusts for smaller screens
                  />
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Text below the image cycler */}
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