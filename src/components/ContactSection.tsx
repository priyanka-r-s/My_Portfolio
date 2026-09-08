import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Mail, Phone, MapPin } from 'lucide-react';
import confetti from 'canvas-confetti';
import { PortfolioData } from '../types/portfolio';

interface ContactSectionProps {
  data: PortfolioData;
  prefilledTopic?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  data,
  prefilledTopic,
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState(
    prefilledTopic ? `Hi ${data.creatorName}, I'd like to discuss ${prefilledTopic}.` : ''
  );
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  React.useEffect(() => {
    if (prefilledTopic) {
      setMessage(`Hi ${data.creatorName}, I'd like to discuss ${prefilledTopic}.`);
    }
  }, [prefilledTopic, data.creatorName]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) return;

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);

      confetti({
        particleCount: 70,
        spread: 70,
        origin: { y: 0.8 },
        colors: ['#F4B41A', '#141517', '#FFFFFF', '#FCD34D'],
      });
    }, 500);
  };

  return (
    <section id="contact" className="pt-16 pb-6 sm:pt-20 sm:pb-8 lg:pt-20 lg:pb-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="relative bg-[#141517] text-white rounded-[32px] sm:rounded-[40px] p-6 sm:p-8 lg:p-10 xl:p-12 shadow-2xl border border-gray-800 overflow-hidden">
        {/* Yellow ambient glow */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#F4B41A]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center relative z-10">
          {/* Left Column */}
          <div className="lg:col-span-6 flex flex-col sm:flex-row items-center sm:items-start gap-6">
            <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden border-4 border-[#F4B41A] shadow-xl flex-shrink-0 bg-gray-800">
              <img
                src={data.contactPortrait || data.aboutPortrait || data.heroPortrait}
                alt={data.creatorName}
                className="w-full h-full object-cover object-center"
                loading="lazy"
              />
            </div>

            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-[#F4B41A]" />
                <span className="text-xs font-mono tracking-[0.2em] uppercase text-[#F4B41A] font-bold block">
                  Start a Conversation
                </span>
              </div>

              <h2 className="font-display font-black text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight uppercase leading-snug mb-3">
                LET'S BUILD SOMETHING{' '}
                <span className="text-[#F4B41A]">
                  IMPACTFUL.
                </span>
              </h2>
              <p className="text-xs sm:text-sm text-gray-400 leading-relaxed max-w-md font-normal">
                {data.contactSubheading}
              </p>

              <div className="mt-5 pt-4 border-t border-gray-800 flex flex-col gap-2.5 text-xs sm:text-sm text-gray-300">
                <a
                  href={`mailto:${data.email}`}
                  className="flex items-center gap-2.5 hover:text-[#F4B41A] transition-colors font-medium"
                >
                  <Mail className="w-4 h-4 text-[#F4B41A]" />
                  <span>{data.email}</span>
                </a>
                <a
                  href={`tel:${data.phone}`}
                  className="flex items-center gap-2.5 hover:text-[#F4B41A] transition-colors font-medium"
                >
                  <Phone className="w-4 h-4 text-[#F4B41A]" />
                  <span>{data.phone}</span>
                </a>
                <div className="flex items-center gap-2.5 text-gray-400 font-medium">
                  <MapPin className="w-4 h-4 text-[#F4B41A]" />
                  <span>{data.location}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="lg:col-span-6">
            {isSubmitted ? (
              <div className="bg-[#1C1F26] p-6 sm:p-7 rounded-2xl border border-gray-800 text-center space-y-3 animate-in fade-in duration-300">
                <div className="w-10 h-10 rounded-full bg-[#F4B41A] text-[#141517] flex items-center justify-center mx-auto shadow-md">
                  <CheckCircle2 className="w-5 h-5 stroke-[2.5]" />
                </div>
                <h3 className="font-display font-black text-xl text-white uppercase">
                  Message Sent!
                </h3>
                <p className="text-xs text-gray-400 max-w-sm mx-auto">
                  Thank you, {name}! I've received your note and will reply to {email} as soon as possible.
                </p>
                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    setName('');
                    setEmail('');
                    setMessage('');
                  }}
                  className="mt-1 px-5 py-1.5 rounded-full bg-[#F4B41A] text-[#141517] text-xs font-black uppercase tracking-wider hover:bg-yellow-400 transition-colors shadow-xs"
                >
                  Send Another Note
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="space-y-2.5 bg-[#1C1F26]/90 p-5 sm:p-6 rounded-2xl border border-gray-800 shadow-xl"
              >
                <div>
                  <label className="sr-only" htmlFor="name">
                    Your Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3.5 py-2 rounded-xl bg-[#141517] border border-gray-700 text-white placeholder-gray-500 text-xs focus:outline-none focus:border-[#F4B41A] transition-colors"
                  />
                </div>

                <div>
                  <label className="sr-only" htmlFor="email">
                    Your Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    placeholder="Your Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3.5 py-2 rounded-xl bg-[#141517] border border-gray-700 text-white placeholder-gray-500 text-xs focus:outline-none focus:border-[#F4B41A] transition-colors"
                  />
                </div>

                <div>
                  <label className="sr-only" htmlFor="message">
                    Message / Project Details
                  </label>
                  <textarea
                    id="message"
                    rows={2}
                    required
                    placeholder="Discuss an open role, data project, or analytics question..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-3.5 py-2 rounded-xl bg-[#141517] border border-gray-700 text-white placeholder-gray-500 text-xs focus:outline-none focus:border-[#F4B41A] transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 py-3.5 rounded-full bg-[#F4B41A] text-[#141517] text-xs sm:text-sm font-black uppercase tracking-wider hover:bg-yellow-400 transition-all duration-300 shadow-lg group disabled:opacity-75"
                >
                  <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                  <span className="w-5 h-5 rounded-full bg-[#141517] text-[#F4B41A] flex items-center justify-center group-hover:translate-x-1 transition-transform">
                    <ArrowRight className="w-3 h-3" />
                  </span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
