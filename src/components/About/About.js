import React from 'react';
import AboutComponent from './AboutComponent';
import HelmetHOC from '../../hoc/Helmet/Helmet';
import ogHome from '../../assets/images/openGraph/ogHome.png';

const About = () => {
  let SEO = (
    <HelmetHOC
      title="About | Tim Kelly, Front-End Web Developer | timkelly.dev"
      description="Tim Kelly is a front-end web developer that creates beautiful, responsive websites with HTML, CSS, JavaScript and React. Tim has built websites for The Rambler Co And Evolutionary Tutors. Tim is available for freelance web development to a select client base."
      image={ogHome}
    />
  );

  return (
    <React.Fragment>
      {SEO}
      <AboutComponent />
    </React.Fragment>
  );
};

export default About;
