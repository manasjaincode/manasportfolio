import Link from 'next/link';
import React, { useState } from 'react';

const ResponsiveNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div id='home' className="bg-background text-foreground bg-black">
      <nav className="bg-slate-900 fixed top-0 left-0 w-full z-50 p-4">
        <div className="flex items-center justify-between">
          <div className="text-gray-400 text-2xl font-bold">MANAS JAIN</div>
          <button
            className="text-white text-2xl md:hidden focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? '✖️' : '☰'}
          </button>
        </div>
        <div className={`md:flex md:items-center md:space-x-4 mt-4 md:mt-0 ${isOpen ? 'block' : 'hidden'}`}>
          <Link href="#home" passHref>
            <span className="text-gray-300 text-lg hover:bg-slate-700 transition-colors duration-300 block py-2 px-4 rounded">Home</span>
          </Link>
          <Link href="#experience" passHref>
            <span className="text-gray-300 text-lg hover:bg-slate-700 transition-colors duration-300 block py-2 px-4 rounded">Experience</span>
          </Link>
          <Link href="#projects" passHref>
            <span className="text-gray-300 text-lg hover:bg-slate-700 transition-colors duration-300 block py-2 px-4 rounded">Projects</span>
          </Link>
          <Link href="#connect" passHref>
            <span className="text-gray-300 text-lg hover:bg-slate-700 transition-colors duration-300 block py-2 px-4 rounded">Connect</span>
          </Link>
          <Link href="#featured" passHref>
            <span className="text-gray-300 text-lg hover:bg-slate-700 transition-colors duration-300 block py-2 px-4 rounded">Featured</span>
          </Link>
        </div>
      </nav>

      <div className="pt-32 p-6">
  <div className="relative bg-black text-slate-400 p-6 md:p-12 rounded-lg flex flex-col md:flex-row items-center md:items-start md:justify-center space-y-8 md:space-y-0 md:space-x-8">

    {/* Image Section */}
    <div className="w-full md:w-auto flex justify-between">
      <img
        src="/prompt2.jpg"
        alt="Profile"
        className="w-full max-w-sm sm:max-w-md md:max-w-sm lg:max-w-md rounded-lg"
      />
    </div>

    {/* Text Section */}
    <div className="text-center md:text-left flex flex-col justify-center items-center md:items-start md:mt-10">
      <p className="text-2xl italic font-serif mb-4 max-w-lg text-sky-200">
        &quot;Code articulates in logic and precision, while my voice echoes with passion and persuasion.&quot;
      </p>
      <p className="text-xl text-slate-300 font-semibold">Manas Jain</p>
      <p className="text-md text-slate-400">[Public Speaker, Software Developer]</p>
    </div>

  </div>
</div>
    </div>
  );
};

export default ResponsiveNavigation;
