
import React from 'react';

interface SectionProps {
  title: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ title, children }) => {
  return (
    <section aria-labelledby={`section-${title.toLowerCase().replace(/\s+/g, '-')}`}>
      <h2
        id={`section-${title.toLowerCase().replace(/\s+/g, '-')}`}
        className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-6 border-l-4 border-cyan-400 pl-4"
      >
        {title}
      </h2>
      {children}
    </section>
  );
};

export default Section;
