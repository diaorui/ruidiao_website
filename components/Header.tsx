
import React from 'react';
import type { SocialLink } from '../types';

interface HeaderProps {
  socialLinks: SocialLink[];
}

const Header: React.FC<HeaderProps> = ({ socialLinks }) => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-gray-900/80 backdrop-blur-sm z-50 border-b border-gray-700/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="text-xl font-bold tracking-tight text-white">
            Rui Diao
          </div>
          <nav className="flex items-center space-x-4">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyan-400 transition-colors duration-200"
                aria-label={link.name}
              >
                {link.icon}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
