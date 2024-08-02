import React, { useState } from 'react';

const ProjectSection = () => {
  const [showAll, setShowAll] = useState(false);

  const projects = [
    {
      id: 1,
      title: 'Project Title 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis libero in nunc congue, sit amet ultricies libero suscipit.',
      image: 'thumbnail1.png',
    },
    {
      id: 2,
      title: 'Project Title 2',
      description: 'Curabitur id massa sed libero cursus tincidunt. Proin vitae nisi ut nunc cursus consequat.',
      image: 'thumbnail2.png',
    },
    {
      id: 3,
      title: 'Project Title 3',
      description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
      image: 'thumbnail3.png',
    },
    // Add more projects as needed
  ];

  return (
    <div id='projects' className="p-8 pt-28 bg-slate-800">
      <h2 className="text-2xl font-bold text-white mb-4">Tech Projects</h2>
      <div className="bg-slate-900 p-6 text-white rounded-lg shadow-md">
        {projects.slice(0, showAll ? projects.length : 1).map((project) => (
          <div key={project.id} className="bg-background text-foreground p-6 rounded-lg shadow-md mb-4 flex flex-col md:flex-row md:items-center">
            <img
              src={project.image}
              alt={`Project Thumbnail ${project.id}`}
              className="w-full md:w-1/4 h-auto mb-4 md:mb-0 md:mr-6 rounded-lg"
            />
            <div className="w-full md:w-3/4">
              <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
              <p className="text-base mb-4">{project.description}</p>
              <a href="#" className="bg-primary text-primary-foreground px-3 py-1.5 rounded-md hover:bg-primary/80 transition-colors duration-300">View Project-{`>`} </a>
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
