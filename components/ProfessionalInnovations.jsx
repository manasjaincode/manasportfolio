'use client'; // Mark as client component for interactivity

import React, { useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow'; // Import Coverflow effect CSS
import 'swiper/css/pagination'; // Coverflow often looks good with pagination

// Import required modules
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules'; // Added Pagination and Navigation for coverflow

// Define your innovation data
const innovations = [
  {
    slideContent: 'Indore Mayor Appreciation',
    slideBgColor: 'rgb(34,34,34)',
    imagePath: '/Mayor Appreciation.jpg', // Added image path
  },
  {
    slideContent: 'Public Speaking',
    slideBgColor: 'rgb(34,34,34)',
    imagePath: '/Public Speaking.jpg', // Added image path
  },
  {
    slideContent: 'Tech Event Organizer',
    slideBgColor: 'rgb(34,34,34)',
    imagePath: '/Tech Event Organizer.jpg', // Added image path
  },
  {
    slideContent: 'Community Building',
    slideBgColor: 'rgb(34,34,34)',
    imagePath: '/Community Building.jpg', // Added image path
  },
];

export default function ProfessionalInnovations() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="professional-innovations-section" className="bg-black py-16 px-4 sm:px-6 lg:px-8 text-white min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-10" style={{ color: "#00ff9f" }}>
        Professional Development & Initiatives
      </h1>

      <div className="flex flex-col lg:flex-row items-center lg:items-center justify-center gap-10 max-w-7xl mx-auto w-full">
        {/* Left Side: Swiper Carousel */}
        <div className="w-full lg:w-1/2 flex justify-center items-center mb-8 lg:mb-0">
          <Swiper
            // --- Changed to EffectCoverflow ---
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'} // 'auto' makes it responsive to the slide width
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            loop={true}
            speed={500}
            mousewheel={{ invert: false }}
            modules={[EffectCoverflow, Pagination, Navigation]} // Added Pagination, Navigation
            pagination={{ clickable: true }} // Enable clickable pagination dots
            navigation={true} // Enable default navigation arrows (optional, can be styled)
            // Increased Swiper overall dimensions to give more room for coverflow effect
            className="mySwiper w-[300px] h-[380px] md:w-[400px] md:h-[550px] lg:w-[500px] lg:h-[600px]"
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          >
            {innovations.map((innovation, index) => (
              <SwiperSlide
                key={index}
                style={{ backgroundColor: innovation.slideBgColor }}
                // Added flex-col, items-center, justify-center for full centering
                // Added overflow-hidden to prevent content spilling out during animation
                className="flex flex-col items-center justify-center rounded-xl font-bold text-white p-4 overflow-hidden"
              >
                {/* 1. Heading (Top, with responsive horizontal padding and explicit min-height for stability) */}
                <h2 className="text-xl md:text-2xl lg:text-3xl px-1 sm:px-2 leading-tight text-center mt-6 mb-4 min-h-[4rem] flex items-center justify-center"> {/* min-h-[4rem] for 64px to match h-16, ensuring consistent height */}
                  {innovation.slideContent}
                </h2>

                {/* 2. Image Container (Larger and Centered, responsive sizing and fixed aspect ratio for stability) */}
                {/* Ensure image container is smaller than SwiperSlide to leave room for text */}
                <div className="relative w-[180px] h-[180px] md:w-[250px] md:h-[250px] lg:w-[320px] lg:h-[320px] flex-shrink-0">
                  <Image
                    src={innovation.imagePath}
                    alt={innovation.slideContent}
                    fill
                    className="object-contain rounded-lg shadow-md"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Right Side: STATIC Content */}
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left p-4">
          <div className="bg-[#1a1a1a] p-6 rounded-xl shadow-lg border border-[#333] flex flex-col items-center lg:items-start">
            <h3 className="text-white text-2xl md:text-3xl font-bold mb-3">
              Innovating for a Better World.
            </h3>
            <p className="text-gray-300 text-base md:text-lg leading-relaxed">
              Using technology, we can empower the world with innovative, productive solutions and provide an easier life for everyone. This belief drives me to seize every opportunity to serve society and its people.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}