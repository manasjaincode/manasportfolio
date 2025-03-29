import Link from 'next/link';
import React, { useState } from 'react';



const ResponsiveNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div id='home' className="bg-background text-foreground bg-black">
     <nav className="bg-slate-900 fixed top-0 left-0 w-full z-50 p-4">
      <div className="flex items-center justify-between">
        <div className="text-white text-2xl font-bold">MANAS JAIN</div>
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
        <span className="text-white text-lg hover:bg-slate-700 transition-colors duration-300 block py-2 px-4 rounded">Home</span>
      </Link>
      <Link href="#experience" passHref>
        <span className="text-white text-lg hover:bg-slate-700 transition-colors duration-300 block py-2 px-4 rounded">Experience</span>
      </Link>
      <Link href="#projects" passHref>
        <span className="text-white text-lg hover:bg-slate-700 transition-colors duration-300 block py-2 px-4 rounded">Projects</span>
      </Link>
      <Link href="#connect" passHref>
        <span className="text-white text-lg hover:bg-slate-700 transition-colors duration-300 block py-2 px-4 rounded">Connect</span>
      </Link>
      <Link href="#featured" passHref>
        <span className="text-white text-lg hover:bg-slate-700 transition-colors duration-300 block py-2 px-4 rounded">Featured</span>
      </Link>
    </div>
    </nav>
      <div>
        <div className="pt-32 p-6">
          <div className="relative bg-black text-slate-400 p-12 rounded-lg flex flex-col items-center">
            <div className="flex md:flex-row flex-col-reverse justify-center items-center">
              <div className="flex flex-col items-center mb-8 md:mb-0 md:mr-8">
                <p className="text-2xl italic font-serif text-center mb-4">
                &quot;Code articulates in logic and precision, while my voice echoes with passion and persuasion.&quot;
                </p>
                <div className="text-center mb-4 text-slate-400 ">
                  <p className="text-2xl font-semibold ">Manas Jain</p>
                  <p className="text-2xl">[Public Speaker, Software Developer]</p>
                </div>
              </div>
              <img src="mpk.jpg" alt="Profile" className="w-full max-w-xs md:max-w-sm lg:max-w-md mb-4 bg-cover rounded-lg" />            </div>
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default ResponsiveNavigation;
