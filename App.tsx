
import React from 'react';
import Hero from './components/Hero';
import Section from './components/Section';
import ArticleCard from './components/ArticleCard';
import ProjectCard from './components/ProjectCard';
import Footer from './components/Footer';
import { ARTICLES, PROJECTS, SOCIAL_LINKS } from './constants';
import type { Article, Project, SocialLink } from './types';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 font-sans">
      <main>
        <Hero socialLinks={SOCIAL_LINKS} />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20 pb-20">
          <Section title="About Me">
            <div className="space-y-4 text-gray-300 text-lg leading-relaxed" itemScope itemType="https://schema.org/AboutPage">
              <p itemProp="description">
                After a decade as a Senior Staff Software Engineer at Google, where my work revolved around optimization and building complex, centralized systems, I've embarked on a new journey. I'm now an indie creator, driven by a desire to build a life focused on freedom, curiosity, and craft.
              </p>
              <p>
                This transition was born from a realization that the skills of the future (curiosity, empathy, and the courage to start from a blank page) were the ones I wanted to cultivate. My focus has shifted from being a cog in a magnificent machine to becoming the architect of my own.
              </p>
              <p>
                My goal isn't to build the next big startup, but to explore ideas that genuinely excite me and to share that journey publicly. It's about finding the signal in the noise and reconnecting with the pure joy of creation.
              </p>
            </div>
          </Section>

          <Section title="Writings">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {ARTICLES.map((article: Article) => (
                <ArticleCard key={article.title} article={article} />
              ))}
            </div>
          </Section>
          
          <Section title="Projects">
            <div className="space-y-8">
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
