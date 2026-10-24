import React, { useState, useEffect } from 'react';

export const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'work' | 'about' | 'contact'>('work');
  const [scale, setScale] = useState(1);
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    const updateDimensions = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      const desktop = w >= 1024;
      setIsDesktop(desktop);

      if (desktop) {
        const scaleFactor = Math.min(w / 1440, h / 810);
        setScale(Math.min(scaleFactor, 1.15));
      } else {
        setScale(1);
      }
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  return (
    <div className="min-h-screen w-full bg-brand-blue flex items-center justify-center overflow-x-hidden selection:bg-brand-ice selection:text-brand-dark">
      {/* 
        DESKTOP ARTBOARD VIEW:
        Active for screens >= 1024px.
        Maintains the exact 1440x810 pixel coordinates, fonts, and layering from the design PDF.
      */}
      {isDesktop ? (
        <div
          className="relative w-[1440px] h-[810px] shrink-0 overflow-hidden select-none"
          style={{
            transform: `scale(${scale})`,
            transformOrigin: 'center center',
          }}
        >
          {/* Header Name in Banto Medium */}
          <h1
            className="font-banto text-white text-[17.5px] font-medium tracking-wide absolute"
            style={{
              left: '81px',
              top: '64px',
            }}
          >
            Soubhagya Daspattanayak
          </h1>

          {/* Navigation in Helvetica Now Display */}
          <nav
            className="flex items-center gap-[24px] font-helvetica text-[17.5px] font-normal tracking-tight absolute"
            style={{
              left: '1158px',
              top: '64px',
            }}
          >
            <button
              type="button"
              onClick={() => setActiveTab('work')}
              className={`transition-colors duration-200 cursor-pointer bg-transparent border-0 p-0 text-[17.5px] ${
                activeTab === 'work'
                  ? 'text-brand-ice hover:text-white'
                  : 'text-brand-navy hover:text-brand-ice'
              }`}
            >
              work
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('about')}
              className={`transition-colors duration-200 cursor-pointer bg-transparent border-0 p-0 text-[17.5px] ${
                activeTab === 'about'
                  ? 'text-brand-ice hover:text-white'
                  : 'text-brand-navy hover:text-brand-ice'
              }`}
            >
              about
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('contact')}
              className={`transition-colors duration-200 cursor-pointer bg-transparent border-0 p-0 text-[17.5px] ${
                activeTab === 'contact'
                  ? 'text-brand-ice hover:text-white'
                  : 'text-brand-navy hover:text-brand-ice'
              }`}
            >
              contact
            </button>
          </nav>

          {/* 1. Dark Midnight Card (#01081d) - Styled as Polaroid Frame */}
          <div
            className="absolute bg-brand-dark rounded-none flex flex-col items-center pt-[16px] px-[16px] overflow-hidden shadow-lg transition-transform duration-300"
            style={{
              left: '106px',
              top: '203px',
              width: '359px',
              height: '438px',
            }}
          >
            {/* 
              Polaroid Photo Window:
              - Width: 327px (equal 16px borders on left/right)
              - Height: 348px (16px top border, leaving 74px ≈ 1.96cm bottom chin, not more than 2cm)
              - Restored original center crop and natural scale
            */}
            <div className="w-[327px] h-[348px] shrink-0 overflow-hidden bg-black/60 relative">
              <img
                src="/images/photo.jpg"
                alt="Portrait"
                className="w-full h-full object-cover object-center select-none"
                draggable={false}
              />
              {/* Subtle vintage photo surface sheen */}
              <div className="absolute inset-0 bg-gradient-to-tr from-black/10 via-transparent to-white/10 pointer-events-none" />
            </div>
          </div>

          {/* 2. Bowtie ASCII Sticker (Static as in original design) */}
          <div
            className="absolute z-20 pointer-events-none select-none"
            style={{
              left: '380px',
              top: '98px',
              width: '170px',
              height: '324px',
            }}
          >
            <img
              src="/stickers/bowtie.png"
              alt="ASCII Bowtie Sticker"
              className="w-full h-full object-contain pointer-events-none select-none"
              draggable={false}
            />
          </div>

          {/* 3. Star Stickers (Static as in original design) */}
          <div
            className="absolute z-30 pointer-events-none select-none"
            style={{
              left: '81px',
              top: '169px',
              width: '77px',
              height: '68px',
            }}
          >
            <img
              src="/stickers/stars.png"
              alt="Star Stickers"
              className="w-full h-full object-contain pointer-events-none select-none"
              draggable={false}
            />
          </div>

          {/* 4. "i am a builder by <3" Badge (Shifted ~1.5cm right to left: 342px) */}
          <div
            className="absolute z-30 bg-brand-ice text-brand-navy flex items-center justify-center font-helvetica text-[19px] font-normal tracking-tight select-none shadow-sm transition-transform duration-200 hover:-translate-y-0.5"
            style={{
              left: '342px',
              top: '337px',
              width: '243px',
              height: '55px',
            }}
          >
            <span>i am a builder by &lt;3</span>
          </div>

          {/* 5. Education Box (Wider & whitespace-nowrap to keep in single line) */}
          <div
            className="absolute z-25 bg-brand-navy text-brand-ice font-helvetica flex flex-col justify-start px-[18px] py-[16px] select-none shadow-sm transition-transform duration-200 hover:translate-x-0.5"
            style={{
              left: '407px',
              top: '484px',
              width: '330px',
              minWidth: '330px',
              height: '122px',
            }}
          >
            <div className="text-[18px] font-normal leading-[22px] mb-[14px] tracking-tight whitespace-nowrap">
              + education:
            </div>
            <div className="text-[18px] font-normal leading-[24px] tracking-tight whitespace-nowrap">
              ashoka university
            </div>
            <div className="text-[18px] font-normal leading-[24px] tracking-tight whitespace-nowrap">
              computer sci + entrepreneurship
            </div>
          </div>

          {/* 6. Bio Information Section */}
          <div
            className="absolute z-20 font-helvetica text-[20px] tracking-tight text-brand-ice select-text"
            style={{
              left: '736px',
              top: '314px',
            }}
          >
            {/* Line 1 */}
            <p className="font-normal leading-[37px] m-0 p-0">
              i’m soubhagya,
            </p>

            {/* Line 2 */}
            <p className="font-normal leading-[37px] m-0 p-0 flex items-baseline">
              <span className="mr-2 select-none">&gt;&gt;</span>
              <span>
                i currently work as an ai engineer{' '}
                <a
                  href="https://rediminds.com"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:underline cursor-pointer"
                >
                  @ rediminds
                </a>
              </span>
            </p>

            {/* Line 3 */}
            <p className="font-normal leading-[37px] m-0 p-0 flex items-baseline">
              <span className="mr-2 select-none">&gt;&gt;</span>
              <span>
                i also run a branding agency called{' '}
                <span className="hover:underline cursor-pointer">
                  ishara
                </span>
              </span>
            </p>

            {/* Line 4 */}
            <p className="font-normal leading-[37px] m-0 p-0 flex items-baseline text-brand-sky">
              <span className="mr-2 select-none">&gt;&gt;</span>
              <span>
                currently listening to{' '}
                <span className="hover:underline cursor-pointer">
                  rilkean heart by cocteau twins !!
                </span>
              </span>
            </p>
          </div>
        </div>
      ) : (
        /* 
          MOBILE / TABLET VIEW:
          Active for screens < 1024px.
          Clean stacked responsive presentation.
        */
        <div className="w-full max-w-lg min-h-screen flex flex-col justify-between px-6 py-8">
          <header className="flex items-center justify-between pb-6">
            <h1 className="font-banto text-white text-[18px] font-medium tracking-wide">
              Soubhagya Daspattanayak
            </h1>
            <nav className="flex items-center gap-5 font-helvetica text-[16px] font-normal tracking-tight">
              <button
                type="button"
                onClick={() => setActiveTab('work')}
                className={`transition-colors duration-200 cursor-pointer bg-transparent border-0 p-0 ${
                  activeTab === 'work' ? 'text-brand-ice' : 'text-brand-navy'
                }`}
              >
                work
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('about')}
                className={`transition-colors duration-200 cursor-pointer bg-transparent border-0 p-0 ${
                  activeTab === 'about' ? 'text-brand-ice' : 'text-brand-navy'
                }`}
              >
                about
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('contact')}
                className={`transition-colors duration-200 cursor-pointer bg-transparent border-0 p-0 ${
                  activeTab === 'contact' ? 'text-brand-ice' : 'text-brand-navy'
                }`}
              >
                contact
              </button>
            </nav>
          </header>

          <main className="flex-1 flex flex-col items-center justify-center my-6">
            <div className="relative w-[340px] h-[400px] mb-8">
              {/* Polaroid Frame in Mobile */}
              <div className="absolute left-[30px] top-[40px] w-[260px] h-[320px] bg-brand-dark pt-[12px] px-[12px] flex flex-col items-center">
                <div className="w-[236px] h-[254px] shrink-0 overflow-hidden bg-black/60 relative">
                  <img src="/images/photo.jpg" alt="Portrait" className="w-full h-full object-cover object-center" />
                </div>
              </div>
              {/* Bowtie */}
              <div className="absolute left-[190px] top-[0px] w-[130px] h-[250px] z-20 pointer-events-none">
                <img src="/stickers/bowtie.png" alt="Bowtie" className="w-full h-full object-contain" />
              </div>
              {/* Stars */}
              <div className="absolute left-[15px] top-[20px] w-[60px] h-[54px] z-30 pointer-events-none">
                <img src="/stickers/stars.png" alt="Stars" className="w-full h-full object-contain" />
              </div>
              {/* Builder Badge */}
              <div className="absolute left-[155px] top-[140px] w-[180px] h-[45px] z-30 bg-brand-ice text-brand-navy flex items-center justify-center font-helvetica text-[15px]">
                i am a builder by &lt;3
              </div>
              {/* Education Box */}
              <div className="absolute left-[160px] top-[240px] w-auto min-w-[175px] z-25 bg-brand-navy text-brand-ice font-helvetica p-4 text-[13px] whitespace-nowrap">
                <div className="font-normal mb-1">+ education:</div>
                <div className="font-normal">ashoka university</div>
                <div className="font-normal text-[12px]">computer sci + entrepreneurship</div>
              </div>
            </div>

            <div className="w-full font-helvetica text-[16px] tracking-tight text-brand-ice px-2">
              <p className="mb-4">i’m soubhagya,</p>
              <p className="mb-3 flex items-baseline">
                <span className="mr-2">&gt;&gt;</span>
                <span>i currently work as an ai engineer @ rediminds</span>
              </p>
              <p className="mb-3 flex items-baseline">
                <span className="mr-2">&gt;&gt;</span>
                <span>i also run a branding agency called ishara</span>
              </p>
              <p className="flex items-baseline text-brand-sky">
                <span className="mr-2">&gt;&gt;</span>
                <span>currently listening to rilkean heart by cocteau twins !!</span>
              </p>
            </div>
          </main>

          <footer className="h-4" />
        </div>
      )}
    </div>
  );
};

export default App;
