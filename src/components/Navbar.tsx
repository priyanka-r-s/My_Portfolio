import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, FileDown } from 'lucide-react';
import { GithubIcon } from './icons/GithubIcon';
import { PortfolioData } from '../types/portfolio';

interface NavbarProps {
  data: PortfolioData;
}

export const Navbar: React.FC<NavbarProps> = ({ data }) => {
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
          ? 'bg-white/95 backdrop-blur-md shadow-md py-3 border-b border-gray-200/90'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#home" className="group flex items-center gap-2">
            <div className="flex flex-col">
              <span className="font-display text-xl sm:text-2xl font-black tracking-wider text-[#141517] group-hover:text-[#F4B41A] transition-colors flex items-center gap-1">
                {data.brandName}
                <span className="text-xs text-[#F4B41A] font-light">✦</span>
              </span>
              <span className="text-[10px] tracking-[0.25em] text-[#F4B41A] uppercase font-bold -mt-0.5 font-mono">
                {data.brandSub}
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-bold text-gray-700">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-[#F4B41A] transition-colors duration-200 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#F4B41A] hover:after:w-full after:transition-all after:duration-300 uppercase text-xs tracking-wider font-display"
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
              className="p-2.5 rounded-full bg-[#F3F4F6] hover:bg-[#F4B41A] hover:text-[#141517] text-gray-700 border border-gray-300 transition-colors"
              title="GitHub Profile (19+ Repos)"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            <a
              href={data.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-full bg-[#F3F4F6] hover:bg-[#0077B5] hover:text-white text-gray-700 border border-gray-300 transition-colors"
              title="LinkedIn Profile"
            >
              <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>

            {data.resumeUrl && (
              <a
                href={data.resumeUrl}
                download="Priyanka_Resume.pdf"
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-black uppercase tracking-wider rounded-full bg-[#F4B41A] text-[#141517] hover:bg-yellow-400 transition-all duration-300 shadow-xs group"
                title="Download Resume (PDF)"
              >
                <FileDown className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform" />
                <span>Resume</span>
              </a>
            )}

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#141517] text-white text-xs sm:text-sm font-black uppercase tracking-wider hover:bg-[#F4B41A] hover:text-[#141517] transition-all duration-300 shadow-md hover:shadow-lg group"
            >
              <span>Get in Touch</span>
              <span className="w-5 h-5 rounded-full bg-white/20 group-hover:bg-[#141517]/20 flex items-center justify-center group-hover:translate-x-0.5 transition-transform">
                <ArrowUpRight className="w-3 h-3 text-white group-hover:text-[#141517]" />
              </span>
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-full bg-white border border-gray-300 text-[#141517] focus:outline-none shadow-sm"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-white border-b border-gray-200 px-6 py-6 space-y-4 shadow-xl animate-in slide-in-from-top duration-300">
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-bold uppercase tracking-wider text-[#141517] hover:text-[#F4B41A] py-1.5 border-b border-gray-100 font-display"
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
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-full bg-[#F3F4F6] text-[#141517] text-xs font-bold border border-gray-300"
            >
              <GithubIcon className="w-4 h-4" />
              <span>Visit GitHub (19+ Projects)</span>
            </a>
            <a
              href={data.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-full bg-[#F3F4F6] text-[#141517] text-xs font-bold border border-gray-300 hover:bg-[#0077B5] hover:text-white transition-colors"
            >
              <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
              <span>Connect on LinkedIn</span>
            </a>
            {data.resumeUrl && (
              <a
                href={data.resumeUrl}
                download="Priyanka_Resume.pdf"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-full bg-[#F4B41A] text-[#141517] text-xs font-black uppercase tracking-wider shadow-xs"
              >
                <FileDown className="w-4 h-4" />
                <span>Download Resume (PDF)</span>
              </a>
            )}
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-full bg-[#141517] text-white text-xs font-black uppercase tracking-wider"
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
