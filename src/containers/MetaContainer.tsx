import React from 'react';
import { Helmet } from 'react-helmet-async';

const MetaContainer = () => {
  return (
    <Helmet>
      <title>쇼미더럭키밈 - 말대꾸 짤 생성기</title>
      <meta name="description" content="쇼미더럭키밈 - 짤 생성기" />
      <meta
        property="og:url"
        content="https://show-me-the-lucky-meme.vercel.app/"
      />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="쇼미더럭키밈" />
      <meta property="og:description" content="쇼미더럭키밈 - 짤 생성기" />
      <meta
        property="og:image"
        content="https://raw.githubusercontent.com/CaesiumY/show-me-the-lucky-meme/main/public/images/crop.png"
      />
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        property="twitter:domain"
        content="show-me-the-lucky-meme.vercel.app"
      />
      <meta
        property="twitter:url"
        content="https://show-me-the-lucky-meme.vercel.app/"
      />
      <meta name="twitter:title" content="쇼미더럭키밈" />
      <meta name="twitter:description" content="쇼미더럭키밈 - 짤 생성기" />
      <meta
        name="twitter:image"
        content="https://raw.githubusercontent.com/CaesiumY/show-me-the-lucky-meme/main/public/images/crop.png"
      />
      <link rel="canonical" href="https://show-me-the-lucky-meme.vercel.app/" />
    </Helmet>
  );
};

export default MetaContainer;
