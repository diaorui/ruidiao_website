
import React from 'react';
import type { Article } from '../types';

interface ArticleCardProps {
  article: Article;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => {
  return (
    <article
      className="h-full flex flex-col p-6 hand-drawn-card parchment"
      itemScope
      itemType="https://schema.org/BlogPosting"
    >
      <h3
        className="text-xl font-bold text-[#423224] heading-readable"
        itemProp="headline"
      >
        {article.title}
      </h3>
      <p className="mt-3 text-[#423224] flex-grow text-base leading-relaxed text-readable" itemProp="description">{article.description}</p>
      <meta itemProp="url" content={article.url} />
      <meta itemProp="author" content="Rui Diao" />
      <a
        href={article.url}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-block px-6 py-3 bg-[#5FACD3] hover:bg-[#4A9ABD] text-white text-base font-semibold hand-drawn-btn text-center"
      >
        Read More →
      </a>
    </article>
  );
};

export default ArticleCard;
