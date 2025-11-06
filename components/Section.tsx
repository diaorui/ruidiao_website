
import React from 'react';

interface SectionProps {
  title: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ title, children }) => {
  return (
    <section>
      <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-8 border-l-4 border-cyan-400 pl-4">
        {title}
      </h2>
      {children}
    </section>
  );
};

export default Section;
