import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import ContentContainer from '../../Utility/ContentContainer/ContentContainer';
import Animate from '../../Utility/Animate/Animate';
import style from './NotFoundPage.module.css';

const NotFoundPage = () => {
  const SEO = (
    <Helmet>
      <title>Page Not Found | 404 Error</title>
      <meta name="robots" content="noindex" />
    </Helmet>
  );

  return (
    <React.Fragment>
      {SEO}
      <ContentContainer>
        <Animate delayTitle>
          <h1 className={style.bigText}>Page Not Found</h1>
        </Animate>
        <Animate delayContent>
          <p>
            Back to <Link to="/">timkelly.dev</Link>
          </p>
        </Animate>
      </ContentContainer>
    </React.Fragment>
  );
};

export default NotFoundPage;
