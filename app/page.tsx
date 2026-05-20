import Link from 'next/link';
import Image from 'next/image';
import { FaCookieBite, FaStar, FaBoxOpen } from 'react-icons/fa';

export default function HomePage() {
  return (
    <div className="w-full">
      
      {/* 1. HERO SECTOR */}
      <section 
        className="relative py-20 md:py-32 overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/cookies/cookies-aboutus.jpg')" }}
      >
        {/* Soft pink overlay to ensure text remains readable and matches brand */}
        <div className="absolute inset-0 z-0 bg-[#FCD4D4] opacity-100 md:opacity-75"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center z-10">
          
          {/* Left Column: Text Copy */}
          <div className="space-y-6 text-center md:text-left z-10">
            <span className="inline-block bg-cookie-pink/40 text-cookie-dark font-bold text-xs uppercase tracking-widest px-3 py-1 rounded-full">
              Freshly Baked Daily
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-cookie-dark leading-none">
              Decorated Sugar Cookies <br />
              <span className="text-cookie-teal">for all Occasions</span>
            </h1>
            <p className="text-lg text-cookie-dark/70 max-w-md mx-auto md:mx-0 font-light">
              Have you ever wondered how to make your event extra special? The answer is in beautifully decorated and delicious cookies.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row justify-center md:justify-start gap-4">
              <Link
                href="/order"
                className="bg-[#12967b] text-white hover:bg-[#FCD4D4] hover:text-[#333333] px-8 py-3.5 rounded-full font-bold shadow-md hover:shadow-lg transition-all text-center"
              >                Order Now
              </Link>
              <Link 
                href="/portfolio" 
                className="bg-white hover:bg-[#FCD4D4] border-2 border-[#12967b] hover:border-[#FCD4D4] text-[#12967b] hover:text-[#333333] px-8 py-3.5 rounded-full font-bold transition-all text-center"
              >
                View Portfolio
              </Link>
            </div>
          </div>

          {/* Right Column: Visual Brand Element */}
          <div className="flex justify-center items-center relative">
            {/* Soft pink decorative back-circle */}
            <div className="absolute w-72 h-72 sm:w-96 sm:h-96 bg-cookie-pink/40 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
            
            <div className="relative bg-white p-6 rounded-full shadow-xl border border-gray-100 max-w-[320px] sm:max-w-[400px]">
              <Image 
                src="/logo.png" 
                alt="Sweet Home Cookie Co. Big Display" 
                width={400} 
                height={400} 
                className="w-full h-auto object-contain"
                priority
              />
            </div>
          </div>

        </div>
      </section>

      {/* 2. THE SWEET EXPERIENCE (HIGHLIGHTS) */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-cookie-dark tracking-tight">
            Why Choose Sweet Home Cookie Co.?
          </h2>
          <p className="mt-2 text-cookie-dark/60 max-w-xl mx-auto font-light">
            Every batch is made using premium, locally sourced ingredients to bring you unforgettable flavor.
          </p>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8">
            {/* Highlight 1 */}
            <div className="p-6 bg-[#fafafa] rounded-2xl border border-gray-100 hover:border-cookie-pink/60 transition-colors">
              <div className="w-16 h-16 bg-cookie-pink/30 rounded-xl flex items-center justify-center text-4xl text-[#FCD4D4] mx-auto mb-4">
                <FaCookieBite />
              </div>
              <h3 className="font-bold text-lg text-cookie-dark">Custom Designs</h3>
              <p className="mt-2 text-sm text-cookie-dark/60 font-light">Tailored shapes and gorgeous royal icing custom art for any milestone or party theme.</p>
            </div>
            {/* Highlight 2 */}
            <div className="p-6 bg-[#fafafa] rounded-2xl border border-gray-100 hover:border-cookie-pink/60 transition-colors">
              <div className="w-16 h-16 bg-cookie-teal/20 rounded-xl flex items-center justify-center text-4xl text-[#FCD4D4] mx-auto mb-4">
                <FaStar />
              </div>
              <h3 className="font-bold text-lg text-cookie-dark">Premium Ingredients</h3>
              <p className="mt-2 text-sm text-cookie-dark/60 font-light">Real butter, pure vanilla extract, and high-quality chocolate blends in every single bite.</p>
            </div>
            {/* Highlight 3 */}
            <div className="p-6 bg-[#fafafa] rounded-2xl border border-gray-100 hover:border-cookie-pink/60 transition-colors">
              <div className="w-16 h-16 bg-cookie-pink/30 rounded-xl flex items-center justify-center text-4xl text-[#FCD4D4] mx-auto mb-4">
                <FaBoxOpen />
              </div>
              <h3 className="font-bold text-lg text-cookie-dark">Fresh to Order</h3>
              <p className="mt-2 text-sm text-cookie-dark/60 font-light">Baked fresh right before pickup or delivery to make sure you enjoy maximum freshness.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. QUICK PORTFOLIO TEASER */}
      <section className="py-16 bg-[#fcfcfc] border-t border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10">
            <div>
              <h2 className="text-3xl font-bold text-cookie-dark tracking-tight">Our Signature Creations</h2>
              <p className="mt-2 text-cookie-dark/60 font-light">A sneak peek of our favorite custom batches.</p>
            </div>
            <Link 
              href="/portfolio" 
              className="mt-4 sm:mt-0 text-sm font-bold text-cookie-teal hover:text-[#12967b] inline-flex items-center gap-1 group transition-colors"
            >
              See all cookies <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>

          {/* Signature cookie images */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { id: 1, src: '/images/cookies/wedding01.jpg', title: 'Elegant Wedding Set', desc: 'Custom Royal Icing' },
              { id: 2, src: '/images/cookies/baby01.jpg', title: 'Baby Shower Pastels', desc: 'Custom Royal Icing' },
              { id: 3, src: '/images/cookies/adult01.jpg', title: 'Birthday Celebration', desc: 'Custom Royal Icing' },
              { id: 4, src: '/images/cookies/bridal01.jpg', title: 'Bridal Shower', desc: 'Custom Royal Icing' },
            ].map((cookie) => (
              <div key={cookie.id} className="group relative bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="aspect-square relative overflow-hidden bg-cookie-pink/10">
                  <Image 
                    src={cookie.src}
                    alt={cookie.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                </div>
                <div className="p-4 bg-white">
                  <h4 className="font-bold text-cookie-dark">{cookie.title}</h4>
                  <p className="text-xs text-cookie-dark/50 mt-0.5">{cookie.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. FOOTER CALL TO ACTION */}
      <section className="py-16 bg-[#12967b] text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#16B595_1px,transparent_1px)] [background-size:16px_16px] opacity-10"></div>
        <div className="max-w-4xl mx-auto px-4 relative z-10 space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Ready to sweeten up your next event?</h2>
          <p className="text-white/70 max-w-md mx-auto font-light text-sm sm:text-base">
            Whether it is a birthday, corporate gathering, or holiday celebration, we can design the perfect set.
          </p>
          <div className="pt-2">
            <Link 
              href="/order" 
              className="inline-block border-2 border-white hover:border-[#FCD4D4] bg-[#12967b] hover:bg-[#FCD4D4] text-white hover:text-[#333333] px-8 py-3.5 rounded-full font-bold shadow-md transition-colors"
            >
              Place Your Order Request
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}