import React from 'react';

export const HeroVisual: React.FC = () => {
  return (
    <div className="relative w-full max-w-[720px] h-[520px] md:h-[580px] lg:h-[640px] select-none">
      {/* 1. Main Dark Midnight Card (#01081d) */}
      <div
        className="absolute bg-brand-dark transition-transform duration-300 hover:scale-[1.005]"
        style={{
          left: 'clamp(20px, 7.35vw, 106px)',
          top: 'clamp(30px, 10vh, 105px)',
          width: 'clamp(260px, 25vw, 359px)',
          height: 'clamp(320px, 30.5vw, 438px)',
        }}
      />

      {/* 2. Bowtie / Ribbon ASCII Art Sticker (Z-index 20: floats above the dark card) */}
      <div
        className="absolute z-20 pointer-events-none transition-transform duration-500 hover:scale-105"
        style={{
          left: 'clamp(220px, 26.4vw, 380px)',
          top: 'clamp(0px, 0.5vh, 0px)',
          width: 'clamp(120px, 11.8vw, 170px)',
          height: 'clamp(230px, 22.5vw, 324px)',
        }}
      >
        <img
          src="/stickers/bowtie.png"
          alt="ASCII Bowtie Sticker"
          className="w-full h-full object-contain drop-shadow-md select-none"
          draggable={false}
        />
      </div>

      {/* 3. Star Stickers (Z-index 30: pinned over the top-left corner of the dark card) */}
      <div
        className="absolute z-30 pointer-events-none transition-transform duration-300 hover:rotate-6"
        style={{
          left: 'clamp(0px, 5.6vw, 81px)',
          top: 'clamp(10px, 7vh, 71px)',
          width: 'clamp(55px, 5.3vw, 77px)',
          height: 'clamp(48px, 4.7vw, 68px)',
        }}
      >
        <img
          src="/stickers/stars.png"
          alt="Star Stickers"
          className="w-full h-full object-contain select-none"
          draggable={false}
        />
      </div>

      {/* 4. "i am a builder by <3" Badge (Z-index 30: overlaps right edge of dark card) */}
      <div
        className="absolute z-30 bg-brand-ice text-brand-navy flex items-center justify-center font-helvetica text-[17px] md:text-[18px] tracking-tight font-normal shadow-sm transition-transform duration-200 hover:-translate-y-0.5"
        style={{
          left: 'clamp(150px, 19.8vw, 285px)',
          top: 'clamp(160px, 21vh, 239px)',
          width: 'clamp(180px, 16.9vw, 243px)',
          height: 'clamp(44px, 3.8vw, 55px)',
        }}
      >
        <span>i am a builder by &lt;3</span>
      </div>

      {/* 5. Education Box (Z-index 25: overlaps bottom-right of dark card) */}
      <div
        className="absolute z-25 bg-brand-navy text-brand-ice font-helvetica flex flex-col justify-center px-6 md:px-7 py-4 shadow-md transition-transform duration-200 hover:translate-x-0.5"
        style={{
          left: 'clamp(220px, 28.25vw, 407px)',
          top: 'clamp(280px, 35vh, 386px)',
          width: 'clamp(220px, 21vw, 302px)',
          height: 'clamp(95px, 8.5vw, 122px)',
        }}
      >
        <div className="text-[17px] md:text-[18px] font-normal leading-tight mb-2.5 tracking-tight">
          + education:
        </div>
        <div className="text-[16px] md:text-[17px] font-normal leading-snug tracking-tight">
          ashoka university
        </div>
        <div className="text-[16px] md:text-[17px] font-normal leading-snug tracking-tight">
          computer sci + entrepreneurship
        </div>
      </div>
    </div>
  );
};
