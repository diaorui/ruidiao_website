
import React from 'react';
import type { Article } from '../types';

interface ArticleCardProps {
  article: Article;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => {
  return (
    <article
      className="h-full flex flex-col p-5 bg-gray-800/50 rounded-lg border border-gray-700/50 hover:border-cyan-400/50 hover:bg-gray-800 transition-all duration-300"
      itemScope
      itemType="https://schema.org/BlogPosting"
    >
      <h3
        className="text-xl font-bold text-gray-100"
        itemProp="headline"
      >
        {article.title}
      </h3>
      <p className="mt-2 text-gray-400 flex-grow" itemProp="description">{article.description}</p>
      <meta itemProp="url" content={article.url} />
      <meta itemProp="author" content="Rui Diao" />
      <a
        href={article.url}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-block px-4 py-2 bg-cyan-600 hover:bg-cyan-500 text-white text-sm font-semibold rounded transition-colors duration-200 text-center"
      >
        Read More →
      </a>
    </article>
  );
};

export default ArticleCard;
