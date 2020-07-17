import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { withRouter } from 'react-router-dom';

const HelmetHOC = (props) => {
  const canonical = 'https://timkelly.dev' + props.match.url;
  let imageMeta = null;

  if (props.image) {
    imageMeta = <meta property="og:image" content={props.image} />;
  }

  return (
    <Helmet>
      <title>{props.title}</title>
      <meta name="description" content={props.description} />
      <link rel="canonical" href={canonical} />
      <meta property="og:title" content={props.title} />
      <meta property="og:description" content={props.description} />
      <meta property="og:type" content="article" />
      <meta property="og:url" content={canonical} />
      {imageMeta}
      <meta name="twitter:card" value="summary" />
    </Helmet>
  );
};

HelmetHOC.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default withRouter(HelmetHOC);
