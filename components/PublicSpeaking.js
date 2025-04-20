'use client';
import React from 'react';
import Slider from 'react-slick';
import Image from 'next/image';

export default function PublicSpeaking() {
  const images = [
    '/22.jpg', '/33.jpg', '/44.jpg', '/55.jpg', '/66.jpg',
    '/11.jpg',
    '/p1.jpg',
   
    
   
    // Add more images as needed
  ];

 

  const settings = {
    infinite: true,
    speed: 5000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: 'linear',
    pauseOnHover: false,
    swipe: false,
    draggable: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-black py-16 px-6 text-white">
      {/* Heading with Icon */}
      <div className="flex items-center justify-center gap-3 mb-10">
        <h2 className="text-[#00ff9f] text-[26px] md:text-[34px] font-bold">
          Public Speaking
        </h2>
        <Image
          src="/protest.png"
          alt="Protest Icon"
          width={36}
          height={36}
          className="w-[26px] md:w-[34px] h-[26px] md:h-[34px]"
        />
      </div>

      {/* Smooth Infinite Carousel */}
      <div className="max-w-6xl mx-auto mb-16 overflow-hidden">
        <Slider {...settings}>
          {images.map((src, index) => (
            <div key={index} className="px-2">
              <Image
                src={src}
                alt={`Public speaking ${index + 1}`}
                width={1000}
                height={600}
                className="rounded-xl object-cover h-64 w-full"
              />
            </div>
          ))}
        </Slider>
      </div>

      {/* Dynamic Event Highlights */}
      <div className="max-w-5xl mx-auto bg-[#1a1a1a] text-white p-8 rounded-xl shadow-lg flex flex-col md:flex-row items-center gap-8">
  {/* Trophy Image */}
  <div className="w-full md:w-1/3 flex justify-center">
    <img 
      src="/manastrophy.jpg" 
      alt="Manas Trophy" 
      className="rounded-2xl shadow-lg object-cover w-64 h-64 md:w-72 md:h-72"
    />
  </div>

  {/* Achievements List */}
  <div className="w-full md:w-2/3">
    <ul className="list-disc list-inside space-y-4 text-lg md:text-xl font-semibold leading-relaxed">
      <li>
        Hosted <span className="text-[#00ff9f] font-bold">5+ public tech events</span> with 
        <span className="text-[#00ff9f] font-bold"> 1,200+ attendees</span>, igniting minds with ideas that build and inspire.
      </li>
      <li>
        Mentored peers in <span className="text-[#00ff9f] font-bold">system design fundamentals</span>, including scalable URL shorteners—
        enhancing architectural thinking in <span className="text-[#00ff9f] font-bold">100+ students</span>.
      </li>
      <li>
        Twice a <span className="text-[#00ff9f] font-bold">hackathon finalist and team lead</span>, navigating high-pressure innovation with clarity and synergy.
      </li>
      <li>
        Recognized in <span className="text-[#00ff9f] font-bold">3+ MUN Conferences</span> for eloquence, diplomacy, and impactful resolution framing.
      </li>
    </ul>
  </div>
</div>

</div>

    
  );
}
