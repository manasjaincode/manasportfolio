'use client';
import React from 'react';
import Image from 'next/image';

export default function IndustryProjects() {
  const industryProjects = [
    {
      title: 'Partner (Sub-Broker Program)',
      image: '/referral-partner.jpg', // Placeholder for now, replace with actual image
      description: (
        <>
          A referral-based partner module for ArihantCapital, enabling existing sub-brokers to onboard new business partners, driving B2B acquisition through commission-linked onboarding flows and real-time tracking APIs.
        </>
      ),
      link: "https://www.arihantcapital.com/partner-program",
      linkText: "View Program",
    },
    {
      title: 'Refer & Earn (Retail Referral)',
      image: '/refer-earn.jpg', // Placeholder for now, replace with actual image
      description: (
        <>
          A referral-based reward module to empower clients to invite new users and earn brokerage, boosting customer acquisition via trust-based referral loops and automated reward tracking.
        </>
      ),
      link: "https://www.arihantcapital.com/refer-and-earn",
      linkText: "View Module",
    },
    {
      title: 'FreshconIndia.com',
      image: '/freshconindia.jpg', // Placeholder for now, replace with actual image
      description: (
        <>
          An e-commerce platform for pre-cooked pantry staples, serving 1000+ users/month and supporting 50+ SKUs with a seamless shopping experience and responsive UI.
        </>
      ),
      link: "https://www.freshconindia.com/",
      linkText: "Visit Website",
    },
    {
      title: 'ShortCraze',
      image: '/shortcrazeui.jpg',
      description: (
        <>
          Scalable URL shortener with custom keywords, QR generation & global analytics.
        </>
      ),
      link: "https://shortcraze-3377.vercel.app/",
      linkText: "Live Link",
    },
    {
      title: 'ClubDAO',
      image: '/clubdaoui.jpg',
      description: (
        <>
          DAO prototype for fair, code-based student club governance with blockchain-inspired voting.
        </>
      ),
      link: "https://club-dao-delta.vercel.app/",
      linkText: "Live Link",
    },
    {
      title: 'Jal-Sanjeevni',
      image: '/jalsanjeevniui.jpg',
      description: (
        <>
          Tech-driven solution for Indore’s water management, recognized by Mayor Pushyamitra Bhargav.{' '}
          {/* FIX: Changed </br> to <br /> */}
          <br />
        </>
      ),
      link: "https://github.com/manasjaincode/ThreatTrackers",
      linkText: "GitHub Link",
    },
    {
      title: 'MarketTrails',
      image: '/marketrailsui.jpg',
      description: (
        <>
          Designed a UI/UX prototype to bridge the Industry-Academia gap.
        </>
      ),
      link: "https://manasjaincode.wixstudio.com/markettrails",
      linkText: "UI/UX Link",
    },
  ];

  return (
    <div className="bg-black py-12 px-4 sm:px-6 lg:px-8 text-white">
      {/* Heading */}
      <div className="flex items-center justify-center gap-2 mb-8 md:mb-10">
        <h2 className="text-[#00ff9f] text-2xl md:text-3xl lg:text-4xl font-bold uppercase">
          Industry Projects 🚀
        </h2>
      </div>

      {/* Intro Text */}
      <p className="text-center text-base md:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto mb-10 md:mb-12 leading-relaxed">
        Throughout my experience, I have consistently focused on projects that don't just exist as standalone tasks but truly impact a company's bottom line.
      </p>

      {/* Project Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
        {industryProjects.map((project, index) => (
          <div
            key={index}
            className="w-full p-4 sm:p-5 text-white rounded-xl
                       bg-transparent border border-[#333] shadow-md
                       hover:border-[#00ff9f] transition-all duration-300
                       flex flex-col h-full"
          >
            {/* Image */}
            <div className="mb-4 flex justify-center">
              <Image
                src={project.image}
                alt={project.title}
                width={500}
                height={300}
                className="rounded-lg w-full h-auto object-cover shadow-lg"
              />
            </div>

            {/* Content */}
            <div className="flex-grow flex flex-col">
              <h3 className="text-[#00ff9f] text-xl md:text-2xl font-extrabold mb-2">
                {project.title}
              </h3>
              <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-3 flex-grow">
                {project.description}
              </p>
              {project.link && (
                <div className="mt-auto">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-[#00ff9f] hover:text-white underline text-sm font-medium transition-colors duration-200"
                  >
                    {project.linkText || "Learn More"}
                    <svg className="ml-1 w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                  </a>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}