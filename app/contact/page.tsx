"use client";

import { useState, useTransition } from 'react';
import { sendContactAction } from '../actions/sendContact';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaRegClock, FaFacebookF, FaInstagram } from 'react-icons/fa';

export default function ContactPage() {
  const [isPending, startTransition] = useTransition();
  const [status, setStatus] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('Sending...');
    const formData = new FormData(e.currentTarget);

    startTransition(async () => {
      const result = await sendContactAction(formData);
      if (result.success) {
        setStatus('Message sent successfully!');
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus(result.error || 'An error occurred.');
      }
    });
  };

  return (
    <div className="w-full bg-white min-h-screen">
      
      {/* 1. HEADER HERO BANNER */}
      <section className="bg-gradient-to-b from-cookie-pink/20 to-white py-12 md:py-16 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <span className="inline-block bg-[#12967b]/10 text-[#12967b] font-bold text-xs uppercase tracking-widest px-3 py-1 rounded-full mb-3">
            Get In Touch
          </span>
          <h1 className="text-4xl font-bold tracking-tight text-cookie-dark sm:text-5xl">
            Contact Us
          </h1>
          <p className="mt-3 text-base text-cookie-dark/70 font-light max-w-md mx-auto">
            Have a question about an upcoming celebration or custom theme request? Drop us a line below.
          </p>
        </div>
      </section>

      {/* 2. SPLIT GRID CONTENT CONTAINER */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 items-start mt-8">
          
          {/* LEFT SIDE: Contact Channels & Meta Info */}
          <div className="md:col-span-5 space-y-8 text-cookie-dark">
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-cookie-pink/30 text-cookie-dark flex items-center justify-center text-sm shrink-0">
                  <FaPhoneAlt />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider font-bold text-cookie-dark/50">Phone</h4>
                  <p className="font-bold text-sm sm:text-base tracking-tight">+737 210-6977</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-cookie-pink/30 text-cookie-dark flex items-center justify-center text-sm shrink-0">
                  <FaEnvelope />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider font-bold text-cookie-dark/50">Email</h4>
                  <p className="font-bold text-sm sm:text-base tracking-tight break-all">kellee@sweethomecookieco.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-cookie-pink/30 text-cookie-dark flex items-center justify-center text-sm shrink-0 mt-0.5">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider font-bold text-cookie-dark/50">Location & Pickup</h4>
                  <p className="text-sm text-cookie-dark/80 font-light mt-0.5 leading-relaxed">
                    Contact seller for pickup address in <strong className="font-medium text-cookie-dark">Round Rock, TX</strong>.
                  </p>
                </div>
              </div>
            </div>

            {/* Operating Hours Block */}
            <div className="pt-6 border-t border-gray-100 space-y-3">
              <div className="flex items-center gap-2 text-cookie-dark/60 text-xs uppercase tracking-wider font-bold">
                <FaRegClock />
                <span>Hours of Operation</span>
              </div>
              <div className="space-y-1 text-xs sm:text-sm font-light text-cookie-dark/70">
                <div className="flex justify-between max-w-xs">
                  <span>MON - FRI</span>
                  <span className="font-medium">09:00 - 19:00</span>
                </div>
                <div className="flex justify-between max-w-xs">
                  <span>SAT - SUN</span>
                  <span className="font-medium">10:00 - 14:00</span>
                </div>
              </div>
            </div>

            {/* Social Connection Badges */}
            <div className="pt-6 border-t border-gray-100 flex items-center gap-4">
              <a 
                href="https://facebook.com/sweethomecookieco" 
                target="_blank" 
                rel="noreferrer" 
                className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-cookie-dark/70 hover:text-[#12967b] hover:border-[#12967b] transition-colors"
              >
                <FaFacebookF />
              </a>
              <a 
                href="https://instagram.com/sweethomecookieco" 
                target="_blank" 
                rel="noreferrer" 
                className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-cookie-dark/70 hover:text-[#12967b] hover:border-[#12967b] transition-colors"
              >
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* RIGHT SIDE: Interactive Contact Form Panel */}
          <div className="md:col-span-7 bg-white rounded-2xl border border-gray-100 p-6 sm:p-8 shadow-sm">
            <form onSubmit={handleSubmit} className="space-y-5">
              
              <div>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Name"
                  className="w-full bg-white border border-gray-300 rounded-md px-4 py-3 text-sm text-cookie-dark placeholder-gray-400 focus:outline-none focus:border-[#12967b] focus:ring-1 focus:ring-[#12967b] transition-colors"
                />
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Email"
                  className="w-full bg-white border border-gray-300 rounded-md px-4 py-3 text-sm text-cookie-dark placeholder-gray-400 focus:outline-none focus:border-[#12967b] focus:ring-1 focus:ring-[#12967b] transition-colors"
                />
              </div>

              <div>
                <textarea
                  name="message"
                  required
                  rows={5}
                  placeholder="Message"
                  className="w-full bg-white border border-gray-300 rounded-md px-4 py-3 text-sm text-cookie-dark placeholder-gray-400 focus:outline-none focus:border-[#12967b] focus:ring-1 focus:ring-[#12967b] transition-colors resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isPending}
                  className="w-full bg-[#12967b] hover:bg-[#0e7761] disabled:bg-gray-300 text-white font-bold text-sm uppercase tracking-wider py-3.5 rounded-md shadow-sm transition-colors"
                >
                  {isPending ? 'Sending...' : 'Send Message'}
                </button>
              </div>

              {status && (
                <p className="text-center text-xs font-medium text-[#12967b] pt-2">
                  {status}
                </p>
              )}

            </form>
          </div>

        </div>
      </section>

    </div>
  );
}