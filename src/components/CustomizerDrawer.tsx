import React from 'react';
import { X, RotateCcw, Check, Sparkles } from 'lucide-react';
import { PortfolioData } from '../types/portfolio';
import { initialPortfolioData } from '../data/portfolioData';

interface CustomizerDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  data: PortfolioData;
  onUpdateData: (newData: PortfolioData) => void;
}

export const CustomizerDrawer: React.FC<CustomizerDrawerProps> = ({
  isOpen,
  onClose,
  data,
  onUpdateData,
}) => {
  if (!isOpen) return null;

  const handleChange = (field: keyof PortfolioData, value: any) => {
    onUpdateData({
      ...data,
      [field]: value,
    });
  };

  const handleReset = () => {
    onUpdateData(initialPortfolioData);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white text-[#141517] shadow-2xl border-l border-gray-200 flex flex-col">
          <div className="p-6 border-b border-gray-800 flex items-center justify-between bg-[#141517] text-white">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#F4B41A]" />
              <h3 className="font-display font-black text-lg text-white uppercase tracking-wider">
                Personalize Info & Photo
              </h3>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={handleReset}
                title="Reset to defaults"
                className="p-2 rounded-full hover:bg-gray-800 text-gray-300 transition-colors"
                aria-label="Reset to defaults"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
              <button
                onClick={onClose}
                className="p-2 rounded-full hover:bg-gray-800 text-white transition-colors"
                aria-label="Close drawer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="flex-1 p-6 overflow-y-auto space-y-5 text-xs">
            <div className="p-3.5 bg-[#FFF9E6] rounded-xl border border-yellow-200 text-[11px] text-[#141517] leading-relaxed">
              💡 <strong>Profile Photo Note</strong>: Whenever you want to add your own photo, you can paste the image URL below and it will immediately update on your portfolio!
            </div>

            <div>
              <label className="font-bold text-gray-700 block mb-1 uppercase tracking-wider">
                Hero Portrait Photo URL
              </label>
              <input
                type="text"
                value={data.heroPortrait}
                onChange={(e) => handleChange('heroPortrait', e.target.value)}
                placeholder="https://... image link"
                className="w-full px-3 py-2 rounded-xl bg-white border border-gray-300 text-xs focus:outline-none focus:border-[#F4B41A]"
              />
            </div>

            <div>
              <label className="font-bold text-gray-700 block mb-1 uppercase tracking-wider">
                About / Bio Photo URL
              </label>
              <input
                type="text"
                value={data.aboutPortrait}
                onChange={(e) => handleChange('aboutPortrait', e.target.value)}
                placeholder="https://... image link"
                className="w-full px-3 py-2 rounded-xl bg-white border border-gray-300 text-xs focus:outline-none focus:border-[#F4B41A]"
              />
            </div>

            <div>
              <label className="font-bold text-gray-700 block mb-1 uppercase tracking-wider">
                Full Name
              </label>
              <input
                type="text"
                value={data.creatorName}
                onChange={(e) => handleChange('creatorName', e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-white border border-gray-300 text-sm focus:outline-none focus:border-[#F4B41A]"
              />
            </div>

            <div>
              <label className="font-bold text-gray-700 block mb-1 uppercase tracking-wider">
                Professional Title
              </label>
              <input
                type="text"
                value={data.roleTagline}
                onChange={(e) => handleChange('roleTagline', e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-white border border-gray-300 text-sm focus:outline-none focus:border-[#F4B41A]"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="font-bold text-gray-700 block mb-1 uppercase tracking-wider">
                  Headline (Part 1)
                </label>
                <input
                  type="text"
                  value={data.heroHeadingLine1}
                  onChange={(e) => handleChange('heroHeadingLine1', e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-white border border-gray-300 text-sm focus:outline-none focus:border-[#F4B41A]"
                />
              </div>
              <div>
                <label className="font-bold text-gray-700 block mb-1 uppercase tracking-wider">
                  Headline (Highlight)
                </label>
                <input
                  type="text"
                  value={data.heroHeadingItalic}
                  onChange={(e) => handleChange('heroHeadingItalic', e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-white border border-gray-300 text-sm focus:outline-none focus:border-[#F4B41A]"
                />
              </div>
            </div>

            <div>
              <label className="font-bold text-gray-700 block mb-1 uppercase tracking-wider">
                Hero Subheading / Introduction
              </label>
              <textarea
                rows={3}
                value={data.heroSubheading}
                onChange={(e) => handleChange('heroSubheading', e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-white border border-gray-300 text-xs focus:outline-none focus:border-[#F4B41A] resize-none"
              />
            </div>

            <div>
              <label className="font-bold text-gray-700 block mb-1 uppercase tracking-wider">
                Email
              </label>
              <input
                type="email"
                value={data.email}
                onChange={(e) => handleChange('email', e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-white border border-gray-300 text-sm focus:outline-none focus:border-[#F4B41A]"
              />
            </div>

            <div>
              <label className="font-bold text-gray-700 block mb-1 uppercase tracking-wider">
                Phone Number
              </label>
              <input
                type="text"
                value={data.phone}
                onChange={(e) => handleChange('phone', e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-white border border-gray-300 text-sm focus:outline-none focus:border-[#F4B41A]"
              />
            </div>

            <div>
              <label className="font-bold text-gray-700 block mb-1 uppercase tracking-wider">
                Location
              </label>
              <input
                type="text"
                value={data.location}
                onChange={(e) => handleChange('location', e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-white border border-gray-300 text-sm focus:outline-none focus:border-[#F4B41A]"
              />
            </div>
          </div>

          <div className="p-4 border-t border-gray-200 bg-gray-50">
            <button
              onClick={onClose}
              className="w-full py-3 rounded-full bg-[#F4B41A] text-[#141517] font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-yellow-400 transition-colors shadow-md"
            >
              <Check className="w-4 h-4 stroke-[3]" />
              <span>Apply Changes</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
