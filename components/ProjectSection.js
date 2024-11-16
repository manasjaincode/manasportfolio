import React, { useState } from 'react';
import Link from 'next/link'; // Import Link from Next.js

const ProjectSection = () => {
  const [showAll, setShowAll] = useState(false);

  const projects = [
    {
      id: 1,
      title: 'ShortCraze',
      description:
        '✨More than Just your Average URL SHORTNER. Revolutionize your online experience with ShortCraze! Transform long, cumbersome URLs into sleek, shareable links in just seconds. Add a personal touch with custom keywords, track your link’s performance effortlessly with advanced analytics, and enjoy peace of mind knowing your data is always secure. Join the craze today and simplify your web journey—because every link tells your story. Start using ShortCraze now!',
      image: 'WhatsApp Image 2024-11-16 at 21.33.29_96e86e95.jpg',
      link: 'https://shortcraze-3377.vercel.app/', // Link to project page
    },
    {
      id: 2,
      title: 'My Portfolio',
      description:
        'Know more about my Professional Journey ',
      image: 'thumbnail1.png',
      link: 'https://manasportfolio-rbry.vercel.app/', // Link to portfolio page
    },
    {
      id: 3,
      title: 'Project Title 3',
      description:
        'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
      image: 'thumbnail3.png',
      link: '/project3', // Link to project 3 page
    },
    // Add more projects as needed
  ];

  return (
    <div id="projects" className="p-8 pt-28 bg-slate-800">
      <h2 className="text-2xl font-bold text-white mb-4">Tech Projects</h2>
      <div className="bg-slate-900 p-6 text-white rounded-lg shadow-md">
        {projects.slice(0, showAll ? projects.length : 1).map((project) => (
          <div
            key={project.id}
            className="bg-background text-foreground p-6 rounded-lg shadow-md mb-4 flex flex-col md:flex-row md:items-center"
          >
            <img
              src={project.image}
              alt={`Project Thumbnail ${project.id}`}
              className="w-full md:w-1/4 h-auto mb-4 md:mb-0 md:mr-6 rounded-lg"
            />
            <div className="w-full md:w-3/4">
              <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
              <p className="text-base mb-4">{project.description}</p>
              <Link href={project.link}>
                <div className="bg-primary text-primary-foreground px-3 py-1.5 rounded-md hover:bg-primary/80 transition-colors duration-300 cursor-pointer">
                  View Project-{`>`}
                </div>
              </Link>
            </div>
          </div>
        ))}
        <button
          onClick={() => setShowAll(!showAll)}
          className="mt-4 bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/80 transition-colors duration-300"
        >
          {showAll ? 'Show Less' : 'Show More Projects'}
        </button>
      </div>
    </div>
  );
};

export default ProjectSection;
