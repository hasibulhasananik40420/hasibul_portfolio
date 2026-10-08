import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { 
  LuMail, 
  LuPhone, 
  LuMapPin, 
  LuSend, 
  LuCircleCheck, 
  LuSparkles 
} from 'react-icons/lu';
import { personalInfo } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

export const ContactPage: React.FC = () => {
  const { currentTheme } = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);
  const formCardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      if (headerRef.current) {
        gsap.fromTo(
          headerRef.current,
          { opacity: 0, y: 12 },
          { opacity: 1, y: 0, duration: 0.38, ease: 'power2.out', clearProps: 'transform,opacity' }
        );
      }

      if (leftColRef.current) {
        gsap.fromTo(
          leftColRef.current.children,
          { opacity: 0, x: -14 },
          {
            opacity: 1,
            x: 0,
            duration: 0.38,
            stagger: 0.05,
            ease: 'power2.out',
            clearProps: 'transform,opacity',
          }
        );
      }

      if (formCardRef.current) {
        gsap.fromTo(
          formCardRef.current,
          { opacity: 0, x: 14 },
          { opacity: 1, x: 0, duration: 0.4, ease: 'power2.out', clearProps: 'transform,opacity' }
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 900);
  };

  return (
    <div ref={containerRef} className="p-6 md:p-8 lg:p-10 space-y-8 font-jakarta">
      {/* Header */}
      <div ref={headerRef} className="pb-4 border-b border-slate-100">
        <span className="text-slate-400 font-semibold text-xs sm:text-sm uppercase tracking-wider block mb-1">
          Get in Touch
        </span>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight font-outfit">
          Let’s Talk About Your Project
        </h1>
        <p className="text-slate-500 text-sm sm:text-base mt-2 font-light max-w-xl leading-relaxed">
          Feel free to reach out for new projects, freelance inquiries, or just to say hi!
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 items-start">
        {/* Left Side: Contact Information Cards (2 cols) */}
        <div ref={leftColRef} className="lg:col-span-2 space-y-4">
          {/* Email card */}
          <div className="p-4.5 sm:p-5 rounded-2xl bg-[#f8fafc] flex items-center gap-4 transition-colors duration-200">
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
              style={{
                backgroundColor: currentTheme.lightBg,
                color: currentTheme.primary,
              }}
            >
              <LuMail size={22} />
            </div>
            <div className="overflow-hidden">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-0.5">
                Email
              </span>
              <a
                href={`mailto:${personalInfo.email}`}
                className="text-sm sm:text-base font-semibold truncate block transition-colors"
                style={{ color: currentTheme.primary }}
              >
                {personalInfo.email}
              </a>
            </div>
          </div>

          {/* Phone card */}
          <div className="p-4.5 sm:p-5 rounded-2xl bg-[#f8fafc] flex items-center gap-4 transition-colors duration-200">
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
              style={{
                backgroundColor: currentTheme.lightBg,
                color: currentTheme.primary,
              }}
            >
              <LuPhone size={22} />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-0.5">
                Phone / WhatsApp
              </span>
              <a
                href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                className="text-sm sm:text-base font-semibold text-slate-800 hover:underline block"
              >
                {personalInfo.phone}
              </a>
            </div>
          </div>

          {/* Location card */}
          <div className="p-4.5 sm:p-5 rounded-2xl bg-[#f8fafc] flex items-center gap-4 transition-colors duration-200">
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
              style={{
                backgroundColor: currentTheme.lightBg,
                color: currentTheme.primary,
              }}
            >
              <LuMapPin size={22} />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-0.5">
                Location
              </span>
              <p className="text-sm sm:text-base font-semibold text-slate-800">
                {personalInfo.location}
              </p>
            </div>
          </div>

          {/* Availability Card */}
          <div
            className="p-4.5 sm:p-5 rounded-2xl space-y-1.5"
            style={{ backgroundColor: currentTheme.lightBg }}
          >
            <div className="flex items-center gap-2 font-bold text-xs sm:text-sm" style={{ color: currentTheme.primary }}>
              <LuSparkles size={16} />
              <span>Available for Freelance & Full-time</span>
            </div>
            <p className="text-slate-600 font-light leading-relaxed text-xs sm:text-sm">
              Open to worldwide remote positions and contract collaborations.
            </p>
          </div>
        </div>

        {/* Right Side: Interactive Contact Form (3 cols) */}
        <div ref={formCardRef} className="lg:col-span-3 bg-[#f8fafc] p-6 sm:p-7 rounded-2xl">
          {isSubmitted ? (
            <div className="text-center py-10 space-y-3.5 animate-in fade-in zoom-in-95">
              <div
                className="w-16 h-16 rounded-full mx-auto flex items-center justify-center"
                style={{
                  backgroundColor: currentTheme.lightBg,
                  color: currentTheme.primary,
                }}
              >
                <LuCircleCheck size={36} />
              </div>
              <h2 className="text-2xl font-bold text-slate-900 font-outfit">
                Message Sent Successfully!
              </h2>
              <p className="text-slate-600 text-sm sm:text-base max-w-md mx-auto leading-relaxed font-light">
                Thank you for reaching out, {formData.name || 'friend'}! I will get back to you as soon as possible.
              </p>
              <button
                onClick={() => {
                  setIsSubmitted(false);
                  setFormData({ name: '', email: '', subject: '', message: '' });
                }}
                className="px-6 py-2.5 rounded-full text-white text-xs sm:text-sm font-semibold uppercase tracking-wider transition-all active:scale-95 cursor-pointer hover:opacity-90 shadow-sm"
                style={{ backgroundColor: currentTheme.primary }}
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label htmlFor="name" className="text-xs sm:text-sm font-semibold text-slate-700 block">
                    Your Name *
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Hasibul Hasan"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200/80 text-sm sm:text-base focus:outline-none focus:border-slate-400 transition-all bg-white"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="email" className="text-xs sm:text-sm font-semibold text-slate-700 block">
                    Email Address *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@example.com"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200/80 text-sm sm:text-base focus:outline-none focus:border-slate-400 transition-all bg-white"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="subject" className="text-xs sm:text-sm font-semibold text-slate-700 block">
                  Subject *
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Project inquiry / collaboration"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200/80 text-sm sm:text-base focus:outline-none focus:border-slate-400 transition-all bg-white"
                />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="message" className="text-xs sm:text-sm font-semibold text-slate-700 block">
                  Your Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  className="w-full px-4 py-3 rounded-xl border border-slate-200/80 text-sm sm:text-base focus:outline-none focus:border-slate-400 transition-all bg-white resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-white font-semibold text-sm sm:text-base transition-all w-full sm:w-auto cursor-pointer disabled:opacity-50 hover:opacity-90 active:scale-95 shadow-sm"
                style={{ backgroundColor: currentTheme.primary }}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
                <LuSend size={16} />
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
