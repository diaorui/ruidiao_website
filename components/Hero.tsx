
import React from 'react';
import ruidiaoPng from '../ruidiao-ghibli.png';
import type { SocialLink } from '../types';

interface HeroProps {
  socialLinks: SocialLink[];
}

const Hero: React.FC<HeroProps> = ({ socialLinks }) => {
  const webpImage = new URL('../ruidiao-ghibli.webp', import.meta.url).href;
  const pngImage = new URL('../ruidiao-ghibli.png', import.meta.url).href;

  return (
    <div className="relative pt-16 pb-12 sm:pt-20 sm:pb-16 text-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <div className="relative">
          <picture>
            <source srcSet={webpImage} type="image/webp" />
            <img
              src={pngImage}
              alt="Rui Diao"
              className="h-32 w-32 object-cover border-4 border-[#8B5A2B] rounded-full shadow-lg parchment"
              style={{
                borderRadius: '255px 15px 225px 15px / 15px 225px 15px 255px',
                boxShadow: '5px 5px 0px rgba(66, 50, 36, 0.2)'
              }}
            />
          </picture>
        </div>
        <h1 className="mt-8 text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#423224] heading-readable">
          Rui Diao
        </h1>
        <p className="mt-5 max-w-2xl text-xl sm:text-2xl text-[#423224] leading-relaxed">
          Building a <strike className="text-[#5FACD3] font-semibold">software</strike> life driven by curiosity
        </p>
        <p className="mt-3 text-base sm:text-lg text-[#423224] font-medium">
          Indie Creator • Ex-Google Senior Staff Software Engineer
        </p>

        <div className="flex items-center justify-center space-x-8 mt-8">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#8B5A2B] hover:text-[#423224] transition-all duration-200 transform hover:scale-110 hover:-rotate-6"
              aria-label={link.name}
            >
              <div className="h-10 w-10">
                {React.cloneElement(link.icon as React.ReactElement, { className: 'h-10 w-10' })}
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
