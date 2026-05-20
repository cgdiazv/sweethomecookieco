"use client";

import { useState } from 'react';
import Image from 'next/image';

// Helper function to auto-populate image objects based on your exact file counts
const generatePortfolio = () => {
  const items = [];
  let id = 1;

  // Helper inside loop to pad single digits (e.g., 1 becomes '01')
  const pad = (num: number) => num.toString().padStart(2, '0');

  // 1. Adult Birthday (01 to 15)
  for (let i = 1; i <= 15; i++) {
    items.push({
      id: id++,
      src: `/images/cookies/adult${pad(i)}.jpg`,
      title: `Adult Birthday Design Set ${pad(i)}`,
      category: 'Adult birthday',
      desc: 'Beautifully detailed, custom themed sugar cookies tailored for celebratory milestone birthdays.'
    });
  }

  // 2. Baby Showers (01 to 09)
  for (let i = 1; i <= 9; i++) {
    items.push({
      id: id++,
      src: `/images/cookies/baby${pad(i)}.jpg`,
      title: `Baby Shower Pastels ${pad(i)}`,
      category: 'Baby showers',
      desc: 'Elegant, soft palette custom sets perfect for welcoming your sweet bundle of joy.'
    });
  }

  // 3. Back to School (01 to 10)
  for (let i = 1; i <= 10; i++) {
    items.push({
      id: id++,
      src: `/images/cookies/backto${pad(i)}.jpg`,
      title: `Back to School Set ${pad(i)}`,
      category: 'Back to school',
      desc: 'Fun and bright thematic designs celebrating students, teachers, and school milestones.'
    });
  }

  // 4. Bridal Showers (01 to 05)
  for (let i = 1; i <= 5; i++) {
    items.push({
      id: id++,
      src: `/images/cookies/bridal${pad(i)}.jpg`,
      title: `Bridal Shower Presentation ${pad(i)}`,
      category: 'Bridal showers',
      desc: 'Delicate floral textures and monogrammed designs tailored to match the bride-to-be.'
    });
  }

  // 5. Weddings (01 to 08)
  for (let i = 1; i <= 8; i++) {
    items.push({
      id: id++,
      src: `/images/cookies/wedding${pad(i)}.jpg`,
      title: `Wedding Celebration Suite ${pad(i)}`,
      category: 'Weddings',
      desc: 'High-end premium designs featuring intricate royal icing lace, fine stenciling, and gold accents.'
    });
  }

  return items;
};

const portfolioItems = generatePortfolio();

const categories = [
  'All',
  'Adult birthday',
  'Baby showers',
  'Back to school',
  'Bridal showers',
  'Weddings'
];

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredItems = selectedCategory === 'All'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === selectedCategory);

  return (
    <div className="w-full bg-white min-h-screen">
      
      {/* HEADER HERO BANNER */}
      <section className="bg-gradient-to-b from-cookie-pink/20 to-white py-12 md:py-20 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <span className="inline-block bg-[#12967b]/10 text-[#12967b] font-bold text-xs uppercase tracking-widest px-3 py-1 rounded-full mb-3">
            Our Gallery
          </span>
          <h1 className="text-4xl font-bold tracking-tight text-cookie-dark sm:text-5xl">
            The Cookie Portfolio
          </h1>
          <p className="mt-4 text-lg text-cookie-dark/70 font-light max-w-xl mx-auto">
            Browse through our custom sugar art collections built lovingly by category over the seasons.
          </p>
        </div>
      </section>

      {/* FILTER BUTTONS ROW */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        <div className="flex flex-wrap justify-center items-center gap-2 md:gap-3 border-b border-gray-100 pb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-5 py-2 rounded-full font-medium text-sm tracking-wide transition-all ${
                selectedCategory === category
                  ? 'bg-[#12967b] text-white shadow-sm'
                  : 'bg-[#fafafa] text-cookie-dark/70 hover:bg-cookie-pink/30 hover:text-cookie-dark'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* DYNAMIC PORTFOLIO GRID CONTAINER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {filteredItems.length === 0 ? (
          <div className="text-center py-20 text-cookie-dark/50 font-light">
            No custom cookies loaded inside this category setup yet!
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
            {filteredItems.map((item) => (
              <div 
                key={item.id} 
                className="group flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300"
              >
                {/* Image Wrap */}
                <div className="aspect-square relative overflow-hidden bg-cookie-pink/10 w-full">
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  {/* Category Pill Tag Overlay */}
                  <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-cookie-dark text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full shadow-sm">
                    {item.category}
                  </span>
                </div>

                {/* Info Block */}
                <div className="p-4 flex flex-col flex-grow justify-between border-t border-gray-50">
                  <div>
                    <h3 className="font-bold text-sm text-cookie-dark tracking-tight group-hover:text-[#12967b] transition-colors">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-xs text-cookie-dark/60 leading-relaxed font-light">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

    </div>
  );
}