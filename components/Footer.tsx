
import React from 'react';
import type { SocialLink } from '../types';

interface FooterProps {
  socialLinks: SocialLink[];
}

const Footer: React.FC<FooterProps> = ({ socialLinks }) => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex justify-center space-x-6 mb-4">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyan-400 transition-colors duration-200"
              aria-label={link.name}
            >
              {React.cloneElement(link.icon, { className: 'h-6 w-6' })}
            </a>
          ))}
        </div>
        <p className="text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Rui Diao. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
