import React from 'react';
import Head from 'next/head';

export default function SEO({
  description = "Nonprofit organisation",
  author = "William Aoun",
  meta,
  title = "Nonprofit organisation",
}) {
  const metaData = [
    {
      name: `esurplus`,
      content: description,
    },
    {
      property: `E-surplus`,
      content: title,
    },
    {
      property: `E-Surplus`,
      content: description,
    },
    {
      property: `og:type`,
      content: `website`,
    },
    {
      name: `twitter:card`,
      content: `summary`,
    },
    {
      name: `twitter:creator`,
      content: author,
    },
    {
      name: `twitter:title`,
      content: title,
    },
    {
      name: `twitter:description`,
      content: description,
    },
  ].concat(meta);
  
  return (
    <Head>
      <title>{title}</title>
      {metaData.map(({ name, content }, i) => (
        <meta key={i} name={name} content={content} />
      ))}
    </Head>
  );
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
};
