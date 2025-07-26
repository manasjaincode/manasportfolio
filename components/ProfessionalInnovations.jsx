'use client'; // Mark as client component for interactivity

import React, { useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

// Import required modules
import { EffectCards } from 'swiper/modules';

// Define your innovation data (only slide content and background color needed now)
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
            effect={'cards'}
            grabCursor={true}
            initialSlide={0}
            speed={500}
            loop={true}
            cardsEffect={{
              rotate: true,
              perSlideOffset: 8,
              perSlideRotate: 2,
            }}
            mousewheel={{ invert: false }}
            modules={[EffectCards]}
            className="mySwiper w-[280px] h-[330px] md:w-[350px] md:h-[500px] lg:w-[450px] lg:h-[550px]"
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          >
            {innovations.map((innovation, index) => (
              <SwiperSlide
                key={index}
                style={{ backgroundColor: innovation.slideBgColor }}
                // Added justify-center back, along with flex-col and items-center for full centering
                className="flex flex-col items-center justify-center rounded-xl font-bold text-white p-4"
              >
                {/* 1. Heading (Top, with specific top margin) */}
                <h2 className="text-xl md:text-2xl lg:text-3xl px-2 leading-tight text-center mt-6 mb-4">
                  {innovation.slideContent}
                </h2>

                {/* 2. Image Container (Larger and Centered) */}
                <div className="relative w-[150px] h-[150px] md:w-[220px] md:h-[220px] lg:w-[300px] lg:h-[300px]"> {/* Increased image sizes */}
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