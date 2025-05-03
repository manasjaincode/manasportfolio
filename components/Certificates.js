'use client';
import React from 'react';
import Slider from 'react-slick';
import Image from 'next/image';

export default function Certificates() {
  const certificateImages = [
    '/41.jpg', '/42.jpg', '/43.jpg',  '/45.jpg','/49.jpg','/48.jpg','/50.jpg'
    // Add more as needed
  ];

  const settings = {
    infinite: true,
    speed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0, // Continuous scroll
    cssEase: 'linear',
    swipe: true,
    draggable: true,
    arrows: false,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-black py-16 px-6 text-white">
      {/* Heading */}
      <div className="flex items-center justify-center gap-3 mb-10">
        <h2 className="text-[#00ff9f] text-[26px] md:text-[34px] font-bold">
          Certificates 📜
        </h2>
        {/* <Image
          src="/medal.png"
          alt="Medal Icon"
          width={36}
          height={36}
          className="w-[26px] md:w-[34px] h-[26px] md:h-[34px]"
        /> */}
      </div>

      {/* Carousel */}
      <div className="max-w-6xl mx-auto overflow-hidden">
        <Slider {...settings}>
          {certificateImages.map((src, index) => (
            <div key={index} className="px-2">
              <Image
                src={src}
                alt={`Certificate ${index + 1}`}
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
