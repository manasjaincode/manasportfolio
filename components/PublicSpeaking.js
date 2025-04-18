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

  const events = [
    {
      title: "Mega CEO Summit 2024",
      quote: "When CEOs listened, I spoke with vision.",
    },
    {
      title: "Tech Lecturer",
      quote: "Held 5+ lectures on AI and Development—not to instruct, but to inspire a generation of builders.",
    },
    {
      title: "HackN'dore 2024",
      quote: "Code on one side, crowd on the other. I bridged both.",
    },
    {
      title: "The Pulse of Gen Z",
      quote: "In a hall full of wisdom, I asked Dr. Bharat Rawat — a celebrated Cardiologist — how Gen Z can care for their hearts in a world that never slows down. The question wasn’t just about health, it was about hope.",
    },
    {
      title: "SaaS Without Strings",
      quote: "In front of curious minds in University, I unveiled my vision — a URL Shortener built from scratch with self-powered APIs, proving that innovation doesn’t need to lean on third parties.",
    },
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
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((event, index) => (
          <div
            key={index}
            className="bg-[#1a1a1a] hover:bg-[#00ff9f] hover:text-black transition-all duration-300 p-6 rounded-xl shadow-lg transform hover:-translate-y-1"
          >
            <h3 className="text-xl font-bold mb-2">{event.title}</h3>
            <p className="text-sm italic">{event.quote}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
