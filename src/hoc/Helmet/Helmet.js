import React from 'react';
import { Helmet } from 'react-helmet';
import { withRouter } from 'react-router-dom';

const HelmetHOC = (props) => {
  let imageMeta = null;

  if (props.image) {
    imageMeta = <meta property="og:image" content={props.image} />;
  }
  return (
    <Helmet>
      <title>{props.title}</title>
      <meta name="description" content={props.description} />
      <meta property="og:title" content={props.title} />
      <meta property="og:description" content={props.description} />
      <meta property="og:type" content="article" />
      <meta property="og:url" content={props.match.url} />
      {imageMeta}
      <meta name="twitter:card" value="summary" />
    </Helmet>
  );
};

export default withRouter(HelmetHOC);
