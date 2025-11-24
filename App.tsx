
import React from 'react';
import Hero from './components/Hero';
import Section from './components/Section';
import AboutMe from './components/AboutMe';
import ArticleCard from './components/ArticleCard';
import ProjectCard from './components/ProjectCard';
import Footer from './components/Footer';
import { GoogleAnalytics } from './components/GoogleAnalytics';
import { ARTICLES, PROJECTS, SOCIAL_LINKS } from './constants';
import type { Article, Project, SocialLink } from './types';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 font-sans">
      <GoogleAnalytics />
      <main>
        <Hero socialLinks={SOCIAL_LINKS} />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 pb-12">
          <Section title="About Me">
            <AboutMe />
          </Section>

          <Section title="Writings">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {ARTICLES.map((article: Article) => (
                <ArticleCard key={article.title} article={article} />
              ))}
            </div>
          </Section>

          <Section title="Projects">
            <div className="space-y-6">
              {PROJECTS.map((project: Project) => (
                <ProjectCard key={project.title} project={project} />
              ))}
            </div>
          </Section>
        </div>
      </main>

      <Footer socialLinks={SOCIAL_LINKS} />
    </div>
  );
};

export default App;
