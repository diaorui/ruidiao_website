
import React from 'react';
import ruidiaoPng from '../ruidiao.png';
import type { SocialLink } from '../types';

interface HeroProps {
  socialLinks: SocialLink[];
}

const Hero: React.FC<HeroProps> = ({ socialLinks }) => {
  return (
    <div className="relative pt-24 pb-20 sm:pt-32 sm:pb-28 text-center bg-gray-800 overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center opacity-10" style={{ backgroundImage: "url('https://picsum.photos/seed/tech/1200/400')" }}></div>
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-900/80 to-gray-900"></div>
      
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <img
          src={ruidiaoPng}
          alt="Rui Diao"
          className="h-32 w-32 rounded-full ring-4 ring-gray-700 object-cover"
        />
        <h1 className="mt-8 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
          Rui Diao
        </h1>
        <p className="mt-4 max-w-2xl text-lg sm:text-xl text-cyan-300">
          Building a <strike>software</strike> life driven by curiosity.
        </p>
        <p className="mt-2 text-sm sm:text-md text-gray-400">
          Indie Creator • Ex-Google Senior Staff Software Engineer
        </p>

        <div className="flex items-center justify-center space-x-6 mt-8">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyan-400 transition-colors duration-200 transform hover:scale-110"
              aria-label={link.name}
            >
              <div className="h-9 w-9">
                {link.icon}
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
