import React from 'react';
import HelmetHOC from '../../hoc/Helmet/Helmet';
import ogPortfolio from '../../assets/images/openGraph/ogPortfolio.png';
import PortfolioComponent from './PortfolioComponent';

const Portfolio = () => {
  let SEO = (
    <HelmetHOC
      title="Portfolio | Client Websites | Tim Kelly, Front-End Web Developer"
      description="Tim Kelly is a front-end web developer in Sydney, Australia. Tim creates beautiful, responsive websites with HTML, CSS, JavaScript and React. Tim has built websites for The Rambler Co And Evolutionary Tutors."
      image={ogPortfolio}
    />
  );

  return (
    <React.Fragment>
      {SEO}
      <PortfolioComponent />
    </React.Fragment>
  );
};

export default Portfolio;
