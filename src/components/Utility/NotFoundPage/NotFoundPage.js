import React from 'react';
import { Helmet } from 'react-helmet';

const NotFoundPage = () => {
  return (
    <React.Fragment>
      <Helmet>
        <title>Page Not Found | 404 Error</title>
        <meta name="robots" content="noindex" />
      </Helmet>
      <div>Page not found</div>;
    </React.Fragment>
  );
};

export default NotFoundPage;
