import React, { useState } from 'react';
import { initialPortfolioData } from './data/portfolioData';
import { PortfolioData, SkillCategory } from './types/portfolio';
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
import { CustomizerDrawer } from './components/CustomizerDrawer';

export function App() {
  const [data, setData] = useState<PortfolioData>(() => {
    const saved = localStorage.getItem('portfolio_priyanka_data');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        parsed.heroPortrait = initialPortfolioData.heroPortrait;
        parsed.aboutPortrait = initialPortfolioData.aboutPortrait;
        parsed.contactPortrait = initialPortfolioData.contactPortrait;
        parsed.projects = initialPortfolioData.projects;
        parsed.resumeUrl = initialPortfolioData.resumeUrl;
        return parsed;
      } catch {
        return initialPortfolioData;
      }
    }
    return initialPortfolioData;
  });

  const [isCustomizerOpen, setIsCustomizerOpen] = useState(false);
  const [selectedTopicForContact, setSelectedTopicForContact] = useState<string>('');

  const handleUpdateData = (newData: PortfolioData) => {
    setData(newData);
    localStorage.setItem('portfolio_priyanka_data', JSON.stringify(newData));
  };

  const handleSelectSkill = (skillCategory: SkillCategory) => {
    setSelectedTopicForContact(skillCategory.title);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F3F4F6] text-[#141517] font-sans selection:bg-[#F4B41A] selection:text-[#141517]">
      <Navbar
        data={data}
        onOpenCustomizer={() => setIsCustomizerOpen(true)}
      />

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

      <CustomizerDrawer
        isOpen={isCustomizerOpen}
        onClose={() => setIsCustomizerOpen(false)}
        data={data}
        onUpdateData={handleUpdateData}
      />
    </div>
  );
}

export default App;
