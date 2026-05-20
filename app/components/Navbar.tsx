import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  // Define the paths and labels dynamically to avoid code repetition
  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/pricing', label: 'Pricing' },
    { href: '/portfolio', label: 'Cookie Portfolio' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <header className="w-full bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Logo Branding */}
        <Link href="/" className="flex items-center gap-3 group">
          <Image 
            src="/logo.png" 
            alt="Sweet Home Cookie Co. Logo" 
            width={60} 
            height={60} 
            className="w-auto h-16 object-contain"
            priority
          />
        </Link>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 font-medium text-sm tracking-wide text-cookie-dark/80">
          {navLinks.map((link) => (
            <Link 
              key={link.href}
              href={link.href} 
              className="relative hover:text-[#12967b] transition-colors after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#12967b] after:transition-all hover:after:w-full"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Call To Action Button */}
        <div>
          <Link
            href="/order"
            className="inline-flex items-center justify-center bg-[#12967b] text-white hover:bg-[#FCD4D4] hover:text-[#333333] px-5 py-2.5 rounded-full font-bold text-sm tracking-wide shadow-sm transition-colors"
          >
            Order Now
          </Link>
        </div>

      </div>
    </header>
  );
}