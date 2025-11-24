
import React from 'react';
import type { Project } from '../types';

const LinkIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg viewBox="0 0 20 20" fill="currentColor" {...props}>
        <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
        <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
    </svg>
);

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <article
      className="p-6 bg-gray-800/50 rounded-lg border border-gray-700/50 transition-all duration-300"
      itemScope
      itemType="https://schema.org/SoftwareApplication"
    >
      <h3 className="text-2xl font-bold text-gray-100" itemProp="name">{project.title}</h3>
      <p className="mt-3 text-gray-300 leading-relaxed" itemProp="description">{project.description}</p>
      <meta itemProp="url" content={project.liveUrl} />
      <meta itemProp="author" content="Rui Diao" />
      
      <div className="mt-4 flex flex-wrap gap-2">
        {project.tech.map((tech) => (
          <span key={tech} className="inline-block bg-cyan-900/50 text-cyan-300 text-xs font-medium px-2.5 py-1 rounded-full">
            {tech}
          </span>
        ))}
      </div>

      <div className="mt-6 flex items-center space-x-4">
        <a
          href={project.primaryLink.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 focus:ring-offset-gray-900"
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
            className="inline-flex items-center text-sm font-medium text-gray-300 hover:text-cyan-400"
          >
            {link.label}
          </a>
        ))}
      </div>
    </article>
  );
};

export default ProjectCard;
