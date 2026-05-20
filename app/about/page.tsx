import Image from 'next/image';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="w-full">
      {/* 1. HEADER HERO BANNER */}
      <section className="bg-gradient-to-b from-cookie-pink/20 to-white py-12 md:py-20 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <span className="inline-block bg-[#12967b]/10 text-[#12967b] font-bold text-xs uppercase tracking-widest px-3 py-1 rounded-full mb-3">
            Our Story
          </span>
          <h1 className="text-4xl font-bold tracking-tight text-cookie-dark sm:text-5xl">
            Behind the Sweetness
          </h1>
          <p className="mt-4 text-lg text-cookie-dark/70 font-light">
            Crafting custom confectionery moments that bring joy, elegance, and incredible flavor to your kitchen table.
          </p>
        </div>
      </section>

      {/* 2. THE STORY SPLIT SECTION */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Left Side: Brand Story Image */}
          <div className="relative aspect-[4/3] md:aspect-square w-full rounded-2xl overflow-hidden shadow-md bg-cookie-pink/10">
            <Image
              src="/images/cookies/cookies-family.jpg"
              alt="Baking fresh decorated sugar cookies in the kitchen"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>

          {/* Right Side: Backstory Copy & Personal Quote */}
          <div className="space-y-6 text-cookie-dark">
            <h2 className="text-3xl font-bold tracking-tight">
              Where Homemade Passion <br />
              <span className="text-[#12967b]">Meets Edible Art</span>
            </h2>
            
            {/* Your Featured Personal Story */}
            <div className="relative bg-[#fafafa] border-l-4 border-[#12967b] p-6 rounded-r-2xl my-6 italic text-cookie-dark/80 font-light leading-relaxed">
              <p className="mb-3">
                &ldquo;After 5 years of decorating sugar cookies for my own children’s birthday parties and events, Sweet Home Cookie Co. was born in January of 2018. I had been told over and over throughout the years that I should sell my cookies but had always replied, &lsquo;No! Then it would feel like work!&rsquo;&rdquo;
              </p>
              <p className="font-medium text-[#12967b] not-italic">
                Well, who knew that work could be so fun?
              </p>
            </div>

            <p className="text-base text-cookie-dark/70 leading-relaxed font-light">
              At Sweet Home Cookie Co., our kitchen is fueled by a simple belief: a custom cookie shouldn’t just look like a masterpiece—it should taste completely unforgettable, too. What started as a dedicated family tradition has blossomed into a boutique design canvas specializing in premium royal icing sugar art.
            </p>
            
            <p className="text-base text-cookie-dark/70 leading-relaxed font-light">
              Every single batch we create is hand-rolled, precisely cut, and delicately detailed right down to the final micro-piped edge. We treat every order as a signature presentation piece tailored entirely to the unique spirit of your celebration.
            </p>
          </div>

        </div>
      </section>

      {/* 3. CTA TRICKLE SECTOR */}
      <section className="bg-[#fcfcfc] py-16 text-center border-t border-gray-100">
        <div className="max-w-xl mx-auto px-4 space-y-4">
          <h3 className="text-2xl font-bold text-cookie-dark">Want to see what we have built before?</h3>
          <p className="text-sm text-cookie-dark/60 font-light">
            Take a deep dive into our dynamic photo galleries categorized across showers, anniversaries, and milestones.
          </p>
          <div className="pt-2">
            <Link
              href="/portfolio"
              className="inline-flex items-center justify-center bg-[#12967b] text-white hover:bg-[#FCD4D4] hover:text-[#333333] px-6 py-3 rounded-full font-bold text-sm tracking-wide transition-colors shadow-sm"
            >
              Explore the Cookie Portfolio
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}