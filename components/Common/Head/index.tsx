import React from 'react';
import NextHead from 'next/head';

import { MetaData } from './model';

const siteTitle = 'KIM HYE WON PORTFOLIO';

const Head: React.FC<MetaData> = (props) => {
  const { title = '', description = '', url = process.env.HOSTNAME ?? '' } = props;
  const headTitle = `${siteTitle} ${title}`;

  return (
    <NextHead>
      <title>{headTitle}</title>
      <meta name="robots" content="index, nofollow" />
      <meta name="apple-mobile-web-app-title" content="KIM HYE WON PORTFOLIO" />
      <meta name="description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={headTitle} />
      <meta property="og:url" content={url} />
      <meta property="og:description" content={description} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={headTitle} />
      <meta name="twitter:description" content={description} />
    </NextHead>
  );
};

export default Head;
