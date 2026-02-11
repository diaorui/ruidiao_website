
import React from 'react';

const AboutMe: React.FC = () => {
  return (
    <div itemScope itemType="https://schema.org/AboutPage">
      {/* Journey Timeline - Compact horizontal layout */}
      <div className="flex items-center justify-between gap-4 mb-5 p-5 hand-drawn-card parchment">
        <div className="flex-1 text-center">
          <p className="text-xs text-[#423224] font-bold uppercase tracking-wide mb-1">From</p>
          <p className="text-lg font-bold text-[#423224]">Google</p>
          <p className="text-sm text-[#423224]">10 years</p>
        </div>

        <div className="flex-shrink-0">
          <svg className="w-8 h-8 text-[#76C168]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </div>

        <div className="flex-1 text-center">
          <p className="text-xs text-[#423224] font-bold uppercase tracking-wide mb-1">To</p>
          <p className="text-lg font-bold text-[#423224]">Indie Creator</p>
          <p className="text-sm text-[#423224]">Building freely</p>
        </div>
      </div>

      {/* Core Values - Compact inline badges */}
      <div className="flex flex-wrap justify-center gap-3 mb-5">
        <div className="flex items-center gap-2 px-4 py-2.5 parchment wobbly-tag hover:scale-105 transition-transform">
          <svg className="w-5 h-5 text-[#76C168]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span className="text-base font-semibold text-[#423224]">Freedom</span>
        </div>

        <div className="flex items-center gap-2 px-4 py-2.5 parchment wobbly-tag hover:scale-105 transition-transform">
          <svg className="w-5 h-5 text-[#5FACD3]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <span className="text-base font-semibold text-[#423224]">Curiosity</span>
        </div>

        <div className="flex items-center gap-2 px-4 py-2.5 parchment wobbly-tag hover:scale-105 transition-transform">
          <svg className="w-5 h-5 text-[#FF9800]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span className="text-base font-semibold text-[#423224]">Craft</span>
        </div>
      </div>

      {/* Mission Statement - More condensed */}
      <div className="p-5 hand-drawn-card parchment">
        <p className="text-[#423224] text-base leading-relaxed text-readable" itemProp="description">
          After a decade at Google, I'm now an indie creator <span className="text-[#5FACD3] font-bold">exploring ideas that excite me</span> and sharing the journey. Cultivating <span className="text-[#76C168] font-bold">curiosity, empathy, and courage</span> — finding signal in the noise.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
