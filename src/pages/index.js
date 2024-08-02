import Navbar from '../../components/Navbar.';
import AboutSection from '../../components/AboutSection';
import ExperienceSection from '../../components/ExperienceSection';
import Featured from '../../components/Featured';
import ProjectSection from '../../components/ProjectSection';
import ConnectSection from '../../components/ConnectSection';
export default function Home() {
  return (
    <div>
      <Navbar />
      <AboutSection/>
      <Featured/>
      <ExperienceSection/>
      <ProjectSection/>
      <ConnectSection/>
      
    </div>
  );
}
