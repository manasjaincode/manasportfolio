import React from 'react';

export default function ExperienceSection() {
  return (
    <div id="experience" className="pt-28 p-6 bg-background bg-slate-800 text-foreground"> {/* Adjust pt-24 based on your navbar height */}
      <h2 className="text-2xl font-bold text-white mb-4">Experience</h2>
      <p className="text-muted-foreground text-xl text-white mb-6" style={{ fontFamily: '"Lucida Console", monospace' }}> I work for places where we can develop New products and address Real-World Challenges, not merely replicate existing solutions.</p>
      <div className="border-l-2 border-muted-foreground pl-4">
        <div className="bg-blue-100 p-4 rounded-lg mb-4">
          <div className="flex items-center">
            <img src="https://openui.fly.dev/openui/24x24.svg?text=🔵" alt="Intelicus Logo" className="mr-2" />
            <h3 className="font-semibold">Software intern</h3>
          </div>
          <p className="text-sm text-muted-foreground">ABCD - Indore</p>
          <p className="text-sm">Jul 2024 - Present</p>
          <p className="mt-2">hands on: <span className="bg-primary text-primary-foreground px-2 rounded">Java</span> <span className="bg-primary text-primary-foreground px-2 rounded">TS</span> <span className="bg-primary text-primary-foreground px-2 rounded">JS</span></p>
        </div>
        <div className="bg-purple-100 p-4 rounded-lg mb-4">
          <div className="flex items-center">
            <img src="https://openui.fly.dev/openui/24x24.svg?text=🔮" alt="FLiPR Logo" className="mr-2" />
            <h3 className="font-semibold">Software Development Intern</h3>
          </div>
          <p className="text-sm text-muted-foreground">xyz- Indore</p>
          <p className="text-sm">Jan 2024 - Apr 2024</p>
          <p className="mt-2">hands on: <span className="bg-primary text-primary-foreground px-2 rounded">Node.js</span> <span className="bg-primary text-primary-foreground px-2 rounded">React</span> <span className="bg-primary text-primary-foreground px-2 rounded">JS</span></p>
        </div>
        <div className="bg-yellow-100 p-4 rounded-lg mb-4">
          <div className="flex items-center">
            <img src="https://openui.fly.dev/openui/24x24.svg?text=📚" alt="Bookzy Logo" className="mr-2" />
            <h3 className="font-semibold">Front End Developer Intern</h3>
          </div>
          <p className="text-sm text-muted-foreground">DEF - Indore</p>
          <p className="text-sm">Jun 2023 - Oct 2023</p>
          <p className="mt-2">hands on: <span className="bg-primary text-primary-foreground px-2 rounded">Node.js</span> <span className="bg-primary text-primary-foreground px-2 rounded">JS</span></p>
        </div>
        <div className="bg-green-100 p-4 rounded-lg mb-4">
          <div className="flex items-center">
            <img src="https://openui.fly.dev/openui/24x24.svg?text=🌿" alt="Greenify Logo" className="mr-2" />
            <h3 className="font-semibold">UI/UX Designer</h3>
          </div>
          <p className="text-sm text-muted-foreground">MentorMenti, Indore</p>
          <p className="text-sm">Mar 2023 - May 2023</p>
          <p className="mt-2">hands on: <span className="bg-primary text-primary-foreground px-2 rounded">Figma</span> <span className="bg-primary text-primary-foreground px-2 rounded">Sketch</span></p>
        </div>
      </div>
      <a href="#" className="text-primary text-white hover:underline">More Experiences →</a>
    </div>
  );
}
