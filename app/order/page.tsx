"use client";

import { useState, useTransition } from 'react';
import { sendOrderAction } from '../actions/sendOrder';
import { FaRegCalendarAlt, FaExclamationTriangle, FaInfoCircle, FaEnvelope } from 'react-icons/fa';

export default function OrderPage() {
  const [isPending, startTransition] = useTransition();
  const [status, setStatus] = useState<{ success?: boolean; msg?: string }>({});

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus({});
    const formData = new FormData(e.currentTarget);

    startTransition(async () => {
      const result = await sendOrderAction(formData);
      if (result.success) {
        setStatus({ success: true, msg: 'Thank you! Your order inquiry has been sent to Kellee. Look out for an email response soon.' });
        (e.target as HTMLFormElement).reset();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        setStatus({ success: false, msg: result.error });
      }
    });
  };

  return (
    <div className="w-full bg-white min-h-screen pb-24">
      
      {/* HEADER HERO */}
      <section className="bg-gradient-to-b from-cookie-pink/20 to-white py-12 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-cookie-dark">
            Custom Order Form
          </h1>
          <p className="mt-3 text-sm sm:text-base text-cookie-dark/70 font-light max-w-2xl mx-auto">
            Thank you so much for your interest in Sweet Home Cookie Co. Please read all information below before submitting your request.
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 grid grid-cols-1 gap-8">
        
        {/* CRITICAL TERMS & DISCLOSURE NOTICES */}
        <div className="bg-[#fafafa] border border-gray-200/60 rounded-2xl p-6 space-y-4 text-sm text-cookie-dark/90 font-light leading-relaxed">
          <div className="flex items-center gap-2 text-amber-600 font-bold uppercase tracking-wider text-xs">
            <FaExclamationTriangle />
            <span>Important Booking Rules</span>
          </div>
          <p>
            Please email me for date availability before filling out this form! (<a href="mailto:kellee@sweethomecookieco.com" className="text-[#12967b] font-medium underline">kellee@sweethomecookieco.com</a>). I usually book up for custom orders <strong>4-6 weeks out</strong>, so it is important to verify availability first.
          </p>
          <hr className="border-gray-200" />
          <p>
            • <strong>Pricing & Minimums:</strong> Basic cookies begin at <strong>$54 per dozen</strong>. More intricate designs or many colors will raise the price. I have a <strong>2 dozen minimum</strong> for custom orders.<br />
            • <strong>Cancellations/Changes:</strong> Must be made at least <strong>three weeks prior</strong> to the Pick Up Date via email and explicitly confirmed by us.<br />
            • <strong>Payments & Schedule:</strong> Your order is only placed on the calendar once payment is received. Invoices are sent via PayPal.<br />
            • <strong>Location:</strong> Located in <strong>Round Rock, TX</strong>. Local orders ONLY—I am unable to ship orders per Texas State Law.<br />
            • <strong>Social Media:</strong> Cookies will be posted on our website, Facebook, and Instagram accounts after your event is over.
          </p>
        </div>

        {/* ORDER INQUIRY INTAKE FORM */}
        <div className="bg-white rounded-3xl border border-gray-100 p-6 sm:p-10 shadow-sm">
          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Question 1: Pre-availability Confirmation */}
            <div className="bg-[#f6fcfb] border border-[#12967b]/20 rounded-xl p-5">
              <label className="block text-sm font-bold text-cookie-dark mb-2">
                I have already emailed to confirm that there is availability for my date *
              </label>
              <div className="flex items-center gap-3 mt-3">
                <input
                  type="radio"
                  id="avail-yes"
                  name="confirmedAvailability"
                  value="Yes!"
                  required
                  className="h-4 w-4 text-[#12967b] focus:ring-[#12967b] border-gray-300"
                />
                <label htmlFor="avail-yes" className="text-sm font-medium text-cookie-dark">Yes!</label>
              </div>
            </div>

            {/* Customer Contact Information Blocks */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-cookie-dark/70 mb-2">Your Name *</label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="First and Last Name"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#12967b] focus:ring-1 focus:ring-[#12967b]"
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-cookie-dark/70 mb-2">Email Address *</label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="name@example.com"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#12967b] focus:ring-1 focus:ring-[#12967b]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-cookie-dark/70 mb-2">Cell Phone *</label>
                <input
                  type="tel"
                  name="phone"
                  required
                  placeholder="(000) 000-0000"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#12967b] focus:ring-1 focus:ring-[#12967b]"
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-cookie-dark/70 mb-2">Date Needed for Pick Up *</label>
                <input
                  type="date"
                  name="dateNeeded"
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#12967b] focus:ring-1 focus:ring-[#12967b]"
                />
                <span className="block text-[11px] text-cookie-dark/50 mt-1 font-light italic">
                  Normal weekend pickup window: Friday evenings 5:00pm - 6:30pm. Note below if an alternate time is needed.
                </span>
              </div>
            </div>

            {/* Selection Metrics: Quantities */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-cookie-dark/70 mb-2">Quantity Required *</label>
              <select
                name="quantity"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm bg-white focus:outline-none focus:border-[#12967b] focus:ring-1 focus:ring-[#12967b]"
              >
                <option value="2">2 Dozen (Minimum Custom Order)</option>
                <option value="3">3 Dozen</option>
                <option value="4">4 Dozen</option>
                <option value="5">5 Dozen</option>
                <option value="6+">6+ Dozen</option>
              </select>
            </div>

            {/* Design Metadata Strings */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-cookie-dark/70 mb-2">Occasion / Theme / Colors *</label>
              <textarea
                name="themeColors"
                required
                rows={3}
                placeholder="e.g., Baby shower, pastel mint green, blush pink, gold lettering decorations..."
                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#12967b] focus:ring-1 focus:ring-[#12967b] resize-none"
              />
              <span className="block text-[11px] text-amber-600 mt-1 font-light">
                * Note: We do not offer copyrighted or trademarked designs unless explicit written permission is provided.
              </span>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-cookie-dark/70 mb-2">Order Details</label>
              <textarea
                name="orderDetails"
                rows={4}
                placeholder="Please be as specific as possible: expected custom cookie shapes, required custom name text/wording on cookies, etc."
                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#12967b] focus:ring-1 focus:ring-[#12967b] resize-none"
              />
            </div>

            {/* Upgrade Options Add-ons */}
            <div className="bg-[#fafafa] border border-gray-100 rounded-xl p-5">
              <label className="block text-sm font-bold text-cookie-dark mb-1">
                Ribbon Bow Packaging Add-on *
              </label>
              <p className="text-xs text-cookie-dark/60 font-light mb-3">
                All cookies come standard heat-sealed in cellophane bags. Would you like to add a coordinating colored bow to each bag for $6 per dozen (great for event party favors)?
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <input
                    type="radio"
                    id="bow-yes"
                    name="ribbonBow"
                    value="Yes, please add a bow to each bag (+$6/dozen)."
                    required
                    className="h-4 w-4 text-[#12967b] focus:ring-[#12967b] border-gray-300"
                  />
                  <label htmlFor="bow-yes" className="text-sm text-cookie-dark/80 font-light">Yes, please add a bow to each bag.</label>
                </div>
                <div className="flex items-center gap-3">
                  <input
                    type="radio"
                    id="bow-no"
                    name="ribbonBow"
                    value="No thank you, standard heat-sealed only."
                    className="h-4 w-4 text-[#12967b] focus:ring-[#12967b] border-gray-300"
                  />
                  <label htmlFor="bow-no" className="text-sm text-cookie-dark/80 font-light">No thank you.</label>
                </div>
              </div>
            </div>

            {/* Comments Input box */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-cookie-dark/70 mb-2">Additional Questions / Comments?</label>
              <textarea
                name="comments"
                rows={3}
                placeholder="Any special pickup accommodation needs or specific extra details..."
                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#12967b] focus:ring-1 focus:ring-[#12967b] resize-none"
              />
            </div>

            {/* Inspiration Photos Guidelines */}
            <div className="p-4 rounded-xl bg-cookie-pink/10 border border-cookie-pink/30 flex gap-3 text-xs text-cookie-dark/80 font-light leading-normal">
              <FaInfoCircle className="text-base text-[#12967b] shrink-0 mt-0.5" />
              <div>
                <strong>Have inspiration photos?</strong> Please email your sample images directly to <a href="mailto:kellee@sweethomecookieco.com" className="text-[#12967b] font-bold underline">kellee@sweethomecookieco.com</a> after completing this form. Include your name and event date in the subject line. We use these as beautiful inspiration blueprints rather than copying other artists' designs directly.
              </div>
            </div>

            {/* Submission Status feedback alerts */}
            {status.msg && (
              <div className={`p-4 rounded-xl text-sm font-medium text-center ${
                status.success ? 'bg-[#12967b]/10 text-[#12967b]' : 'bg-red-50 text-red-600'
              }`}>
                {status.msg}
              </div>
            )}

            {/* Execution control button */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={isPending}
                className="w-full bg-[#12967b] hover:bg-[#0e7761] disabled:bg-gray-300 text-white font-bold text-sm uppercase tracking-wider py-4 rounded-xl shadow-sm transition-colors text-center"
              >
                {isPending ? 'Submitting Form...' : 'Submit Order Inquiry'}
              </button>
            </div>

          </form>
        </div>
      </div>

    </div>
  );
}