import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#111] text-white px-6 py-12">
      {/* Navbar */}
      <nav className="flex flex-col md:flex-row justify-between items-center text-lg font-semibold mb-12 gap-4 md:gap-0">
        <span className="text-[#00ff9f]">Code with Manas</span>
        <div className="space-x-6 md:space-x-8 text-center">
          <a href="#" className="text-[#00ff9f]">HOME</a>
          <a href="#">EXPERIENCE</a>
          <a href="#">ABOUT</a>
          <a href="#">PROJECTS</a>
          <a href="#">TECH ACHIEVEMENTS</a>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-20">
        {/* Image Section */}
        <div className="w-full max-w-sm flex justify-center ">
          <Image
            src="/techdev.jpg"
            alt="Tech Developer Toy"
            width={500}
            height={500}
            className="rounded-lg"
          />
        </div>

        {/* Text Section */}
        <div className="flex-1 flex items-center justify-center w-full">
          <div className="max-w-2xl w-full">
          <p className="text-[#00ff9f] text-2xl md:text-3xl font-semibold leading-snug mb-4">
  &ldquo;Code articulates in logic and precision, while my voice echoes with passion and persuasion.&rdquo;:
</p>

            <p className="text-xl font-semibold mb-2">Manas Jain</p>
            <p className="text-[#a3a3a3] text-lg">
              [<span className="text-[#b3b3b3]">Software Developer</span> , <span className="text-[#b3b3b3]">Public Speaker</span>]
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
