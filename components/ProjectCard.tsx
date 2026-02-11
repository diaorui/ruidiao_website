
import React from 'react';
import type { Project } from '../types';

const LinkIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg viewBox="0 0 20 20" fill="currentColor" {...props} className="h-4 w-4">
        <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
        <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
    </svg>
);

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <article
      className="p-6 hand-drawn-card parchment"
      itemScope
      itemType="https://schema.org/SoftwareApplication"
    >
      <h3 className="text-2xl font-bold text-[#423224] heading-readable" itemProp="name">{project.title}</h3>
      <p className="mt-3 text-[#423224] leading-relaxed text-base text-readable" itemProp="description">{project.description}</p>
      <meta itemProp="url" content={project.primaryLink.url} />
      <meta itemProp="author" content="Rui Diao" />

      <div className="mt-4 flex flex-wrap gap-2">
        {project.tech.map((tech) => (
          <span key={tech} className="inline-block parchment wobbly-tag text-[#423224] text-sm font-semibold px-3 py-1.5">
            {tech}
          </span>
        ))}
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-3">
        <a
          href={project.primaryLink.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-white hand-drawn-btn bg-[#FF9800] hover:bg-[#F57C00]"
          itemProp="url"
        >
          {project.primaryLink.label}
          <LinkIcon className="ml-2 -mr-1 h-4 w-4" />
        </a>
        {project.links?.map((link) => (
          <a
            key={link.url}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-4 py-3 parchment wobbly-tag text-base font-medium text-[#423224] hover:text-[#5FACD3] hover:scale-105 transition-all"
          >
            {link.label}
            <LinkIcon className="ml-1.5 -mr-0.5 h-3.5 w-3.5" />
          </a>
        ))}
      </div>
    </article>
  );
};

export default ProjectCard;
