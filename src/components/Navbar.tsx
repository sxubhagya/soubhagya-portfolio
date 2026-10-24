import React from 'react';

interface NavbarProps {
  activeTab?: string;
  onTabChange?: (tab: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeTab = 'work', onTabChange }) => {
  return (
    <header className="w-full max-w-[1440px] mx-auto px-8 md:px-16 lg:px-[81px] pt-10 md:pt-14 lg:pt-[60px] flex items-center justify-between select-none">
      {/* Name in Banto Medium */}
      <div className="font-banto text-white text-[19px] md:text-[21px] tracking-wide font-medium">
        Soubhagya Daspattanayak
      </div>

      {/* Nav Links in Helvetica Now Display */}
      <nav className="flex items-center gap-6 md:gap-8 font-helvetica text-[17px] md:text-[19px] font-normal tracking-tight">
        <button
          type="button"
          onClick={() => onTabChange?.('work')}
          className={`transition-colors duration-200 cursor-pointer bg-transparent border-0 p-0 ${
            activeTab === 'work'
              ? 'text-brand-ice hover:text-white'
              : 'text-brand-navy hover:text-brand-ice'
          }`}
        >
          work
        </button>
        <button
          type="button"
          onClick={() => onTabChange?.('about')}
          className={`transition-colors duration-200 cursor-pointer bg-transparent border-0 p-0 ${
            activeTab === 'about'
              ? 'text-brand-ice hover:text-white'
              : 'text-brand-navy hover:text-brand-ice'
          }`}
        >
          about
        </button>
        <button
          type="button"
          onClick={() => onTabChange?.('contact')}
          className={`transition-colors duration-200 cursor-pointer bg-transparent border-0 p-0 ${
            activeTab === 'contact'
              ? 'text-brand-ice hover:text-white'
              : 'text-brand-navy hover:text-brand-ice'
          }`}
        >
          contact
        </button>
      </nav>
    </header>
  );
};
