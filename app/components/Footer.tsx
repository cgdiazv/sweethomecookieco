import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#12967b] text-white text-center relative overflow-hidden w-full">
      {/* Background Subtle Pattern Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(#16B595_1px,transparent_1px)] [background-size:16px_16px] opacity-10"></div>
      
      {/* Main Core Call to Action */}
      <div className="py-16 max-w-4xl mx-auto px-4 relative z-10 space-y-6">
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

      {/* Sub-Footer Meta Bar */}
      <div className="border-t border-white/20 py-6 relative z-10 bg-[#0e7761]/50">
        <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/70 text-sm">
            &copy; {new Date().getFullYear()} Sweet Home Cookie Co. All rights reserved.
          </p>
          <div className="flex gap-4 text-sm text-white/70">
            <a 
              href="https://indevasa.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Indeva Websites
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}