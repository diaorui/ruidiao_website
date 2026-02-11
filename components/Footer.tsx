
import React from 'react';
import type { SocialLink } from '../types';

interface FooterProps {
  socialLinks: SocialLink[];
}

const Footer: React.FC<FooterProps> = ({ socialLinks }) => {
  return (
    <footer className="bg-[#8B5A2B] border-t-4 border-[#423224] mt-12 relative z-10">
      <div className="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-[#FDF6E3] text-base font-semibold">
          &copy; {new Date().getFullYear()} Rui Diao. Built with curiosity & craft.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
