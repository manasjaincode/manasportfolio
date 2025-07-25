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
    slideContent: 'Mayor Appreciation',
    slideBgColor: 'rgb(34,34,34)',
  },
  {
    slideContent: 'Public Speaking',
    slideBgColor: 'rgb(0, 140, 255)',
  },
  {
    slideContent: 'Tech Event Organizer',
    slideBgColor: 'rgb(10, 184, 111)',
  },
  {
    slideContent: 'Community Building',
    slideBgColor: 'rgb(211, 122, 7)',
  },
  // Add more innovation data as needed, only slideContent and slideBgColor are used now
];

export default function ProfessionalInnovations() {
  // No need for activeIndex state if right content is static, but keeping for Swiper's onSlideChange if needed later
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="professional-innovations-section" className="bg-black py-16 px-4 sm:px-6 lg:px-8 text-white min-h-screen flex flex-col justify-center items-center">
      <h2 className="text-[#00ff9f] text-2xl md:text-3xl lg:text-4xl font-bold uppercase mb-12 text-center">
        P R O F E S S I O N A L D E V E L O P M E N T & I N I T I A T I V E S
      </h2>

      <div className="flex flex-col lg:flex-row items-center lg:items-center justify-center gap-10 max-w-7xl mx-auto w-full"> {/* MODIFIED: lg:items-center for vertical alignment */}
        {/* Left Side: Swiper Carousel - MADE LARGER */}
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
            // MODIFIED: Increased Swiper size significantly for larger screens
            className="mySwiper w-[300px] h-[400px] md:w-[450px] md:h-[600px] lg:w-[550px] lg:h-[700px]" // Larger sizes
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          >
            {innovations.map((innovation, index) => (
              <SwiperSlide
                key={index}
                style={{ backgroundColor: innovation.slideBgColor }}
                className="flex items-center justify-center rounded-xl font-bold text-2xl text-white"
              >
                {innovation.slideContent}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Right Side: STATIC Content - Removed dynamic logic */}
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left p-4">
          <div className="bg-[#1a1a1a] p-6 rounded-xl shadow-lg border border-[#333] flex flex-col items-center lg:items-start">
            {/* Removed dynamic image */}
            {/* <Image
              src={innovations[activeIndex].rightContent.image}
              alt={innovations[activeIndex].rightContent.title}
              width={400}
              height={250}
              className="rounded-lg mb-4 object-cover w-full h-auto max-h-[250px]"
            /> */}
            <h3 className="text-[#00ff9f] text-2xl md:text-3xl font-bold mb-3">
              Innovating for a Better World.
            </h3>
            <p className="text-gray-300 text-base md:text-lg leading-relaxed">
              Using technology, we can empower the world with innovative, productive solutions and provide an easier life for everyone. This belief drives me to seize every opportunity to serve society and its people. My mind is constantly buzzing with crazy ideas, pushing the boundaries of what's possible!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}