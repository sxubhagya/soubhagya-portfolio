import React from 'react';

export const BioSection: React.FC = () => {
  return (
    <div className="flex flex-col justify-center font-helvetica text-[18px] md:text-[20px] lg:text-[21px] leading-relaxed tracking-tight text-brand-ice select-text">
      {/* Salutation */}
      <p className="mb-6 md:mb-7 font-normal">
        i’m soubhagya,
      </p>

      {/* Bullet Lines */}
      <div className="space-y-3.5 md:space-y-4">
        <p className="flex items-baseline gap-2.5">
          <span className="opacity-90 select-none">&gt;&gt;</span>
          <span>
            i currently work as an ai engineer{' '}
            <span className="hover:underline cursor-pointer">@ rediminds</span>
          </span>
        </p>

        <p className="flex items-baseline gap-2.5">
          <span className="opacity-90 select-none">&gt;&gt;</span>
          <span>
            i also run a branding agency called{' '}
            <span className="hover:underline cursor-pointer">ishara</span>
          </span>
        </p>

        <p className="flex items-baseline gap-2.5 text-brand-sky">
          <span className="opacity-90 select-none">&gt;&gt;</span>
          <span>
            currently listening to{' '}
            <span className="hover:underline cursor-pointer">
              rilkean heart by cocteau twins !!
            </span>
          </span>
        </p>
      </div>
    </div>
  );
};
