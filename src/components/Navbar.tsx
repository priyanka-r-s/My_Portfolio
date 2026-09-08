import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Sliders } from 'lucide-react';
import { GithubIcon } from './icons/GithubIcon';
import { PortfolioData } from '../types/portfolio';

interface NavbarProps {
  data: PortfolioData;
  onOpenCustomizer?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ data, onOpenCustomizer }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FAF7F2]/95 backdrop-blur-md shadow-sm py-3 border-b border-[#E8E1D3]'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#home" className="group flex items-center gap-2">
            <div className="flex flex-col">
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-widest text-[#1D2217] group-hover:text-[#586545] transition-colors flex items-center gap-1">
                {data.brandName}
                <span className="text-xs text-[#B08E55] font-light">✦</span>
              </span>
              <span className="text-[10px] tracking-[0.25em] text-[#7A846A] uppercase font-medium -mt-1 font-mono">
                {data.brandSub}
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-[#465037]">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-[#1D2217] transition-colors duration-200 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#586545] hover:after:w-full after:transition-all after:duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={data.socials.github}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-full bg-[#EFE9DD] hover:bg-[#E4DAC7] text-[#465037] border border-[#DCD2C0] transition-colors"
              title="GitHub Profile (19+ Repos)"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            {onOpenCustomizer && (
              <button
                onClick={onOpenCustomizer}
                className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium rounded-full bg-[#EFE9DD] hover:bg-[#E4DAC7] text-[#465037] transition-all border border-[#DCD2C0]"
                title="Edit portfolio details live"
              >
                <Sliders className="w-3.5 h-3.5 text-[#6B7A54]" />
                <span className="hidden lg:inline">Edit Info</span>
              </button>
            )}

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#1D2217] text-[#FAF7F2] text-xs sm:text-sm font-medium hover:bg-[#383F2C] transition-all duration-300 shadow-sm hover:shadow group"
            >
              <span>Get in Touch</span>
              <span className="w-5 h-5 rounded-full bg-[#FAF7F2]/15 flex items-center justify-center group-hover:translate-x-0.5 transition-transform">
                <ArrowUpRight className="w-3 h-3 text-[#FAF7F2]" />
              </span>
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex sm:hidden items-center gap-2">
            {onOpenCustomizer && (
              <button
                onClick={onOpenCustomizer}
                className="p-2 rounded-full bg-[#EFE9DD] text-[#465037]"
                aria-label="Customize"
              >
                <Sliders className="w-4 h-4" />
              </button>
            )}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-full bg-[#FAF7F2] border border-[#E8E1D3] text-[#1D2217] focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-[#FAF7F2] border-b border-[#E8E1D3] px-6 py-6 space-y-4 shadow-lg animate-in slide-in-from-top duration-300">
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-serif text-[#2A3022] hover:text-[#586545] py-1 border-b border-[#F0EAE0]"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="pt-2 flex flex-col gap-2">
            <a
              href={data.socials.github}
              target="_blank"
              rel="noreferrer"
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-full bg-[#EFE9DD] text-[#2A3022] text-sm font-medium border border-[#DCD2C0]"
            >
              <GithubIcon className="w-4 h-4" />
              <span>Visit GitHub (19 Repos)</span>
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-full bg-[#1D2217] text-[#FAF7F2] text-sm font-medium"
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
