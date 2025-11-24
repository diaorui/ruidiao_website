
import React from 'react';
import type { SocialLink } from '../types';

interface FooterProps {
  socialLinks: SocialLink[];
}

const Footer: React.FC<FooterProps> = ({ socialLinks }) => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-4xl mx-auto py-6 px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Rui Diao. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
