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

  
  

</div>

    
  );
}
