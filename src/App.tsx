import React, { useState, useEffect } from 'react';
import { initialPortfolioData } from './data/portfolioData';
import { SkillCategory } from './types/portfolio';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { BrandLogos } from './components/BrandLogos';
import { ExperienceEducationSection } from './components/ExperienceEducationSection';
import { ProcessFaqSection } from './components/ProcessFaqSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export function App() {
  const data = initialPortfolioData;
  const [selectedTopicForContact, setSelectedTopicForContact] = useState<string>('');

  useEffect(() => {
    // Clean up any stale client localStorage from previous customizer testing
    try {
      localStorage.removeItem('portfolio_priyanka_data_v3');
      localStorage.removeItem('portfolio_priyanka_data_v2');
      localStorage.removeItem('portfolio_priyanka_data');
    } catch {
      // ignore
    }
  }, []);

  const handleSelectSkill = (skillCategory: SkillCategory) => {
    setSelectedTopicForContact(skillCategory.title);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F3F4F6] text-[#141517] font-sans selection:bg-[#F4B41A] selection:text-[#141517]">
      <Navbar data={data} />

      <main className="flex-grow">
        <HeroSection data={data} />
        <AboutSection data={data} />
        <SkillsSection
          data={data}
          onSelectSkill={handleSelectSkill}
        />
        <ProjectsSection data={data} />
        <BrandLogos data={data} />
        <ExperienceEducationSection data={data} />
        <ProcessFaqSection data={data} />
        <ContactSection
          data={data}
          prefilledTopic={selectedTopicForContact}
        />
      </main>

      <Footer data={data} />
    </div>
  );
}

export default App;
