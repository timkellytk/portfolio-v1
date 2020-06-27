import React from 'react';
import HelmetHOC from '../../hoc/Helmet/Helmet';
import ogPortfolio from '../../assets/images/openGraph/ogPortfolio.png';
import Animate from '../Utility/Animate/Animate';
import ContentContainer from '../Utility/ContentContainer/ContentContainer';
import TheOdinProject from './TheOdinProject/TheOdinProject';

const Portfolio = () => {
  return (
    <React.Fragment>
      <HelmetHOC
        title="Portfolio | Client Websites | Tim Kelly, Front-End Web Developer"
        description="Tim Kelly is a front-end web developer in Sydney, Australia. Tim creates beautiful, responsive websites with HTML, CSS, JavaScript and React. Tim has built websites for The Rambler Co And Evolutionary Tutors."
        image={ogPortfolio}
      />
      <Animate delayTitle>
        <ContentContainer>
          <h1>Web Development Portfolio</h1>
          <p>
            A collection of websites built for real-world clients and hobby
            projects to learn the latest technologies.
          </p>
        </ContentContainer>
      </Animate>
      <Animate delayContent>
        <TheOdinProject />
      </Animate>
    </React.Fragment>
  );
};

export default Portfolio;
