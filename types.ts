
import React from 'react';

export interface SocialLink {
  name: string;
  url: string;
  icon: React.ReactElement;
}

export interface Article {
  title: string;
  description: string;
  url: string;
}

export interface Project {
  title: string;
  description: string;
  tech: string[];
  liveUrl: string;
  blogUrl?: string;
}
