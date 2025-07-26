"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow"; // Import Coverflow effect CSS
import "swiper/css/pagination"; // For pagination dots
import "swiper/css/navigation"; // For navigation arrows (optional, if you want default ones)

// Import required modules
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules"; // Include Navigation if you want default arrows

const hackathons = [
  {
    title: "MoonHack'25",
    date: "March 2025",
    images: ["/MH1.jpg", "/MH2.jpg", "/MH3.jpg"],
  },
  {
    title: "Quasar 2.0",
    date: "January 2025",
    images: ["/quasar.jpg", "/M2.jpg", "/M3.jpg"],
  },
  {
    title: "Hack'Ndore",
    date: "July 2024",
    images: ["/mayor idr.jpg", "/hc.jpg", "/M4.jpg"],
  },
];

export default function HackathonSection() {
  // imageIndexes and handleNext/PrevImage are no longer needed with Swiper
  // const [imageIndexes, setImageIndexes] = useState(
  //   Array(hackathons.length).fill(0)
  // );

  // const handleNextImage = (hackathonIndex) => { ... };
  // const handlePrevImage = (hackathonIndex) => { ... };

  return (
    <div className=" bg-[#111] py-16">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-10" style={{ color: "#00ff9f" }}>
        Hackathons 📈
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto px-4">
        {hackathons.map((hackathon, i) => (
          <div
            key={i}
            className="bg-gray-900 p-4 rounded-xl shadow-lg flex flex-col items-center w-full max-w-[320px] mx-auto"
          >
            {/* Image Slider using Swiper */}
            <div className="relative w-full h-48 mb-3">
              <Swiper
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={"auto"} // Adjusts slides based on the slide's width
                coverflowEffect={{
                  rotate: 50,    // Degree of rotation
                  stretch: 0,    // Space between slides
                  depth: 100,    // Depth of the effect
                  modifier: 1,   // Effect multiplier
                  slideShadows: true, // Show shadows
                }}
                loop={true} // Infinite loop
                pagination={{ clickable: true }} // Pagination dots
                navigation={true} // Navigation arrows (default Swiper arrows)
                modules={[EffectCoverflow, Pagination, Navigation]} // Include necessary modules
                className="mySwiper w-full h-full" // Swiper fills its parent container
              >
                {hackathon.images.map((imageSrc, imgIdx) => (
                  <SwiperSlide key={imgIdx} className="flex justify-center items-center overflow-hidden rounded-lg">
                    <Image
                      src={imageSrc}
                      alt={`${hackathon.title} Image ${imgIdx + 1}`}
                      fill
                      className="object-cover rounded-lg" // object-cover to ensure image fills slide
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            {/* Hackathon Info */}
            <motion.div
              key={hackathon.title} // Re-using key from outer map for consistency, but not strictly needed inside SwiperSlide
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h2 className="text-xl font-bold text-gray-300 mb-1">
                {hackathon.title}
              </h2>
              <p className="text-xs text-gray-400 mb-1">{hackathon.date}</p>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}