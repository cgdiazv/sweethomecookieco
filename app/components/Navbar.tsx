"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FiMenu, FiX } from 'react-icons/fi';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
        <Link href="/" className="flex items-center gap-3 group" onClick={() => setIsMenuOpen(false)}>
          <Image 
            src="/logo.png" 
            alt="Sweet Home Cookie Co. Logo" 
            width={60} 
            height={60} 
            className="w-auto h-16 object-contain"
            priority
          />
        </Link>

        {/* Desktop Navigation Links */}
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

        {/* Right Section: Call To Action Button & Mobile Menu Trigger */}
        <div className="flex items-center gap-4">
          <Link
            href="/order"
            className="hidden sm:inline-flex items-center justify-center bg-[#12967b] text-white hover:bg-[#FCD4D4] hover:text-[#333333] px-5 py-2.5 rounded-full font-bold text-sm tracking-wide shadow-sm transition-colors"
          >
            Order Now
          </Link>
          
          <button 
            className="md:hidden p-2 -mr-2 text-2xl text-gray-700 hover:text-[#12967b] transition-colors focus:outline-none"
            onClick={() => setIsMenuOpen(true)}
            aria-label="Open mobile menu"
          >
            <FiMenu />
          </button>
        </div>

      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/30 z-[60] md:hidden transition-opacity"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Mobile Sliding Drawer */}
      <div 
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-2xl z-[70] transform transition-transform duration-300 ease-in-out md:hidden flex flex-col ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b border-gray-100 h-20">
          <Link href="/" className="flex items-center gap-2" onClick={() => setIsMenuOpen(false)}>
            <Image 
              src="/logo.png" 
              alt="Sweet Home Cookie Co. Logo" 
              width={50} 
              height={50} 
              className="w-auto h-12 object-contain"
            />
          </Link>
          <button 
            className="text-2xl p-2 -mr-2 text-gray-700 hover:text-[#12967b] transition-colors focus:outline-none"
            onClick={() => setIsMenuOpen(false)}
            aria-label="Close mobile menu"
          >
            <FiX />
          </button>
        </div>
        
        <nav className="flex flex-col gap-6 p-6 overflow-y-auto">
          {navLinks.map((link) => (
            <Link 
              key={link.href}
              href={link.href} 
              onClick={() => setIsMenuOpen(false)}
              className="text-lg font-medium text-gray-800 hover:text-[#12967b] transition-colors"
            >
              {link.label}
            </Link>
          ))}
          
          <div className="mt-4 pt-6 border-t border-gray-100 sm:hidden">
            <Link
              href="/order"
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center justify-center w-full bg-[#12967b] text-white hover:bg-[#FCD4D4] hover:text-[#333333] px-5 py-3 rounded-full font-bold text-base tracking-wide shadow-sm transition-colors text-center"
            >
              Order Now
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
