
import React from 'react';
import type { Article } from '../types';

interface ArticleCardProps {
  article: Article;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => {
  return (
    <article className="h-full">
      <a
        href={article.url}
        target="_blank"
        rel="noopener noreferrer"
        className="block h-full group p-6 bg-gray-800/50 rounded-lg border border-gray-700/50 hover:border-cyan-400/50 hover:bg-gray-800 transition-all duration-300 transform hover:-translate-y-1"
        itemScope
        itemType="https://schema.org/BlogPosting"
      >
        <h3
          className="text-xl font-bold text-gray-100 group-hover:text-cyan-400 transition-colors duration-300"
          itemProp="headline"
        >
          {article.title}
        </h3>
        <p className="mt-2 text-gray-400" itemProp="description">{article.description}</p>
        <meta itemProp="url" content={article.url} />
        <meta itemProp="author" content="Rui Diao" />
        <div className="mt-4 text-sm font-semibold text-cyan-400 group-hover:underline">
          Read More
        </div>
      </a>
    </article>
  );
};

export default ArticleCard;
