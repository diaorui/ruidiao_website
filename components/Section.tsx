
import React from 'react';

interface SectionProps {
  title: string;
  children: React.ReactNode;
  isWritings?: boolean;
}

const Section: React.FC<SectionProps> = ({ title, children, isWritings = false }) => {
  if (isWritings) {
    return (
      <section
        aria-labelledby={`section-${title.toLowerCase().replace(/\s+/g, '-')}`}
        className="hand-drawn-card parchment p-6"
      >
        <h2
          id={`section-${title.toLowerCase().replace(/\s+/g, '-')}`}
          className="text-3xl sm:text-4xl font-bold text-[#423224] mb-6 heading-readable"
        >
          {title}
        </h2>
        {children}
      </section>
    );
  }

  return (
    <section
      aria-labelledby={`section-${title.toLowerCase().replace(/\s+/g, '-')}`}
      className="hand-drawn-card parchment p-6"
    >
      <h2
        id={`section-${title.toLowerCase().replace(/\s+/g, '-')}`}
        className="text-3xl sm:text-4xl font-bold text-[#423224] mb-6 heading-readable"
      >
        {title}
      </h2>
      {children}
    </section>
  );
};

export default Section;
