import React from 'react';
import { Helmet } from 'react-helmet-async';

const MetaContainer = () => {
  return (
    <Helmet>
      <title>쇼미더럭키밈</title>
      <meta property="og:title" content="쇼미더럭키밈" />
      <meta property="og:type" content="website" />
      <meta property="og:description" content="쇼미더럭키밈 - 짤 생성기" />
      <meta property="og:image" content="/images/crop.png" />
      <meta property="og:image:alt" content="말대꾸 짤" />
      <meta property="og:image:width" content="848" />
      <meta property="og:image:height" content="561" />
      <meta name="twitter:title" content="쇼미더럭키밈" />
      <meta name="twitter:type" content="website" />
      <meta name="twitter:description" content="쇼미더럭키밈 - 짤 생성기" />
      <meta name="twitter:image" content="/images/crop.png" />
      <meta name="twitter:image:alt" content="말대꾸 짤" />
      <meta name="twitter:image:width" content="848" />
      <meta name="twitter:image:height" content="561" />
    </Helmet>
  );
};

export default MetaContainer;
