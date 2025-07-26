'use client';
import React from 'react';
import Image from 'next/image';

export default function IndustryProjects() {
  // Define primary industry projects (the first 3)
  const primaryIndustryProjects = [
    {
      title: 'Partner (Sub-Broker Program)',
      image: '/referpartner.jpg', // Updated image path
      description: (
        <>
          A referral-based partner module for ArihantCapital, enabling existing sub-brokers to onboard new business partners, driving B2B acquisition through commission-linked onboarding flows and real-time tracking APIs.
        </>
      ),
      link: "https://d1kppjhucx1n2q.cloudfront.net/", // Updated link for Partner
      linkText: "View Program",
    },
    {
      title: 'Refer & Earn (Retail Referral)',
      image: '/referearn.jpg', // Updated image path
      description: (
        <>
          A referral-based reward module to empower clients to invite new users and earn brokerage, boosting customer acquisition via trust-based referral loops and automated reward tracking.
        </>
      ),
      link: "https://refer.arihantcapital.com/", // Updated link for Refer & Earn
      linkText: "View Module",
    },
    {
      title: 'FreshconIndia.com',
      image: '/freshcon.jpg', // Updated image path
      description: (
        <>
          An e-commerce platform for pre-cooked pantry staples, serving 1000+ users/month and supporting 50+ SKUs with a seamless shopping experience and responsive UI.
        </>
      ),
      link: "https://www.freshconindia.com/", // Updated link for FreshconIndia
      linkText: "Visit Website",
    },
  ];

  // Define other projects (no changes here, keeping original content)
  const otherProjects = [
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
          Tech-driven solution for Indore Water Management, recognized by Mayor Pushyamitra Bhargav.
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

  // A reusable Card component for primary projects (larger size)
  const PrimaryProjectCard = ({ project }) => (
    <div
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
          width={600} // Consistent width for clarity
          height={350} // Consistent height
          className="rounded-lg w-full h-auto object-cover shadow-lg"
        />
      </div>

      {/* Content */}
      <div className="flex-grow flex flex-col">
        <h3 className="text-[#00ff9f] text-xl md:text-2xl font-bold mb-2">
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
  );

  // New reusable Card component for other projects (smaller, "butter cube" size)
  const OtherProjectCard = ({ project }) => (
    <div
      className="w-full p-2 text-white rounded-md
                   bg-transparent border border-[#444] shadow-sm
                   hover:border-[#00ff9f] transition-all duration-300
                   flex flex-col h-full"
    >
      {/* Image */}
      <div className="mb-2 flex justify-center">
        <Image
          src={project.image}
          alt={project.title}
          width={250} // Significantly smaller base width
          height={150} // Significantly smaller base height
          className="rounded-sm w-full h-auto object-cover shadow-xs"
          /* Minimal rounding, tiny shadow */
        />
      </div>

      {/* Content */}
      <div className="flex-grow flex flex-col">
        <h3 className="text-[#00ff9f] text-base font-bold mb-1">
          {project.title}
        </h3>
        <p className="text-gray-300 text-xs leading-tight mb-2 flex-grow">
          {project.description}
        </p>
        {project.link && (
          <div className="mt-auto">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-[#00ff9f] hover:text-white underline text-xs font-medium transition-colors duration-200"
            >
              {project.linkText || "Learn More"}
              <svg className="ml-0.5 w-2 h-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
            </a>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div className="bg-black py-12 px-4 sm:px-6 lg:px-8 text-white">
      {/* Industry Projects Section */}
      <div className="mb-20">
        {/* Heading */}
        <div className="flex items-center justify-center gap-2 mb-8 md:mb-10">
          <h2 className="text-[#00ff9f] text-2xl md:text-3xl lg:text-4xl font-bold uppercase">
            Industry Projects 🚀
          </h2>
        </div>

        {/* Intro Text */}
        <p className="text-center text-base md:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto mb-10 md:mb-12 leading-relaxed">
          Throughout my experience, I have consistently focused on projects that truly impact the bottom line of a company. 
        </p>

        {/* Primary Industry Project Cards (3 per row on larger screens, full width utilization) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 max-w-7xl mx-auto">
          {primaryIndustryProjects.map((project, index) => (
            <PrimaryProjectCard key={index} project={project} />
          ))}
        </div>
      </div>

      {/* Other Projects Section */}
      <div>
        {/* Heading */}
        <div className="flex items-center justify-center gap-2 mb-8 md:mb-10">
          <h2 className="text-[#00ff9f] text-2xl md:text-3xl lg:text-4xl font-bold uppercase">
            Other Projects 💡
          </h2>
        </div>

        {/* Other Project Cards (All 4 in one row on large screens, increased space) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-7xl mx-auto">
          {otherProjects.map((project, index) => (
            <OtherProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}