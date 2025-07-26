// src/app/page.js

import Navbar from '../../components/Navbar.';
import AboutSection from '../../components/AboutSection';
import ExperienceSection from '../../components/ExperienceSection';
import Featured from '../../components/Hackathons';
// import ProjectSection from '../../components/ProjectSection';
import PublicSpeaking from '../../components/PublicSpeaking';
import Certificates from '../../components/Certificates';

// NEW: Import ProfessionalInnovations
import ProfessionalInnovations from '../../components/ProfessionalInnovations'; // Adjust path if needed

// NEW: Import FloatingSectionMenu (if not already there)
import FloatingSectionMenu from '../../components/FloatingSectionMenu';

export default function Home() {
  return (
    <div>
      <Navbar />

      <section id="about-section">
        <AboutSection/>
      </section>

      <section id="experience-section">
        <ExperienceSection/>
      </section>

      {/* <section id="projects-section">
        <ProjectSection/>
      </section> */}

      <section id="hackathons-section">
        <Featured/>
      </section>

      <section id="public-speaking-section">
        <PublicSpeaking/>
      </section>

      {/* NEW: Add the Professional Innovations section here */}
      <ProfessionalInnovations />

      <section id="certificates-section">
        <Certificates/>
      </section>

      {/* FloatingSectionMenu should be at the root of your main layout */}
      <FloatingSectionMenu />
    </div>
  );
}