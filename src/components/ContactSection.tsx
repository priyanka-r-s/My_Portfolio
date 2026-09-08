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
        particleCount: 60,
        spread: 60,
        origin: { y: 0.8 },
        colors: ['#D6BA85', '#6B7A54', '#FAF7F2', '#B08E55'],
      });
    }, 500);
  };

  return (
    <section id="contact" className="py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-[#545E44] text-[#FAF7F2] rounded-[36px] sm:rounded-[48px] p-6 sm:p-10 lg:p-14 shadow-xl overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 opacity-15 pointer-events-none text-white">
            <svg viewBox="0 0 200 200" fill="currentColor">
              <path d="M45,20 C60,50 90,80 150,85 C140,110 110,130 80,120 C70,140 50,170 20,180 C30,150 40,120 45,90 C25,80 15,60 45,20 Z" />
            </svg>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* Left Column */}
            <div className="lg:col-span-6 flex flex-col sm:flex-row items-center sm:items-start gap-6">
              <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden border-2 border-[#D6BA85] shadow-md flex-shrink-0 bg-[#383F2C]">
                <img
                  src={data.aboutPortrait}
                  alt={data.creatorName}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              <div>
                <span className="text-[11px] font-mono tracking-[0.2em] uppercase text-[#D6BA85] font-semibold block mb-1">
                  Start a conversation
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#FAF7F2] tracking-tight leading-snug mb-3">
                  Let's Build Something{' '}
                  <span className="italic font-normal text-[#D6BA85]">
                    Impactful Together.
                  </span>
                </h2>
                <p className="text-xs sm:text-sm text-[#CBD2BE] leading-relaxed max-w-md font-light">
                  {data.contactSubheading}
                </p>

                <div className="mt-5 pt-4 border-t border-[#6B7A54] flex flex-col gap-2 text-xs text-[#E6E9DF]">
                  <a
                    href={`mailto:${data.email}`}
                    className="flex items-center gap-2 hover:text-[#D6BA85] transition-colors"
                  >
                    <Mail className="w-3.5 h-3.5 text-[#D6BA85]" />
                    <span>{data.email}</span>
                  </a>
                  <a
                    href={`tel:${data.phone}`}
                    className="flex items-center gap-2 hover:text-[#D6BA85] transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#D6BA85]" />
                    <span>{data.phone}</span>
                  </a>
                  <div className="flex items-center gap-2 text-[#CBD2BE]">
                    <MapPin className="w-3.5 h-3.5 text-[#D6BA85]" />
                    <span>{data.location}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Form */}
            <div className="lg:col-span-6">
              {isSubmitted ? (
                <div className="bg-[#465037] p-8 rounded-3xl border border-[#7A846A] text-center space-y-4 animate-in fade-in duration-300">
                  <div className="w-12 h-12 rounded-full bg-[#FAF7F2] text-[#545E44] flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif text-2xl font-semibold text-[#FAF7F2]">
                    Message Sent!
                  </h3>
                  <p className="text-xs sm:text-sm text-[#CBD2BE] max-w-sm mx-auto">
                    Thank you, {name}! I've received your note and will reply to {email} as soon as possible.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setName('');
                      setEmail('');
                      setMessage('');
                    }}
                    className="mt-2 px-5 py-2 rounded-full bg-[#FAF7F2] text-[#1D2217] text-xs font-medium hover:bg-[#EFE9DD] transition-colors"
                  >
                    Send Another Note
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="space-y-3.5 bg-[#465037]/70 p-6 sm:p-7 rounded-3xl border border-[#6B7A54]/60 backdrop-blur-xs"
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
                      className="w-full px-4 py-3 rounded-2xl bg-[#3A432D] border border-[#586545] text-[#FAF7F2] placeholder-[#AAB597] text-xs sm:text-sm focus:outline-none focus:border-[#D6BA85] transition-colors"
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
                      className="w-full px-4 py-3 rounded-2xl bg-[#3A432D] border border-[#586545] text-[#FAF7F2] placeholder-[#AAB597] text-xs sm:text-sm focus:outline-none focus:border-[#D6BA85] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="sr-only" htmlFor="message">
                      Message / Project Details
                    </label>
                    <textarea
                      id="message"
                      rows={3}
                      required
                      placeholder="Discuss an open role, data project, or analytics question..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full px-4 py-3 rounded-2xl bg-[#3A432D] border border-[#586545] text-[#FAF7F2] placeholder-[#AAB597] text-xs sm:text-sm focus:outline-none focus:border-[#D6BA85] transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 py-3.5 rounded-full bg-[#FAF7F2] text-[#1D2217] text-xs sm:text-sm font-semibold hover:bg-[#EFE9DD] transition-all duration-300 shadow-md group disabled:opacity-75"
                  >
                    <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                    <span className="w-5 h-5 rounded-full bg-[#1D2217] text-[#FAF7F2] flex items-center justify-center group-hover:translate-x-1 transition-transform">
                      <ArrowRight className="w-3 h-3" />
                    </span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
