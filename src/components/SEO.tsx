import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
}

const BASE_URL = 'https://ai-masterclass.dev';
const DEFAULT_TITLE = 'AI Masterclass — The Complete AI Guide for 2026';
const DEFAULT_DESC = 'Explore every major AI model and provider in 2026. In-depth essays, side-by-side comparisons, interactive playground, and expert recommendations.';

export const SEO: React.FC<SEOProps> = ({ title, description, path = '/', image }) => {
  const fullTitle = title ? `${title} | AI Masterclass` : DEFAULT_TITLE;
  const desc = description || DEFAULT_DESC;
  const url = `${BASE_URL}${path}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={desc} />
      <link rel="canonical" href={url} />
      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={desc} />
      <meta property="og:url" content={url} />
      {image && <meta property="og:image" content={image} />}
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={desc} />
    </Helmet>
  );
};
