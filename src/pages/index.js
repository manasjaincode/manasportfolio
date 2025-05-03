import Navbar from '../../components/Navbar.';
import AboutSection from '../../components/AboutSection';
import ExperienceSection from '../../components/ExperienceSection';
import Featured from '../../components/Hackathons';
import ProjectSection from '../../components/ProjectSection';
import PublicSpeaking from '../../components/PublicSpeaking';
import Certificates from '../../components/Certificates';
export default function Home() {
  return (
    <div>
      <Navbar />
      <AboutSection/>
      <Featured/>
      <ExperienceSection/>
      <PublicSpeaking/>
      <Certificates/>
      {<ProjectSection/>}
     
  
      
    </div>
  );
}
