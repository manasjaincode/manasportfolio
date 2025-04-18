import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';

const AboutSection = () => {
    return (
<div className="pt-6 bg-[#111]">
<div className=" flex flex-col md:flex-row md:space-x-6 p-4">
  <div className="flex-shrink-0 mb-4 md:mb-0">
    <img src="manasjainattriggrs.jpg" alt="Manas Jain" className="w-80 h-80 rounded-lg" />
  </div>
  <div className="flex-1">
    <h1 className="text-3xl font-bold text-white">Manas Jain <span className="text-muted">[he/him]</span></h1>
    <div className="flex space-x-4 mt-2 text-[#00ff9f]">
      <Link href="https://github.com/manasjaincode" passHref>
        <div className="text-muted cursor-pointer">
          <FontAwesomeIcon icon={faGithub} className="w-8 h-8" />
        </div>
      </Link>
      <Link href="https://www.linkedin.com/in/manas110/" passHref>
        <div className="text-muted cursor-pointer">
          <FontAwesomeIcon icon={faLinkedin} className="w-8 h-8" />
        </div>
      </Link>
     
      <Link href="https://www.instagram.com/manassjaiin" passHref>
        <div className="text-muted cursor-pointer">
          <FontAwesomeIcon icon={faInstagram} className="w-8 h-8" />
        </div>
      </Link>
    </div>
    <p className="mt-4 text-muted-foreground text-white" style={{ fontFamily: '"Lucida Console", monospace' }}>
      Hey there! I am a Fresher, aspiring Software Engineer and a Public Speaker, who relentlessly learns new tech daily and connects with large audiences on stage. Thrives on connecting with tech enthusiasts, tackling real-world problems, and propelling enduring success.
    </p>
    <div className="mt-4 text-[#00ff9f]">
      <span className="font-bold text-lg">Hire me.</span>
      <a
  // href="/Manas Jain's Resume.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block bg-primary text-primary-foreground px-4 py-2 rounded-lg ml-2 font-bold text-lg"
>
  Resume →
</a>

    </div>
    <div className="mt-6 flex flex-wrap gap-x-6 gap-y-6">
      <div className="relative inline-block">
        <div align="center">
        <div className="flex flex-wrap gap-x-4 gap-y-4">
  <div className="relative group">
    <img src="https://skillicons.dev/icons?i=c" alt="C" className="w-10 h-10 group-hover:scale-110 transition-transform duration-200" />
  </div>
  <div className="relative group">
    <img src="https://skillicons.dev/icons?i=cpp" alt="C++" className="w-10 h-10 group-hover:scale-110 transition-transform duration-200" />
  </div>
  <div className="relative group">
    <img src="https://skillicons.dev/icons?i=python" alt="Python" className="w-10 h-10 group-hover:scale-110 transition-transform duration-200" />
  </div>
  <div className="relative group">
    <img src="https://skillicons.dev/icons?i=javascript" alt="JavaScript" className="w-10 h-10 group-hover:scale-110 transition-transform duration-200" />
  </div>
  <div className="relative group">
    <img src="https://skillicons.dev/icons?i=html" alt="HTML" className="w-10 h-10 group-hover:scale-110 transition-transform duration-200" />
  </div>
  <div className="relative group">
    <img src="https://skillicons.dev/icons?i=css" alt="CSS" className="w-10 h-10 group-hover:scale-110 transition-transform duration-200" />
  </div>
  <div className="relative group">
    <img src="https://skillicons.dev/icons?i=tailwind" alt="Tailwind CSS" className="w-10 h-10 group-hover:scale-110 transition-transform duration-200" />
  </div>
  <div className="relative group">
    <img src="https://skillicons.dev/icons?i=figma" alt="Figma" className="w-10 h-10 group-hover:scale-110 transition-transform duration-200" />
  </div>
  <div className="relative group">
    <img src="https://skillicons.dev/icons?i=react" alt="React" className="w-10 h-10 group-hover:scale-110 transition-transform duration-200" />
  </div>
  <div className="relative group">
    <img src="https://skillicons.dev/icons?i=nodejs" alt="Node.js" className="w-10 h-10 group-hover:scale-110 transition-transform duration-200" />
  </div>
  <div className="relative group">
    <img src="https://skillicons.dev/icons?i=express" alt="Express.js" className="w-10 h-10 group-hover:scale-110 transition-transform duration-200" />
  </div>
  <div className="relative group">
    <img src="https://skillicons.dev/icons?i=nextjs" alt="Next.js" className="w-10 h-10 group-hover:scale-110 transition-transform duration-200" />
  </div>
  <div className="relative group">
    <img src="https://skillicons.dev/icons?i=mongodb" alt="MongoDB" className="w-10 h-10 group-hover:scale-110 transition-transform duration-200" />
  </div>
  <div className="relative group">
    <img src="https://skillicons.dev/icons?i=mysql" alt="MySQL" className="w-10 h-10 group-hover:scale-110 transition-transform duration-200" />
  </div>
  <div className="relative group">
    <img src="https://skillicons.dev/icons?i=github" alt="GitHub" className="w-10 h-10 group-hover:scale-110 transition-transform duration-200" />
  </div>
  <div className="relative group">
    <img src="https://skillicons.dev/icons?i=git" alt="Git" className="w-10 h-10 group-hover:scale-110 transition-transform duration-200" />
  </div>
  <div className="relative group">
    <img src="https://skillicons.dev/icons?i=postman" alt="Postman" className="w-10 h-10 group-hover:scale-110 transition-transform duration-200" />
  </div>
</div>
</div>

          </div>
        </div>
      </div>
    </div>
  </div>

)
};

export default AboutSection;

