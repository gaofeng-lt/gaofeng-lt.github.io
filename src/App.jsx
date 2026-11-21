import { useMemo } from 'react';
import ParticleField from './components/background/ParticleField';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import HeroSection from './sections/HeroSection';
import AboutSection from './sections/AboutSection';
import ExperienceSection from './sections/ExperienceSection';
import ProjectsSection from './sections/ProjectsSection';
import SkillsSection from './sections/SkillsSection';
import ContactSection from './sections/ContactSection';
import useScrollSpy from './hooks/useScrollSpy';

const SECTION_IDS = ['home', 'about', 'experience', 'projects', 'skills', 'contact'];

export default function App() {
  const ids = useMemo(() => SECTION_IDS, []);
  const activeId = useScrollSpy(ids);

  return (
    <div className="relative min-h-screen">
      <ParticleField />
      <Navbar activeId={activeId} />
      <main>
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
