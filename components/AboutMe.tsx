
import React from 'react';

const AboutMe: React.FC = () => {
  return (
    <div itemScope itemType="https://schema.org/AboutPage">
      {/* Journey Timeline - Compact horizontal layout */}
      <div className="flex items-center justify-between gap-3 mb-5 p-4 bg-gray-800/30 rounded-lg border border-gray-700/30">
        <div className="flex-1 text-center">
          <p className="text-xs text-gray-500 font-semibold uppercase mb-1">From</p>
          <p className="text-base font-bold text-gray-100">Google</p>
          <p className="text-xs text-gray-400">10 years</p>
        </div>

        <div className="flex-shrink-0">
          <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </div>

        <div className="flex-1 text-center">
          <p className="text-xs text-gray-500 font-semibold uppercase mb-1">To</p>
          <p className="text-base font-bold text-cyan-300">Indie Creator</p>
          <p className="text-xs text-gray-400">Building freely</p>
        </div>
      </div>

      {/* Core Values - Compact inline badges */}
      <div className="flex flex-wrap justify-center gap-2 mb-5">
        <div className="flex items-center gap-2 px-3 py-2 bg-gradient-to-br from-cyan-900/20 to-gray-800/20 rounded-full border border-cyan-400/20">
          <svg className="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span className="text-sm font-semibold text-cyan-300">Freedom</span>
        </div>

        <div className="flex items-center gap-2 px-3 py-2 bg-gradient-to-br from-cyan-900/20 to-gray-800/20 rounded-full border border-cyan-400/20">
          <svg className="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <span className="text-sm font-semibold text-cyan-300">Curiosity</span>
        </div>

        <div className="flex items-center gap-2 px-3 py-2 bg-gradient-to-br from-cyan-900/20 to-gray-800/20 rounded-full border border-cyan-400/20">
          <svg className="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span className="text-sm font-semibold text-cyan-300">Craft</span>
        </div>
      </div>

      {/* Mission Statement - More condensed */}
      <div className="p-4 bg-gray-800/50 rounded-lg border border-gray-700/50">
        <p className="text-gray-300 text-sm leading-relaxed" itemProp="description">
          After a decade at Google, I'm now an indie creator <span className="text-cyan-300 font-semibold">exploring ideas that excite me</span> and sharing the journey. Cultivating <span className="text-cyan-300 font-semibold">curiosity, empathy, and courage</span> - finding signal in the noise.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
