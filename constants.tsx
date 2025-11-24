
import React from 'react';
import type { SocialLink, Article, Project } from './types';

const XIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const LinkedInIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

const SubstackIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24l10.54-7.532L22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z"/>
  </svg>
);

const LinkIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg viewBox="0 0 20 20" fill="currentColor" {...props}>
        <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
        <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
    </svg>
);

export const SOCIAL_LINKS: SocialLink[] = [
  { name: 'X', url: 'https://x.com/ruidiaox', icon: <XIcon className="h-9 w-9" /> },
  { name: 'LinkedIn', url: 'https://linkedin.com/in/ruidiao', icon: <LinkedInIcon className="h-9 w-9" /> },
  { name: 'Substack', url: 'https://ruidiao.substack.com', icon: <SubstackIcon className="h-9 w-9" /> },
];

export const ARTICLES: Article[] = [
  {
    title: 'Why I Left Google',
    description: 'Building a Life, Not Just Software. My personal story on transitioning from a decade at Google to a new chapter focused on freedom, curiosity, and craft.',
    url: 'https://ruidiao.substack.com/p/why-i-left-google?r=j5yr6&utm_campaign=post&utm_medium=web&showWelcomeOnShare=true',
  },
  {
    title: "The AI War Isn't About the Bombs. It's About the Railroads.",
    description: "Why AI supremacy won't be won by the best model, but by who controls the data, chips, and distribution. Google's decade of infrastructure investments might be unbeatable.",
    url: 'https://ruidiao.substack.com/p/the-ai-war-isnt-about-the-bombs-its?r=j5yr6&utm_campaign=post&utm_medium=web&showWelcomeOnShare=true',
  },
];

export const PROJECTS: Project[] = [
  {
    title: 'PeekDeck',
    description: 'A flexible dashboard generator that transforms YAML configurations into beautiful, static HTML dashboards. Monitor crypto prices, AI news, and more.',
    tech: ['Python', 'Jinja2', 'GitHub Actions', 'YAML'],
    primaryLink: { url: 'https://peekdeck.ruidiao.dev', label: 'View Dashboard' },
    links: [
      { url: 'https://github.com/diaorui/peek-deck', label: 'GitHub' },
    ],
  },
  {
    title: 'NanoCoffee',
    description: 'A Chrome extension that brings AI-powered features to social media. All processing happens on your device with no backend servers required.',
    tech: ['Chrome Extension', 'Gemini Nano', 'On-device AI', 'JavaScript'],
    primaryLink: { url: 'https://nanocoffee.ruidiao.dev', label: 'Website' },
    links: [
      { url: 'https://chromewebstore.google.com/detail/nanocoffee/imociajlipjlmiglmjkpkjmkkfbblmhk', label: 'Chrome Store' },
    ],
  },
  {
    title: 'QuoteSearch',
    description: 'A serverless, private, semantic search engine for over 400,000 quotes. It runs entirely in your browser using Transformers.js, demonstrating the power and privacy of on-device AI.',
    tech: ['Web AI', 'Transformers.js', 'React', 'Tailwind CSS'],
    primaryLink: { url: 'https://huggingface.co/spaces/ruidiao/QuoteSearch', label: 'Try It' },
    links: [
      { url: 'https://ruidiao.substack.com/p/i-built-a-serverless-ai-search-engine?r=j5yr6&utm_campaign=post&utm_medium=web&showWelcomeOnShare=true', label: 'Read the Story' },
    ],
  },
];
