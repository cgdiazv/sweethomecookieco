import Link from 'next/link';
import { FaCalendarCheck, FaFileInvoiceDollar, FaWpforms, FaPalette } from 'react-icons/fa';

export default function PricingPage() {
  return (
    <div className="w-full bg-white">
      
      {/* 1. HEADER SECTION */}
      <section className="bg-gradient-to-b from-cookie-pink/20 to-white py-12 md:py-20 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <span className="inline-block bg-[#12967b]/10 text-[#12967b] font-bold text-xs uppercase tracking-widest px-3 py-1 rounded-full mb-3">
            Investment & Details
          </span>
          <h1 className="text-4xl font-bold tracking-tight text-cookie-dark sm:text-5xl">
            Cookie Pricing
          </h1>
          <p className="mt-4 text-lg text-cookie-dark/70 font-light max-w-xl mx-auto">
            Every set is customized, hand-piped, and tailored to match your event perfectly. Here is how our custom order pricing works.
          </p>
        </div>
      </section>

      {/* 2. PRICING DETAIL CARDS */}
      <section className="py-6 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          
          {/* Base Price Card */}
          <div className="bg-[#fafafa] border border-gray-100 rounded-3xl p-8 flex flex-col justify-between shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-cookie-pink/20 rounded-bl-full pointer-events-none"></div>
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-[#12967b]">Standard Setup</h3>
              <div className="mt-4 flex items-baseline gap-1 text-cookie-dark">
                <span className="text-5xl font-bold tracking-tight">$54</span>
                <span className="text-base text-cookie-dark/60 font-light">/ per dozen</span>
              </div>
              <p className="mt-4 text-sm text-cookie-dark/70 font-light leading-relaxed">
                Our base entry package includes up to <strong>4 custom designs</strong>. It is perfect for matching themes cleanly while keeping your display simple and beautiful.
              </p>
            </div>
            <div className="mt-6 pt-6 border-t border-gray-200/60 text-xs text-cookie-dark/50 italic font-light">
              * Ideal for birthdays, small showers, and family milestones.
            </div>
          </div>

          {/* Guidelines / Custom Adjustments Card */}
          <div className="border-2 border-[#12967b]/20 bg-white rounded-3xl p-8 flex flex-col justify-between shadow-sm">
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-[#12967b]">
                <FaPalette className="text-xl" />
                <h3 className="font-bold text-lg text-cookie-dark">Custom Order Guidelines</h3>
              </div>
              
              <ul className="space-y-3 text-sm text-cookie-dark/80 font-light">
                <li className="flex items-start gap-2">
                  <span className="text-[#12967b] font-bold">•</span>
                  <span><strong>2 Dozen Minimum:</strong> Required for all initial custom bookings.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#12967b] font-bold">•</span>
                  <span><strong>Intricate Requests:</strong> Base prices may adjust upwards if your theme requires a high count of complex detail work, metallic metallics, or heavy color mixing palettes.</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 bg-cookie-pink/20 text-cookie-dark/90 text-xs rounded-xl p-4 font-light leading-normal">
              <strong>Have something specific in mind?</strong> We love bringing complex mood boards, custom invitation designs, and vibrant color configurations to life!
            </div>
          </div>

        </div>
      </section>

      {/* 3. STEP BY STEP PROCESS */}
      <section className="py-16 md:py-24 bg-[#fcfcfc] border-t border-b border-gray-100 mt-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-cookie-dark">How to Book Your Date</h2>
            <p className="mt-2 text-sm text-cookie-dark/60 font-light">
              Secure your spot on our baking schedule using these simple steps.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            
            {/* Step 1 */}
            <div className="text-center space-y-3 px-4 relative">
              <div className="w-16 h-16 bg-white shadow-md rounded-full text-xl text-[#12967b] flex items-center justify-center mx-auto border border-gray-100">
                <FaWpforms />
              </div>
              <h4 className="font-bold text-base text-cookie-dark">1. Fill the Form</h4>
              <p className="text-sm text-cookie-dark/60 font-light leading-relaxed">
                Take a moment to fill out our detailed order inquiry form with your chosen dates, quantity, and design ideas.
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center space-y-3 px-4 relative">
              <div className="w-16 h-16 bg-white shadow-md rounded-full text-xl text-[#12967b] flex items-center justify-center mx-auto border border-gray-100">
                <FaFileInvoiceDollar />
              </div>
              <h4 className="font-bold text-base text-cookie-dark">2. Get Your Quote</h4>
              <p className="text-sm text-cookie-dark/60 font-light leading-relaxed">
                I will review what you are looking for and email you a direct custom quote. Once accepted, I will generate your invoice.
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center space-y-3 px-4 relative">
              <div className="w-16 h-16 bg-white shadow-md rounded-full text-xl text-[#12967b] flex items-center justify-center mx-auto border border-gray-100">
                <FaCalendarCheck />
              </div>
              <h4 className="font-bold text-base text-cookie-dark">3. Secured & Baked</h4>
              <p className="text-sm text-cookie-dark/60 font-light leading-relaxed">
                Your order is officially locked onto my calendar as soon as your invoice has been fully paid.
              </p>
            </div>

          </div>

          {/* Central Call to Action */}
          <div className="mt-16 text-center">
            <Link
              href="/order"
              className="inline-flex items-center justify-center bg-[#12967b] text-white hover:bg-[#FCD4D4] hover:text-[#333333] px-10 py-4 rounded-full font-bold text-base tracking-wide transition-colors shadow-md"
            >
              Take a Moment to Fill Out the Order Form
            </Link>
          </div>

        </div>
      </section>

    </div>
  );
}