import React from 'react';

export default function ExperienceSection() {
  return (
    <div className="bg-black p-4 rounded-lg mb-4 shadow-md border border-gray-700">
  <div className="flex items-center">
    <img src="https://openui.fly.dev/openui/24x24.svg?text=⚙️" alt="Triggrs Web Solutions Logo" className="mr-2" />
    <h3 className="font-semibold text-white">Full Stack Development Intern</h3>
  </div>
  <p className="text-sm text-gray-400">Triggrs Web Solutions - Indore</p>
  <p className="text-sm text-gray-400">Jun 2024 - Aug 2024</p>
  <p className="mt-2 text-white">hands on: 
    <span className="bg-gray-800 text-white px-2 rounded ml-1">React</span>
    <span className="bg-gray-800 text-white px-2 rounded ml-1">Node.js</span>
    <span className="bg-gray-800 text-white px-2 rounded ml-1">MongoDB</span>
    <span className="bg-gray-800 text-white px-2 rounded ml-1">Tailwind CSS</span>
  </p>
</div>

  );
}
