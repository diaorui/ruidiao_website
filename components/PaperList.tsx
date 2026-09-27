import React from 'react';
import { SCHOLAR_URL } from '../constants';
import type { Paper } from '../types';

interface PaperListProps {
  papers: Paper[];
}

const PaperList: React.FC<PaperListProps> = ({ papers }) => {
  return (
    <div>
      <p className="text-[#423224] text-base leading-relaxed text-readable mb-5">
        A recent note on quasi-Newton methods, then doctoral work in mathematical optimization.
      </p>
      <ul className="space-y-4">
        {papers.map((paper) => (
          <li key={paper.title} className="border-t-2 border-[#8B5A2B]/30 pt-4 first:border-t-0 first:pt-0">
            <a
              href={paper.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg font-bold text-[#423224] hover:text-[#8B5A2B] underline decoration-[#8B5A2B]/40"
            >
              {paper.title}
            </a>
            <p className="mt-1 text-sm text-[#423224]">{paper.authors}</p>
            <p className="text-sm text-[#423224]">
              {paper.venue}
              {paper.links?.map((link) => (
                <React.Fragment key={link.url}>
                  {' · '}
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline decoration-[#8B5A2B]/40 hover:text-[#8B5A2B]"
                  >
                    {link.label}
                  </a>
                </React.Fragment>
              ))}
            </p>
          </li>
        ))}
      </ul>
      <p className="mt-5 text-base text-[#423224]">
        <a
          href={SCHOLAR_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold underline decoration-[#8B5A2B]/40 hover:text-[#8B5A2B]"
        >
          Full list on Google Scholar
        </a>
      </p>
    </div>
  );
};

export default PaperList;
